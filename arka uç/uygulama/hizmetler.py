from sqlalchemy.orm import Session
from . import models
from .constants import CERH_VE_TADIL_SKOR_HARITASI

def hesapla_ravi_skorlari(db: Session, ravi: models.Ravi) -> dict:
    """
    Bir râvinin veritabanındaki cerh ve ta'dil kayıtlarına göre ortalama
    güvenilirlik skorunu hesaplar.
    """
    gorusler = ravi.gorusler
    
    if not gorusler:
        # Eğer râvi hakkında hiçbir görüş yoksa, belirsiz veya ortalama bir
        # skor döndürülebilir. Bu, projenin mantığına göre belirlenir.
        return {"adalet_skoru": 0.5, "dabt_skoru": 0.5, "gorus_sayisi": 0}

    toplam_skor = 0
    gecerli_gorus_sayisi = 0

    for gorus in gorusler:
        # Alimin ifadesini küçük harfe çevirip standart bir anahtar elde ediyoruz.
        ifade_anahtari = gorus.ifade.lower().strip()
        
        # Terim-Puan haritamızda bu ifadenin bir karşılığı var mı?
        skor = CERH_VE_TADIL_SKOR_HARITASI.get(ifade_anahtari)
        
        if skor is not None:
            toplam_skor += skor
            gecerli_gorus_sayisi += 1
            
    if gecerli_gorus_sayisi == 0:
        return {"adalet_skoru": 0.5, "dabt_skoru": 0.5, "gorus_sayisi": 0}

    # Basit bir aritmetik ortalama alıyoruz.
    # Gelecekte, alimlerin otoritesine göre "ağırlıklı ortalama" da alınabilir.
    ortalama_skor = toplam_skor / gecerli_gorus_sayisi
    
    # Şimdilik adalet ve dabt skorunu aynı kabul ediyoruz.
    # Daha karmaşık bir modelde bu ikisi ayrı ayrı hesaplanabilir.
    return {
        "adalet_skoru": round(ortalama_skor, 3),
        "dabt_skoru": round(ortalama_skor, 3),
        "gorus_sayisi": gecerli_gorus_sayisi
    }
# backend/app/services.py
import math
from sqlalchemy.orm import Session
from . import models, crud
from .constants import HUKUM_ESIKLERI
from .services import hesapla_ravi_skorlari # Mevcut skorlama fonksiyonunuz

def siniflandir_hadis(db: Session, hadis_id: int) -> dict:
    """
    Bir hadisin tüm rivayet yollarını (tarikler) analiz ederek
    nihai sıhhat hükmünü ve skorunu hesaplar.
    """
    # Adım a: Hadisi tüm detaylarıyla (zincirler ve râviler) çek
    hadis = crud.get_hadis_with_details(db, hadis_id=hadis_id)
    if not hadis:
        return {"hata": "Hadis bulunamadı"}

    # Zincirleri gruplayalım (birden fazla zincir olabilir)
    # Bu kısım veritabanı yapınıza göre daha karmaşık olabilir, şimdilik tek zincir varsayalım
    # Gerçek bir modelde, aynı hadis_id'ye ait zincirleri gruplamanız gerekir.
    # Bu prototipte, tüm RivayetZinciri kayıtlarının tek bir zincir olduğunu varsayıyoruz.
    
    isnad = sorted(hadis.zincirler, key=lambda z: z.sira_no)
    if not isnad:
        return {"hukum": "ZAYIF", "nihai_skor": 0.0, "sebep": "İsnad bulunamadı"}
        
    # Adım b & c: İsnadın toplam güvenilirlik olasılığını hesapla
    zincir_olasiligi = 1.0
    zincir_detaylari = []

    for zincir_halkasi in isnad:
        ravi = zincir_halkasi.ravi
        skorlar = hesapla_ravi_skorlari(db, ravi=ravi)
        
        # Adalet ve dabt skorunun ortalamasını alabiliriz veya sadece birini kullanabiliriz
        ravi_skoru = (skorlar["adalet_skoru"] + skorlar["dabt_skoru"]) / 2
        
        zincir_olasiligi *= ravi_skoru
        zincir_detaylari.append({"ravi": ravi.isim, "skor": round(ravi_skoru, 3)})

    # Adım d: Farklı isnadlardan gelen gücü birleştir
    # Şu anki modelimiz tek zincir üzerine, eğer birden çok zincir olsaydı,
    # nihai_skor = 1 - (1 - P1) * (1 - P2) * ... formülü kullanılırdı.
    # Şimdilik, tek zincirimizin olasılığı nihai skorumuzdur.
    nihai_skor = zincir_olasiligi

    # Adım e: Nihai skora göre hükmü belirle
    hukum = "ÇOK ZAYIF" # Varsayılan
    if nihai_skor >= HUKUM_ESIKLERI["SAHİH"]:
        hukum = "SAHİH"
    elif nihai_skor >= HUKUM_ESIKLERI["HASEN"]:
        hukum = "HASEN"
    elif nihai_skor >= HUKUM_ESIKLERI["ZAYIF"]:
        hukum = "ZAYIF"

    return {
        "hadis_metni": hadis.metin,
        "hukum": hukum,
        "nihai_skor": round(nihai_skor, 4),
        "zincir_detaylari": zincir_detaylari
    }

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

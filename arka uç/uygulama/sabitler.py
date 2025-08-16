# Bu harita, farklı alimlerin kullandığı ifadeleri standart bir skora çevirir.
# Puanlar 0.0 (tamamen güvenilmez) ile 1.0 (mükemmel güvenilir) arasındadır.
# Bu değerler, akademik araştırmalara dayalı olarak daha da hassaslaştırılabilir.

CERH_VE_TADIL_SKOR_HARITASI = {
    # 1. Sınıf Ta'dil (En Güçlü Güvenilirlik)
    "evsekunnas": 1.0,
    "sika sika": 0.98,
    "sika sikatun": 0.98,
    "sika mutkin": 0.97,

    # 2. Sınıf Ta'dil (Güçlü Güvenilirlik)
    "sika": 0.95,
    "hüccet": 0.92,
    "adl": 0.90,

    # 3. Sınıf Ta'dil (Orta Güvenilirlik - Hadisi Hasen seviyesinde)
    "saduk": 0.85,
    "leyse bihi be's": 0.80,
    "mahaluhu's-sıdk": 0.75,

    # 4. Sınıf (Kabul Edilebilir - Destekleyici rivayetlerle güçlenir)
    "şeyh": 0.65,
    "salihu'l-hadis": 0.60,
    
    # 5. Sınıf Cerh (Zayıflık)
    "daif": 0.40,
    "münkeru'l-hadis": 0.35,
    "fihi makal": 0.30,
    
    # 6. Sınıf Cerh (Ciddi Zayıflık / İtham)
    "metruk": 0.20,
    "müttehemün bi'l-kizb": 0.10, # Yalancılıkla itham edilmiş
    
    # 7. Sınıf Cerh (En Ağır Suçlama)
    "kezzab": 0.0,
    "vadda'": 0.0, # Hadis uyduran
}

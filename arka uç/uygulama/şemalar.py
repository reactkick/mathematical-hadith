# backend/app/schemas.py dosyasının sonuna ekleyin

class ZincirDetay(BaseModel):
    ravi: str
    skor: float

class SiniflandirmaSonuc(BaseModel):
    hadis_metni: str
    hukum: str
    nihai_skor: float
    zincir_detaylari: list[ZincirDetay]

    class Config:
        orm_mode = True

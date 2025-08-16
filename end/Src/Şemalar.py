from pydantic import BaseModel
from typing import Optional

# Yeni bir Ravi oluşturmak için kullanılacak model
class RaviCreate(BaseModel):
    isim: str
    dogum_yili: Optional[int] = None
    vefat_yili: Optional[int] = None
    adalet_skoru: Optional[float] = None
    dabt_skoru: Optional[float] = None

# API'den bir Ravi verisi döndürülürken kullanılacak model
class Ravi(BaseModel):
    id: int
    isim: str
    dogum_yili: Optional[int] = None
    vefat_yili: Optional[int] = None
    
    class Config:
        orm_mode = True # SQLAlchemy modelleriyle uyumlu çalışmasını sağlar

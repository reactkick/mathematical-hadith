# backend/app/crud.py
from sqlalchemy.orm import Session, joinedload
from . import models, schemas

# ... mevcut CRUD fonksiyonlarınız ...

def get_hadis_with_details(db: Session, hadis_id: int):
    """Bir hadisi, tüm zincirleri ve o zincirlerdeki tüm râvi detayları
    ile birlikte veritabanından çeker."""
    return db.query(models.Hadis).options(
        joinedload(models.Hadis.zincirler).joinedload(models.RivayetZinciri.ravi)
    ).filter(models.Hadis.id == hadis_id).first()

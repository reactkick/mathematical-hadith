from sqlalchemy.orm import Session
from . import models, schemas

def get_ravi(db: Session, ravi_id: int):
    return db.query(models.Ravi).filter(models.Ravi.id == ravi_id).first()

def get_ravi_by_isim(db: Session, isim: str):
    return db.query(models.Ravi).filter(models.Ravi.isim == isim).first()

def get_raviler(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Ravi).offset(skip).limit(limit).all()

def create_ravi(db: Session, ravi: schemas.RaviCreate):
    db_ravi = models.Ravi(**ravi.dict())
    db.add(db_ravi)
    db.commit()
    db.refresh(db_ravi)
    return db_ravi

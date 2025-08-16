from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session
from . import crud, models, schemas
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# Dependency: Her istek için bir veritabanı oturumu oluşturur
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/raviler/", response_model=schemas.Ravi)
def create_ravi_endpoint(ravi: schemas.RaviCreate, db: Session = Depends(get_db)):
    db_ravi = crud.get_ravi_by_isim(db, isim=ravi.isim)
    if db_ravi:
        raise HTTPException(status_code=400, detail="Bu isimde bir ravi zaten mevcut")
    return crud.create_ravi(db=db, ravi=ravi)

@app.get("/raviler/", response_model=list[schemas.Ravi])
def read_raviler_endpoint(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    raviler = crud.get_raviler(db, skip=skip, limit=limit)
    return raviler

# ... diğer importlar ...
from . import services # services modülünü import et

# ...

@app.get("/raviler/{ravi_id}/hesapla_skor", response_model=dict)
def hesapla_ravi_skor_endpoint(ravi_id: int, db: Session = Depends(get_db)):
    db_ravi = crud.get_ravi(db, ravi_id=ravi_id)
    if db_ravi is None:
        raise HTTPException(status_code=404, detail="Ravi bulunamadı")
    
    hesaplanan_skorlar = services.hesapla_ravi_skorlari(db=db, ravi=db_ravi)
    
    # İsteğe bağlı: Hesaplanan skorları veritabanına kaydedebilirsiniz.
    # db_ravi.adalet_skoru = hesaplanan_skorlar["adalet_skoru"]
    # db.commit()
    
    return hesaplanan_skorlar

from sqlalchemy import Column, Integer, String, Float, Boolean, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Ravi(Base):
    __tablename__ = "raviler"

    id = Column(Integer, primary_key=True, index=True)
    isim = Column(String, unique=True, index=True)
    dogum_yili = Column(Integer, nullable=True)
    vefat_yili = Column(Integer, nullable=True)
    
    # Skorları artık veritabanında saklayabilir veya anlık hesaplayabilirsiniz
    # Bu örnekte sakladığımızı varsayalım
    adalet_skoru = Column(Float, nullable=True)
    dabt_skoru = Column(Float, nullable=True)

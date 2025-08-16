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
# ... diğer importlar ...
from sqlalchemy.orm import relationship

class Ravi(Base):
    # ... mevcut alanlar ...
    
    # Bu ilişki, bir Râvi'nin birden çok AlimGörüşü'ne sahip olmasını sağlar.
    gorusler = relationship("AlimGorusu", back_populates="ravi")

class AlimGorusu(Base):
    __tablename__ = "alim_gorusleri"
    
    id = Column(Integer, primary_key=True, index=True)
    ravi_id = Column(Integer, ForeignKey("raviler.id"))
    alim_ismi = Column(String, index=True) # Örn: "İbn Hacer", "Zehebi"
    ifade = Column(String) # Örn: "sika", "saduk", "daif"
    kaynak = Column(String, nullable=True) # Örn: "Tehzib'ut-Tehzib"
    
    ravi = relationship("Ravi", back_populates="gorusler")

# backend/app/models.py
from sqlalchemy import Column, Integer, String, Float, Boolean, ForeignKey
from sqlalchemy.orm import relationship
from .database import Base # database.py dosyanızdan Base'i import ettiğinizi varsayıyorum

# ... Ravi ve AlimGorusu modelleriniz ...

class Hadis(Base):
    __tablename__ = "hadisler"
    id = Column(Integer, primary_key=True, index=True)
    metin = Column(String, unique=True)
    
    # Bu ilişki, bir hadise ait tüm zincir (isnad) kayıtlarına erişmemizi sağlar.
    zincirler = relationship("RivayetZinciri", back_populates="hadis")

class RivayetZinciri(Base):
    __tablename__ = "rivayet_zincirleri"
    id = Column(Integer, primary_key=True, index=True)
    hadis_id = Column(Integer, ForeignKey("hadisler.id"))
    ravi_id = Column(Integer, ForeignKey("raviler.id"))
    sira_no = Column(Integer) # Râvinin zincirdeki sırası (örn: 1, 2, 3...)
    
    hadis = relationship("Hadis", back_populates="zincirler")
    ravi = relationship("Ravi")
user_id = Sütun(UUID(as_uuid=True), boş bırakılabilir=False)

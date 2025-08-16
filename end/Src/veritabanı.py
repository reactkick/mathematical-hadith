# backend/app/database.py dosyasının içeriği
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os
from dotenv import load_dotenv

# .env dosyasındaki değişkenleri yükle
load_dotenv()

# .env dosyasından veritabanı URL'sini al
SQLALCHEMY_DATABASE_URL = os.getenv("DATABASE_URL")

# SQLAlchemy motorunu oluştur. Bu, veritabanına ana bağlantı noktasıdır.
engine = create_engine(SQLALCHEMY_DATABASE_URL)

# Veritabanı ile konuşmak için bir "oturum" (session) oluşturucu
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Modellerimizin (örn: Ravi, Hadis) miras alacağı temel sınıf
Base = declarative_base()

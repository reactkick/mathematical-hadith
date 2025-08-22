# backend/app/security.py
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt
from sqlalchemy.orm import Session
import os
from . import crud # Kullanıcıyı veritabanından bulmak için (isteğe bağlı)
from .database import SessionLocal

# Supabase'den gelen JWT'yi doğrulamak için gerekli bilgiler
# .env dosyasından okuyoruz
SECRET_KEY = os.getenv("SUPABASE_JWT_SECRET")
ALGORITHM = "HS256"

# Bu, FastAPI'ye token'ın "Authorization: Bearer <token>" başlığından
# geleceğini söyleyen bir yardımcıdır.
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

def get_current_user_id(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        # Gelen token'ı, gizli anahtarımızla çözmeyi deniyoruz
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        
        # Supabase JWT'sinin içindeki kullanıcı ID'si 'sub' alanında bulunur
        user_id: str = payload.get("sub")
        if user_id is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception
    
    # Token geçerliyse, içindeki kullanıcı ID'sini döndürüyoruz
    return user_id

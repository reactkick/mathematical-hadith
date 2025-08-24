// frontend/src/services/api.js
import axios from 'axios';

// Backend API'nizin temel adresi.
// .env dosyası kullanarak bunu daha dinamik hale getirebilirsiniz.
const API_URL = 'http://localhost:8000';

// --- Râvi Fonksiyonları ---
export const getRaviler = () => axios.get(`${API_URL}/raviler/`);
export const createRavi = (raviData) => axios.post(`${API_URL}/raviler/`, raviData);
export const getRaviById = (raviId) => axios.get(`${API_URL}/raviler/${raviId}`);
export const calculateRaviScore = (raviId) => axios.get(`${API_URL}/raviler/${raviId}/hesapla_skor`);

// --- Hadis Fonksiyonları ---
export const getHadisler = () => axios.get(`${API_URL}/hadisler/`);
export const createHadis = (hadisData) => axios.post(`${API_URL}/hadisler/`, hadisData);

// --- Hadis Sınıflandırma Fonksiyonu ---
// (Bu endpoint'i backend'de oluşturduktan sonra burayı etkinleştirin)
// export const classifyHadith = (hadisId) => axios.post(`${API_URL}/hadisler/${hadisId}/classify`);

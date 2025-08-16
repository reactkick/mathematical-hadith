// frontend/src/services/api.js

import axios from 'axios';

// 1. Backend API'mizin temel adresini bir sabit olarak tanımlıyoruz.
//    Yarın projenizi canlıya aldığınızda, sadece bu satırı değiştirmeniz
//    tüm uygulamanın doğru adresle konuşmasını sağlayacaktır.
const API_URL = 'http://localhost:8000';

// =================================================================
// RÂVİ İŞLEMLERİ (NARRATOR OPERATIONS)
// =================================================================

/**
 * Veritabanındaki tüm râvilerin listesini getirir.
 * @returns {Promise<AxiosResponse<any>>} Râvilerin listesini içeren bir Promise.
 */
export const getRaviler = () => {
    return axios.get(`${API_URL}/raviler/`);
};

/**
 * Yeni bir râvi oluşturmak için API'ye POST isteği gönderir.
 * @param {object} raviData - Yeni râvinin bilgilerini içeren obje. Örn: { isim: "...", dogum_yili: 150 }
 * @returns {Promise<AxiosResponse<any>>} Oluşturulan râvinin verisini içeren bir Promise.
 */
export const createRavi = (raviData) => {
    return axios.post(`${API_URL}/raviler/`, raviData);
};

/**
 * Belirli bir ID'ye sahip râvinin detaylarını getirir.
 * @param {number} raviId - Getirilecek râvinin ID'si.
 * @returns {Promise<AxiosResponse<any>>} Râvi detaylarını içeren bir Promise.
 */
export const getRaviById = (raviId) => {
    return axios.get(`${API_URL}/raviler/${raviId}`);
};

// =================================================================
// HADİS İŞLEMLERİ (HADITH OPERATIONS)
// =================================================================

/**
 * Veritabanındaki tüm hadislerin listesini getirir.
 * @returns {Promise<AxiosResponse<any>>} Hadislerin listesini içeren bir Promise.
 */
export const getHadisler = () => {
    return axios.get(`${API_URL}/hadisler/`);
};

/**
 * Yeni bir hadis oluşturmak için API'ye POST isteği gönderir.
 * @param {object} hadisData - Yeni hadisin bilgilerini içeren obje. Örn: { metin: "...", isnad: [1, 2, 3] }
 * @returns {Promise<AxiosResponse<any>>} Oluşturulan hadisin verisini içeren bir Promise.
 */
export const createHadis = (hadisData) => {
    return axios.post(`${API_URL}/hadisler/`, hadisData);
};

// =================================================================
// SINIFLANDIRMA İŞLEMLERİ (CLASSIFICATION OPERATIONS)
// =================================================================

/**
 * Belirli bir hadisin sıhhat durumunu hesaplamak için sınıflandırma endpoint'ini tetikler.
 * NOT: Bu fonksiyonu kullanmadan önce backend'de `/hadisler/{id}/classify` endpoint'inin oluşturulduğundan emin olun.
 * @param {number} hadisId - Sınıflandırılacak hadisin ID'si.
 * @returns {Promise<AxiosResponse<any>>} Sınıflandırma sonucunu içeren bir Promise.
 */
export const classifyHadith = (hadisId) => {
    // Backend'deki endpoint'iniz POST mu GET mi olacak? Genellikle bir işlem başlattığı için POST daha mantıklıdır.
    // Şimdilik POST olduğunu varsayıyoruz.
    return axios.post(`${API_URL}/hadisler/${hadisId}/classify`);
};

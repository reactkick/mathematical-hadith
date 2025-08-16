import React, { useState, useEffect } from 'react';
import { getHadisler, getRaviler, createHadis } from '../services/api';

function HadisPage() {
    const [hadisler, setHadisler] = useState([]);
    const [raviler, setRaviler] = useState([]); // Râvi listesini tutmak için
    const [metin, setMetin] = useState('');
    const [seciliRaviler, setSeciliRaviler] = useState([]); // İsnad için seçilen râviler
    const [message, setMessage] = useState('');

    // Sayfa yüklendiğinde hadisleri ve râvileri çek
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const hadislerResponse = await getHadisler();
            setHadisler(hadislerResponse.data);
            const ravilerResponse = await getRaviler();
            setRaviler(ravilerResponse.data);
        } catch (error) {
            console.error("Veri çekilirken hata oluştu:", error);
        }
    };

    const handleRaviSelect = (raviId) => {
        // Bir râvi zaten seçiliyse kaldır, değilse ekle
        if (seciliRaviler.includes(raviId)) {
            setSeciliRaviler(seciliRaviler.filter(id => id !== raviId));
        } else {
            setSeciliRaviler([...seciliRaviler, raviId]);
        }
    };

    const handleHadisSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        try {
            // Not: Backend'iniz hadis oluştururken isnad bilgisini nasıl bekliyor?
            // Muhtemelen râvi ID'lerinden oluşan bir liste bekliyordur.
            // Bu kısmı backend'deki `schemas.py` dosyanıza göre ayarlamanız gerekebilir.
            const hadisData = {
                metin: metin,
                isnad: seciliRaviler, // Örnek: [1, 5, 12] gibi bir ID listesi
            };
            await createHadis(hadisData);
            setMessage('Hadis başarıyla eklendi!');
            setMetin('');
            setSeciliRaviler([]);
            fetchData(); // Listeyi yenile
        } catch (error) {
            setMessage(`Hata: ${error.response?.data?.detail || error.message}`);
        }
    };

    const handleClassify = async (hadisId) => {
        alert(`Sınıflandırma özelliği henüz eklenmedi. Hadis ID: ${hadisId}`);
        // try {
        //     const result = await classifyHadith(hadisId);
        //     alert(`Sonuç: ${result.data.sonuc}`);
        // } catch (error) {
        //     alert('Sınıflandırma sırasında bir hata oluştu.');
        // }
    };

    return (
        <div>
            {/* HADİS EKLEME FORMU */}
            <h2>Yeni Hadis Ekle</h2>
            <form onSubmit={handleHadisSubmit}>
                <textarea
                    value={metin}
                    onChange={(e) => setMetin(e.target.value)}
                    placeholder="Hadis Metni"
                    required
                />
                
                <h3>İsnad (Rivayet Zinciri)</h3>
                <p>Zinciri oluşturmak için râvileri sırayla seçin:</p>
                <div>
                    {raviler.map(ravi => (
                        <button
                            type="button"
                            key={ravi.id}
                            onClick={() => handleRaviSelect(ravi.id)}
                            style={{
                                margin: '5px',
                                backgroundColor: seciliRaviler.includes(ravi.id) ? 'lightblue' : 'white'
                            }}
                        >
                            {ravi.isim}
                        </button>
                    ))}
                </div>
                
                <button type="submit" style={{ marginTop: '10px' }}>Hadisi Ekle</button>
            </form>
            {message && <p>{message}</p>}

            <hr />

            {/* HADİS LİSTESİ */}
            <h2>Hadisler</h2>
            <ul>
                {hadisler.map(hadis => (
                    <li key={hadis.id}>
                        <p>{hadis.metin}</p>
                        <button onClick={() => handleClassify(hadis.id)}>
                            Sınıflandır
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HadisPage;
import React, { useState, useEffect } from 'react';
// Oluşturduğumuz servis dosyasından istediğimiz fonksiyonları import ediyoruz
import { getHadisler, getRaviler } from '../services/api';

function HadisPage() {
    const [hadisler, setHadisler] = useState([]);

    useEffect(() => {
        // Bileşen ilk yüklendiğinde API'yi çağırıp hadisleri çekiyoruz
        const fetchHadisler = async () => {
            try {
                const response = await getHadisler();
                setHadisler(response.data);
            } catch (error) {
                console.error("Hadisler çekilirken bir hata oluştu:", error);
            }
        };

        fetchHadisler();
    }, []);

    // ... bileşenin geri kalanı ...
}
// frontend/src/components/HadisPage.js
import React, { useState, useEffect, useCallback } from 'react';
import { getHadisler, getRaviler, createHadis, classifyHadith } from '../services/api';

function HadisPage() {
    // Durumlar (States)
    const [hadisler, setHadisler] = useState([]);
    const [raviler, setRaviler] = useState([]); // Formda seçmek için tüm râviler
    const [metin, setMetin] = useState('');
    const [seciliRaviler, setSeciliRaviler] = useState([]); // İsnad için seçilen râvilerin ID'leri
    const [message, setMessage] = useState('');
    const [classificationResult, setClassificationResult] = useState(null);

    // Veri Çekme Fonksiyonu
    const fetchData = useCallback(async () => {
        try {
            const hadislerResponse = await getHadisler();
            setHadisler(hadislerResponse.data);
            const ravilerResponse = await getRaviler();
            setRaviler(ravilerResponse.data);
        } catch (error) {
            console.error("Veri çekilirken hata oluştu:", error);
        }
    }, []);

    // Bileşen ilk yüklendiğinde verileri çek
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    // Form Gönderme Fonksiyonu (Hadis Ekleme)
    const handleHadisSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setClassificationResult(null);

        // Backend'inize bir râvi ID listesi göndermeniz gerekiyor.
        const hadisData = { metin: metin, isnad_ravi_ids: seciliRaviler };

        try {
            await createHadis(hadisData);
            setMessage('Hadis başarıyla eklendi!');
            setMetin('');
            setSeciliRaviler([]);
            fetchData(); // Yeni hadisi görmek için listeyi yenile
        } catch (error) {
            setMessage(`Hata: ${error.response?.data?.detail || error.message}`);
        }
    };
    
    // İsnad için Râvi Seçme Fonksiyonu
    const handleRaviSelect = (raviId) => {
        setSeciliRaviler(prev => [...prev, raviId]);
    };
    
    // Sınıflandırma Fonksiyonu
    const handleClassify = async (hadisId) => {
        setMessage('');
        setClassificationResult(`Hadis ID ${hadisId} sınıflandırılıyor...`);
        try {
            // BU KISIM, BACKEND'DE /classify ENDPOINT'İNİ OLUŞTURDUKTAN SONRA ÇALIŞACAKTIR.
            const result = await classifyHadith(hadisId);
            setClassificationResult(`Sonuç: ${result.data.sonuc} (Skor: ${result.data.skor})`);
        } catch (error) {
            setClassificationResult(`Sınıflandırma hatası: ${error.response?.data?.detail || error.message}`);
        }
    };

    return (
        <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px' }}>
            {/* HADİS EKLEME FORMU */}
            <h2>Yeni Hadis Ekle</h2>
            <form onSubmit={handleHadisSubmit}>
                <textarea value={metin} onChange={(e) => setMetin(e.target.value)} placeholder="Hadis Metni" required rows="4" style={{width: "90%"}} />
                
                <h3>İsnad (Rivayet Zinciri)</h3>
                <p>Zinciri oluşturmak için râvileri sırayla seçin:</p>
                <div>{raviler.map(r => <button type="button" key={r.id} onClick={() => handleRaviSelect(r.id)}>{r.isim}</button>)}</div>
                <p><b>Seçilen Zincir:</b> {seciliRaviler.map(id => raviler.find(r => r.id === id)?.isim).join(' → ')}</p>

                <button type="submit" style={{ marginTop: '10px' }}>Hadisi Ekle</button>
            </form>
            {message && <p>{message}</p>}

            <hr style={{ margin: '40px 0' }} />

            {/* HADİS LİSTESİ */}
            <h2>Hadisler</h2>
            {classificationResult && <h3 style={{color: 'blue'}}>{classificationResult}</h3>}
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {hadisler.map(hadis => (
                    <li key={hadis.id} style={{ borderBottom: '1px solid #eee', padding: '10px 0' }}>
                        <p><b>ID {hadis.id}:</b> {hadis.metin}</p>
                        <button onClick={() => handleClassify(hadis.id)}>Sınıflandır</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HadisPage;

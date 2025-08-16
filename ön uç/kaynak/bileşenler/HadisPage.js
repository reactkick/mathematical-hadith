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

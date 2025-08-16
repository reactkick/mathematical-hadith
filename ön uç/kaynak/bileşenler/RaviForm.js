import React, { useState } from 'react';
import { createRavi } from '../services/api'; // API fonksiyonumuzu import ediyoruz

function RaviForm({ onRaviAdded }) {
    const [isim, setIsim] = useState('');
    const [dogumYili, setDogumYili] = useState('');
    const [vefatYili, setVefatYili] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        try {
            const raviData = {
                isim: isim,
                dogum_yili: dogumYili ? parseInt(dogumYili) : null,
                vefat_yili: vefatYili ? parseInt(vefatYili) : null,
            };
            const response = await createRavi(raviData);
            setMessage(`Başarılı: Râvi "${response.data.isim}" eklendi!`);
            
            // Formu temizle
            setIsim('');
            setDogumYili('');
            setVefatYili('');

            // Üst bileşene yeni bir râvi eklendiğini haber ver
            if (onRaviAdded) {
                onRaviAdded();
            }

        } catch (error) {
            setMessage(`Hata: ${error.response?.data?.detail || error.message}`);
        }
    };

    return (
        <div>
            <h2>Yeni Râvi Ekle</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={isim}
                    onChange={(e) => setIsim(e.target.value)}
                    placeholder="Râvi İsmi"
                    required
                />
                <input
                    type="number"
                    value={dogumYili}
                    onChange={(e) => setDogumYili(e.target.value)}
                    placeholder="Doğum Yılı (Hicri)"
                />
                <input
                    type="number"
                    value={vefatYili}
                    onChange={(e) => setVefatYili(e.target.value)}
                    placeholder="Vefat Yılı (Hicri)"
                />
                <button type="submit">Ekle</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default RaviForm;
// frontend/src/components/RaviForm.js
import React, { useState } from 'react';
import { createRavi } from '../services/api'; // Merkezi API fonksiyonumuzu import ediyoruz

function RaviForm({ onRaviAdded }) {
    const [isim, setIsim] = useState('');
    const [dogumYili, setDogumYili] = useState('');
    const [vefatYili, setVefatYili] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        try {
            const raviData = {
                isim: isim,
                dogum_yili: dogumYili ? parseInt(dogumYili) : null,
                vefat_yili: vefatYili ? parseInt(vefatYili) : null,
            };
            const response = await createRavi(raviData);
            setMessage(`Başarılı: Râvi "${response.data.isim}" eklendi!`);
            
            // Başarı sonrası formu temizle
            setIsim('');
            setDogumYili('');
            setVefatYili('');

            // Eğer üst bileşen haberdar olmak isterse, onu bilgilendir.
            // Bu, HadisPage'deki râvi listesini otomatik yenilemek için kullanılabilir.
            if (onRaviAdded) {
                onRaviAdded();
            }

        } catch (error) {
            // Backend'den gelen detaylı hata mesajını göster
            setMessage(`Hata: ${error.response?.data?.detail || error.message}`);
        }
    };

    return (
        <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px' }}>
            <h2>Yeni Râvi Ekle</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={isim} onChange={(e) => setIsim(e.target.value)} placeholder="Râvi İsmi" required />
                <input type="number" value={dogumYili} onChange={(e) => setDogumYili(e.target.value)} placeholder="Doğum Yılı (Hicri)" />
                <input type="number" value={vefatYili} onChange={(e) => setVefatYili(e.target.value)} placeholder="Vefat Yılı (Hicri)" />
                <button type="submit">Ekle</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default RaviForm;

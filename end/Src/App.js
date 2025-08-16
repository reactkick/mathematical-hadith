import React, { useState } from 'react';

function App() {
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleClassifyClick = async () => {
    setLoading(true);
    setResult('');

    // Backend'e göndereceğimiz örnek hadis verisi
    const hadithData = {
      metin: "Ameller niyetlere göredir...",
      sened: [
        {
          isim: "Abdullah",
          dogum_tarihi: 100,
          vefat_tarihi: 180,
          adalet_skoru: 0.98,
          dabt_skoru: 0.99,
          yalanci_olarak_bilinir: false
        },
        {
          isim: "Bekir",
          dogum_tarihi: 170,
          vefat_tarihi: 250,
          adalet_skoru: 0.95,
          dabt_skoru: 0.85,
          yalanci_olarak_bilinir: false
        }
      ]
    };

    try {
      // Backend'deki /classify endpoint'ine POST isteği gönderiyoruz
      const response = await fetch('http://localhost:8000/classify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(hadithData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setResult(data.siniflandirma_sonucu); // Gelen sonucu state'e yazdır

    } catch (error) {
      console.error("API isteği sırasında hata oluştu:", error);
      setResult('Bir hata oluştu.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hadis Sınıflandırma Sistemi</h1>
        <button onClick={handleClassifyClick} disabled={loading}>
          {loading ? 'Sınıflandırılıyor...' : 'Örnek Hadisi Sınıflandır'}
        </button>
        {result && <h2>Sonuç: {result}</h2>}
      </header>
    </div>
  );
}

export default App;
// frontend/src/App.js
import React from 'react';
import RaviForm from './components/RaviForm';
import HadisPage from './components/HadisPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Matematiksel Hadis Sınıflandırma Projesi</h1>
      </header>
      <main>
        <RaviForm />
        <hr />
        <HadisPage />
      </main>
    </div>
  );
}

export default App;

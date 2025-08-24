// frontend/src/App.js

import React from 'react';
// React Router'dan gerekli bileşenleri import ediyoruz
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Diğer sayfa bileşenlerimizi import ediyoruz
import RaviForm from './components/RaviForm';
import HadisPage from './components/HadisPage';

// Stil dosyamızı import ediyoruz
import './App.css';

// Sadece ana sayfada gösterilecek basit bir karşılama bileşeni
function HomePage() {
    return (
        <div style={{ padding: '20px' }}>
            <h2>Hoş Geldiniz</h2>
            <p>Bu proje, hadis sınıflandırması için matematiksel bir modelin prototipidir.</p>
            <p>Başlamak için yukarıdaki menüden "Hadis Yönetimi" sayfasına giderek mevcut hadisleri görebilir veya "Yeni Râvi Ekle" sayfasından sisteme yeni râviler ekleyebilirsiniz.</p>
        </div>
    );
}
    
function App() {
  // Bu fonksiyon, RaviForm'dan çağrıldığında sayfanın yeniden yüklenmesini sağlar.
  // Bu, HadisPage'deki râvi listesinin güncellenmesi için basit bir yöntemdir.
  // Gelecekte daha gelişmiş bir state yönetimi (Context API, Redux) ile iyileştirilebilir.
  const handleRaviAdded = () => {
    // Sayfayı yenilemek yerine, kullanıcıyı râvilerin listelendiği
    // ana sayfaya yönlendirmek daha iyi bir deneyim olabilir.
    // Şimdilik basit tutalım:
    alert("Yeni Râvi başarıyla eklendi! Râvi listesi bir sonraki sayfa yenilemesinde güncellenecektir.");
    // window.location.href = "/hadisler"; // Alternatif olarak yönlendirme yapılabilir.
  };

  return (
    // Router bileşeni, tüm uygulamayı sararak URL'leri yönetmesini sağlar
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Matematical Hadis Sınıflandırma Projesi</h1>
          
          {/* Gezinme Menüsü */}
          <nav>
            <ul>
              <li>
                <Link to="/">Ana Sayfa</Link>
              </li>
              <li>
                <Link to="/hadisler">Hadis Yönetimi</Link>
              </li>
              <li>
                <Link to="/raviler">Yeni Râvi Ekle</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          {/* Routes bileşeni, URL'ye göre hangi Route'un (sayfanın)
              gösterileceğini belirler */}
          <Routes>
            {/* URL "/" olduğunda HomePage bileşenini göster */}
            <Route path="/" element={<HomePage />} />
            
            {/* URL "/hadisler" olduğunda HadisPage bileşenini göster */}
            <Route path="/hadisler" element={<HadisPage />} />
            
            {/* URL "/raviler" olduğunda RaviForm bileşenini göster */}
            <Route path="/raviler" element={<RaviForm onRaviAdded={handleRaviAdded} />} />
            
            {/* Gelecekte bir hadisin detay sayfasını oluşturmak için örnek rota: */}
            {/* <Route path="/hadisler/:hadisId" element={<HadisDetailPage />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App


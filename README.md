# Matematiksel Hadis Sınıflandırma Projesi

بسم الله الرحمن الرحيم

Allah'a hamd, Rasulü'ne salât ve selâm olsun. Tevfik ve başarı şüphesiz yalnızca Allah'tandır.

Bu proje, modern veri bilimi ve olasılık teorisi prensiplerini kullanarak hadis rivayet sistemini analiz etmeyi amaçlayan bir açık kaynak çalışmasıdır. Proje, bu alanda çığır açıcı bir teorik model sunan **Prof. Dr. Halis Aydemir**'e ithafen başlatılmıştır.

---

### **İlham Kaynağı: Prof. Dr. Halis Aydemir**

Prof. Dr. Halis Aydemir, hadis ilmini matematiksel ve istatistiksel bir bakış açısıyla analiz etme üzerine yaptığı çalışmalarla tanınan değerli bir akademisyendir. Özellikle **“Hadis Rivayet Sistemine İhtimal Hesapları Merkezli Teorik bir Yaklaşım”** başlıklı makalesi, bu projenin temel felsefesini ve teorik çerçevesini oluşturmaktadır. Kendisi, hadis ilmindeki sözel güvenilirlik ifadelerinin (sika, sadûk, zayıf vb.) rakamsal değerlere dönüştürülerek rivayet zincirlerinin (isnad) sıhhat derecesinin olasılıksal bir modelle hesaplanabileceği vizyonunu ortaya koymuştur.

Prof. Dr. Halis Aydemir hakkında daha fazla bilgiye [Diyanet İşleri Başkanlığı'nın resmi sayfasından](https://fetva.diyanet.gov.tr/Personel/1543/Halis-aydemir) ulaşılabilir. Bu çalışma, kendisinin ortaya koyduğu bu değerli vizyonu, çalışan bir prototipe dönüştürme yolunda atılmış mütevazı bir adımdır.

---

## **Projenin Mevcut Durumu ve Mimarisi**

Bu proje, modern web teknolojileri kullanılarak **Full-Stack (Tam Yığın)** bir mimari ile geliştirilmiştir. Projenin amacı, bir hadisin rivayet zincirindeki râvilerin cerh ve ta'dil kayıtlarına dayanarak o hadisin sıhhat durumu hakkında olasılıksal bir skor üretmektir.

### **Teknoloji Yığını**

*   **Backend (Arka Uç):**
    *   **Dil:** Python
    *   **Framework:** FastAPI
    *   **Veritabanı:** PostgreSQL (Supabase tarafından yönetilmektedir)
    *   **ORM:** SQLAlchemy
    *   **Canlı Ortam:** Render
*   **Frontend (Ön Uç):**
    *   **Dil:** JavaScript
    *   **Kütüphane:** React
    *   **API İletişimi:** Axios
    *   **Canlı Ortam:** (Vercel/Netlify üzerinde dağıtılması planlanmaktadır)

### **Özellikler (v0.3 İtibarıyla)**

✅ **Katmanlı Backend Mimarisi:** API, İş Mantığı (`services`), Veri Erişimi (`crud`), Veri Modelleme (`models`, `schemas`) ve Yapılandırma (`constants`, `database`) katmanları birbirinden temiz bir şekilde ayrılmıştır.

✅ **Otomatik Râvi Skorlaması:** Bir râvi hakkında veritabanına eklenen farklı alim görüşlerini (`sika`, `daif` vb.) kullanarak, o râvi için otomatik olarak sayısal bir güvenilirlik skoru hesaplayan bir servis geliştirilmiştir.

✅ **Çekirdek Sınıflandırma Mantığı:** Bir hadisin isnadındaki tüm râvilerin skorlarını olasılıksal olarak birleştirip hadise nihai bir hüküm ("SAHİH", "HASEN", "ZAYIF") atayan temel algoritma backend'de tamamlanmıştır.

✅ **Fonksiyonel API:** Râvileri, hadisleri ve alim görüşlerini eklemek, listelemek ve en önemlisi bir hadisin sınıflandırmasını tetiklemek için gerekli tüm API endpoint'leri oluşturulmuştur.

✅ **Dinamik Frontend Arayüzü:** Kullanıcıların sisteme yeni râvi ve hadis eklemesine olanak tanıyan, backend API'si ile entegre çalışan temel bir React arayüzü geliştirilmiştir.

✅ **Profesyonel Git Akışı:** Tüm geliştirme süreci, atomik dallar, detaylı Pull Request açıklamaları ve anlamlı Kilometre Taşları (Milestones) kullanılarak yönetilmiştir.

---

## **Gelecek Adımlar ve Yol Haritası**

Proje, temel işlevselliğe sahip bir prototip aşamasını tamamlamıştır. Sıradaki hedefler, uygulamayı daha olgun, kullanışlı ve güvenli hale getirmektir.

*   **Aşama 1: Kullanıcı Yönetimi ve Yetkilendirme:** Supabase Auth entegrasyonu ile sadece giriş yapmış kullanıcıların veri eklemesini sağlamak.
*   **Aşama 2: Kullanıcı Deneyimini Zenginleştirmek:** Râviler ve hadisler için detay sayfaları oluşturmak, isnad seçimi gibi arayüzleri daha kullanıcı dostu hale getirmek.
*   **Aşama 3: Projeyi Canlıya Almak:** Frontend uygulamasını Vercel/Netlify gibi bir platformda dağıtarak projeyi tam olarak erişilebilir kılmak.

Bu proje hakkında daha fazla bilgi edinmek, katkıda bulunmak veya geri bildirimde bulunmak için "Issues" bölümünü kullanabilirsiniz.

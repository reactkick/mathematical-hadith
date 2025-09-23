# Matematiksel Hadis Sınıflandırma Projesi

بسم الله الرحمن الرحيم

Allah'a hamd, Rasulü'ne salât ve selâm olsun. Tevfik ve başarı şüphesiz yalnızca Allah'tandır.

Bu proje, modern veri bilimi ve olasılık teorisi prensiplerini kullanarak hadis rivayet sistemini analiz etmeyi amaçlayan bir açık kaynak çalışmasıdır. Proje, bu alanda çığır açıcı bir teorik model sunan **Prof. Dr. Halis Aydemir**'e ithafen başlatılmıştır.

---

### **İlham Kaynağı: Prof. Dr. Halis Aydemir**

Prof. Dr. Halis Aydemir, hadis ilmini matematiksel ve istatistiksel bir bakış açısıyla analiz etme üzerine yaptığı çalışmalarla tanınan değerli bir akademisyendir. Özellikle **“Hadis Rivayet Sistemine İhtimal Hesapları Merkezli Teorik bir Yaklaşım”** başlıklı makalesi, bu projenin temel felsefesini ve teorik çerçevesini oluşturmaktadır. Kendisi, hadis ilmindeki sözel güvenilirlik ifadelerinin (sika, sadûk, zayıf vb.) rakamsal değerlere dönüştürülerek rivayet zincirlerinin (isnad) sıhhat derecesinin olasılıksal bir modelle hesaplanabileceği vizyonunu ortaya koymuştur.
Prof. Dr. Halis Aydemir: Hadis İlmine Yenilikçi Bir Yaklaşım
Prof. Dr. Halis Aydemir, hem mühendislik hem de ilahiyat alanında edindiği bilgi ve tecrübeyi birleştiren, Türkiye'nin önemli akademisyenlerinden biridir. Onun çalışmaları, özellikle hadis rivayet sistemine olasılık teorisi ve veri bilimi metodolojilerini entegre etmesiyle öne çıkıyor. Bu çok disiplinli yaklaşım, geleneksel hadis tenkidinin modern çağın araçlarıyla yeniden yorumlanmasına kapı aralamıştır.
Akademik ve İdari Görevler
Prof. Dr. Aydemir, kariyerine mühendis olarak başlamış ve bu alandaki analitik düşünce yapısını ilahiyat çalışmalarına taşımıştır.
 * Eğitim: 1995 yılında İstanbul Teknik Üniversitesi Elektrik Mühendisliği bölümünden mezun olduktan sonra, hadis alanına yönelmiştir. 1998'de Uludağ Üniversitesi Sosyal Bilimler Enstitüsü'nde Hadis dalında yüksek lisansını, 2004'te ise doktorasını tamamlamıştır.
 * Akademik Kariyer: 2008 yılında doçent, 2014 yılında ise Kütahya Dumlupınar Üniversitesi İlahiyat Fakültesi Hadis Anabilim Dalı'na profesör olarak atanmıştır.
 * İdari Görevler: Kütahya Dumlupınar Üniversitesi İslami İlimler Fakültesi'nde 2015-2020 yılları arasında dekanlık ve 2015-2019 yılları arasında rektör yardımcılığı gibi önemli idari görevlerde bulunmuştur.
Diyanet İşleri Yüksek Kurulu ve Diğer Kuruluşlar
Prof. Dr. Aydemir, akademik çalışmalarının yanı sıra kamu ve sivil toplum kuruluşlarında da etkin rol oynamaktadır.
 * Din İşleri Yüksek Kurulu: 5 Ekim 2020 tarihinden itibaren Diyanet İşleri Başkanlığı Din İşleri Yüksek Kurulu Üyesi olarak görev yapmaktadır. Bu görevinde, inanç, ibadet ve sosyal hayata dair güncel dini meselelere dair fetva ve görüşlerin oluşturulmasına katkı sağlamaktadır.
 * İlahiyat Akreditasyon Ajansı (İAA): 2018 yılından bu yana İlahiyat Akreditasyon Ajansı'nın (İAA) Yönetim Kurulu Başkanı olarak görev yapmaktadır. Bu ajans, Türkiye'deki ilahiyat fakültelerinin eğitim kalitesini yükseltmeyi ve akreditasyon süreçlerini yönetmeyi amaçlamaktadır.
DarusSuffa ve Diğer Faaliyetler
Prof. Dr. Aydemir'in adı, özellikle "Hece Kitap ve Hikmet Derneği"nin bir girişimi olan DarusSuffa gibi projelere de bağlıdır. DarusSuffa, dini ilimler alanında eğitim ve araştırmayı teşvik eden bir platform olarak biliniyor. Bu platformda, Kur'an, hadis ve diğer İslami bilimlere yönelik dersler ve çalışmalar yürütülmektedir. Ayrıca, kurandersleri.net gibi çevrim içi platformlarda da Kur'an ve hadis dersleri vermektedir.
Prof. Dr. Aydemir, hem mühendislik bakış açısıyla bilimsel araştırmalara getirdiği yenilikçi yaklaşımlar hem de Diyanet İşleri Başkanlığı gibi köklü kurumlardaki görevleriyle, hadis ilminin anlaşılmasına ve güncel sorunlara çözüm üretilmesine önemli katkılar sunmaya devam etmektedir.
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

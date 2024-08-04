
# NextJS Seo Optimizasiyonu

Next.js ile hem sunucu tarafı (SSR) hemde statik site oluşturma (SSG) gibi güçlü özelliklerinden yararlanarak kullanıcılara hem de arama motoru tarayıcılarına hitap eden hızlı, dizine eklenebilir web uygulamalar oluşturabilriz

Ayrıca NextJs projemizin arama motorlarında daha öne çıkabilmesi için bazı gereken SEO ayarlamalarını yapmamız gerekebilir



## Proje Kurulumu


 - NextJS projesi oluşturmak için 
 - Paket manageri olarak yarn kullanıyorum siz npm veya pnpm de kullanabilirsiniz

 ```
 yarn create next-app
```



 - NextJS projesinin ilk görünümü

![1 5](https://github.com/user-attachments/assets/ae1f07d7-7124-4e41-b10c-94fd9a059091)


## SEO Test

- Web sitenizin hızını kontrol etmek için `Lighthouse` veya `Page Speed` uzantısını kullanabilirsiniz

- Browserda mouse ile sağ tık yaparak `Lighthouse` kısmından hem `Mobil` hemde `Desktop` için Yükleme hızı testi yapabilirsiniz

- `DEV` modda proje yüklenme hızı biraz yavaş kalabiliyor, ama proje build alındıktan sonra daha da hızlı olacaktır

![1](https://github.com/user-attachments/assets/6e2bc484-b16a-45e7-a3ed-26ead002fb20)


## SEO Ayarları

- Projemize SEO eklemek için düzene ( layout ) veya çalıştığımız sayfaya Metadata etiketleri eklememiz gerekir

- NextJS App router projesinin default `layout.tsx` sayfası

![3](https://github.com/user-attachments/assets/377398bf-ee9e-4e26-9dd5-c5898d7047e8)


## NOT: Metadata kuralları
- Meta Verileri varsayılan layout.tsx içinde oluşturursanız, bu dizin altında çalışacak tüm sayfalar için oluşturmuş olursunuz

- Eğer sadece ilgili sayfanın içinde oluşturursanız, yalnızca o sayfa için geçerli olacaktır


### Örnek

- Gördüğünüz gibi ana sayfa metadata tagı `Create Next App` olarak görünmektedir , bizim istediğimiz ise `Ana Sayfa | WebsiteAdı` olarak görünmesidir

Peki bunu nasıl yapabiliriz?

![4](https://github.com/user-attachments/assets/27027dc9-5c7f-4c3f-9419-ba21ec0cf44f)

##

- Default `layout.tsx` dosyasındaki `title` kısmını ve metadata'yı aşağıdaki gibi değiştirmemiz gerekiyor:

![5medata](https://github.com/user-attachments/assets/08b5400a-50a6-480f-a546-232530e1be9d)


- Bu çok önemlidir çünkü mutlak Website adı `SEO Optimization` ve diğer meta veri etiketlerini tespit etmek için `template` eklememiz gerekir

##

- Bu işlemi tamamladıktan sonra Ana Sayfaya metadata ekleyiniz

  
![6show-medata-home](https://github.com/user-attachments/assets/81e505e3-eea4-4041-b066-9778fc6c7193)

##

- Ana Sayfa Metadata Test

![7](https://github.com/user-attachments/assets/b4c68efa-3446-4398-8760-4b56426e356d)

## ÖNEMLİ NOT:

- Burada bizim tanımladığımız mutlak yol çalışmayacaktir bizim beklediğimiz `Home | SEO Optimization` ama başlık böyle görünmeyecektir çünkü  App routerda layout.tsx ile aynı dizinde olursa çalışmayacaktır ayrıca çalışması için ise child page olması gerekmektedir

- Child component yapmadan önce

![9](https://github.com/user-attachments/assets/453b429e-7a2c-4843-801f-b21e401a0a0d)

- Child component yaptıktan sonra


![8](https://github.com/user-attachments/assets/58629077-89d9-4a53-8f70-be367ec4591a)


##

- Ana Sayfa testi tekrardan

![10 result](https://github.com/user-attachments/assets/5939f023-93b4-46da-b3f4-6b065c949299)



## Favicon Ayarları

- Tüm projeler için web sitelerimizi logomuzla göstermek için faviconlara ihtiyaç duyar, svg türü için favicon oluşturabilirsiniz çünkü bazı tarayıcılar png, jpeg türlerini desteklemez

- Favicon.svg dosyanızı ve diğer görselleri `public` klasörün içine ekleyin

- Favicon eklemeden önce, uygulama yönlendiricisinin içindeki favicon.ico dosyasını kaldırmanız ve defaut `layout.tsx` için şuna benzer bir kod eklemeniz gerekir




![favicon-layout](https://github.com/user-attachments/assets/6fabf2c1-eabe-49bc-8adb-b8150d72aa82)

## Önemli

- Svg türü için favicon eklememiz gerekir aksi takdirde tarayıcı faviconunuzu göstermez

![12 fav](https://github.com/user-attachments/assets/b2aab814-d6db-451f-b866-d80931f8b151)


## Dynamic Metadata oluşturmak için:

![13dynamic metadata](https://github.com/user-attachments/assets/c8beb4c5-a1db-43d5-b8f8-baac4c1eb491)



## Sosyal Media için Optimizasiyon

- Ürünün linkini paylaştığımızda, ürünün mini bir tanıtımı olması için eklememiz gerekir

![social media tags](https://github.com/user-attachments/assets/a829c70e-c71f-4df1-9670-e76bc8dda939)


## Semantik Taglar

Semantik etiketler projemizin SEO optimizasyonu için çok önemlidir, bunları projelerinizde kullanmayı unutmayınız

- navigasyonunuz varsa `<ul>` kombinasyon etiketleri ile `<nav>` kullanmayı deneyin

- eğer paragrafınız varsa `<article>` kullanmayı deneyin

- eğer başlık varsa `<aside>` kullanmayı deneyin

- sayfanız varsa `<section>` kullanmayı deneyin

- sayfada başlık varsa `<header>` kullanmayı deneyin

- sayfada altbilgi varsa `<footer>` kullanmayı deneyin


## MikroPattern

- Google arama motorunun sayfada neler olduğunu ve neyin nerede olduğunu daha iyi anlayabilmesi ve bu sayfanın içeriğinin ne olduğunu ve bilgiler tam olarak hangi sayfada olduğunu anlayabilmesi için etiketlere anahtar kelimeler atamamız gerekebilir.

Örnek:

![article example](https://github.com/user-attachments/assets/244d683b-9c06-40cf-b95a-fe29c2439fcb)

### SEO için önemlidir

- itemScope microPattern olarak işaretlememize izin verirken, itemType işaretlenen etiketin türünü bildirmemize izin verir, örneğin: blog, organization

- Daha fazla ayrıntıyı buradan okuyabilirsiniz: https://schema.org/

- WebSitenizi veya Kodunuzu Test etmek için: https://validator.schema.org/

### Test sonucu

![article test](https://github.com/user-attachments/assets/c8148cc1-2fe8-4c91-b044-635669df24bd)


Gördüğünüz gibi belirli sayfada neler olduğuna dair bilgiler burada görülmektedir

##

## Erişebilirlik ( Accessebility )


- Web sitemizin erişebilirlik durumunu kontrol ederek ve SEO kurallarına uyarsak Erişim konusunda en üst kısımlara da çıkabiliriz

- `Image` etiketi ( alt ) özelliği ZORUNLUDUR

- `Button` (aria-label) ve (role) özellikleri ZORUNLUDUR

![image tag re](https://github.com/user-attachments/assets/ebcdf160-2a3e-453f-bbd5-cc7fd7a55c69)

##

## Çoklu Dil Sistemleri

Web sitenize çoklu dil işlevi eklemek istiyorsanız NextJS için birçok yerelleştirme kütüphanesi vardır


 - [i18next](https://www.i18next.com/)
 - [next-intl](https://next-intl-docs.vercel.app/)


Projelerimde `next-intl` kullanıyorum ve burada github repositorim projelerinize next-intl nasıl ekleyeceğinize dair bilgi verilmiştir

 - [Github repository](https://github.com/thekinv21/next-intl-ts)


Projenize çoklu dil durumu ekledikten sonra, çoklu diller için SEO meta verilerini kolayca optimize edebilirsiniz

![localization](https://github.com/user-attachments/assets/2e239509-10cf-45c8-811c-6b6abd41187f)


## Arama Konsolları ( Yandex , Google )

Buraya Web sitemizin domain adresini ekleyerek, günde , haftada veya ayda web sitemizi kaç kişi ziyaret ettiğini ve nerede bir eksik olduğuna dair bilgileri öğrenebiliriz ve web site performansını ölçebiliriz

### Yandex Web Konsolu

![web console yandex](https://github.com/user-attachments/assets/d2926094-17da-4e2c-b468-2ff9f5bc0b85)

### Google Web Konsolu

![google web console](https://github.com/user-attachments/assets/192212f8-4efe-453b-81de-af559082e9f9)


Google veya Yandex web konsoluna kayıt olduktan sonra size özel key verecektir sizin yapmanız gereken sadece NEXTJS uygulamasında default layout.tsx içindeki metadata kısmına o keyi eklemeniz ve e-postanıza veya hesabınıza gelen bildirime onay vermeniz yeterli olacaktır

![googleyandex](https://github.com/user-attachments/assets/fe19ae23-f843-433e-9abe-d13e07cca259)


## Google ve Yandex Analitik Ekleme

```
yarn add @next/third-parties@latest next@latest
```

Paketi yükledikten sonra varsayılan layout.tsx için şu şekilde ekleme yapmanız gerekmektedir ayrıca google kayıt olduğunuzda sizin için benzersiz gaId verir 

![googleanalitik](https://github.com/user-attachments/assets/744ed173-f93b-4b49-b03a-0379d045c90e)


## Robots.txt dosyası oluşturma

robots.tsx dosyasının yaptığı iş hangi sayfaların açık ve hangilerinin kapalı olduğunu belirlemektir

- robots.tsx dosyası `public` klasörü altına oluşturulur

- Yandex , GoogleBot ve kalan botlar için txt oluşturuldu

![Ekran Resmi 2024-08-04 19 51 27](https://github.com/user-attachments/assets/7465de32-17b7-4a22-b30f-a2f3f52291d4)

![ROBOT TXT](https://github.com/user-attachments/assets/954cd44d-2b03-4fb8-b60d-717ade38d6e8)

- Url kısmından robots.txt dediğimizde oluşturulan bot komutlarını görmüş olacağız

![Ekran Resmi 2024-08-04 19 48 32](https://github.com/user-attachments/assets/fc8319a0-7011-4f5f-8176-7db210fc1ac8)


## Sitemap.xml dosyası oluşturma

Sitemap.xml, arama motorlarına sitenizdeki tüm sayfaları daha iyi anlamalarına ve dizine eklemelerine yardımcı olur. Bu, özellikle yeni veya güncellenmiş sayfaların hızlı bir şekilde indekslenmesine katkı sağlar

NextJS uygulamasında sitemap.xml automatik olarak generate edilmesini istiyorsak ilk önce şu paketi indirmeliyiz

```
yarn add next-sitemap
```

- Bu paketi yükledikten sonra, `App` dosyası içinde yalnızca sunucu tarafında çalışacak yeni `sitemap.xml dosyası` oluşturun ve bu klasörün içine de web sitemizdeki tüm sayfaları son halini alacak olan GET isteği oluşturun böylece sitemap.xml dosyası sizin için otomatik oluşmuş olacaktır

![Ekran Resmi 2024-08-04 19 52 53](https://github.com/user-attachments/assets/94dcb90f-ff86-4dc2-9d77-96131873892a)

![SİTEMAP XML](https://github.com/user-attachments/assets/e0f370b0-654d-4446-a759-a51391979489)

- Url kısmından sitemap.xml dediğimizde automatik oluşturulan sayfaları görmüş olacağız

![Ekran Resmi 2024-08-04 19 48 48](https://github.com/user-attachments/assets/401178db-0cd5-4403-a517-af2d3c2e6461)


## ÖNEMLİ NOT

- Robots.txt ve Sitemap.xml işlemlerini tamamladıktan sonra Arama Konsoluna ( Google veya Yandex )'e eklemeyi unutmayınız


## PWA 

PWA (Aşamalı Web Uygulaması), doğrudan bir web tarayıcısından mobil uygulama benzeri bir deneyim sunan, web ve mobil uygulamaların en iyi özelliklerini harmanlayan bir web uygulaması türüdür

- Responsive Tasarım:

    -  PWA'lar çeşitli cihazlarda ve ekran boyutlarında sorunsuz çalışacak şekilde tasarlanır ve tutarlı bir kullanıcı deneyimi sağlar.

- Çevrimdışı Erişim: 
    - Hizmet çalışanlarını kullanarak PWA'lar çevrimdışı veya düşük kaliteli ağlarda çalışabilir ve kullanıcıların internet bağlantısı olmadan içeriğe erişmesine olanak tanır.

- Anında Güncellemeler: 
    - Geleneksel uygulamaların aksine, kullanıcılar her ziyaretlerinde otomatik olarak en son sürüme eriştikleri için PWA'lar her zaman günceldir.

- Uygulama Benzeri Deneyim: 
    - PWA'lar açılış ekranları, tam ekran görünümler ve akıcı animasyonlar gibi yerel uygulamalara benzer özellikler sunarak sürükleyici bir deneyim sağlar.

- Güvenli: 
    - PWA'lar HTTPS üzerinden sunulur, güvenli veri iletimi sağlar ve kullanıcı güveni oluşturur.

- Yüksek Performans: 

    - Hızlı yükleme süreleri ve duyarlı arayüzleri ile PWA'lar kullanıcı beklentilerini karşılayan yüksek performanslı bir deneyim sunar.

- Anlık Bildirimler: 
    - PWA'lar kullanıcıların ilgisini çekmek ve onları güncellemeler veya yeni içerikler hakkında bilgilendirmek için gerçek zamanlı bildirimler gönderebilir.


### Sonuç olarak: 

PWA'lar, kullanıcıların bir uygulama indirme ihtiyacını ortadan kaldırarak işletmelerin ve geliştiricilerin daha geniş bir kitleye ulaşmasını sağlar. Bunun yerine, kullanıcılar PWA'ya bir web tarayıcısından kolayca erişebilir ve isterlerse hızlı erişim için ana ekranlarına ekleyebilirler.



## PWA Ekleme adımları

- Public klasöründe bir manifest.json dosyası oluşturmanız ve web sitesi dizinlerinizi bu manifesto içinde oluşturmanız gerekir

- Bizim durumumuzda manifest.json aşağıdaki gibidir

![manifest](https://github.com/user-attachments/assets/783196f5-81c9-44a7-8f23-273afc428bcb)


- manifest.json dosyasını varsayılan `layout.tsx` dosyasına ekleyin

![la](https://github.com/user-attachments/assets/9f55a8f9-2d22-4564-8d16-9d756fda0b48)

- Uygulamanızı tekrardan çalıştırdıktan sonra üst kısımda PWA ikonu görüyor olacaksınız

![Ekran Resmi 2024-08-04 20 56 02](https://github.com/user-attachments/assets/3c3d728d-27fa-4f52-9d5a-b98b38fb0052)


- PWA 

![Ekran Resmi 2024-08-04 21 05 44](https://github.com/user-attachments/assets/d8b62672-8c36-4ea6-89a2-29165ae4cc42)


## SEO TEST ( DEV | PROD ) için:


Tüm SEO ayarlarını yaptıktan sonra uygulamamızı DEV ve PROD modlarında test ediyoruz



- MASAÜSTÜ DEV MOD

![Ekran Resmi 2024-08-04 20 36 22](https://github.com/user-attachments/assets/2eb6949f-bc2f-4212-b18a-1d5ff9429207)


- MASAÜSTÜ PROD MOD

![Ekran Resmi 2024-08-04 20 39 16](https://github.com/user-attachments/assets/538c3d3f-b028-4d8b-9651-c1b4d7cef736)



- MOBİL DEV MOD

![Ekran Resmi 2024-08-04 20 36 04](https://github.com/user-attachments/assets/e8f72e5c-cbda-4a23-822a-3455680edbba)


- MOBİL PROD MOD
![Ekran Resmi 2024-08-04 20 39 34](https://github.com/user-attachments/assets/6921d93c-4c19-47be-b1ef-e673a4d277e7)

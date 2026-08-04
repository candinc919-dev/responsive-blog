const menuButton=document.querySelector("#menuButton");
const mobileNav=document.querySelector("#mobileNav");
const themeButton=document.querySelector("#themeButton");
const filters=document.querySelectorAll(".filter");
const articles=document.querySelectorAll(".article-card");
const newsletterForm=document.querySelector("#newsletterForm");
const formMessage=document.querySelector("#formMessage");

menuButton.addEventListener("click",()=>{
  const open=mobileNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded",String(open));
});
mobileNav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{
  mobileNav.classList.remove("open");
  menuButton.setAttribute("aria-expanded","false");
}));

const savedTheme=localStorage.getItem("minimal-blog-theme");
if(savedTheme==="dark") document.body.classList.add("dark");
function updateThemeButton(){
  const dark=document.body.classList.contains("dark");
  themeButton.textContent=dark?"☀":"☾";
  themeButton.setAttribute("aria-label",dark?"Açık temaya geç":"Koyu temaya geç");
}
updateThemeButton();
themeButton.addEventListener("click",()=>{
  document.body.classList.toggle("dark");
  localStorage.setItem("minimal-blog-theme",document.body.classList.contains("dark")?"dark":"light");
  updateThemeButton();
});

filters.forEach(button=>{
  button.addEventListener("click",()=>{
    filters.forEach(item=>item.classList.remove("active"));
    button.classList.add("active");
    const filter=button.dataset.filter;
    articles.forEach(article=>{
      article.classList.toggle("hidden",filter!=="all"&&article.dataset.category!==filter);
    });
  });
});

newsletterForm.addEventListener("submit",event=>{
  event.preventDefault();
  const email=document.querySelector("#email").value.trim();
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    formMessage.textContent=translations[document.documentElement.lang].invalidEmail;
    return;
  }
  formMessage.textContent=translations[document.documentElement.lang].successMessage;
  newsletterForm.reset();
});

const languageButton=document.querySelector("#languageButton");
const languageLabel=document.querySelector("#languageLabel");

const translations={
  tr:{
    mainNavigation:"Ana navigasyon",mobileNavigation:"Mobil navigasyon",
    navHome:"Ana Sayfa",navArticles:"Yazılar",navAbout:"Hakkında",navNewsletter:"Bülten",
    heroEyebrow:"TASARIM · GELİŞTİRME · ÜRETKENLİK",
    heroTitle:"Daha sade düşün, daha iyi üret.",
    heroText:"Web geliştirme, dijital üretkenlik ve yaratıcı çalışma süreçleri üzerine kısa, anlaşılır ve uygulanabilir notlar.",
    discoverArticles:"Yazıları keşfet",featured:"Öne Çıkan",
    featuredTitle:"Odaklanmayı kolaylaştıran sade çalışma sistemi",
    featuredText:"Günlük işleri karmaşık araçlara ihtiyaç duymadan düzenlemek için basit bir yaklaşım.",
    read6:"6 dk okuma",dateAug4:"4 Ağustos 2026",
    latestEyebrow:"SON YAZILAR",latestTitle:"Yeni fikirler ve pratik notlar",
    filterAll:"Tümü",filterDevelopment:"Geliştirme",filterDesign:"Tasarım",filterProductivity:"Üretkenlik",
    categoryDevelopment:"Geliştirme",categoryDesign:"Tasarım",categoryProductivity:"Üretkenlik",
    article1Title:"Temiz HTML yazmak için 7 küçük alışkanlık",
    article1Text:"Daha okunabilir ve bakımı kolay arayüzler için uygulanabilir temel öneriler.",
    article2Title:"Boşluk kullanımı neden tasarımın yarısıdır?",
    article2Text:"Daha ferah ve profesyonel arayüzler oluşturmak için spacing mantığı.",
    article3Title:"Tek görev yaklaşımıyla dikkat dağınıklığını azalt",
    article3Text:"Aynı anda daha az şey yaparak işleri daha hızlı bitirmenin sade yöntemi.",
    article4Title:"Responsive tasarıma mobile-first başlamak",
    article4Text:"Küçük ekranlardan başlayarak daha sağlam düzenler kurmanın avantajları.",
    article5Title:"Web sitelerinde okunabilir tipografi seçimi",
    article5Text:"Yazı boyutu, satır yüksekliği ve içerik genişliği için temel rehber.",
    article6Title:"Haftalık planı 15 dakikada hazırlamak",
    article6Text:"Öncelikleri belirleyen, sürdürülebilir ve sade bir haftalık plan sistemi.",
    minutes4:"4 dk",minutes5:"5 dk",minutes6:"6 dk",minutes7:"7 dk",
    dateAug2:"2 Ağustos 2026",dateJul30:"30 Temmuz 2026",dateJul27:"27 Temmuz 2026",
    dateJul24:"24 Temmuz 2026",dateJul20:"20 Temmuz 2026",dateJul16:"16 Temmuz 2026",
    aboutEyebrow:"BLOG HAKKINDA",aboutTitle:"Öğrendiklerimi sadeleştirerek paylaşıyorum.",
    aboutText1:"Minimal Notlar; front-end geliştirme, kullanıcı arayüzü tasarımı ve dijital üretkenlik üzerine oluşturulmuş örnek bir blog projesidir.",
    aboutText2:"Bu site HTML, CSS ve vanilla JavaScript ile geliştirilmiş; mobil, tablet ve masaüstü ekranlar için tamamen responsive hazırlanmıştır.",
    newsletterEyebrow:"AYLIK BÜLTEN",newsletterTitle:"Yeni yazıları kaçırma.",
    newsletterText:"Ayda bir kez; kısa notlar, faydalı kaynaklar ve yeni proje fikirleri.",
    emailPlaceholder:"E-posta adresin",subscribe:"Abone Ol",
    footerCopyright:"© 2026 Minimal Notlar",footerCredit:"Can Ali Rıza Dinç tarafından geliştirildi.",
    backToTop:"Yukarı dön ↑",invalidEmail:"Lütfen geçerli bir e-posta adresi gir.",
    successMessage:"Teşekkürler! Demo aboneliğin başarıyla oluşturuldu."
  },
  en:{
    mainNavigation:"Main navigation",mobileNavigation:"Mobile navigation",
    navHome:"Home",navArticles:"Articles",navAbout:"About",navNewsletter:"Newsletter",
    heroEyebrow:"DESIGN · DEVELOPMENT · PRODUCTIVITY",
    heroTitle:"Think simpler, create better.",
    heroText:"Short, clear and practical notes on web development, digital productivity and creative workflows.",
    discoverArticles:"Explore articles",featured:"Featured",
    featuredTitle:"A simple work system that makes focus easier",
    featuredText:"A practical approach to organizing daily work without complicated tools.",
    read6:"6 min read",dateAug4:"August 4, 2026",
    latestEyebrow:"LATEST ARTICLES",latestTitle:"Fresh ideas and practical notes",
    filterAll:"All",filterDevelopment:"Development",filterDesign:"Design",filterProductivity:"Productivity",
    categoryDevelopment:"Development",categoryDesign:"Design",categoryProductivity:"Productivity",
    article1Title:"7 small habits for writing cleaner HTML",
    article1Text:"Practical fundamentals for interfaces that are easier to read and maintain.",
    article2Title:"Why spacing is half of good design",
    article2Text:"A simple spacing mindset for creating cleaner and more professional interfaces.",
    article3Title:"Reduce distraction with a single-task approach",
    article3Text:"A simple way to finish work faster by doing fewer things at the same time.",
    article4Title:"Starting responsive design with mobile-first",
    article4Text:"The advantages of building stronger layouts by starting with smaller screens.",
    article5Title:"Choosing readable typography for websites",
    article5Text:"A practical guide to font size, line height and content width.",
    article6Title:"Build a weekly plan in 15 minutes",
    article6Text:"A sustainable weekly planning system that keeps priorities clear.",
    minutes4:"4 min",minutes5:"5 min",minutes6:"6 min",minutes7:"7 min",
    dateAug2:"August 2, 2026",dateJul30:"July 30, 2026",dateJul27:"July 27, 2026",
    dateJul24:"July 24, 2026",dateJul20:"July 20, 2026",dateJul16:"July 16, 2026",
    aboutEyebrow:"ABOUT THE BLOG",aboutTitle:"I simplify and share what I learn.",
    aboutText1:"Minimal Notes is a sample blog project focused on front-end development, user interface design and digital productivity.",
    aboutText2:"The site was built with HTML, CSS and vanilla JavaScript and is fully responsive across mobile, tablet and desktop screens.",
    newsletterEyebrow:"MONTHLY NEWSLETTER",newsletterTitle:"Never miss a new article.",
    newsletterText:"Once a month: short notes, useful resources and fresh project ideas.",
    emailPlaceholder:"Your email address",subscribe:"Subscribe",
    footerCopyright:"© 2026 Minimal Notes",footerCredit:"Developed by Can Ali Rıza Dinç.",
    backToTop:"Back to top ↑",invalidEmail:"Please enter a valid email address.",
    successMessage:"Thank you! Your demo subscription was created successfully."
  }
};

function applyLanguage(language){
  const dictionary=translations[language]||translations.tr;
  document.documentElement.lang=language;

  document.querySelectorAll("[data-i18n]").forEach(element=>{
    const key=element.dataset.i18n;
    if(dictionary[key]) element.textContent=dictionary[key];
  });

  document.querySelectorAll("[data-i18n-aria]").forEach(element=>{
    const key=element.dataset.i18nAria;
    if(dictionary[key]) element.setAttribute("aria-label",dictionary[key]);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(element=>{
    const key=element.dataset.i18nPlaceholder;
    if(dictionary[key]) element.setAttribute("placeholder",dictionary[key]);
  });

  languageLabel.textContent=language==="tr"?"EN":"TR";
  languageButton.setAttribute("aria-label",language==="tr"?"Switch to English":"Türkçeye geç");
  localStorage.setItem("minimal-blog-language",language);
}

applyLanguage(localStorage.getItem("minimal-blog-language")||"tr");

languageButton.addEventListener("click",()=>{
  applyLanguage(document.documentElement.lang==="tr"?"en":"tr");
});

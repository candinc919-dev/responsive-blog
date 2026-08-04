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
    formMessage.textContent="Lütfen geçerli bir e-posta adresi gir.";
    return;
  }
  formMessage.textContent="Teşekkürler! Demo aboneliğin başarıyla oluşturuldu.";
  newsletterForm.reset();
});
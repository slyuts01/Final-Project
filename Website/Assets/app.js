//Dark and Light Theme
const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      footer = document.querySelector("footer"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
            footer.classList.add("dark");
          }

// js code to toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");
        footer.classList.toggle("dark");

        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });

// js code to toggle search box
        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
 

//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});



body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});



// Image Carousel

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

function init() {
  slides[0].classList.add('active-slide');
  nextButton.addEventListener('click', () => changeSlide(1));
  prevButton.addEventListener('click', () => changeSlide(-1));
}

function changeSlide(direction) {
  slides[currentSlide].classList.remove('active-slide');
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  slides[currentSlide].classList.add('active-slide');
}

  init();

``
//Card Accordion


const accordionHeaders = document.querySelectorAll('.accordion h3');


accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {

    const accordionContent = header.nextElementSibling;

 
    accordionContent.classList.toggle('active');

  
    const isVisible = accordionContent.classList.contains('active');

  
    header.setAttribute('aria-expanded', isVisible);
  });
});



// FAQS section

// Get all the FAQ items

const faqToggles = document.querySelectorAll('.toggle-faq');

faqToggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const faqContent = toggle.parentNode.nextElementSibling;
    toggle.classList.toggle('-active');
    faqContent.classList.toggle('-active');
    if (faqContent.classList.contains('-active')) {
      faqContent.style.display = 'block';
    } else {
      faqContent.style.display = 'none';
    }
  });
});

// FAQS 2 section

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  const title = item.querySelector('.faq-title');
  const text = item.querySelector('.faq-text');

  title.addEventListener('click', () => {
    title.classList.toggle('active');
  });
});





// Tooltip interaction

const tooltipItems = document.querySelectorAll('.tooltip-item');
const title = document.querySelector('h3');
const text = document.querySelector('#text');

tooltipItems.forEach((item) => {
  item.addEventListener('click', () => {
    title.textContent = item.dataset.headerText;
    switch (item.dataset.headerText) {
      case "pos-item-1":
        text.textContent = "This is tooltip 1";
        break;
      case "pos-item-2":
        text.textContent = "This is tooltip 2";
        break;
      case "pos-item-3":
        text.textContent = "This is tooltip 3";
        break;
      case "Building Dynamic and Responsive Websites":
        text.textContent = "As a web developer with expertise in HTML, CSS, and JavaScript, I specialise in building dynamic and responsive websites. From simple websites to complex web applications, I have the skills to create websites that meet your business needs. I have a deep understanding of web development principles and the ability to work with various web development frameworks. I am committed to creating websites that are user-friendly, accessible, and optimized for search engines.";
        break;
    }
  });
});





 
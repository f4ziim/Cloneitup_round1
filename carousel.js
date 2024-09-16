 // JavaScript for automatic sliding and dots navigation
 const slides = document.querySelector('.carousel-inner');
 const dotsContainer = document.querySelector('.absolute.bottom-4');
 const slideCount = slides.children.length;
 let index = 0;

 function showSlide(newIndex) {
   index = newIndex;
   slides.style.transform = `translateX(-${index * 100}%)`;

   // Update dots
   document.querySelectorAll('.dot').forEach((dot, i) => {
     dot.classList.toggle('active', i === index);
   });
 }

 function createDots() {
   for (let i = 0; i < slideCount; i++) {
     const dot = document.createElement('div');
     dot.className = 'dot';
     dot.addEventListener('click', () => showSlide(i));
     dotsContainer.appendChild(dot);
   }
 }

 function startCarousel() {
   createDots();
   showSlide(index);
   setInterval(() => {
     index = (index + 1) % slideCount;
     showSlide(index);
   }, 5000); // Change slide every 5 seconds
 }

 startCarousel();
let date = document.querySelector('#date_adder');
let online_training = document.querySelector('#online_training');
let online_training_container = document.querySelector('#online_training_container');

// Toggle menu for mobile view
document.getElementById('menu-toggle').addEventListener('click', () => {
  const menu = document.getElementById('menu');
  menu.classList.toggle('hidden');
});

online_training.addEventListener("click", () => {
  if (online_training_container.style.display === "none") {
    online_training_container.style.display = "block";
  } else {
    online_training_container.style.display = "none";
  }
})

const date_availability = [
    {
        "id":"Not Available", "className":"cursor-not-allowed bg-gray-300" },
    {
        "id":"Available", "className":"cursor-pointer bg-gray-300" },

]

for (let i = 1; i <= 31; i++) {

  date.innerHTML += `<div class="text-center py-2">${i}</div>`;
  console.log(i);
}

const testimonials = [
      {
          id: 1,
          name: "John Doe",
          role: "CEO, TechCorp",
          content: "Since adopting Founding.co to project completion times, it's like having an extra set of hands!",
          avatar: "https://via.placeholder.com/48"
      },
      {
          id: 2,
          name: "Jane Smith",
          role: "Designer, CreativeCo",
          content: "The transition has been seamless, and the software scales effortlessly as we grow.",
          avatar: "https://via.placeholder.com/48"
      },
      {
          id: 3,
          name: "Alex Johnson",
          role: "Marketing Manager, GrowthInc",
          content: "The transition has been seamless, and the software scales effortlessly as we grow.",
          avatar: "https://via.placeholder.com/48"
      }
  ];

  // testimonials code
  const carouselInner = document.getElementById('carousel-inner');
  const carouselDots = document.getElementById('carousel-dots');
  let currentIndex = 0;

  function createTestimonialElement(testimonial) {
      return `
          <div class="w-full flex-shrink-0 px-4">
              <div class="bg-white rounded-lg shadow-lg p-8">
                  <div class="flex items-center mb-4">
                      <img src="${testimonial.avatar}" alt="${testimonial.name}" class="w-12 h-12 rounded-full mr-4">
                      <div>
                          <h3 class="font-semibold text-lg">${testimonial.name}</h3>
                          <p class="text-gray-600">${testimonial.role}</p>
                      </div>
                  </div>
                  <p class="text-gray-700 italic">"${testimonial.content}"</p>
              </div>
          </div>
      `;
  }

  function createDotElement(index) {
      const dot = document.createElement('button');
      dot.className = `w-3 h-3 rounded-full ${index === 0 ? 'bg-blue-500' : 'bg-gray-300'}`;
      dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
      dot.addEventListener('click', () => goToSlide(index));
      return dot;
  }

  function updateCarousel() {
      carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
      Array.from(carouselDots.children).forEach((dot, index) => {
          dot.className = `w-3 h-3 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`;
      });
  }

  function goToSlide(index) {
      currentIndex = index;
      updateCarousel();
  }

  function nextSlide() {
      currentIndex = (currentIndex + 1) % testimonials.length;
      updateCarousel();
  }

  // Initialize carousel
  testimonials.forEach(testimonial => {
      carouselInner.innerHTML += createTestimonialElement(testimonial);
      carouselDots.appendChild(createDotElement(testimonial.id - 1));
  });

  // Auto-play
  setInterval(nextSlide, 2000);


      // GSAP Animations
      gsap.from('.calendar-section', {
        duration: 1,
        x: -50,
        opacity: 0,
        ease: 'power3.out'
      });
  
      gsap.from('.time-slots', {
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 0.3,
        ease: 'power3.out'
      });
  
      gsap.from('.class-details', {
        duration: 1,
        x: 50,
        opacity: 0,
        delay: 0.6,
        ease: 'power3.out'
      });
  
      // Animate buttons on hover
      gsap.utils.toArray('.time-slots button').forEach(button => {
        button.addEventListener('mouseenter', () => {
          gsap.to(button, {
            scale: 1.05,
            duration: 0.3
          });
        });
  
        button.addEventListener('mouseleave', () => {
          gsap.to(button, {
            scale: 1,
            duration: 0.3
          });
        });
      });
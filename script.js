// إنشاء الخريطة
var map = L.map('map').setView([31.5, 30.75], 10);

// طبقة OSM
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
}).addTo(map);

// طبقة قمر صناعي (Google)
var sat = L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
  maxZoom: 20,
  subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});

// التحكم في الطبقات
L.control.layers({
  "خريطة الشوارع": osm,
  "صورة فضائية": sat
}).addTo(map);

// مثال دائرة
L.circle([31.5, 30.75], {
  color: "red",
  radius: 5000
}).addTo(map).bindPopup("منطقة دراسة في البرلس");

// مقارنة بين الطبقتين
// L.control.sideBySide(osm, sat).addTo(map);

// رسم بياني
var ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['زراعة', 'صيد', 'سكان', 'تلوث'],
    datasets: [{
      data: [40, 30, 20, 10],
      backgroundColor: ['#4CAF50', '#2196F3', '#FFC107', '#F44336']
    }]
  }
});



// ///////////////////////////  السلايدر
function initProductSlider() {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".product-slide");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) slide.classList.add("active");
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  showSlide(currentSlide); // أول صورة
  setInterval(nextSlide, 3000);
}

document.addEventListener("DOMContentLoaded", initProductSlider);


// Generic slideshow starter
function startSlideshow(sectionId) {
  const slides = document.querySelectorAll(`#${sectionId} img`);
  let index = 0;
  setInterval(() => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  }, 4000);
}

// Appointment submit
function submitAppointment(event) {
  event.preventDefault();
  alert("Your appointment has been booked successfully! Thank you for saving lives.");
  window.location.href = "index.html";
}

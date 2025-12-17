// Download button functionality
document.getElementById("downloadBtn").addEventListener("click", (e) => {
  e.preventDefault()

  // Url to the drive file containing the iso
  const isoUrl = "https://drive.google.com/file/d/1TpgZHnAFD9fLcLhNriDiV6N4OfBUYSy7/view?usp=sharing"

  // To change the url of the window to the drive file
  window.location.href = isoUrl;
})

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      })
    }
  })
})

// Add animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe all sections
document.querySelectorAll(".defense-card, .step, .specs-section").forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(20px)"
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  observer.observe(el)
})

//your JS code here. If required.
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
const progress = document.getElementById('progress');

// Current active step
let currentStep = 1;

// Event Listeners
nextButton.addEventListener('click', () => {
  currentStep++;

  if (currentStep > circles.length) {
    currentStep = circles.length;
  }

  updateProgress();
});

prevButton.addEventListener('click', () => {
  currentStep--;

  if (currentStep < 1) {
    currentStep = 1;
  }

  updateProgress();
});

// Update progress and UI
function updateProgress() {
  // Update active circles
  circles.forEach((circle, index) => {
    if (index < currentStep) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  // Update progress bar width
  const activeCircles = document.querySelectorAll('.circle.active');
  progress.style.width = ((activeCircles.length - 1) / (circles.length - 1)) * 100 + '%';

  // Enable/Disable buttons based on step
  prevButton.disabled = currentStep === 1;
  nextButton.disabled = currentStep === circles.length;
}

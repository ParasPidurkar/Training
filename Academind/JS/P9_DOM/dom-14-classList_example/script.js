const myDiv = document.getElementById('myDiv');

// Function to toggle the "bold" class on the element
function toggleBoldClass() {
  myDiv.classList.toggle('bold');
}

// Function to hide or show the element
function toggleHidden() {
  myDiv.classList.toggle('hidden');
}

// Event listeners for click and mouseover events
myDiv.addEventListener('click', toggleBoldClass);
myDiv.addEventListener('mouseover', toggleHidden);
myDiv.addEventListener('mouseout', toggleHidden);

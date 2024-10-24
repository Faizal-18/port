// Function to open the modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block'; // Show the modal
    setTimeout(() => {
        modal.classList.add('show'); // Add 'show' class for transition
    }, 10); // Small delay for smooth transition
}

// Function to close the modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('show'); // Remove 'show' class for fading out effect
    setTimeout(() => {
        modal.style.display = 'none'; // Hide the modal after transition
    }, 300); // Match this with CSS transition duration (0.3s)
}

// Close modal when clicking outside the modal content
window.addEventListener('click', function (event) {
    const modal = document.getElementById('myModal'); // Change this to your modal ID
    if (event.target === modal) {
        closeModal(modal.id);
    }
});

// Toggle the navigation menu for mobile
document.getElementById('toggle-button').addEventListener('click', function () {
    const nav = document.getElementById('side-menu'); // Use the correct ID for your nav
    nav.classList.toggle('active'); // Toggle the 'active' class
});

// Close the navigation menu when clicking outside of it
window.addEventListener('click', function (event) {
    const nav = document.getElementById('side-menu');
    const toggleButton = document.getElementById('toggle-button');

    // Check if the clicked target is outside the nav and toggle button
    if (!nav.contains(event.target) && !toggleButton.contains(event.target)) {
        nav.classList.remove('active'); // Close the nav if clicking outside
    }
});



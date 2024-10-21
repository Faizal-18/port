// Function to open a modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block'; // Show the modal
    setTimeout(() => {
        modal.classList.add('show'); // Add 'show' class for transition
    }, 10); // Delay to trigger transition smoothly
}

// Function to close a modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('show'); // Remove 'show' class for fading out effect
    setTimeout(() => {
        modal.style.display = 'none'; // Hide the modal after transition ends
    }, 300); // Match this with CSS transition duration (0.3s)
}

// Close modal when clicking outside of the modal content
window.addEventListener('click', function(event) {
    const modals = document.getElementsByClassName('modal');
    const nav = document.getElementById('navbar');
    const toggleButton = document.getElementById('toggle-button');

    // Check if clicked outside of any modal
    for (let i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            closeModal(modals[i].id);
        }
    }

    // Close the navigation menu when clicking outside of it
    if (!nav.contains(event.target) && !toggleButton.contains(event.target)) {
        nav.classList.remove('show'); // Close the menu if clicking outside
    }
});

// Toggle the navigation menu for mobile
document.getElementById('toggle-button').addEventListener('click', function () {
    const nav = document.getElementById('navbar');
    nav.classList.toggle('show'); // Toggle the 'show' class to open/close the menu
});

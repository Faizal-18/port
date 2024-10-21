function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block'; // Display the modal
    setTimeout(() => {
        modal.classList.add('show'); // Add class for visibility and trigger transition
    }, 10); // Delay to ensure transition is applied smoothly
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('show'); // Remove class to start the fade-out effect
    setTimeout(() => {
        modal.style.display = 'none'; // Completely hide modal after the transition
    }, 300); // Delay matches CSS transition (0.3s)
}

// Close modal when clicking outside the modal content
window.onclick = function (event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target === modals[i]) {
            closeModal(modals[i].id);
        }
    }
};

// Close modal when pressing the ESC key
window.onkeydown = function(event) {
    if (event.key === "Escape") {
        const modals = document.getElementsByClassName('modal');
        for (let i = 0; i < modals.length; i++) {
            if (modals[i].style.display === 'block') {
                closeModal(modals[i].id); // Close all open modals when ESC is pressed
            }
        }
    }
};

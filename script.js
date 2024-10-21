function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block'; // Show the modal
    setTimeout(() => {
        modal.classList.add('show'); // Add show class to make it visible and enable opacity transition
    }, 10); // Delay to trigger transition smoothly
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('show'); // Remove show class for fading out effect
    setTimeout(() => {
        modal.style.display = 'none'; // Hide the modal after transition ends
    }, 300); // Match this with CSS transition duration (0.3s)
}

// Close modal when clicking outside the modal content
window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            closeModal(modals[i].id);
        }
    }
}

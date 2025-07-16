
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Show payment section
    document.getElementById('paymentSection').style.display = 'block';
});

// For demonstration purposes, these functions are placeholders
function startChat() {
    alert('Chat functionality coming soon!');
}

function startVideoCall() {
    alert('Video call functionality coming soon!');
}
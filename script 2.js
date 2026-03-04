// Search functionality
function searchBooks() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const bookCards = document.querySelectorAll('.book-card');
    
    bookCards.forEach(card => {
        const text = card.innerText.toLowerCase();
        if (text.includes(input)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

// Add to share list
function addToShare(button) {
    const bookTitle = button.parentElement.querySelector('h3').innerText;
    alert(`"${bookTitle}" شیئر لسٹ میں شامل ہو گئی!`);
    button.style.backgroundColor = '#4CAF50';
    button.innerText = 'شیئر لسٹ میں ہے ✓';
}

// Rent book
function rentBook(button) {
    const bookTitle = button.parentElement.querySelector('h3').innerText;
    alert(`"${bookTitle}" کے لیے درخواست بھیج دی گئی!`);
}

// Submit rental form
function submitRental(event) {
    event.preventDefault();
    alert('آپ کی درخواست کامیابی سے بھیج دی گئی!');
    event.target.reset();
}

// Submit share form
function submitShare(event) {
    event.preventDefault();
    const inputs = event.target.querySelectorAll('input');
    const bookName = inputs[0].value;
    alert(`"${bookName}" کامیابی سے شیئر ہو گئی!`);
    event.target.reset();
}

// Highlight search results
document.getElementById('searchInput').addEventListener('keyup', searchBooks);
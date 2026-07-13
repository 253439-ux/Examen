// Carrusel
let currentSlide = 0;
const track = document.getElementById('carouselTrack');
const slides = document.querySelectorAll('.carousel-slide');

function moveCarousel(direction) {
    if (!track || slides.length === 0) return;
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
}
if (track) setInterval(() => moveCarousel(1), 5000);

// Filtro de productos
function filterCatalog(category, event) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    if (event) event.currentTarget.classList.add('active');

    document.querySelectorAll('.product-item').forEach(product => {
        if (category === 'all' || product.classList.contains(category)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Carrito
function calculateTotal() {
    let total = 0;
    document.querySelectorAll('.cart-table tbody tr').forEach(row => {
        const price = parseFloat(row.querySelector('.item-price').innerText.replace('$', ''));
        const qty = parseInt(row.querySelector('.cart-input-qty').value) || 0;
        total += price * qty;
    });
    const totalEl = document.getElementById('cartTotal');
    if (totalEl) totalEl.innerText = `$${total.toFixed(2)}`;
}

function removeCartItem(button) {
    button.closest('tr').remove();
    calculateTotal();
}

document.addEventListener('DOMContentLoaded', calculateTotal);
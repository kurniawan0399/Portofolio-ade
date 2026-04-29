// Data Gallery
var galleryImages = [
    { src: '3058.jpg.jpeg' }, { src: '2776.jpg.jpeg' }, { src: '360.jpg.jpeg' }, { src: '1746.jpg.jpeg' },
    { src: '4429.jpg.jpeg' }, { src: '1438.jpg.jpeg' }, { src: '1152.jpg.jpeg' }, { src: '1592.jpg.jpeg' }
];
var currentIndex = 0;

// Lightbox Functions
function openLightbox(index) {
    currentIndex = index;
    var lightbox = document.getElementById('lightbox');
    var img = document.getElementById('lightboxImg');
    img.src = galleryImages[index].src;
    document.getElementById('currentNum').textContent = index + 1;
    document.getElementById('totalNum').textContent = galleryImages.length;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = '';
}

function nextImage() {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    openLightbox(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    openLightbox(currentIndex);
}

// Event Listeners
document.addEventListener('keydown', function(e) {
    if (document.getElementById('lightbox').classList.contains('active')) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
    }
});

document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) closeLightbox();
});

// Navbar Scroll
var navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
});

// Mobile Menu
var menuBtn = document.getElementById('menuBtn');
var closeMenu = document.getElementById('closeMenu');
var mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', function() {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', function() {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
});

mobileMenu.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Reveal Animation
var reveals = document.querySelectorAll('.reveal');
var revealObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.1 });

reveals.forEach(function(el) {
    revealObserver.observe(el);
});

// Progress Bar
var progressBars = document.querySelectorAll('.progress-bar');
var progressObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            var width = entry.target.getAttribute('data-width');
            if (width) entry.target.style.width = width + '%';
        }
    });
}, { threshold: 0.5 });

progressBars.forEach(function(bar) {
    progressObserver.observe(bar);
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
            var offset = target.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({ top: offset, behavior: 'smooth' });
        }
    });
});

// Contact Form
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var btn = this.querySelector('button[type="submit"]');
    var originalText = btn.textContent;
    btn.textContent = 'Pesan Terkirim!';
    btn.style.background = 'linear-gradient(135deg, #10B981 0%, #059669 100%)';
    setTimeout(function() {
        btn.textContent = originalText;
        btn.style.background = '';
    }, 3000);
});

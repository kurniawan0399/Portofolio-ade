/* ============================================ */
/* DATA GALERI FOTO PENGALAMAN                 */
/* Ganti path file sesuai dengan lokasi foto   */
/* ============================================ */
var galleryImages = [
    { src: '3058.jpg.jpeg' },
    { src: '2776.jpg.jpeg' },
    { src: '360.jpg.jpeg' },
    { src: '1746.jpg.jpeg' },
    { src: '4429.jpg.jpeg' },
    { src: '1438.jpg.jpeg' },
    { src: '1152.jpg.jpeg' },
    { src: '1592.jpg.jpeg' }
];

var currentIndex = 0;

/* ============================================ */
/* LIGHTBOX FUNCTIONS                          */
/* ============================================ */
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

// Keyboard navigation for lightbox
document.addEventListener('keydown', function(e) {
    if (document.getElementById('lightbox').classList.contains('active')) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
    }
});

// Close lightbox when clicking outside image
document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) closeLightbox();
});

/* ============================================ */
/* NAVBAR SCROLL EFFECT                        */
/* ============================================ */
var navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

/* ============================================ */
/* MOBILE MENU                                 */
/* ============================================ */
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

// Close menu when clicking a link
mobileMenu.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

/* ============================================ */
/* REVEAL ANIMATION ON SCROLL                  */
/* ============================================ */
var reveals = document.querySelectorAll('.reveal');
var revealObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

reveals.forEach(function(el) {
    revealObserver.observe(el);
});

/* ============================================ */
/* PROGRESS BAR ANIMATION                      */
/* ============================================ */
var progressBars = document.querySelectorAll('.progress-bar');
var progressObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            var width = entry.target.getAttribute('data-width');
            if (width) {
                entry.target.style.width = width + '%';
            }
        }
    });
}, { threshold: 0.5 });

progressBars.forEach(function(bar) {
    progressObserver.observe(bar);
});

/* ============================================ */
/* SMOOTH SCROLL FOR ANCHOR LINKS              */
/* ============================================ */
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

/* ============================================ */
/* CONTACT FORM HANDLER                        */
/* ============================================ */
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

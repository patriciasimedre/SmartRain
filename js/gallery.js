// ===================================
// Gallery Page JavaScript
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // Gallery Filter
    // ===================================
    
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Filter gallery items
            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            item.style.transition = 'all 0.4s ease';
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 50);
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 400);
                }
            });
        });
    });
    
    // ===================================
    // Image Modal/Lightbox
    // ===================================
    
    const viewBtns = document.querySelectorAll('.view-btn');
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    
    viewBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            
            const galleryItem = this.closest('.gallery-item');
            const img = galleryItem.querySelector('img');
            const title = galleryItem.querySelector('.gallery-overlay h3').textContent;
            const desc = galleryItem.querySelector('.gallery-overlay p').textContent;
            
            modalImage.src = img.src;
            modalCaption.innerHTML = `<h3>${title}</h3><p>${desc}</p>`;
            imageModal.classList.add('active');
            
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close modal
    if (imageModal) {
        const closeModal = imageModal.querySelector('.modal-close');
        
        closeModal.addEventListener('click', function() {
            imageModal.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        imageModal.addEventListener('click', function(e) {
            if (e.target === imageModal) {
                imageModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && imageModal && imageModal.classList.contains('active')) {
            imageModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // ===================================
    // Gallery Items Animation on Load
    // ===================================
    
    galleryItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.6s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 50);
    });
    
    // ===================================
    // Video Lazy Loading
    // ===================================
    
    const videoIframes = document.querySelectorAll('.video-wrapper iframe');
    
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const iframe = entry.target;
                if (iframe.dataset.src) {
                    iframe.src = iframe.dataset.src;
                    iframe.removeAttribute('data-src');
                }
                videoObserver.unobserve(iframe);
            }
        });
    }, { threshold: 0.25 });
    
    videoIframes.forEach(iframe => {
        videoObserver.observe(iframe);
    });
    
});

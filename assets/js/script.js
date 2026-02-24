document.addEventListener('DOMContentLoaded', function() {
    // Floating scroll to top button
    const backToTop = document.querySelector('.up-float');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // TOC Toggle
    const tocHeader = document.querySelector('.toc-header');
    const tocContent = document.querySelector('.toc-content');
    const tocIcon = document.querySelector('.toc-icon');

    if (tocHeader && tocContent) {
        tocHeader.addEventListener('click', () => {
            if (tocContent.style.display === 'none') {
                tocContent.style.display = 'block';
                tocIcon.classList.replace('fa-chevron-down', 'fa-chevron-up');
            } else {
                tocContent.style.display = 'none';
                tocIcon.classList.replace('fa-chevron-up', 'fa-chevron-down');
            }
        });
    }

    // Smooth scroll for TOC links
    document.querySelectorAll('.toc-content a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Share buttons functionality
    const shareBtns = document.querySelectorAll('.share-btn');
    const pageUrl = encodeURIComponent(window.location.href);
    const pageTitle = encodeURIComponent(document.title);

    shareBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            let shareUrl = '';
            
            if (this.classList.contains('share-fb')) {
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
            } else if (this.classList.contains('share-tw')) {
                shareUrl = `https://twitter.com/intent/tweet?text=${pageTitle}&url=${pageUrl}`;
            } else if (this.classList.contains('share-wa')) {
                shareUrl = `https://api.whatsapp.com/send?text=${pageTitle}%20${pageUrl}`;
            }
            
            if (shareUrl) {
                window.open(shareUrl, '_blank', 'width=600,height=400');
            }
        });
    });
});

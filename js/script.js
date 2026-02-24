// Main JS for Sewa Paintball Batu Malang

document.addEventListener('DOMContentLoaded', function() {
    // 1. Back to Top Button
    const upButton = document.querySelector('.floating-up');
    
    window.onscroll = function() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            upButton.style.display = 'flex';
        } else {
            upButton.style.display = 'none';
        }
    };

    if (upButton) {
        upButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 2. Automatic TOC for Article Pages
    const tocContainer = document.getElementById('toc-content');
    if (tocContainer) {
        const articleContent = document.querySelector('.article-body');
        const headings = articleContent.querySelectorAll('h2, h3');
        const tocList = document.createElement('ul');
        tocList.className = 'toc-list';

        headings.forEach((heading, index) => {
            const id = 'heading-' + index;
            heading.id = id;

            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = '#' + id;
            a.textContent = heading.textContent;
            
            if (heading.tagName === 'H3') {
                a.className = 'h3-link';
            }

            li.appendChild(a);
            tocList.appendChild(li);
        });

        tocContainer.appendChild(tocList);

        // Toggle TOC
        const tocToggle = document.getElementById('toc-toggle');
        if (tocToggle) {
            tocToggle.addEventListener('click', function() {
                const list = document.querySelector('.toc-list');
                list.style.display = list.style.display === 'none' ? 'block' : 'none';
                this.querySelector('i').className = list.style.display === 'none' ? 'bi bi-chevron-down' : 'bi bi-chevron-up';
            });
        }
    }

    // 3. Share Buttons
    window.shareToSocial = function(platform) {
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent(document.title);
        let shareUrl = '';

        switch(platform) {
            case 'wa':
                shareUrl = `https://api.whatsapp.com/send?text=${text}%20${url}`;
                break;
            case 'fb':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                break;
            case 'tw':
                shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
                break;
        }

        if (shareUrl) {
            window.open(shareUrl, '_blank');
        }
    };
});

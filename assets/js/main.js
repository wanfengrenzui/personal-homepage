/* ===============================================
   ALBERT'S HOMEPAGE - MAIN JAVASCRIPT FILE
   ===============================================
   This file contains the logic for:
   1. Mobile Navigation Menu Toggle
   2. Active Link Highlighting on Scroll
   3. Modal (Pop-up) for Contact QR Codes
   4. Project Filtering
   5. Scroll Reveal
   6. GA4 Tracking (scroll depth / project / notes / contact)
   =============================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* ===============================================
       1. MOBILE NAVIGATION MENU TOGGLE
       =============================================== */
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelectorAll('.nav__link');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show-menu');
        });
    }

    const linkAction = () => {
        if (navMenu) {
            navMenu.classList.remove('show-menu');
        }
    };
    navLinks.forEach(link => link.addEventListener('click', linkAction));


    /* ===============================================
       2. ACTIVE LINK HIGHLIGHTING ON SCROLL
       =============================================== */
    const sections = document.querySelectorAll('section[id]');

    function scrollActive() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 58;
            const sectionId = current.getAttribute('id');

            const link = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

            if (link) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    link.classList.add('active-link');
                } else {
                    link.classList.remove('active-link');
                }
            }
        });
    }
    window.addEventListener('scroll', scrollActive);


    /* ===============================================
       3. MODAL (POP-UP) FOR CONTACT QR CODES
       =============================================== */
    const modalViews = document.querySelectorAll('.modal');
    const modalBtns = {
        'wechat-btn': document.getElementById('wechat-modal'),
        'qq-btn': document.getElementById('qq-modal')
    };
    const modalCloses = document.querySelectorAll('.modal__close');

    const openModal = (modalElement) => {
        if (modalElement) modalElement.classList.add('active');
    };

    Object.keys(modalBtns).forEach(buttonId => {
        const btn = document.getElementById(buttonId);
        if (btn) {
            btn.addEventListener('click', () => {
                openModal(modalBtns[buttonId]);
            });
        }
    });

    const closeModal = (event) => {
        const modal = event.target.closest('.modal');
        if (modal) modal.classList.remove('active');
    };
    modalCloses.forEach(closeBtn => {
        closeBtn.addEventListener('click', closeModal);
    });

    modalViews.forEach(modal => {
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.classList.remove('active');
            }
        });
    });


    /* ===============================================
       4. PROJECT FILTERING
       =============================================== */
    const filterContainer = document.querySelector('.projects__filters');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterContainer) {
        filterContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('filter-button')) {
                const activeBtn = filterContainer.querySelector('.active');
                if (activeBtn) activeBtn.classList.remove('active');
                e.target.classList.add('active');

                const filterValue = e.target.getAttribute('data-filter');

                projectCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');

                    if (filterValue === 'all' || cardCategory === filterValue) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
            }
        });
    }


    /* ===============================================
       5. Scroll Reveal for Internship Cards
       =============================================== */
    const revealEls = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    revealEls.forEach(el => revealObserver.observe(el));


    /* ===============================================
       6. GA4 - Scroll Depth Tracking (25/50/75/90/100)
       =============================================== */

    // 只记录一次，避免刷屏
    const scrollTracked = {
        25: false,
        50: false,
        75: false,
        90: false,
        100: false
    };

    const depths = [25, 50, 75, 90, 100];

    const handleScrollDepth = () => {
        const scrollTop = window.scrollY || window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;

        if (docHeight <= 0) return;

        const scrolled = (scrollTop / docHeight) * 100;

        depths.forEach(depth => {
            if (!scrollTracked[depth] && scrolled >= depth) {
                scrollTracked[depth] = true;

                if (typeof gtag === 'function') {
                    gtag('event', 'scroll_depth', {
                        depth: depth,                          // 自定义维度：25/50/75/90/100
                        percent_scrolled: depth,               // 方便在 GA4 里直接读
                        page_location: window.location.href
                    });
                }
            }
        });
    };

    window.addEventListener('scroll', handleScrollDepth);


    /* ===============================================
       7. GA4 - Project Card Click Tracking
       =============================================== */

    // 统一监听每一张项目卡片，而不是每个 <a>，避免重复事件
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if (!link) return;  // 只在真正点到链接时记录

            const titleEl = card.querySelector('.project-card__title');
            const title = titleEl ? titleEl.textContent.trim() : link.textContent.trim();

            const url = link.getAttribute('href') || '';

            if (typeof gtag === 'function') {
                gtag('event', 'project_click', {
                    project_title: title,
                    project_url: url,
                    page_location: window.location.href
                });
            }
        });
    });


    /* ===============================================
       8. GA4 - Notes Click Tracking
       =============================================== */

    // Notes mini list
    document.querySelectorAll('.notes-mini-item').forEach(link => {
        link.addEventListener('click', () => {
            const titleEl = link.querySelector('.notes-mini-title');
            const title = titleEl ? titleEl.textContent.trim() : link.textContent.trim();
            const url = link.getAttribute('href') || '';

            if (typeof gtag === 'function') {
                gtag('event', 'notes_click', {
                    note_title: title,
                    note_url: url,
                    source: 'mini_list',
                    page_location: window.location.href
                });
            }
        });
    });

    // Notes cards
    document.querySelectorAll('.note-card').forEach(card => {
        const overlayLink = card.querySelector('.note-card__overlay-link');
        if (!overlayLink) return;

        overlayLink.addEventListener('click', () => {
            const titleEl = card.querySelector('.note-card__title');
            const title = titleEl ? titleEl.textContent.trim() : overlayLink.textContent.trim();
            const url = overlayLink.getAttribute('href') || '';

            if (typeof gtag === 'function') {
                gtag('event', 'notes_click', {
                    note_title: title,
                    note_url: url,
                    source: 'card',
                    page_location: window.location.href
                });
            }
        });
    });


    /* ===============================================
       9. GA4 - Contact Click Tracking
       =============================================== */
    const emailBtn = document.querySelector('a[href^="mailto:"]');
    if (emailBtn) {
        emailBtn.addEventListener('click', () => {
            if (typeof gtag === 'function') {
                gtag('event', 'contact_click', {
                    method: 'email',
                    page_location: window.location.href
                });
            }
        });
    }

    const wechatBtn = document.getElementById('wechat-btn');
    if (wechatBtn) {
        wechatBtn.addEventListener('click', () => {
            if (typeof gtag === 'function') {
                gtag('event', 'contact_click', {
                    method: 'wechat',
                    page_location: window.location.href
                });
            }
        });
    }

    const qqBtn = document.getElementById('qq-btn');
    if (qqBtn) {
        qqBtn.addEventListener('click', () => {
            if (typeof gtag === 'function') {
                gtag('event', 'contact_click', {
                    method: 'qq',
                    page_location: window.location.href
                });
            }
        });
    }

}); // End of DOMContentLoaded

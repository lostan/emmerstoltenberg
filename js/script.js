document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.querySelector('.lang-btn');
    const langDropdown = document.querySelector('.lang-dropdown');
    const langLinks = document.querySelectorAll('[data-lang]');
    
    // Toggle dropdown
    if (langBtn) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('show');
        });
    }

    // Close dropdown on click outside
    document.addEventListener('click', () => {
        if (langDropdown) {
            langDropdown.classList.remove('show');
        }
    });

    // Language handling
    function setLanguage(lang) {
        localStorage.setItem('preferredLanguage', lang);
        document.documentElement.lang = lang;
        
        // Update button text
        if (langBtn) {
            langBtn.innerHTML = `${lang.toUpperCase()} <i class="ri-arrow-down-s-line"></i>`;
        }

        // Update translations
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                if(el.tagName === 'META' && el.getAttribute('name') === 'description') {
                    el.setAttribute('content', translations[lang][key]);
                } else if(el.tagName === 'INPUT' && el.getAttribute('type') === 'submit') {
                    el.value = translations[lang][key];
                } else {
                    el.innerHTML = translations[lang][key];
                }
            }
        });
        
        // Update Title
        if (translations[lang] && translations[lang].page_title) {
            document.title = translations[lang].page_title;
        }
    }

    // Init
    // Check if user has saved preference, otherwise default to 'no'
    // You could also check navigator.language here if desired
    const savedLang = localStorage.getItem('preferredLanguage') || 'no';
    setLanguage(savedLang);

    // Event listeners for links
    langLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = link.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
});

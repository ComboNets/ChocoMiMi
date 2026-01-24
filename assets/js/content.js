// Content rendering
document.addEventListener('DOMContentLoaded', () => {
    // Welcome cards
    const welcomeGrid = document.getElementById('welcome-grid');
    SITE_CONFIG.welcome.forEach(item => {
        const card = document.createElement('div');
        card.className = 'welcome-card';
        card.innerHTML = `
            <div class="card-icon">${item.icon}</div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        `;
        welcomeGrid.appendChild(card);
    });
    
    // About section
    const aboutGrid = document.getElementById('about-grid');
    const about = SITE_CONFIG.about;
    aboutGrid.innerHTML = `
        <div class="about-content">
            <h2 class="section-title">${about.title}</h2>
            <div class="section-divider"></div>
            ${about.paragraphs.map(p => `<p class="about-text">${p}</p>`).join('')}
            <a href="${about.cta.href}" class="btn-secondary">${about.cta.text}</a>
        </div>
        <div class="about-image">
            <img src="${about.image}" alt="${about.title}" loading="lazy">
        </div>
    `;
    
    // Menu items
    const menuGrid = document.getElementById('menu-grid');
    SITE_CONFIG.menu.forEach(item => {
        const menuCard = document.createElement('div');
        menuCard.className = 'menu-card';
        menuCard.innerHTML = `
            <div class="menu-image">
                <img src="${item.image}" alt="${item.title}" loading="lazy">
                ${item.badge ? `<div class="menu-badge">${item.badge}</div>` : ''}
            </div>
            <div class="menu-content">
                <h3 class="menu-title">${item.title}</h3>
                <p class="menu-description">${item.description}</p>
                <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="btn-secondary">Ver Detalles</a>
            </div>
        `;
        menuGrid.appendChild(menuCard);
    });
    
    // Events section
    const eventsContent = document.getElementById('events-content');
    const events = SITE_CONFIG.events;
    eventsContent.innerHTML = `
        <div class="events-image">
            <img src="${events.image}" alt="${events.title}" loading="lazy">
        </div>
        <div class="events-info">
            <h2 class="section-title">${events.title}</h2>
            <div class="section-divider"></div>
            <p class="events-description">${events.description}</p>
            <ul class="events-features">
                ${events.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
            <div class="events-actions">
                <a href="${events.link}" target="_blank" rel="noopener noreferrer" class="btn-secondary">Ver Información</a>
                <a href="${events.cta.href}" class="btn-primary">${events.cta.text}</a>
            </div>
        </div>
    `;
    
    // Services
    const servicesGrid = document.getElementById('services-grid');
    SITE_CONFIG.services.forEach(service => {
        const serviceItem = document.createElement('div');
        serviceItem.className = 'service-item';
        serviceItem.innerHTML = `
            <div class="service-icon">${service.icon}</div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            ${service.link ? `<a href="${service.link}" target="_blank" rel="noopener noreferrer" class="service-link">Ver más →</a>` : ''}
        `;
        servicesGrid.appendChild(serviceItem);
    });
    
    // Location
    const locationContent = document.getElementById('location-content');
    const location = SITE_CONFIG.location;
    locationContent.innerHTML = `
        <div class="location-info">
            <h3>Nuestra Ubicación</h3>
            <div class="location-address">
                <span class="icon">📍</span>
                <p>${location.address}</p>
            </div>
            <a href="${location.googleMapsUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary">
                Ver en Google Maps
            </a>
        </div>
        <div class="location-map">
            <img src="${location.image}" alt="Ubicación ChocoMimi" loading="lazy">
        </div>
    `;
    
    // Contact
    const contactGrid = document.getElementById('contact-grid');
    const contact = SITE_CONFIG.contact;
    contactGrid.innerHTML = `
        <div class="contact-info">
            <h3>Contáctanos</h3>
            <div class="contact-item">
                <strong>Horario:</strong>
                <p>${contact.hours}</p>
            </div>
            <div class="contact-item">
                <strong>Email:</strong>
                <p>${contact.email}</p>
            </div>
        </div>
        <div class="contact-whatsapp">
            <h3>WhatsApp</h3>
            ${contact.whatsapp.map(wa => `
                <a href="${wa.url}" target="_blank" rel="noopener noreferrer" class="whatsapp-btn">
                    <div class="whatsapp-image">
                        <img src="${wa.image}" alt="${wa.name}">
                    </div>
                    <div class="whatsapp-info">
                        <strong>${wa.name}</strong>
                        <span>Enviar mensaje →</span>
                    </div>
                </a>
            `).join('')}
        </div>
    `;
    
    // Footer
    const footerContent = document.getElementById('footer-content');
    footerContent.innerHTML = `
        <div class="footer-logo">
            <span class="logo-name">ChocoMimi</span>
            <span class="logo-tagline">Cafetería & Eventos</span>
        </div>
        <p class="footer-text">${SITE_CONFIG.footer.copyright}</p>
    `;
});

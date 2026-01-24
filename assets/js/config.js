const SITE_CONFIG = {
    cafe: {
        name: 'ChocoMimi',
        tagline: 'Cafetería & Eventos'
    },
    
    navigation: [
        { label: 'Inicio', href: '#home' },
        { label: 'Nosotros', href: '#about' },
        { label: 'Menú', href: '#menu' },
        { label: 'Eventos', href: '#events' },
        { label: 'Servicios', href: '#services' },
        { label: 'Contacto', href: '#contact' }
    ],

    hero: [
        {
            image: 'https://ugc.production.linktr.ee/f9adbd51-fd49-47f1-b38d-25492f0fc104_IMG-6402.jpeg',
            title: 'Bienvenido a ChocoMimi',
            subtitle: 'Donde cada momento se convierte en un dulce recuerdo',
            cta: { text: 'Ver Menú', href: '#menu' }
        },
        {
            image: 'https://ugc.production.linktr.ee/8af9289d-38fb-48f6-8584-037970147b01_IMG-1834.jpeg',
            title: 'Nuestra Carta 2026',
            subtitle: 'Sabores únicos y deliciosas opciones para todos',
            cta: { text: 'Ver Carta', href: '#menu' }
        },
        {
            image: 'https://ugc.production.linktr.ee/35d7d697-2b80-404d-855d-bfb44aea3fb3_IMG-4167.jpeg',
            title: 'Tortas Especiales',
            subtitle: 'Creaciones personalizadas para tus celebraciones',
            cta: { text: 'Hacer Pedido', href: '#contact' }
        }
    ],

    welcome: [
        {
            icon: '☕',
            title: 'Cafetería',
            description: 'Café de calidad y repostería artesanal preparada con amor'
        },
        {
            icon: '🎉',
            title: 'Eventos',
            description: 'El lugar perfecto para tus celebraciones especiales'
        },
        {
            icon: '🍰',
            title: 'Tortas',
            description: 'Tortas personalizadas para cada ocasión'
        }
    ],

    about: {
        title: 'Nuestra Historia',
        image: 'https://ugc.production.linktr.ee/f9adbd51-fd49-47f1-b38d-25492f0fc104_IMG-6402.jpeg',
        paragraphs: [
            'ChocoMimi es más que una cafetería, es un lugar donde las familias y amigos se reúnen para compartir momentos especiales. Nos especializamos en crear experiencias memorables a través de nuestros deliciosos productos y servicio excepcional.',
            'Desde nuestro menú del día hasta tortas personalizadas, cada detalle está cuidadosamente preparado para superar tus expectativas.'
        ],
        cta: { text: 'Ver Nuestro Menú', href: '#menu' }
    },

    menu: [
        {
            image: 'https://ugc.production.linktr.ee/8af9289d-38fb-48f6-8584-037970147b01_IMG-1834.jpeg',
            title: 'Carta 2026',
            badge: 'Nuevo',
            description: 'Nuestra carta completa con opciones dulces y saladas para todos los gustos',
            link: 'https://drive.google.com/file/d/1UYmi98T0xEdmLcGcJJCKZ1gqQ3i28feH/view?usp=drivesdk'
        },
        {
            image: 'https://ugc.production.linktr.ee/bfd944c6-bba7-4582-b01d-479bae50a033_IMG-8695.jpeg',
            title: 'Menú del Día 🍽️',
            badge: 'Popular',
            description: 'Delicioso almuerzo diario con opciones variadas y frescas',
            link: 'https://drive.google.com/file/d/1JdzbLVd9apbBo1bcwoP0smZrUKFDDFq0/view?usp=drivesdk'
        },
        {
            image: 'https://ugc.production.linktr.ee/35d7d697-2b80-404d-855d-bfb44aea3fb3_IMG-4167.jpeg',
            title: 'Tortas por Pedido 🍰',
            badge: null,
            description: 'Tortas personalizadas para cumpleaños, bodas y celebraciones especiales',
            link: 'https://drive.google.com/file/d/1IFoTWQ8GZj--uIvL3enjiwZVJweY53Pn/view?usp=drivesdk'
        }
    ],

    events: {
        title: 'Tu Evento en ChocoMimi',
        image: 'https://ugc.production.linktr.ee/f730a40d-e29f-4d95-aafc-3dac023e9a0a_IMG-3488.jpeg',
        description: 'Organizamos eventos especiales en nuestro acogedor local. Desde cumpleaños hasta reuniones corporativas, creamos el ambiente perfecto para tu celebración.',
        features: [
            'Espacio climatizado',
            'Decoración personalizada',
            'Menú adaptado a tu evento',
            'Servicio completo de catering',
            'Tortas y dulces especiales'
        ],
        link: 'https://drive.google.com/file/d/1ey96rrOZ1M8kXSGoQSiXslPFIIDo5k_f/view?usp=drivesdk',
        cta: { text: 'Consultar Disponibilidad', href: '#contact' }
    },

    services: [
        {
            icon: '🥐',
            image: 'https://ugc.production.linktr.ee/02d7512e-13ee-4c7f-bf53-fe2be2907093_IMG-3487.jpeg',
            title: 'Dulces & Salados',
            description: 'Variedad de bocaditos dulces y salados para tus eventos',
            link: 'https://drive.google.com/file/d/12PcZ-qbgyNuTjDcoenxdrLQ8t4JcYSzv/view?usp=drivesdk'
        },
        {
            icon: '🍱',
            image: 'https://ugc.production.linktr.ee/b4406bc1-a4b1-42f9-8923-0d5accd898cd_IMG-3988.jpeg',
            title: 'Buffet Autoservice',
            description: 'Buffet completo en nuestra ubicación para tus eventos',
            link: 'https://drive.google.com/file/d/1mTAwkUJtGfXkef97G0Zg3hDEyIwf86tT/view?usp=drivesdk'
        },
        {
            icon: '📅',
            title: 'Reservas',
            description: 'Reserva tu mesa o espacio para eventos con anticipación'
        },
        {
            icon: '🚗',
            title: 'Para Llevar',
            description: 'Todas nuestras delicias disponibles para llevar'
        },
        {
            icon: '🎂',
            title: 'Pedidos Especiales',
            description: 'Tortas y productos personalizados bajo pedido'
        },
        {
            icon: '☕',
            title: 'Café Premium',
            description: 'Variedades de café de alta calidad'
        }
    ],

    location: {
        address: '1º Junta Municipal, Dr Juan Eulogio Estigarribia 051203',
        googleMapsUrl: 'https://maps.app.goo.gl/sc7DtZPJZx6w6qBL8?g_st=ic',
        embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.0!2d-56.0!3d-25.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE4JzAwLjAiUyA1NsKwMDAnMDAuMCJX!5e0!3m2!1ses!2spy!4v1234567890',
        image: 'https://ugc.production.linktr.ee/72e19826-8bf0-4ef9-9e6f-71889f651908_IMG-9417.jpeg'
    },

    contact: {
        whatsapp: [
            {
                name: 'ChocoMimi',
                number: '+595',
                url: 'https://wa.link/4doqav',
                image: 'https://ugc.production.linktr.ee/663824bf-65dd-4748-8838-b124d8705c26_IMG-6402.jpeg'
            },
            {
                name: 'Eventos - Camili Fiss',
                number: '+595',
                url: 'https://wa.link/m78gpl',
                image: 'https://ugc.production.linktr.ee/882327a9-ee4f-4666-b738-c2095e002a30_IMG-3490.jpeg'
            }
        ],
        email: 'info@chocomimi.com',
        hours: 'Lunes a Domingo: 8:00 - 20:00'
    },

    footer: {
        copyright: '© 2026 ChocoMimi - Cafetería & Eventos. Todos los derechos reservados.'
    }
};

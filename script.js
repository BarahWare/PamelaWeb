// Data
const products = [
    {
        name: "Cupcakes",
        description: "Delicados y esponjosos cupcakes decorados con buttercream suave y detalles artesanales. Perfectos para regalar o acompañar tu tarde.",
        image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=2070&auto=format&fit=crop",
        whatsappMessage: "Hola! 😊 Quisiera consultar por los cupcakes."
    },
    {
        name: "Tortas Personalizadas",
        description: "Diseñamos la torta de tus sueños. Bizcochos húmedos y rellenos abundantes con decoración premium para cualquier evento.",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1989&auto=format&fit=crop",
        whatsappMessage: "Hola! 🎂 Quisiera consultar por una torta personalizada."
    },
    {
        name: "Budines",
        description: "Sabores clásicos y especiales con una textura irresistible. Ideales para el desayuno o la hora del té, horneados con mucho amor.",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flasrecetasdemiabuela.recipesown.com%2Fwp-content%2Fuploads%2F2024%2F04%2FBudin-de-Banana-2.webp&f=1&nofb=1&ipt=6fd95b5ed69d730492d9e346b122fce58fb8278b4e2bb16a58e58aa3b8da7f0b",
        whatsappMessage: "Hola! ✨ Quisiera consultar por los budines artesanales."
    },
    {
        name: "Tartas Frutales",
        description: "Masa quebrada perfecta, crema pastelera suave y la mejor selección de frutas frescas de estación. Un clásico que no falla.",
        image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?q=80&w=2070&auto=format&fit=crop",
        whatsappMessage: "Hola! 🍓 Quisiera consultar por las tartas frutales."
    },
    {
        name: "Mini Cakes",
        description: "Nuestras mejores tortas en versión individual. La opción más elegante y sofisticada para mesas dulces o pequeños caprichos.",
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=2064&auto=format&fit=crop",
        whatsappMessage: "Hola! 🍰 Quisiera consultar por las mini cakes."
    },
    {
        name: "Box Desayuno",
        description: "Sorprende a esa persona especial con una box cuidada al detalle. Incluye una selección premium de nuestra pastelería y mucho amor.",
        image: "https://images.pexels.com/photos/6205587/pexels-photo-6205587.jpeg?auto=compress&cs=tinysrgb&w=800",
        whatsappMessage: "Hola! 🎁 Quisiera consultar por las box de desayuno."
    }
];

const events = [
    {
        name: "Cookies Infantiles",
        description: "Galletas temáticas decoradas a mano con glasé real, perfectas para souvenirs y mesas dulces infantiles.",
        image: "https://cdn.loveandlemons.com/wp-content/uploads/2025/12/christmas-cookies-580x804.jpg",
        whatsappMessage: "Hola! 🍪 Quisiera consultar por las cookies infantiles personalizadas."
    },
    {
        name: "Tortas para Adultos",
        description: "Elegancia, diseño y los mejores sabores. Tortas sofisticadas para cumpleaños, aniversarios y eventos especiales.",
        image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=1975&auto=format&fit=crop",
        whatsappMessage: "Hola! 🥂 Quisiera consultar por una torta para adultos."
    }
];

// Helper to create product cards
function createCardHTML(item) {
    const whatsappUrl = `https://wa.me/5493515722774?text=${encodeURIComponent(item.whatsappMessage)}`;
    
    return `
        <div class="glass-card rounded-2xl overflow-hidden group flex flex-col h-full animate-fade-in-up" style="animation-delay: 100ms;">
            <div class="relative h-64 w-full overflow-hidden">
                <div class="absolute inset-0 bg-primary-100 animate-pulse"></div>
                <img 
                    src="${item.image}" 
                    alt="${item.name}"
                    class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div class="p-6 flex flex-col flex-grow bg-white/80">
                <h3 class="font-serif text-xl font-bold mb-2 text-neutral-dark">${item.name}</h3>
                <p class="text-sm text-neutral-dark/80 mb-6 flex-grow leading-relaxed">
                    ${item.description}
                </p>
                <a 
                    href="${whatsappUrl}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center justify-center w-full py-3 px-6 bg-primary-100 text-primary-500 font-medium rounded-xl hover:bg-primary-300 hover:text-white transition-all duration-300 shadow-sm"
                >
                    Consultar
                </a>
            </div>
        </div>
    `;
}

// Initialize content
document.addEventListener('DOMContentLoaded', () => {
    // Render Products
    const productsGrid = document.getElementById('products-grid');
    productsGrid.innerHTML = products.map(createCardHTML).join('');

    // Render Events
    const eventsGrid = document.getElementById('events-grid');
    eventsGrid.innerHTML = events.map(createCardHTML).join('');

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('glass');
            navbar.classList.remove('bg-transparent');
        } else {
            navbar.classList.remove('glass');
            navbar.classList.add('bg-transparent');
        }
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    
    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            mobileMenu.classList.remove('hidden');
            mobileMenuBtn.innerHTML = '<i data-feather="x"></i>';
        } else {
            mobileMenu.classList.add('hidden');
            mobileMenuBtn.innerHTML = '<i data-feather="menu"></i>';
        }
        feather.replace();
    }

    mobileMenuBtn.addEventListener('click', toggleMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
});

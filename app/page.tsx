"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ProductCard from "@/components/ui/ProductCard";

export default function Home() {
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
      image: "https://images.unsplash.com/photo-1623366302587-bcaad55fcbe4?q=80&w=1924&auto=format&fit=crop",
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
      name: "Mesas Dulces Infantiles",
      description: "Diseñamos mesas dulces completas con la temática elegida para que los más pequeños tengan una celebración inolvidable.",
      image: "https://images.unsplash.com/photo-1767396867696-1a34d4fe2c43?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      whatsappMessage: "Hola! 🎈 Quisiera consultar por una mesa dulce infantil."
    },
    {
      name: "Tortas para Adultos",
      description: "Elegancia, diseño y los mejores sabores. Tortas sofisticadas para cumpleaños, aniversarios y eventos especiales.",
      image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=1975&auto=format&fit=crop",
      whatsappMessage: "Hola! 🥂 Quisiera consultar por una torta para adultos."
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1614145121029-83a9f7b68bf4?q=80&w=2070&auto=format&fit=crop"
            alt="Pastelería artesanal background"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl mx-auto"
          >
            <span className="text-primary-500 font-medium tracking-widest uppercase text-sm mb-4 block">
              Pastelería Artesanal
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-neutral-dark mb-6 leading-tight">
              Dulzura <span className="text-primary-400 italic font-light">hecha arte</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-dark/80 mb-10 leading-relaxed font-light">
              Creamos momentos inolvidables a través de sabores únicos, 
              diseño delicado y una pizca de amor en cada receta.
            </p>
            <motion.a
              href="#productos"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-300 text-white rounded-full font-medium shadow-[0_8px_30px_rgb(249,168,212,0.5)] hover:bg-primary-400 transition-colors"
            >
              Descubrir Productos
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="py-24 bg-white relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-dark mb-4">
              Nuestra <span className="text-primary-400">Pastelería</span>
            </h2>
            <p className="text-neutral-dark/70 max-w-2xl mx-auto font-light">
              Cada creación es única, elaborada con ingredientes premium y dedicación para ofrecerte una experiencia excepcional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-40 -left-20 w-64 h-64 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
        <div className="absolute bottom-40 -right-20 w-72 h-72 bg-accent-light rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
      </section>

      {/* Events Section */}
      <section id="eventos" className="py-24 bg-secondary relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-dark mb-4">
              Para tus <span className="text-primary-400">Eventos</span>
            </h2>
            <p className="text-neutral-dark/70 max-w-2xl mx-auto font-light">
              Transformamos tus celebraciones con propuestas diseñadas exclusivamente para ti. Desde temáticas infantiles hasta eventos sofisticados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard {...event} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <motion.div 
              className="w-full md:w-1/2 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Pamela Bakery - Nuestra historia"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating aesthetic badge */}
              <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-6 hidden md:block">
                <p className="font-serif italic text-xl text-primary-500">Hecho con amor</p>
                <p className="text-sm text-neutral-dark/60 mt-1">100% Artesanal</p>
              </div>
            </motion.div>

            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
                El alma detrás de <span className="text-primary-400 block mt-2">Pamela Bakery</span>
              </h2>
              <p className="text-neutral-dark/80 mb-6 leading-relaxed font-light text-lg">
                La pastelería es mucho más que mezclar ingredientes; es el arte de crear felicidad. Cada receta que sale de mi cocina lleva consigo dedicación, paciencia y un amor profundo por los detalles.
              </p>
              <p className="text-neutral-dark/80 mb-8 leading-relaxed font-light text-lg">
                Mi objetivo es que cada bocado te transporte, que cada celebración sea única y que sientas la calidez de lo artesanal en cada producto.
              </p>
              
              <Image 
                src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Signature_Placeholder.svg" 
                alt="Firma" 
                width={150} 
                height={50} 
                className="opacity-40"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-100 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-500 mb-6">
            ¿Lista para endulzar tu próximo evento?
          </h2>
          <p className="text-neutral-dark mb-8 text-lg">
            Hablemos sobre tus ideas y creemos algo hermoso juntos.
          </p>
          <a
            href="https://wa.me/543518751067?text=Hola!%20%E2%9C%A8%20Quisiera%20pedir%20un%20presupuesto."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-500 rounded-full font-medium hover:bg-primary-50 transition-all shadow-md hover:shadow-lg"
          >
            Escríbeme por WhatsApp
          </a>
        </motion.div>
      </section>
    </div>
  );
}

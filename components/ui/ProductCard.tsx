"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  images?: string[];
  whatsappMessage: string;
}

export default function ProductCard({ name, description, image, images, whatsappMessage }: ProductCardProps) {
  const [showGallery, setShowGallery] = useState(false);
  const [selectedImage, setSelectedImage] = useState(image);
  const whatsappUrl = `https://wa.me/5493515722774?text=${encodeURIComponent(whatsappMessage)}`;
  const galleryImages = images ?? [image, image, image];

  return (
    <>
      <div className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full">
        <button
          onClick={() => setShowGallery(true)}
          className="relative h-64 w-full overflow-hidden cursor-pointer text-left"
        >
          <div className="absolute inset-0 bg-primary-100 animate-pulse" />
          <Image
            src={selectedImage}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm text-xs px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Ver fotos
          </div>
        </button>

        <div className="p-6 flex flex-col flex-grow bg-white/80">
          <h3 className="font-serif text-xl font-bold mb-2 text-neutral-dark">{name}</h3>
          <p className="text-sm text-neutral-dark/80 mb-6 flex-grow leading-relaxed">
            {description}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full py-3 px-6 bg-primary-100 text-primary-500 font-medium rounded-xl hover:bg-primary-300 hover:text-white transition-all duration-300 shadow-sm"
          >
            Consultar
          </a>
        </div>
      </div>

      <AnimatePresence>
        {showGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowGallery(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-serif text-2xl font-bold text-neutral-dark">{name}</h3>
                <button
                  onClick={() => setShowGallery(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-dark/10 hover:bg-neutral-dark/20 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
              </div>

              <div className="relative h-72 md:h-96 w-full rounded-xl overflow-hidden mb-4">
                <Image
                  src={selectedImage}
                  alt={name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                {galleryImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(img)}
                    className={`relative h-24 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === img ? "border-primary-400 ring-2 ring-primary-200" : "border-transparent hover:border-primary-200"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${name} - variante ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="33vw"
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

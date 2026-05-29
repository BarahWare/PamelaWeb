import Image from "next/image";

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  whatsappMessage: string;
}

export default function ProductCard({ name, description, image, whatsappMessage }: ProductCardProps) {
  const whatsappUrl = `https://wa.me/5493515722774?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full">
      <div className="relative h-64 w-full overflow-hidden">
        {/* Placeholder gradient just in case the image fails, but using Unsplash images for the aesthetic */}
        <div className="absolute inset-0 bg-primary-100 animate-pulse" />
        <Image 
          src={image} 
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
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
  );
}

'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();

  return (
    <div 
      className="group relative w-full bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onClick={() => router.push(`/product/${product.id}`)}
    >
      {/* Product Image Container */}
      <div className="aspect-square relative">
        <Image 
          src={product.images[0]} 
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white text-lg font-medium px-4 py-2 rounded-full border-2 border-white">
            View Details
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 bg-gray-50">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2">
          {product.shortDescription}
        </p>
      </div>
    </div>
  );
}
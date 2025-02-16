'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { getProductById } from '../../../data/products';
import ProductTabNavigator from '@/components/ProductTabNavigator';
import TabNavigator from '@/components/TabNavigator';

export default function ProductDetails() {
  const params = useParams();
  const product = getProductById(params.id as string);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900">Product Not Found</h1>
      </div>
    );
  }

  const tabs = [
    {
      label: 'Overview',
      content: (
        <div className="space-y-6">
          <p className="text-gray-600 text-lg">{product.description}</p>
          <div>
            <h2 className="text-xl font-semibold mb-3">Key Features</h2>
            <ul className="list-disc list-inside space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="text-gray-600">{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      )
    },
    {
      label: 'Applications',
      content: (
        <div className="space-y-6">
          <ul className="list-disc list-inside space-y-2">
            {product.applications.map((application, index) => (
              <li key={index} className="text-gray-600">{application}</li>
            ))}
          </ul>
        </div>
      )
    },
    {
      label: 'Industries',
      content: (
        <div className="space-y-6">
          <ul className="list-disc list-inside space-y-2">
            {product.industries.map((industry, index) => (
              <li key={index} className="text-gray-600">{industry}</li>
            ))}
          </ul>
        </div>
      )
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <ProductTabNavigator />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.slice(1).map((image, index) => (
              <div key={index} className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={`${product.name} view ${index + 2}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 33vw, 16vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {product.name}
          </h1>
          
          <TabNavigator tabs={tabs} />

          <button 
            className="mt-8 w-full md:w-auto px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300"
          >
            Request Quote
          </button>
        </div>
      </div>
    </div>
  );
}
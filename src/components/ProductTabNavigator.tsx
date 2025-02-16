import { useRouter } from 'next/navigation';
import { products } from '../data/products';

export default function ProductTabNavigator() {
  const router = useRouter();

  return (
    <div className="w-full bg-gray-100 p-4 mb-8 overflow-x-auto">
      <div className="flex space-x-4 min-w-max">
        {products.map((product) => (
          <button
            key={product.id}
            onClick={() => router.push(`/product/${product.id}`)}
            className="px-4 py-2 text-sm md:text-base whitespace-nowrap rounded-lg bg-white hover:bg-primary hover:text-white transition-colors duration-300 shadow-sm"
          >
            {product.name}
          </button>
        ))}
      </div>
    </div>
  );
}
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ProductDetail } from '@/components/product-detail';
import { getProductById, PRODUCTS } from '@/lib/products';
import { notFound } from 'next/navigation';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} | YOUR BRAND NAME`,
    description: product.description,
  };
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 pt-24 md:pt-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20">
          <ProductDetail product={product} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

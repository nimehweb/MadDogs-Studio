import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const metadata = {
  title: 'Info | YOUR BRAND NAME',
  description: 'Information about YOUR BRAND NAME',
};

export default function Info() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 pt-24 md:pt-32 px-6 md:px-12 py-12 md:py-20">
        <div className="max-w-3xl mx-auto space-y-12">
          <section>
            <h1 className="text-3xl md:text-4xl font-black uppercase tracking-widest mb-6">
              ABOUT US
            </h1>
            <p className="text-lg leading-relaxed mb-4">
              <strong>MadDogs Studio</strong> is a minimalist streetwear brand dedicated to quality basics and bold aesthetics. We believe in clean designs, premium materials, and timeless pieces that work for everyone.
            </p>
            <p className="text-lg leading-relaxed">
              Each piece is carefully crafted to deliver both style and comfort, making them essential additions to any wardrobe.
            </p>
          </section>

          <section className="border-t border-black pt-12">
            <h2 className="text-2xl font-black uppercase tracking-widest mb-6">
              SHIPPING & RETURNS
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold uppercase tracking-wider mb-2">DOMESTIC SHIPPING</h3>
                <p className="text-gray-700">5-7 business days. Free on orders over $100.</p>
              </div>
              <div>
                <h3 className="font-bold uppercase tracking-wider mb-2">INTERNATIONAL SHIPPING</h3>
                <p className="text-gray-700">10-14 business days. Rates calculated at checkout.</p>
              </div>
              <div>
                <h3 className="font-bold uppercase tracking-wider mb-2">RETURNS</h3>
                <p className="text-gray-700">30-day return policy on unworn items with tags attached. Contact maddogstudio27@gmail.com for returns.</p>
              </div>
            </div>
          </section>

          <section className="border-t border-black pt-12">
            <h2 className="text-2xl font-black uppercase tracking-widest mb-6">
              CONTACT
            </h2>
            <p className="text-lg mb-4">
              Have questions? We'd love to hear from you.
            </p>
            <a
              href="mailto:maddogstudio27@gmail.com"
              className="text-lg font-bold hover:opacity-60 transition-opacity"
            >
              maddogstudio27@gmail.com
            </a>
          </section>

          <section className="border-t border-black pt-12">
            <h2 className="text-2xl font-black uppercase tracking-widest mb-6">
              SIZE GUIDE
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold uppercase tracking-wider mb-4">TOPS</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-black">
                        <th className="text-left py-2 px-2 font-bold">SIZE</th>
                        <th className="text-left py-2 px-2 font-bold">CHEST (in)</th>
                        <th className="text-left py-2 px-2 font-bold">LENGTH (in)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-300">
                        <td className="py-2 px-2">XS</td>
                        <td className="py-2 px-2">33-35</td>
                        <td className="py-2 px-2">26</td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <td className="py-2 px-2">S</td>
                        <td className="py-2 px-2">35-37</td>
                        <td className="py-2 px-2">27</td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <td className="py-2 px-2">M</td>
                        <td className="py-2 px-2">37-40</td>
                        <td className="py-2 px-2">28</td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <td className="py-2 px-2">L</td>
                        <td className="py-2 px-2">40-43</td>
                        <td className="py-2 px-2">29</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-2">XL</td>
                        <td className="py-2 px-2">43-46</td>
                        <td className="py-2 px-2">30</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

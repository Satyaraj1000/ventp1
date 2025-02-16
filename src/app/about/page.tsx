'use client';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
        About Us
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Story
            </h2>
            <p className="text-gray-600">
              Since 1989, VAIBHAVI ENTERPRISES has been at the forefront of
              surface enhancement technology. We have established ourselves as a
              leader in the development and advancement of 'Viflon'
              (Fluoropolymer) coating for metal surfaces and other substrates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Expertise
            </h2>
            <p className="text-gray-600">
              We specialize in manufacturing 'Vaicon' Porus Plastics filter
              media, serving pharmaceutical, chemical, and pneumatics companies
              for their diverse applications. Our commitment to quality and
              innovation has made us a trusted partner in the industry.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600">
              Our mission is to provide cutting-edge surface enhancement
              solutions and filtration products that meet the highest standards
              of quality and performance. We strive to exceed customer
              expectations through continuous innovation and exceptional
              service.
            </p>
          </section>
        </div>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Quality Commitment
            </h2>
            <p className="text-gray-600">
              Quality is at the heart of everything we do. Our state-of-the-art
              manufacturing facilities and rigorous quality control processes
              ensure that every product meets the highest standards of
              performance and reliability.
            </p>

            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                ISO certified manufacturing processes
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Stringent quality control measures
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Advanced testing facilities
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Continuous process improvement
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Values
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Innovation</h3>
                <p className="text-gray-600 text-sm">
                  Continuously developing new solutions to meet evolving
                  industry needs
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Quality</h3>
                <p className="text-gray-600 text-sm">
                  Maintaining the highest standards in all our products and
                  services
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Integrity</h3>
                <p className="text-gray-600 text-sm">
                  Operating with honesty and transparency in all our dealings
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Customer Focus
                </h3>
                <p className="text-gray-600 text-sm">
                  Prioritizing customer satisfaction and building lasting
                  relationships
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-5 mt-auto rounded-lg shadow-sm m-4 block">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-screen-xl">
        {/* Left Section - Social Media */}
        <div>
          <h3 className="text-lg font-bold border-b-2 border-primary pb-2">
            FOLLOW US ON
          </h3>
          <ul className="mt-3 space-y-2">
            {[
              { name: "LinkedIn", url: "https://www.linkedin.com" },
              { name: "Facebook", url: "https://www.facebook.com" },
              { name: "WhatsApp", url: "https://web.whatsapp.com" },
              { name: "Instagram", url: "https://www.instagram.com" },
            ].map((social) => (
              <li key={social.name}>
                <Link
                  href={social.url}
                  target="_blank"
                  className="text-white transition-colors duration-300 hover:text-primary"
                >
                  &gt;&gt; {social.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Middle Section - Contact Info */}
        <div>
          <h3 className="text-lg font-bold border-b-2 border-primary pb-2">
            QUICK CONTACT
          </h3>
          <p className="mt-3">
            <strong>Corporate office:</strong> VAIBHAVI ENTERPRISES
          </p>
          <p>
            <strong>Contact Person:</strong> MS. VAIBHAVI BHATT (OWNER)
          </p>
          <p>
            <strong>Address:</strong> N/3, Cama I.E., Opp. Jaipan Ind., Walbhat
            Rd., Goregaon (E), Mumbai - 400063, Maharashtra, India
          </p>
          <p>
            <strong>Mob No:</strong> +91 9820052056 / 9820052057
          </p>
          <p>
            <strong>Tel:</strong> 022-49789807
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <Link
              href="mailto:response@vaibhavientp.com"
              className="hover:underline"
            >
              response@vaibhavientp.com
            </Link>{" "}
            /{" "}
            <Link
              href="mailto:vaibhavient@gmail.com"
              className="hover:underline"
            >
              vaibhavient@gmail.com
            </Link>
          </p>
        </div>

        {/* Right Section - Google Map */}
        <div>
          <h3 className="text-lg font-bold border-b-2 border-primary pb-2">
            Location
          </h3>
          <div className="bg-gray-300 text-black w-full max-w-md h-48 flex items-center justify-center mt-3">
            <span className="font-bold">Google Map</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

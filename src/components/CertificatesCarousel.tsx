
import React from "react";
import { ExternalLink } from "lucide-react";

// Certificates data
const certificates = [
  {
    title: "Build Your Own Responsive Website",
    description: "Learned bootstrap, flexbox",
    image: "https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/MEPTJDRYQO.png",
    url: "https://certificates.ccbp.in/academy/static-website?id=QORGHKOCZK",
  },
  {
    title: "Build Your Own Static Website",
    description:
      "Learned the process of designing and developing a static website using HTML, CSS, and best practices.",
    image: "https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/MEPTJDRYQO.png",
    url: "https://certificates.ccbp.in/academy/static-website?id=QORGHKOCZK",
  },
  {
    title: "Build Your Own Dynamic Web Application",
    description: "Learned Java Script",
    image: "https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/EHAGIYEMLI.png",
    url: "https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/EHAGIYEMLI.png"
  },
  {
    title: "Introduction to Databases",
    description: "Learned sql",
    image: "https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/JSCGXLBRWM.png",
    url: "https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/JSCGXLBRWM.png",
  },
  {
    title : "JavaScript Essentials", 
    description: "Learned Dealing With Asynchronous JS",
    image:"https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/KCWJSCVIDO.png",
    url: "https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/KCWJSCVIDO.png",
  },
  {
    title : "Responsive Web Design using Flexbox", 
    description: "Learned Responsive Web Design using Flexbox",
    image: "https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/QMRCPLITNQ.png",
    url: "https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/QMRCPLITNQ.png"
  },
];

export const CertificatesCarousel: React.FC = () => (
  <section className="relative w-full max-w-6xl mx-auto z-10 px-4 sm:px-0 mt-14 mb-10">
    <h2 className="text-3xl md:text-4xl font-orbitron text-center font-bold mb-8 text-neonblue animate-glow uppercase tracking-wider">
      Certificates
    </h2>
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {certificates.map((certificate, i) => (
        <div
          key={certificate.title}
          className="bg-gradient-to-br from-neonblue/30 via-zinc-900 to-cosmic border-2 border-neonblue/40 shadow-xl rounded-lg overflow-hidden flex flex-col hover:scale-105 transition-transform"
        >
          <img
            src={certificate.image}
            alt={certificate.title}
            className="w-full h-48 object-cover bg-zinc-800"
          />
          <div className="flex flex-col flex-1 p-5">
            <h3 className="font-orbitron text-lg font-semibold text-neonblue mb-2">{certificate.title}</h3>
            <p className="text-white/90 text-sm mb-4">{certificate.description}</p>
            <a
              href={certificate.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-neonpink/90 hover:text-neonblue font-semibold underline mt-auto group"
            >
              <ExternalLink size={18} className="group-hover:scale-110 transition-transform" />
              View Certificate
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);


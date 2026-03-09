import React from "react";
import AstronautSocialCard from "../components/AstronautSocialCard";
import { Particles } from "../components/Particles";

const Contact = () => {
  return (
    <section id="contact" className="relative flex items-center justify-center c-space section-spacing min-h-[600px]">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      
      <div className="flex flex-col items-center justify-center w-full max-w-2xl px-4">
        <div className="text-center mb-8">
          <h2 className="text-heading mb-4">Let's Connect</h2>
          <p className="text-white-600 text-lg max-w-2xl mx-auto">
            Whether you're looking to collaborate, have a project in mind, or just want to say hello, 
            I'm always excited to connect with fellow developers and potential clients.
          </p>
        </div>
        
        <AstronautSocialCard />
        
        <div className="mt-8 text-center">
          <p className="text-white-600 text-sm">
            Or reach out directly at: 
            <a 
              href="mailto:Ndumisomndaweni073@gmail.com" 
              className="text-lavender hover:text-royal transition-colors ml-1"
            >
              Ndumisomndaweni073@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

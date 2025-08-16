import MaxWidthWrapper from "@/components/max-width-wrapper";
import React from "react";

const Map = () => {
  return (
    <div className="bg-white border border-gray-300 overflow-hidden h-full w-full transition-shadow duration-300">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.870734733382!2d7.057290414768182!3d4.82330299647919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069ce7eb0c5c2cb%3A0x1e6b2b1b3b3b3b3b!2s1%20Etim%20Okpoyo%20Close%2C%20off%20PH%2FAba%20Expressway%2C%20Port%20Harcourt%2C%20Rivers%20State!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng"
        width="100%"
        height="100%"
        className="border-0 w-full h-full md:h-full"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Map of 1 Etim Okpoyo Close, off PH/Aba Expressway, Port Harcourt"
        aria-label="Map of 1 Etim Okpoyo Close, off PH/Aba Expressway, Port Harcourt"
      ></iframe>
    </div>
  );
};

export default Map;

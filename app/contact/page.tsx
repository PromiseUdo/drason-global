import React from "react";
import ContactFormMap from "./components/contact-form-map";
import ContactInfo from "./components/contact-info";

const page = () => {
  return (
    <div className="py-20">
      <ContactFormMap />
      <ContactInfo />
    </div>
  );
};

export default page;

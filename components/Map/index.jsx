import React from "react";

export const Map = () => {
  return (
    <div className="flex h-auto w-full px-3 md:px-32">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.248597116192!2d109.23126831379896!3d-7.437721775342613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655f63e94f62b5%3A0xf911bc8997b8952a!2sCAZH!5e0!3m2!1sen!2sid!4v1661267582311!5m2!1sen!2sid"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className=" w-full h-[450px] border-none "
      ></iframe>
    </div>
  );
};

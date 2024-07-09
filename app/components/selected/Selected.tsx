import React from "react";
import WorkItem from "./WorkIte";

const SelectedWorks = () => {
  const works = [
    {
      imageUrl: "/images/evoke.png",
      title: "Evoke",
      category: "Web Design, Branding",
    },
    {
      imageUrl: "/images/border.png",
      title: "Evoke",
      category: "Web Design, Branding",
    },
    {
      imageUrl: "/images/laptop.png",
      title: "Evoke",
      category: "Web Design, Branding",
    },
    {
      imageUrl: "/images/laptop-2.png",
      title: "Evoke",
      category: "Web Design, Branding",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-0 md:mt-6">

      <div className="container mx-auto">
        <div className="flex items-center gap-2 justify-between pb-8">
          <h2 className="text-xs text-left text-white">Selected Works</h2>
          <hr className="text-white w-[90%]" />
          <span className="text-white text-xs">01</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {works.map((work, index) => (
            <WorkItem key={index} {...work} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWorks;

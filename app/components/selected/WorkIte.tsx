import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface WorkItemProps {
  imageUrl: string;
  title: string;
  category: string;
}

const WorkItem = ({ imageUrl, title, category }: WorkItemProps) => {
  return (
    <div>
      <div className="group">
        <Image
          src={imageUrl}
          alt={title}
          width={500}
          height={300}
          className="w-full h-auto transition-transform duration-300 group-hover:scale-95 cursor-pointer"
        />
      </div>

      <div className="text-center text-white flex justify-between py-4  items-center">
        <h3 className="text-base  mb-2">{title}</h3>
        <p className="rounded-[15px] border-2 border-[#FDFCF73D] hover:bg-gray-950 p-2 text-xs cursor-pointer">
          {category}
        </p>
      </div>
    </div>
  );
};

export default WorkItem;

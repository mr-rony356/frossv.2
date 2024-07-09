import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Import motion from Framer Motion

const ClientLogos: React.FC = () => {
  return (
    <div className="text-white">
      <h2 className="text-center text-sm py-2 ">CLIENTS / 03</h2>
      <h1 className="text-center text-4xl font-sembold mb-16">
        Clients that trusted us{" "}
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full place-items-center gap-y-20 cursor-pointer px-6">
        {/* Wrap each Image with motion.div */}
        <motion.div
          whileHover={{ scale: 1.2 }} // Scale up on hover
          transition={{ duration: 0.2 }} // Smooth transition duration
        >
          <Image src="/logo/ipum.png" alt="Logo 1" width={80} height={100} />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }}>
          <Image src="/logo/logo.png" alt="Logo 2" width={80} height={100} />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }}>
          <Image src="/logo/lili.png" alt="Logo 3" width={70} height={100} />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }}>
          <Image src="/logo/logos.png" alt="Logo 4" width={100} height={100} />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }}>
          <Image src="/logo/w.png" alt="Logo 5" width={50} height={100} />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }}>
          <Image src="/logo/ipum.png" alt="Logo 6" width={80} height={100} />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }}>
          <Image src="/logo/logo.png" alt="Logo 7" width={80} height={100} />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }}>
          <Image src="/logo/lili.png" alt="Logo 8" width={70} height={100} />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }}>
          <Image src="/logo/logos.png" alt="Logo 9" width={100} height={100} />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }}>
          <Image src="/logo/w.png" alt="Logo 10" width={50} height={100} />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }}>
          <Image src="/logo/ipum.png" alt="Logo 11" width={80} height={100} />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }}>
          <Image src="/logo/logo.png" alt="Logo 12" width={80} height={100} />
        </motion.div>
      </div>
    </div>
  );
};

export default ClientLogos;

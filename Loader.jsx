import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => (
  <motion.div
    className="fixed top-0 left-0 w-full h-full bg-black z-50 flex items-center justify-center text-white"
    initial={{ opacity: 1 }}
    animate={{ opacity: 0 }}
    exit={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "#000",
      zIndex: 99999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff"
    }}
  >
    <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>Loading...</h1>
  </motion.div>
);

export default Loader;

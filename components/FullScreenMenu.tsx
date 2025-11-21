import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FullScreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  "MANIFESTO",
  "VISUALIZATION",
  "ORIGIN",
  "UPLOAD",
  "CONTACT"
];

const FullScreenMenu: React.FC<FullScreenMenuProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 bg-black flex flex-col justify-center items-center"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-white hover:text-red-600 transition-colors"
          >
            <X size={48} />
          </button>

          <nav className="flex flex-col items-center gap-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item}
                href="#"
                onClick={onClose}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="text-5xl md:text-8xl font-bold font-['Oswald'] text-transparent stroke-text hover:text-white transition-all duration-300 tracking-tighter cursor-pointer uppercase techno-glitch"
                data-text={item}
                style={{ WebkitTextStroke: "1px white" }}
              >
                {item}
              </motion.a>
            ))}
          </nav>
          
          <div className="absolute bottom-10 text-xs font-mono text-gray-500 uppercase tracking-widest">
             System v3.14.15 // Irrational Core
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FullScreenMenu;
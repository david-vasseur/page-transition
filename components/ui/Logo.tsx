import { motion } from 'framer-motion';
import Image from 'next/image';

function Logo() {
    return (
        <motion.div 
            className="flex relative z-30 items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <motion.div 
              className="w-10 h-10 bg-white rounded-lg flex items-center justify-center transform rotate-12"
              whileHover={{ rotate: 0, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
                <Image src="/logo.webp" className="object-fill" height={1613} width={2514} alt='logo' />
            </motion.div>
            <div>
                <h1 className="text-2xl font-black text-orange-500">G.V.S.3D</h1>
                <p className="text-xs text-gray-300">Extermination Professionelle</p>
            </div>
        </motion.div>
    )
}

export default Logo;
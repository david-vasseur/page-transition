import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

function Social2() {
    return (
        <motion.div className="flex gap-5 mt-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.6 }}
        >
            <motion.a
                className="rounded-full cursor-pointer"
                whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(255, 120, 0, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
            >
                <Image className='rounded-full' src="/facebook.png" height={48} width={48} alt='icone facebook' />
            </motion.a>
            <motion.a
                className="rounded-full cursor-pointer"
                whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(255, 102, 0, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
            >
                <Image className='rounded-full' src="/tiktok.png" height={48} width={48} alt='icone tiktok' />
            </motion.a>
        </motion.div>
    )
}

export default Social2;
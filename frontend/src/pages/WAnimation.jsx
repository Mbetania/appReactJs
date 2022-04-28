import React, { useState } from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import { welcomeImgAnimation } from '../services/shared/framermotion.service'



export const WAnimation = () => {
    const [isOpen,setIsOpen] = useState(false);

    function prueba () {
        console.log('dsa')
        setIsOpen(!isOpen)
    }
return (
    <AnimatePresence>
        <motion.div className='w-animation parent'
        layout 
        data-isopen={isOpen}
        initial={{ borderRadius: 5 }}
        key={'welcome-imganimation-key'}
        {...welcomeImgAnimation}
        onClick={()=> prueba()}
        
        >
            <p>aca toy</p>
        </motion.div>
    </AnimatePresence>
)
}

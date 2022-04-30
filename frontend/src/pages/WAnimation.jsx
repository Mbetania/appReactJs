import React, { useEffect, useState } from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import { welcomeImgAnimation } from '../services/shared/framermotion.service'
import { Logo } from '../components/unit/Logo';



export const WAnimation = () => {
    const [isOpen,setIsOpen] = useState(false);

    // function prueba () {
    //     console.log('dsa')
    //     setIsOpen(!isOpen)
    // // }

    // function openWithDelay() {
    //     setIsOpen(true)
    // }

    // useEffect(() => {
    //     setTimeout(() => {
    //         openWithDelay()
    //     }, 4000);
    // }, [])
    
    const icon = {
        hidden: {
            pathLength: 0,
            fill: "rgba(255, 255, 255, 0)"
        },
        visible: {
            pathLength: 1,
            fill: "rgba(255, 255, 255, 1)"
        }
    }

return (
    <AnimatePresence>
        <motion.div className='w-animation parent'
        layout 
        data-isopen={isOpen}
        initial={{ borderRadius: 5 }}
        key={'welcome-imganimation-key'}
        {...welcomeImgAnimation}
        // onClick={()=> prueba()}
        
        >
            <Logo/>
            <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        >
        <motion.path
            d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
            variants={icon}
            initial="hidden"
            animate="visible"
            />
        </svg>
            </motion.div>
    </AnimatePresence>
)
}

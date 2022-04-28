import React from 'react'
import {motion} from 'framer-motion'
import { welcomeMotion, welcomeMotionh3 } from '../services/shared/framermotion.service'

export const Welcome = () => {
return (
    <motion.div className='welcome'>
        <motion.h2
        key={'welcome-animation-key'}
        {...welcomeMotion}
        >Frontend developer</motion.h2>
        <motion.h3 key={'welcome-animation-key--h3'}
        {...welcomeMotionh3}
        >👋¡Hola!</motion.h3>
        <motion.h2 className='name-title'
        key={'welcome-animation-key--h2'}
        {...welcomeMotionh3}>soy Betania Gonzalez</motion.h2>
    </motion.div>
)
}
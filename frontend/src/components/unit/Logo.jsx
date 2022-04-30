import React from 'react'
import LogoPerson from '../../assets/person.png'
import {motion} from 'framer-motion'
import { logoPerson } from '../../services/shared/framermotion.service'

export const Logo = () => {
return (
    <motion.img src={LogoPerson} className='logo-avatar' alt='logo-avatar'
    key={'logo-person'}
    {...logoPerson} />
)
}

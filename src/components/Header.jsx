import React from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config.js'
import { FaCartShopping } from "react-icons/fa6"
import logo from '../img/logo.png'
import { motion } from 'framer-motion';
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { actionType } from '../context/reducer.js';
import { useStateValue } from '../context/StateProvider.js';


const Header = () => {
  const firebaseAuth = getAuth(app)
  const provider = new GoogleAuthProvider();
  const [{user},dispatch] = useStateValue();


  const login = async () => {
    const { user: {refreshToken, providerData} } = await signInWithPopup(firebaseAuth, provider)

    dispatch({
      type:actionType.SET_USER,
      user:providerData[0],
    })
  }

  return (
    <header className=' w-screen h-auto p-4 fixed px-16'>
      <div className='hidden md:flex w-full h-full justify-between'>
        <Link to={'/'} className='flex items-center gap-2'>
          <img src={logo} alt="Logo" className='w-14 object-cover cursor-pointer' />
        </Link>
        <ul className='flex items-center gap-3 ml-auto'>
          <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
          <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
          <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Services</li>
          <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About Us</li>
        </ul>

        <div className='relative flex items-center text-xl ml-4'>
          <FaCartShopping className='cursor-pointer text-textColor hover:text-headingColor' />
          <div className='absolute top-2 -right-1 w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center'>
            <p className='text-xs text-white font-semibold'>7</p>
          </div>
        </div>


        <motion.button whileTap={{ scale: 0.8 }} onClick={login} className="flex items-center justify-between hover:text-headingColor  text-textColor mx-2 px-2 py-0.5 font-semibold leading-tight">
          Login
          <div className="ml-1">
            <FaUser />
          </div>
        </motion.button>
      </div>

      <div className='flex md:hidden w-full h-full'>
        For Mobile
      </div>
    </header>
  )
}

export default Header

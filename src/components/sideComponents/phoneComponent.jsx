import {useState} from 'react'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhoneVolume} from "@fortawesome/free-solid-svg-icons";

function PhoneComponent() {
    const [isHovered, setIsHovered] = useState(false);

  
   
  return (
    <div className=' flex flex-col gap-5 z-50 fixed bottom-[105px] right-4'>
    <motion.div
  
      className="relative flex items-center"
   
      onHoverStart={() => setIsHovered(true)}  // Set hover state to true
      onHoverEnd={() => setIsHovered(false)}   // Set hover state to false
    >
      {/* The Button */}
      <motion.button
      onClick={()=>window.location.href= 'tel:+91 7559012690'}
        className="bg-gray-400 text-lg hover:bg-gray-600 text-white p-3 rounded-full flex space-x-2 items-center group transition-all duration-300 ease-in-out shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FontAwesomeIcon
          icon={faPhoneVolume}
          className="p-1 text-sm text-white rounded-full transform transition-transform duration-500 group-hover:translate-y--2"
        />

        {/* <img src={chatDoctor} className="p-1 w-[25px] h-auto transform transition-transform duration-500 group-hover:translate-y--2 " /> */}
      </motion.button>

      {/* Detail Box - Appears on Hover */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="absolute right-[60px] bottom-1 bg-gray-400 text-white px-3 py-2 rounded-lg shadow-lg text-sm w-max"
        >
          Call us
        </motion.div>
      )}
    </motion.div>
  </div>
    
   
     
    
    
    
  
    
  )

}


export default PhoneComponent
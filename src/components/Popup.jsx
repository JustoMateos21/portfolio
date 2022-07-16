import React from 'react'
import { AiOutlineClose} from "react-icons/ai";
const popup = (props) => {

    if (!props.open) return null;


    return (
    <div  className='
    .ease-linear flex flex-col mr-10 bg-gradient-to-b delay-75
    from-blue-800 to-gray-800  shadow-gray-300 absolute h-1/3 rounded-md w-1/5 p-5'>
    <AiOutlineClose  onClick={props.onClose} className=' cursor-pointer self-end' size={30}/>
    <div className="place w-full">
        <p className='text-2xl justify-center text-white'>{props.title}</p>
    </div>
    <div className="place mt-5">
        <p>{props.description}</p>
    </div>
    </div>
  )
}

export default popup
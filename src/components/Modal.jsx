import React from 'react'
import Button from './Button';

const Modal = ({openModal,setOpenModal,children}) => {
  const closeModal = () =>{
    setOpenModal(openModal = false)
  }
  const newClose = (e) => {
    e.target.parentElement.id == 'wrapper' ? setOpenModal(false):''
  }
  return (
    <div id='wrapper' onClick={newClose} className={openModal == true?'block':'hidden'}>
        <div className='fixed absolute w-full top-0 h-[100vh] bg-[#00000079]'>
        <div className="w-[600px] py-6 px-6 bg-white mx-auto rounded-xl relative mt-12">
          <Button onClick={closeModal}><i className='fa-solid fa-close absolute right-4 text-3xl top-2 text-black'></i></Button>
          {children}
        </div>
        </div>
    </div>
  )
}

export default Modal

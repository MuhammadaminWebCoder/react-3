import React, { useState } from 'react'
import appleLogo from '../assets/images/appleLogo.png'
import Button from '../components/Button'
import Modal from './Modal';
import Input from './Input';
import chooseImg from '../assets/images/dropImage.png'

function Header({openModal,setOpenModal,setShop,shopCard,state,setState}) {
  const clicked = () => {
    setOpenModal(openModal = true)
  }
  const [imageUrl,setImageUrl] = useState(null)
  let [basketModal,setBasketModal] = useState(false)
  const shopCardOpened = () => {
    if (shopCard[0]) {
      setBasketModal(basketModal = true)
    }
  }
  
  const submitHandler = (e) => {
    e.preventDefault()
    const dates = {
      id:state.length? state.length + 1 : 1,
      image:imageUrl,
      name:e.target.name.value,
      price:e.target.price.value,
      count:1,
      status:e.target.status.value,
      color:e.target.color.value,
      region:e.target.region.value,
      description:e.target.description.value,
    }
    if (!dates.name && !dates.region && !dates.price) {
      setState([...state,dates])
      e.target.reset()
      setOpenModal(openModal = false)
    }
  }
  const handleChange = (e) => {
    const file = e.target.files[0]
    const url = URL.createObjectURL(file)
    setImageUrl(url)
  }
  return (
    <header>
      <div className='bg-slate-200'>
        <div className='flex w-[1200px] mx-auto justify-between items-center h-[60px]'>
          <img width={100} src={appleLogo} alt="apple Logo" />
          <div className="flex items-center">
              <button onClick={shopCardOpened} className='relative'>
                 <i className="fa-solid fa-cart-shopping"></i>
                <div className="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-blue-500 rounded-full -top-2 -end-2"> {shopCard.length}</div>
              </button>
              <Button onClick={clicked} title={'add card'} extraClass={'bg-blue-500 ms-5'}/>
          </div>
        </div>
    </div>
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <form autoComplete='off' className='space-y-3' onSubmit={submitHandler}>
            <label>
              <img width={100} className='mx-auto cursor-pointer' src={imageUrl ||chooseImg} alt="chooce image"/>
              <Input onChange={handleChange} inpAddClass={'hidden'} name={'image'} type={'file'}/>
            </label>
            <Input inpAddClass={'w-full'} placeholder={'type your name ...'} name={'name'} type={'text'}/>
            <Input inpAddClass={'w-full'} placeholder={'type your price ...'} name={'price'} type={'number'}/>
            <Input inpAddClass={'w-full'} placeholder={'type your status ...'} name={'status'} type={'text'}/>
            <Input inpAddClass={'w-full'} placeholder={'type your color ...'} name={'color'} type={'text'}/>
            <Input inpAddClass={'w-full'} placeholder={'type your region ...'} name={'region'} type={'text'}/>
            <Input inpAddClass={'w-full'} placeholder={'type your description ...'} name={'description'} type={'text'}/>
            <Button type={'submit'} title={'submit'} extraClass={'bg-blue-500 px-10 mx-auto block'}/>
        </form>
      </Modal>
      <Modal openModal={basketModal} setOpenModal={setBasketModal}>
        {shopCard.map((e,i) => (
          <div key={i}>
            <p>{e.name}</p>
          </div>
        ))}
      </Modal>
    </header>
  )
}

export default Header

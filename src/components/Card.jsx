import React from 'react'
import Button from './Button';
import cardImage from '../assets/images/iphone16.png';

function Card({item,ind,state,setState,setShop,shopCard}) {
  const delite = (id) => {
    let el = state.splice(id,1)
    setState([...state])
    let es = shopCard.splice(id,1)
    setShop([...shopCard])
  }
  const isInCart = shopCard.some((e) => e.id === item.id);
  const shop = (id) => {
    const itemExists = shopCard.some(e => state[id].id === e.id);
    if (!itemExists) {
      setShop([...shopCard, state[id]]);
    }
  }
  
  return (
    <li className='bg-slate-200 p-5 rounded-md'>
        <img className='mx-auto py-2 h-[200px] object-contain' width={'100%'} src={item.image?item.image:cardImage} alt="card image" />
      <div className='flex text-right items-center py-3 justify-between'>
        <p>{ind + 1}</p>
          <div>
          <p>{item.name}</p>
          <p>{item.status}</p>
          </div>
      </div>
      <p className='line-clamp-1'>{item.description}</p>
      <div className='flex mt-4 justify-between items-center'>
          <strong className='text-lg'>{item.price} $</strong>
          <div className='space-x-2'>
            <Button onClick={() => like(ind)} extraClass={'bg-pink-500'}><i className="fa-regular fa-heart"></i></Button>
            <Button onClick={() => shop(ind)} extraClass={isInCart ? 'bg-green-500' : 'bg-blue-500'}><i className="fa-solid fa-cart-shopping"></i></Button>
            <Button onClick={() => delite(ind)} extraClass={'bg-red-500'}><i className="fa-solid fa-trash"></i></Button>
            <Button onClick={() => more(ind)} extraClass={'bg-slate-500'}><i className="fa-solid fa-ellipsis"></i></Button>
          </div>
      </div>
    </li>
  )
}

export default Card

import './App.css'
import {React,useState} from 'react'
import Header from './components/Header'
import Card from './components/Card'
import Modal from './components/Modal'

function App() {
  const [openModal,setOpenModal] = useState(false)
  const [shopCard,setShop] = useState([])
  const [state,setState] = useState(JSON.parse(localStorage.getItem('state'))||[
    {
      id:1,
      name:'iphone',
      price:343,
      count:1,
      status:'frontal camera',
      color:'red',
      region:'KH/A',
      description:'iphone ninf eng modelidan kochirilgan eng qimmati',
    }])
  localStorage.setItem('state',JSON.stringify(state))
  return(
    <>
      <Header state={state} setState={setState} openModal={openModal} setShop={setShop} shopCard={shopCard} setOpenModal={setOpenModal}/>
      <ul className='flex gap-3 my-3 w-[1200px] grid-cols-3 grid mx-auto'>
        {state.map((item,ind) => (
          <Card shopCard={shopCard} setShop={setShop} item={item} state={state} setState={setState} ind={ind} key={ind}/>
        ))}
      </ul>
    </>
  )
}

export default App

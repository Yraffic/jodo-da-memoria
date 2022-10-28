import './style.css';
import {useState} from 'react'
import cards from '../../cards';
import Card from '../../componentes/Card';
import Congrats from '../../assets/congrats.png'

function Main() {
  const [cardUnico, setCardUnico ] = useState([...cards])
 

  function handleBtnReset(){
   const localCard = cards

    localCard.forEach((card)=>{
      card.turned = false
    })
  
  return setCardUnico(localCard)
  }
 
  return (
    <div className='container'>
      <div className='barra-menu'>
        <div>
        <h1 className='texto-cubos'>CUBOS PUZZLE</h1>
        </div>
        <button
        onClick={()=> handleBtnReset()}
         className='btn-reset'>RESET</button>
      </div>
      <div className='cards'>
      {
       cardUnico.length ? 
       cardUnico.map((card)=> (
        <Card
          key={card.id}
          card={card}
          cardUnico={cardUnico}
          setCardUnico={setCardUnico}
        />
      ))
      :
      <img
        className='congrats'
       src={Congrats}/>
      }
      </div>
    </div>
  );
}

export default Main;

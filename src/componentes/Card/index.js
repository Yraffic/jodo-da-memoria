import './style.css'
import CardBack from '../../assets/card-back.png'
import {useRef} from 'react'

export default function Card({card, cardUnico, setCardUnico}){
    
    function handleClickCard(){
        const localCard = [...cardUnico]
        
        const resultado = localCard.find((item)=> item.id === card.id)

        const comparacao = localCard.filter((card)=> card.turned)

        if(comparacao.length > 1)return;

        if (comparacao.length && card.slug === comparacao[0].slug){
            resultado.turned = !resultado.turned
            setCardUnico(localCard)

            setTimeout(()=>{
                handleClearCards(resultado, comparacao[0], localCard)
            }, 2500)
            return
        }

        resultado.turned = !resultado.turned
        setCardUnico(localCard)

        if(comparacao.length){
            setTimeout(()=>{
                localCard.forEach((card)=>{
                    card.turned = false
                })
                setCardUnico([...localCard])
            }, 2500)
        }
    }

    function handleClearCards(card1, card2, localCard){
        if(card1.id === card2.id){
            return
        }
        const cardsFiltrados = localCard.filter((item)=> item.id !== card1.id && item.id !== card2.id)

        setCardUnico(cardsFiltrados)
    }

    return(
        <img
            className='card-img'
            onClick={()=> handleClickCard(card.id)}
            src={card.turned ? card.image : CardBack}
        />
    )
}
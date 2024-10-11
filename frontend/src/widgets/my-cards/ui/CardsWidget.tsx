import { useEffect } from 'react'
import { useCardStore } from 'entities/cards'
import { Card } from './Card'
import { CardSkeleton } from './CardSkeleton'
import { useNavigate } from 'react-router-dom'

export function CardsWidget() {
  const navigate = useNavigate()
  const { loading, cards, getCards, error } = useCardStore()

  useEffect(() => {
    getCards()
  }, [])

  return (
    <div>
      <div className="flex justify-between items-center w-full mb-5">
        <h4 className="title-sm">My Cards</h4>
        {cards.length > 0 && <button
          className="relative text-title text-[17px] font-semibold group"
          type="button"
        >
          See All
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-title duration-200 group-hover:w-full" />
        </button>}
      </div>
      <div className="flex justify-between items-center gap-[30px]">
        {loading
          ? [...new Array(2)].map((_, i) => <CardSkeleton key={i} />)
          : cards
              .slice(0, 2)
              .map((card, i) => (
                <Card key={card.number} {...card} isBlue={i === 0} />
              ))}
        {error && <p className="text-error">{error}😔</p>}
        {!(cards.length > 0) &&
          [...new Array(2)].map((_, i) => (
            <button key={i} onClick={() => navigate('/credit-cards')} className='bg-white rounded-lg w-[350px] h-[240px] p-2'>
              <span className='flex justify-center items-center border-dashed border-[2px] h-full border-b-gray text-secondary text-xl'>Add card <span className='text-3xl ml-2 -mt-1 leading-none'>+</span></span>
            </button>
        ))}
      </div>
    </div>
  )
}

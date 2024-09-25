import chip from 'shared/assets/images/chip.png'
import chipGray from 'shared/assets/images/chip-gray.png'

type CardProps = {
  isBlue?: boolean
  number: string
  balance: number
  validThru: Date
  holder: string
}

export function Card ({ balance, number, validThru, holder, isBlue }: CardProps) {
  const date = new Date(validThru).getMonth() + '/' + new Date(validThru).getFullYear().toString().slice(-2)

  return (
    <div className={`relative rounded-3xl py-5 px-6 ${isBlue ? 'bg-gradient-to-br from-[#4C49ED] to-[#0A06F4] text-white border-[#4C49ED]' : 'bg-white text-title border-[#DFEAF2]'} border w-[350px]`}>
      <div className='flex justify-between items-center mb-[30px]'>
        <div>
          <p className='font-lato text-[12px]'>Balance</p>
          <span className='font-lato font-semibold text-xl tracking-wider'>${ balance.toLocaleString() }</span>
        </div>
        <img src={isBlue ? chip : chipGray } alt='chip' />
      </div>
      <div className='flex items-center mb-[80px]'>
        <div className='w-1/2'>
          <p className={`uppercase ${isBlue ? 'opacity-70' : 'text-[#718EBF]'} text-[12px] font-lato`}>card holder</p>
          <span className='font-lato text-[15px] font-semibold tracking-wider'>{ holder }</span>
        </div>
        <div className='w-1/2'>
          <p className={`uppercase ${isBlue ? 'opacity-70' : 'text-[#718EBF]'} text-[12px] font-lato`}>valid thru</p>
          <span className='font-lato text-[15px] font-semibold tracking-wider'>{ date }</span>
        </div>
      </div>
      <div className={`absolute bottom-0 left-0 right-0 flex justify-between items-center rounded-br-3xl rounded-bl-3xl ${isBlue ? 'bg-gradient-to-b from-rgba(white, .15) to-transparent' : 'border-t border-[#DFEAF2]'} py-[22px] px-[26px]`}>
        <span className='text-[22px] font-semibold font-lato tracking-wider'>{ number.toString().slice(0, 4) + ' **** **** ' + number.toString().slice(-4) }</span>
        <div className='flex'>
          <div className={`w-[30px] h-[30px] ${isBlue ? 'bg-white' : 'bg-[#9199AF]'} opacity-50 translate-x-1/2 rounded-full`} />
          <div className={`w-[30px] h-[30px] ${isBlue ? 'bg-white' : 'bg-[#9199AF]'} opacity-50 rounded-full`} />
        </div>
      </div>
    </div>
  )
}
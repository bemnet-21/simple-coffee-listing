import React from 'react'
import { CardProps} from '@/interface'


const Card: React.FC<CardProps> = ({data, available}) => {
  
    if (available && !data.available) return null
  
    return (
            <section className='w-fit space-y-2 mx-auto'>
                <div className='relative'>
                    <img src={data.image} className='rounded-lg  transition-transform duration-500 cursor-pointer hover:scale-105'/>
                    {
                        data.popular ? ( 
                        <div className='bg-amber-300 w-20 rounded-full p-1 text-black text-center absolute top-2 left-2'>Popular</div>) : null
                    }
                   
                </div>
                <div className='flex justify-between'>
                    <div>{data.name}</div>
                    <div className='bg-green-300 rounded-md text-black text-sm p-1'>{data.price}</div>
                </div>
                    {data.rating? (
                        <div className='flex items-center'>
                            <img src='/assets/Star_fill.svg' />
                            <div>{data.rating}</div>
                        </div>
                    ) : (
                        <div>
                            <img src='/assets/Star.svg' />
                        </div>
                    )
                    }
            </section>
        ) 
}

export default Card
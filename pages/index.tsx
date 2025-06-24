import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Card from '@/components/Card'
import { Coffee } from '@/interface'

const IndexPage = () => {
  const [datas, setData] = useState<Coffee[]>([])
  const [active, setActive] = useState<boolean>(false)
  const activeButton = 'bg-gray-500 rounded-lg p-2'

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch("https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json")
  
        const data = await response.json()
        setData(data)
      }
      catch {
        console.error("Error while fetching data")
      }

    }
    fetchData()
  }, [])
  return (
    <section className='relative min-h-lvh w-full'>
      <div className='relative w-full h-36 md:h-64 lg:h-72 lg:block'>
        <Image src='/assets/bg-cafe-lg.jpg' alt='background' fill />
      </div>
      <div className='flex flex-col items-center bg-[#1d1d1d] h-fit rounded-xl w-sm mx-auto pt-8 pb-24 mb-36 -mt-36 relative z-10 md:w-5xl lg:w-6xl'>
        <h1 className='text-4xl mb-2'>Our Collection</h1>
        <p className='w-1/2 text-center text-gray-500 md:w-1/3 '>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
        <div className='flex gap-x-4 my-6'>
          <button onClick={() => setActive(false)} className={!active ? `${activeButton}`: `p-2` + ` cursor-pointer transition-transform duration-300 hover:scale-105`}>All Products</button>
          <button onClick={() => setActive(true)} className={active ? `${activeButton}`: `p-2` + ` cursor-pointer transition-transform duration-300 hover:scale-105` }>Available Now</button>
        </div>
        <div className='grid grid-cols-1 gap-y-8 gap-x-4 md:grid-cols-3'>
          {
            datas.map((data) => (
              <Card key={data.id} data={data} available={active}/>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default IndexPage
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Button from '@/components/button'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  const [number, setNumber] = useState(0)

  return (
    <main
      className={`flex min-h-screen flex-col items-center  p-24 ${inter.className}`}
    >
      <div className='my-5'>
        <Link className='p-2 bg-red-400 m-2 rounded  text-white' href={'/login'} >Login</Link>
        <Link className='p-2 bg-red-400 m-2 rounded  text-white' href={'/contact'} >Contact</Link>
        <Link className='p-2 bg-red-400 m-2 rounded  text-white' href={'/about'} >About</Link>
        <Link className='p-2 bg-red-400 m-2 rounded  text-white' href={'/students'} >Students</Link>
        <Link className='p-2 bg-red-400 m-2 rounded  text-white' href={'/expensetracker'} >Expense Tracker</Link>
        <Link className='p-2 bg-red-400 m-2 rounded  text-white' href={'/products'} >Products</Link>

      </div>
      
      <h2  className='text-[40px] font-bold'>Counter App</h2>
      <div className='flex items-center'>
        <Button onClick={() => {
          setNumber(number + 1)
        }}> + </Button>

        <h2 className='text-[40px] font-bold'>{number}</h2>

        <Button onClick={() => setNumber(number - 1)}> - </Button>
      </div>

    </main>
  )
}

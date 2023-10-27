import Image from 'next/image'
import Navbar from '../../components/navbar/navbar'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white ">
      <Navbar/>
      <div className='flex w-full flex-col pt-[10rem] md:pt-[15rem] justify-start px-[5rem] md:px-[7rem]'>
      <p className='text-2xl md:text-4xl font-bold text-black pb-4'>EDUCATION</p>
        <div className='border-2 rounded-2xl border-black p-[4rem]'>
        <ul className='list-disc'>
        <li className='text-xl md:text-3xl font-bold text-red-500 pt-2'>University: Computer Engineering KMUTT</li>
        <li className='text-xl md:text-3xl font-bold text-yellow-500 pt-2'>Elementary - High School: Mater Dei School</li>
        <li className='text-xl md:text-3xl font-bold text-green-500 pt-2'>Kindergarten: Rewadee School </li>
        </ul>
      </div>
      </div>

    </main>
  )
}

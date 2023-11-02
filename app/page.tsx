import Image from 'next/image'
import Navbar from './components/navbar/navbar'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white ">
      <Navbar/>
      <div className="pt-[5rem] md:pt-[10rem] z-10 max-w-5xl w-full flex items-center justify-center text-sm lg:flex">
        <div className='flex flex-col md:flex-row items-center justify-center gap-[3rem]'>
          <div className='rounded-full overflow-hidden'> 
          <Image src={'/ProfilePic.jpeg'} objectFit='cover' alt={''} width={700} height={700}/>
          </div>

          <div className='flex flex-col'>
            <p className='text-4xl font-bold pb-4'>Chanya Kittichai</p>
            <p className='text-lg font-bold pb-2'>A Bit About Me</p>
            <p className='text-base break-words'>I am the one who is genuinely interested in technology and science, from AI, to quantum computer, to neutron planets and black holes. </p>
          </div>

        </div>
      </div>


    </main>
  )
}

import Image from 'next/image'
import Navbar from '../../components/navbar/navbar'
export default function aboutme() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white ">
      <Navbar/>
      <div className="pt-[5rem] md:pt-[10rem] z-10 max-w-5xl w-full flex items-center justify-center text-sm lg:flex">
        <div className='flex flex-row items-center justify-center gap-[3rem]'>
          <div className='rounded-full overflow-hidden'> 
          <Image src={'/ProfilePic.jpeg'} objectFit='cover' alt={''} width={700} height={700}/>
          </div>

          <div className='flex flex-col justify-center'>
            <p className='text-[10rem] font-bold pb-[4rem]'>ME!</p>
            <p className='text-lg font-bold pb-2 pl-2'>A Bit About Me</p>
            <p className='text-base break-words pl-2'>I am the one who is genuinely interested in technology and science, from software computers,to quantum computer, to neutron planets and black holes. </p>
          </div>

        </div>
      </div>


    </main>
  )
}

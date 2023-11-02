import Image from 'next/image'
import Navbar from '../../components/navbar/navbar'
export default function aboutme() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white ">
      <Navbar/>
      <div className="pt-[5rem] md:pt-[10rem] z-10 max-w-5xl w-full flex items-center justify-center text-sm lg:flex">
        <div className='flex flex-row items-center justify-center gap-[3rem]'>
          <div className='rounded-full overflow-hidden'> 
          <Image src={'/nihon.JPG'} objectFit='cover' alt={''} width={500} height={500}/>
          </div>

          <div className='flex flex-col justify-center'>
            <p className='text-[10rem] font-bold pb-[4rem]'>ME!</p>
            <p className='text-lg font-bold pb-2 pl-2'>Hi, I'm Chanya Kittichai</p>
            <p className='text-base break-words pl-2'>Nickname: Joy </p>
            <p className='text-base break-words pl-2'>Date of Birth: 23rd September 2004 </p>
            <p className='text-base break-words pl-2'>Hobby: cooking Japanese food, playing Electone and Ukulele, Writing articles on my website, reading biology, astronomy, and politics books</p>
            <p className='text-base break-words pl-2'>Favorite subjects: astronomy, calculus, and economics </p>
          </div>

        </div>
      </div>


    </main>
  )
}

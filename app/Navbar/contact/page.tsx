import Image from 'next/image'
import Navbar from '../../components/navbar/navbar'
import Link from 'next/link'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white ">
      <Navbar/>
      <div className="pt-[5rem] md:pt-[10rem] z-10 max-w-5xl w-full flex items-center justify-center text-sm lg:flex">
        <div className='flex flex-row items-center justify-center gap-[3rem]'>
          

          <div className='flex flex-col'>
            <p className='text-4xl font-bold pb-4'>CONTACT</p>
            <p className='text-lg font-bold pb-2'>click to check out my work and social media account here!</p>
            <p className='text-base break-words'>
            <ul className='list-disc'>
              <li className='text-xl md:text-base pt-2'> <Link href={'https://linktr.ee/chanyakittichai?utm_source=linktree_profile_share&ltsid=471cdc63-9d25-49b1-9115-5e537bca08f9'}> Linktree </Link></li>
              <li className='text-xl md:text-base pt-2'> <Link href={'https://github.com/JoyChanya'} > Github </Link></li>
              <li className='text-xl md:text-base pt-2'> <Link href={'https://www.facebook.com/profile.php?id=100008264586840'}> Facebook: Joy Chanya Kittichai</Link> </li>
              <li className='text-xl md:text-base pt-2'> <Link href={'https://www.instagram.com/joychan._/'}> Instagram: joychan._</Link> </li>
              <li className='text-xl md:text-base pt-2'>My Website:  </li>
              <li className='text-xl md:text-base pt-2'>Phone: +669235475xx  </li>
              </ul>
            </p>
          </div>

        </div>
      </div>


    </main>
  )
}

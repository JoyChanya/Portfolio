import Image from 'next/image'
import Navbar from '../../components/navbar/navbar'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white ">
      <Navbar/>
      <div className="pt-[5rem] md:pt-[10rem] z-10 max-w-5xl w-full flex items-center justify-center text-sm lg:flex">
        <div className='flex flex-row items-center justify-center gap-[3rem]'>
          

          <div className='flex flex-col'>
            <p className='text-4xl font-bold pb-4'>SKILLS</p>
            <p className='text-lg font-bold pb-2'>practice practice practice</p>
            <p className='text-base break-words'>
                  <ul className='list-disc'>
              <li className='text-xl md:text-base pt-2'>Critical thinking and academic writing in Thai and English</li>
              <li className='text-xl md:text-base pt-2'>Leadership and team/project management(PM)</li>
              <li className='text-xl md:text-base pt-2'>Communicating, MC, presenting and teaching</li>
              <li className='text-xl md:text-base pt-2'>Back stage organizing and directing</li>
              <li className='text-xl md:text-base pt-2'>Designing business canvas and marketing plan</li>
              <li className='text-xl md:text-base pt-2'>Designing User Experince/ User Interface</li>
              <li className='text-xl md:text-base pt-2'>Programming in C and Python</li>
              <li className='text-xl md:text-base pt-2'>Writing and Learning to use Typescript, Nextjs, Tailwind </li>
              </ul>
            </p>
          </div>

        </div>
      </div>


    </main>
  )
}

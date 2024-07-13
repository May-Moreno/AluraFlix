import Button from './Button'
import banner from '../assets/banner.webp'
function Banner() {
  return (
    <section className='relative pb-4 md:max-h-[60vh] flex flex-col md:justify-between md:flex-row-reverse justify-end items-center [&>a]:w-auto [&>a]:px-10 gap-4 mt-4 md:mt-8'>
      {/* <div className='absolute inset-0 bg-banner bg-contain bg-center bg-no-repeat opacity-30 z-[-1]'></div> */}
      <img className='' src={banner} alt='' width={480} />
      <div className='flex flex-col gap-4 max-w-[60ch] items-start [&>a]:w-auto'>
        <h2 className='text-slate-100 text-5xl'>Alura Latam</h2>
        <p>
          Proyecto final de Alura Latam en el curso Oracle One de la fomacion de Front-End
        </p>
        <Button name='Ver' src='https://www.aluracursos.com/' />
      </div>
    </section>
  )
}

export default Banner

import React from 'react'
import buildingImage from './assets/houses.png'
import aboutBobble from './assets/aboutbobble.svg'

const About = () => {
  return (
    <div className='mb-8 relative flex flex-col lg:justify-center lg:flex-row lg:mb-16 lg:pr-[50px] lg:pl-[151px] lg:gap-6 gap-3 xl:pl-[248px] xl:pr-[147px]'>
            <img className='absolute w-32 left-8 -top-4 -z-10 md:left-24 md:w-40 lg:w-44 lg:left-28 lg:-top-6 xl:w-60 xl:left-44 xl:-top-10' src={aboutBobble} alt="about-bobble-image" />
        <div className='flex px-16 sm:p-0 justify-center lg:w-[496px] lg:h-[372px]'>
            <img className='rounded-xl lg:w-full lg:h-full lg:object-cover' src={buildingImage} alt="building-image" />
        </div>
        <div className='px-14 lg:p-0 lg:w-[597px] lg:h-[372px] '>
            <h3 className='mb-2 text-[#35BCE7] text-2xl lg:text-left lg:font-bold lg:text-[32px] xl:leading-[44px] lg:mb-6'>We verbeteren onze woningen</h3>
            <p className='mb-4 lg:mb-3 lg:text-left lg:w-[430px] xl:w-[480px] xl:mb-6'>Bij KnusWonen zetten we ons in om onze woningen energiezuiniger en duurzamer te maken. We verbeteren de isolatie met dubbelglas en plaatsen moderne cv-ketels en zonnepanelen. Hierdoor stijgt het wooncomfort, dalen de energiekosten, en verminderen we de CO2-uitstoot. Ons doel is dat al onze huurders kunnen genieten van een warme, veilige en toekomstbestendige woning.
                <br /> <br />
            Wilt u meer weten over onze energiebesparende maatregelen?
            </p>
            <div className='h-10  w-full lg:w-[131px]'>
                <button className='h-full w-full bg-gradient-to-r from-[#BFE27D] to-[#35BCE7]  rounded-lg text-white font-poppins lg:font-medium'>
                    Lees meer
                </button>
            </div>
        </div>
    </div>
  )
}

export default About
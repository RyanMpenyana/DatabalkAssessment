import React from 'react'
import newsletterImage from './assets/newsletter.png'
import newsletterBobble from './assets/orangebottom.svg'

const Newsletter = () => {
  return (
<div className='mb-8 relative flex flex-col lg:justify-end lg:flex-row-reverse lg:mb-16 lg:pr-[50px] lg:pl-[151px] lg:gap-6 gap-3 xl:pl-[248px] xl:pr-[147px] '>
    <img className='bobble absolute w-32 lg:right-0 lg:top-64 lg:w-auto xl:top-64 xl:right-48 -top-4 -z-10' src={newsletterBobble} alt="" />
<div className=' lg:w-[362px] px-16 sm:p-0 flex justify-center lg:h-[372px] xl:w-[498px]'>
    <img className='rounded-xl lg:w-full lg:h-full lg:object-cover' src={newsletterImage} alt="" />
</div>
<div className='px-16 text-left sm:p-0 lg:w-[430px] lg:h-[372px] xl:w-[496px]'>
    <h3 className='mb-2 text-left text-2xl text-[#FF6B38] lg:font-bold lg:text-[32px] lg:leading-[38px] lg:text-left xl:mb-6'>Schrijf je in voor onze nieuwsbrief</h3>
    <p className='mb-4 lg:text-left lg:h-[245px] overflow-hidden lg:w-full md:mb-3 lg:mb-1 xl:mb-6 xl:w-[496px]'>Wil je als eerste op de hoogte zijn van het laatste nieuws over jouw woning en buurt? Schrijf je dan in voor de nieuwsbrief van KnusWonen! Iedere maand sturen we je een update met belangrijk nieuws, praktische tips, en informatie over onderhoudsprojecten en buurtactiviteiten. Of je nu wilt weten wanneer er werkzaamheden gepland zijn, of je geïnteresseerd bent in nieuwe initiatieven in de wijk, onze nieuwsbrief zorgt ervoor dat je niets mist. 
    <br /> <br />
    Schrijf je vandaag nog in en blijf verbonden met KnusWonen!
    </p>
    <div className='h-10 w-full md:w-[131px] '>
        <button className='h-full text-white  w-full bg-gradient-to-r  font-poppins lg:font-medium rounded-lg from-[#FF6B38] to-[#FFD201] '>
            Inschrijven
        </button>
    </div>
</div>
</div>
  )
}

export default Newsletter;


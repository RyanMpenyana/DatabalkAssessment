import React from 'react'
import newsletterImage from './assets/newsletter.png'
import newsletterBobble from './assets/orangebottom.svg'

const Newsletter = () => {
  return (
<div className='mb-8 relative flex flex-col lg:justify-end lg:flex-row-reverse lg:mb-16 lg:pr-[50px] lg:pl-[151px] lg:gap-6 gap-3 xl:pl-[248px] xl:pr-[147px] '>
    <img className='absolute w-32 lg:right-0 lg:top-64 xl:right-52 lg:w-auto xl:top-64 -top-4 -z-10' src={newsletterBobble} alt="" />
<div className=' lg:w-[362px] lg:h-[372px] xl:w-[498px]'>
    <img className='rounded-xl lg:w-full lg:h-full lg:object-cover' src={newsletterImage} alt="" />
</div>
<div className='lg:w-[430px] lg:h-[372px] xl:w-[496px]'>
    <h3 className='mb-2 text-2xl text-[#FF6B38] lg:font-bold lg:text-[32px] lg:leading-[38px] lg:text-left lg:mb-6'>Schrijf je in voor onze nieuwsbrief</h3>
    <p className='lg:mb-3 lg:text-left lg:w-full xl:mb-6 xl:w-[496px]'>Wil je als eerste op de hoogte zijn van het laatste nieuws over jouw woning en buurt? Schrijf je dan in voor de nieuwsbrief van KnusWonen! Iedere maand sturen we je een update met belangrijk nieuws, praktische tips, en informatie over onderhoudsprojecten en buurtactiviteiten. Of je nu wilt weten wanneer er werkzaamheden gepland zijn, of je geïnteresseerd bent in nieuwe initiatieven in de wijk, onze nieuwsbrief zorgt ervoor dat je niets mist. 
    <br /> <br />
    Schrijf je vandaag nog in en blijf verbonden met KnusWonen!
    </p>
    <div className='w-[131px] h-10 lg:text-left'>
        <button className='h-full text-white  w-full bg-gradient-to-r  font-poppins lg:font-medium rounded-lg from-[#FF6B38] to-[#FFD201] '>
            Inschrijven
        </button>
    </div>
</div>
</div>
  )
}

export default Newsletter;


{/* <div className='mb-8 relative flex flex-col gap-3 lg:items-center lg:flex-row-reverse lg:mb-16 xl:pl-[248px] xl:pr-[246px] lg:pr-[156px] lg:pl-[158px] lg:gap-6'>
<img className='absolute w-32 -left-8 -top-4 -z-10' src={newsletterBobble} alt="" />
<div className='lg:w-[430px] lg:h-[372px]'>
    <img className='rounded-xl lg:w-full lg:h-full lg:object-cover' src={newsletterImage} alt="" />
</div>
<div className='lg:w-[496px]'>
<h3 className='mb-2 text-2xl lg:text-left lg:mb-6'>We verbeteren onze woningen</h3>
    <p className='mb-6 lg:mb-3 lg:text-left lg:w-[390px]'>Wil je als eerste op de hoogte zijn van het laatste nieuws over jouw woning en buurt? Schrijf je dan in voor de nieuwsbrief van KnusWonen! Iedere maand sturen we je een update met belangrijk nieuws, praktische tips, en informatie over onderhoudsprojecten en buurtactiviteiten. Of je nu wilt weten wanneer er werkzaamheden gepland zijn, of je geïnteresseerd bent in nieuwe initiatieven in de wijk, onze nieuwsbrief zorgt ervoor dat je niets mist. 
    <br /> <br />
    Schrijf je vandaag nog in en blijf verbonden met KnusWonen!</p>
  <div className='w-[131px] h-10 lg:text-left'>
  <button className='bg-gradient-to-r from-[#FF6B38] to-[#FFD201] w-[131px] h-10 rounded-lg'>
        Inschrijven
    </button>
  </div>
</div>
</div>
*/}
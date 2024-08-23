import LinkedInIcon from './assets/LinkedIn.svg' 
import FacebookIcon from './assets/facebook.svg'
const FooterData = [
    {
        title : 'Bel of mail ons',
        text : '012 - 345 67 89 klantenservice@knuswonen.nu'
    },
    {
        title : 'Openingstijde',
        text :'Maandag t/m donderdag van 8:30 tot 16:30 uur. Vrijdag van 8:30 tot 12:00 uur'
    },
    {
        title : 'Kom langs op afspraak',
        text : 'Straatweglaan 123 1234 AB Dorpstad'
    },
    {
        title : 'Volg ons op onze sociale kanalen',
        FacebookIcon,
        LinkedInIcon
    }
]
const Footer = () => {
    return (
        <>
        <div className=" flex flex-col lg:flex-row lg:py-16 lg:px-36 lg:text-start lg:items-start items-center bg-[#E5E5E5] text-[#1E1E1E]  gap-6">
            {
                FooterData.map((item, index) => (
                  <div key={index} className='w-3/4 '>
                    <h3 className="font-bold text-xl font-overlock mb-3">{item.title}</h3>
                    <p className='font-poppins'>{item.text}</p>
                    <div className='flex justify-center lg:justify-start gap-3'>
                        {item.FacebookIcon && <img src={item.FacebookIcon} alt="Facebook"/>}
                        {item.LinkedInIcon && <img src={item.LinkedInIcon} alt="LinkedIn"/>}
                    </div>
                  </div>
                ))
            }
        </div>
                <div className='flex flex-col lg:flex-row lg:px-36 lg:h-12 lg:items-center lg:w-full lg:justify-between bg-white'>
                    <div className='underline flex lg:gap-6'> 
                        <a href="">Privacy</a>
                        <a href="">Cookieverklaring</a>
                        <a href="">Disclaimer</a>
                    </div>
                    <div>
                        © KnusWonen 2024
                    </div>
                </div>
                </>
    )
}
export default Footer;
import { FooterData } from './Data.mjs'
const Footer = () => {
    return (
        <>
        <div className=" flex flex-col py-5 lg:flex-row lg:justify-center lg:py-16 lg:px-14 lg:text-start lg:items-start xl:px-36 items-center bg-[#E5E5E5] text-[#1E1E1E]  gap-6">
            {
                FooterData.map((item, index) => (
                  <div key={index} className='w-3/4 '>
                    <h3 className="font-bold text-xl font-overlock mb-3">{item.title}</h3>
                    <p>{item.text}</p>
                    <div className='flex justify-center lg:justify-start gap-3'>
                        {item.FacebookIcon && <img src={item.FacebookIcon} alt="Facebook"/>}
                        {item.LinkedInIcon && <img src={item.LinkedInIcon} alt="LinkedIn"/>}
                    </div>
                  </div>
                ))
            }
        </div>
                <div className='flex flex-col py-2 items-center lg:flex-row lg:px-36 lg:h-12 lg:items-center lg:w-full lg:justify-between bg-white'>
                    <div className='underline gap-2 flex lg:gap-6'> 
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
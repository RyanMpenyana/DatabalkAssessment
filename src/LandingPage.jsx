import hammerIcon from './assets/HammerIcon.svg'
import handDepositIcon from './assets/HandDepositIcon.svg'
import circleChatsIcon from './assets/ChatsCircle.svg'
import waveImage from './assets/wave.svg'
import orangeTopImage from './assets/topbobble.svg'
import greenBottomImage from './assets/green.svg'
const LandingPage = () => {
    return (
        <div className="relative hero mb-8 bg-hero bg-cover bg-no-repeat bg-center h-48 lg:h-[450px] xl:h-[560px] lg:mb-16">
            <div className='absolute w-10 lg:w-20 xl:w-full'>
                <img src={orangeTopImage} alt="" />
            </div>
            <div className='absolute right-0 w-14 bottom-0 md:w-16 lg:w-24 xl:w-52 '>
                <img src={greenBottomImage} alt="" />
            </div>
            <div className="flex relative flex-col h-full justify-end sm:items-center">
                <div className='z-10 sm:w-8/12 xl:w-[912px] pb-2  lg:pb-6 '>
                    <div className='sm:text-left'> 
                        <h1 className='xl:text-2xl text-white font-medium lg:mb-4'>Waarmee kunnen we je helpen?</h1>
                    </div>
                    <div className="flex flex-col w-full items-center gap-1 sm:flex-row sm:justify-center lg:gap-5">
                        <button className="bg-white w-36 md:w-44 md:h-9 lg:w-72 lg:h-12 lg:gap-3 xl:w-72 xl:h-16 xl:text-lg lg:font-semibold lg:p-4 text-[#39468C] items-center gap-1 text-sm p-1 rounded-lg flex"><span><img className='w-4 lg:w-8' src={hammerIcon} alt="button-icon" /></span>Reparatie melden</button>
                        <button className="bg-white w-36 md:w-44 md:h-9 lg:w-72 lg:h-12 lg:gap-3 xl:w-72 xl:h-16 xl:text-lg lg:font-semibold lg:p-4 text-[#39468C] items-center gap-1 text-sm p-1 rounded-lg flex"><span><img className='w-4 lg:w-8' src={handDepositIcon} alt="button-icon" /></span>Huur betalen</button>
                        <button className="bg-white w-36 md:w-44 md:h-9 lg:w-72 lg:h-12 lg:gap-3 xl:w-72 xl:h-16 xl:text-lg lg:font-semibold lg:p-4 text-[#39468C] items-center gap-1 text-sm p-1 rounded-lg flex"><span><img className='w-4 lg:w-8' src={circleChatsIcon} alt="button-icon" /></span>Contact</button>
                    </div>
                </div>
                <div className='absolute w-3/4  self-center'>
                    <img src={waveImage} alt="" />
                </div>
            </div>
        </div>
    )
}
export default LandingPage;
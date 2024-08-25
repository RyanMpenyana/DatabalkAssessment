const Button = ({buttonIcon , buttonText}) => {
  return (
    <button  className="text-[8px] w-44 font-normal md:font-semibold md:text-[16px] bg-white md:w-44 md:h-9 lg:w-72 lg:h-12 lg:gap-3 xl:w-72 xl:h-16 xl:text-lg lg:font-semibold lg:p-4 text-[#39468C] items-center gap-1 text-sm p-1 rounded-lg flex">
        <span><img className='w-4 md:w-4 lg:w-8' src={buttonIcon} alt="buttonIcon" /></span>
        {buttonText}
    </button>
  )
}

export default Button
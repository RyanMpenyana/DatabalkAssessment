import user from '../assets/user.svg'

const Modal = (props) => {
    
    return(
        <div>
        {
           props.IsOpen && <div className='modal sm:hidden text-left text-[#39468C] fixed gap-6 flex flex-col w-full z-20 h-full top-12 px-8  bg-white right-0'>
          <img className='mb-2 w-10' src={user} alt="" />   
            <div className='list-none'>
           <ul className='ml-3 mb-2 flex flex-col gap-14'>
           <li className='border-b-[1px] hover:text-purple-600'>
                  <a href="">Ik huur</a>
                </li>
                <li className='border-b-[1px] hover:text-purple-600'>
                  <a href="">Ik zoek</a>
                </li>
                <li className='border-b-[1px] hover:text-purple-600'>
                  <a href="">Over ons</a>
                </li>
                <li className='border-b-[1px] hover:text-purple-600'>
                  <a href="">Projecten</a>
                </li>
           </ul>
             <div className='flex flex-col gap-1'>
             </div>
            </div>
            </div>
        }
        </div>
    )
}
export default Modal;
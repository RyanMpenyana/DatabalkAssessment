import ArrowIcon from "./ArrowIcon"

const Card = (props) => {
    return (
        <div className="relative mb-5 bg-white rounded-xl max-h-[336px] max-w-72 ">
            <div>
                <img src={props.image} alt="card-image" />
            </div>
            <div className="flex flex-col p-3 h-[180px] ">
                <div>
                    <p className="font-poppins text-[#999999] font-semibold text-sm text-gray mb-2">{props.date}</p>
                    <h3 className="font-bold text-xl leading-6 text-tertiary font-overlock mb-2">{props.title}</h3>
                    <p className="text-tertiary overflow-hidden text-sm mb-3">{props.description}</p>
                </div>
                <div className="flex h- absolute bottom-0 right-0 p-3">
                    <button className="flex items-center self-end h-full gap-[6px] text-tertiary text-sm font-medium font-poppins">Lees meer <span><ArrowIcon/></span></button>
                </div>
                
            </div>
        </div>
    )
}
export default Card
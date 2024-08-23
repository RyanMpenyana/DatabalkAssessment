import Card from "./components/Card"
import CardImage1 from './assets/Rectangle6.png'
import CardImage2 from './assets/Rectangle61.png'
import CardImage3 from './assets/Rectangle62.png'
import ArrowIcon from "./components/ArrowIcon"

const CardData = [
    {
        image : CardImage1,
        date : '5 MAART 2024',
        title : 'Telefoonstoring',
        description : 'Update: Telefoonstoring verholpen'
    },
    {
        image : CardImage2,
        date : '17 FEBRUARI 2024',
        title : 'Energiebesparing - Wat doet KnusWonen?',
        description : 'KnusWonen werkt hard aan het energiezuiniger maken van ...'
    },
    {
        image : CardImage3,
        date : '30 JANUARI 2024',
        title : 'Energietoeslag: Heeft u er recht op?',
        description : 'Steeds meer mensen hebben moeite om hun energierekening te ...'
    }
]

const Updates = () => {

    return(
        <div className="bg-[#9AA4D9] text-[#39468C] mb-8 flex-col flex items-center lg:mb-16 lg:py-16">
            <div>
                <h2 className="font-overlock text-32px leading-10 mb-6 text-tertiary font-bold lg:text-3xl lg:text-left" >Laatste nieuws</h2>
                <div className="justify-center lg:text-left lg:flex sm:gap-6">
                    {CardData.map((item, index) =>(
                        <div key={index} className="">
                        <Card key={index} image={item.image} date={item.date} title={item.title} description={item.description}/>
                        </div>
                    ))}
                </div>
                <div className="flex justify-end ">
                    <p className=" flex items-center gap-1 text-right text-sm font-medium text-tertiary lg:mt-1 leading-5">Bekijk alle nieuwsberichten<span><ArrowIcon/></span></p>
                </div>
            </div>
        </div>
    )
}
export default Updates
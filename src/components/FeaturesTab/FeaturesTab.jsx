import TruckFeatures from '../TruckFeatures/TruckFeatures'
import FeaturesTable from '../FeaturesTable/FeaturesTable'
import s from './FeaturesTab.module.css'

const FeaturesTab = ({truck}) =>{
return <div className={s.wrapper}>
    <TruckFeatures truck={truck} className={s.features}/>
    <FeaturesTable truck={truck}/>
  
</div>
}

export default FeaturesTab
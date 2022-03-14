import './App.css'
import Kitchen from './Kitchen';
import LivingRoom from './LivingRoom';
import Bedroom from './Bedroom';
import Bath from './Bath';


const Floorplan = () => {
  return (
    <div>
      <Kitchen/>
      <LivingRoom/>
      <Bedroom bedNum = '1' />
      <Bedroom bedNum = '2' />
      <Bedroom bedNum = '3' />
      <Bath size = 'Half' />
      <Bath size = 'Full' />
    </div>
  );
}
 
export default Floorplan 
import Navbar from './components/navbar';
import './pet.css'

function pet() {
  
  return (
    <>
    <Navbar />
    <div className="order">
    <div className="order1">
      <img src="./src/assets/order1.png" width={259} height={272}/>
      <ul>
        <li><h4>Track 1</h4></li>
        <li><p>Infomation</p></li>
        <li><button className="orderbtn">Click to Order</button></li>
      </ul>
    </div>
    <div className="order2">
      <img src="./src/assets/order2.png" width={259} height={272}/>
      <ul>
        <li><h4>Track 2</h4></li>
        <li><p>Infomation</p></li>
        <li><button className="orderbtn">Click to Order</button></li>
      </ul>
    </div>
  </div>
  </>
  )
}

export default pet
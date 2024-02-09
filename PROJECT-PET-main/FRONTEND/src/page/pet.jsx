import Navbar from './components/navbar'
import './pet.css'

function pet() {
  return (
    <>
    <Navbar />
    <div className="order">
    <div className="order1">
      <img classname="pic1" src="./src/assets/order1.png" width={259} height={272}/>
      <ul className="no1">
      <div class="topscot">
       <h2>Scottish fold</h2>
      </div>
        <h4>AGE : 1 Year</h4>
        <h4>PRICE : 100 $</h4>
        <h4>STATUS : Ready</h4>
       < div className="orderbtn">
        <button>Click to Order</button>
        </div>
      </ul>
    </div>
    <div className="order2">
      <img src="./src/assets/order2.png" width={259} height={272}/>
      <ul className="no2">
      <div class="topper"><h2>Persian</h2></div>
      <h4>AGE : 2 Year</h4>
        <h4>PRICE : 150 $</h4>
        <h4>STATUS :Not Ready</h4>
        <div className="orderbtn">
        <button >Click to Order</button>
        </div>
      </ul>
    </div>
  </div>
  </>
  )
}

export default pet
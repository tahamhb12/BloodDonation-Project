import "./notfound.css"
import pic1 from "./not_found_2.png"
const Notfound = () => {


    return ( 
        <div className="notfound">
            <div className="notfoundd">
                <img className="notfoundimg" src={pic1} alt="" />
                <h1>Not Found...</h1>
            </div>
        </div>
     );
}
 
export default Notfound;
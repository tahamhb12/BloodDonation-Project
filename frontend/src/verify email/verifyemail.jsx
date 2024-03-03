import { useEffect,useState } from "react";
import './verifyemail.css'

const Verifyemail = (props) => {
    const [confirmcode, setconfirmcode] = useState('');
    const [randomNumber, setRandomNumber] = useState('');
    const bloodtype = props.bloodtype
    const city = props.city
    const phonenumber = props.phonenumber
    const email = props.email
    const password = props.password
    const password_confirmation = props.password_confirmation




    useEffect(()=>{
        const generateRandomNumber = () => {
            const min = 100000; // minimum 6-digit number
            const max = 999999; // maximum 6-digit number
            const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
            setRandomNumber(randomNum.toString());
          };
          generateRandomNumber()
      },[])

      const createacc = () =>{
        register({bloodtype,city,phonenumber,email,password,password_confirmation})
      }

      


    return ( 
        <div className="verifyemail">

            <label htmlFor="">Confirmation code</label> <br /> 
            <input type="text" onChange={(e)=>setconfirmcode(e.target.value)} />
            <button>create</button>
        {console.log(bloodtype)}
        </div>

     );
}
 
export default Verifyemail;
import { useEffect, useState } from "react";
import axios from "../api/axios";
import "./forgot_pass.css"
import emailjs from '@emailjs/browser';
import useAuthContext from "../context/AuthContext";

const Forgot_pass = () => {
    const [randomNumber, setRandomNumber] = useState('');
    const [confirmcode, setconfirmcode] = useState('');
    const [mail, setmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setpassword_confirmation] = useState('');  
    const [gotocodesec, setgotocodesec] = useState(false);
    const [gotopasschangesec, setgotopasschangesec] = useState(false);
    const {user,users,getuser,getusers} = useAuthContext()


    const sendEmail = () => {

        const serviceId = 'service_z26dqrz';
        const templateId = 'template_d44v00v';
        const publicKey = 'wKQk4VEDkOuPumdkz';

        const templateparams = {
            to_email:mail,
            message:`Reset your password,${randomNumber}`
        }
    
        emailjs.send(serviceId, templateId, templateparams,publicKey)
        .then((resultat) => {
            console.log(resultat);
            alert('code gone')
            setgotocodesec(true)
            })
        .catch(error => {
            console.log('FAILED...', error);
        });
        
      };
      useEffect(()=>{
        const generateRandomNumber = () => {
            const min = 100000; // minimum 6-digit number
            const max = 999999; // maximum 6-digit number
            const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
            setRandomNumber(randomNum.toString());
          };
          generateRandomNumber()
      },[])

      const passwordreset=()=>{
        if(randomNumber==confirmcode){
            setgotopasschangesec(true)
        }else{
            alert('wrong code')
            setgotopasschangesec(false)
        }
      }

      const resetpass = async () => {
    
        try {
          await axios.put('/api/users/password', {
            email: mail,
            password,
            password_confirmation
          });
          
          // Assuming successful response
          alert('Password updated successfully');
        } catch (error) {
            alert('Failed to update password');
          console.log(error);
        }
      };
      


    return ( 
<div className="forgotpass" style={{paddingTop:'100px',height:'1000px'}}>

        {!gotocodesec &&<>enter email <input type="text" onChange={(e)=>setmail(e.target.value)}/>
        <button onClick={()=>sendEmail()}>Send code</button></>}

        {gotocodesec && !gotopasschangesec && <>
            <input type="text" placeholder="enter confirmation code" onChange={(e=>setconfirmcode(e.target.value))} />
            <button onClick={()=>passwordreset()}>check</button>
        </>}
        {gotopasschangesec && <>
            <div>
          <label>New Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" value={password_confirmation} onChange={(e) => setpassword_confirmation(e.target.value)} required />
        </div>
        <button onClick={()=>resetpass()}>resetpass</button>
        </>
        
        }



{console.log(randomNumber,password,password_confirmation)}
</div>

     );
}
 
export default Forgot_pass;
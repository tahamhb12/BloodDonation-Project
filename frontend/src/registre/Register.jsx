import { Link, Navigate, useNavigate } from "react-router-dom"
import useAuthContext from "../context/AuthContext"
import './registre.css'
import { useState,useEffect } from "react"
import emailjs from '@emailjs/browser';

export function Registre(props) {

    const bloodtype = props.bloodtype
    const setbloodtype = props.setbloodtype
    const city = props.city
    const setcity = props.setcity
    const phonenumber = props.phonenumber
    const setphonenumber = props.setphonenumber
    const email = props.email
    const setemail = props.setemail
    const password = props.password
    const setpassword = props.setpassword
    const password_confirmation = props.password_confirmation
    const setpassword_confirmation = props.setpassword_confirmation



    const [randomNumber, setRandomNumber] = useState('');
    const [confirmcode, setconfirmcode] = useState('');
    const [verifyemail,setverifyemail] = useState(false);
    const {register,registererrors} = useAuthContext()

    const navigate = useNavigate()



    useEffect(()=>{
        const generateRandomNumber = () => {
            const min = 100000; // minimum 6-digit number
            const max = 999999; // maximum 6-digit number
            const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
            setRandomNumber(randomNum.toString());
          };
          generateRandomNumber()
      },[])


    const sendEmail = () => {
        const serviceId = 'service_z26dqrz';
        const templateId = 'template_d44v00v';
        const publicKey = 'wKQk4VEDkOuPumdkz';

        const templateparams = {
            to_email:email,
            message:`verify your email,${randomNumber}`
        }
        if(email){
        emailjs.send(serviceId, templateId, templateparams,publicKey)
        .then((resultat) => {
            console.log(resultat);
            alert('code gone')
            setgotocodesec(true)
            })
        .catch(error => {
            console.log('FAILED...', error);
        });
    }
      };

      const handleregister = async(event)=>{
        event.preventDefault();
        register({bloodtype,city,phonenumber,email,password,password_confirmation})
/*         navigate("/verify_email") */



/*      
           navigate("/verify_email")
 */    }
    return (

        <div className="register_form">
            <form onSubmit={handleregister}>
                <label htmlFor="">Groupe sanguin</label> <br />
                <select className="groupe" value={bloodtype} onChange={(e)=>setbloodtype(e.target.value)}>
                    <option value="Groupe sanguin">Groupe sanguin</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>

                </select> <br />
                {registererrors.bloodtype && <>
                <p className="error">{registererrors.bloodtype[0]}</p><br />
                </>}
                <label htmlFor="">Ville</label><br />
                <select className="ville" value={city} onChange={(e)=>setcity(e.target.value)}>

                    <option value="Ville">Ville</option>
                    <option value="Meknes">Meknes</option>
                    <option value="Rabat">Rabat</option>

                </select> <br />
                {registererrors.city && <>
                <p className="error">{registererrors.city[0]}</p><br />
                </>}
                <label htmlFor="">Numero de telephone </label> <br />
                <input className="ville" type="tel" value={phonenumber} onChange={(e)=>setphonenumber(e.target.value)}/> <br />
                {registererrors.phonenumber && <>
                <p className="error">{registererrors.phonenumber[0]}</p><br />
                </>}
                <label htmlFor="">Email</label> <br />

                <input className="ville" type="email" value={email} onChange={(e)=>setemail(e.target.value)}/> <br />
                {registererrors.email && <>
                <p className="error">{registererrors.email[0]}</p><br />
                </>}
                <label htmlFor=""> Mot de passe </label><br />
                <input className="ville" type="password" value={password} onChange={(e)=>setpassword(e.target.value)} /> <br />
                {registererrors.password && <>
                <p className="error">{registererrors.password[0]}</p><br />
                </>}
                <label htmlFor=""> Confirmer le mot de passe </label> <br />
                <input className="ville" type="password" value={password_confirmation} onChange={(e)=>setpassword_confirmation(e.target.value)} />  <br />
                <input type="submit" name="" id="" value={"S'inscrire"} /> <br />

                <p htmlFor="" className="ville"> Vous avez déjà un compte ? <Link to="/login">se connecter</Link></p>

            </form>
        </div>
    )
}
import { Link } from "react-router-dom"
import useAuthContext from "../context/AuthContext"
import './registre.css'
import { useState } from "react"
export function Registre() {

    const [bloodtype,setbloodtype] = useState("")
    const [city,setcity] = useState("")
    const [phonenumber,setphonenumber] = useState("")
    const [email,setemail] = useState("")
    const [password,setpassword] = useState("")
    const [password_confirmation,setpassword_confirmation] = useState("")
    const {register,registererrors} = useAuthContext()



    const handlergister = async(event)=>{
        event.preventDefault();
        register({bloodtype,city,phonenumber,email,password,password_confirmation})

    }

    return (

        <div className="register_form">
            <form onSubmit={handlergister}>
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
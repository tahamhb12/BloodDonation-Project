import "./profile.css"
import useAuthContext from "../context/AuthContext"
import axios from "../api/axios"
import { useEffect, useState } from "react"
const Profile = () => {

    const { user,getuser} = useAuthContext()


    const [bloodtype, setbloodtype] = useState("")
    const [city, setcity] = useState("")
    const [phonenumber, setphonenumber] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [password_confirmation, setpassword_confirmation] = useState("")
    const [errors,seterrors] = useState([])
    const [tru,settry] = useState(false)

    useEffect(()=>{
        setbloodtype(user.bloodtype)
        setcity(user.city)
        setphonenumber(user.phonenumber)
        setpassword(user.password)
        setpassword_confirmation(user.password_confirmation)
    },[])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.put('api/user/update',{bloodtype,city,phonenumber,password,password_confirmation});
          if(bloodtype!== user.bloodtype || city!== user.city || phonenumber!== user.phonenumber || password!== user.password){
            getuser()
            alert('les informations ont été modifiées avec succès')
        }
        } catch (error) {
            if(error.response.status === 422){
                seterrors(error.response.data.errors)
                setTimeout(() => {
                    seterrors([])
                }, 5000);
            }
        }
      };



    return (
        <div className="profile">
            <div className="register_form">
                <h1 className="title">Modifier votre informations personnelles</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Groupe sanguin</label> <br />
                    <select className="groupe" defaultValue={user.bloodtype} onChange={(e) => setbloodtype(e.target.value)}>
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
                    {errors.bloodtype && <>
                        <p className="error">{errors.bloodtype[0]}</p><br />
                    </>}
                    <label htmlFor="">Ville</label><br />
                    <select className="ville" defaultValue={user.city} onChange={(e) => setcity(e.target.value)}>

                        <option value="Ville">Ville</option>
                        <option value="Meknes">Meknes</option>
                        <option value="Rabat">Rabat</option>

                    </select> <br />
                    {errors.city && <>
                        <p className="error">{errors.city[0]}</p><br />
                    </>}
                    <label htmlFor="">Numero de telephone </label> <br />
                    <input className="ville" type="tel" defaultValue={user.phonenumber} onChange={(e) => setphonenumber(e.target.value)} /> <br />
                    {errors.phonenumber && <>
                        <p className="error">{errors.phonenumber[0]}</p><br />
                    </>}
                    <label htmlFor="">Email </label> <br />
                    <input className="ville" type="email" disabled defaultValue={user.email} onChange={(e) => setemail(e.target.value)} /> <br />
                    {errors.email && <>
                        <p className="error">{errors.email[0]}</p><br />
                    </>}
                    <label htmlFor=""> Nouveau mot de passe </label><br />
                    <input className="ville" type="password" onChange={(e) => setpassword(e.target.value)} /> <br />
                    {errors.password && <>
                        <p className="error">{errors.password[0]}</p><br />
                    </>}
                    <label htmlFor=""> Confirmer nouveau mot de passe </label> <br />
                    <input className="ville" type="password" onChange={(e) => setpassword_confirmation(e.target.value)} />  <br />
                    <input type="submit" value={"Modifier"} /> <br /><br /><br />


                </form>
                {console.log(password)}
            </div>

        </div>
    );
}

export default Profile;
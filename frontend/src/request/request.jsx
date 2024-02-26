import "./request.css"
import { useEffect, useState } from "react";
import axios from "../api/axios";
import useAuthContext from "../context/AuthContext";
const Request = () => {

    const [bloodtype,setblood] = useState('')
    const [city,setcity] = useState('')
    const [sexe,setsexe] = useState('')
    const [email,setemail] = useState('')
    const [description,setdescription] = useState("")
    const [errors,seterrors] = useState([])
    const [list,setlist] = useState([])
    const {user,getusers} = useAuthContext()

    useEffect(() => {
        const getBlood = async () => {
            try {
                const { data } = await axios.get('/api/bloodrequest');
                setlist(data);
            } catch (error) {
                console.log(error);
            }
        };
        getBlood();
    }, []);

    const handleblood=async(event)=>{
        event.preventDefault()
        try {
            await axios.post("/api/bloodrequest",{userid:user.id,bloodtype,sexe,city,phonenumber:user.phonenumber,description,email:user.email})
            alert("Votre demande a été ajoutée avec succès");
            setblood("");
            setcity("");
            setsexe("");
            setdescription("");
            const { data } = await axios.get('/api/bloodrequest');
            setlist(data);
        } catch (error) {
            if(error.response.status === 422){
                seterrors(error.response.data.errors)
                setTimeout(() => {
                    seterrors([])
                }, 5000);
            }
        }
    }
    const deleteRequest = async (id) => {
        try {
            await axios.delete(`api/bloodrequest/${id}`);
            alert("Demande supprimée avec succès.");
            // Update the list after deletion
            setlist(list.filter(item => item.id !== id));
        } catch (error) {
            console.error("Error deleting blood request:", error);
        }
    };
    const a = list.filter((t)=>t.userid==user.id)

    return ( 
        <div className="requestsection">
            <h1 className="ajouerdemand">Ajouter une demande</h1>
            <form onSubmit={handleblood}>
                <label htmlFor="">Groupe sanguin</label> <br />
                    <select className="groupe" value={bloodtype} onChange={(e)=>setblood(e.target.value)}>
                        <option value="Groupe sanguin">Groupe sanguin</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                    </select>
                    {errors.bloodtype && 
                <p className="error">{errors.bloodtype[0]}</p>}<br/>
                <label htmlFor="">Sexe</label> <br />
                    <select className="groupe" value={sexe} onChange={(e)=>setsexe(e.target.value)}>
                        <option value="Groupe sanguin">Sexe</option>
                        <option value="Homme">Homme</option>
                        <option value="Femme">Femme</option>
                    </select>
                    {errors.sexe && 
                <p className="error">{errors.sexe[0]}</p>}<br/>
                    <label htmlFor="">Ville</label><br />
                    <select className="ville" value={city} onChange={(e)=>setcity(e.target.value)}>
                        <option value="Ville">Ville</option>
                        <option value="Meknes">Meknes</option>
                        <option value="Rabat">Rabat</option>
                    </select>
                    {errors.city && 
                <p className="error">{errors.city[0]}</p>}<br/>              
                    Description<input type="text" value={description} onChange={(e)=>setdescription(e.target.value)}/>
                    {errors.description && 
                <p className="error">{errors.description[0]}</p>}<br/>   
                <input type="submit" value={"Ajouter"} name="" id="" />
            </form>
            <h1 className="reqtitle">Mes Demandes</h1>
        <div className="myrequests">
                {list.filter((t)=>t.userid==user.id).map((a,index)=>(
                    <div key={index} className="container">
                        <div className="myreqs">
                      <div className="bloodtypesec">
                                <p className="title">Blood Type</p>
                                <p className="bloodtype">{a.bloodtype}</p>
                            </div>

                            <div className="otherinfos">
                                <p className="bloodemail">{a.email}</p>
                                <p className="todo">Ville : <span className="villespan">{a.city}</span></p>
                                <p>Sexe : <span className="villespan">{a.sexe}</span></p>
                                <p>Téléphone : <span className="villespan">{a.phonenumber}</span></p>
                                <p>Description : <span className="villespan">{a.description}</span></p>
                                <button onClick={()=>deleteRequest(a.id)}>Annuler</button>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    </div>
     );
}
 
export default Request;
import "./demands.css";
import { useEffect, useState } from "react";
import axios from "../api/axios";
import useAuthContext from "../context/AuthContext";

const BloodDemands = () => {
    let [list, setList] = useState([]);
    const [bloodtype, setbloodtype] = useState("");
    const [sexe, setsexe] = useState("");
    const [ville, setville] = useState("");
    const { user } = useAuthContext();

    list = bloodtype == "A+" && bloodtype!=="Groupe sanguin"  ? list.filter((p) => p.bloodtype == "A+" || p.bloodtype == "AB+" ) :list;

    /* all who can take from O+ */
    list = bloodtype == "O+" && bloodtype!=="Groupe sanguin"  ? list.filter((p) => 
    p.bloodtype == "O+" 
    || p.bloodtype == "A+" 
    || p.bloodtype == "B+"
    || p.bloodtype == "AB+") :list;

    /* all who can take from A- */
    list = bloodtype == "A-" && bloodtype!=="Groupe sanguin"  ? list.filter((p) => 
    p.bloodtype == "A-" 
    || p.bloodtype == "A+" 
    || p.bloodtype == "AB-"
    || p.bloodtype == "AB+") :list;

    /* all who can take from B+ */
    list = bloodtype == "B+" && bloodtype!=="Groupe sanguin"  ? list.filter((p) => 
    p.bloodtype == "B+" 
    || p.bloodtype == "AB+" ) :list;

    /* all who can take from AB- */
    list = bloodtype == "AB-" && bloodtype!=="Groupe sanguin"  ? list.filter((p) => 
    p.bloodtype == "AB-" 
    || p.bloodtype == "AB+" ) :list;

    /* all who can take from AB+ */
    list = bloodtype == "AB+" && bloodtype!=="Groupe sanguin"  ? list.filter((p) => 
    p.bloodtype == "AB+" ) :list;

    /* all who can take from B- */
    list = bloodtype == "B-" && bloodtype!=="Groupe sanguin"  ? list.filter((p) => 
    p.bloodtype == "B-" 
    || p.bloodtype == "B+"
    || p.bloodtype == "AB+"
    || p.bloodtype == "AB-") :list;

    /* all who can take from O- */
    list = bloodtype == "O-" && bloodtype!=="Groupe sanguin"  ? list:list;


    list = sexe !== "" && sexe!== "sexe"  ? list.filter((p) => p.sexe === sexe ) :list;
    list = ville !== "" && ville!== "Ville"  ? list.filter((p) => p.city === ville ) :list;


    useEffect(() => {
        const getBlood = async () => {
            try {
                const { data } = await axios.get('/api/bloodrequest');
                setList(data);
            } catch (error) {
                console.log(error);
            }
        };
        getBlood();
    }, []);

    const clear = () =>{
        setbloodtype("")
        setsexe("")
        setville("")
    }
    return ( 
        <div className="demands">
            <p className="text-center text-4xl">Groupes sanguins auxquels vous pouvez donner</p><br />
            <div className="filter">
            bloodtype:<select title="test" value={bloodtype} className="groupe" onChange={(e)=>setbloodtype(e.target.value)}>
                        <option value="Groupe sanguin">None</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                    </select>
                    sexe:<select className="groupe" value={sexe} onChange={(e)=>setsexe(e.target.value)}>
                        <option value="sexe">None</option>
                        <option value="Homme">Homme</option>
                        <option value="Femme">Femme</option>
                    </select>
                    ville:<select className="ville" value={ville} onChange={(e)=>setville(e.target.value)}>
                        <option value="Ville">None</option>
                        <option value="Meknes">Meknes</option>
                        <option value="Rabat">Rabat</option>
                    </select>
            </div>
            <div className="clearbutt">
                <button onClick={()=>clear()}>clear</button>
            </div>
        <div style={{margin:'auto'}} className="myrequests">
                {list.map((a,index)=>(
                    <div key={index} className="container">
                        <div className="myreqs">
                        <div className="bloodtypesec">
                                <p className="title">Blood Type</p>
                                <p className="bloodtype">{a.bloodtype}</p>
                        </div>
                            <div className="otherinfos">
                                <p className="bloodemail">{a.email}</p>
                                <p>Ville : <span className="villespan">{a.city}</span></p>
                                <p>Sexe : <span className="villespan">{a.sexe}</span></p>
                                <p>Téléphone : <span className="villespan">{a.phonenumber}</span></p>
                                <p>Description : <span className="villespan">{a.description}</span></p>
                            </div>
                        </div>
{/*                         {bloodtype !== a.bloodtype ? <span>can give to</span>:"" }
 */}                    </div>
                ))}
                {list.length == 0 && <p className="notfound">Aucun résultat...</p>}
        </div>
        </div>
    );
};

export default BloodDemands;

import { useEffect, useState } from "react";
import axios from "../api/axios";
import "./section4.css"
import useAuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";

const Section4 = () => {

    const { user } = useAuthContext();
    let [list, setList] = useState([]);


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

        if(user){
            list = user.bloodtype == "A+"  ? list.filter((p) => p.bloodtype ==user.bloodtype || p.bloodtype == "AB+" ) :list;
            
            /* all who can take from O+ */
            list = user.bloodtype == "O+"  ? list.filter((p) => 
            p.bloodtype == "O+" 
            || p.bloodtype == "A+" 
            || p.bloodtype == "B+"
            || p.bloodtype == "AB+") :list;
        
            /* all who can take from A- */
            list = user.bloodtype == "A-"  ? list.filter((p) => 
            p.bloodtype ==user.bloodtype 
            || p.bloodtype == "A+" 
            || p.bloodtype == "AB-"
            || p.bloodtype == "AB+") :list;
        
            /* all who can take from B+ */
            list = user.bloodtype == "B+"  ? list.filter((p) => 
            p.bloodtype ==user.bloodtype 
            || p.bloodtype == "AB+" ) :list;
        
            /* all who can take from AB- */
            list = user.bloodtype == "AB-"  ? list.filter((p) => 
            p.bloodtype == user.bloodtype 
            || p.bloodtype == "AB+" ) :list;
        
            /* all who can take from AB+ */
            list = user.bloodtype == "AB+"  ? list.filter((p) => 
            p.bloodtype == user.bloodtype ) :list;
        
            /* all who can take from B- */
            list = user.bloodtype == "B-"  ? list.filter((p) => 
            p.bloodtype ==user.bloodtype 
            || p.bloodtype == "B+"
            || p.bloodtype == "AB+"
            || p.bloodtype == "AB-") :list;
        
            /* all who can take from O- */
            list = user.bloodtype == "O-"? list:list;
        }
/*         let a = 0
        if(user){
            if(user.bloodtype=="A+"){
                const s = list.filter(a=>a.bloodtype == "AB+")
                a = s.length
            }
        } */

    return ( 
        <div className="section4">
            <div className="title">
                <h1>Certaines personnes qui en ont besoin</h1>
            </div><br /><br />
            <div className="somusers">
            {list.slice(0, 5).map((a, index) => (
                <div className="someuser" key={index}>
                    <p className="title">{a.bloodtype} <span> Sang nécessaire</span></p>
                    <div className="inofsreq">
                        <p><span className="spanshit">Ville: </span> {a.city}</p>
                        <p><span className="spanshit">Sexe: </span> {a.sexe}</p>
                        <p><span className="spanshit">Telephone: </span> {a.phonenumber}</p>
                    </div>
                    <p className="despart"><span className="spanshit">Descripiton: </span> {a.description}</p>
                    <Link to={"/demands"}>Donner du sang</Link>
                    <Link to={"/demands"} className="test"><i class="fa-solid fa-droplet"></i></Link>
                </div>
            ))}
            </div>
        </div>
     );
}
 
export default Section4;

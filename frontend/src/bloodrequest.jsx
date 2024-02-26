import { useState } from "react";
import axios from "./api/axios";
import useAuthContext from "./context/AuthContext";

const Blood = () => {


    const [bloodtype,setblood] = useState('')
    const [city,setcity] = useState('')
    const [email,setemail] = useState('')
    const [list,setlist] = useState([])

    const handleblood=async(event)=>{
        event.preventDefault()
        try {
            await axios.post("/api/bloodrequest",{bloodtype,city,email})
        } catch (error) {
            console.log(error)
        }
    }
    
/*     const getblood = async () => {
        const {data} = await axios.get('/api/bloodrequest');
        setlist(data)
    } */

    return ( 
<>
<form onSubmit={handleblood}>
        bloodtype<input type="text" onChange={(e)=>setblood(e.target.value)}/>
        city<input type="text" onChange={(e)=>setcity(e.target.value)}/>
        email<input type="email" onChange={(e)=>setemail(e.target.value)}/>
        <input type="submit" name="" id="" />
</form>
{/* <button onClick={()=>getblood()}>sss</button>
{console.log(list)} */}
</>
     );
}
 
export default Blood;
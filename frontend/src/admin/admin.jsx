import "./admin.css"
import useAuthContext from "../context/AuthContext";
import axios from "../api/axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Admin = () => {

    const [requests,setrequests] = useState([])
    const {users,getusers,administator} = useAuthContext()

    useEffect(()=>{
        getusers()
    },[])
    
    useEffect(()=>{
        const getblood=async()=>{
            try{
                const {data} = await axios.get("/api/bloodrequest")
                setrequests(data)
            }
            catch(error){
                console.log(error);
            }
        }
        getblood()
    },[])
    



    const deleteRequestsOftheuser = async (email) => {
        try {
            await axios.delete(`/api/bloodrequest/email/${email}`);
        } catch (error) {
            console.error(error);
        }
    };
    
    
    const deleteUser = async (id,email) => {
        try {
            await deleteRequestsOftheuser(email)
            await axios.delete(`api/users/${id}`);
            alert("user supprimée avec succès.");
            getusers()
        } catch (error) {
            console.error("Error deleting blood request:", error);
        }
    };


    return ( 
        <div className="admin">
            <h1 className="titlee">All Users</h1>
            <p className="nbusers">Number of users: {users.length-1}</p>
            <div className="somusers">
                {users.filter(user=>(user.email !== administator())).map((a,index)=>(
                    <div className="someuser" key={index}>
                        <p className="title"><span>User_Id : </span>{a.id} </p>
                        <p className="title">Requests done by user : {requests.filter(req=>req.email == a.email).length}</p>
                        <p className="title"><span>Email: </span> {a.email}</p>
                        <div className="inofsreq">
                            <p><span className="spanshit">Bloodtype : </span>{a.bloodtype} </p>
                            <p><span className="spanshit">City: </span> {a.city}</p>
                            <p><span className="spanshit">Phone: </span> {a.phonenumber}</p>
                        </div>
                        <p className="despart"><span className="spanshit">Created_at : </span> {a.created_at}</p>
                        <p className="despart"><span className="spanshit">Updated_at : </span> {a.updated_at}</p>
                        <Link onClick={()=>deleteUser(a.id,a.email)}>Delete account</Link>
                        <Link className="test" onClick={()=>deleteUser(a.id,a.email)}><i class="fa-solid fa-delete-left"></i></Link>
                </div>
                ))}
            </div>
            {console.log(requests.length)}
        </div>
     );
}
export default Admin;
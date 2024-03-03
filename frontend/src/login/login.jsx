import React from "react";
import "./login.css"
import { Link  } from "react-router-dom";
import { useState } from "react";
import useAuthContext from "../context/AuthContext";

export function Login() {

    const [email,setemail] = useState("")
    const [password,setpassword] = useState("")
    const {login,loginerrors} = useAuthContext()


    const handlelogin = async (event)=>{
        event.preventDefault();
        login({email,password})
    }

    return (
        <div className="login">
            <form onSubmit={handlelogin}>
                <p>Content de te revoir!</p>
                <label htmlFor="">Email ou Numéro de téléphone</label> <br />
                <input type="text" value={email} placeholder="Email ou Numéro de téléphone" onChange={(e)=>setemail(e.target.value)} /> <br />
                {loginerrors.email && 
                <p className="error">{loginerrors.email[0]}</p>}
                <label htmlFor="">Mot de passe</label><br />
                <input type="password" value={password} placeholder="Mot de passe" onChange={(e)=>setpassword(e.target.value)}/> <br />
                {loginerrors.password && 
                <p className="error">{loginerrors.password[0]}</p>}
                <Link to="/forget_password">Mot de passe oublié ?</Link> <br /> <br />
                <input type="submit" value={"Se connecter"} /> <br />
                <span>Vous n'avez pas de compte ? <Link to="/registre">Je m'inscris</Link></span>




            </form>



        </div>
    )
}

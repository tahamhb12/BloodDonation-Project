import { createContext,useContext,useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router";

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [user,setuser] = useState(null);
    const [users,setusers] = useState([]);
    const navigate = useNavigate();
    const [loginerrors,setloginerrors] = useState([])
    const [registererrors,setregistererrors] = useState([])





    const csrf=()=>axios.get('/sanctum/csrf-cookie');

    const getusers = async () => {
        const {data} = await axios.get('/api/users');
        setusers(data)
    }


    const getuser = async () => {
        const {data} = await axios.get('/api/user');
        setuser(data);
    }
    const login = async ({...data}) => {
        await csrf();
        setloginerrors([])
        try {
            await axios.post('/login',data);
            await getuser();
            navigate("/")
        } catch (error) {
            if(error.response.status === 422){
                setloginerrors(error.response.data.errors)
                setTimeout(() => {
                    setloginerrors([])
                }, 5000);
            }
        }
    }
    const register = async ({...data}) => {
        await csrf();
        setregistererrors([])
        try {
            await axios.post('/register',data);
            await getuser();
            navigate("/")
        } catch (error) {
            if(error.response.status === 422){
                setregistererrors(error.response.data.errors)
                setTimeout(() => {
                    setregistererrors([])
                }, 5000);
            }
        }
    };
    const logout = () =>{
        axios.post('/logout').then(()=>{
            setuser(null)
        })
    }
    const administator = () =>{
        return "tahamhb12@gmail.com"
    }
    

    return <AuthContext.Provider value={{user,users,loginerrors,registererrors,getuser,getusers,administator,login,register,logout}}>
        {children}
    </AuthContext.Provider>
}
export default function useAuthContext(){
    return useContext(AuthContext)
}
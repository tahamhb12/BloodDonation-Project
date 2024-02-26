/* import { Outlet } from "react-router";
import { useState } from "react";
import { Navbar } from "./guestnavbar/navbar";
import Footer from "./footer/footer";

const Layout = () => {


    const [show, setShow] = useState(false);

    return ( 
        <div className="layout">
                {show ? <div className="nav" style={{
                paddingBottom:'250px',
            }}><Navbar show={show} setShow={setShow}/>
            </div>:<div><Navbar show={show} setShow={setShow}/>
            </div>}
            <Outlet/><br />
            <Footer/>
        </div>


     );
}
 
export default Layout; */
/* import { createBrowserRouter } from "react-router-dom";
import { Login } from "./login/login";
import { Registre } from "./registre/Register";
import Section1 from "./section1/section1";
import Section2 from "./section2/section2";
import BloodDonationInfo from "./section3/section3";
import Section4 from "./section4/section4";
import { Navbar } from "./navbar/navbar";
import Layout from "./layout";
import About from "./about/about";

const router = createBrowserRouter([
    {
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:
                    <>
                    <Section1/><br />
                    <Section2/><br /><br />
                    <BloodDonationInfo/><br /><br /><br />
                    <Section4/><br /><br /><br />
                    </>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/registre",
                element:<Registre/>
            },
            {
                path:"/A_propos",
                element:<About/>
            },
        ]
    }


])
export default router; */
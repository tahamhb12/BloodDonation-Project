import { Route, Routes } from 'react-router-dom';
import { Navbar } from './navbar/navbar';
import { Registre } from './registre/Register';
import { useEffect, useState } from 'react';
import Section1 from './section1/section1';
import Section2 from './section2/section2';
import { ParticleComponent } from './section1/ts';
import EligibilityInfo from './section3/section3';
import BloodDonationInfo from './section3/section3';
import { Login } from './login/login';
import Footer from './footer/footer';
import Section4 from './section4/section4';
import About from './about/about';
import Authlayout from './layouts/authlayout';
import Guestlayout from './layouts/guestlayout';
import BloodDemands from './demands/demands';
import Notfound from './404 not found/notfound';
import Request from './request/request';
import Blood from './bloodrequest';
import Profile from './profile/profile';
import Admin from './admin/admin';
import Adminlayout from './layouts/adminlayout';
import Forgot_pass from './forget_password/forgot_pass';
import Verifyemail from './verify email/verifyemail';

const App = () => {
    const [show, setShow] = useState(false);
    const [bloodtype,setbloodtype] = useState("")
    const [city,setcity] = useState("")
    const [phonenumber,setphonenumber] = useState("")
    const [email,setemail] = useState("")
    const [password,setpassword] = useState("")
    const [password_confirmation,setpassword_confirmation] = useState("")

    
    const ScrollToTop = () => {
        useEffect(() => {
          window.scrollTo(0, 0); // Scroll to the top when component mounts
        });
      
        return null;
      };

    return (
        <div>
            {show ? <div className="nav" style={{
                paddingBottom:'250px',
            }}><Navbar show={show} setShow={setShow}/>
            </div>:<div><Navbar show={show} setShow={setShow}/>
            </div>}
          <Routes>
                <Route path='/' element={
                    <>
                    <Section1/><br />
                    <Section2/><br /><br />
                    <BloodDonationInfo/><br /><br /><br />
                    <Section4/><br /><br /><br />
                    <ScrollToTop />
                    </>}>
                </Route>    
                <Route element={<Guestlayout/>}>
                    <Route path='/registre' exact element={<><Registre 
                        bloodtype={bloodtype} setbloodtype={setbloodtype}
                        city={city} setcity={setcity}
                        phonenumber={phonenumber} setphonenumber={setphonenumber}
                        email={email} setemail={setemail}
                        password={password} setpassword={setpassword}
                        password_confirmation={password_confirmation} setpassword_confirmation={setpassword_confirmation}/>
                        <ScrollToTop /></>}>
                    </Route>
                    <Route path='/login' element={<><Login/><ScrollToTop /></>}></Route>
                    <Route path='/forget_password' element={<><Forgot_pass/><ScrollToTop /></>}></Route>
                    <Route path='/verify_email' element={<><Verifyemail 
                        bloodtype={bloodtype} setbloodtype={setbloodtype}
                        city={city} setcity={setcity}
                        phonenumber={phonenumber} setphonenumber={setphonenumber}
                        email={email} setemail={setemail}
                        password={password} setpassword={setpassword}
                        password_confirmation={password_confirmation} setpassword_confirmation={setpassword_confirmation}/>
                        <ScrollToTop /></>}>
                    </Route>
                </Route>
                <Route element={<Authlayout/>}>
                    <Route path='/demands' element={<><BloodDemands/><ScrollToTop /></>}></Route>
                    <Route path='/request' element={<><Request/><ScrollToTop /></>}></Route>
                    <Route path='/mon_profile' element={<><Profile/><ScrollToTop /></>}></Route>
                </Route>
                <Route element={<Adminlayout/>}>
                    <Route path='/admin' element={<><Admin/><ScrollToTop /></>}></Route>
                </Route>
                <Route path='/A_propos' element={<><About/><ScrollToTop /></>}></Route>
                <Route path='*' element={<><Notfound/><ScrollToTop /></>}></Route>
            </Routes><br />
            <Footer/>
        </div>
        
    );
};

export default App;
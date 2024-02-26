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

const App = () => {
    const [show, setShow] = useState(false);
    
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
                    <Route path='/registre' exact element={<><Registre/><ScrollToTop /></>}></Route>
                    <Route path='/login' element={<><Login/><ScrollToTop /></>}></Route>
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
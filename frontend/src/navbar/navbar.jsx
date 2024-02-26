import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import useAuthContext from "../context/AuthContext";
import './navbar.css'


export function Navbar(props) {
  const show = props.show
  const setShow = props.setShow
  const [showOptions, setShowOptions] = useState(false);
  const [showOptions2, setShowOptions2] = useState(false);
  const [color, setcolor] = useState(false);
  const [color2, setcolor2] = useState(false);
  const [color3, setcolor3] = useState(false);
  const location = useLocation();


  const ScrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to the top when component mounts

    return null;
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setShow(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { user, getuser, logout ,administator } = useAuthContext();

  useEffect(() => {
    if (!user) {
      getuser();
    }
  }, []);

  const logoutt = () => {
    setShowOptions(false)
    setShow(false)
    logout()
  }
  const resclicks = () => {
    setShow(false)
    setShowOptions2(false)
  }
  const iconclick = () => {
    setShow(!show)
    setShowOptions2(false)
  }
  const emailclick = () => {
    setShowOptions(!showOptions)
    setTimeout(() => {
      setShowOptions(false)
    }, 4000);
  }


  return (
    <div className='nav bg-white fixed top-0 left-0 w-full flex justify-between items-center py-4 shadow-lg z-10 '>
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <i className="fa-solid fa-droplet text-red-500 text-3xl"></i>
          <Link to={"/"} onClick={() => ScrollToTop()} className="text-xl font-bold text-gray-800 ml-2">Crimson</Link>
        </div>
        <div className="links hidden lg:flex space-x-4 text-gray-800">
          {location.pathname=="/" ? <Link to="/" style={{color:'red'}} onClick={() => ScrollToTop()}>Accueil</Link>:<Link to="/" onClick={() => ScrollToTop()}>Accueil</Link>}
          {location.pathname=="/demands" ? <Link style={{color:"red"}} to="/demands">Demands</Link>:<Link to="/demands">Demands</Link>}
          {location.pathname=="/A_propos" ? <Link to="/A_propos" style={{color:"red"}} onClick={() => ScrollToTop()}>A propos</Link>:<Link to="/A_propos" onClick={() => ScrollToTop()}>A propos</Link>}
        </div>
        <div className="hidden lg:flex space-x-4 text-gray-800">
          {!user && (
            <Link
              to="/registre"
              className="bloodbutt bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm"
            >
              Donner mon sang ici !!
            </Link>
          )}
          {user ? (
            <>
              <div className="relative inline-block">
                <span
                  className="cursor-pointer email bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm"
                  onClick={emailclick}
                >
                  {user?.email}<i class="ml-3 fa-solid fa-caret-down"></i>
                </span>
                {showOptions && (
                  <div className="absolute mt-2 bg-white shadow-lg rounded-md py-2 w-48">
                    <Link to="/request" onClick={() => setShowOptions(false)} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left">
                      Mes demandes
                    </Link>
                    <Link to="/mon_profile" onClick={() => setShowOptions(false)} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left">
                      Mon profile
                    </Link>
                    {user.email == administator() &&<Link to="/admin" onClick={() => setShowOptions(false)} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left">
                      Admin panel
                    </Link>}
                    <button onClick={logoutt} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left">
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <Link to={"/login"} className="text-gray-800 px-4 py-2 text-sm">
              Mon compte
            </Link>
          )}
        </div>
        <i onClick={iconclick} className="fa-solid fa-bars lg:hidden text-xl cursor-pointer"></i>
      </nav>
      {show && (
        <div className="navres absolute top-full left-0 w-full bg-white px-6 py-3 shadow-lg">
          <div className="flex flex-col justify-center items-center text-gray-800 bg-white">
            {location.pathname=="/" ? <Link onClick={resclicks} style={{color:"red"}} className="px-4 py-2 " to="/">Accueil</Link>:<Link onClick={resclicks} className="px-4 py-2 " to="/">Accueil</Link>}
            {location.pathname=="/demands" ? <Link onClick={resclicks} style={{color:"red"}} className="px-4 py-2 " to="/demands">Demands</Link>:<Link onClick={resclicks} className="px-4 py-2 " to="/demands">Demands</Link>}
            {location.pathname=="/A_propos" ?<Link onClick={resclicks} style={{color:"red"}} className="px-4 py-2 " to="/A_propos">A propos</Link>:<Link onClick={resclicks} className="px-4 py-2 " to="/A_propos">A propos</Link>}
            {!user && <Link onClick={() => setShow(false)} to="/registre" className="bloodbuttres px-4 py-2  bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm">Donner mon sang ici !!</Link>}
            {user ? <><Link className=" emailres px-4 py-2  bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm">                <span
              className="cursor-pointer email bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm"
              onClick={() => setShowOptions2(!showOptions2)}
            >
              {user?.email}<i class="ml-3 fa-solid fa-caret-down"></i>
            </span></Link>
              {showOptions2 && (
                <div className="mt-2 bg-white shadow-lg rounded-md py-2 w-48">
                  <Link onClick={() => setShow(false)} to="/request" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left">
                    Mes demandes
                  </Link>
                  <Link onClick={() => setShow(false)} to="/mon_profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left">
                    Mon profile
                  </Link>
                  {user.email == administator() &&<Link to="/admin" onClick={() => setShow(false)} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left">
                      Admin panel
                    </Link>}
                  <button onClick={logoutt} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left">
                    Logout
                  </button>
                </div>
              )}
            </>
              : <Link to={"/login"} onClick={() => setShow(false)} className="text-gray-800 px-4 py-2 text-sm">Mon compte</Link>}

          </div>
        </div>
      )}
    </div>
  );
}

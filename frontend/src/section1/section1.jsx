import './section1.css'
import pic1 from "./bloodphoto.svg"
import { ParticleComponent } from './ts';
import { Link } from 'react-router-dom';
import { useCallback, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import useAuthContext from '../context/AuthContext';


const Section1 = () => {
    const { user } = useAuthContext();

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    const option = {
        background: {
            color: {
                value: "white",
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 0.2,
                    duration: 0.4,
                },
            },
        },
        particles: {

            color: {
                value: "#FF0000",
            },
            move: {
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 0.8,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 300,
            },
            opacity: {
                value: 0.2,
                random: {
                    enable: true,
                    minimumValue: 0.1,
                },
                animation: {
                    enable: true,
                    speed: 1,
                    minimumValue: 0.1,
                    sync: false,
                },
            },
            size: {
                value: { min: 3, max: 7 },
                animation: {
                    enable: true,
                    speed: 10,
                    minimumValue: 1,
                    sync: false,
                },
            },
        },
        detectRetina: true,
        style: {
            height: "700px",
        },
        fullScreen: {
            enable: false,

        },
    };
    const canvasStyle = {
        position: "absolute",
        zIndex: -1,
        left: 0,
        top: 0
    };

    return (
        <div className="section1">
            <div className="sec1">
                <Particles
                    id="tsparticles"
                    className='tsp'
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={option}
                    style={canvasStyle}

                />
                <div className="sec1_content">

                    <h2>Donner son sang  c'est donner la vie!</h2>
                    <p>Donner son sang revient à participer à sauver 1  million de vies chaque année, car ce don <br />
                        comprend également celui des plaquettes, du plasma ou encore du sang placentaire.
                    </p>
                    <div className='secbuttons'>
                        {user ? <Link to={"/demands"} className="secbutt bg-red-500 hover:bg-red-600 text-white rounded-md text-sm">Je donne mon sang</Link>
                            : <Link to={"/registre"} className="secbutt bg-red-500 hover:bg-red-600 text-white rounded-md text-sm">Je donne mon sang</Link>}
                        <Link to={"/request"} className="secbutt bg-transparent text-red-800 rounded-md text-lg">Besoin de sang</Link>
                    </div>
                </div>
                <div className="sec1_pic">
                    <img src={pic1} width={"600px"} height={"400px"} />
                </div>
            </div>
        </div>
    );
}

export default Section1;
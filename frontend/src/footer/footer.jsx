import { Link } from "react-router-dom";
import "./footer.css"
const Footer = () => {
    const ScrollToTop = () => {
        window.scrollTo(0, 0); // Scroll to the top when component mounts

        return null;
    };

    return (
        <div className="footer">
            <div className="logo">
                <i className="fa-solid fa-droplet text-red-500 text-3xl"></i>
                <Link to={"/"} onClick={() => ScrollToTop()} className="text-xl font-bold text-gray-800 ml-2">Crimson</Link>
            </div>
            <div className="links">
                <Link to={"/"} onClick={() => ScrollToTop()}>Accueil</Link>
                <Link to={"demands"} onClick={() => ScrollToTop()}>Demands</Link>
                <Link to={"a_propos"} onClick={() => ScrollToTop()}>A propos</Link>
            </div>
            <div className="about">
                <p>Ce site aide ceux qui ont besoin de sang à trouver des donneurs en toute simplicité près de chez eux.Merci de prier pour son propriétaire et tous ceux qui ont aidé à y parvenir avec miséricorde et pardon.</p>
                <p className="tiree">©2024 Crimson. All rights are reserved. Any deplucation is a violation of the applicable law. Taha Maouhoubi</p>

            </div>

        </div>
    );


}

export default Footer;
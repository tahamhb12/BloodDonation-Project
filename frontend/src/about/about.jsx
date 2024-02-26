import "./about.css"
import pic from "./whoAreWe.svg"
import pic2 from "./motivation.svg"
import pic3 from "./vision.svg"
const About = () => {


    return (
        <div className="aboutcomp">
            <div className="about1">
                <h1>Notre mission</h1>
                <p>Sauver des vies en Mroc en rendant la recherche de donneurs de sang aussi simple qu'une recherche sur Google.</p>
            </div>
            <div className="about2">
                <div className="content">
                    <h1>Qui sommes-nous</h1>
                    <p>Une equipe marocain qui cherche à faire une chose de simple et beau pour son pays et pour le peuple algerien en aidant les personnes qui ont besoin de sang à trouver des donneurs de sang rapidement, facilement et dans leur région.</p>
                </div>
                <div className="img">
                    <img src={pic} alt="" />
                </div>
            </div>
            <div className="about3">
                <div className="img">
                    <img src={pic2} alt="" />
                </div>
                <div className="content">
                    <h1>Notre motivation</h1>
                    <p>Combien de fois quelqu'un vous a-t-il appelé pour vous dire qu'il avait besoin de vous pour donner du sang ? Ou combien de publications avez-vous rencontrées sur Facebook où ils demande des donneurs de sang ? Je suis sûr que cela vous est arrivé plusieurs fois, tout comme cela m'est arrivé personnellement, au point que l'on peut dire que trouver des donneurs de sang est devenu difficile et un problème pour beaucoup de gens, et parfois cela peut être un problème de vie ou de mort , cette chose m'a toujours motivé à trouver une solution et j'espère que cette plateforme sera la solution.</p>
                </div>
            </div>
            <div className="about4">
                <div className="content">
                    <h1>Notre vision</h1>
                    <p>C'est simple, trouver du sang ne sera plus un problème au Maroc, vous avez besoin de donneurs de sang ? une recherche rapide sur cette platform vous fournira des milliers de donneur près de chez vous.</p>
                </div>
                <div className="img">
                    <img src={pic3} alt="" />
                </div>
            </div>
        </div>

    );
}

export default About;
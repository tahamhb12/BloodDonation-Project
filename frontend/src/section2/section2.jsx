import './section2.css'
import pic2 from "./bloodDonatinIllustration.svg"
const Section2 = () => {

    return ( 
        <div className="sec2container">
            <div className="section2">
                <div className='title'>
                    <h2>Les bienfaits du don de sang pour la santé</h2><br />
                    <p>Le don de sang améliore non seulement la vie du receveur, mais aide également le donneur à rester en bonne santé.</p>
                </div>
                <div className="benefits">
                    <img src={pic2} alt="" /><br />
                    <div className="benefparts">
                        <p><i class="fa-solid fa-check"></i>Réduisez les réserves de fer nocives</p>
                        <p><i class="fa-solid fa-check"></i>Réduisez le risque de cancer</p>
                        <p><i class="fa-solid fa-check"></i>Préserver la santé cardiovasculaire</p>
                        <p><i class="fa-solid fa-check"></i>Aide le foie à rester en bonne santé</p>
                        <p><i class="fa-solid fa-check"></i>Réduire le risque de crise cardiaque</p>
                        <p><i class="fa-solid fa-check"></i>Développer de nouvelles cellules sanguines</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Section2;
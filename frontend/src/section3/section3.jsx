import React, { useState } from 'react';
import './section3.css'; // Import CSS file for styling

function BloodDonationInfo() {
  const [eligible, setEligible] = useState(false);
  const [donorInfoVisible, setDonorInfoVisible] = useState(false);
  const [contraindicationsVisible, setContraindicationsVisible] = useState(false);
  const [nd, setnd] = useState(false);
  const [d, setd] = useState(false);
  const [dd, setdd] = useState(false);

  const toggleEligible = () => {
    setEligible(!eligible);
    if (donorInfoVisible) {
      setDonorInfoVisible(false);
    }
    if (contraindicationsVisible) {
      setContraindicationsVisible(false);
    }
  };

  const toggleDonorInfo = () => {
    setDonorInfoVisible(!donorInfoVisible);
    if (eligible) {
      setEligible(false);
    }
    if (contraindicationsVisible) {
      setContraindicationsVisible(false);
    }
  };

  const toggleContraindications = () => {
    setContraindicationsVisible(!contraindicationsVisible);
    if (eligible) {
      setEligible(false);
    }
    if (donorInfoVisible) {
      setDonorInfoVisible(false);
    }
  };


  const toggleEligiblee = () => {
    setnd(!nd);
    if (d) {
      setd(false);
    }
    if (dd) {
      setdd(false);
    }
  };

  const toggleDonorInfoo = () => {
    setd(!d);
    if (nd) {
      setnd(false);
    }
    if (dd) {
      setdd(false);
    }
  };

  const toggleContraindicationss = () => {
    setdd(!dd);
    if (nd) {
      setnd(false);
    }
    if (d) {
      setd(false);
    }
  };

  return (
    <div className='section3'>
    <h1 className='title'>Quelques informations utiles à propos du don de sang</h1>
    <div className="blood-donation-info">
      <div className="firstdiv">
      <h2 onClick={toggleEligible} style={eligible ? {color:'red'}: {color:'black'}}>Les conditions qui vous rendent éligible à donner du sang  {eligible ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>}</h2>
      <div className={`info-container ${eligible ? 'show' : ''}`}>
        <ul>
          <li>- Vous devez avoir au moins 17 ans</li>
          <li>- Vous devez peser au moins 50 kg.</li>
          <li>- Il faut que le pourcentage d'hémoglobine soit adapté au don.</li>
          <li>- Les femmes enceintes ne sont pas éligibles au don, attendez 6 semaines après l'accouchement.</li>
          <li>- Le donneur doit être exempt de certaines maladies qui empêchent le don.</li>
        </ul>
      </div><br />
      <h2 style={donorInfoVisible ? {color:'red'}: {color:'black'}} onClick={toggleDonorInfo}>Ce que le donneur est censé faire avant de faire un don {donorInfoVisible ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>}</h2>
      <div className={`info-container ${donorInfoVisible ? 'show' : ''}`}>
        <ul>
          <li>- Dormez suffisamment, au moins 5 heures.</li>
          <li>- Mangez un repas avant de faire un don.</li>
          <li>- Apportez une carte d'identité.</li>
        </ul>
      </div><br />
      <h2 style={contraindicationsVisible ? {color:'red'}: {color:'black'}} onClick={toggleContraindications}>Les Contre-indications au don {contraindicationsVisible ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>}</h2>
      <div className={`info-container ${contraindicationsVisible ? 'show' : ''}`}>
        <ul>
          <li>- Que la personne n'a fait aucun don au cours des trois derniers mois.</li>
          <li>- Que le donneur na subi aucune intervention chirurgicale récemment.</li>
          <li>- Le donneur souffre de l'une des maladies suivantes: Tension artérielle, diabète, paludisme au moins au cours des deux dernières années, insuffisance rénale, hypertrophie du foie, maladie thoracique, rhumatisme articulaire aigu, maladie thyroïdienne, hémorragie héréditaire et hémorragie.</li>
          <li>- Les personnes enceintes ne sont pas éligibles au don, attendez 6 semaines après l'accouchement.</li>
        </ul>
      </div>
    </div><br />
    <div className="seconddiv">
    <h2 style={nd ? {color:'red'}: {color:'black'}} onClick={toggleEligiblee}>Combien de temps dure le processus de don {nd ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>}</h2>
      <div className={`info-container ${nd ? 'show' : ''}`}>
        <ul>
          <li>En général, 20 minutes. La période à séparer entre chaque don et l'autre pour une même personne est de 3 mois car c'est la période idéale pour la reproduction des cellules sanguines.</li>
        </ul>
      </div><br />
      <h2 style={d ? {color:'red'}: {color:'black'}} onClick={toggleDonorInfoo}>Quelques recommandations pour après le processus de don {d ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>}</h2>
      <div className={`info-container ${d ? 'show' : ''}`}>
        <ul>
          <li>- Un repos de 10 min.</li>
          <li>- Ne pas faire d'efforts physiques excessifs dans les deux heures suivant le don.</li>
          <li>- Boire des liquides pour reconstituer le corps.</li>
        </ul>
      </div><br />
      <h2 style={dd ? {color:'red'}: {color:'black'}} onClick={toggleContraindicationss}>Pourquoi devrais-je être un donneur de sang? {dd ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>}</h2>
      <div className={`info-container ${dd ? 'show' : ''}`}>
        <ul>
          <li>- Toutes les trois secondes, une personne dans le monde a besoin d'une transfusion sanguine.</li>
          <li>- Votre un seul don peut sauver 3 personnes.</li>
          <li>- Le processus de don de sang restaure la vitalité et l'activité du corps grâce au renouvellement des cellules sanguines.</li>
        </ul>
      </div>
    </div>
    </div>
    </div>
  );
}

export default BloodDonationInfo;

import './about.scss'
import '../../styles/main.scss'
import Banner from '../../components/banner'
import ImgBanner from '../../assets/img_banner_about_desktop.webp'
import Collapse from '../../components/collapse'

function About() {
  const textFiabilite =
    'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
  const textRespect =
    'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
  const textService =
    'La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.'
  const textSecurite =
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établie par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."

  return (
    <main className="about">
      <Banner imageSrc={ImgBanner} backgroundOpacity={0.3} textMobile={''} />
      <div className="about__collapses">
        <Collapse
          title="Fiabilité"
          isText={true}
          isFullWidth={true}
          text={textFiabilite}
        />
        <Collapse
          title="Respect"
          isText={true}
          isFullWidth={true}
          text={textRespect}
        />
        <Collapse
          title="Service"
          isText={true}
          isFullWidth={true}
          text={textService}
        />
        <Collapse
          title="Sécurité"
          isText={true}
          isFullWidth={true}
          text={textSecurite}
        />
      </div>
    </main>
  )
}

export default About

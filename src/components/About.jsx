

/**
 * About component.
 */
function About() {
    return (
        <section className="section about-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-2 mx-auto ">
                <img className="profile-img" src="/src/assets/images/mrs-capuche-profil.jpg" alt="" />
              </div>
              <div className="col-lg-6 mx-auto text-center">
                
                <p className="font-secondary paragraph-md text-dark">
                Lead développeuse à la Mine de Fer depuis un an, je travaille sur la création et le maintenance d'un site eCommerce Prestashop sur la stratégie, l'opérationnel, le SEO, le développement de module et amélioration de l'interface pour les utilisateurs.
                J'ai auparavent pris en charge de la création et de la maintenance de sites Wordpress pour des clients.
                </p>
                <br />
                <p className="font-secondary paragraph-md text-dark">
                Diplomée OpenClassrooms, je me suis spécialisée sur le développement d'application React et Javascript ce qui me permet de travailler sur des projets d'application web ou de site vitrine sans CMS, idéal pour les projets sur mesure et/ou intéractif. 
                </p>
                <br />
                <p className="font-secondary paragraph-md text-dark">
                Avant de me spécialiser dans le web, j'ai travaillé en tant que chargée de coordination et de production, ce qui m'a dotée de compétences en gestion de projet et en compréhension globale des besoins d'une entreprise. Je peux m'adapter aux projets dans leur globalité, en combinant une approche technique solide à une compréhension stratégique.
                </p>
              </div>
            </div>
          </div>
        </section>
      );
}

export default About;

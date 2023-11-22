//create a card function and a cartcotainer 
import PropTypes from 'prop-types';
import { Card, Badge } from '@nextui-org/react';

function PortfolioCard({ title, img, description, link, technology }) {

  return (
    <Card className="col-lg-6 col-sm-12 mb-1 mb-lg-0" style={  {
      backgroundImage: `/assets/images/${img}.jpg`,
     } } 
    >

      <a href={link} target='blank'>
      <img src={`/assets/images/${img}.jpg`} alt="" />
        <div className="card-footer bg-white">
          <h4 className="card-title">{title}</h4>
          <p className="card-description">{description}</p>
          <Badge className="badge badge-pill badge-primary">{technology}</Badge>
        </div>
   
      </a>
      
    </Card>
  );
}

PortfolioCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  technology: PropTypes.string.isRequired,
};


function Portfolio() {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-title">Projets</h2>
          </div>
          {/* Use PortfolioCard component to render skill cards */}
          
          <PortfolioCard title="Léo Lopez, thérapie brève" img='lealopez' description='Site vitrine, Création des maquettes, développement du site, gestion de la mise en ligne' link='https://lealopeztherapiebreve.com/' technology='Bootstrap'/>
          <PortfolioCard title="Ely Beth" img='ElyBeth' description='Single page, création des maquettes, développement, hébergement' link='https://www.elybeth.com/' technology='Html, Css, JS'/>
         
        </div>
      </div>
    </section>
  );
}



export default Portfolio;

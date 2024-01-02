import { Link } from 'react-router-dom';

import '../css/home.css';
const Home = () => {
  return (
    <div className="my-cont">
      <section id="hero">
        <h1>Ciao mondo!</h1>
        <p>
          {' '}
          Benvenuti nel mio angolo virtuale di caos creativo, <br></br>dove il
          buon senso fa spesso una pausa caffè e l'arguzia è l'unica moneta
          accettata.<br></br>
        </p>

        {/* Usare Link per navigare */}
        <Link to="./components/About" className="action_btn">
          Entra
        </Link>
      </section>
    </div>
  );
};

export default Home;

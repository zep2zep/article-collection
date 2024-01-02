import Card from '../components/Card';
import { tips } from '../database/tips';
function Cartelle() {
  return (
    <>
      <div className="container" style={{ width: '850px' }}>
        {tips.map((el) => (
          <Card key={el.id} {...el} />
        ))}
      </div>
    </>
  );
}

export default Cartelle;

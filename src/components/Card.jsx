import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import '../css/card.css';
const Card = ({ sintax, title, code }) => {
  return (
    <div className="mt-2 mb-2">
      <div className="card h-100">
        <div
          className="container-fluid d-flex justify-content-between mt-1"
          style={{ width: '500px' }}
        >
          <h5 className="card-title">Sintax : {sintax}</h5>
          <h5 className="card-title">{title}</h5>
        </div>
        <SyntaxHighlighter language="jsx" style={materialDark}>
          {code}
        </SyntaxHighlighter>
        <hr className="card-underline" />
      </div>
    </div>
  );
};
export default Card;

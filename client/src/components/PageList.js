import { Link } from 'react-router-dom';
import '../styles/Pages.css'

const PageList = ({ pages }) => {
  return (
    <div className="page-container">
      {pages.map(page => (
        <div className="page-tile" key={page._id} >
          <Link to={`/pages/${page._id}`}>
            <h2>{ page.title }</h2>
            <p>{ page.idea }</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default PageList;
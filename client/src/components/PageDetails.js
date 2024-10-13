import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import '../styles/Pages.css'

const PageDetails = () => {
  const { id } = useParams();
  const { data: page, error, isPending } = useFetch(process.env.REACT_APP_BACKEND_URI + '/api/pages/' + id);
  const navigate = useNavigate();

  const handleClick = () => {
    fetch(process.env.REACT_APP_BACKEND_URI + '/api/pages/' + page.id, {
      method: 'DELETE'
    }).then(() => {
      navigate('/');
    }) 
  }

  return (
    <div className="page-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { page && (
        <article>
          <h2>{ page.title }</h2>
          <p>{ page.idea }</p>
          <div>{ page.body }</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
}
 
export default PageDetails;
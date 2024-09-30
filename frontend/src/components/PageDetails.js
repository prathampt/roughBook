import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const PageDetails = () => {
  const { id } = useParams();
  const { data: page, error, isPending } = useFetch('http://localhost:8000/pages/' + id);
  const navigate = useNavigate();

  const handleClick = () => {
    fetch('http://localhost:8000/pages/' + page.id, {
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
          <p>{ page.author }</p>
          <div>{ page.body }</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
}
 
export default PageDetails;
// import useFetch from "../hooks/useFetch";
import PageList from "./PageList";

const Home = ({error, isPending, data: pages}) => {
    // const { error, isPending, data: pages } = useFetch('http://localhost:8000/pages')

    return (
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { pages && <PageList pages={pages} /> }
        </div>
    );
}
 
export default Home;
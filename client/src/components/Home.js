import PageList from "./PageList";

const Home = ({error, isPending, data: pages}) => {

    return (
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { pages && <PageList pages={pages} /> }
        </div>
    );
}
 
export default Home;
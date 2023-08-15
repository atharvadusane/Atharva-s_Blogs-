import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Notfound=()=>{
    return (
        <div className="not-found">
            <h1> Sorry Page Not Found :( </h1>
            <Link to="/"><button><h2>Go back to the homepage</h2> </button></Link> 
        </div>
    );
}
export default Notfound
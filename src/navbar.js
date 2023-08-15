import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar=()=>{
    return(
        <nav className="navbar">
            <h1>Atharva's Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    // backgroundColor: "#f1356d",
                    // color: "white",
                    // borderRadius:"8px"
                }}>Create</Link>
            </div>
        </nav>
    );
}

export default Navbar;
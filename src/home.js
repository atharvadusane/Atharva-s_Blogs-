import Bloglist from "./bloglist";
import useFetch from "./usefetch";

// const Home = () => {
    
//     // const handleClick2=(e)=>{
//     //     console.log("atharva",e)
//     // }
//     // const handleClick=(name,e)=>{
//     //     console.log("hello ninjas "+name, e);
//     // }

//     // USESTATE HOOKS !!!
//     // these variables are not reactive to the changes made in the handleclick function, and are not reflected in the templatept
//     // const name="atharva"
//     // const age=34
//     // this is a reactive entity created using the useState hook which would be reflected in the template
//     // name-> value ; setName-> function used to change the value 
//     const [Name, setName] = useState('atharva')
//     const [age, setAge] = useState(18)
//     const handleclick = () => {
//         // name ="dusane"
//         // age=29
//         // console.log(name + age)
//         setName('dusane')
//         setAge(19)
//     }
//     return (
//         <div className="home">
//             <h1>Homepage</h1>
//             {/* <button onClick={(e)=>{handleClick('atharva',e)}}>
//             Click me
//         </button>
//         <button onClick={handleClick2}>
//             button2 
//         </button> */}
//             <h1>{Name} is {age} years old</h1>
//             <button onClick={handleclick}>
//                 click me
//             </button>
//         </div>
//     );
// }

// map method cycles throughs an array and can do something with each item of an array 
// outputing the list in react 
// in template, you can write js using {js inside...}
// props are a way to pass data from the parent component to the child component


const Home = () => {
    //js entered in this area, if to be entered in the template area us-> {// js inside}
    // this is the hard coded data entered as the Blogs (uncomment this block of code to see the delay in setting the fetched data and the hard coded data (also comment the below block of code))
    // const [Blogs, setBlogs] = useState([
    //     { title: "atharva_first", body: "lomen3", author: "atharva", id: 1 },
    //     { title: "atharva_second", body: "lomen34", author: "khushhi", id: 2 },
    //     { title: "atharva_third", body: "lomen33", author: "atharva", id: 3 },
    // ]);
    // here initializing Blogs with null and then using setBlogs to set the fetched data as Blogs

    // now this data is stored in the useFetch custom hook
    // const [Blogs, setBlogs]=useState(null)
    // const [pending, setPending]=useState(true)
    // const [error, setError]=useState(null)

    // function to delete a blog-preview, its passed as props to bloglist.js  
    // const handleDelete=(id)=>{
    //     // filters out the id which is passed to the handleDelete function
    //     const newBlogs=Blogs.filter((blog)=> blog.id !== id);
    //     setBlogs(newBlogs)
    // }

    // const [name, setName]=useState('dusane')
    // useEffect rus the block of code after each render(initial render + re-render whenever the state changes)
    // set timeout is used to delay the function by x ms, here it is used only for demonstration purpose of loading sign
    

    // useEffect used to be here befor forming useFetch hook (CUSTOM HOOK)


    // [] -> using this would run the useEffect only the FIRST time the page is refreshed
    // [name]-> dependency array
    // useEffect dependencies: here the useEfect would run again only on re-rendering of the name component

    // data is captured from the useFetch hook but here is just named as Blogs 
    const {data: Blogs, pending, error}=useFetch('http://localhost:8000/blogs')
    return (
        <div className="home">
            {error && <h1>{error}</h1>}
            {pending && <h3>Loading..</h3>}
            {Blogs && <Bloglist Blogs={Blogs} title="All Blogs"/>}
            {/* <Bloglist Blogs={Blogs.filter((blog)=> blog.name==="atharva")} title="Atharva's Blogs" /> */}
            {/* <button onClick={()=>setName('atharva')}>
                change name 
            </button>
            <p>
                {name}
            </p> */}
            {/*link to fetch API-> http://localhost:8000/blogs 
            end points -> 
            /blogs      :GET   :Fetch all blogs
            /blogs/{id} :GET   :Fetch a single blog
            /blogs      :POST  :Add a new blog
            /blogs/{id} :POST  :Delete a blog
            */}
        </div>
    );

}
export default Home;

// conditional templateing  

// requires 2 terminals for: 
// npm start
// npx json-server --watch data/db.json --port 8000
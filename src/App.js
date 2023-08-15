import Navbar from './navbar';
import Home from './home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Create from './create';
import BlogDetails from './blogdetails';
import Notfound from './notfound';

function App() {
  // your JS goes here 
  // const title='You are in the title noww'
  // const likes= 40
  // const linkGoogle="https://www.google.com/"
  // ERROR  Objects and boolean are not valid as a React child
  // const booleanvalue=true
  // const objectsReact={name: 'yashi', age: 13}

  return ( 
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home /> 
            </ Route>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails/>
            </Route>
            <Route path="*">
              <Notfound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

import Navbar from './Navbar'
import Home from './Home'
import Playground from './Playground'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Create from './Create'
import BlogDetails from './BlogDetails'
import NotFound from  './NotFound'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home></Home> 
            </Route>
            <Route exact path="/playground">
              <Playground></Playground> 
            </Route>
            <Route exact path="/create">
              <Create></Create> 
            </Route>
            <Route exact path="/blogs/:id">
              <BlogDetails/>
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

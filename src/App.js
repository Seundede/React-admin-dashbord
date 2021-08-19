import "./App.css";
import Header from "./components/Header";
import Home from "./components/Pages/Home";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import UserList from "./components/Pages/UserList";
import User from "./components/Pages/User";
import NewUser from "./components/Pages/NewUser";
function App() {
  return (
    <Router>
      <Header />
      <div className="app__container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newuser">
           <NewUser />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Index from "./components/index/index";
import AboutPage from "./components/index/aboutPage";
import GalleryPage from "./components/index/galleryPage";
import ServicePage from "./components/index/servicePage";
import ContactPage from "./components/index/contactPage";
import Login from "./components/system/login";
import Register from "./components/system/register";
import Logout from "./components/logout";
import Myuser from "./components/system/myuser/myuser";
import { getCurrentUser } from "./services/userServices";
import Users from "./components/system/admin/users/users";
import Footer from "./components/footer";
import Newcard from "./components/system/card/newcard";
import Cards from "./components/system/card/cards";
import Editcard from "./components/system/card/editcard";
import Nav from "./components/nav";
import Todos from "./components/system/admin/todo/todos";
import Favorite from "./components/system/admin/todo/favorite";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Clientcard from "./components/system/card/clientcard";
import Addtodo from "./components/system/admin/todo/addtodo";

class App extends Component {
  state = {};
  componentDidMount() {
    const user = getCurrentUser();
    this.setState({ user });
  }

  render() {
    let user = this.state.user;

    return (
      <React.Fragment>
        <header>
          <Nav user={user} />
          <ToastContainer />
        </header>
        <main style={{ minHeight: "85vh" }}>
          <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/about" exact component={AboutPage} />
            <Route path="/gallery" exact component={GalleryPage} />
            <Route path="/service" exact component={ServicePage} />
            <Route path="/contact" exact component={ContactPage} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/logout" exact component={Logout} />
            <Route path="/myuser" exact component={Myuser} />
            <Route path="/users" exact component={Users} />
            <Route path="/newcard" exact component={Newcard} />
            <Route path="/cards" exact component={Cards} />
            <Route path="/todos" exact component={Todos} />
            <Route path="/favorite" exact component={Favorite} />
            <Route path="/newtodo" exact component={Addtodo} />
            <Route path="/editcard/:id" component={Editcard} />
            <Route path="/clientcard/:id" component={Clientcard} />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </React.Fragment>
    );
  }
}

export default App;

import "./App.css";
import "./components/Navbar.jsx";
import NavBar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/Sidebar.jsx";
import List from "./components/List.jsx";
function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Footer></Footer>
      <Sidebar></Sidebar>
      <List />
    </div>
  );
}

export default App;

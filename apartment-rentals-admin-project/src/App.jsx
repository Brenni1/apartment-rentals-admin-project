import "./App.css";
import "./components/Navbar.jsx";
import NavBar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/Sidebar.jsx";
function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Footer></Footer>
      <Sidebar></Sidebar>
    </div>
  );
}

export default App;

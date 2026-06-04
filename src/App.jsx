import Homepage from "./components/Homepage.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Homepage path="/home" />
    </>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
// import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About"/>
      <div className="container my-3">
        {/* <TextForm heading="Enter The Text to analyze"/> */}
        <About/>
      </div>
    </>
  );
}

export default App;
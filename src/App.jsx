import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <main>
          <Home />
        </main>         
        <Footer />
      </div>
    </>
  );
}

export default App;

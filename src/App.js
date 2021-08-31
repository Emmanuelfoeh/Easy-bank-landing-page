import Article from "./Components/Article";
import Header from "./Components/header";
import Intro from "./Components/Intro";
import Service from "./Components/Service";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Service />
      <Article />
      <Footer />
    </div>
  );
}

export default App;

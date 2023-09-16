import "./App.css";
import Courses from "./components/Courses/Courses";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <div className="container mx-auto py-20 lg:py-40 z-10 relative px-3 lg:px-0">
        <Courses />
      </div>
      <Footer />
    </div>
  );
}

export default App;

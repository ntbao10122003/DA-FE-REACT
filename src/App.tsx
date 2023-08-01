import "react-loading-skeleton/dist/skeleton.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";


function App() {
    return (
        <div>
           <Header/>
           <HomePage/>
           <Footer/>
        </div>
    );
}

export default App;

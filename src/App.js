import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyFooter from "./components/MyFooter";
import MyNavbar from "./components/MyNavbar";

function App() {
    return (
        <section>
            <div>
                <MyNavbar payoff="StriveBooks" />
            </div>
            <div>
                <MyFooter copyright="copyright infomation does here" />
            </div>
        </section>
    );
}

export default App;

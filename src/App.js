import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyFooter from "./components/MyFooter";
import MyNavbar from "./components/MyNavbar";
import MyLatestRelease from "./components/MyLatestRelease";
import MyJumbotron from "./components/MyJumbotron";

function App() {
    return (
        <section>
            <MyNavbar payoff="StriveBooks" />
            <MyJumbotron />
            <MyLatestRelease />
            <MyFooter copyright="copyright infomation does here" />
        </section>
    );
}

export default App;

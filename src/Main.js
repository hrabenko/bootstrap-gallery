import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import Feedback from "./pages/Feedback";

function Main(props) {
    if (props.page === 'home') {
        return <HomePage />
    } else if (props.page === 'aboutme') {
        return <AboutMe />
    } else {
        return <Feedback />
    }
}

export default Main;
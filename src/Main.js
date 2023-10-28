import HomePage from "./HomePage";
import AboutMe from "./AboutMe";
import Feedback from "./Feedback";

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
import Header from "./Header";
import Main from "./Main";
import {useState} from "react";

function App() {
    const [page, setPage] = useState('home');

    return (
        <>
            <Header page={page} setPage={setPage}/>
            <Main page={page}/>
        </>
    );
}

export default App;

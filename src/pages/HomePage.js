import Card from "../components/Card";

function HomePage() {
    return (
        <div style={{marginTop: 100+'px'}}>
            <div className="container mt-5">
                <div className="row mb-5">
                    <div className="col col-3 ">
                        <Card />
                    </div>
                    <div className="col col-3 ">
                        <Card />
                    </div>
                    <div className="col col-3 ">
                        <Card />
                    </div>
                    <div className="col col-3 ">
                        <Card />
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col col-3 ">
                        <Card />
                    </div>
                    <div className="col col-3 ">
                        <Card />
                    </div>
                    <div className="col col-3 ">
                        <Card />
                    </div>
                    <div className="col col-3 ">
                        <Card />
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col col-3 ">
                        <Card />
                    </div>
                    <div className="col col-3 ">
                        <Card />
                    </div>
                    <div className="col col-3 ">
                        <Card />
                    </div>
                    <div className="col col-3 ">
                        <Card />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
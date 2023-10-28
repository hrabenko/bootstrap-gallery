function AboutMe() {
    return (
        <div className="d-flex justify-content-center" style={{marginTop: 100+'px'}}>
            <div className="row align-items-center">
                <div className="col">
                    <img src="http://via.placeholder.com/500x400"  alt="photo" />
                </div>
                <div className="col">
                    <h1>Full Name</h1>
                    <h3>Photographer</h3>
                    <p style={{width: 400+'px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
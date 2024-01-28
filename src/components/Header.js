function Header (props) {
    return (
        <nav className="navbar navbar-light bg-light navbar-expand-lg fixed-top p-2">
            <a href="#" className="navbar-brand">Photo Gallery</a>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
                <ul className="navbar-nav nav-underline">
                    <li className="navbar-item " onClick={(e) => props.setPage("home")}>
                        <a href="#" className="nav-link">Homepage</a>
                    </li>
                    <li className="navbar-item" onClick={(e) => props.setPage("aboutme")}>
                        <a href="#" className="nav-link">About Me</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#" className="nav-link" onClick={(e) => props.setPage("feedback")}>Feedback</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;
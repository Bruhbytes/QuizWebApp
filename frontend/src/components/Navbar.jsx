const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" >
            <div className="container-fluid">
                <a className="navbar-brand active" href="/">Quizzy</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">                        
                        <a className="nav-link" href="/create">Create</a>
                        <a className="nav-link" href="/about">About</a>                        
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Navbar;
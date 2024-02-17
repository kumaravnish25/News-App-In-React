

function Navbar(props) {
 console.log(props.setCategory);
  return (

    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" >
            <span className="badge bg-light text-dark fs-4" style={{cursor:'pointer'}} onClick={()=>props.setCategory("general")}>MSK News</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <div className="nav-link" style={{cursor:'pointer'}} onClick={()=>props.setCategory("sports")}>
                  Sports
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" style={{cursor:'pointer'}} onClick={()=>props.setCategory("entertainment")}>
                  Entertainment
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" style={{cursor:'pointer'}} onClick={()=>props.setCategory("technology")}>
                Technology
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" style={{cursor:'pointer'}} onClick={()=>props.setCategory("business")}>
                Business
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" style={{cursor:'pointer'}} onClick={()=>props.setCategory("science")}>
                Science
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

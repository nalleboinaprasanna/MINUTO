const Navbar = ({ setCategory }) => {
  const categories = [
    { name: "General", key: "general" },
    { name: "Business", key: "business" },
    { name: "Entertainment", key: "entertainment" },
    { name: "Health", key: "health" },
    { name: "Science", key: "science" },
    { name: "Sports", key: "sports" },
    { name: "Technology", key: "technology" }
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-5">MINUTO</span>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {categories.map((cat) => (
              <li className="nav-item" key={cat.key}>
                <button
                  className="nav-link btn btn-link text-white"
                  onClick={() => setCategory(cat.key)}
                  style={{ textTransform: "capitalize" }}
                >
                  {cat.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



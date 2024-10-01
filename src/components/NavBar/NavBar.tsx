import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

interface Category {
    name: string;
    slug: string;
    url: string;
}
interface CategoriesProps {
    categories: Category[];
}

function NavBar({ categories }: CategoriesProps) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to={"/"} className="navbar-brand">
                    GamerStart
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to={"/"}>
                                Inicio
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Categorias
                            </a>
                            <ul className="dropdown-menu">
                                {categories.map((category, index) => {
                                    return (
                                        <li key={index}>
                                            <Link
                                                className="dropdown-item"
                                                to={`/category/${category.slug}`}
                                            >
                                                <p>{category.name}</p>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </li>
                    </ul>
                    <CartWidget></CartWidget>
                </div>
            </div>
        </nav>
    );
}
export default NavBar;

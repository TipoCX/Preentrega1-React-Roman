import "./ItemContainer.css";
import { Product } from "../ItemListContainer/ItemListContainer";
import { Link } from "react-router-dom";

interface ItemProps {
    item: Product;
}
function ItemContaier({ item }: ItemProps) {
    return (
        <Link to={`/product/${item.id}`}>
            <div className="itemCard">
                <img className="itemImage" src={item.thumbnail} alt="img" />
                <h2>{item.title}</h2>
            </div>
        </Link>
    );
}
export default ItemContaier;

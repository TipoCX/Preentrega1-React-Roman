import ItemContaier from "../ItemContainer/ItemContainer";
import "./ItemListContainer.css";

export interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    thumbnail: string;
}
interface ProductsProps {
    products: Product[];
}

function ItemListContaier({ products }: ProductsProps) {
    return (
        <div id="ItemList">
            {products.map((item) => {
                return <ItemContaier item={item} key={item.id} />;
            })}
        </div>
    );
}
export default ItemListContaier;

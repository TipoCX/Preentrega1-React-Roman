import ItemListContaier from "../components/ItemListContainer/ItemListContainer";
import { useEffect, useState } from "react";
import { getAllProducts } from "../services/products.service";
function Home() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getAllProducts().then((res) => {
            setProducts(res.data.products);
            console.log(res.data.products);
        });
    }, []);

    return <ItemListContaier products={products} />;
}

export default Home;

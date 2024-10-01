import ItemListContaier from "../components/ItemListContainer/ItemListContainer";
import { useEffect, useState } from "react";
import { getProductsByCategory } from "../services/products.service";
import { useParams } from "react-router";

function CategoryList() {
    const [products, setProducts] = useState([]);
    const { slug } = useParams();
    useEffect(() => {
        getProductsByCategory(slug!).then((res) => {
            setProducts(res.data.products);
            console.log(res.data.products);
        });
    }, [slug]);

    return <ItemListContaier products={products} />;
}

export default CategoryList;

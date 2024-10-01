import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProductByID } from "../../services/products.service";
import { Product } from "../../components/ItemListContainer/ItemListContainer";
import ProductDetailContainer from "../../components/ProductDetailContainer/ProductDetailContainer";

function ProductDetail() {
    const { id } = useParams();

    const [product, setProduct] = useState<Product>({
        id: 1,
        title: "a",
        description: "ab",
        category: "null",
        price: 1,
        thumbnail: "aab",
    });
    useEffect(() => {
        getProductByID(parseInt(id!)).then((res) => {
            setProduct(res.data);
        });
    }, []);

    return <ProductDetailContainer product={product!} />;
}

export default ProductDetail;

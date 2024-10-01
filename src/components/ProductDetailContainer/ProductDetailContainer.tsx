import React from "react";
import { Product } from "../ItemListContainer/ItemListContainer";

interface DetailProps {
    product: Product;
}

function ProductDetailContainer({ product }: DetailProps) {
    return <div>{product.title}</div>;
}

export default ProductDetailContainer;

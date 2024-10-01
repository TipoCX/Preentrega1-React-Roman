import { useParams } from "react-router";

function ProductDetail() {
    const { id } = useParams();

    return <div>{id}</div>;
}

export default ProductDetail;

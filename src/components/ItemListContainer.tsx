interface ItemListContaierProps {
    greeting: string;
}

function ItemListContaier({ greeting }: ItemListContaierProps) {
    return <h2>{greeting}</h2>;
}
export default ItemListContaier;

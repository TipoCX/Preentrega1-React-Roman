interface ItemListContaierProps {
    children: string;
}

function ItemListContaier({ children }: ItemListContaierProps) {
    return <h2>{children}</h2>;
}
export default ItemListContaier;

import axios from "axios";

export async function getAllProducts() {
    return await axios.get('https://dummyjson.com/products');
}

export async function getProductByID(id: number) {
    return await axios.get(`https://dummyjson.com/products/${id}`)
}

export async function getCategories(){
    return await axios.get('https://dummyjson.com/products/categories');
}

export async function getProductsByCategory(slug: string) {
    return await axios.get(`https://dummyjson.com/products/category/${slug}`)
}

import http from '../http-common';

const getAll = () => {
    return http.get(`/products`)
}

const getById = (id) => {
    return http.get(`/products/${id}`)
}

const fetchCategories = () => {
    return http.get(`/products/categories`);
}

const fetchByCategory = (category) => {
    return http.get(`/products/category/${category}`)
}

const productService = {
    getAll,
    getById,
    fetchCategories,
    fetchByCategory
}

export default productService;
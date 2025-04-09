import { getDataFromNotion, getProducts } from '$lib/helpers/helper'
export const prerender = false
export const load = async () => {
    const PRODUCTS = await getDataFromNotion()
    return {
        PRODUCTS
    }
}
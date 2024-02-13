import client from "../../axios";
import { ListingCategoryInterface } from "../../interfaces"
export const fetchListingCategories = async () => {
    try {
        const { data } = await client.get('service/fetch-listing');
        return Promise.resolve(data)
    } catch (error) {
        return Promise.reject(error)
    }
}

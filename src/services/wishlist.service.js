import Wishlist from '../models/wishlist.model';

export const getWishlistDetails = async (_id)=>{
    const data = await Wishlist.findOne({wishlistBy:_id});
    return data;
}
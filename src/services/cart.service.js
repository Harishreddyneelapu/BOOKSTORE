import Cart from '../models/cart.model';

export const getCartDetails = async (_id)=>{
    const data = await Cart.findById(_id);
    return data;
}

import HttpStatus from 'http-status-codes';
import * as CartService from '../services/cart.service';


export const getCartDetails = async (req, res, next) => {
    try {
        const data = await CartService.getCartDetails(res.userId);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            success:true,
            message: 'Cart fetched successfully',
            data: data
          });
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            success:false,
            message: `${error}`
        });
    }
}
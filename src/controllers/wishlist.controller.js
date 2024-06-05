import HttpStatus from 'http-status-codes';
import * as WishlistService from '../services/wishlist.service';


export const getWishlistDetails = async (req, res, next) => {
    try {
        const data = await WishlistService.getWishlistDetails(res.userId);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            success:true,
            message: 'Wishlist fetched successfully',
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
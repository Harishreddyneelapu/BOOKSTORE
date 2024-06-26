import HttpStatus from 'http-status-codes';
import * as CustomerService from '../services/customerDetails.service';

export const getCustomerDetails = async (req, res) => {
  try {
    const data = await CustomerService.getCustomerDetails(req.userId);
    res.status(HttpStatus.OK).json({
      success: true,
      message: 'Customer details fetched successfully',
      data: data
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      success: false,
      message: `${error}`
    });
  }
};

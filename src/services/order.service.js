import Cart from '../models/cart.model';
import Order from '../models/order.model';

export const getOrderDetails = async (_id) => {
  try {
    const cart = await Cart.findOne({ cartBy: _id });

    let order = await Order.findOne({ orderBy: _id });

    if (!order) {
      order = await Order.create({
        orderBy: _id,
        books: cart.books,
        isPurchased: true
      });
    } else {
      order.books.push(...cart.books);
      order.isPurchased = true;
    }

    await order.save();
    cart.books = [];
    cart.cartTotal = 0;
    await cart.save();

    return order;
  } catch (error) {
    console.error('Error getting order details:', error);
    throw error;
  }
};

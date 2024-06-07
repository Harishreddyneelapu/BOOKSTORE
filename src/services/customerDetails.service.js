import CustomerDetails from '../models/customerDetails.model'
export const getCustomerDetails = async (_id) => {
    try {
        const data = await CustomerDetails.findOne({ customerId: _id });
        if (!data) {
            data = await CustomerDetails.create({
                customerId: _id,
                fullName: "Harish Reddy",
                mobileNumber: "23456789056",
                address: [
                    {
                        type: 'home',
                        addressLine: 'Default Home Address Line',
                        city: 'Default City',
                        state: 'Default State',
                        postalCode: '000000',
                        country: 'Default Country'
                    },
                    {
                        type: 'office',
                        addressLine: 'Default Office Address Line',
                        city: 'Default City',
                        state: 'Default State',
                        postalCode: '000000',
                        country: 'Default Country'
                    },
                    {
                        type: 'other',
                        addressLine: 'Default Other Address Line',
                        city: 'Default City',
                        state: 'Default State',
                        postalCode: '000000',
                        country: 'Default Country'
                    }
                ]
            });
        }
        return data;
    } catch (error) {
        console.error('Error getting customer details:', error);
        throw error;
    }
}
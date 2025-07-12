import { cache } from 'react';
import { getCustomers } from './getCustomers';
import { Customer, CustomerEnum } from '@justdiego/types';

export const getCustomersByType = cache((type: CustomerEnum): Customer[] => {
    const customers = getCustomers();
    return customers.filter((customer: Customer) => customer.type === type);
})

export const getCompanies = cache((): Customer[] => {
    return getCustomersByType(CustomerEnum.Company);
})

export const getUsers = cache((): Customer[] => {
    return getCustomersByType(CustomerEnum.User);
})

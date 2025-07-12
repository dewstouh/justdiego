import { cache } from 'react';
import { getCustomers } from './getCustomers';
import { Customer } from '@justdiego/types';

export const getCustomer = cache((id: string): Customer | undefined => {
    const customers = getCustomers();
    const customer = customers.find((c: Customer) => c.id === id);
    return customer;
})

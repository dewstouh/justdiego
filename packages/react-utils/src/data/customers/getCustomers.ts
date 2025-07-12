import { cache } from 'react';
import { customersMock } from '@justdiego/mocks';
import { Customer } from '@justdiego/types';

export const getCustomers = cache((): Customer[] => {
    return customersMock;
})

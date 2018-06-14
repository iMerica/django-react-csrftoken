import { expect } from 'chai';
import DjangoCSRFToken from '../';

const {describe, it} = global;

describe('DjangoCSRFToken', () => {
  it('Inherits from React Component correctly', () => {
    const result = DjangoCSRFToken;
    expect(Object.getPrototypeOf(result).name).to.be.equal('Component');
  });
});

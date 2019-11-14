import { convertatron } from './../src/business.js';

describe('convertatron', () => {

  test('should interpret input as a number', () => {
    expect(convertatron(3)).toEqual('III');
  });
  test('should interpret input as a number', () => {
    expect(convertatron(4)).toEqual('IV');
  });
  test('should intrepet non number input as NaN', () => {
    expect(convertatron("d")).toEqual("Enter a number between 1 and 3,999, please and thanks.");
  });
});

import { TaxiValuation } from '../taxiValuation';
import main from '..';

test('should ', () => {
  expect(1 + 1).toBe(2);
});

describe('TaxiValuationTest', () => {
  it('should be 6 when input distance 1 km and waite 0 minute', () => {
    expect(new TaxiValuation(1, 0).getValuation()).toBe(6);
    expect(new TaxiValuation(3, 0).getValuation()).toBe(7);
    expect(new TaxiValuation(10, 0).getValuation()).toBe(13);
    expect(new TaxiValuation(2, 3).getValuation()).toBe(7);
  });
});

describe('test index function main', () => {
  it('should get console log', () => {
    const expected = '收费6元\n收费7元\n收费13元\n收费7元\n';
    expect(main()).toEqual(expected);
  });
});

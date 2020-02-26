import { TaxiValuation } from '../taxiValuation';

test('should ', () => {
  expect(1 + 1).toBe(2);
});


describe('TaxiValuationTest',() => {

  it('should be 6 when input distance 1 km and waite 0 minute given starting price', function () {
    const app = new TaxiValuation(1, 0)
    expect(app.getValuation()).toBe(6)
  });

})

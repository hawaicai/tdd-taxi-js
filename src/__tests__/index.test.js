import { TaxiValuation } from '../taxiValuation';

test('should ', () => {
  expect(1 + 1).toBe(2);
});


describe('TaxiValuationTest',() => {

  it('should be 6 when input distance 1 km and waite 0 minute given starting price', function () {
    const app = new TaxiValuation(1, 0)
    expect(app.getValuation()).toBe(6)
  });
  it('should be 7 when input distance 3 km and waite 0 minute given starting price', function () {
    const app = new TaxiValuation(3, 0)
    expect(app.getValuation()).toBe(7)
  });
  it('should be 13 when input distance 10 km and waite 0 minute given starting price', function () {
    const app = new TaxiValuation(10, 0)
    expect(app.getValuation()).toBe(13)
  });

})

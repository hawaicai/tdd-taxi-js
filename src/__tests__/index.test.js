import { TaxiValuation } from '../taxiValuation';
import { ShowTaxiValuation } from '../showTaxiValuation';

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
  it('should be 7 when input distance 2 km and waite 3 minute given starting price', function () {
    const app = new TaxiValuation(2, 3)
    expect(app.getValuation()).toBe(7)
  });

})


describe('test read txt file', () => {
  it('should get test data', function () {
    var expected = '收费6元\n收费7元\n收费13元\n收费7元\n'
    expect(ShowTaxiValuation.showPrice('.\\src\\fixtures\\testdata.txt')).toEqual(expected)
  });
})

export class TaxiValuation {
  constructor(distance, waiteTime) {
    this.distance = distance;
    this.waiteTime = waiteTime;

  }

  getValuation() {
    if (this.distance <= 2)
      return 6;
    if (this.distance <= 8)
    {
      var valuation = 6 + (this.distance - 2) * 0.8
      return parseInt(valuation + 0.5)
    }
    var valuation = 6 + 4.8 + (this.distance - 8) * 0.8 * 1.5
    return parseInt(valuation + 0.5)
  }
}

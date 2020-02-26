export class TaxiValuation {
  constructor(distance, waiteTime) {
    this.distance = distance;
    this.waiteTime = waiteTime;

  }

  getValuation() {
    if (this.distance <= 2)
      return 6;

    var valuation = 6 + (this.distance - 2) * 0.8 + 0.5
    return parseInt(valuation)
  }
}

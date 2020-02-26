export class TaxiValuation {
  constructor(distance, waiteTime) {
    this.distance = distance;
    this.waiteTime = waiteTime;

  }

  getValuation() {
    var valuation = this.getDistanceValuation() + this.getWaiteValuation()
    return parseInt(valuation + 0.5)
  }

  getDistanceValuation(){
    if (this.distance <= 2)
      return 6;
    if (this.distance <= 8)
    {
      return 6 + (this.distance - 2) * 0.8
    }
    return 6 + 4.8 + (this.distance - 8) * 0.8 * 1.5
  }

  getWaiteValuation() {
    return this.waiteTime * 0.25;
  }
}

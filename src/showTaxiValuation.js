import { TaxiValuation } from './taxiValuation';
import { fs } from 'fs'

export class ShowTaxiValuation {

  static showPrice(filename) {
    var fs= require("fs")
    const content = fs.readFileSync(filename, 'utf-8')
    var list = content.split('\n')
    var index = 0
    var showString = ''
    while (index < list.length)
    {
      var tmp = list[index].split(',')
      var dis = parseInt(tmp[0].replace(/[^0-9]/ig,""))
      var wat = parseInt(tmp[1].replace(/[^0-9]/ig,""))
      const taxiValuation = new TaxiValuation(dis, wat)
      showString = showString + '收费' + taxiValuation.getValuation() + '元\n'
      index++
    }
    return showString
  }
}

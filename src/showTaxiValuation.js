import { fs } from 'fs';
import { TaxiValuation } from './taxiValuation';

export class ShowTaxiValuation {
  static showPrice(filename) {
    const content = this.getFileContent(filename);
    const list = content.split('\n');
    let index = 0;
    let showString = '';
    while (index < list.length) {
      const tmp = list[index].split(',');
      const dis = parseInt(tmp[0].replace(/[^0-9]/gi, ''));
      const wat = parseInt(tmp[1].replace(/[^0-9]/gi, ''));
      const taxiValuation = new TaxiValuation(dis, wat);
      showString = `${showString}收费${taxiValuation.getValuation()}元\n`;
      index++;
    }
    return showString;
  }

  static getFileContent(filename) {
    const fs1 = require('fs');
    const path = require('path');
    const filePath = `${path.resolve('./')}/src/fixtures/${filename}`;
    const content = fs1.readFileSync(filePath, 'utf-8');
    return content;
  }
}

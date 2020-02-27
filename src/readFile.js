import loadFile from './loadfile';
import { TaxiValuation } from './taxiValuation';

function giveTextThenPriceStr(line) {
  const obj = line.split(',等待');
  const valuation = new TaxiValuation(parseInt(obj[0], 0), parseInt(obj[1], 0));
  return `收费${valuation.getValuation()}元\n`;
}

function giveFIleThenReadLine(fileText) {
  let priceStr = '';
  fileText.split('\n').forEach(val => {
    priceStr += giveTextThenPriceStr(val);
  });
  return priceStr;
}

export default function givenFileThenPrice(fileName) {
  return giveFIleThenReadLine(loadFile(fileName));
}

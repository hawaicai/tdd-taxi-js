import { TaxiValuation } from './taxiValuation';
import { fs } from 'fs'

export class ShowTaxiValuation {

  static showPrice(filename) {
    var fs1= require("fs")
    var filedir = findFiles('.\\src', filename)//'.\\src\\fixtures\\' + filename
    const content = fs1.readFileSync(filedir, 'utf-8')
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



    function findFiles(startPath,filter){
      var path = require('path'), fs=require('fs')
      //console.log('Starting from dir '+startPath+'/');

      if (!fs.existsSync(startPath)){
        console.log("no dir ",startPath)
        return;
      }

      var files=fs.readdirSync(startPath);
      for(var i=0;i<files.length;i++){
        var filename=path.join(startPath,files[i])
        var stat = fs.lstatSync(filename)
        if (stat.isDirectory()){
          var result = findFiles(filename,filter)
          if (result != undefined){
            return result
          }
        }
        else if (filename.indexOf(filter) > 0){
          return filename
        }
      }
    }
  }


}

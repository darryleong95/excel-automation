import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';

const App = () => {

  const [prices, setPrices] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
  const [dlFile, setDlFile] = useState()

  const [fileA, setFileA] = useState({})
  const [fileB, setFileB] = useState({})

  const [headers, setHeaders] = useState([])

  const excelReader = (data, isFirstFile) => {
    let renderedData = XLSX.read(data, { type: 'binary' });
    const dataParse = XLSX.utils.sheet_to_json(renderedData.Sheets[renderedData.SheetNames[0]], { header: 1 });

    setHeaders(dataParse[0])

    let fileDict = {}

    for (let i = 1; i < dataParse.length; i++) {
      let partName = dataParse[i][0]
      fileDict[partName] = dataParse[i].slice(1)
    }

    delete fileDict[undefined]
    isFirstFile ? setFileA(fileDict) : setFileB(fileDict)
  }

  const onFileChange = (e) => {
    e.preventDefault();
    var files = e.target.files, f = files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
      excelReader(e.target.result, true)
    };
    reader.readAsBinaryString(f)
  }

  const onFileChange2 = (e) => {
    e.preventDefault();
    var files = e.target.files, f = files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
      excelReader(e.target.result, false)
    };
    reader.readAsBinaryString(f)
  }

  const downloadFile = () => {
    // compare 2 files and take lowest value

    if (fileB != null) {
      let fileBKeys = Object.keys(fileB)
      for (let i = 0; i < fileBKeys.length; i++) {
        let Bkey = fileBKeys[i]
        if (fileA[Bkey] === undefined) {
          fileA[Bkey] = fileB[Bkey]
        }
      }

      let fileAKeys = Object.keys(fileA)
      for (let i = 0; i < fileAKeys.length; i++) {
        let Akey = fileAKeys[i]
        if (fileB[Akey] !== undefined) {
          /* check for lowest value here */
          let priceListA = JSON.parse(JSON.stringify(fileA[Akey]))
          let priceListB = JSON.parse(JSON.stringify(fileB[Akey]))
          let ll = priceListA.length >= priceListB.length ? priceListA : priceListB
          let sl = priceListA.length < priceListB.length ? priceListA : priceListB
          for (let j = 0; j < ll.length; j++) {
            let pll = ll[j]
            let pss = sl[j]
            ll[j] = pll < pss ? pll : pss // select lowest price of 2
          }
          /*Re-assign price list to fileA */
          fileA[Akey] = ll
        }
      }
    }

    /* Write and Download File */
    console.log(headers)

    let keys = Object.keys(fileA)

    let wbData = []

    /* Create first row to format rest of datasheet */
    let fr = {}
    for (let i = 0; i < headers.length; i++) {
      fr[headers[i]] = '-'
    }
    wbData.push(fr)

    for (let i = 0; i < keys.length; i++) {
      let rowData = {}

      /* Part Name */
      rowData[headers[0]] = keys[i]

      /* Quantity - Prices */
      let priceList = fileA[keys[i]]
      for (let j = 0; j < priceList.length; j++) {
        if (!isNaN(parseFloat(priceList[j]))) {
          rowData[headers[j + 1]] = priceList[j] * prices[j]
        }
      }

      wbData.push(rowData)
    }

    console.log(wbData)

    const ws = XLSX.utils.json_to_sheet(wbData)
    let wb = { Sheets: { 'data': ws }, SheetNames: ['data'] }
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const dd = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
    FileSaver.saveAs(dd, 'Data.xlsx');
  }

  const updateMultiplier = (mult, i) => {
    let newPriceList = prices.slice()
    newPriceList[i] = parseFloat(mult)
    console.log(newPriceList)
    setPrices(newPriceList)
  }


  return (
    <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
      <h2>
        Upload Excel File Here
      </h2>
      <div style={{ paddingBottom: '20px', display: 'flex', flexDirection: 'row' }}>
        <div>
          <div style={{ fontWeight: 'bold', fontSize: '14px' }}>File 1</div>
          <input type="file" onChange={(event) => onFileChange(event)} />
        </div>
        <div>
          <div style={{ fontWeight: 'bold', fontSize: '14px' }}>File 2</div>
          <input type="file" onChange={(event) => onFileChange2(event)} disabled={Object.keys(fileA).length === 0}/>
        </div>
      </div>
      <div style={{ paddingBottom: '30px' }}>
        <h2>
          Mark Up Value <span style={{ color: 'red', fontSize: '13px' }}>(numbers/ decimal only)</span>
        </h2>
        <div>
          <label style={{ paddingRight: '10px' }}>
            Q10
          </label>
          <input type="number" onChange={(e) => updateMultiplier(e.target.value, 0)} value={prices[0]} />
        </div>
        <div>
          <label style={{ paddingRight: '10px' }}>
            Q25
          </label>
          <input type="number" onChange={(e) => updateMultiplier(e.target.value, 1)} value={prices[1]} />
        </div>
        <div>
          <label style={{ paddingRight: '10px' }}>
            Q50
          </label>
          <input type="number" onChange={(e) => updateMultiplier(e.target.value, 2)} value={prices[2]} />
        </div>
        <div>
          <label style={{ paddingRight: '10px' }}>
            Q100
          </label>
          <input type="number" onChange={(e) => updateMultiplier(e.target.value, 3)} value={prices[3]} />
        </div>
        <div>
          <label style={{ paddingRight: '10px' }}>
            Q250
          </label>
          <input type="number" onChange={(e) => updateMultiplier(e.target.value, 4)} value={prices[4]} />
        </div>
        <div>
          <label style={{ paddingRight: '10px' }}>
            Q500
          </label>
          <input type="number" onChange={(e) => updateMultiplier(e.target.value, 5)} value={prices[5]} />
        </div>
        <div>
          <label style={{ paddingRight: '10px' }}>
            Q1000
          </label>
          <input type="number" onChange={(e) => updateMultiplier(e.target.value, 6)} value={prices[6]} />
        </div>
        <div>
          <label style={{ paddingRight: '10px' }}>
            Q2500
          </label>
          <input type="number" onChange={(e) => updateMultiplier(e.target.value, 7)} value={prices[7]} />
        </div>
        <div>
          <label style={{ paddingRight: '10px' }}>
            Q3000
          </label>
          <input type="number" onChange={(e) => updateMultiplier(e.target.value, 8)} value={prices[8]} />
        </div>
        <div>
          <label style={{ paddingRight: '10px' }}>
            Q5000
          </label>
          <input type="number" onChange={(e) => updateMultiplier(e.target.value, 9)} value={prices[9]} />
        </div>
        <div>
          <label style={{ paddingRight: '10px' }}>
            Q10000
          </label>
          <input type="number" onChange={(e) => updateMultiplier(e.target.value, 10)} value={prices[10]} />
        </div>
        <div>
          <label style={{ paddingRight: '10px' }}>
            Q25000
          </label>
          <input type="number" onChange={(e) => updateMultiplier(e.target.value, 11)} value={prices[11]} />
        </div>
        <button onClick={() => downloadFile()} style={{ marginTop: '20px' }} disabled={Object.keys(fileA).length === 0}>
          Download
        </button>
      </div>
      <div>
        <h3>Your Uploaded File <span style={{ fontWeight: 'bold', color: 'red', fontSize: '20px' }}>MUST</span> follow the following format: </h3>
        <img src={require('./assets/Format.png')} />
      </div>
    </div>
  );
}

export default App;

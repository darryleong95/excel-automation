import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';

const App = () => {

  const [prices, setPrices] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])

  const excelReader = (data) => {
    let renderedData = XLSX.read(data, { type: 'binary' });
    const dataParse = XLSX.utils.sheet_to_json(renderedData.Sheets[renderedData.SheetNames[0]], { header: 1 });

    let qInfo = dataParse[0]

    let wbData = []

    for (let i = 1; i < dataParse.length; i++) {
      let rowData = {}
      for (let j = 0; j < dataParse[i].length; j++) {
        if (j != 0 && !isNaN(parseFloat(dataParse[i][j]))) {
          let price = parseFloat(dataParse[i][j])
          rowData[qInfo[j]] = price * prices[j - 1]
        }
        else {
          rowData[qInfo[j]] = dataParse[i][j]
        }
      }
      console.log(rowData)
      wbData.push(rowData)
    }

    const ws = XLSX.utils.json_to_sheet(wbData)
    let wb = { Sheets: { 'data': ws }, SheetNames: ['data'] }
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const dd = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
    FileSaver.saveAs(dd, 'Data.xlsx');

  }

  const onFileChange = (e) => {
    e.preventDefault();
    var files = e.target.files, f = files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
      excelReader(e.target.result)
    };
    console.log(f)
    reader.readAsBinaryString(f)
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
      <div style={{ paddingBottom: '20px' }}>
        <input type="file" onChange={(event) => onFileChange(event)} />
      </div>
      <div style={{ paddingBottom: '20px' }}>
        <h2>
          Multipler Value <span style={{ color: 'red', fontSize: '13px' }}>(numbers/ decimal only)</span>
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
      </div>
      <div>
        <h3>Your Uploaded File <span style={{ fontWeight: 'bold', color: 'red', fontSize:'20px' }}>MUST</span> follow the following format: </h3>
        <img src={require('./assets/Format.png')} />
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { useStyles } from '../style'
import { Button, Input } from '@material-ui/core';

const Compile = () => {

  const [fileA, setFileA] = useState({})
  const [fileB, setFileB] = useState({})

  const [q, setQs] = useState({})
  const [titleColumn, setTitleColumn] = useState("")

  const classes = useStyles()

  const excelReader = (data, isFirstFile) => {
    let renderedData = XLSX.read(data, { type: 'binary' });
    const dataParse = XLSX.utils.sheet_to_json(renderedData.Sheets[renderedData.SheetNames[0]], { header: 1 });

    setTitleColumn(dataParse[0][0])

    for (let i = 1; i < dataParse[0].length; i++) {
      let key = parseInt(dataParse[0][i])
      if (!(key in q))
        q[key] = 1
    }

    setQs(q)

    let fileDict = {}

    for (let i = 1; i < dataParse.length; i++) {
      let partName = dataParse[i][0]

      let priceQuantity = {}
      for (let j = 1; j < dataParse[i].length; j++) {
        let quantity = parseInt(dataParse[0][j])
        let value = dataParse[i][j]
        priceQuantity[quantity] = value
      }

      fileDict[partName] = priceQuantity
    }

    delete fileDict[undefined]
    isFirstFile ? setFileA(fileDict) : setFileB(fileDict)
  }

  const onFileChange = (e, isFirstFile) => {
    e.preventDefault();
    var files = e.target.files, f = files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
      excelReader(e.target.result, isFirstFile)
    };
    reader.readAsBinaryString(f)
  }

  const downloadFile = () => {
    // compare 2 files and take lowest value
    if (Object.keys(fileB).length !== 0) {
      let fileAKeys = Object.keys(fileA)
      let fileBKeys = Object.keys(fileB)
      let combined = fileAKeys.concat(fileBKeys)

      let uniqueItems = [...new Set(combined)]

      let quantities = Object.keys(q)

      for (let i = 0; i < uniqueItems.length; i++) {
        let individualItemPrice = {}
        /* Item does not exist in File A but exits in File B */
        if (fileA[uniqueItems[i]] === undefined) {
          for (let j = 0; j < quantities.length; j++) {
            individualItemPrice[quantities[j]] = fileB[uniqueItems[i]][quantities[j]]
          }
        }
        /* Item does not exist in File B but exits in File A */
        else if (fileB[uniqueItems[i]] === undefined) {
          for (let j = 0; j < quantities.length; j++) {
            individualItemPrice[quantities[j]] = fileA[uniqueItems[i]][quantities[j]]
          }
        }
        /* Item Exists in both */
        else {
          for (let j = 0; j < quantities.length; j++) {
            let A = fileA[uniqueItems[i]]
            let B = fileB[uniqueItems[i]]

            if (A[quantities[j]] === undefined) {
              individualItemPrice[quantities[j]] = B[quantities[j]]
            } else if (B[quantities[j]] === undefined) {
              individualItemPrice[quantities[j]] = A[quantities[j]]
            } else {
              individualItemPrice[quantities[j]] = A[quantities[j]] < B[quantities[j]] ? A[quantities[j]] : B[quantities[j]]
            }
          }
        }

        fileA[uniqueItems[i]] = individualItemPrice
      }
    }

    /* Write and Download File */
    let keys = Object.keys(fileA)
    let wbData = []

    let myHeader = ['MPN']

    let pl = fileA[keys[0]]
    for (let i = 0; i < Object.keys(pl).length; i++) {
      myHeader.push(Object.keys(pl)[i])
    }

    for (let i = 0; i < keys.length; i++) {
      let rowData = {}

      /* Part Name */
      rowData['MPN'] = keys[i]

      /* Quantity - Prices */
      let priceList = fileA[keys[i]]

      let quantityArr = Object.keys(priceList)
      let priceArr = Object.values(priceList)

      for (let j = 0; j < quantityArr.length; j++) {
        if (!isNaN(parseFloat(priceArr[j]))) {
          rowData[quantityArr[j]] = priceArr[j] * q[quantityArr[j]]
        }
      }
      wbData.push(rowData)
    }

    const ws = XLSX.utils.json_to_sheet(wbData, { header: myHeader })
    let wb = { Sheets: { 'data': ws }, SheetNames: ['data'] }
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const dd = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
    FileSaver.saveAs(dd, 'Data.xlsx');
  }

  const updateMultiplier = (mult, value) => {
    let tmp = JSON.parse(JSON.stringify(q))
    if (mult.toString().length === 0) {
      tmp[value] = 1
      setQs(tmp)
    } else {
      tmp[value] = parseFloat(mult)
      setQs(tmp)
    }
  }


  return (
    <div className={classes.root}>
      <span className={classes.label} style={{ fontSize: '30px', marginBottom: '30px' }}>
        Upload Excel Files Here
      </span>
      <div className={classes.fileUploadContainer} style={{ flexDirection: 'row', width: '40%' }}>
        <div className={classes.fileUploadWrapper}>
          <span className={classes.label}>File 1</span>
          <Input onChange={(event) => onFileChange(event, true)} type="file" className={classes.fileUpload} />
        </div>
        <div className={classes.fileUploadWrapper}>
          <span className={classes.label}>File 2</span>
          <Input onChange={(event) => onFileChange(event, false)} type="file" disabled={Object.keys(fileA).length === 0} className={classes.fileUpload} />
        </div>
      </div>
      <section className={classes.fileUploadContainer}>
        <span className={classes.label}>
          Mark Up Value <span style={{ color: 'red', fontSize: '13px' }}>(numbers/ decimal only)</span>
        </span>
        <div className={Object.keys(q).length !== 0 && classes.inputWrapper}>
          {
            Object.keys(q).map((value) => {
              return (
                <div key={value} className={classes.input}>
                  <label style={{ paddingRight: '10px' }}>
                    Q - {value}
                  </label>
                  <input type="number" onChange={(e) => updateMultiplier(e.target.value, value)} value={q[value]} />
                </div>
              )
            })
          }
        </div>
        {
          Object.keys(q).length === 0 &&
          <div>
            <h4 style={{ color: "#333333", textTransform: "uppercase" }}>[Multiplier fields will display once file is uploaded]</h4>
          </div>
        }
        <button onClick={() => downloadFile()} className={classes.download} disabled={Object.keys(fileA).length === 0}>
          Download
        </button>
      </section>
      <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
        <h3>Your Uploaded File <span style={{ fontWeight: 'bold', color: 'red', fontSize: '20px' }}>MUST</span> follow the following format: </h3>
        <img alt="Sample Format" src={require('../assets/Format.png')} width={"80%"} style={{ borderRadius: "10px" }} />
      </div>
    </div>
  );
}

export default Compile;

(this["webpackJsonpexcel-automation"]=this["webpackJsonpexcel-automation"]||[]).push([[0],{38:function(e,t){},50:function(e,t,a){e.exports=a(72)},55:function(e,t,a){},61:function(e,t){},62:function(e,t){},67:function(e,t,a){e.exports=a.p+"static/media/Format.8dacd377.png"},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(40),l=a.n(o),i=(a(55),a(18)),c=a(15),s=a(47),p=a(13),d=a(5),m=a(25),u=a(87),f=Object(u.a)({grow:{flexGrow:1},linkContainer:{display:"flex"},link:{margin:"5px",padding:"10px 20px 10px 20px",backgroundColor:"#f8f8f8",color:"#434343",textDecoration:"none",borderRadius:"5px",transition:"0.5s",textTransform:"uppercase",fontSize:"1em",fontWeight:"bold","&:hover":{backgroundColor:"#d5d5d5",transition:"0.5s"}},root:{marginTop:"50px",justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column",height:"100%"},label:{fontWeight:"bold",fontSize:"20px",paddingTop:"5px",paddingBottom:"5px"},inputWrapper:{margin:"20px 0px"},input:{padding:"5px"},download:{backgroundColor:"darkorange",color:"white",width:"250px",height:"50px",borderRadius:"5px",fontSize:"1em",border:"none",transition:"1s",fontWeight:"bold",textTransform:"uppercase","&:hover":{backgroundColor:"#ff6500",transition:"1s"}},fileUploadContainer:{padding:"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",width:"80%"},fileUploadWrapper:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},fileUpload:{height:"60px",backgroundColor:"white",border:"none"}}),g=a(91),h=function(){var e=Object(n.useState)({}),t=Object(p.a)(e,2),o=t[0],l=t[1],i=Object(n.useState)({}),c=Object(p.a)(i,2),u=c[0],h=c[1],b=Object(n.useState)({}),v=Object(p.a)(b,2),y=v[0],x=v[1],E=Object(n.useState)(""),O=Object(p.a)(E,2),j=(O[0],O[1]),k=f(),N=function(e,t){e.preventDefault();var a=e.target.files[0],n=new FileReader;n.onload=function(e){!function(e,t){var a=d.read(e,{type:"binary"}),n=d.utils.sheet_to_json(a.Sheets[a.SheetNames[0]],{header:1});j(n[0][0]);for(var r=1;r<n[0].length;r++){var o=parseInt(n[0][r]);o in y||(y[o]=1)}x(y);for(var i={},c=1;c<n.length;c++){for(var s=n[c][0],p={},m=1;m<n[c].length;m++){var u=parseInt(n[0][m]),f=n[c][m];p[u]=f}i[s]=p}delete i[void 0],t?l(i):h(i)}(e.target.result,t)},n.readAsBinaryString(a)};return r.a.createElement("div",{className:k.root},r.a.createElement("span",{className:k.label,style:{fontSize:"30px",marginBottom:"30px"}},"Upload Excel Files Here"),r.a.createElement("div",{className:k.fileUploadContainer,style:{flexDirection:"row",width:"40%"}},r.a.createElement("div",{className:k.fileUploadWrapper},r.a.createElement("span",{className:k.label},"File 1"),r.a.createElement(g.a,{onChange:function(e){return N(e,!0)},type:"file",className:k.fileUpload})),r.a.createElement("div",{className:k.fileUploadWrapper},r.a.createElement("span",{className:k.label},"File 2"),r.a.createElement(g.a,{onChange:function(e){return N(e,!1)},type:"file",disabled:0===Object.keys(o).length,className:k.fileUpload}))),r.a.createElement("section",{className:k.fileUploadContainer},r.a.createElement("span",{className:k.label},"Mark Up Value ",r.a.createElement("span",{style:{color:"red",fontSize:"13px"}},"(numbers/ decimal only)")),r.a.createElement("div",{className:0!==Object.keys(y).length&&k.inputWrapper},Object.keys(y).map((function(e){return r.a.createElement("div",{key:e,className:k.input},r.a.createElement("label",{style:{paddingRight:"10px"}},"Q - ",e),r.a.createElement("input",{type:"number",onChange:function(t){return function(e,t){var a=JSON.parse(JSON.stringify(y));0===e.toString().length?(a[t]=1,x(a)):(a[t]=parseFloat(e),x(a))}(t.target.value,e)},value:y[e]}))}))),0===Object.keys(y).length&&r.a.createElement("div",null,r.a.createElement("h4",{style:{color:"#333333",textTransform:"uppercase"}},"[Multiplier fields will display once file is uploaded]")),r.a.createElement("button",{onClick:function(){return function(){if(0!==Object.keys(u).length)for(var e=Object.keys(o),t=Object.keys(u),a=e.concat(t),n=Object(s.a)(new Set(a)),r=Object.keys(y),l=0;l<n.length;l++){var i={};if(void 0===o[n[l]])for(var c=0;c<r.length;c++)i[r[c]]=u[n[l]][r[c]];else if(void 0===u[n[l]])for(var p=0;p<r.length;p++)i[r[p]]=o[n[l]][r[p]];else for(var f=0;f<r.length;f++){var g=o[n[l]],h=u[n[l]];void 0===g[r[f]]?i[r[f]]=h[r[f]]:void 0===h[r[f]]?i[r[f]]=g[r[f]]:i[r[f]]=g[r[f]]<h[r[f]]?g[r[f]]:h[r[f]]}o[n[l]]=i}for(var b=Object.keys(o),v=[],x=["MPN"],E=o[b[0]],O=0;O<Object.keys(E).length;O++)x.push(Object.keys(E)[O]);for(var j=0;j<b.length;j++){var k={};k.MPN=b[j];for(var N=o[b[j]],C=Object.keys(N),w=Object.values(N),S=0;S<C.length;S++)isNaN(parseFloat(w[S]))||(k[C[S]]=w[S]*y[C[S]]);v.push(k)}var U={Sheets:{data:d.utils.json_to_sheet(v,{header:x})},SheetNames:["data"]},D=d.write(U,{bookType:"xlsx",type:"array"}),P=new Blob([D],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});m.saveAs(P,"Data.xlsx")}()},className:k.download,disabled:0===Object.keys(o).length},"Download")),r.a.createElement("div",{style:{justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column"}},r.a.createElement("h3",null,"Your Uploaded File ",r.a.createElement("span",{style:{fontWeight:"bold",color:"red",fontSize:"20px"}},"MUST")," follow the following format: "),r.a.createElement("img",{alt:"Sample Format",src:a(67),width:"80%",style:{borderRadius:"10px"}})))},b=a(14),v=function(){var e=f(),t=Object(n.useState)({EURO:1,USD:1}),a=Object(p.a)(t,2),o=a[0],l=a[1],i=Object(n.useState)({}),c=Object(p.a)(i,2),s=c[0],u=(c[1],Object(n.useState)({})),h=Object(p.a)(u,2),v=h[0],y=(h[1],function(e,t){e.preventDefault();var a=e.target.files[0],n=new FileReader;n.onload=function(e){1===t?function(e){var t=d.read(e,{type:"binary"}),a=d.utils.sheet_to_json(t.Sheets[t.SheetNames[0]],{header:1});l({EURO:a[3][2],USD:a[4][2]});for(var n=2;n<a[0].length;n++){var r=parseInt(a[0][n]);r in s||(s[r]={handlingCharge:a[1][n],markUp:a[2][n]})}for(var o=7;o<a.length&&void 0!==a[o][1];o++){var i=a[o][1],c=a[o][2],p=a[o][3],m=void 0===a[o][4]?"":a[o][4];0!=p&&(v[i]={brand:c,qty:p,remarks:m})}}(e.target.result):2===t?function(e){for(var t=d.read(e,{type:"binary"}),a=d.utils.sheet_to_json(t.Sheets[t.SheetNames[0]],{header:1}),n=1;n<a.length&&void 0!==a[n][1];n++){var r=a[n][0],l=a[n][1],i=a[n][2],c=x(a[n][3]);r in v&&(null!=v[r].opoDate?(v[r].opoDate===c.getTime()&&v[r].opoPrice*o[v[r].opoCurr]<i*o[l]||v[r].opoDate<c.getTime())&&(v[r]=Object(b.a)(Object(b.a)({},v[r]),{},{opoCurr:l,opoPrice:i,opoDate:c})):v[r]=Object(b.a)(Object(b.a)({},v[r]),{},{opoCurr:l,opoPrice:i,opoDate:c}))}}(e.target.result):function(e){for(var t=d.read(e,{type:"binary"}),a=d.utils.sheet_to_json(t.Sheets[t.SheetNames[0]],{header:1}),n=1;n<a.length&&void 0!==a[n][1];n++){var r=a[n][1],l=a[n][2],i=a[n][3],c=x(a[n][0]);r in v&&(null!=v[r].grDate?(v[r].grDate===c.getTime()&&v[r].grPrice*o[v[r].grCurr]<i*o[l]||v[r].grDate<c.getTime())&&(v[r]=Object(b.a)(Object(b.a)({},v[r]),{},{grCurr:l,grPrice:i,grDate:c})):v[r]=Object(b.a)(Object(b.a)({},v[r]),{},{grCurr:l,grPrice:i,grDate:c}))}}(e.target.result)},n.readAsBinaryString(a)}),x=function(e){var t=Math.floor(e-25569),a=new Date(1e3*(86400*t));return new Date(a.getFullYear(),a.getMonth(),a.getDate())};return r.a.createElement("div",{className:e.root},r.a.createElement("span",{className:e.label,style:{fontSize:"30px",marginBottom:"30px"}},"Upload Excel Files Here"),r.a.createElement("div",{className:e.fileUploadContainer,style:{flexDirection:"row",width:"60%"}},r.a.createElement("div",{className:e.fileUploadWrapper,style:{width:"30%"}},r.a.createElement("span",{className:e.label},"Stock Available"),r.a.createElement(g.a,{onChange:function(e){return y(e,1)},type:"file",className:e.fileUpload})),r.a.createElement("div",{className:e.fileUploadWrapper,style:{width:"30%"}},r.a.createElement("span",{className:e.label},"OpenPoPriceList"),r.a.createElement(g.a,{onChange:function(e){return y(e,2)},type:"file",className:e.fileUpload})),r.a.createElement("div",{className:e.fileUploadWrapper,style:{width:"30%"}},r.a.createElement("span",{className:e.label},"GoodsReceivedPriceList"),r.a.createElement(g.a,{onChange:function(e){return y(e,3)},type:"file",className:e.fileUpload}))),r.a.createElement("div",{style:{marginTop:"50px"}},r.a.createElement("button",{onClick:function(){return function(){for(var e=[],t=Object.keys(v),a=["Line","MPN","Brand","Stock","Curr (GR)","Price (GR)","Curr (OPO)","Price (OPO)"],n=0;n<Object.keys(s);n++)a.push(Object.keys(s)[n]);for(var r=0;r<t.length;r++){var l={},i=t[r];l.Line=r+1,l.MPN=i,l.Brand=v[i].brand,l.Stock=v[i].qty,l["Curr (GR)"]=v[i].grCurr,l["Price (GR)"]=v[i].grPrice,l["Curr (OPO)"]=v[i].opoCurr,l["Price (OPO)"]=v[i].opoPrice;for(var c=v[i].grPrice*o[v[i].grCurr],p=v[i].opoPrice*o[v[i].opoCurr],u=c>p?c:p,f=0;f<Object.keys(s).length;f++){var g=Object.keys(s)[f],h=((1+1*s[g].markUp/100)*u*g+s[g].handlingCharge)/g;l[g]=isNaN(h)?"-":h}e.push(l)}console.log(a);var b={Sheets:{data:d.utils.json_to_sheet(e,{header:a})},SheetNames:["data"]},y=d.write(b,{bookType:"xlsx",type:"array"}),x=new Blob([y],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});m.saveAs(x,"Data.xlsx")}()},className:e.download},"Download")))},y=a(92),x=a(89),E=a(90),O=function(){var e=f();return r.a.createElement(i.a,null,r.a.createElement(y.a,{position:"static",style:{backgroundColor:"darkorange"}},r.a.createElement(x.a,null,r.a.createElement(E.a,{className:e.label,noWrap:!0,style:{fontSize:"22px"}},"Wiselink Excel Automation"),r.a.createElement("div",{className:e.grow}),r.a.createElement("div",{className:e.linkContainer},r.a.createElement(i.b,{to:"/excel-automation",className:e.link},"Compile"),r.a.createElement(i.b,{to:"/excel-automation/compare",className:e.link},"Compare")))),r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/excel-automation",component:h}),r.a.createElement(c.a,{path:"/excel-automation/compare",component:v})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(i.a,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.5dad2a7c.chunk.js.map
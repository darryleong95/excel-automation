(this["webpackJsonpexcel-automation"]=this["webpackJsonpexcel-automation"]||[]).push([[0],[,,,,,,,function(e,t){},,,function(e,t,n){e.exports=n(24)},,,,,function(e,t,n){},,,,,,function(e,t){},function(e,t){},function(e,t,n){e.exports=n.p+"static/media/Format.337fa5d4.png"},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(8),i=n.n(r),o=(n(15),n(1)),u=n(2),c=n(9),s=function(){var e=Object(a.useState)([1,1,1,1,1,1,1,1,1,1,1,1]),t=Object(o.a)(e,2),r=t[0],i=t[1],s=Object(a.useState)(),p=Object(o.a)(s,2),m=(p[0],p[1],Object(a.useState)({})),d=Object(o.a)(m,2),g=d[0],v=d[1],f=Object(a.useState)({}),h=Object(o.a)(f,2),E=h[0],y=h[1],b=Object(a.useState)([]),x=Object(o.a)(b,2),S=x[0],O=x[1],j=function(e,t){var n=u.read(e,{type:"binary"}),a=u.utils.sheet_to_json(n.Sheets[n.SheetNames[0]],{header:1});O(a[0]);for(var l={},r=1;r<a.length;r++){l[a[r][0]]=a[r].slice(1)}delete l[void 0],t?v(l):y(l)},w=function(e,t){var n=r.slice();n[t]=parseFloat(e),console.log(n),i(n)};return l.a.createElement("div",{style:{justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column"}},l.a.createElement("h2",null,"Upload Excel File Here"),l.a.createElement("div",{style:{paddingBottom:"20px",display:"flex",flexDirection:"row"}},l.a.createElement("div",null,l.a.createElement("div",{style:{fontWeight:"bold",fontSize:"14px"}},"File 1"),l.a.createElement("input",{type:"file",onChange:function(e){return function(e){e.preventDefault();var t=e.target.files[0],n=new FileReader;n.onload=function(e){j(e.target.result,!0)},n.readAsBinaryString(t)}(e)}})),l.a.createElement("div",null,l.a.createElement("div",{style:{fontWeight:"bold",fontSize:"14px"}},"File 2"),l.a.createElement("input",{type:"file",onChange:function(e){return function(e){e.preventDefault();var t=e.target.files[0],n=new FileReader;n.onload=function(e){j(e.target.result,!1)},n.readAsBinaryString(t)}(e)}}))),l.a.createElement("div",{style:{paddingBottom:"30px"}},l.a.createElement("h2",null,"Mark Up Value ",l.a.createElement("span",{style:{color:"red",fontSize:"13px"}},"(numbers/ decimal only)")),l.a.createElement("div",null,l.a.createElement("label",{style:{paddingRight:"10px"}},"Q10"),l.a.createElement("input",{type:"number",onChange:function(e){return w(e.target.value,0)},value:r[0]})),l.a.createElement("div",null,l.a.createElement("label",{style:{paddingRight:"10px"}},"Q25"),l.a.createElement("input",{type:"number",onChange:function(e){return w(e.target.value,1)},value:r[1]})),l.a.createElement("div",null,l.a.createElement("label",{style:{paddingRight:"10px"}},"Q50"),l.a.createElement("input",{type:"number",onChange:function(e){return w(e.target.value,2)},value:r[2]})),l.a.createElement("div",null,l.a.createElement("label",{style:{paddingRight:"10px"}},"Q100"),l.a.createElement("input",{type:"number",onChange:function(e){return w(e.target.value,3)},value:r[3]})),l.a.createElement("div",null,l.a.createElement("label",{style:{paddingRight:"10px"}},"Q250"),l.a.createElement("input",{type:"number",onChange:function(e){return w(e.target.value,4)},value:r[4]})),l.a.createElement("div",null,l.a.createElement("label",{style:{paddingRight:"10px"}},"Q500"),l.a.createElement("input",{type:"number",onChange:function(e){return w(e.target.value,5)},value:r[5]})),l.a.createElement("div",null,l.a.createElement("label",{style:{paddingRight:"10px"}},"Q1000"),l.a.createElement("input",{type:"number",onChange:function(e){return w(e.target.value,6)},value:r[6]})),l.a.createElement("div",null,l.a.createElement("label",{style:{paddingRight:"10px"}},"Q2500"),l.a.createElement("input",{type:"number",onChange:function(e){return w(e.target.value,7)},value:r[7]})),l.a.createElement("div",null,l.a.createElement("label",{style:{paddingRight:"10px"}},"Q3000"),l.a.createElement("input",{type:"number",onChange:function(e){return w(e.target.value,8)},value:r[8]})),l.a.createElement("div",null,l.a.createElement("label",{style:{paddingRight:"10px"}},"Q5000"),l.a.createElement("input",{type:"number",onChange:function(e){return w(e.target.value,9)},value:r[9]})),l.a.createElement("div",null,l.a.createElement("label",{style:{paddingRight:"10px"}},"Q10000"),l.a.createElement("input",{type:"number",onChange:function(e){return w(e.target.value,10)},value:r[10]})),l.a.createElement("div",null,l.a.createElement("label",{style:{paddingRight:"10px"}},"Q25000"),l.a.createElement("input",{type:"number",onChange:function(e){return w(e.target.value,11)},value:r[11]})),l.a.createElement("button",{onClick:function(){return function(){if(null!=E){for(var e=Object.keys(E),t=0;t<e.length;t++){var n=e[t];void 0===g[n]&&(g[n]=E[n])}for(var a=Object.keys(g),l=0;l<a.length;l++){var i=a[l];if(void 0!==E[i]){for(var o=JSON.parse(JSON.stringify(g[i])),s=JSON.parse(JSON.stringify(E[i])),p=o.length>=s.length?o:s,m=o.length<s.length?o:s,d=0;d<p.length;d++){var v=p[d],f=m[d];p[d]=v<f?v:f}g[i]=p}}}console.log(S);for(var h=Object.keys(g),y=[],b={},x=0;x<S.length;x++)b[S[x]]="-";y.push(b);for(var O=0;O<h.length;O++){var j={};j[S[0]]=h[O];for(var w=g[h[O]],C=0;C<w.length;C++)isNaN(parseFloat(w[C]))||(j[S[C+1]]=w[C]*r[C]);y.push(j)}console.log(y);var R={Sheets:{data:u.utils.json_to_sheet(y)},SheetNames:["data"]},Q=u.write(R,{bookType:"xlsx",type:"array"}),k=new Blob([Q],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});c.saveAs(k,"Data.xlsx")}()},style:{marginTop:"20px"},disabled:0===Object.keys(g).length},"Download")),l.a.createElement("div",null,l.a.createElement("h3",null,"Your Uploaded File ",l.a.createElement("span",{style:{fontWeight:"bold",color:"red",fontSize:"20px"}},"MUST")," follow the following format: "),l.a.createElement("img",{src:n(23)})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.491b9d31.chunk.js.map
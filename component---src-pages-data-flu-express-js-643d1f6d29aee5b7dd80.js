(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{152:function(M,N,j){"use strict";j.r(N);j(26);var z=j(8),D=j.n(z),T=j(0),t=j.n(T),L=j(166),O=j(169),e=j(183),u=j.n(e),y=j(406),g=j.n(y),I=j(197),c=j.n(I),i=j(207),E=j.n(i),A=(j(162),j(161)),a=function(M){D()(j,M);var N=j.prototype;function j(){var N;return(N=M.call(this)||this).state={labsurveillance:{},outbreaks:{}},N.state.labsurveillance.series=Object.assign({series:{}},N.settings),N.state.outbreaks.series=Object.assign({series:{}},N.settings),N.settings={rangeSelector:{buttons:[{type:"month",count:3,text:"三個月"},{type:"month",count:6,text:"六個月"},{type:"year",count:1,text:"一年"},{type:"all",text:"全部"}]},time:{useUTC:!1},yAxis:{plotLines:[{value:0,width:2,color:"silver"}]},tooltip:{pointFormat:'<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b>)<br/>',split:!0}},N}return N.fetchFLUExpress=function(){var M=this;u.a.get("https://ourhealthcarehk.github.io/api/FLUEXPRESS.json").then(function(N){var j=N.data;if(console.log(j),j){for(var z=[],D=[],T=6;T<10;T++){var t=T-6;z[t]={name:["A(H1)甲型(H1)","A(H3)甲型(H3)","B乙型","C丙型"][t],data:[]};for(var L=3;L<j.length;L++)0!==j[L][3].length&&z[t].data.push([c()(j[L][3],"DD/MM/YYYY").valueOf(),parseInt(j[L][T])])}for(T=16;T<17;T++)for(D[0]={name:"學校/院舍爆發宗數",data:[]},L=3;L<j.length;L++)0!==j[L][3].length&&D[0].data.push([c()(j[L][3],"DD/MM/YYYY").valueOf(),parseInt(j[L][T])]);M.state.labsurveillance.series=z,M.state.outbreaks.series=D,M.setState(M.state)}}).catch(function(N){M.setState({loading:!1,error:N})})},N.componentDidMount=function(){this.fetchFLUExpress()},N.render=function(){return t.a.createElement(L.a,null,t.a.createElement(O.a,{title:"本地流感流行情況",description:"衛生署每週更新的流感監測數據，用以衡量流感流行程度及對公共醫療系統的影響。"}),t.a.createElement(A.f.Content,{title:"本地流感流行情況"},t.a.createElement(A.b,{title:"實驗室監測"},t.a.createElement(A.b.Body,null,"        ",t.a.createElement("p",null,"公共衞生化驗服務處所收集的呼吸道樣本中，季節性流感病毒陽性百分比。當中分別顯示季節性流感病毒的甲型(H1)、甲型(H3)、乙型及丙型流感株類。"),t.a.createElement(E.a,{style:{width:"100%",minHeight:"100px"},highcharts:g.a,constructorType:"stockChart",options:this.state.labsurveillance}))),t.a.createElement(A.b,{title:"流感樣疾病爆發監測"},t.a.createElement(A.b.Body,null,t.a.createElement(E.a,{style:{width:"100%",minHeight:"100px"},highcharts:g.a,constructorType:"stockChart",options:this.state.outbreaks})))))},j}(t.a.Component);N.default=a},166:function(M,N,j){"use strict";var z=j(167),D=j(0),T=j.n(D),t=j(1),L=j.n(t),O=j(36),e=(j(162),j(161)),u=j(168),y=j.n(u),g=[{value:"主頁",to:"/",icon:"home",useExact:!0},{value:"公共衛生實況",icon:"bar-chart-2",subItems:[{value:"急症傳染病症狀監測",to:"/data/AEDsurveillance"},{value:"本地流感流行情況",to:"/data/FLUExpress"}]},{value:"醫療服務實況",icon:"eye",subItems:[{value:"私立醫院門診收費一覽",to:"/data/privateOPDprice"}]},{value:"醫療服務地圖",icon:"map",subItems:[{value:"普通科診所地圖",to:"/data/GOPCmap"}]}],I=function(M){var N=M.children;return T.a.createElement(O.StaticQuery,{query:"3356484219",render:function(M){return T.a.createElement(e.g.Wrapper,{headerProps:{href:"/",imageURL:y.a,alt:M.site.siteMetadata.title},navProps:{itemsObjects:g},footerProps:{links:[T.a.createElement("a",{href:"#"},"First Link"),T.a.createElement("a",{href:"#"},"Second Link"),T.a.createElement("a",{href:"#"},"Third Link"),T.a.createElement("a",{href:"#"},"Fourth Link"),T.a.createElement("a",{href:"#"},"Five Link"),T.a.createElement("a",{href:"#"},"Sixth Link"),T.a.createElement("a",{href:"#"},"Seventh Link"),T.a.createElement("a",{href:"#"},"Eigth Link")],note:M.site.siteMetadata.description,copyright:T.a.createElement(T.a.Fragment,null,"Copyright © 2019 ",M.site.siteMetadata.author,". Theme by",T.a.createElement("a",{href:"https://codecalm.net",target:"_blank",rel:"noopener noreferrer"}," ","codecalm.net")," ","All rights reserved."),nav:T.a.createElement(T.a.Fragment,null,T.a.createElement(e.d.Col,{auto:!0},T.a.createElement(e.e,{className:"list-inline list-inline-dots mb-0"},T.a.createElement(e.e.Item,{className:"list-inline-item"},T.a.createElement(O.Link,{to:"/about/"},"關於我們")),T.a.createElement(e.e.Item,{className:"list-inline-item"},T.a.createElement(O.Link,{to:"/faq/"},"常見問題")))))}},T.a.createElement("main",null,N))},data:z})};I.propTypes={children:L.a.node.isRequired},N.a=I},167:function(M){M.exports={data:{site:{siteMetadata:{title:"Our Healthcare HK",author:"OurHealthcareHK",description:"Raising awareness for the healthcare system in Hong Kong"}}}}},168:function(M,N){M.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjYzIiB2aWV3Qm94PSIwIDAgMjY4IDYzIiB3aWR0aD0iMjY4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgZmlsbC1ydWxlPSJub256ZXJvIiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAuMTg3NjgzIDYyLjc2MTI5KSI+PHBhdGggZD0ibTE4LjQzNzE0NzkgNjEuMDg3ODg0N2MtMS4yNDcwNzUtMS42MzM5Mzg1LTMuMzEzMzA3MS0yLjk2MDAzMzUtNS43NDYzMjU5LTMuNzA1OTYxOWwtLjk1MzY0NTYtLjI4NDE2MzJ2LTQuNzU5NzMzOS00Ljc3MTU3NDFoMTEuNzM3MTc2MyAxMS43MzcxNzY0djQuNzcxNTc0MSA0Ljc1OTczMzlsLS45NTM2NDU2LjI5NjAwMzNjLTIuNDgxOTIzNy43Njk2MDg3LTQuNDc0Nzk4NSAyLjA0ODM0MzItNS43NTg1NTIxIDMuNzA1OTYxOWwtLjUyNTcyNzcuNjc0ODg3N2gtNC40OTkyNTEtNC40OTkyNTA5em02LjE0OTc5MTQtMi41MjE5NDg2Yy41MDEyNzUyLS4zNDMzNjM4LjcyMTM0NzMtLjgxNjk2OTIuNzMzNTczNS0xLjU3NDczNzguMDI0NDUyNC0xLjAwNjQxMTQtLjU4Njg1ODgtMS42ODEyOTktMS42MjYwODgtMS43NzYwMjAxLS42ODQ2Njg2LS4wNTkyMDA3LTEuNDQyNjk0Ni4yNjA0ODI5LTEuODA5NDgxNC43NTc3Njg2LS41Mzc5NTM5LjcyMjI0ODItLjMwNTY1NTYgMi4wNDgzNDMyLjQ1MjM3MDQgMi41OTI5ODkzLjQ4OTA0OS4zNDMzNjQgMS43NDgzNTAyLjM0MzM2NCAyLjI0OTYyNTUgMHoiIGZpbGw9IiM1NzU3NTciLz48cGF0aCBkPSJtMS40ODQwMzg1NCA1NS4zMzk1ODI1LTEuNDg0MDM4NTQtMS40ODEwMjAydi0yNS45MjM4NzMxLTI1LjkxMTgzMjRsLjk4OTM1OTAzLTEuMDExNDI4NC45ODkzNTkwMy0xLjAxMTQyODRoMjEuMTg2NzYxNjQgMjEuMTg2NzYxNmwuOTg5MzU5IDEuMDExNDI4NC45ODkzNTkxIDEuMDExNDI4NHYyNS45MTE4MzI0IDI1LjkyMzg3MzFsLTEuNDcxOTczMiAxLjQ4MTAyMDItMS40ODQwMzg1IDEuNDkzMDYxaC0zLjM0MjEwMzEtMy4zNTQxNjg0di0xLjkyNjUzMDMtMS45MjY1MzAzaDIuNTA5NTkzNiAyLjUwOTU5MzZsLjM4NjA5MTQtLjM5NzM0NjkuMzg2MDkxMy0uMzk3MzQ2OHYtMjQuMjAyMDM2OC0yNC4yMDIwMzY3MWwtLjQ1ODQ4MzUtLjQ0NTUxMDEzLS40NTg0ODM0LS40NDU1MTAxM2gtMTguMzk5NjY0OC0xOC4zOTk2NjQ5MmwtLjQ0NjQxODEuNDU3NTUwOTUtLjQ0NjQxODEuNDU3NTUwOTR2MjQuMjAyMDM2NjggMjQuMjAyMDM2OGwuMzk4MTU2NjguMzg1MzA2MS4zOTgxNTY2OC4zODUzMDZoMi40OTc1MjgzMSAyLjQ5NzUyODI1djEuOTI2NTMwMyAxLjkyNjUzMDNoLTMuMzQyMTAzMDMtMy4zNTQxNjg0NHoiIGZpbGw9IiM1NzU3NTciLz48cGF0aCBkPSJtMjIuMjYyMTI0OCAzNS43MTE4NjktMi44NDg2OTkyLTUuNjczNzMwNi0uNTc5Mzk2NC44NDk4NjI2Yy0uMzI1OTEwNS40NTQ4NTYxLS42NjM4OTE4LjkwOTcxMjEtLjc0ODM4NzEuOTkzNTAxNC0uMDg0NDk1My4wOTU3NTkyLS4xNTY5MTk5LjE5MTUxODMtLjE1NjkxOTkuMjI3NDI4cy0uMjUzNDg1OS40MTg5NDYzLS41NTUyNTQ5Ljg0OTg2MjZsLS41NTUyNTQ5Ljc3ODA0MzJoLTQuMzkzNzU2NC00LjM5Mzc1NjM4di0xLjkxNTE4MzMtMS45MTUxODMzaDMuMzU1NjcxMDhsMy4zNDM2MDAzLS4wMTE5Njk5LjY1MTgyMS0uOTgxNTMxNWMuMzYyMTIyOC0uNTM4NjQ1My43NzI1Mjg2LTEuMTczMDQ5OC45MTczNzc3LTEuNDAwNDc3OC45NjU2NjA3LTEuNTMyMTQ2NyAyLjc2NDIwMzktNC4yNjEyODI5IDIuODQ4Njk5Mi00LjI4NTIyMjcuMDYwMzUzOC0uMDIzOTM5OC4xMDg2MzY4LS4xMDc3MjkxLjEwODYzNjgtLjE3OTU0ODQgMC0uMTc5NTQ4NS41NjczMjU3LS44ODU3NzI0LjYzOTc1MDMtLjgwMTk4MzEuMDI0MTQxNS4wMzU5MDk3IDEuMzE1NzEyNyAyLjU3MzUyNzYgMi44NjA3Njk5IDUuNjYxNzYwNyAxLjU0NTA1NzIgMy4wNzYyNjMzIDIuODM2NjI4NSA1LjU4OTk0MTQgMi44NjA3Njk5IDUuNTg5OTQxNC4wODQ0OTU0IDAgLjM5ODMzNTEtLjMzNTE1NzEuMzk4MzM1MS0uNDE4OTQ2MyAwLS4wNzE4MTk0IDEuMDYyMjI2OC0xLjYwMzk2NjEgMS4yMDcwNzYtMS43MzU2MzQ5LjAzNjIxMjItLjAzNTkwOTcuMjY1NTU2Ny0uMzcxMDY2OC41MTkwNDI2LS43NDIxMzM2bC40NDY2MTgxLS42OTQyNTM5aDUuMzcxNDg3OSA1LjM3MTQ4Nzh2MS45MTUxODMzIDEuOTE1MTgzM2gtNC4zMzM0MDI2LTQuMzIxMzMxN2wtLjc3MjUyODYgMS4yMDg5NTk2Yy0uNDIyNDc2Ni42NTgzNDQyLTEuMDM4MDg1NCAxLjYwMzk2Ni0xLjM3NjA2NjYgMi4xMDY3MDE2LS4zMjU5MTA1LjUwMjczNTYtLjY1MTgyMSAxLjAwNTQ3MTMtLjcyNDI0NTYgMS4xMDEyMzA0LS4wNjAzNTM4LjEwNzcyOTEtLjM2MjEyMjcuNTYyNTg1MS0uNjYzODkxNyAxLjAxNzQ0MTItLjkxNzM3NzcgMS40MTI0NDc3LTEuMDg2MzY4NCAxLjY3NTc4NTQtMS4yMzEyMTc1IDEuOTYzMDYyOS0uMDcyNDI0NS4xNDM2Mzg3LS4xOTMxMzIxLjI2MzMzNzctLjI2NTU1NjcuMjYzMzM3Ny0uMDcyNDI0NSAwLTEuNDEyMjc4OC0yLjU2MTU1NzctMi45ODE0Nzc1LTUuNjg1NzAwNnoiIGZpbGw9IiMzOTY1OTgiLz48ZyBmaWxsPSIjNTc1NzU3Ij48cGF0aCBkPSJtOC4wMzA2OTk2MiAxNC4yMDgxNjA5di0xLjg1MzIzODRoNy43MjE4MjY1OCA3LjcyMTgyNjV2MS44NTMyMzg0IDEuODUzMjM4M2gtNy43MjE4MjY1LTcuNzIxODI2NTh6Ii8+PHBhdGggZD0ibTguMDMwNjk5NjIgOC42NDg0NDU3NXYtMS44NTMyMzgzOGg0Ljk0MTk2ODk4IDQuOTQxOTY5djEuODUzMjM4MzggMS44NTMyMzgzNWgtNC45NDE5NjktNC45NDE5Njg5OHoiLz48L2c+PC9nPjxwYXRoIGQ9Im03My43MDU2NDUyIDI3LjM2MDg4NzFjLTMuMTcwNzE0OCAwLTUuNzA2MzA3Ny0uOTk3MzAxOS03LjYwNjg1NDktMi45OTE5MzU1LTEuOTAwNTQ3MS0xLjk5NDYzMzYtMi44NTA4MDY0LTQuNjUyNTM3MS0yLjg1MDgwNjQtNy45NzM3OTAzIDAtMy4zNTg4ODc4Ljk1NDk2MzUtNi4wMjYxOTk4IDIuODY0OTE5My04LjAwMjAxNjE0IDEuOTA5OTU1OC0xLjk3NTgxNjMzIDQuNDg3ODg3LTIuOTYzNzA5NjggNy43MzM4NzEtMi45NjM3MDk2OCAzLjIyNzE2NjcgMCA1Ljc5ODA0MTUuOTg3ODkzMzUgNy43MTI3MDE2IDIuOTYzNzA5NjggMS45MTQ2NjAxIDEuOTc1ODE2MzQgMi44NzE5NzU4IDQuNjI5MDE1NjQgMi44NzE5NzU4IDcuOTU5Njc3NDQgMCAzLjQwNTkzMS0uOTU3MzE1NyA2LjA5MjA2LTIuODcxOTc1OCA4LjA1ODQ2NzdzLTQuNTMyNTc3NSAyLjk0OTU5NjgtNy44NTM4MzA2IDIuOTQ5NTk2OHptLjA1NjQ1MTYtMi44NzkwMzIzYzEuODYyOTEyNSAwIDMuMzM3Njk2Mi0uNzMxNTExNSA0LjQyNDM5NTEtMi4xOTQ1NTY0IDEuMDg2Njk5LTEuNDYzMDQ1IDEuNjMwMDQwNC0zLjQ0NTg4OCAxLjYzMDA0MDQtNS45NDg1ODg3IDAtMi40Mjc0MzE1LS41NDU2OTM1LTQuMzc0OTkyNy0xLjYzNzA5NjgtNS44NDI3NDItMS4wOTE0MDMzLTEuNDY3NzQ5MjMtMi41MzU2MDkzLTIuMjAxNjEyODYtNC4zMzI2NjEzLTIuMjAxNjEyODYtMS44MTU4NjkzIDAtMy4yNjcxMzE3LjczMzg2MzYzLTQuMzUzODMwNyAyLjIwMTYxMjg2LTEuMDg2Njk4OSAxLjQ2Nzc0OTMtMS42MzAwNDAzIDMuNDI5NDIzMi0xLjYzMDA0MDMgNS44ODUwODA3IDAgMi40MzY4NDAxLjU0MDk4OTIgNC4zOTYxNjE5IDEuNjIyOTgzOSA1Ljg3ODAyNDIgMS4wODE5OTQ3IDEuNDgxODYyMiAyLjUwNzM4MzYgMi4yMjI3ODIyIDQuMjc2MjA5NyAyLjIyMjc4MjJ6bTE0LjQwOTI3NDItMTguNTMwMjQxOWg0LjM0Njc3NDJ2MTIuODAwNDAzMmMwIDIuMDIyODU5Ni4zMzQwMDIgMy40ODM1MzA1IDEuMDAyMDE2MSA0LjM4MjA1NjVzMS43NDUyODgzIDEuMzQ3NzgyMiAzLjIzMTg1NDggMS4zNDc3ODIyYzEuNDIwNzA2MSAwIDIuNDQ4NTg1Ni0uNDI4MDg3MSAzLjA4MzY2OTQtMS4yODQyNzQyLjYzNTA4MzUtLjg1NjE4Ny45NTI2MjA1LTIuMjM0NTMzNS45NTI2MjA1LTQuMTM1MDgwNnYtMTMuMTEwODg3MWgzLjc4MjI1OXYxMi44Mjg2MjljMCAxLjkyODc3MzEtLjE4MzQ2NiAzLjM5ODg1MjUtLjU1MDQwNCA0LjQxMDI4MjMtLjM2NjkzNyAxLjAxMTQyOTgtMS4wMzQ5NDEgMS44ODg3NzMyLTIuMDA0MDMyIDIuNjMyMDU2NC0xLjMyNjYyIDEuMDI1NTQyOC0zLjEwOTUzMTggMS41MzgzMDY1LTUuMzQ4NzkwMyAxLjUzODMwNjUtMi4zOTkyMDU1IDAtNC4zMjc5NDk3LS41NDU2OTM1LTUuNzg2MjkwMy0xLjYzNzA5NjgtMS4wMDY3MjU1LS43NTI2OTE5LTEuNzEwMDExNS0xLjY0NDE0ODEtMi4xMDk4NzktMi42NzQzOTUxLS4zOTk4Njc2LTEuMDMwMjQ3MS0uNTk5Nzk4NC0yLjQ2NzM5NjctLjU5OTc5ODQtNC4zMTE0OTJ6bTIxLjQ1MTYxMyAyMC44ODcwOTY4di0yMC44ODcwOTY4aDcuODE4NTQ4YzQuMjQzMzAxIDAgNi4zNjQ5MiAxLjcyNjQ2MTIzIDYuMzY0OTIgNS4xNzk0MzU1IDAgMS4yODg5ODQ5LS4zNTk4NzYgMi40NjI2OTYzLTEuMDc5NjM3IDMuNTIxMTY5My0uNzE5NzYyIDEuMDU4NDczMS0xLjcxMDAwOCAxLjg2OTk1NjktMi45NzA3NjcgMi40MzQ0NzU4bDYuODMwNjQ2IDkuNzUyMDE2MmgtNS4yOTIzMzlsLTUuMTc5NDM2LTguNTM4MzA2NWgtMi4zOTkxOTN2OC41MzgzMDY1em00LjA5Mjc0Mi0xMS40MDMyMjU4aDEuMDAyMDE2YzMuMTUxODk3IDAgNC43Mjc4MjMtMS4yNzQ4NTI5IDQuNzI3ODIzLTMuODI0NTk2OCAwLTEuODYyOTEyNTQtMS40MDY1NzItMi43OTQzNTQ4NC00LjIxOTc1OS0yLjc5NDM1NDg0aC0xLjUxMDA4eiIgZmlsbD0iIzM5NjU5OCIvPjxwYXRoIGQ9Im02NC41NDYzNzEgNTkuODcwOTY3N3YtMjAuODg3MDk2N2g0LjM0Njc3NDJ2OC40ODE4NTQ4aDguNjM3MDk2N3YtOC40ODE4NTQ4aDQuMzQ2Nzc0MnYyMC44ODcwOTY3aC00LjM0Njc3NDJ2LTkuNTI2MjA5NmgtOC42MzcwOTY3djkuNTI2MjA5NnptMzUuMTY5MzU0OC0uNTIyMTc3NGMtMS45ODUyMjUuNTgzMzM2My0zLjg2NjkyNjYuODc1LTUuNjQ1MTYxMy44NzUtMi41ODczNzg1IDAtNC42MjkwMjQ4LS43MzM4NjM2LTYuMTI1LTIuMjAxNjEyOXMtMi4yNDM5NTE2LTMuNDcxNzYxNS0yLjI0Mzk1MTYtNi4wMTIwOTY4YzAtMi4zOTkyMDU1LjY4NDQ2OS00LjMzMDMwMTggMi4wNTM0Mjc0LTUuNzkzMzQ2NyAxLjM2ODk1ODUtMS40NjMwNDUgMy4xNzc3NDQyLTIuMTk0NTU2NSA1LjQyNjQxMTMtMi4xOTQ1NTY1IDIuMjY3NDg0NSAwIDMuOTIzMzgxOS43MTUwNDY2IDQuOTY3NzQxOSAyLjE0NTE2MTMgMS4wNDQzNjAxIDEuNDMwMTE0NyAxLjU2NjUzMjMgMy42OTI4NjA5IDEuNTY2NTMyMyA2Ljc4ODMwNjVoLTkuNjEwODg3MWMuMjgyMjU5NSAyLjk1NDMxNTggMS45MDUyMjcxIDQuNDMxNDUxNiA0Ljg2ODk1MTYgNC40MzE0NTE2IDEuNDAxODg4OCAwIDIuOTgyNTE4MS0uMzI0NTkzNiA0Ljc0MTkzNTUtLjk3Mzc5MDN6bS05LjY2NzMzODctOC43NWg1LjU2MDQ4MzljMC0yLjY0MzgzMDQtLjg1MTQ3LTMuOTY1NzI1OC0yLjU1NDQzNTUtMy45NjU3MjU4LTEuNzMxMTkxNSAwLTIuNzMzMTk3NiAxLjMyMTg5NTQtMy4wMDYwNDg0IDMuOTY1NzI1OHptMjEuNTc4NjI4OSA3LjYwNjg1NDljLTEuMzkyNDggMS4zNDU0MzY4LTIuODgzNzI4IDIuMDE4MTQ1MS00LjQ3Mzc5IDIuMDE4MTQ1MS0xLjM1NDg0NiAwLTIuNDU1NjQxLS40MTM5NzQzLTMuMzAyNDItMS4yNDE5MzU1LS44NDY3NzgtLjgyNzk2MTEtMS4yNzAxNjEtMS45MDA1MzEtMS4yNzAxNjEtMy4yMTc3NDE5IDAtMS43MTIzNzQyLjY4NDQ2OS0zLjAzMTkxNzQgMi4wNTM0MjgtMy45NTg2Njk0IDEuMzY4OTU4LS45MjY3NTE5IDMuMzI4MjgtMS4zOTAxMjA5IDUuODc4MDI0LTEuMzkwMTIwOWgxLjExNDkxOXYtMS40MTEyOTAzYzAtMS42MDg4NzkxLS45MTczMjktMi40MTMzMDY1LTIuNzUyMDE2LTIuNDEzMzA2NS0xLjYyNzY5NiAwLTMuMjc0MTg1LjQ2MTAxNjktNC45Mzk1MTYgMS4zODMwNjQ1di0yLjg3OTAzMjJjMS44OTExMzgtLjcxNTA1NzQgMy43NjM0MzEtMS4wNzI1ODA3IDUuNjE2OTM1LTEuMDcyNTgwNyA0LjA1NTEyOCAwIDYuMDgyNjYyIDEuNjEzNTU5MiA2LjA4MjY2MiA0Ljg0MDcyNTh2Ni44NTg4NzFjMCAxLjIxMzcxNTcuMzkwNDUzIDEuODIwNTY0NSAxLjE3MTM3MSAxLjgyMDU2NDUuMTQxMTI5IDAgLjMyNDU5NS0uMDE4ODE3LjU1MDQwMy0uMDU2NDUxNmwuMDk4NzkgMi4zNDI3NDE5Yy0uODg0NDEzLjI2MzQ0MjItMS42NjUzMTkuMzk1MTYxMy0yLjM0Mjc0Mi4zOTUxNjEzLTEuNzEyMzc0IDAtMi44MTMxNjktLjY3MjcwODMtMy4zMDI0MTktMi4wMTgxNDUxem0wLTIuMjQzOTUxN3YtMy4xNDcxNzc0aC0uOTg3OTAzYy0yLjcwMDI4MiAwLTQuMDUwNDAzLjg0Njc2NTgtNC4wNTA0MDMgMi41NDAzMjI2IDAgLjU3MzkyNzYuMTk1MjI2IDEuMDU2MTEzNi41ODU2ODUgMS40NDY1NzI2LjM5MDQ1OS4zOTA0NTg5Ljg3MjY0NS41ODU2ODU1IDEuNDQ2NTczLjU4NTY4NTUuOTc4NDk5IDAgMS45ODA1MDUtLjQ3NTEyOTcgMy4wMDYwNDgtMS40MjU0MDMzem05LjM5OTE5NCAzLjkwOTI3NDJ2LTIyLjI4NDI3NDJoNC4xNzc0MTl2MjIuMjg0Mjc0MnptMTcuMzg3MDk2LS4wODQ2Nzc0Yy0uOTk3MzE2LjI5MTY2ODEtMS43ODI5MjcuNDM3NS0yLjM1Njg1NC40Mzc1LTMuNjIyMzMgMC01LjQzMzQ2OC0xLjY5MzUzMTQtNS40MzM0NjgtNS4wODA2NDUxdi04LjE1NzI1ODFoLTEuNzM1ODg3di0yLjYxMDg4NzFoMS43MzU4ODd2LTIuNjEwODg3MWw0LjE3NzQxOS0uNDc5ODM4N3YzLjA5MDcyNThoMy4zMTY1MzJ2Mi42MTA4ODcxaC0zLjMxNjUzMnY3LjYwNjg1NDhjMCAxLjkwMDU0NzIuNzc2MjAyIDIuODUwODA2NSAyLjMyODYyOSAyLjg1MDgwNjUuMzU3NTI5IDAgLjc4NTYxNi0uMDY1ODU5NiAxLjI4NDI3NC0uMTk3NTgwN3ptMy43MjU4MDcuMDg0Njc3NHYtMjIuMjg0Mjc0Mmg0LjE3NzQxOXY5LjcwOTY3NzVjMS4zNjQyNTQtMi4xODI4MDY2IDMuMTIzNjQ1LTMuMjc0MTkzNiA1LjI3ODIyNi0zLjI3NDE5MzYgMS4zODMwNzEgMCAyLjQ3NDQ1OC40Mzc0OTU2IDMuMjc0MTk0IDEuMzEyNS43OTk3MzUuODc1MDA0NCAxLjE5OTU5NiAyLjA2OTg4NDkgMS4xOTk1OTYgMy41ODQ2Nzc0djEwLjk1MTYxMjloLTQuMTc3NDE5di05LjkyMTM3MDljMC0xLjc1OTQxNzQtLjU4MzMyNy0yLjYzOTExMjktMS43NS0yLjYzOTExMjktMS4zMjY2MiAwLTIuNjAxNDcyLjkzNjE0NjUtMy44MjQ1OTcgMi44MDg0Njc3djkuNzUyMDE2MXptMzAuNDEzMzA2LS4zMzg3MDk2Yy0xLjczMTE5MS40NjEwMjM4LTMuMzM1MzQyLjY5MTUzMjItNC44MTI1LjY5MTUzMjItMi40NzQ0NzQgMC00LjQyOTA5Mi0uNzI2ODA3Mi01Ljg2MzkxMS0yLjE4MDQ0MzVzLTIuMTUyMjE4LTMuNDMxNzc1MS0yLjE1MjIxOC01LjkzNDQ3NThjMC0yLjUzMDkyNjcuNzM4NTY4LTQuNTExNDE3NiAyLjIxNTcyNi01Ljk0MTUzMjNzMy41MTg4MDQtMi4xNDUxNjEzIDYuMTI1LTIuMTQ1MTYxM2MxLjI2MDc1OSAwIDIuNzE0Mzc0LjIwMjI4MjkgNC4zNjA4ODcuNjA2ODU0OXYzLjAyMDE2MTJjLTEuNzEyMzc0LS41NTUxMTAzLTMuMDgxMzEyLS44MzI2NjEyLTQuMTA2ODU1LS44MzI2NjEyLTEuMjUxMzUgMC0yLjI1ODA2LjQ3OTgzMzktMy4wMjAxNjEgMS40Mzk1MTYxLS43NjIxLjk1OTY4MjItMS4xNDMxNDUgMi4yMzQ1MzUtMS4xNDMxNDUgMy44MjQ1OTY4IDAgMS42Mjc2OTYzLjQxMTYyMiAyLjkzMDc3NDYgMS4yMzQ4NzkgMy45MDkyNzQyLjgyMzI1Ny45Nzg0OTk1IDEuOTIxNyAxLjQ2Nzc0MTkgMy4yOTUzNjMgMS40Njc3NDE5IDEuMjUxMzUgMCAyLjU0MDMxNi0uMjcyODQ2NyAzLjg2NjkzNS0uODE4NTQ4NHptMTEuNTQ0MzU1LTEuMzI2NjEyOWMtMS4zOTI0OCAxLjM0NTQzNjgtMi44ODM3MjggMi4wMTgxNDUxLTQuNDczNzkgMi4wMTgxNDUxLTEuMzU0ODQ2IDAtMi40NTU2NDEtLjQxMzk3NDMtMy4zMDI0MTktMS4yNDE5MzU1LS44NDY3NzktLjgyNzk2MTEtMS4yNzAxNjItMS45MDA1MzEtMS4yNzAxNjItMy4yMTc3NDE5IDAtMS43MTIzNzQyLjY4NDQ2OS0zLjAzMTkxNzQgMi4wNTM0MjgtMy45NTg2Njk0IDEuMzY4OTU4LS45MjY3NTE5IDMuMzI4MjgtMS4zOTAxMjA5IDUuODc4MDI0LTEuMzkwMTIwOWgxLjExNDkxOXYtMS40MTEyOTAzYzAtMS42MDg4NzkxLS45MTczMjktMi40MTMzMDY1LTIuNzUyMDE2LTIuNDEzMzA2NS0xLjYyNzY5NiAwLTMuMjc0MTg1LjQ2MTAxNjktNC45Mzk1MTYgMS4zODMwNjQ1di0yLjg3OTAzMjJjMS44OTExMzgtLjcxNTA1NzQgMy43NjM0MzItMS4wNzI1ODA3IDUuNjE2OTM1LTEuMDcyNTgwNyA0LjA1NTEyOCAwIDYuMDgyNjYyIDEuNjEzNTU5MiA2LjA4MjY2MiA0Ljg0MDcyNTh2Ni44NTg4NzFjMCAxLjIxMzcxNTcuMzkwNDUzIDEuODIwNTY0NSAxLjE3MTM3MSAxLjgyMDU2NDUuMTQxMTI5IDAgLjMyNDU5NS0uMDE4ODE3LjU1MDQwMy0uMDU2NDUxNmwuMDk4NzkgMi4zNDI3NDE5Yy0uODg0NDEzLjI2MzQ0MjItMS42NjUzMTkuMzk1MTYxMy0yLjM0Mjc0Mi4zOTUxNjEzLTEuNzEyMzc0IDAtMi44MTMxNjktLjY3MjcwODMtMy4zMDI0MTktMi4wMTgxNDUxem0wLTIuMjQzOTUxN3YtMy4xNDcxNzc0aC0uOTg3OTAzYy0yLjcwMDI4MiAwLTQuMDUwNDAzLjg0Njc2NTgtNC4wNTA0MDMgMi41NDAzMjI2IDAgLjU3MzkyNzYuMTk1MjI2IDEuMDU2MTEzNi41ODU2ODUgMS40NDY1NzI2LjM5MDQ1OS4zOTA0NTg5Ljg3MjY0NS41ODU2ODU1IDEuNDQ2NTczLjU4NTY4NTUuOTc4NDk5IDAgMS45ODA1MDUtLjQ3NTEyOTcgMy4wMDYwNDgtMS40MjU0MDMzem05LjM5OTE5NCAzLjkwOTI3NDJ2LTE1LjQ5NTk2NzdoNC4xNzc0MTl2Mi45MjEzNzFjMS4wODE5OTUtMi4xODI4MDY2IDIuNzI4NDg0LTMuMjc0MTkzNiA0LjkzOTUxNi0zLjI3NDE5MzYuMjYzNDQyIDAgLjUyMjE3Ni4wMjgyMjU1Ljc3NjIxLjA4NDY3NzR2My43MjU4MDY1Yy0uNTkyNzQ1LS4yMTYzOTg5LTEuMTQzMTQzLS4zMjQ1OTY4LTEuNjUxMjEtLjMyNDU5NjgtMS42NjUzMzEgMC0zLjAyMDE1Ni44NDIwNjE1LTQuMDY0NTE2IDIuNTI2MjA5N3Y5LjgzNjY5MzV6bTI1Ljc1NjA0OC0uNTIyMTc3NGMtMS45ODUyMjUuNTgzMzM2My0zLjg2NjkyNi44NzUtNS42NDUxNjEuODc1LTIuNTg3Mzc5IDAtNC42MjkwMjUtLjczMzg2MzYtNi4xMjUtMi4yMDE2MTI5cy0yLjI0Mzk1Mi0zLjQ3MTc2MTUtMi4yNDM5NTItNi4wMTIwOTY4YzAtMi4zOTkyMDU1LjY4NDQ2OS00LjMzMDMwMTggMi4wNTM0MjgtNS43OTMzNDY3IDEuMzY4OTU4LTEuNDYzMDQ1IDMuMTc3NzQ0LTIuMTk0NTU2NSA1LjQyNjQxMS0yLjE5NDU1NjUgMi4yNjc0ODQgMCAzLjkyMzM4Mi43MTUwNDY2IDQuOTY3NzQyIDIuMTQ1MTYxM3MxLjU2NjUzMiAzLjY5Mjg2MDkgMS41NjY1MzIgNi43ODgzMDY1aC05LjYxMDg4N2MuMjgyMjYgMi45NTQzMTU4IDEuOTA1MjI3IDQuNDMxNDUxNiA0Ljg2ODk1MiA0LjQzMTQ1MTYgMS40MDE4ODggMCAyLjk4MjUxOC0uMzI0NTkzNiA0Ljc0MTkzNS0uOTczNzkwM3ptLTkuNjY3MzM5LTguNzVoNS41NjA0ODRjMC0yLjY0MzgzMDQtLjg1MTQ3LTMuOTY1NzI1OC0yLjU1NDQzNS0zLjk2NTcyNTgtMS43MzExOTIgMC0yLjczMzE5OCAxLjMyMTg5NTQtMy4wMDYwNDkgMy45NjU3MjU4em0xOC4yNjIwOTcgOS4yNzIxNzc0di0yMC44ODcwOTY3aDQuMzQ2Nzc0djguNDgxODU0OGg4LjYzNzA5N3YtOC40ODE4NTQ4aDQuMzQ2Nzc0djIwLjg4NzA5NjdoLTQuMzQ2Nzc0di05LjUyNjIwOTZoLTguNjM3MDk3djkuNTI2MjA5NnptMjIuNTUyNDIgMHYtMjAuODg3MDk2N2g0LjE3NzQxOXYxMC4xMzMwNjQ1bDcuOTg3OTAzLTEwLjEzMzA2NDVoMy42MTI5MDNsLTcuMjM5OTE5IDkuMzcwOTY3NyA4Ljk4OTkxOSAxMS41MTYxMjloLTUuNDMzNDY3bC03LjkxNzMzOS0xMC4yNzQxOTM1djEwLjI3NDE5MzV6IiBmaWxsPSIjNGE0YTRhIi8+PC9nPjwvc3ZnPg=="},169:function(M,N,j){"use strict";var z=j(170),D=j(0),T=j.n(D),t=j(1),L=j.n(t),O=j(175),e=j.n(O),u=j(36);function y(M){var N=M.description,j=M.lang,D=M.meta,t=M.keywords,L=M.title;return T.a.createElement(u.StaticQuery,{query:g,render:function(M){var z=N||M.site.siteMetadata.description;return T.a.createElement(e.a,{htmlAttributes:{lang:j},title:L,titleTemplate:"%s | "+M.site.siteMetadata.title,meta:[{name:"description",content:z},{property:"og:title",content:L},{property:"og:description",content:z},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:M.site.siteMetadata.author},{name:"twitter:title",content:L},{name:"twitter:description",content:z}].concat(t.length>0?{name:"keywords",content:t.join(", ")}:[]).concat(D)})},data:z})}y.defaultProps={lang:"en",meta:[],keywords:[]},y.propTypes={description:L.a.string,lang:L.a.string,meta:L.a.array,keywords:L.a.arrayOf(L.a.string),title:L.a.string.isRequired},N.a=y;var g="1025518380"},170:function(M){M.exports={data:{site:{siteMetadata:{title:"Our Healthcare HK",description:"Raising awareness for the healthcare system in Hong Kong",author:"OurHealthcareHK"}}}}}}]);
//# sourceMappingURL=component---src-pages-data-flu-express-js-643d1f6d29aee5b7dd80.js.map
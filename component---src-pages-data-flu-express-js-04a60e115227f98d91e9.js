(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{150:function(M,t,L){"use strict";L.r(t);L(26);var N=L(8),j=L.n(N),e=L(0),u=L.n(e),i=L(163),a=L(166),T=L(180),D=L.n(T),y=L(404),z=L.n(y),I=L(194),g=L.n(I),n=L(204),c=L.n(n),r=(L(159),L(158)),S=function(M){j()(L,M);var t=L.prototype;function L(){var t;return(t=M.call(this)||this).state={labsurveillance:{},outbreaks:{}},t.state.labsurveillance.series=Object.assign({series:{}},t.settings),t.state.outbreaks.series=Object.assign({series:{}},t.settings),t.settings={rangeSelector:{buttons:[{type:"month",count:3,text:"三個月"},{type:"month",count:6,text:"六個月"},{type:"year",count:1,text:"一年"},{type:"all",text:"全部"}]},time:{useUTC:!1},yAxis:{plotLines:[{value:0,width:2,color:"silver"}]},tooltip:{pointFormat:'<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b>)<br/>',split:!0}},t}return t.fetchFLUExpress=function(){var M=this;D.a.get("https://ourhealthcarehk.github.io/api/FLUEXPRESS.json").then(function(t){var L=t.data;if(console.log(L),L){for(var N=[],j=[],e=6;e<10;e++){var u=e-6;N[u]={name:["A(H1)甲型(H1)","A(H3)甲型(H3)","B乙型","C丙型"][u],data:[]};for(var i=3;i<L.length;i++)0!==L[i][3].length&&N[u].data.push([g()(L[i][3],"DD/MM/YYYY").valueOf(),parseInt(L[i][e])])}for(e=16;e<17;e++)for(j[0]={name:"學校/院舍爆發宗數",data:[]},i=3;i<L.length;i++)0!==L[i][3].length&&j[0].data.push([g()(L[i][3],"DD/MM/YYYY").valueOf(),parseInt(L[i][e])]);M.state.labsurveillance.series=N,M.state.outbreaks.series=j,M.setState(M.state)}}).catch(function(t){M.setState({loading:!1,error:t})})},t.componentDidMount=function(){this.fetchFLUExpress()},t.render=function(){return u.a.createElement(i.a,null,u.a.createElement(a.a,{title:"本地流感流行情況",description:"衛生署每週更新的流感監測數據，用以衡量流感流行程度及對公共醫療系統的影響。"}),u.a.createElement(r.i.Content,{title:"本地流感流行情況"},u.a.createElement(r.b,{title:"實驗室監測"},u.a.createElement(r.b.Body,null,"        ",u.a.createElement("p",null,"公共衞生化驗服務處所收集的呼吸道樣本中，季節性流感病毒陽性百分比。當中分別顯示季節性流感病毒的甲型(H1)、甲型(H3)、乙型及丙型流感株類。"),u.a.createElement(c.a,{style:{width:"100%",minHeight:"100px"},highcharts:z.a,constructorType:"stockChart",options:this.state.labsurveillance}))),u.a.createElement(r.b,{title:"流感樣疾病爆發監測"},u.a.createElement(r.b.Body,null,u.a.createElement(c.a,{style:{width:"100%",minHeight:"100px"},highcharts:z.a,constructorType:"stockChart",options:this.state.outbreaks})))))},L}(u.a.Component);t.default=S},163:function(M,t,L){"use strict";var N=L(164),j=L(0),e=L.n(j),u=L(1),i=L.n(u),a=L(36),T=(L(159),L(158)),D=L(165),y=L.n(D),z=[{value:"主頁",to:"/",icon:"home",useExact:!0},{value:"公共衛生實況",icon:"bar-chart-2",subItems:[{value:"急症傳染病症狀監測",to:"/data/AEDsurveillance"},{value:"本地流感流行情況",to:"/data/FLUExpress"}]},{value:"醫療服務實況",icon:"eye",subItems:[{value:"私立醫院門診收費一覽",to:"/data/privateOPDprice"}]},{value:"醫療服務地圖",icon:"map",subItems:[{value:"普通科診所地圖",to:"/data/GOPCmap"}]}],I=function(M){var t=M.children;return e.a.createElement(a.StaticQuery,{query:"3356484219",render:function(M){return e.a.createElement(T.j.Wrapper,{headerProps:{href:"/",imageURL:y.a,alt:M.site.siteMetadata.title},navProps:{itemsObjects:z},footerProps:{links:[e.a.createElement("a",{href:"#"},"First Link"),e.a.createElement("a",{href:"#"},"Second Link"),e.a.createElement("a",{href:"#"},"Third Link"),e.a.createElement("a",{href:"#"},"Fourth Link"),e.a.createElement("a",{href:"#"},"Five Link"),e.a.createElement("a",{href:"#"},"Sixth Link"),e.a.createElement("a",{href:"#"},"Seventh Link"),e.a.createElement("a",{href:"#"},"Eigth Link")],note:M.site.siteMetadata.description,copyright:e.a.createElement(e.a.Fragment,null,"Copyright © 2019 ",M.site.siteMetadata.author,". Theme by",e.a.createElement("a",{href:"https://codecalm.net",target:"_blank",rel:"noopener noreferrer"}," ","codecalm.net")," ","All rights reserved."),nav:e.a.createElement(e.a.Fragment,null,e.a.createElement(T.f.Col,{auto:!0},e.a.createElement(T.h,{className:"list-inline list-inline-dots mb-0"},e.a.createElement(T.h.Item,{className:"list-inline-item"},e.a.createElement(a.Link,{to:"/about/"},"關於我們")),e.a.createElement(T.h.Item,{className:"list-inline-item"},e.a.createElement(a.Link,{to:"/faq/"},"常見問題")))))}},e.a.createElement("main",null,t))},data:N})};I.propTypes={children:i.a.node.isRequired},t.a=I},164:function(M){M.exports={data:{site:{siteMetadata:{title:"Our Healthcare HK",author:"OurHealthcareHK",description:"Raising awareness for the healthcare system in Hong Kong"}}}}},165:function(M,t){M.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjYzIiB2aWV3Qm94PSIwIDAgMjY4IDYzIiB3aWR0aD0iMjY4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJtMTguNjI1IDEuNjczYy0xLjI0NyAxLjYzNC0zLjMxMyAyLjk2LTUuNzQ2IDMuNzA2bC0uOTU0LjI4NXY5LjUzaDIzLjQ3NHYtOS41M2wtLjk1My0uMjk2Yy0yLjQ4Mi0uNzctNC40NzUtMi4wNDktNS43NTktMy43MDZsLS41MjYtLjY3NWgtOC45OTl6bTYuMTUgMi41MjJjLjUuMzQ0LjcyMS44MTcuNzMzIDEuNTc1LjAyNSAxLjAwNy0uNTg3IDEuNjgxLTEuNjI2IDEuNzc2LS42ODUuMDYtMS40NDMtLjI2LTEuODEtLjc1OC0uNTM3LS43MjItLjMwNS0yLjA0OC40NTMtMi41OTMuNDg5LS4zNDMgMS43NDgtLjM0MyAyLjI1IDB6IiBmaWxsPSIjNTc1NzU3Ii8+PHBhdGggZD0ibTEuNjcyIDcuNDIyLTEuNDg0IDEuNDh2NTEuODM2bC45ODkgMS4wMTIuOTkgMS4wMTFoNDIuMzczbC45OS0xLjAxMS45ODktMS4wMTJ2LTUxLjgzNWwtMS40NzItMS40ODEtMS40ODQtMS40OTNoLTYuNjk3djMuODUzaDUuMDJsLjM4Ni4zOTcuMzg2LjM5N3Y0OC40MDRsLS40NTkuNDQ2LS40NTguNDQ1aC0zNi44MDFsLS40NDYtLjQ1Ny0uNDQ2LS40NTh2LTQ4LjQwNGwuMzk4LS4zODUuMzk4LS4zODVoNC45OTZ2LTMuODUzaC02LjY5NnoiIGZpbGw9IiM1NzU3NTciLz48cGF0aCBkPSJtMjIuNDUgMjcuMDUtMi44NSA1LjY3Mi0uNTgtLjg1Yy0uMzI1LS40NTUtLjY2My0uOTEtLjc0OC0uOTkzLS4wODQtLjA5Ni0uMTU3LS4xOTItLjE1Ny0uMjI4cy0uMjUzLS40MTktLjU1NS0uODVsLS41NTUtLjc3OGgtOC43ODd2My44MzFoMy4zNTZsMy4zNDQuMDEyLjY1MS45ODFjLjM2My41MzkuNzczIDEuMTczLjkxOCAxLjQuOTY2IDEuNTMzIDIuNzY0IDQuMjYyIDIuODQ5IDQuMjg2LjA2LjAyNC4xMDguMTA4LjEwOC4xOCAwIC4xOC41NjguODg1LjY0LjgwMmE1ODkuMiA1ODkuMiAwIDAgMCAyLjg2LTUuNjYyYzEuNTQ2LTMuMDc2IDIuODM3LTUuNTkgMi44NjEtNS41OS4wODUgMCAuMzk5LjMzNS4zOTkuNDE5IDAgLjA3MiAxLjA2MiAxLjYwNCAxLjIwNyAxLjczNS4wMzYuMDM2LjI2NS4zNzEuNTE5Ljc0M2wuNDQ3LjY5NGgxMC43NDN2LTMuODMxaC04LjY1NWwtLjc3My0xLjIwOWExNDYuNjI1IDE0Ni42MjUgMCAwIDAgLTEuMzc2LTIuMTA2Yy0uMzI2LS41MDMtLjY1Mi0xLjAwNi0uNzI0LTEuMTAxLS4wNi0uMTA4LS4zNjItLjU2My0uNjY0LTEuMDE4LS45MTctMS40MTItMS4wODYtMS42NzYtMS4yMzEtMS45NjMtLjA3My0uMTQ0LS4xOTMtLjI2My0uMjY2LS4yNjMtLjA3MiAwLTEuNDEyIDIuNTYxLTIuOTgxIDUuNjg1eiIgZmlsbD0iIzM5NjU5OCIvPjxwYXRoIGQ9Im04LjIxOCA0OC41NTN2MS44NTNoMTUuNDQ0di0zLjcwNmgtMTUuNDQ0em0wIDUuNTZ2MS44NTNoOS44ODR2LTMuNzA2aC05Ljg4NHoiIGZpbGw9IiM1NzU3NTciLz48L2c+PHBhdGggZD0ibTczLjcwNiAyNy4zNmMtMy4xNzEgMC01LjcwNy0uOTk2LTcuNjA3LTIuOTkxcy0yLjg1MS00LjY1My0yLjg1MS03Ljk3NGMwLTMuMzU5Ljk1NS02LjAyNiAyLjg2NS04LjAwMnM0LjQ4OC0yLjk2NCA3LjczNC0yLjk2NGMzLjIyNyAwIDUuNzk4Ljk4OCA3LjcxMiAyLjk2NCAxLjkxNSAxLjk3NiAyLjg3MiA0LjYzIDIuODcyIDcuOTYgMCAzLjQwNi0uOTU3IDYuMDkyLTIuODcyIDguMDU4cy00LjUzMiAyLjk1LTcuODUzIDIuOTV6bS4wNTYtMi44NzhjMS44NjMgMCAzLjMzOC0uNzMyIDQuNDI0LTIuMTk1IDEuMDg3LTEuNDYzIDEuNjMtMy40NDYgMS42My01Ljk0OCAwLTIuNDI4LS41NDUtNC4zNzUtMS42MzctNS44NDMtMS4wOTEtMS40NjgtMi41MzUtMi4yMDItNC4zMzItMi4yMDItMS44MTYgMC0zLjI2Ny43MzQtNC4zNTQgMi4yMDJzLTEuNjMgMy40My0xLjYzIDUuODg1YzAgMi40MzcuNTQgNC4zOTYgMS42MjMgNS44NzggMS4wODIgMS40ODIgMi41MDcgMi4yMjMgNC4yNzYgMi4yMjN6bTE0LjQxLTE4LjUzaDQuMzQ2djEyLjhjMCAyLjAyMy4zMzQgMy40ODQgMS4wMDIgNC4zODJzMS43NDUgMS4zNDggMy4yMzIgMS4zNDhjMS40MiAwIDIuNDQ5LS40MjggMy4wODQtMS4yODQuNjM1LS44NTcuOTUyLTIuMjM1Ljk1Mi00LjEzNXYtMTMuMTEyaDMuNzgzdjEyLjgyOWMwIDEuOTI5LS4xODQgMy40LS41NSA0LjQxLS4zNjggMS4wMTItMS4wMzYgMS44OS0yLjAwNSAyLjYzMy0xLjMyNiAxLjAyNS0zLjExIDEuNTM4LTUuMzQ5IDEuNTM4LTIuMzk5IDAtNC4zMjgtLjU0Ni01Ljc4Ni0xLjYzNy0xLjAwNy0uNzUzLTEuNzEtMS42NDQtMi4xMS0yLjY3NS0uNC0xLjAzLS42LTIuNDY3LS42LTQuMzExem0yMS40NTEgMjAuODg3di0yMC44ODdoNy44MTljNC4yNDMgMCA2LjM2NCAxLjcyNiA2LjM2NCA1LjE3OSAwIDEuMjg5LS4zNiAyLjQ2My0xLjA4IDMuNTIxLS43MTkgMS4wNTktMS43MSAxLjg3LTIuOTcgMi40MzVsNi44MyA5Ljc1MmgtNS4yOTJsLTUuMTgtOC41MzloLTIuMzk4djguNTM5em00LjA5My0xMS40MDRoMS4wMDJjMy4xNTIgMCA0LjcyOC0xLjI3NCA0LjcyOC0zLjgyNCAwLTEuODYzLTEuNDA3LTIuNzk0LTQuMjItMi43OTRoLTEuNTF6IiBmaWxsPSIjMzk2NTk4Ii8+PHBhdGggZD0ibTY0LjU0NiA1OS44NzF2LTIwLjg4N2g0LjM0N3Y4LjQ4Mmg4LjYzN3YtOC40ODJoNC4zNDd2MjAuODg2aC00LjM0N3YtOS41MjZoLTguNjM3djkuNTI2em0zNS4xNy0uNTIyYy0xLjk4NS41ODMtMy44NjcuODc1LTUuNjQ1Ljg3NS0yLjU4OCAwLTQuNjMtLjczNC02LjEyNS0yLjIwMnMtMi4yNDQtMy40NzItMi4yNDQtNi4wMTJjMC0yLjQuNjg0LTQuMzMgMi4wNTMtNS43OTNzMy4xNzgtMi4xOTUgNS40MjYtMi4xOTVjMi4yNjggMCAzLjkyNC43MTUgNC45NjggMi4xNDUgMS4wNDUgMS40MyAxLjU2NyAzLjY5MyAxLjU2NyA2Ljc4OWgtOS42MTFjLjI4MiAyLjk1NCAxLjkwNSA0LjQzMSA0Ljg2OSA0LjQzMSAxLjQwMiAwIDIuOTgyLS4zMjQgNC43NDItLjk3NHptLTkuNjY4LTguNzVoNS41NmMwLTIuNjQ0LS44NS0zLjk2Ni0yLjU1NC0zLjk2Ni0xLjczIDAtMi43MzMgMS4zMjItMy4wMDYgMy45NjZ6bTIxLjU3OSA3LjYwN2MtMS4zOTIgMS4zNDUtMi44ODQgMi4wMTgtNC40NzQgMi4wMTgtMS4zNTUgMC0yLjQ1NS0uNDE0LTMuMzAyLTEuMjQycy0xLjI3LTEuOS0xLjI3LTMuMjE4YzAtMS43MTIuNjg0LTMuMDMyIDIuMDUzLTMuOTU5IDEuMzY5LS45MjYgMy4zMjgtMS4zOSA1Ljg3OC0xLjM5aDEuMTE1di0xLjQxMWMwLTEuNjA5LS45MTctMi40MTMtMi43NTItMi40MTMtMS42MjggMC0zLjI3NC40Ni00Ljk0IDEuMzgzdi0yLjg4YzEuODkyLS43MTQgMy43NjQtMS4wNzIgNS42MTctMS4wNzIgNC4wNTYgMCA2LjA4MyAxLjYxNCA2LjA4MyA0Ljg0djYuODZjMCAxLjIxMy4zOSAxLjgyIDEuMTcxIDEuODIuMTQyIDAgLjMyNS0uMDE4LjU1LS4wNTZsLjEgMi4zNDNjLS44ODUuMjYzLTEuNjY2LjM5NS0yLjM0My4zOTUtMS43MTIgMC0yLjgxMy0uNjczLTMuMzAzLTIuMDE4em0wLTIuMjQ0di0zLjE0N2gtLjk4OGMtMi43IDAtNC4wNS44NDYtNC4wNSAyLjU0IDAgLjU3NC4xOTUgMS4wNTYuNTg1IDEuNDQ2cy44NzMuNTg2IDEuNDQ3LjU4NmMuOTc4IDAgMS45OC0uNDc1IDMuMDA2LTEuNDI1em05LjQgMy45MDl2LTIyLjI4NGg0LjE3N3YyMi4yODN6bTE3LjM4Ni0uMDg1Yy0uOTk3LjI5Mi0xLjc4My40MzgtMi4zNTcuNDM4LTMuNjIyIDAtNS40MzMtMS42OTQtNS40MzMtNS4wOHYtOC4xNThoLTEuNzM2di0yLjYxMWgxLjczNnYtMi42MWw0LjE3Ny0uNDh2My4wOWgzLjMxN3YyLjYxaC0zLjMxN3Y3LjYwOGMwIDEuOS43NzcgMi44NSAyLjMyOSAyLjg1LjM1OCAwIC43ODYtLjA2NSAxLjI4NC0uMTk3em0zLjcyNi4wODV2LTIyLjI4NGg0LjE3OHY5LjcxYzEuMzY0LTIuMTgzIDMuMTIzLTMuMjc1IDUuMjc4LTMuMjc1IDEuMzgzIDAgMi40NzQuNDM4IDMuMjc0IDEuMzEzczEuMiAyLjA3IDEuMiAzLjU4NHYxMC45NTJoLTQuMTc4di05LjkyMWMwLTEuNzYtLjU4My0yLjY0LTEuNzUtMi42NC0xLjMyNiAwLTIuNjAxLjkzNy0zLjgyNCAyLjgwOXY5Ljc1MnptMzAuNDEzLS4zMzljLTEuNzMuNDYxLTMuMzM1LjY5Mi00LjgxMi42OTItMi40NzUgMC00LjQzLS43MjctNS44NjQtMi4xOHMtMi4xNTItMy40MzItMi4xNTItNS45MzVjMC0yLjUzMS43MzgtNC41MTIgMi4yMTYtNS45NDJzMy41MTgtMi4xNDUgNi4xMjUtMi4xNDVjMS4yNiAwIDIuNzE0LjIwMiA0LjM2LjYwN3YzLjAyYy0xLjcxMi0uNTU1LTMuMDgtLjgzMi00LjEwNi0uODMyLTEuMjUyIDAtMi4yNTkuNDgtMy4wMiAxLjQzOS0uNzYzLjk2LTEuMTQ0IDIuMjM1LTEuMTQ0IDMuODI1IDAgMS42MjcuNDEyIDIuOTMgMS4yMzUgMy45MDkuODIzLjk3OCAxLjkyMiAxLjQ2OCAzLjI5NSAxLjQ2OCAxLjI1MiAwIDIuNTQtLjI3MyAzLjg2Ny0uODE5em0xMS41NDUtMS4zMjZjLTEuMzkzIDEuMzQ1LTIuODg0IDIuMDE4LTQuNDc0IDIuMDE4LTEuMzU1IDAtMi40NTYtLjQxNC0zLjMwMi0xLjI0Mi0uODQ3LS44MjgtMS4yNy0xLjktMS4yNy0zLjIxOCAwLTEuNzEyLjY4NC0zLjAzMiAyLjA1My0zLjk1OSAxLjM2OS0uOTI2IDMuMzI4LTEuMzkgNS44NzgtMS4zOWgxLjExNXYtMS40MTFjMC0xLjYwOS0uOTE4LTIuNDEzLTIuNzUyLTIuNDEzLTEuNjI4IDAtMy4yNzQuNDYtNC45NCAxLjM4M3YtMi44OGMxLjg5MS0uNzE0IDMuNzY0LTEuMDcyIDUuNjE3LTEuMDcyIDQuMDU1IDAgNi4wODMgMS42MTQgNi4wODMgNC44NHY2Ljg2YzAgMS4yMTMuMzkgMS44MiAxLjE3MSAxLjgyLjE0MSAwIC4zMjUtLjAxOC41NS0uMDU2bC4xIDIuMzQzYy0uODg1LjI2My0xLjY2Ni4zOTUtMi4zNDMuMzk1LTEuNzEzIDAtMi44MTQtLjY3My0zLjMwMy0yLjAxOHptMC0yLjI0NHYtMy4xNDdoLS45ODhjLTIuNyAwLTQuMDUuODQ2LTQuMDUgMi41NCAwIC41NzQuMTk1IDEuMDU2LjU4NSAxLjQ0NnMuODczLjU4NiAxLjQ0Ny41ODZjLjk3OCAwIDEuOTgtLjQ3NSAzLjAwNi0xLjQyNXptOS4zOTkgMy45MDl2LTE1LjQ5Nmg0LjE3N3YyLjkyMWMxLjA4Mi0yLjE4MiAyLjcyOS0zLjI3NCA0Ljk0LTMuMjc0LjI2MyAwIC41MjIuMDI4Ljc3Ni4wODV2My43MjZjLS41OTMtLjIxNy0xLjE0My0uMzI1LTEuNjUxLS4zMjUtMS42NjUgMC0zLjAyLjg0Mi00LjA2NSAyLjUyNnY5LjgzN3ptMjUuNzU2LS41MjJjLTEuOTg1LjU4My0zLjg2Ny44NzUtNS42NDUuODc1LTIuNTg4IDAtNC42My0uNzM0LTYuMTI1LTIuMjAycy0yLjI0NC0zLjQ3Mi0yLjI0NC02LjAxMmMwLTIuNC42ODQtNC4zMyAyLjA1My01Ljc5MyAxLjM3LTEuNDYzIDMuMTc4LTIuMTk1IDUuNDI3LTIuMTk1IDIuMjY3IDAgMy45MjMuNzE1IDQuOTY3IDIuMTQ1czEuNTY3IDMuNjkzIDEuNTY3IDYuNzg5aC05LjYxYy4yODEgMi45NTQgMS45MDQgNC40MzEgNC44NjggNC40MzEgMS40MDIgMCAyLjk4My0uMzI0IDQuNzQyLS45NzR6bS05LjY2Ny04Ljc1aDUuNTZjMC0yLjY0NC0uODUxLTMuOTY2LTIuNTU0LTMuOTY2LTEuNzMxIDAtMi43MzMgMS4zMjItMy4wMDYgMy45NjZ6bTE4LjI2MiA5LjI3MnYtMjAuODg3aDQuMzQ3djguNDgyaDguNjM3di04LjQ4Mmg0LjM0NnYyMC44ODZoLTQuMzQ2di05LjUyNmgtOC42Mzd2OS41MjZ6bTIyLjU1MiAwdi0yMC44ODdoNC4xNzh2MTAuMTMzbDcuOTg4LTEwLjEzM2gzLjYxMmwtNy4yNCA5LjM3IDguOTkgMTEuNTE3aC01LjQzM2wtNy45MTctMTAuMjc0djEwLjI3M3oiIGZpbGw9IiM0YTRhNGEiLz48L2c+PC9zdmc+"},166:function(M,t,L){"use strict";var N=L(167),j=L(0),e=L.n(j),u=L(1),i=L.n(u),a=L(172),T=L.n(a),D=L(36);function y(M){var t=M.description,L=M.lang,j=M.meta,u=M.keywords,i=M.title,a=M.JSONLD;return e.a.createElement(D.StaticQuery,{query:z,render:function(M){var N=t||M.site.siteMetadata.description,D=[{"@context":"http://schema.org","@type":"WebSite",name:i}];return a&&(D=D.concat(a)),e.a.createElement(T.a,{htmlAttributes:{lang:L},title:i,titleTemplate:"%s | "+M.site.siteMetadata.title,meta:[{name:"description",content:N},{property:"og:title",content:i},{property:"og:description",content:N},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:M.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:N}].concat(u.length>0?{name:"keywords",content:u.join(", ")}:[]).concat(j)},e.a.createElement("script",{type:"application/ld+json"},JSON.stringify(D)))},data:N})}y.defaultProps={lang:"en",meta:[],keywords:[]},y.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},t.a=y;var z="1025518380"},167:function(M){M.exports={data:{site:{siteMetadata:{title:"Our Healthcare HK",description:"Raising awareness for the healthcare system in Hong Kong",author:"OurHealthcareHK"}}}}}}]);
//# sourceMappingURL=component---src-pages-data-flu-express-js-04a60e115227f98d91e9.js.map
import{g as U}from"./ak.69873e04.js";import{i as T,D as k,C as x}from"./CustomCard.0820b00e.js";import{d as A,b as d,v as $,k as g,_ as D,o as B,c as E,r as _,a as m,w as h,h as o,t as C,F as S,f as v,n as O,x as f,y,i as N,z as J,j as R}from"./index.8c7dda5f.js";import{u as L}from"./useBasisStoreLogic.59c0ed0c.js";import{h as V}from"./moment.9709ab41.js";import{s as G,a as W,b as H,c as z}from"./study.18f9fbeb.js";import{u as b}from"./school.3e6309b7.js";import{r as X}from"./request.ccb502ba.js";import"./user.a19d5d5c.js";const Y=A({name:"StackedColumnChart",props:{echartsData:{type:Object,default:()=>null}},setup(e){const u=d(e.echartsData);$(()=>{const a=document.querySelector("#stackedColumnChart");let i=T(a),t={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{bottom:-4},grid:{top:"10%",left:"3%",right:"4%",bottom:"6%",containLabel:!0},xAxis:[{type:"category",data:u.value.dateList}],yAxis:[{type:"value",axisLabel:{formatter:function(n){return Math.floor(n)/1e3+"k"}}}],series:[{name:"\u6BCF\u6708\u4E00\u8BFE",type:"bar",barWidth:16,stack:"Search Engine",emphasis:{focus:"series"},itemStyle:{color:"#0066FF"},data:u.value.dataList?u.value.dataList.monthy:[]},{name:"\u6BCF\u5468\u4E00\u7EC3",type:"bar",stack:"Search Engine",emphasis:{focus:"series"},itemStyle:{color:"#00B2FF"},data:u.value.dataList?u.value.dataList.weekly:[]},{name:"\u6BCF\u65E5\u4E00\u5B66",type:"bar",stack:"Search Engine",emphasis:{focus:"series"},itemStyle:{color:"#81E2FF",borderRadius:[2,2,0,0]},data:u.value.dataList?u.value.dataList.daily:[]}]};g(()=>{u.value=e.echartsData,console.log("echartsDataRef.value :>> ",u.value),t={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{bottom:-4},grid:{top:"10%",left:"3%",right:"0%",bottom:"6%",containLabel:!0},xAxis:[{type:"category",data:u.value.dateList}],yAxis:[{type:"value",axisLabel:{formatter:function(n){return Math.floor(n)/1e3+"k"}}}],series:[{name:"\u6BCF\u6708\u4E00\u8BFE",type:"bar",barWidth:16,stack:"Search Engine",emphasis:{focus:"series"},itemStyle:{color:"#0066FF"},data:u.value.dataList?u.value.dataList.monthy:[]},{name:"\u6BCF\u5468\u4E00\u7EC3",type:"bar",stack:"Search Engine",emphasis:{focus:"series"},itemStyle:{color:"#00B2FF"},data:u.value.dataList?u.value.dataList.weekly:[]},{name:"\u6BCF\u65E5\u4E00\u5B66",type:"bar",stack:"Search Engine",emphasis:{focus:"series"},itemStyle:{color:"#81E2FF",borderRadius:[2,2,0,0]},data:u.value.dataList?u.value.dataList.Daily:[]}]},i=T(a),t&&i.setOption(t)}),t&&i.setOption(t)})}});const K={id:"stackedColumnChart",class:"stacked-column-chart-container"};function Z(e,u,a,i,t,n){return B(),E("div",K)}const q=D(Y,[["render",Z],["__scopeId","data-v-be6394d6"]]),Q=A({name:"LearningSituationPanel",components:{StackedColumnChart:q},props:{username:{type:String,default:"Admin"},listData:{type:Object,default:()=>null},echartsData:{type:Object,default:()=>null}},setup(e){const u=d(e.username),a=d(e.listData),i=d(e.echartsData),t=d({daily:{icon:"hours_icon_img.png",title:"\u6BCF\u65E5\u4EFB\u52A1\u5B8C\u6210\u4EBA\u6570",total:324,tagLabel:"\u8F83\u6628\u5929",tag:"+100"},weekly:{icon:"week_calendar_icon_img.png",title:"\u6BCF\u5468\u4EFB\u52A1\u5B8C\u6210\u4EBA\u6570",total:120,tagLabel:"\u8F83\u6628\u65E5",tag:"-20"},monthy:{icon:"month_calendar_icon_img.png",title:"\u6BCF\u6708\u4EFB\u52A1\u5B8C\u6210\u4EBA\u6570",total:12,tagLabel:"\u8F83\u6628\u5929",tag:"+2"}}),n=(s,r)=>{const l=r-s;return l>0?`+${l}`:l};return g(()=>{a.value=e.listData,a.value&&(t.value.daily.total=a.value.daily,t.value.daily.tag=n(a.value.yesterday,a.value.daily),t.value.weekly.total=a.value.weekly_today,t.value.weekly.tag=n(a.value.weekly_yesterday,a.value.weekly_today),t.value.monthy.total=a.value.monthy_today,t.value.monthy.tag=n(a.value.monthy_yesterday,a.value.monthy_today)),i.value=e.echartsData}),{getImageUrl:U,completeNumberRef:t,usernameRef:u,echartsDataRef:i}}});const ee=e=>(f("data-v-0f3b85c1"),e=e(),y(),e),ue={class:"learning-situation-panel-container"},te={class:"card-content-box"},ae={class:"user-info-box flex-start"},oe={class:"complete-number-ul flex-start"},ne={class:"complete-number-icon-box"},se={class:"complete-number-content-box"},re={class:"complete-number-title-style"},ie={class:"complete-number-box flex-start align-end"},le={class:"complete-number-total-style"},me={class:"learning-situation-box"},ce=ee(()=>o("p",{class:"learning-situation-title-style"},"\u5B66\u4E60\u60C5\u51B5\u770B\u677F",-1));function _e(e,u,a,i,t,n){const s=_("el-image"),r=_("StackedColumnChart"),l=_("el-card");return B(),E("div",ue,[m(l,{class:"el-card-style","body-style":{padding:"0px"}},{default:h(()=>[o("div",te,[o("header",null,[o("div",ae,[m(s,{class:"welcome-icon-style",src:e.getImageUrl("welcome_icon_img.png")},null,8,["src"]),o("p",null,"\u6B22\u8FCE\u56DE\u6765\uFF0C"+C(e.usernameRef),1)])]),o("article",null,[o("ul",oe,[(B(!0),E(S,null,v(e.completeNumberRef,(c,p)=>(B(),E("li",{key:p,class:"complete-number-li flex-start"},[o("div",ne,[m(s,{class:"complete-number-icon-style",src:e.getImageUrl(c.icon)},null,8,["src"])]),o("div",se,[o("p",re,C(c.title),1),o("div",ie,[o("p",le,C(c.total),1),o("p",{class:O(["complete-number-tag-style",{"reduce-tag-style":parseInt(c.tag)<0,"increase-tag-style":parseInt(c.tag)>=0}])},C(c.tagLabel)+C(c.tag),3)])])]))),128))]),o("div",me,[ce,m(r,{echartsData:e.echartsDataRef},null,8,["echartsData"])])])])]),_:1})])}const de=D(Q,[["render",_e],["__scopeId","data-v-0f3b85c1"]]),pe=A({name:"WarningPanel",setup(e){return{getImageUrl:U,tableData:[{name:"\u5F6D\u6446\u9C7C"},{name:"\u5F6D\u6446\u9C7C"},{name:"\u5F6D\u6446\u9C7C"},{name:"\u5F6D\u6446\u9C7C"}]}}});const M=e=>(f("data-v-98134ea5"),e=e(),y(),e),Be={class:"warning-panel-container"},Ee={class:"warning-panel-title-style flex-start"},he=M(()=>o("p",{class:"warning-title-style"},"\u9884\u8B66\u5B66\u5458",-1)),Fe=M(()=>o("p",{class:"warning-title-number-style"},"(56)",-1)),Ce={class:"warning-panel-table-box"},De={class:"flex-start"},Ae={class:"warning-panel-name-style"},ge=M(()=>o("div",{class:"warning-panel-tag-style"},"\u4E25\u91CD\u9884\u8B66",-1)),be=N("\u901A\u77E5\u6559\u5E08");function fe(e,u,a,i,t,n){const s=_("el-image"),r=_("el-table-column"),l=_("el-button"),c=_("el-table"),p=_("el-card");return B(),E("div",Be,[m(p,{class:"el-card-style","body-style":{padding:0}},{default:h(()=>[o("div",Ee,[m(s,{class:"warning-panel-title-icon-style",src:e.getImageUrl("warning_icon_img.png")},null,8,["src"]),he,Fe]),o("div",Ce,[m(c,{data:e.tableData,stripe:"",style:{width:"100%"}},{default:h(()=>[m(r,{prop:"name",label:"\u59D3\u540D"},{default:h(F=>[o("div",De,[o("div",Ae,C(F.row.name),1),ge])]),_:1}),m(r,{label:"\u64CD\u4F5C",align:"center"},{default:h(()=>[m(l,{type:"primary",link:""},{default:h(()=>[be]),_:1})]),_:1})]),_:1},8,["data"])])]),_:1})])}const ye=D(pe,[["render",fe],["__scopeId","data-v-98134ea5"]]),Pe=A({name:"HotPanel",props:{tableData:{type:[Array,Object],default:()=>[]}},setup(e,u){const a=d([{label:"\u6BCF\u65E5",val:"daily"},{label:"\u6BCF\u5468",val:"weekly"},{label:"\u6BCF\u6708",val:"monthy"}]),i=d({}),t=l=>{i.value=l,u.emit("change",i.value)},n=d(),s={color:"#606266","background-color":"#F2F3F8"};return g(()=>{n.value=e.tableData}),t(a.value[0]),{tabsListRef:a,activeTabsRef:i,changeTabs:t,tableDataRef:n,headerRowStyle:s,handleTaleTypeView:l=>{switch(l){case"daily":return"\u6BCF\u65E5\u4E00\u5B66";case"weekly":return"\u6BCF\u5468\u4E00\u505A";case"monthy":return"\u6BCF\u6708\u4E00\u8BFE"}}}}});const Se=e=>(f("data-v-609dbfaa"),e=e(),y(),e),ve={class:"hot-panel-container"},Oe={class:"flex"},Ie=Se(()=>o("p",{class:"title-style"},"\u70ED\u95E8\u5185\u5BB9",-1)),Re=N("\u67E5\u770B\u66F4\u591A"),Te={class:"custom-tabs-ul flex-start"},Ne=["onClick"];function Me(e,u,a,i,t,n){const s=_("el-button"),r=_("el-table-column"),l=_("el-table"),c=_("el-card");return B(),E("div",ve,[m(c,{class:"el-card-style","body-style":{padding:"0px"}},{default:h(()=>[o("header",Oe,[Ie,m(s,{type:"primary",link:""},{default:h(()=>[Re]),_:1})]),o("article",null,[o("ul",Te,[(B(!0),E(S,null,v(e.tabsListRef,(p,F)=>(B(),E("li",{key:F,class:O(["custom-tabs-li",{"custom-tabs-li-active":e.activeTabsRef===p}]),onClick:I=>e.changeTabs(p)},C(p.label),11,Ne))),128))]),m(l,{class:"el-table-style",data:e.tableData,style:{width:"100%"},"header-cell-style":e.headerRowStyle,border:""},{default:h(()=>[m(r,{label:"\u6392\u540D",width:"60",type:"index",align:"center"}),m(r,{prop:"title",label:"\u5185\u5BB9\u6807\u9898"}),m(r,{prop:"type",label:"\u7C7B\u522B",align:"center",width:"100"},{default:h(p=>[N(C(e.handleTaleTypeView(p.row.type)),1)]),_:1}),m(r,{prop:"count",label:"\u5B8C\u6210\u91CF",align:"center",width:"100"})]),_:1},8,["data","header-cell-style"])])]),_:1})])}const we=D(Pe,[["render",Me],["__scopeId","data-v-609dbfaa"]]),Le=A({name:"ContentCategoryPanel",props:{echartsData:{type:Object,default:()=>({})}},components:{DoughnutChart:k},setup(e){const u=d(e.echartsData);return g(()=>{console.log("props.echartsData :>> ",e.echartsData),u.value=[{name:"\u6BCF\u65E5\u4E00\u5B66",value:e.echartsData.daily},{name:"\u6BCF\u5468\u4E00\u7EC3",value:e.echartsData.weekly},{name:"\u6BCF\u6708\u4E00\u8BFE",value:e.echartsData.monthy}]}),{echartsDataRef:u}}});const Ve=e=>(f("data-v-86576807"),e=e(),y(),e),je={class:"content-category-panel-container"},Ue=Ve(()=>o("header",null,[o("div",{class:"title-style"},"\u5185\u5BB9\u7C7B\u522B\u5360\u6BD4")],-1));function $e(e,u,a,i,t,n){const s=_("DoughnutChart"),r=_("el-card");return B(),E("div",je,[m(r,{class:"el-card-style","body-style":{padding:"0px"}},{default:h(()=>[Ue,m(s,{echartsData:e.echartsDataRef},null,8,["echartsData"])]),_:1})])}const ke=D(Le,[["render",$e],["__scopeId","data-v-86576807"]]),xe=A({name:"BasicBarChart",props:{echartsData:{type:Object,default:()=>({})}},setup(e){const u=d([0,0,0]);return $(()=>{const a=document.getElementById("basicBarChart"),i=T(a),t={xAxis:{type:"category",data:["\u5206\u4EAB\u91CF","\u8BC4\u8BBA\u91CF","\u70B9\u8D5E\u91CF"]},yAxis:{type:"value",axisLabel:{formatter:n=>Math.floor(n)/1e3+"k"}},grid:{left:"15%"},series:[{data:u.value,type:"bar",barWidth:"8",itemStyle:{borderRadius:4,color:"#0066FF"}}]};t&&i.setOption(t),g(()=>{u.value[0]=e.echartsData.share,u.value[1]=e.echartsData.comment,u.value[2]=e.echartsData.like,t&&i.setOption(t)})}),{}}});const Je={id:"basicBarChart",class:"basic-bar-chart-container"};function Ge(e,u,a,i,t,n){return B(),E("div",Je)}const We=D(xe,[["render",Ge],["__scopeId","data-v-08c33d5d"]]),He=A({name:"DailyInteractionCountPanel",props:{echartsData:{type:Object,default:()=>({})}},components:{BasicBarChart:We},setup(e){const u=d(e.echartsData);return g(()=>{u.value=e.echartsData}),{ecartsDataRef:u}}});const ze=e=>(f("data-v-8ec87cb9"),e=e(),y(),e),Xe={class:"daily-interaction-count-panel-container"},Ye=ze(()=>o("header",null,[o("p",{class:"title-style"},"\u4ECA\u65E5\u8F6C\u8BC4\u8D5E\u7EDF\u8BA1")],-1));function Ke(e,u,a,i,t,n){const s=_("BasicBarChart"),r=_("el-card");return B(),E("div",Xe,[m(r,{class:"el-card-style","body-style":{padding:"0px"}},{default:h(()=>[Ye,o("article",null,[m(s,{echartsData:e.ecartsDataRef},null,8,["echartsData"])])]),_:1})])}const Ze=D(He,[["render",Ke],["__scopeId","data-v-8ec87cb9"]]),j=[{before:[{month:"9\u6708",theme:"\u6210\u957F&\u89C4\u5F8B",name:"\u4E00\u5E74\u7EA7\u5B69\u5B50\u7684\u6210\u957F\u7279\u70B9\u4E0E\u6559\u80B2\u5173\u952E"},{month:"10\u6708",theme:"\u5B66\u4E60&\u6307\u5BFC",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u826F\u597D\u7684\u5B66\u4E60\u4E60\u60EF"},{month:"11\u6708",theme:"\u7EFC\u5408&\u7D20\u8D28",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u52C7\u4E8E\u63A2\u7D22\u7684\u7CBE\u795E"},{month:"12\u6708",theme:"\u5BB6\u6821&\u534F\u4F5C",name:"\u5BB6\u957F\u5982\u4F55\u4E0E\u8001\u5E08\u8FDB\u884C\u6709\u6548\u6C9F\u901A"},{month:"1\u6708",theme:"\u5BB6\u5EAD&\u5EFA\u8BBE",name:"\u5982\u4F55\u521B\u8BBE\u548C\u8C10\u7684\u5BB6\u5EAD\u73AF\u5883"},{month:"2\u6708",theme:"\u5BB6\u957F&\u7D20\u517B",name:"\u5BB6\u957F\u4E3A\u4F55\u9700\u8981\u4EE5\u8EAB\u4F5C\u5219"}],after:[{month:"3\u6708",theme:"\u9053\u5FB7&\u54C1\u8D28",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u5B5D\u4EB2\u5C0A\u5E08\u7684\u54C1\u8D28"},{month:"4\u6708",theme:"\u751F\u547D&\u73AF\u4FDD",name:"\u5982\u4F55\u5728\u5BB6\u5EAD\u4E2D\u5B9E\u8DF5\u4F4E\u78B3\u751F\u6D3B"},{month:"5\u6708",theme:"\u5FC3\u7406&\u5065\u5EB7",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u7684\u6297\u632B\u6298\u80FD\u529B"},{month:"6\u6708",theme:"\u793E\u4F1A&\u4EA4\u5F80",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u5B66\u4F1A\u4E0E\u4E0D\u540C\u7684\u4EBA\u4EA4\u5F80"},{month:"7\u6708",theme:"\u5BB6\u56FD&\u60C5\u6000",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u6C72\u53D6\u4E2D\u534E\u4F20\u7EDF\u7F8E\u5FB7"},{month:"8\u6708",theme:"\u5B89\u5168&\u81EA\u7406",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u7684\u751F\u6D3B\u81EA\u7406\u80FD\u529B"}]},{before:[{month:"9\u6708",theme:"\u6210\u957F&\u89C4\u5F8B",name:"\u4E8C\u5E74\u7EA7\u5B69\u5B50\u7684\u6210\u957F\u7279\u70B9\u4E0E\u6559\u80B2\u5173\u952E"},{month:"10\u6708",theme:"\u5B66\u4E60&\u6307\u5BFC",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u7231\u4E0A\u9605\u8BFB"},{month:"11\u6708",theme:"\u7EFC\u5408&\u7D20\u8D28",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u7684\u5174\u8DA3\u7279\u957F"},{month:"12\u6708",theme:"\u5BB6\u6821&\u534F\u4F5C",name:"\u5BB6\u957F\u5982\u4F55\u8BA9\u5B69\u5B50\u9002\u5E94\u4E0D\u540C\u8001\u5E08"},{month:"1\u6708",theme:"\u5BB6\u5EAD&\u5EFA\u8BBE",name:"\u5982\u4F55\u6784\u5EFA\u826F\u597D\u7684\u5BB6\u5EAD\u5173\u7CFB"},{month:"2\u6708",theme:"\u5BB6\u957F&\u7D20\u517B",name:"\u5BB6\u957F\u5982\u4F55\u5B9E\u73B0\u4E0E\u5B69\u5B50\u540C\u6B65\u6210\u957F"}],after:[{month:"3\u6708",theme:"\u9053\u5FB7&\u54C1\u8D28",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u5584\u4E8E\u611F\u6069\u7684\u54C1\u8D28"},{month:"4\u6708",theme:"\u751F\u547D&\u73AF\u4FDD",name:"\u5982\u4F55\u4E0E\u5927\u81EA\u7136\u548C\u8C10\u5171\u751F"},{month:"5\u6708",theme:"\u5FC3\u7406&\u5065\u5EB7",name:"\u57F9\u517B\u5B69\u5B50\u6027\u522B\u5E73\u8861\u7684\u89C2\u5FF5"},{month:"6\u6708",theme:"\u793E\u4F1A&\u4EA4\u5F80",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u5728\u96C6\u4F53\u4E2D\u9075\u5B88\u89C4\u5219"},{month:"7\u6708",theme:"\u5BB6\u56FD&\u60C5\u6000",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u4EE5\u4EC1\u4EBA\u5FD7\u58EB\u4E3A\u699C\u6837"},{month:"8\u6708",theme:"\u5B89\u5168&\u81EA\u7406",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u5B66\u4F1A\u81EA\u6211\u4FDD\u62A4"}]},{before:[{month:"9\u6708",theme:"\u6210\u957F&\u89C4\u5F8B",name:"\u4E09\u5E74\u7EA7\u5B69\u5B50\u7684\u6210\u957F\u7279\u70B9\u4E0E\u6559\u80B2\u5173\u952E"},{month:"10\u6708",theme:"\u5B66\u4E60&\u6307\u5BFC",name:"\u5982\u4F55\u5E2E\u52A9\u5B69\u5B50\u638C\u63E1\u6709\u6548\u7684\u5B66\u4E60\u65B9\u6CD5"},{month:"11\u6708",theme:"\u7EFC\u5408&\u7D20\u8D28",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u7684\u6570\u5B57\u5A92\u4ECB\u7D20\u517B"},{month:"12\u6708",theme:"\u5BB6\u6821&\u534F\u4F5C",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u4E3B\u52A8\u4E0E\u8001\u5E08\u4EA4\u6D41"},{month:"1\u6708",theme:"\u5BB6\u5EAD&\u5EFA\u8BBE",name:"\u5BB6\u5EAD\u4E2D\u5982\u4F55\u8FDB\u884C\u6709\u6548\u5206\u5DE5"},{month:"2\u6708",theme:"\u5BB6\u957F&\u7D20\u517B",name:"\u5BB6\u957F\u5982\u4F55\u548C\u5B69\u5B50\u6709\u6548\u6C9F\u901A"}],after:[{month:"3\u6708",theme:"\u9053\u5FB7&\u54C1\u8D28",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u5BCC\u6709\u8D23\u4EFB\u7684\u54C1\u8D28"},{month:"4\u6708",theme:"\u751F\u547D&\u73AF\u4FDD",name:"\u5982\u4F55\u5F15\u5BFC\u5B69\u5B50\u4E3A\u73AF\u4FDD\u53D1\u6325\u521B\u60F3"},{month:"5\u6708",theme:"\u5FC3\u7406&\u5065\u5EB7",name:"\u5982\u4F55\u5E2E\u52A9\u5B69\u5B50\u638C\u63A7\u81EA\u5DF1\u7684\u60C5\u7EEA"},{month:"6\u6708",theme:"\u793E\u4F1A&\u4EA4\u5F80",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u89E3\u51B3\u51B2\u7A81\u7684\u80FD\u529B"},{month:"7\u6708",theme:"\u5BB6\u56FD&\u60C5\u6000",name:"\u5982\u4F55\u6FC0\u53D1\u5B69\u5B50\u7684\u7231\u56FD\u60C5\u611F"},{month:"8\u6708",theme:"\u5B89\u5168&\u81EA\u7406",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u7684\u81EA\u6211\u7BA1\u7406\u80FD\u529B"}]},{before:[{month:"9\u6708",theme:"\u6210\u957F&\u89C4\u5F8B",name:"\u56DB\u5E74\u7EA7\u5B69\u5B50\u7684\u6210\u957F\u7279\u70B9\u4E0E\u6559\u80B2\u5173\u952E"},{month:"10\u6708",theme:"\u5B66\u4E60&\u6307\u5BFC",name:"\u5982\u4F55\u6FC0\u53D1\u5B69\u5B50\u5185\u5728\u5B66\u4E60\u52A8\u529B"},{month:"11\u6708",theme:"\u7EFC\u5408&\u7D20\u8D28",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u505A\u4E8B\u6709\u8BA1\u5212\u7684\u4E60\u60EF"},{month:"12\u6708",theme:"\u5BB6\u6821&\u534F\u4F5C",name:"\u5982\u4F55\u628A\u63E1\u5BB6\u6821\u6C9F\u901A\u7684\u57FA\u672C\u539F"},{month:"1\u6708",theme:"\u5BB6\u5EAD&\u5EFA\u8BBE",name:"\u5982\u4F55\u786E\u7ACB\u9002\u5B9C\u5B69\u5B50\u7684\u6559\u517B\u65B9\u5F0F"},{month:"2\u6708",theme:"\u5BB6\u957F&\u7D20\u517B",name:"\u5BB6\u957F\u5982\u4F55\u7BA1\u63A7\u597D\u81EA\u5DF1\u7684\u60C5\u7EEA"}],after:[{month:"3\u6708",theme:"\u9053\u5FB7&\u54C1\u8D28",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u4E50\u4E8E\u52A9\u4EBA\u7684\u54C1\u8D28"},{month:"4\u6708",theme:"\u751F\u547D&\u73AF\u4FDD",name:"\u5982\u4F55\u5E2E\u52A9\u5B69\u5B50\u5EFA\u7ACB\u5065\u5EB7\u751F\u6D3B\u7684\u4E60\u60EF"},{month:"5\u6708",theme:"\u5FC3\u7406&\u5065\u5EB7",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u7684\u81EA\u4FE1\u5FC3"},{month:"6\u6708",theme:"\u793E\u4F1A&\u4EA4\u5F80",name:"\u5982\u4F55\u5F15\u5BFC\u5B69\u5B50\u6B63\u786E\u4EA4\u53CB"},{month:"7\u6708",theme:"\u5BB6\u56FD&\u60C5\u6000",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u7231\u4E0A\u4F18\u79C0\u4F20\u7EDF\u6587\u5316"},{month:"8\u6708",theme:"\u5B89\u5168&\u81EA\u7406",name:"\u5982\u4F55\u6559\u80B2\u5B69\u5B50\u5B66\u4F1A\u5E94\u5BF9\u7F51\u7EDC\u5B89\u5168\u98CE\u9669"}]},{before:[{month:"9\u6708",theme:"\u6210\u957F&\u89C4\u5F8B",name:"\u4E94\u5E74\u7EA7\u5B69\u5B50\u7684\u6210\u957F\u7279\u70B9\u4E0E\u6559\u80B2\u5173\u952E"},{month:"10\u6708",theme:"\u5B66\u4E60&\u6307\u5BFC",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u5B66\u4F1A\u6709\u6548\u7BA1\u7406\u65F6\u95F4"},{month:"11\u6708",theme:"\u7EFC\u5408&\u7D20\u8D28",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u7684\u8D22\u5546\u89C2\u5FF5"},{month:"12\u6708",theme:"\u5BB6\u6821&\u534F\u4F5C",name:"\u5982\u4F55\u5316\u89E3\u5BB6\u6821\u6C9F\u901A\u5371\u673A"},{month:"1\u6708",theme:"\u5BB6\u5EAD&\u5EFA\u8BBE",name:"\u5982\u4F55\u5728\u5BB6\u5EAD\u4E2D\u6E17\u900F\u4E3A\u4EBA\u5904\u4E8B\u7684\u6559\u80B2"},{month:"2\u6708",theme:"\u5BB6\u957F&\u7D20\u517B",name:"\u5BB6\u957F\u5982\u4F55\u5EFA\u7ACB\u5BB6\u5EAD\u6559\u80B2\u6218\u7565\u601D\u7EF4"}],after:[{month:"3\u6708",theme:"\u9053\u5FB7&\u54C1\u8D28",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u660E\u793C\u8BDA\u4FE1\u7684\u54C1\u8D28"},{month:"4\u6708",theme:"\u751F\u547D&\u73AF\u4FDD",name:"\u5982\u4F55\u5E2E\u52A9\u5B69\u5B50\u5EFA\u7ACB\u70ED\u7231\u8FD0\u52A8\u7684\u4E60\u60EF"},{month:"5\u6708",theme:"\u5FC3\u7406&\u5065\u5EB7",name:"\u5BB6\u957F\u5BF9\u5B69\u5B50\u8FDB\u884C\u6027\u5065\u5EB7\u6559\u80B2"},{month:"6\u6708",theme:"\u793E\u4F1A&\u4EA4\u5F80",name:"\u5982\u4F55\u5F15\u5BFC\u5B69\u5B50\u9762\u5BF9\u662F\u975E\u4E0E\u8BEF\u89E3"},{month:"7\u6708",theme:"\u5BB6\u56FD&\u60C5\u6000",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u4E86\u89E3\u5BB6\u4E61\u4E4B\u7F8E"},{month:"8\u6708",theme:"\u5B89\u5168&\u81EA\u7406",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u638C\u63E1\u81EA\u6551\u77E5\u8BC6\u4E0E\u6280\u80FD"}]},{before:[{month:"9\u6708",theme:"\u6210\u957F&\u89C4\u5F8B",name:"\u516D\u5E74\u7EA7\u5B69\u5B50\u7684\u6210\u957F\u7279\u70B9\u4E0E\u6559\u80B2\u5173\u952E"},{month:"10\u6708",theme:"\u5B66\u4E60&\u6307\u5BFC",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u5B66\u4F1A\u5E94\u5BF9\u5B66\u4E60\u538B\u529B"},{month:"11\u6708",theme:"\u7EFC\u5408&\u7D20\u8D28",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u9075\u7EAA\u5B88\u6CD5\u7684\u610F\u8BC6"},{month:"12\u6708",theme:"\u5BB6\u6821&\u534F\u4F5C",name:"\u5F15\u5BFC\u5B69\u5B50\u89E3\u51B3\u4E0E\u8001\u5E08\u4E4B\u95F4\u7684\u8BEF\u4F1A\u77DB\u76FE"},{month:"1\u6708",theme:"\u5BB6\u5EAD&\u5EFA\u8BBE",name:"\u5982\u4F55\u4F20\u627F\u53D1\u626C\u5BB6\u98CE\u5BB6\u8BAD"},{month:"2\u6708",theme:"\u5BB6\u957F&\u7D20\u517B",name:"\u5BB6\u957F\u5982\u4F55\u5E2E\u52A9\u5B69\u5B50\u5EA6\u8FC7\u5347\u5B66\u8854\u63A5"}],after:[{month:"3\u6708",theme:"\u9053\u5FB7&\u54C1\u8D28",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u52E4\u4FED\u8282\u7EA6\u7684\u54C1\u8D28"},{month:"4\u6708",theme:"\u751F\u547D&\u73AF\u4FDD",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u66F4\u61C2\u5F97\u73CD\u60DC\u751F\u547D"},{month:"5\u6708",theme:"\u5FC3\u7406&\u5065\u5EB7",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u5B66\u4F1A\u6B63\u786E\u8BC4\u4EF7\u81EA\u5DF1"},{month:"6\u6708",theme:"\u793E\u4F1A&\u4EA4\u5F80",name:"\u5BB6\u957F\u5982\u4F55\u5F15\u5BFC\u5B69\u5B50\u4E0E\u5F02\u6027\u4EA4\u5F80"},{month:"7\u6708",theme:"\u5BB6\u56FD&\u60C5\u6000",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u6811\u7ACB\u62A5\u56FD\u4E4B\u5FD7"},{month:"8\u6708",theme:"\u5B89\u5168&\u81EA\u7406",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u8FDB\u884C\u516C\u76CA\u5B9E\u8DF5"}]}],qe=A({name:"MonthyContentFrame",components:{CustomCard:x},setup(){const e=d([{name:"\u4E00\u5E74\u7EA7",id:1},{name:"\u4E8C\u5E74\u7EA7",id:2},{name:"\u4E09\u5E74\u7EA7",id:3},{name:"\u56DB\u5E74\u7EA7",id:4},{name:"\u4E94\u5E74\u7EA7",id:5},{name:"\u516D\u5E74\u7EA7",id:6}]),u=d(1),a=l=>{u.value=l.id},i=d([{name:"\u4E0A\u5B66\u671F",id:1},{name:"\u4E0B\u5B66\u671F",id:2}]),t=d(1),n=l=>{t.value=l.id},s=d(),r=(l,c)=>{if(console.log("activeGrade :>> ",l),console.log("activeSemester :>> ",c),s.value=[],c===1){s.value=j[l-1].before;return}s.value=j[l-1].after};return g(()=>{r(u.value,t.value)}),{tabsListGradeRef:e,activeTabsGradeRef:u,changeGradeTabs:a,tabsListSemesterRef:i,activeTabsSemesterRef:t,changeSemesterTabs:n,tableDataRef:s}}});const Qe={class:"monthy-content-frame-container"},eu={class:"custom-tabs-ul flex-start"},uu=["onClick"],tu={class:"flex align-start"},au={class:"tabs-semester-ul"},ou=["onClick"],nu={class:"table-box"};function su(e,u,a,i,t,n){const s=_("el-table-column"),r=_("el-table"),l=_("CustomCard");return B(),E("div",Qe,[m(l,{title:"\u6BCF\u6708\u4E00\u8BFE\u5185\u5BB9\u6846\u67B6"},{default:h(()=>[o("header",null,[o("ul",eu,[(B(!0),E(S,null,v(e.tabsListGradeRef,(c,p)=>(B(),E("li",{key:p,class:O(["custom-tabs-li",{"custom-tabs-li-active":e.activeTabsGradeRef===c.id}]),onClick:F=>e.changeGradeTabs(c)},C(c.name),11,uu))),128))])]),o("article",tu,[o("ul",au,[(B(!0),E(S,null,v(e.tabsListSemesterRef,c=>(B(),E("li",{class:O(["tabs-semester-li",{"tabs-semester-li-active":e.activeTabsSemesterRef===c.id}]),key:c.id,onClick:p=>e.changeSemesterTabs(c)},C(c.name),11,ou))),128))]),o("div",nu,[m(r,{data:e.tableDataRef,style:{width:"100%"}},{default:h(()=>[m(s,{prop:"month",label:"\u6708\u4EFD",width:"180"}),m(s,{prop:"theme",label:"\u4E3B\u9898\u6A21\u5757",width:"180"}),m(s,{prop:"name",label:"\u8BFE\u7A0B\u540D\u79F0"})]),_:1},8,["data"])])])]),_:1})])}const ru=D(qe,[["render",su],["__scopeId","data-v-785309b7"]]);function iu(){const e=d({}),u=d({}),a=n=>{const s=[],r={Daily:[],weekly:[],monthy:[]};n.forEach(F=>{F.dates&&s.push(F.dates)});const l=new Set(s),c=Array.from(l);console.log("newDateArr :>> ",c);const p=[{type:"daily",arr:[]},{type:"weekly",arr:[]},{type:"monthy",arr:[]}];for(const F of p)for(const I of c){let w=!1;n.forEach(P=>{console.log("val,item :>> ",P,I),P.dates===I&&P.type===F.type&&(F.arr.push(P.count),w=!0)}),w||F.arr.push(0)}return r.Daily=p[0].arr,r.weekly=p[1].arr,r.monthy=p[2].arr,{dateList:c,dataList:r}},i=async()=>{const s={school_id:b().getSchoolInfo.id},r=await G(s);e.value=r},t=async()=>{const n=V().subtract(7,"days").format("YYYY-MM-DD HH:mm:ss"),s=V().format("YYYY-MM-DD HH:mm:ss"),r=b().getSchoolInfo,l={start_date:n,end_date:s,school_id:r.id};return await W(l)};return J(async()=>{i();const n=await t();Array.isArray(n)&&(u.value=a(n))}),{studyDashboardCompleteCountRef:e,studyDashboardCompleteListRef:u}}function lu(){const e=d({}),u=d(),a=t=>{e.value=t.val},i=async t=>{const n=b().getSchoolInfo,s={limit:"5",page:"1",type:t,school_id:n.id},r=await H(s);u.value=r.data};return g(()=>{const t=e.value;typeof t=="string"&&i(t)}),{hotConentList:u,changeTabs:a}}function mu(){const e=d();return(async()=>{const i={school_id:b().getSchoolInfo.id},t=await z(i);e.value=t})(),{studyDashboardCountRef:e}}const cu=async e=>await X.post("https://api.ps.familyeducation.org.cn/v1/rate/dashboard/today",e);function _u(){const e=d({});return(async()=>{const i={school_id:b().getSchoolInfo.id},t=await cu(i);e.value=t})(),{rateDashboardTodayRef:e}}const du={name:"workbenchView",components:{LearningSituationPanel:de,WarningPanel:ye,HotPanel:we,ContentCategoryPanel:ke,DailyInteractionCountPanel:Ze,MonthyContentFrame:ru},setup(){const e=d(-1),a=L().schoolInfoListRef.value;return Array.isArray(a)&&a.length>0&&(e.value=a[0].id),{...L(),...iu(),...lu(),...mu(),..._u()}}};const pu={class:"workbench-view-container"},Bu={class:"flex align-start"},Eu={class:"row-two-style flex"};function hu(e,u,a,i,t,n){const s=_("LearningSituationPanel");_("WarningPanel");const r=_("HotPanel");_("ContentCategoryPanel"),_("DailyInteractionCountPanel");const l=_("MonthyContentFrame");return B(),E("div",pu,[o("div",Bu,[m(s,{username:e.schoolUserInfoRef.username,listData:e.studyDashboardCompleteCountRef,echartsData:e.studyDashboardCompleteListRef},null,8,["username","listData","echartsData"]),R("",!0)]),o("div",Eu,[m(r,{onChange:e.changeTabs,tableData:e.hotConentList},null,8,["onChange","tableData"]),R("",!0),R("",!0),m(l)])])}const Su=D(du,[["render",hu],["__scopeId","data-v-1693d753"]]);export{Su as default};

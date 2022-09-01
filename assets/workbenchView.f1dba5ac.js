import{i as R,g as T,D as M,C as $}from"./CustomCard.c57fa065.js";import{d as C,r as _,s as U,k as g,_ as F,o as B,c as E,b as m,e as r,w as h,h as n,t as D,F as S,f,v as y,x as v,i as L,n as k,y as x,j as P}from"./index.0d85ce7c.js";import{u as j}from"./user.ad904517.js";import{u as N}from"./school.64450dc3.js";import{h as w}from"./moment.9709ab41.js";import{s as V,a as W,b as G,c as H}from"./study.fa461875.js";import{r as Y}from"./request.ec642285.js";const K=C({name:"StackedColumnChart",props:{echartsData:{type:Object,default:()=>null}},setup(e){const u=_(e.echartsData);U(()=>{const a=document.querySelector("#stackedColumnChart");let i=R(a),t={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{bottom:-4},grid:{top:"10%",left:"3%",right:"4%",bottom:"6%",containLabel:!0},xAxis:[{type:"category",data:u.value.dateList}],yAxis:[{type:"value",axisLabel:{formatter:function(o){return Math.floor(o)/1e3+"k"}}}],series:[{name:"\u6BCF\u6708\u4E00\u8BFE",type:"bar",barWidth:16,stack:"Search Engine",emphasis:{focus:"series"},itemStyle:{color:"#0066FF"},data:u.value.dataList?u.value.dataList.monthy:[]},{name:"\u6BCF\u5468\u4E00\u7EC3",type:"bar",stack:"Search Engine",emphasis:{focus:"series"},itemStyle:{color:"#00B2FF"},data:u.value.dataList?u.value.dataList.weekly:[]},{name:"\u6BCF\u65E5\u4E00\u5B66",type:"bar",stack:"Search Engine",emphasis:{focus:"series"},itemStyle:{color:"#81E2FF",borderRadius:[2,2,0,0]},data:u.value.dataList?u.value.dataList.daily:[]}]};g(()=>{u.value=e.echartsData,t={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{bottom:-4},grid:{top:"10%",left:"3%",right:"0%",bottom:"6%",containLabel:!0},xAxis:[{type:"category",data:u.value.dateList}],yAxis:[{type:"value",axisLabel:{formatter:function(o){return Math.floor(o)/1e3+"k"}}}],series:[{name:"\u6BCF\u6708\u4E00\u8BFE",type:"bar",barWidth:16,stack:"Search Engine",emphasis:{focus:"series"},itemStyle:{color:"#0066FF"},data:u.value.dataList?u.value.dataList.monthy:[]},{name:"\u6BCF\u5468\u4E00\u7EC3",type:"bar",stack:"Search Engine",emphasis:{focus:"series"},itemStyle:{color:"#00B2FF"},data:u.value.dataList?u.value.dataList.weekly:[]},{name:"\u6BCF\u65E5\u4E00\u5B66",type:"bar",stack:"Search Engine",emphasis:{focus:"series"},itemStyle:{color:"#81E2FF",borderRadius:[2,2,0,0]},data:u.value.dataList?u.value.dataList.daily:[]}]},i=R(a),t&&i.setOption(t)}),t&&i.setOption(t)})}});const X={id:"stackedColumnChart",class:"stacked-column-chart-container"};function z(e,u,a,i,t,o){return B(),E("div",X)}const Q=F(K,[["render",z],["__scopeId","data-v-24d715ee"]]),Z=C({name:"LearningSituationPanel",components:{StackedColumnChart:Q},props:{username:{type:String,default:"Admin"},listData:{type:Object,default:()=>null},echartsData:{type:Object,default:()=>null}},setup(e){const u=_(e.username),a=_(e.listData),i=_(e.echartsData),t=_({daily:{icon:"hours_icon_img.png",title:"\u6BCF\u65E5\u4EFB\u52A1\u5B8C\u6210\u4EBA\u6570",total:324,tagLabel:"\u8F83\u6628\u5929",tag:"+100"},weekly:{icon:"week_calendar_icon_img.png",title:"\u6BCF\u5468\u4EFB\u52A1\u5B8C\u6210\u4EBA\u6570",total:120,tagLabel:"\u8F83\u4E0A\u5468",tag:"-20"},monthy:{icon:"month_calendar_icon_img.png",title:"\u6BCF\u6708\u4EFB\u52A1\u5B8C\u6210\u4EBA\u6570",total:12,tagLabel:"\u8F83\u6628\u5929",tag:"+2"}}),o=(s,c)=>{const l=c-s;return l>0?`+${l}`:l};return g(()=>{a.value=e.listData,a.value&&(t.value.daily.total=a.value.daily,t.value.daily.tag=o(a.value.yesterday,a.value.daily),t.value.weekly.total=a.value.weekly,t.value.weekly.tag=o(a.value.last_weekly,a.value.weekly),t.value.monthy.total=a.value.monthy,t.value.monthy.tag=o(a.value.last_monthy,a.value.monthy)),i.value=e.echartsData}),{getImageUrl:T,completeNumberRef:t,usernameRef:u,echartsDataRef:i}}});const q=e=>(y("data-v-ba9cb6c4"),e=e(),v(),e),J={class:"learning-situation-panel-container"},ee={class:"card-content-box"},ue={class:"user-info-box flex-start"},te={class:"complete-number-ul flex-start"},ae={class:"complete-number-icon-box"},ne={class:"complete-number-content-box"},se={class:"complete-number-title-style"},oe={class:"complete-number-box flex-start align-end"},ie={class:"complete-number-total-style"},ce={class:"complete-number-tag-style increase-tag-style"},re={class:"learning-situation-box"},le=q(()=>n("p",{class:"learning-situation-title-style"},"\u5B66\u4E60\u60C5\u51B5\u770B\u677F",-1));function _e(e,u,a,i,t,o){const s=m("el-image"),c=m("StackedColumnChart"),l=m("el-card");return B(),E("div",J,[r(l,{class:"el-card-style","body-style":{padding:"0px"}},{default:h(()=>[n("div",ee,[n("header",null,[n("div",ue,[r(s,{class:"welcome-icon-style",src:e.getImageUrl("welcome_icon_img.png")},null,8,["src"]),n("p",null,"\u6B22\u8FCE\u56DE\u6765\uFF0C"+D(e.usernameRef),1)])]),n("article",null,[n("ul",te,[(B(!0),E(S,null,f(e.completeNumberRef,(p,d)=>(B(),E("li",{key:d,class:"complete-number-li flex-start"},[n("div",ae,[r(s,{class:"complete-number-icon-style",src:e.getImageUrl(p.icon)},null,8,["src"])]),n("div",ne,[n("p",se,D(p.title),1),n("div",oe,[n("p",ie,D(p.total),1),n("p",ce,D(p.tagLabel)+D(p.tag),1)])])]))),128))]),n("div",re,[le,r(c,{echartsData:e.echartsDataRef},null,8,["echartsData"])])])])]),_:1})])}const me=F(Z,[["render",_e],["__scopeId","data-v-ba9cb6c4"]]),pe=C({name:"WarningPanel",setup(e){return{getImageUrl:T,tableData:[{name:"\u5F6D\u6446\u9C7C"},{name:"\u5F6D\u6446\u9C7C"},{name:"\u5F6D\u6446\u9C7C"},{name:"\u5F6D\u6446\u9C7C"}]}}});const I=e=>(y("data-v-98134ea5"),e=e(),v(),e),de={class:"warning-panel-container"},Be={class:"warning-panel-title-style flex-start"},Ee=I(()=>n("p",{class:"warning-title-style"},"\u9884\u8B66\u5B66\u5458",-1)),he=I(()=>n("p",{class:"warning-title-number-style"},"(56)",-1)),De={class:"warning-panel-table-box"},Fe={class:"flex-start"},Ce={class:"warning-panel-name-style"},ge=I(()=>n("div",{class:"warning-panel-tag-style"},"\u4E25\u91CD\u9884\u8B66",-1)),Ae=L("\u901A\u77E5\u6559\u5E08");function ye(e,u,a,i,t,o){const s=m("el-image"),c=m("el-table-column"),l=m("el-button"),p=m("el-table"),d=m("el-card");return B(),E("div",de,[r(d,{class:"el-card-style","body-style":{padding:0}},{default:h(()=>[n("div",Be,[r(s,{class:"warning-panel-title-icon-style",src:e.getImageUrl("warning_icon_img.png")},null,8,["src"]),Ee,he]),n("div",De,[r(p,{data:e.tableData,stripe:"",style:{width:"100%"}},{default:h(()=>[r(c,{prop:"name",label:"\u59D3\u540D"},{default:h(b=>[n("div",Fe,[n("div",Ce,D(b.row.name),1),ge])]),_:1}),r(c,{label:"\u64CD\u4F5C",align:"center"},{default:h(()=>[r(l,{type:"primary",link:""},{default:h(()=>[Ae]),_:1})]),_:1})]),_:1},8,["data"])])]),_:1})])}const ve=F(pe,[["render",ye],["__scopeId","data-v-98134ea5"]]),be=C({name:"HotPanel",props:{tableData:{type:[Array,Object],default:()=>[]}},setup(e,u){const a=_([{label:"\u6BCF\u65E5",val:"daily"},{label:"\u6BCF\u5468",val:"weekly"},{label:"\u6BCF\u6708",val:"monthy"}]),i=_({}),t=l=>{i.value=l,u.emit("change",i.value)},o=_(),s={color:"#606266","background-color":"#F2F3F8"};return g(()=>{o.value=e.tableData}),t(a.value[0]),{tabsListRef:a,activeTabsRef:i,changeTabs:t,tableDataRef:o,headerRowStyle:s,handleTaleTypeView:l=>{switch(l){case"daily":return"\u6BCF\u65E5\u4E00\u5B66";case"weekly":return"\u6BCF\u5468\u4E00\u505A";case"monthy":return"\u6BCF\u6708\u4E00\u8BFE"}}}}});const Se=e=>(y("data-v-1e1ec8f3"),e=e(),v(),e),fe={class:"hot-panel-container"},Pe={class:"flex"},Re=Se(()=>n("p",{class:"title-style"},"\u70ED\u95E8\u5185\u5BB9",-1)),ke=L("\u67E5\u770B\u66F4\u591A"),Le={class:"custom-tabs-ul flex-start"},Ie=["onClick"];function we(e,u,a,i,t,o){const s=m("el-button"),c=m("el-table-column"),l=m("el-table"),p=m("el-card");return B(),E("div",fe,[r(p,{class:"el-card-style","body-style":{padding:"0px"}},{default:h(()=>[n("header",Pe,[Re,r(s,{type:"primary",link:""},{default:h(()=>[ke]),_:1})]),n("article",null,[n("ul",Le,[(B(!0),E(S,null,f(e.tabsListRef,(d,b)=>(B(),E("li",{key:b,class:k(["custom-tabs-li",{"custom-tabs-li-active":e.activeTabsRef===d}]),onClick:hu=>e.changeTabs(d)},D(d.label),11,Ie))),128))]),r(l,{class:"el-table-style",data:e.tableData,style:{width:"100%"},"header-cell-style":e.headerRowStyle,border:""},{default:h(()=>[r(c,{label:"\u6392\u540D",width:"60",type:"index",align:"center"}),r(c,{prop:"title",label:"\u5185\u5BB9\u6807\u9898"}),r(c,{prop:"type",label:"\u7C7B\u522B",align:"center"},{default:h(d=>[L(D(e.handleTaleTypeView(d.row.type)),1)]),_:1}),r(c,{prop:"count",label:"\u5B8C\u6210\u91CF",align:"center"})]),_:1},8,["data","header-cell-style"])])]),_:1})])}const Oe=F(be,[["render",we],["__scopeId","data-v-1e1ec8f3"]]),Te=C({name:"ContentCategoryPanel",props:{echartsData:{type:Object,default:()=>({})}},components:{DoughnutChart:M},setup(e){const u=_(e.echartsData);return g(()=>{console.log("props.echartsData :>> ",e.echartsData),u.value=[{name:"\u6BCF\u65E5\u4E00\u5B66",value:e.echartsData.daily},{name:"\u6BCF\u5468\u4E00\u7EC3",value:e.echartsData.weekly},{name:"\u6BCF\u6708\u4E00\u8BFE",value:e.echartsData.monthy}]}),{echartsDataRef:u}}});const Ue=e=>(y("data-v-86576807"),e=e(),v(),e),Me={class:"content-category-panel-container"},$e=Ue(()=>n("header",null,[n("div",{class:"title-style"},"\u5185\u5BB9\u7C7B\u522B\u5360\u6BD4")],-1));function xe(e,u,a,i,t,o){const s=m("DoughnutChart"),c=m("el-card");return B(),E("div",Me,[r(c,{class:"el-card-style","body-style":{padding:"0px"}},{default:h(()=>[$e,r(s,{echartsData:e.echartsDataRef},null,8,["echartsData"])]),_:1})])}const je=F(Te,[["render",xe],["__scopeId","data-v-86576807"]]),Ne=C({name:"BasicBarChart",props:{echartsData:{type:Object,default:()=>({})}},setup(e){const u=_([0,0,0]);return U(()=>{const a=document.getElementById("basicBarChart"),i=R(a),t={xAxis:{type:"category",data:["\u5206\u4EAB\u91CF","\u8BC4\u8BBA\u91CF","\u70B9\u8D5E\u91CF"]},yAxis:{type:"value",axisLabel:{formatter:o=>Math.floor(o)/1e3+"k"}},grid:{left:"15%"},series:[{data:u.value,type:"bar",barWidth:"8",itemStyle:{borderRadius:4,color:"#0066FF"}}]};t&&i.setOption(t),g(()=>{u.value[0]=e.echartsData.share,u.value[1]=e.echartsData.comment,u.value[2]=e.echartsData.like,t&&i.setOption(t)})}),{}}});const Ve={id:"basicBarChart",class:"basic-bar-chart-container"};function We(e,u,a,i,t,o){return B(),E("div",Ve)}const Ge=F(Ne,[["render",We],["__scopeId","data-v-08c33d5d"]]),He=C({name:"DailyInteractionCountPanel",props:{echartsData:{type:Object,default:()=>({})}},components:{BasicBarChart:Ge},setup(e){const u=_(e.echartsData);return g(()=>{u.value=e.echartsData}),{ecartsDataRef:u}}});const Ye=e=>(y("data-v-8ec87cb9"),e=e(),v(),e),Ke={class:"daily-interaction-count-panel-container"},Xe=Ye(()=>n("header",null,[n("p",{class:"title-style"},"\u4ECA\u65E5\u8F6C\u8BC4\u8D5E\u7EDF\u8BA1")],-1));function ze(e,u,a,i,t,o){const s=m("BasicBarChart"),c=m("el-card");return B(),E("div",Ke,[r(c,{class:"el-card-style","body-style":{padding:"0px"}},{default:h(()=>[Xe,n("article",null,[r(s,{echartsData:e.ecartsDataRef},null,8,["echartsData"])])]),_:1})])}const Qe=F(He,[["render",ze],["__scopeId","data-v-8ec87cb9"]]),O=[{before:[{month:"9\u6708",theme:"\u6210\u957F&\u89C4\u5F8B",name:"\u4E00\u5E74\u7EA7\u5B69\u5B50\u7684\u6210\u957F\u7279\u70B9\u4E0E\u6559\u80B2\u5173\u952E"},{month:"10\u6708",theme:"\u5B66\u4E60&\u6307\u5BFC",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u826F\u597D\u7684\u5B66\u4E60\u4E60\u60EF"},{month:"11\u6708",theme:"\u7EFC\u5408&\u7D20\u8D28",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u52C7\u4E8E\u63A2\u7D22\u7684\u7CBE\u795E"},{month:"12\u6708",theme:"\u5BB6\u6821&\u534F\u4F5C",name:"\u5BB6\u957F\u5982\u4F55\u4E0E\u8001\u5E08\u8FDB\u884C\u6709\u6548\u6C9F\u901A"},{month:"1\u6708",theme:"\u5BB6\u5EAD&\u5EFA\u8BBE",name:"\u5982\u4F55\u521B\u8BBE\u548C\u8C10\u7684\u5BB6\u5EAD\u73AF\u5883"},{month:"2\u6708",theme:"\u5BB6\u957F&\u7D20\u517B",name:"\u5BB6\u957F\u4E3A\u4F55\u9700\u8981\u4EE5\u8EAB\u4F5C\u5219"}],after:[{month:"3\u6708",theme:"\u9053\u5FB7&\u54C1\u8D28",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u5B5D\u4EB2\u5C0A\u5E08\u7684\u54C1\u8D28"},{month:"4\u6708",theme:"\u751F\u547D&\u73AF\u4FDD",name:"\u5982\u4F55\u5728\u5BB6\u5EAD\u4E2D\u5B9E\u8DF5\u4F4E\u78B3\u751F\u6D3B"},{month:"5\u6708",theme:"\u5FC3\u7406&\u5065\u5EB7",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u7684\u6297\u632B\u6298\u80FD\u529B"},{month:"6\u6708",theme:"\u793E\u4F1A&\u4EA4\u5F80",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u5B66\u4F1A\u4E0E\u4E0D\u540C\u7684\u4EBA\u4EA4\u5F80"},{month:"7\u6708",theme:"\u5BB6\u56FD&\u60C5\u6000",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u6C72\u53D6\u4E2D\u534E\u4F20\u7EDF\u7F8E\u5FB7"},{month:"8\u6708",theme:"\u5B89\u5168&\u81EA\u7406",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u7684\u751F\u6D3B\u81EA\u7406\u80FD\u529B"}]},{before:[{month:"9\u6708",theme:"\u6210\u957F&\u89C4\u5F8B",name:"\u4E8C\u5E74\u7EA7\u5B69\u5B50\u7684\u6210\u957F\u7279\u70B9\u4E0E\u6559\u80B2\u5173\u952E"},{month:"10\u6708",theme:"\u5B66\u4E60&\u6307\u5BFC",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u7231\u4E0A\u9605\u8BFB"},{month:"11\u6708",theme:"\u7EFC\u5408&\u7D20\u8D28",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u7684\u5174\u8DA3\u7279\u957F"},{month:"12\u6708",theme:"\u5BB6\u6821&\u534F\u4F5C",name:"\u5BB6\u957F\u5982\u4F55\u8BA9\u5B69\u5B50\u9002\u5E94\u4E0D\u540C\u8001\u5E08"},{month:"1\u6708",theme:"\u5BB6\u5EAD&\u5EFA\u8BBE",name:"\u5982\u4F55\u6784\u5EFA\u826F\u597D\u7684\u5BB6\u5EAD\u5173\u7CFB"},{month:"2\u6708",theme:"\u5BB6\u957F&\u7D20\u517B",name:"\u5BB6\u957F\u5982\u4F55\u5B9E\u73B0\u4E0E\u5B69\u5B50\u540C\u6B65\u6210\u957F"}],after:[{month:"3\u6708",theme:"\u9053\u5FB7&\u54C1\u8D28",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u5584\u4E8E\u611F\u6069\u7684\u54C1\u8D28"},{month:"4\u6708",theme:"\u751F\u547D&\u73AF\u4FDD",name:"\u5982\u4F55\u4E0E\u5927\u81EA\u7136\u548C\u8C10\u5171\u751F"},{month:"5\u6708",theme:"\u5FC3\u7406&\u5065\u5EB7",name:"\u57F9\u517B\u5B69\u5B50\u6027\u522B\u5E73\u8861\u7684\u89C2\u5FF5"},{month:"6\u6708",theme:"\u793E\u4F1A&\u4EA4\u5F80",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u5728\u96C6\u4F53\u4E2D\u9075\u5B88\u89C4\u5219"},{month:"7\u6708",theme:"\u5BB6\u56FD&\u60C5\u6000",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u4EE5\u4EC1\u4EBA\u5FD7\u58EB\u4E3A\u699C\u6837"},{month:"8\u6708",theme:"\u5B89\u5168&\u81EA\u7406",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u5B66\u4F1A\u81EA\u6211\u4FDD\u62A4"}]},{before:[{month:"9\u6708",theme:"\u6210\u957F&\u89C4\u5F8B",name:"\u4E09\u5E74\u7EA7\u5B69\u5B50\u7684\u6210\u957F\u7279\u70B9\u4E0E\u6559\u80B2\u5173\u952E"},{month:"10\u6708",theme:"\u5B66\u4E60&\u6307\u5BFC",name:"\u5982\u4F55\u5E2E\u52A9\u5B69\u5B50\u638C\u63E1\u6709\u6548\u7684\u5B66\u4E60\u65B9\u6CD5"},{month:"11\u6708",theme:"\u7EFC\u5408&\u7D20\u8D28",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u7684\u6570\u5B57\u5A92\u4ECB\u7D20\u517B"},{month:"12\u6708",theme:"\u5BB6\u6821&\u534F\u4F5C",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u4E3B\u52A8\u4E0E\u8001\u5E08\u4EA4\u6D41"},{month:"1\u6708",theme:"\u5BB6\u5EAD&\u5EFA\u8BBE",name:"\u5BB6\u5EAD\u4E2D\u5982\u4F55\u8FDB\u884C\u6709\u6548\u5206\u5DE5"},{month:"2\u6708",theme:"\u5BB6\u957F&\u7D20\u517B",name:"\u5BB6\u957F\u5982\u4F55\u548C\u5B69\u5B50\u6709\u6548\u6C9F\u901A"}],after:[{month:"3\u6708",theme:"\u9053\u5FB7&\u54C1\u8D28",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u5BCC\u6709\u8D23\u4EFB\u7684\u54C1\u8D28"},{month:"4\u6708",theme:"\u751F\u547D&\u73AF\u4FDD",name:"\u5982\u4F55\u5F15\u5BFC\u5B69\u5B50\u4E3A\u73AF\u4FDD\u53D1\u6325\u521B\u60F3"},{month:"5\u6708",theme:"\u5FC3\u7406&\u5065\u5EB7",name:"\u5982\u4F55\u5E2E\u52A9\u5B69\u5B50\u638C\u63A7\u81EA\u5DF1\u7684\u60C5\u7EEA"},{month:"6\u6708",theme:"\u793E\u4F1A&\u4EA4\u5F80",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u89E3\u51B3\u51B2\u7A81\u7684\u80FD\u529B"},{month:"7\u6708",theme:"\u5BB6\u56FD&\u60C5\u6000",name:"\u5982\u4F55\u6FC0\u53D1\u5B69\u5B50\u7684\u7231\u56FD\u60C5\u611F"},{month:"8\u6708",theme:"\u5B89\u5168&\u81EA\u7406",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u7684\u81EA\u6211\u7BA1\u7406\u80FD\u529B"}]},{before:[{month:"9\u6708",theme:"\u6210\u957F&\u89C4\u5F8B",name:"\u56DB\u5E74\u7EA7\u5B69\u5B50\u7684\u6210\u957F\u7279\u70B9\u4E0E\u6559\u80B2\u5173\u952E"},{month:"10\u6708",theme:"\u5B66\u4E60&\u6307\u5BFC",name:"\u5982\u4F55\u6FC0\u53D1\u5B69\u5B50\u5185\u5728\u5B66\u4E60\u52A8\u529B"},{month:"11\u6708",theme:"\u7EFC\u5408&\u7D20\u8D28",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u505A\u4E8B\u6709\u8BA1\u5212\u7684\u4E60\u60EF"},{month:"12\u6708",theme:"\u5BB6\u6821&\u534F\u4F5C",name:"\u5982\u4F55\u628A\u63E1\u5BB6\u6821\u6C9F\u901A\u7684\u57FA\u672C\u539F"},{month:"1\u6708",theme:"\u5BB6\u5EAD&\u5EFA\u8BBE",name:"\u5982\u4F55\u786E\u7ACB\u9002\u5B9C\u5B69\u5B50\u7684\u6559\u517B\u65B9\u5F0F"},{month:"2\u6708",theme:"\u5BB6\u957F&\u7D20\u517B",name:"\u5BB6\u957F\u5982\u4F55\u7BA1\u63A7\u597D\u81EA\u5DF1\u7684\u60C5\u7EEA"}],after:[{month:"3\u6708",theme:"\u9053\u5FB7&\u54C1\u8D28",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u4E50\u4E8E\u52A9\u4EBA\u7684\u54C1\u8D28"},{month:"4\u6708",theme:"\u751F\u547D&\u73AF\u4FDD",name:"\u5982\u4F55\u5E2E\u52A9\u5B69\u5B50\u5EFA\u7ACB\u5065\u5EB7\u751F\u6D3B\u7684\u4E60\u60EF"},{month:"5\u6708",theme:"\u5FC3\u7406&\u5065\u5EB7",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u7684\u81EA\u4FE1\u5FC3"},{month:"6\u6708",theme:"\u793E\u4F1A&\u4EA4\u5F80",name:"\u5982\u4F55\u5F15\u5BFC\u5B69\u5B50\u6B63\u786E\u4EA4\u53CB"},{month:"7\u6708",theme:"\u5BB6\u56FD&\u60C5\u6000",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u7231\u4E0A\u4F18\u79C0\u4F20\u7EDF\u6587\u5316"},{month:"8\u6708",theme:"\u5B89\u5168&\u81EA\u7406",name:"\u5982\u4F55\u6559\u80B2\u5B69\u5B50\u5B66\u4F1A\u5E94\u5BF9\u7F51\u7EDC\u5B89\u5168\u98CE\u9669"}]},{before:[{month:"9\u6708",theme:"\u6210\u957F&\u89C4\u5F8B",name:"\u4E94\u5E74\u7EA7\u5B69\u5B50\u7684\u6210\u957F\u7279\u70B9\u4E0E\u6559\u80B2\u5173\u952E"},{month:"10\u6708",theme:"\u5B66\u4E60&\u6307\u5BFC",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u5B66\u4F1A\u6709\u6548\u7BA1\u7406\u65F6\u95F4"},{month:"11\u6708",theme:"\u7EFC\u5408&\u7D20\u8D28",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u7684\u8D22\u5546\u89C2\u5FF5"},{month:"12\u6708",theme:"\u5BB6\u6821&\u534F\u4F5C",name:"\u5982\u4F55\u5316\u89E3\u5BB6\u6821\u6C9F\u901A\u5371\u673A"},{month:"1\u6708",theme:"\u5BB6\u5EAD&\u5EFA\u8BBE",name:"\u5982\u4F55\u5728\u5BB6\u5EAD\u4E2D\u6E17\u900F\u4E3A\u4EBA\u5904\u4E8B\u7684\u6559\u80B2"},{month:"2\u6708",theme:"\u5BB6\u957F&\u7D20\u517B",name:"\u5BB6\u957F\u5982\u4F55\u5EFA\u7ACB\u5BB6\u5EAD\u6559\u80B2\u6218\u7565\u601D\u7EF4"}],after:[{month:"3\u6708",theme:"\u9053\u5FB7&\u54C1\u8D28",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u660E\u793C\u8BDA\u4FE1\u7684\u54C1\u8D28"},{month:"4\u6708",theme:"\u751F\u547D&\u73AF\u4FDD",name:"\u5982\u4F55\u5E2E\u52A9\u5B69\u5B50\u5EFA\u7ACB\u70ED\u7231\u8FD0\u52A8\u7684\u4E60\u60EF"},{month:"5\u6708",theme:"\u5FC3\u7406&\u5065\u5EB7",name:"\u5BB6\u957F\u5BF9\u5B69\u5B50\u8FDB\u884C\u6027\u5065\u5EB7\u6559\u80B2"},{month:"6\u6708",theme:"\u793E\u4F1A&\u4EA4\u5F80",name:"\u5982\u4F55\u5F15\u5BFC\u5B69\u5B50\u9762\u5BF9\u662F\u975E\u4E0E\u8BEF\u89E3"},{month:"7\u6708",theme:"\u5BB6\u56FD&\u60C5\u6000",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u4E86\u89E3\u5BB6\u4E61\u4E4B\u7F8E"},{month:"8\u6708",theme:"\u5B89\u5168&\u81EA\u7406",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u638C\u63E1\u81EA\u6551\u77E5\u8BC6\u4E0E\u6280\u80FD"}]},{before:[{month:"9\u6708",theme:"\u6210\u957F&\u89C4\u5F8B",name:"\u516D\u5E74\u7EA7\u5B69\u5B50\u7684\u6210\u957F\u7279\u70B9\u4E0E\u6559\u80B2\u5173\u952E"},{month:"10\u6708",theme:"\u5B66\u4E60&\u6307\u5BFC",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u5B66\u4F1A\u5E94\u5BF9\u5B66\u4E60\u538B\u529B"},{month:"11\u6708",theme:"\u7EFC\u5408&\u7D20\u8D28",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u9075\u7EAA\u5B88\u6CD5\u7684\u610F\u8BC6"},{month:"12\u6708",theme:"\u5BB6\u6821&\u534F\u4F5C",name:"\u5F15\u5BFC\u5B69\u5B50\u89E3\u51B3\u4E0E\u8001\u5E08\u4E4B\u95F4\u7684\u8BEF\u4F1A\u77DB\u76FE"},{month:"1\u6708",theme:"\u5BB6\u5EAD&\u5EFA\u8BBE",name:"\u5982\u4F55\u4F20\u627F\u53D1\u626C\u5BB6\u98CE\u5BB6\u8BAD"},{month:"2\u6708",theme:"\u5BB6\u957F&\u7D20\u517B",name:"\u5BB6\u957F\u5982\u4F55\u5E2E\u52A9\u5B69\u5B50\u5EA6\u8FC7\u5347\u5B66\u8854\u63A5"}],after:[{month:"3\u6708",theme:"\u9053\u5FB7&\u54C1\u8D28",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u52E4\u4FED\u8282\u7EA6\u7684\u54C1\u8D28"},{month:"4\u6708",theme:"\u751F\u547D&\u73AF\u4FDD",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u66F4\u61C2\u5F97\u73CD\u60DC\u751F\u547D"},{month:"5\u6708",theme:"\u5FC3\u7406&\u5065\u5EB7",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u5B66\u4F1A\u6B63\u786E\u8BC4\u4EF7\u81EA\u5DF1"},{month:"6\u6708",theme:"\u793E\u4F1A&\u4EA4\u5F80",name:"\u5BB6\u957F\u5982\u4F55\u5F15\u5BFC\u5B69\u5B50\u4E0E\u5F02\u6027\u4EA4\u5F80"},{month:"7\u6708",theme:"\u5BB6\u56FD&\u60C5\u6000",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u6811\u7ACB\u62A5\u56FD\u4E4B\u5FD7"},{month:"8\u6708",theme:"\u5B89\u5168&\u81EA\u7406",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u8FDB\u884C\u516C\u76CA\u5B9E\u8DF5"}]}],Ze=C({name:"MonthyContentFrame",components:{CustomCard:$},setup(){const e=_([{name:"\u4E00\u5E74\u7EA7",id:1},{name:"\u4E8C\u5E74\u7EA7",id:2},{name:"\u4E09\u5E74\u7EA7",id:3},{name:"\u56DB\u5E74\u7EA7",id:4},{name:"\u4E94\u5E74\u7EA7",id:5},{name:"\u516D\u5E74\u7EA7",id:6}]),u=_(1),a=l=>{u.value=l.id},i=_([{name:"\u4E0A\u5B66\u671F",id:1},{name:"\u4E0B\u5B66\u671F",id:2}]),t=_(1),o=l=>{t.value=l.id},s=_(),c=(l,p)=>{if(console.log("activeGrade :>> ",l),console.log("activeSemester :>> ",p),s.value=[],p===1){s.value=O[l-1].before;return}s.value=O[l-1].after};return g(()=>{c(u.value,t.value)}),{tabsListGradeRef:e,activeTabsGradeRef:u,changeGradeTabs:a,tabsListSemesterRef:i,activeTabsSemesterRef:t,changeSemesterTabs:o,tableDataRef:s}}});const qe={class:"monthy-content-frame-container"},Je={class:"custom-tabs-ul flex-start"},eu=["onClick"],uu={class:"flex align-start"},tu={class:"tabs-semester-ul"},au=["onClick"],nu={class:"table-box"};function su(e,u,a,i,t,o){const s=m("el-table-column"),c=m("el-table"),l=m("CustomCard");return B(),E("div",qe,[r(l,{title:"\u6BCF\u6708\u4E00\u8BFE\u5185\u5BB9\u6846\u67B6"},{default:h(()=>[n("header",null,[n("ul",Je,[(B(!0),E(S,null,f(e.tabsListGradeRef,(p,d)=>(B(),E("li",{key:d,class:k(["custom-tabs-li",{"custom-tabs-li-active":e.activeTabsGradeRef===p.id}]),onClick:b=>e.changeGradeTabs(p)},D(p.name),11,eu))),128))])]),n("article",uu,[n("ul",tu,[(B(!0),E(S,null,f(e.tabsListSemesterRef,p=>(B(),E("li",{class:k(["tabs-semester-li",{"tabs-semester-li-active":e.activeTabsSemesterRef===p.id}]),key:p.id,onClick:d=>e.changeSemesterTabs(p)},D(p.name),11,au))),128))]),n("div",nu,[r(c,{data:e.tableDataRef,style:{width:"100%"}},{default:h(()=>[r(s,{prop:"month",label:"\u6708\u4EFD",width:"180"}),r(s,{prop:"theme",label:"\u4E3B\u9898\u6A21\u5757",width:"180"}),r(s,{prop:"name",label:"\u8BFE\u7A0B\u540D\u79F0"})]),_:1},8,["data"])])])]),_:1})])}const ou=F(Ze,[["render",su],["__scopeId","data-v-785309b7"]]);function A(){const e=N(),u=e.saveSchoolInfoList,a=e.saveSchoolInfo,i=_(e.getSchoolInfoList),t=_(e.getSchoolInfo),o=j(),s=o.saveSchoolUserInfo,c=_(o.getSchoolUserInfo);return{saveSchoolInfoList:u,saveSchoolInfo:a,saveSchoolUserInfo:s,schoolInfoListRef:i,schoolInfoRef:t,schoolUserInfoRef:c}}function iu(){const e=_({}),u=_({}),a=o=>{const s=[],c={Daily:[],weekly:[],monthy:[]};o.forEach(d=>{switch(d.dates&&s.push(d.dates),d.type){case"daily":c.Daily.push(d.count);break;case"weekly":c.weekly.push(d.count);break;case"monthy":c.monthy.push(d.count);break}});const l=new Set(s);return{dateList:Array.from(l),dataList:c}},i=async()=>{const s=await V({});e.value=s},t=async()=>{const o=w().subtract(7,"days").format("YYYY-MM-DD HH:mm:ss"),s=w().format("YYYY-MM-DD HH:mm:ss");return await W({start_date:o,end_date:s})};return x(async()=>{i();const o=await t();Array.isArray(o)&&(u.value=a(o))}),{studyDashboardCompleteCountRef:e,studyDashboardCompleteListRef:u}}function cu(){const e=_({}),u=_(),a=t=>{e.value=t.val},i=async t=>{const s=await G({limit:"5",page:"1",type:t});u.value=s.data};return g(()=>{const t=e.value;typeof t=="string"&&i(t)}),{hotConentList:u,changeTabs:a}}function ru(){const e=_();return(async()=>{const i=await H({});e.value=i})(),{studyDashboardCountRef:e}}const lu=async e=>await Y.post("https://api.ps.familyeducation.org.cn/v1/rate/dashboard/today",e);function _u(){const e=_({});return(async()=>{const i=await lu({});e.value=i})(),{rateDashboardTodayRef:e}}const mu={name:"workbenchView",components:{LearningSituationPanel:me,WarningPanel:ve,HotPanel:Oe,ContentCategoryPanel:je,DailyInteractionCountPanel:Qe,MonthyContentFrame:ou},setup(){const e=_(-1);A().saveSchoolInfoList();const a=A().schoolInfoListRef.value;return Array.isArray(a)&&a.length>0&&(e.value=a[0].id),console.log("schoolIdRef :>> ",e.value),e.value&&A().saveSchoolInfo(e.value),A().saveSchoolUserInfo,{...A(),...iu(),...cu(),...ru(),..._u()}}};const pu={class:"workbench-view-container"},du={class:"flex align-start"},Bu={class:"row-two-style flex"};function Eu(e,u,a,i,t,o){const s=m("LearningSituationPanel");m("WarningPanel");const c=m("HotPanel");m("ContentCategoryPanel"),m("DailyInteractionCountPanel");const l=m("MonthyContentFrame");return B(),E("div",pu,[n("div",du,[r(s,{username:e.schoolUserInfoRef.username,listData:e.studyDashboardCompleteCountRef,echartsData:e.studyDashboardCompleteListRef},null,8,["username","listData","echartsData"]),P("",!0)]),n("div",Bu,[r(c,{onChange:e.changeTabs,tableData:e.hotConentList},null,8,["onChange","tableData"]),P("",!0),P("",!0),r(l)])])}const bu=F(mu,[["render",Eu],["__scopeId","data-v-e5004cdd"]]);export{bu as default};

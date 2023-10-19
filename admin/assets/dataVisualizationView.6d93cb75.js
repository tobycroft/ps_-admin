import{g as q,a as J}from"./ak.eca20a65.js";import{d as w,b as c,k as F,_ as R,r as d,o as g,c as h,h as _,F as L,f as N,a as u,w as m,t as D,v as x,x as T,y as M,n as K,j as Q,i as A,C as V,D as W,g as X,u as Z}from"./index.9e096156.js";import{i as H,C as P,D as ee}from"./CustomCard.e9eb1ad1.js";import{h as $}from"./moment.9709ab41.js";import{u as B}from"./school.781c14c8.js";import{u as te,f as ae,a as oe}from"./family.84ee7ccc.js";import{a as ne,u as se,b as le,v as ue,w as re,x as ce,y as ie,s as de,z as _e}from"./study.07328da3.js";import"./request.7327b199.js";const pe=w({name:"CompletedAmountOverview",props:{dataSource:{type:Object,default:()=>({})},dataSourceAvg:{type:Object,default:()=>({})}},setup(e){const t=c({total:{title:"\u603B\u8BBF\u95EE\u91CF",icon:"overview_total_icon_img",num:0,tag:{title:"\u4ECA\u65E5\u65B0\u589E",num:0},averageDaily:{title:"\u65E5\u5747\u8BBF\u95EE\u91CF",num:0}},daily:{title:"\u6BCF\u65E5\u4E00\u5B66\u603B\u5B66\u4E60\u91CF",icon:"overview_daily_icon_img",num:0,tag:{title:"\u4ECA\u65E5\u65B0\u589E",num:0},averageDaily:{title:"\u65E5\u5747\u5B66\u4E60\u91CF",num:0}},weekly:{title:"\u6BCF\u5468\u4E00\u505A\u603B\u5B8C\u6210\u91CF",icon:"overview_weekly_icon_img",num:0,tag:{title:"\u4ECA\u65E5\u65B0\u589E",num:0},averageDaily:{title:"\u65E5\u5747\u5B8C\u6210\u91CF",num:0}},monthy:{title:"\u6BCF\u6708\u4E00\u8BFE\u603B\u5B66\u4E60\u91CF",icon:"overview_monthly_icon_img",num:0,tag:{title:"\u4ECA\u65E5\u65B0\u589E",num:0},averageDaily:{title:"\u65E5\u5747\u5B66\u4E60\u91CF",num:0}}}),o=c(e.dataSource),n=c(e.dataSourceAvg);return F(()=>{o.value=e.dataSource,n.value=e.dataSourceAvg,Object.keys(o.value).length>0&&(t.value.total.num=o.value.total_all,t.value.total.tag.num=o.value.all_today,t.value.total.averageDaily.num=Math.ceil(n.value.all_num/n.value.day_num),t.value.daily.num=o.value.total_daily,t.value.daily.tag.num=o.value.daily,t.value.daily.averageDaily.num=Math.ceil(n.value.daily/n.value.day_num),t.value.weekly.num=o.value.total_weekly,t.value.weekly.tag.num=o.value.weekly_today,t.value.weekly.averageDaily.num=Math.ceil(n.value.weekly/n.value.day_num),t.value.monthy.num=o.value.total_monthy,t.value.monthy.tag.num=o.value.monthy_today,t.value.monthy.averageDaily.num=Math.ceil(n.value.monthy/n.value.day_num))}),{overviewListRef:t,getImageUrl:q}}});const me={class:"completed-amount-overview-container"},fe={class:"completed-amount-overview-ul flex"},ye={class:"flex"},ge={class:"title-style"},he={class:"flex-start align-end"},ve={class:"total-num-style"},Ce={class:"tag-box flex-center"},be={class:"flex-start"},De={class:"average-daily-title-style"},$e={class:"average-daily-num-style"};function Ee(e,t,o,n,r,l){const a=d("el-image"),s=d("el-card");return g(),h("div",me,[_("ul",fe,[(g(!0),h(L,null,N(e.overviewListRef,(i,f)=>(g(),h("li",{key:f,class:"completed-amount-overview-li"},[u(s,{class:"el-card-style","body-style":{padding:"0px"}},{default:m(()=>[_("header",ye,[_("p",ge,D(i.title),1),u(a,{class:"header-icon-style",src:e.getImageUrl(i.icon+".png")},null,8,["src"])]),_("article",he,[_("p",ve,D(i.num),1),_("div",Ce,[_("p",null,D(i.tag.title),1),_("p",null,D(i.tag.num),1)])]),_("footer",be,[_("p",De,D(i.averageDaily.title),1),_("p",$e,D(i.averageDaily.num),1)])]),_:2},1024)]))),128))])])}const Re=R(pe,[["render",Ee],["__scopeId","data-v-2b94ccf0"]]),we=w({name:"LearningTrend",props:{echartsData:{type:[Array,Object],default:()=>[]},dateType:{type:String,defualt:""}},setup(e,t){const o=c(),n=c(),r=c(["01\u65E5","02\u65E5","03\u65E5","04\u65E5","05\u65E5","06\u65E5"]),l=c([1e3,2e3,3e3,4e3,5e3,6e3]),a=(i,f)=>{const v=[];i.forEach(b=>{b.type===f&&v.push(b)});const y=new Set(v),p=Array.from(y),k=[],C=[];return Array.isArray(p)&&p.forEach(b=>{b.dates&&k.push(b.dates),b.count&&C.push(b.count)}),{xAxisData:k,seriesData:C}},s=c({});return x(()=>{const i=document.getElementById("LearningTrendChart"),f=H(i);F(()=>{o.value=e.echartsData,n.value=e.dateType;const v=a(o.value,n.value);r.value=v.xAxisData,l.value=v.seriesData,s.value={xAxis:{type:"category",data:r.value},yAxis:{type:"value"},grid:{top:"5%",left:"5%"},series:[{data:l.value,type:"bar",barWidth:"24",itemStyle:{borderRadius:0,color:"#1890FF"}}]},f.off("click"),f.on("click",function(y){console.log("params :>> ",y),t.emit("select",y.name)}),s.value&&f.setOption(s.value)}),s.value&&f.setOption(s.value)}),{}}});const j=e=>(T("data-v-c04c3402"),e=e(),M(),e),Be={class:"learning-trend-container"},Ae=j(()=>_("header",null,[_("p",{class:"title-style"},"\u5B66\u4E60\u8D8B\u52BF")],-1)),Fe=j(()=>_("article",null,[_("div",{id:"LearningTrendChart",class:"learning-trend-chart"})],-1)),ke=[Ae,Fe];function Se(e,t,o,n,r,l){return g(),h("div",Be,ke)}const Ie=R(we,[["render",Se],["__scopeId","data-v-c04c3402"]]);function Y(){const e=(r,l)=>`${t(r)}(${o(l)})`,t=r=>{const l=B().gradeList;if(Array.isArray(l)){const a=new Date().getFullYear();let s=2020;$().isBefore($(`${a}-09-01`))?s=a-Number(r):s=a-Number(r)+1;let i={id:-1,name:"\u5F02\u5E38\u6570\u636E"};for(const f of l)f.id===s&&(i=f);return i.name}},o=r=>{const l=B().classList;let a={id:-1,name:"\u5F02\u5E38\u6570\u636E"};if(Array.isArray(l))for(const s of l)s.id===r&&(a=s);return a?a.name:""};return{getGradeClassName:e,getGraderName:t,getClassName:o,getParentsName:r=>{const l=te().getFamilyRoleList,a=c("");return l.forEach(s=>{s.id===r&&(a.value=s.name)}),a.value}}}const Pe=w({name:"CustomStudyRanking",props:{listData:{type:[Array,Object],defualt:()=>[]}},setup(e){const t=c(),o=r=>{const l=[];for(const a of r)l.push({name:Y().getGradeClassName(a.year,a.class),num:`${a.count}\u4EBA`});return l},n=c([{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"}]);return F(()=>{if(t.value=e.listData,t.value!==void 0&&t.value.data){n.value=o(t.value.data);return}n.value=[],console.log("StudyRankingListRef.value :>> ",n.value)}),{StudyRankingListRef:n}}});const Ye={class:"custom-study-ranking-container"},Le={key:0,class:"study-ranking-ul"},Ne={class:"left-box-style flex-start"},Te={class:"study-ranking-name-style"},Me={class:"study-ranking-num-style"};function Ge(e,t,o,n,r,l){const a=d("el-scrollbar");return g(),h("div",Ye,[e.StudyRankingListRef.length>0?(g(),h("div",Le,[u(a,null,{default:m(()=>[(g(!0),h(L,null,N(e.StudyRankingListRef,(s,i)=>(g(),h("div",{key:i,class:"study-ranking-li flex"},[_("div",Ne,[_("p",{class:K(["study-ranking-sort-style",{"top-three-sort-style":i<=2,"top-other-sort-style":i>2}])},D(i+1),3),_("p",Te,D(s.name),1)]),_("p",Me,D(s.num),1)]))),128))]),_:1})])):Q("",!0)])}const z=R(Pe,[["render",Ge],["__scopeId","data-v-1f7974de"]]),xe=w({name:"StudyRanking",components:{CustomStudyRanking:z},props:{listData:{type:[Array,Object],defualt:()=>[]}},setup(e){const t=c();return F(()=>{t.value=e.listData}),{listDataRef:t}}});const Oe=e=>(T("data-v-bac18253"),e=e(),M(),e),Ve={class:"study-ranking-container"},We=Oe(()=>_("header",null,[_("p",{class:"title-style"},"\u4ECA\u65E5\u73ED\u7EA7\u4EBA\u6570\u6392\u540D")],-1));function He(e,t,o,n,r,l){const a=d("CustomStudyRanking");return g(),h("div",Ve,[We,_("article",null,[u(a,{listData:e.listDataRef},null,8,["listData"])])])}const je=R(xe,[["render",He],["__scopeId","data-v-bac18253"]]);function ze(){const e=B().getSchoolInfo,t=c("daily"),o=c($().format("YYYY-MM-DD")),n=c($().format("YYYY-MM-DD")),r=()=>{o.value=$().format("YYYY-MM-DD"),n.value=$().format("YYYY-MM-DD")},l=()=>{const C=$().weekday()===0?7:$().weekday();o.value=$().subtract(C-1,"days").format("YYYY-MM-DD"),n.value=$().add(7-C,"days").format("YYYY-MM-DD")},a=()=>{const C=$().format("YYYY"),b=$().format("MM");o.value=$([C,0,1]).month(parseInt(b)-1).format("YYYY-MM-DD"),n.value=$([C,0,31]).month(parseInt(b)-1).format("YYYY-MM-DD")},s=c(""),i=C=>{if(typeof C.paneName=="string")switch(t.value=C.paneName,t.value){case"daily":r();break;case"weekly":l();break;case"monthy":a();break}v(o.value,n.value);const b=$(o.value).format("YYYY-MM-DD");p(t.value,b)},f=c(),v=async(C,b)=>{const I={start_date:C,end_date:b,school_id:e.id},S=await ne(I);f.value=Array.isArray(S)?S:[S]},y=c(),p=async(C,b)=>{const I=B().getSchoolInfo,S={limit:7,page:1,type:C,school_id:I.id,start_date:b},E=await se(S);y.value=E},k=C=>{console.log("onSelectLearningTrend_val :>> ",C),s.value=C;const b=$(s.value).format("YYYY-MM-DD");p(t.value,b)};return x(()=>{const C=$(s.value).format("YYYY-MM-DD"),b=$().format("YYYY-MM-DD");v(o.value,n.value),p(t.value,C!=="Invalid date"?C:b)}),{activeTypeRef:t,changeActiveType:i,studyDashboardCompleteListRef:f,studyDashboardRankClassRef:y,onSelectLearningTrend:k}}const Ue=w({name:"OverviewChart",components:{LearningTrend:Ie,StudyRanking:je},setup(){return{...ze()}}});const qe={class:"overview-chart-container"},Je={class:"flex"};function Ke(e,t,o,n,r,l){const a=d("el-tab-pane"),s=d("el-tabs"),i=d("LearningTrend"),f=d("StudyRanking"),v=d("el-card");return g(),h("div",qe,[u(v,{class:"el-card-style","body-style":{padding:"0px"}},{default:m(()=>[_("header",null,[u(s,{modelValue:e.activeTypeRef,"onUpdate:modelValue":t[0]||(t[0]=y=>e.activeTypeRef=y),class:"demo-tabs",onTabClick:e.changeActiveType},{default:m(()=>[u(a,{label:"\u6BCF\u65E5\u4E00\u5B66",name:"daily"}),u(a,{label:"\u6BCF\u5468\u4E00\u505A",name:"weekly"}),u(a,{label:"\u6BCF\u6708\u4E00\u8BFE",name:"monthy"})]),_:1},8,["modelValue","onTabClick"])]),_("article",Je,[u(i,{echartsData:e.studyDashboardCompleteListRef,dateType:e.activeTypeRef,onSelect:e.onSelectLearningTrend},null,8,["echartsData","dateType","onSelect"]),u(f,{listData:e.studyDashboardRankClassRef},null,8,["listData"])])]),_:1})])}const Qe=R(Ue,[["render",Ke],["__scopeId","data-v-317efa79"]]),Xe=w({name:"CustomPagination",props:{total:{type:Number,default:0},page:{type:Number,defualt:1},limit:{type:Number,defualt:10}},setup(e,t){const o=c(0),n=c(1),r=c(10),l=a=>{n.value=a,t.emit("change",n.value)};return F(()=>{o.value=e.total,e.page&&(n.value=e.page),e.limit&&(r.value=e.limit)}),{totalRef:o,pageRef:n,limitRef:r,changePage:l}}});const Ze={class:"custom-pagination-container flex-start"},et={class:"demonstration"};function tt(e,t,o,n,r,l){const a=d("el-pagination");return g(),h("div",Ze,[_("div",et,"\u5171"+D(e.totalRef)+"\u6761\u8BB0\u5F55",1),u(a,{small:"",background:"",layout:"prev, pager, next",total:e.totalRef,"current-page":e.pageRef,onCurrentChange:e.changePage},null,8,["total","current-page","onCurrentChange"])])}const O=R(Xe,[["render",tt],["__scopeId","data-v-2802132b"]]);function at(){const e=c("daily"),t=c(1),o=c(10),n=c(0),r=i=>{console.log("val :>> ",i),t.value=i,s(e.value)},l=c(),a=i=>{e.value=i.val},s=async i=>{const f=B().getSchoolInfo,v={limit:`${o.value}`,page:`${t.value}`,type:i,school_id:f.id},y=await le(v);l.value=y.data,typeof y.total=="number"&&(n.value=y.total)};return F(()=>{const i=e.value;typeof i=="string"&&s(i)}),{hotConentList:l,changeTabs:a,paramTypeRef:e,changePage:r,pageRef:t,limitRef:o,totalRef:n}}const ot=w({name:"HotRanking",components:{CustomPagination:O},setup(){return{headerCellStyle:{color:"#606266","background-color":"#F6F8FA"},...at()}}});const nt=e=>(T("data-v-bb504e83"),e=e(),M(),e),st={class:"hot-ranking-container"},lt={class:"flex"},ut=nt(()=>_("p",{class:"title-style"},"\u70ED\u95E8\u5185\u5BB9\u6392\u884C",-1)),rt=A("\u6BCF\u65E5\u4E00\u5B66"),ct=A("\u6BCF\u5468\u4E00\u505A"),it=A("\u6BCF\u6708\u4E00\u8BFE"),dt={class:"flex-end"};function _t(e,t,o,n,r,l){const a=d("el-radio-button"),s=d("el-radio-group"),i=d("el-table-column"),f=d("el-table"),v=d("CustomPagination"),y=d("el-card");return g(),h("div",st,[u(y,{class:"el-card-style","body-style":{padding:"0px"}},{default:m(()=>[_("header",lt,[ut,u(s,{class:"el-radio-group-style",modelValue:e.paramTypeRef,"onUpdate:modelValue":t[0]||(t[0]=p=>e.paramTypeRef=p),style:{"margin-bottom":"30px"}},{default:m(()=>[u(a,{label:"daily"},{default:m(()=>[rt]),_:1}),u(a,{label:"weekly"},{default:m(()=>[ct]),_:1}),u(a,{label:"monthy"},{default:m(()=>[it]),_:1})]),_:1},8,["modelValue"])]),_("article",null,[u(f,{data:e.hotConentList,style:{width:"100%"},"header-cell-style":e.headerCellStyle},{default:m(()=>[u(i,{type:"index",label:"\u6392\u540D",width:"60",align:"center"}),u(i,{prop:"title",label:"\u5185\u5BB9\u6807\u9898"}),u(i,{prop:"count",label:"\u5B8C\u6210\u91CF",width:"110",align:"center"})]),_:1},8,["data","header-cell-style"])]),_("footer",dt,[u(v,{total:e.totalRef,page:e.pageRef,limit:e.limitRef,onChange:e.changePage},null,8,["total","page","limit","onChange"])])]),_:1})])}const pt=R(ot,[["render",_t],["__scopeId","data-v-bb504e83"]]);function mt(){const e=B().schoolInfo,t=c("grade"),o=c(),n=async r=>{const l=e.id,s=await ue({type:r,school_id:l});console.log("res_\u5B66\u4E60\u6392\u884C :>> ",s),o.value=s.data};return F(()=>{n(t.value)}),{tabPositionRef:t,studyDashboardRankClassTypeRef:o}}const ft=w({name:"LearningRanking",components:{CustomPagination:O},setup(){return{headerCellStyle:{color:"#606266","background-color":"#F6F8FA"},...mt(),...Y()}}});const yt=e=>(T("data-v-b547e377"),e=e(),M(),e),gt={class:"learning-ranking-container"},ht={class:"flex"},vt=yt(()=>_("p",{class:"title-style"},"\u5B66\u4E60\u6392\u884C",-1)),Ct=A("\u5E74\u7EA7\u6392\u884C"),bt=A("\u73ED\u7EA7\u6392\u884C"),Dt={class:"flex-end"};function $t(e,t,o,n,r,l){const a=d("el-radio-button"),s=d("el-radio-group"),i=d("el-table-column"),f=d("el-table"),v=d("CustomPagination"),y=d("el-card");return g(),h("div",gt,[u(y,{class:"el-card-style","body-style":{padding:"0px"}},{default:m(()=>[_("header",ht,[vt,u(s,{class:"el-radio-group-style",modelValue:e.tabPositionRef,"onUpdate:modelValue":t[0]||(t[0]=p=>e.tabPositionRef=p),style:{"margin-bottom":"30px"}},{default:m(()=>[u(a,{label:"grade"},{default:m(()=>[Ct]),_:1}),u(a,{label:"class"},{default:m(()=>[bt]),_:1})]),_:1},8,["modelValue"])]),_("article",null,[u(f,{data:e.studyDashboardRankClassTypeRef,style:{width:"100%"},"header-cell-style":e.headerCellStyle},{default:m(()=>[u(i,{type:"index",label:"\u6392\u540D",width:"60",align:"center"}),u(i,{label:"\u540D\u79F0",width:"124"},{default:m(p=>[V(_("p",null,D(e.getGraderName(p.row.year)),513),[[W,e.tabPositionRef==="grade"]]),V(_("p",null,D(`${e.getGraderName(p.row.year)}(${e.getClassName(p.row.class)})`),513),[[W,e.tabPositionRef==="class"]])]),_:1}),u(i,{label:"\u5B66\u4E60\u603B\u91CF",align:"center"},{default:m(p=>[A(D(p.row.daily_count+p.row.monthy_count),1)]),_:1}),u(i,{label:"\u6D3B\u52A8\u603B\u91CF",align:"center"},{default:m(p=>[A(D(p.row.weekly_count),1)]),_:1}),u(i,{label:"\u603B\u5B8C\u6210\u91CF",align:"center"},{default:m(p=>[A(D(p.row.count),1)]),_:1})]),_:1},8,["data","header-cell-style"])]),_("footer",Dt,[u(v)])]),_:1})])}const Et=R(ft,[["render",$t],["__scopeId","data-v-b547e377"]]),Rt=w({name:"WordCloud",props:{listData:{type:[Array,Object],default:()=>[]}},setup(e){const t=c();let o=16;return F(()=>{t.value=e.listData.map(n=>(n.dataWeight=o,o--,console.log("item :>> ",n),n))}),{listRef:t,getRandom:J}}});const wt={class:"word-cloud-container"},Bt={class:"cloud",role:"navigation","aria-label":"Webdev word cloud"},At=["data-weight"];function Ft(e,t,o,n,r,l){return g(),h("div",wt,[_("ul",Bt,[(g(!0),h(L,null,N(e.listRef,a=>(g(),h("li",{key:a.id},[_("a",{href:"#","data-weight":a.dataWeight},D(a.name),9,At)]))),128))])])}const kt=R(Rt,[["render",Ft],["__scopeId","data-v-841199ed"]]);function St(){const e=c(),t=async(n,r)=>{const a=await re({school_id:n,limit:r});e.value=a},o=B().getSchoolInfo;return t(o.id,16),{tagInfoListRef:e}}const It=w({name:"HotTag",components:{WordCloud:kt,CustomCard:P},setup(){return{...St()}}});const Pt={class:"hot-tag-container"},Yt={class:"word-cloud-box"};function Lt(e,t,o,n,r,l){const a=d("WordCloud"),s=d("CustomCard");return g(),h("div",Pt,[u(s,{title:"\u91CD\u70B9\u5173\u6CE8\u4E3B\u9898"},{default:m(()=>[_("div",Yt,[u(a,{listData:e.tagInfoListRef},null,8,["listData"])])]),_:1})])}const Nt=R(It,[["render",Lt],["__scopeId","data-v-9dc1caf8"]]);function Tt(){console.log("useSchoolStore().schoolInfo :>> ",B().getSchoolInfo);const e=B().getSchoolInfo,t=c();return(async()=>{const n={school_id:e.id},r=await ce(n);console.log("res_\u5BB6\u5EAD\u6784\u6210\u5206\u6790 :>> ",r);const l=[];Array.isArray(r)&&r.forEach(a=>{const s=Y().getParentsName(a.family_role_id);l.push({value:a.count,name:s})}),t.value=l})(),{familyDashboardMemberGroupRoleRef:t}}const Mt=w({name:"FamilyCompositionAnalysis",components:{CustomCard:P,DoughnutChart:ee},setup(){return{legend:{orient:"vertical",top:"center",right:90},title:{text:"\u5BB6\u5EAD\u6784\u6210",subtext:"",left:"25%",top:"center",textStyle:{fontSize:14},subtextStyle:{fontSize:16}},...Tt()}}});const Gt={class:"family-composition-analysis-container"};function xt(e,t,o,n,r,l){const a=d("DoughnutChart"),s=d("CustomCard");return g(),h("div",Gt,[u(s,{title:"\u5BB6\u5EAD\u6784\u6210\u5206\u6790"},{default:m(()=>[u(a,{legend:e.legend,title:e.title,width:"60%",left:"0",echartsData:e.familyDashboardMemberGroupRoleRef},null,8,["legend","title","echartsData"])]),_:1})])}const Ot=R(Mt,[["render",xt],["__scopeId","data-v-5fd1d56a"]]),Vt=w({name:"BarChart",props:{gradeNames:{type:Array,default:()=>[]},bindNums:{type:Array,default:()=>[]}},setup(e){return x(()=>{const t=c(),o=c(),n=document.getElementById("barChart"),r=H(n),l=c({title:{text:""},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{show:!1,bottom:0},grid:{top:24,left:"3%",right:"4%",bottom:24,containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:t},series:[{name:"\u5E74\u7EA7",type:"bar",label:{show:!0,color:"#fff",fontSize:12},data:o}],barWidth:16,color:"#1890FF"});F(()=>{t.value=e.gradeNames,o.value=e.bindNums,l.value&&r.setOption(l.value)})}),{}}});const Wt={id:"barChart",class:"bar-chart-container"};function Ht(e,t,o,n,r,l){return g(),h("div",Wt)}const jt=R(Vt,[["render",Ht],["__scopeId","data-v-c1ab10cf"]]);function zt(){const e=c(),t=c(),o=c(),n=()=>{t.value=[],o.value=[],Array.isArray(e.value)&&e.value.forEach(l=>{t.value.push(Y().getGraderName(l.year)),o.value.push(l.count)}),console.log("gradeNamesRef :>> ",t.value),console.log("bindNumsRef :>> ",o.value)};return(async()=>{const a={school_id:B().getSchoolInfo.id},s=await ae(a);console.log("res_\u5E74\u7EA7\u5BB6\u957F\u7ED1\u5B9A\u6570 :>> ",s),e.value=s,n()})(),{gradeNamesRef:t,bindNumsRef:o}}const Ut=w({name:"GradeParentsBoundNum",components:{CustomCard:P,BarChart:jt},setup(){return{...zt()}}});const qt={class:"grade-parents-bound-num-container"};function Jt(e,t,o,n,r,l){const a=d("BarChart"),s=d("CustomCard");return g(),h("div",qt,[u(s,{title:"\u5E74\u7EA7\u5BB6\u957F\u7ED1\u5B9A\u6570"},{default:m(()=>[u(a,{bindNums:e.bindNumsRef,gradeNames:e.gradeNamesRef},null,8,["bindNums","gradeNames"])]),_:1})])}const Kt=R(Ut,[["render",Jt],["__scopeId","data-v-ee246aa4"]]);function Qt(){const e=c(),t=c();return(async()=>{const r={school_id:B().getSchoolInfo.id},l=await oe(r);console.log("res_\u73ED\u7EA7\u5BB6\u957F\u7ED1\u5B9A\u6392\u540D :>> ",l),e.value=l,t.value=l.data})(),{familyDashboardGroupParentClassRef:e,familyDashboardGroupParentClassListDataRef:t}}const Xt=w({name:"ClassBindingParentRanking",components:{CustomCard:P,CustomStudyRanking:z},setup(){return{...Qt()}}});const Zt={class:"class-binding-parent-ranking-container"};function ea(e,t,o,n,r,l){const a=d("CustomStudyRanking"),s=d("CustomCard");return g(),h("div",Zt,[u(s,{title:"\u73ED\u7EA7\u7ED1\u5B9A\u5BB6\u957F\u4EBA\u6570\u6392\u540D"},{default:m(()=>[u(a,{listData:e.familyDashboardGroupParentClassRef},null,8,["listData"])]),_:1})])}const ta=R(Xt,[["render",ea],["__scopeId","data-v-7efec27b"]]),aa=w({name:"CustomDropdown",props:{active:{type:Object,default:()=>({name:"\u9ED8\u8BA4\u9009\u9879",id:-1})},listData:{type:[Array,Object],default:()=>[]}},setup(e,t){const o=c(),n=c(e.listData),r=l=>{console.log("val :>> ",l),console.log("active.id :>> ",n.value);const a=c();n.value.forEach(s=>{l===s.id&&(a.value=s)}),t.emit("change",a.value)};return F(()=>{o.value=e.active,console.log("activeRef.value :>> ",o.value)}),{activeRef:o,listDataRef:n,onCommand:r}}});const oa={class:"custom-dropdown-contaienr"},na={class:"el-dropdown-link"};function sa(e,t,o,n,r,l){const a=d("arrow-down"),s=d("el-icon"),i=d("el-dropdown-item"),f=d("el-scrollbar"),v=d("el-dropdown-menu"),y=d("el-dropdown");return g(),h("div",oa,[u(y,null,{dropdown:m(()=>[u(v,null,{default:m(()=>[u(f,{class:"scroll-bar-style",height:"200px"},{default:m(()=>[(g(!0),h(L,null,N(e.listDataRef,p=>(g(),X(i,{key:p.id,onClick:k=>e.onCommand(p.id)},{default:m(()=>[A(D(p.name),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})]),default:m(()=>[_("span",na,[A(D(e.activeRef.name)+" ",1),u(s,{class:"el-icon--right"},{default:m(()=>[u(a)]),_:1})])]),_:1})])}const la=R(aa,[["render",sa],["__scopeId","data-v-63cefe7a"]]);function ua(){const e=Z(),t=c({name:"\u5168\u90E8\u5E74\u7EA7",id:-1}),o=c({name:"\u5168\u90E8\u73ED\u7EA7",id:-1}),n={"background-color":"#F6F8FA",color:"#606266"},r=c(),l=E=>$(E).utc().format("YYYY-MM-DD HH:mm:ss"),a=c(1),s=c(10),i=c(0),f=E=>{a.value=E,y()},v=c(),y=async()=>{const E=B().getSchoolInfo,U={limit:10,page:a.value,school_id:E.id,grade:t.value.id!==-1?t.value.id:"",class:o.value.id!==-1?o.value.id:"",student_id:18},G=await ie(U);v.value=G,r.value=G.data,console.log("tableDataRef.value :>> ",r.value),i.value=G.total};y();const p=B(),k=c(p.getGradeList),C=c(p.getClassList),b=E=>{console.log("val :>> ",E),t.value=E,y()},I=E=>{console.log("val :>> ",E),o.value=E,y()},S=E=>{console.log("val :>> ",E),e.push({path:"/parentsLearnDetailsView",query:{uid:E.uid,student_id:E.student_id}})};return{studyDashboardCompleteParentListRef:v,gradeActiveRef:t,classActiveRef:o,headerCellStyle:n,tableDataRef:r,fmtDateFn:l,...Y(),gradeListRef:k,classListRef:C,gradeChange:b,classChange:I,pageRef:a,limitRef:s,totalRef:i,onChangePage:f,onToView:S}}const ra=w({name:"ParentSupportWorkSituation",components:{CustomCard:P,CustomDropdown:la,CustomPagination:O},setup(){return{...ua()}}});const ca={class:"parent-support-work-situation-container"},ia={class:"filter-box"},da=A(" \u67E5\u770B "),_a={class:"flex-end"};function pa(e,t,o,n,r,l){const a=d("CustomDropdown"),s=d("el-table-column"),i=d("el-button"),f=d("el-table"),v=d("CustomPagination"),y=d("CustomCard");return g(),h("div",ca,[u(y,{title:"\u5BB6\u957F\u4ECA\u65E5\u5B66\u4E60\u60C5\u51B5"},{default:m(()=>[_("div",ia,[u(a,{active:e.gradeActiveRef,listData:e.gradeListRef,onChange:e.gradeChange},null,8,["active","listData","onChange"]),u(a,{class:"filter-class-style",active:e.classActiveRef,listData:e.classListRef,onChange:e.classChange},null,8,["active","listData","onChange"])]),u(f,{class:"el-table-style",data:e.tableDataRef,"header-cell-style":e.headerCellStyle,style:{width:"100%"}},{default:m(()=>[u(s,{type:"index",label:"\u6392\u540D",width:"60",align:"center"}),u(s,{prop:"wx_name",label:"\u5BB6\u957F"}),u(s,{prop:"studentInfo",label:"\u5B66\u751F\u4FE1\u606F",align:"center"},{default:m(p=>[A(D(p.row.name)+" | "+D(e.getGradeClassName(p.row.year,p.row.class)),1)]),_:1}),u(s,{prop:"daily_count",label:"\u6BCF\u65E5\u4E00\u5B66",align:"center"}),u(s,{prop:"weekly_count",label:"\u6BCF\u5468\u4E00\u505A",align:"center"}),u(s,{prop:"monthy_count",label:"\u6BCF\u6708\u4E00\u8BFE",align:"center"}),u(s,{prop:"date",label:"\u6700\u8FD1\u4E0A\u7EBF\u65F6\u95F4",align:"center"},{default:m(p=>[A(D(e.fmtDateFn(p.row.date)),1)]),_:1}),u(s,{prop:"date",label:"\u64CD\u4F5C",align:"center"},{default:m(p=>[u(i,{type:"primary",link:"",onClick:k=>e.onToView(p.row)},{default:m(()=>[da]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data","header-cell-style"]),_("footer",_a,[u(v,{page:e.pageRef,limit:e.limitRef,total:e.totalRef,onChange:e.onChangePage},null,8,["page","limit","total","onChange"])])]),_:1})])}const ma=R(ra,[["render",pa],["__scopeId","data-v-aa0b2534"]]);function fa(){const e=c({}),t=c({}),o=async()=>{const l={school_id:B().getSchoolInfo.id,type:"term"},a=await de(l);e.value=a},n=async()=>{const l={school_id:B().getSchoolInfo.id},a=await _e(l);t.value=a};return o(),n(),{studyDashboardCompleteCountRef:e,studyDashboardCompleteDailyRef:t}}const ya={name:"dataVisualizationView",components:{CompletedAmountOverview:Re,OverviewChart:Qe,HotRanking:pt,LearningRanking:Et,HotTag:Nt,FamilyCompositionAnalysis:Ot,GradeParentsBoundNum:Kt,ClassBindingParentRanking:ta,ParentSupportWorkSituation:ma},setup(){return{...fa()}}};const ga={class:"data-visualization-view-container"},ha={class:"row-style flex"},va={class:"row-style"};function Ca(e,t,o,n,r,l){const a=d("CompletedAmountOverview"),s=d("HotTag"),i=d("FamilyCompositionAnalysis"),f=d("ParentSupportWorkSituation");return g(),h("div",ga,[u(a,{dataSource:e.studyDashboardCompleteCountRef,dataSourceAvg:e.studyDashboardCompleteDailyRef},null,8,["dataSource","dataSourceAvg"]),_("div",ha,[u(s),u(i)]),_("div",va,[u(f)])])}const Fa=R(ya,[["render",Ca],["__scopeId","data-v-16e75689"]]);export{Fa as default};

import{_ as J,r as V,o as v,g as Q,w as A,a as l,i as y,t as o,j as P,B as G,h as e,d as oe,b as c,k as ne,v as X,c as g,n as B,C as u,D as _,F as U,f as E,$ as le,x as K,y as Z,I as j}from"./index.ae89ba5c.js";import{h as k}from"./moment.9709ab41.js";import{c as ce}from"./datacenter.dc8d1348.js";import{u as W}from"./school.1ff7a998.js";import{b as x}from"./calcFunc.61fd2dc9.js";import{h as de}from"./html2canvas.esm.3d083717.js";import"./request.43a4cd59.js";const ee="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAAXNSR0IArs4c6QAAAVZJREFUSEut1T9Lw0AcxvHvZbAg6OtQcOjiVnByEVycBEGKJgGVtm/ByUE6WFFBqtTByc2lvgMnxakvQBy6VhwcWnOSnDFna5LT3E2B3H3u4Xf/BJ5sIDjCVpMMCNgUkefLOtCyYstIuVKwTXwCDnFP1hAcF0r+KxyKrtzD4cQUX54HtwLrbYjMVFgl30JwmYevLMDtLnTuwb/+6p0Jq+Q7OJzp+FoZ7nrwPoQwabcGN4+woUfIhRXu43Ae428t6L/C6in09uHhGSqHMAq06Y1ghW/jcBF+zpag34TpKXh6gcUD+NDR3BqPF1fDZ0rQrcNSEwKV7mczThwP82QVQSdvQbN3RdpoLXnqBH9OHEtjC1q8FLqQhf87cZJ8Yp9HvwrDacffChzivnSB9nelrMHqbkluRauwSq4eC+uwSt6A6JnTXpDcI2XYQeHl5GkyHGfUrSrnPgH1gneJOCLCfwAAAABJRU5ErkJggg==";const re={class:"sum_amount"},ie={__name:"TableForRank",props:{tableList:{type:Array,default:()=>[]},mode:{type:String,default:"student"},page:{type:Number,default:1},pageSize:{type:Number,default:50}},setup(s){function n(p){if(!p)return"";const d=p.slice(0,1),a=p.slice(2);return d+"*"+a}const w={background:"#f6f8fa"};return(p,d)=>{const a=V("el-table-column"),h=V("el-table");return v(),Q(h,{data:s.tableList,style:{width:"100%"},"header-cell-style":w},{default:A(()=>[l(a,{label:"\u6392\u540D",width:"120",align:"center"},{default:A(t=>[y(o(s.page*s.pageSize+t.$index+1),1)]),_:1}),s.mode=="student"?(v(),Q(a,{key:0,prop:"name",label:"\u5B66\u751F\u59D3\u540D",width:"200"},{default:A(({row:t})=>[y(o(n(t.name)),1)]),_:1})):P("",!0),s.mode=="student"?(v(),Q(a,{key:1,prop:"wx_name",label:"\u5BB6\u957F\u59D3\u540D",width:"200"},{default:A(({row:t})=>[y(o(n(t.wx_name)),1)]),_:1})):P("",!0),l(a,{label:"\u6240\u5728\u73ED\u7EA7",width:"200"},{default:A(({row:t})=>[y(o(G(x)(t.year))+o(t.class)+"\u73ED ",1)]),_:1}),l(a,{prop:"teacher_name",label:"\u73ED\u4E3B\u4EFB\u59D3\u540D"},{default:A(({row:t})=>[y(o(n(t.teacher_name)),1)]),_:1}),l(a,{prop:"sum_amount",label:"\u65B0\u589E\u5B66\u5206",align:"center",width:"300"},{default:A(({row:t})=>[e("span",re,o(t.sum_amount),1)]),_:1})]),_:1},8,["data"])}}},ue=J(ie,[["__scopeId","data-v-b5003894"]]);const _e=oe({name:"Poster",props:{tableList:{type:Array,default:()=>[]},timeArr:{type:Array,default:()=>[]},mode:{type:String,default:"student"}},setup(s,n){const w=W(),p=c(),d=c(""),a=c([]),h=c("student"),t=c(""),i=c(""),R=[{id:"student",name:"\u5BB6\u957F"},{id:"class",name:"\u73ED\u7EA7"}];ne(()=>{p.value=w.getSchoolInfo,p.value.name&&(d.value=p.value.name),a.value=s.timeArr.concat([]),t.value=k(s.timeArr[0]).format("YYYY-MM-DD"),i.value=k(s.timeArr[1]).format("YYYY-MM-DD")});const D=()=>{n.emit("handleClose")},I=m=>{h.value=m,M()},L=(m,f)=>{m?(a.value[f]=k(a.value[f]).format("YYYY-MM-DD"),[t.value,i.value]=a.value,M()):a.value[f]=""},M=()=>{a.value[0]&&a.value[1]&&n.emit("handleSearch",h.value,a.value)},T=()=>{var m=document.querySelector("#posterImg");de(m,{useCORS:!0,allowTaint:!1,scale:5,dpi:300}).then(f=>{const Y=f.toDataURL("image/png");q(Y)})},q=m=>{let f=document.createElement("a"),Y=new MouseEvent("click");f.download="poster",f.href=m,f.dispatchEvent(Y)};return X(()=>{t.value=a.value[0],i.value=a.value[1]}),{handleClose:D,App_CalcCurrentGrade_ChineseNumber:x,projectNameRef:d,handleSelectSortItem:I,handleDate:L,downloadPoster:T,search:M,nameMask:m=>{if(!m)return"";const f=m.slice(0,1),Y=m.slice(2);return f+"*"+Y},dateArr:a,sortArr:R,selectSortArrRef:h,start_date:t,end_date:i}}}),S=s=>(K("data-v-a76e3d5f"),s=s(),Z(),s),pe={class:"poster-box"},ve={class:"poster-show-box"},he={class:"poster-box-left"},me={class:"header-content"},fe={class:"school-name"},be={class:"time"},Ae={class:"poster-content"},ge={class:"table"},ye={class:"table-th"},ke=S(()=>e("span",{class:"ranking"},"\u5E8F\u53F7",-1)),Se={class:"student-name"},we={class:"parent-name"},Ye=S(()=>e("span",{class:"class-name"},"\u6240\u5728\u73ED\u7EA7",-1)),$e={class:"teacher-name"},Ce=S(()=>e("span",{class:"score"},"\u7D2F\u8BA1\u5B66\u5206",-1)),Re={class:"table-body"},De={class:"ranking-td"},Me={class:"class-name"},Ve={class:"score-td"},Ie={class:"poster-box-right"},Le={class:"right-header"},Ne=S(()=>e("div",{class:"icon"},null,-1)),Be={class:"title"},Ue={class:"check-box"},Ee={class:"choose-box"},Fe={class:"date-box"},He=S(()=>e("div",{class:"o-char"},"\u9009\u62E9\u65F6\u95F4",-1)),Pe={class:"date-picker-wrap"},Te=S(()=>e("div",{class:"connect"},"-",-1)),qe={class:"sort-sec"},ze=S(()=>e("div",{class:"o-char"},"\u9009\u62E9\u5BF9\u8C61",-1)),Qe=["onClick"],Ge={class:"posterImg",id:"posterImg"},Je={class:"header-content"},Oe={class:"school-name"},je={class:"time"},Xe={class:"poster-content"},Ke={class:"table"},Ze={class:"table-th"},We=S(()=>e("span",{class:"ranking"},"\u5E8F\u53F7",-1)),xe={class:"student-name"},es={class:"parent-name"},ss=S(()=>e("span",{class:"class-name"},"\u6240\u5728\u73ED\u7EA7",-1)),ts={class:"teacher-name"},as=S(()=>e("span",{class:"score"},"\u7D2F\u8BA1\u5B66\u5206",-1)),os={class:"table-body"},ns={class:"ranking-td"},ls={class:"class-name"},cs={class:"score-td"};function ds(s,n,w,p,d,a){const h=V("el-date-picker");return v(),g("div",{class:"poster-wrap",onClick:n[5]||(n[5]=le((...t)=>s.handleClose&&s.handleClose(...t),["self"]))},[e("div",pe,[e("div",ve,[e("div",he,[e("div",{class:B(["poster-header",s.selectSortArrRef])},[e("div",me,[e("div",fe,o(s.projectNameRef),1),e("div",be,"["+o(s.start_date)+"-"+o(s.end_date)+"]",1)])],2),e("div",Ae,[e("div",ge,[e("div",ye,[ke,u(e("span",Se,"\u5B66\u751F\u59D3\u540D",512),[[_,s.selectSortArrRef=="student"]]),u(e("span",we,"\u5BB6\u957F\u59D3\u540D",512),[[_,s.selectSortArrRef=="student"]]),Ye,u(e("span",$e,"\u73ED\u4E3B\u4EFB\u59D3\u540D",512),[[_,s.selectSortArrRef=="class"]]),Ce]),e("div",Re,[(v(!0),g(U,null,E(s.tableList,(t,i)=>(v(),g("div",{class:"table-tr",key:i},[e("span",De,o(i+1),1),u(e("span",{class:"student-name"},o(s.nameMask(t.name)),513),[[_,s.selectSortArrRef=="student"]]),u(e("span",{class:"parent-name"},o(s.nameMask(t.wx_name)),513),[[_,s.selectSortArrRef=="student"]]),e("span",Me,o(s.App_CalcCurrentGrade_ChineseNumber(t.year))+o(t.class)+"\u73ED",1),u(e("span",{class:"teacher-name"},o(s.nameMask(t.teacher_name)),513),[[_,s.selectSortArrRef=="class"]]),e("span",Ve,o(t.sum_amount),1)]))),128))])])])]),e("div",Ie,[e("div",Le,[Ne,e("div",Be," \u597D\u5B66"+o(s.selectSortArrRef=="student"?"\u5BB6\u957F":"\u73ED\u7EA7")+"\u7EA2\u699C ",1)]),e("div",Ue,[e("div",Ee,[e("div",Fe,[He,e("div",Pe,[l(h,{modelValue:s.dateArr[0],"onUpdate:modelValue":n[0]||(n[0]=t=>s.dateArr[0]=t),type:"date",placeholder:"\u5F00\u59CB\u65E5\u671F",onChange:n[1]||(n[1]=t=>{s.handleDate(t,0)})},null,8,["modelValue"]),Te,l(h,{modelValue:s.dateArr[1],"onUpdate:modelValue":n[2]||(n[2]=t=>s.dateArr[1]=t),type:"date",placeholder:"\u7ED3\u675F\u65E5\u671F",onChange:n[3]||(n[3]=t=>{s.handleDate(t,1)})},null,8,["modelValue"])])]),e("div",qe,[ze,(v(!0),g(U,null,E(s.sortArr,(t,i)=>(v(),g("div",{class:B(["lab-item",s.selectSortArrRef==t.id?"active":""]),onClick:R=>s.handleSelectSortItem(t.id),key:i},o(t.name),11,Qe))),128))])]),e("div",{class:"btn-box",onClick:n[4]||(n[4]=(...t)=>s.downloadPoster&&s.downloadPoster(...t))},"\u4E0B\u8F7D\u56FE\u7247")])])])]),e("div",Ge,[e("div",{class:B(["poster-header",s.selectSortArrRef])},[e("div",Je,[e("div",Oe,o(s.projectNameRef),1),e("div",je,"["+o(s.start_date)+"-"+o(s.end_date)+"]",1)])],2),e("div",Xe,[e("div",Ke,[e("div",Ze,[We,u(e("span",xe,"\u5B66\u751F\u59D3\u540D",512),[[_,s.selectSortArrRef=="student"]]),u(e("span",es,"\u5BB6\u957F\u59D3\u540D",512),[[_,s.selectSortArrRef=="student"]]),ss,u(e("span",ts,"\u73ED\u4E3B\u4EFB\u59D3\u540D",512),[[_,s.selectSortArrRef=="class"]]),as]),e("div",os,[(v(!0),g(U,null,E(s.tableList,(t,i)=>(v(),g("div",{class:"table-tr",key:i},[e("span",ns,o(i+1),1),u(e("span",{class:"student-name"},o(t.name),513),[[_,s.selectSortArrRef=="student"]]),u(e("span",{class:"parent-name"},o(t.wx_name),513),[[_,s.selectSortArrRef=="student"]]),e("span",ls,o(s.App_CalcCurrentGrade_ChineseNumber(t.year))+o(t.class)+"\u73ED",1),u(e("span",{class:"teacher-name"},o(t.teacher_name),513),[[_,s.selectSortArrRef=="class"]]),e("span",cs,o(t.sum_amount),1)]))),128))])])])])])}const rs=J(_e,[["render",ds],["__scopeId","data-v-a76e3d5f"]]);const C=s=>(K("data-v-3af11204"),s=s(),Z(),s),is={class:"study-report-container"},us={key:0,class:"pre-wrap"},_s={class:"sort-wrap"},ps=C(()=>e("div",{class:"title-time"},[e("span",{class:"study-tit"},"\u5B66\u5206\u8868\u5F70\u67E5\u8BE2")],-1)),vs={class:"check-box"},hs={class:"choose-box"},ms={class:"sort-sec"},fs=C(()=>e("span",{class:"o-char"},"\u8868\u5F70\u5BF9\u8C61\uFF1A",-1)),bs=["onClick"],As={src:ee,alt:""},gs={class:"date-box"},ys=C(()=>e("span",{class:"o-char"},"\u9009\u62E9\u65F6\u95F4\uFF1A",-1)),ks={class:"date-picker-wrap"},Ss=C(()=>e("div",{class:"connect"},"-",-1)),ws={class:"btn-box"},Ys=y("\u91CD\u7F6E"),$s=y("\u67E5\u8BE2"),Cs={key:1,class:"suf-wrap"},Rs={class:"sort-wrap"},Ds=C(()=>e("div",{class:"title-time"},[e("span",{class:"study-tit"},"\u5B66\u5206\u8868\u5F70\u67E5\u8BE2")],-1)),Ms={class:"check-box"},Vs={class:"choose-box"},Is={class:"sort-sec"},Ls=C(()=>e("span",{class:"o-char"},"\u8868\u5F70\u5BF9\u8C61\uFF1A",-1)),Ns=["onClick"],Bs={src:ee,alt:""},Us={class:"date-box"},Es=C(()=>e("span",{class:"o-char"},"\u9009\u62E9\u65F6\u95F4\uFF1A",-1)),Fs={class:"date-picker-wrap"},Hs=C(()=>e("div",{class:"connect"},"-",-1)),Ps={class:"btn-box"},Ts=y("\u91CD\u7F6E"),qs=y("\u67E5\u8BE2"),zs={class:"poster-btn"},Qs=y("\u751F\u6210\u6D77\u62A5"),Gs={class:"data-wrap"},Js={class:"flex-start",style:{margin:"18px 0 0 0"}},Os={class:"flex"},js={class:"record-char"},Xs={__name:"creditRanking2",setup(s){const n=[{id:"student",name:"\u5BB6\u957F"},{id:"class",name:"\u73ED\u7EA7"}];c(!0);const w=c(!1),p=c("student"),d=c("student"),a=c([]),h=c(""),t=c(""),i=c(0),R=c(50),D=c(1),I=c([]),L=c(!1),M=$=>{d.value=$},T=()=>{L.value=!0},q=()=>{L.value=!1},O=()=>{h.value=k(a.value[0]).format("YYYY-MM-DD"),t.value=k(a.value[1]).format("YYYY-MM-DD"),p.value=d.value,F(),w.value=!0},m=()=>{p.value=d.value,h.value=k(a.value[0]).format("YYYY-MM-DD"),t.value=k(a.value[1]).format("YYYY-MM-DD"),F()},f=($,b)=>{d.value=$,[h.value,t.value]=b,F()},Y=()=>{a.value[0]=k().format("YYYY-MM-DD"),a.value[1]=k().format("YYYY-MM-DD"),h.value="",t.value="",D.value=1,d.value="student",p.value="student"},se=$=>{D.value=$,F()},F=async()=>{const $={coin_id:1,school_id:W().schoolInfo.id,limit:R.value,page:D.value,mode:d.value,start_date:h.value,end_date:t.value,study_type:""},b=await ce($);I.value=b.data,i.value=b.total};return X(()=>{a.value[0]=k().format("YYYY-MM-DD"),a.value[1]=k().format("YYYY-MM-DD")}),($,b)=>{const H=V("el-date-picker"),N=V("el-button"),te=V("el-pagination");return v(),g("div",is,[w.value?P("",!0):(v(),g("div",us,[e("div",_s,[ps,e("div",vs,[e("div",hs,[e("div",ms,[fs,(v(),g(U,null,E(n,(r,z)=>e("div",{class:B(["lab-item",d.value==r.id?"active":""]),onClick:ae=>M(r.id),key:z},[y(o(r.name)+" ",1),u(e("img",As,null,512),[[_,d.value==r.id]])],10,bs)),64))]),e("div",gs,[ys,e("div",ks,[l(H,{modelValue:a.value[0],"onUpdate:modelValue":b[0]||(b[0]=r=>a.value[0]=r),type:"date",placeholder:"\u5F00\u59CB\u65E5\u671F"},null,8,["modelValue"]),Ss,l(H,{modelValue:a.value[1],"onUpdate:modelValue":b[1]||(b[1]=r=>a.value[1]=r),type:"date",placeholder:"\u7ED3\u675F\u65E5\u671F"},null,8,["modelValue"])])])]),e("div",ws,[l(N,{onClick:Y},{default:A(()=>[Ys]),_:1}),l(N,{type:"primary",icon:G(j),onClick:O},{default:A(()=>[$s]),_:1},8,["icon"])])])])])),w.value?(v(),g("div",Cs,[e("div",Rs,[Ds,e("div",Ms,[e("div",Vs,[e("div",Is,[Ls,(v(),g(U,null,E(n,(r,z)=>e("div",{class:B(["lab-item",d.value==r.id?"active":""]),onClick:ae=>M(r.id),key:z},[y(o(r.name)+" ",1),u(e("img",Bs,null,512),[[_,d.value==r.id]])],10,Ns)),64))]),e("div",Us,[Es,e("div",Fs,[l(H,{modelValue:a.value[0],"onUpdate:modelValue":b[2]||(b[2]=r=>a.value[0]=r),type:"date",placeholder:"\u5F00\u59CB\u65E5\u671F"},null,8,["modelValue"]),Hs,l(H,{modelValue:a.value[1],"onUpdate:modelValue":b[3]||(b[3]=r=>a.value[1]=r),type:"date",placeholder:"\u7ED3\u675F\u65E5\u671F"},null,8,["modelValue"])])])]),e("div",Ps,[l(N,{onClick:Y},{default:A(()=>[Ts]),_:1}),l(N,{type:"primary",icon:G(j),onClick:m},{default:A(()=>[qs]),_:1},8,["icon"])]),e("div",zs,[l(N,{type:"primary",onClick:T},{default:A(()=>[Qs]),_:1})])])]),e("div",Gs,[l(ue,{tableList:I.value,mode:p.value,page:D.value-1,pageSize:R.value},null,8,["tableList","mode","page","pageSize"])]),e("div",Js,[e("div",Os,[e("span",js,"\u5171"+o(i.value)+"\u6761\u8BB0\u5F55",1),u(l(te,{background:"","page-size":R.value,"pager-count":5,layout:"prev, pager, next",total:i.value,onCurrentChange:se},null,8,["page-size","total"]),[[_,R.value]])])])])):P("",!0),u(l(rs,{tableList:I.value,onHandleClose:q,mode:p.value,timeArr:a.value,onHandleSearch:f},null,8,["tableList","mode","timeArr"]),[[_,L.value]])])}}},at=J(Xs,[["__scopeId","data-v-3af11204"]]);export{at as default};

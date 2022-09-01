import{r as N,a as z}from"./notice.ac35b376.js";import{u as w}from"./school.64450dc3.js";import{h as F}from"./moment.9709ab41.js";import{_ as G,r as n,s as T,b as l,o as _,c as u,e as o,w as c,h as e,F as y,f as V,t as p,i as B,C as q,E as b,v as J,x as K}from"./index.0d85ce7c.js";import"./request.ec642285.js";const O="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAHBJREFUOE9jZMAH0v4XMzAw9ECVlDDMYuzFpZyRgEH1DAwMDVA1DQyzGBtHDUILgbT/AxFGkCjmwRob/xkcGBgZHMBy/xkOMDAyHMARa18YGdL+/8ebBIiUpKpBVPIa/iwyELE26iJwcUJBMUJ0wQYA3SZKizrMD6EAAAAASUVORK5CYII=";const i=d=>(J("data-v-09e36433"),d=d(),K(),d),P={class:"notice-list-view-container"},Z=i(()=>e("div",{class:"card-header"},[e("span",null,"\u67E5\u8BE2\u901A\u77E5")],-1)),Q={class:"flex"},X={class:"flex"},j=i(()=>e("span",{class:"search-label"},"\u901A\u77E5\u540D\u79F0",-1)),W={class:"flex"},$=i(()=>e("span",{class:"search-label"},"\u901A\u77E5\u5BF9\u8C61",-1)),ee={class:"flex"},te=i(()=>e("span",{class:"search-label"},"\u521B\u5EFA\u65F6\u95F4",-1)),ae=B("\u67E5\u8BE2"),se={class:"notice-wrap"},oe=i(()=>e("img",{class:"add-icon",src:O,alt:""},null,-1)),le=i(()=>e("span",{class:"add-char"},"\u65B0\u5EFA\u901A\u77E5",-1)),ne={class:"flex"},ce={class:"time-char"},ie=B("\u5220\u9664"),de={class:"flex-end",style:{"margin-top":"24px"}},re={class:"flex"},_e={class:"record-char"},ue={__name:"noticeListView",setup(d){const m=n(""),v=n(0),f=n(1),g=n([]),h=n(""),A=n(""),D=[{value:"school",name:"\u5168\u6821"},{value:"grade",name:"\u5168\u5E74\u7EA7"},{value:"class",name:"\u5168\u73ED"},{value:"teacher",name:"\u5355\u4E2A\u6559\u5E08"},{value:"student",name:"\u5355\u4E2A\u5B66\u751F"},{value:"parent",name:"\u5355\u4E2A\u5BB6\u957F"},{value:"studycall",name:"\u5B66\u4E60\u4EFB\u52A1"}],r=async()=>{const s={receiver:m.value,content:h.value,date:A.value,limit:8,page:f.value,school_id:w().schoolInfo.id},a=await N(s);g.value=a.data,v.value=a.total},M=async s=>{const a={id:s,school_id:w().schoolInfo.id};await z(a),r()},k=s=>{q.confirm("\u662F\u5426\u786E\u8BA4\u5220\u9664?","\u63D0\u793A",{confirmButtonText:"\u662F",cancelButtonText:"\u5426",type:"warning"}).then(async()=>{await M(s),b({type:"success",message:"\u5220\u9664\u6210\u529F\uFF01"})}).catch(()=>{b({type:"info",message:"\u5220\u9664\u53D6\u6D88\uFF01"})})},I=s=>{f.value=s,r()},Y=s=>F(s).format("YYYY-MM-DD HH:mm:ss");return T(()=>{r()}),(s,a)=>{const C=l("el-input"),E=l("el-option"),R=l("el-select"),S=l("el-date-picker"),x=l("el-button"),U=l("el-card"),H=l("router-link"),L=l("el-pagination");return _(),u("div",P,[o(U,{class:"box-card"},{header:c(()=>[Z]),default:c(()=>[e("div",Q,[e("div",X,[j,o(C,{style:{width:"200px","margin-right":"24px"},modelValue:h.value,"onUpdate:modelValue":a[0]||(a[0]=t=>h.value=t),class:"m-2",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u4EFB\u52A1\u540D\u79F0"},null,8,["modelValue"])]),e("div",W,[$,o(R,{modelValue:m.value,"onUpdate:modelValue":a[1]||(a[1]=t=>m.value=t),class:"m-2",clearable:"",placeholder:"\u8BF7\u9009\u62E9\u901A\u77E5\u5BF9\u8C61"},{default:c(()=>[(_(),u(y,null,V(D,t=>o(E,{key:t.value,label:t.name,value:t.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),e("div",ee,[te,o(S,{modelValue:A.value,"onUpdate:modelValue":a[2]||(a[2]=t=>A.value=t),type:"datetime",placeholder:"\u8BF7\u9009\u62E9\u4EFB\u52A1\u521B\u5EFA\u65F6\u95F4","value-format":"YYYY-MM-DD HH:mm:ss"},null,8,["modelValue"])]),o(x,{class:"search-btn",onClick:r},{default:c(()=>[ae]),_:1})])]),_:1}),e("div",se,[o(H,{to:"/noticeAddView",class:"notice-item-add flex-center"},{default:c(()=>[oe,le]),_:1}),(_(!0),u(y,null,V(g.value,t=>(_(),u("div",{class:"notice-item",key:t.id},[e("h2",null,p(t.title),1),e("p",null,p(t.content),1),e("div",ne,[e("span",ce,p(Y(t.date)),1),o(x,{class:"btn-del",onClick:pe=>k(t.id)},{default:c(()=>[ie]),_:2},1032,["onClick"])])]))),128))]),e("div",de,[e("div",re,[e("span",_e,"\u5171"+p(v.value)+"\u6761\u8BB0\u5F55",1),o(L,{"page-size":8,"pager-count":5,layout:"prev, pager, next",total:v.value,onCurrentChange:I},null,8,["total"])])])])}}},ge=G(ue,[["__scopeId","data-v-09e36433"]]);export{ge as default};

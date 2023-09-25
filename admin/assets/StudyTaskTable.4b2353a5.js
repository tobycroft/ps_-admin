import{h as D}from"./moment.9709ab41.js";import{f as I}from"./study.18f9fbeb.js";import{u as A}from"./school.3e6309b7.js";import{_ as V,r as s,o as n,c as y,a,w as e,g as i,j as u,i as d,t as p,F as b,f as g,h as $}from"./index.8c7dda5f.js";const z=d("\u7F16\u8F91"),N=d("\u5220\u9664"),O=d("\u9884\u89C8"),Y=d("\u6DFB\u52A0"),F={__name:"StudyTaskTable",props:{hasOperation:{type:Boolean,default:!1},hasOperationAdd:{type:Boolean,default:!1},hasCheckBox:{type:Boolean,default:!1},tableData:{type:Array,default:()=>[]},type:{type:String,default:""}},emits:["onRefresh","addIt"],setup(c,{emit:h}){const x={background:"#f6f8fa"},w=r=>D(r).format("YYYY-MM-DD HH:mm:ss"),C=async(r,k)=>{const f={school_id:A().schoolInfo.id,study_type:k,study_id:r};await I(f),h("onRefresh")},S=r=>{h("addIt",r)};return(r,k)=>{const f=s("el-checkbox"),l=s("el-table-column"),m=s("el-tag"),_=s("el-button"),B=s("router-link"),T=s("el-popconfirm"),v=s("el-table");return n(),y("div",null,[a(v,{data:c.tableData,style:{width:"100%"},"header-cell-style":x},{default:e(()=>[c.hasCheckBox?(n(),i(l,{key:0,align:"left",fixed:"left",label:"",width:"80"},{default:e(()=>[a(f)]),_:1})):u("",!0),a(l,{prop:"id",label:"\u5E8F\u53F7",width:"100"}),a(l,{prop:"title",label:"\u6807\u9898",width:"380"}),c.type=="monthy"?(n(),i(l,{key:1,prop:"name",label:"\u4E3B\u8BB2\u6559\u5E08",width:"140"})):u("",!0),a(l,{prop:"grade",label:"\u9002\u5B9C\u5E74\u7EA7",align:"center"},{default:e(({row:t})=>[a(m,{type:"success"},{default:e(()=>[d(p(t.grade+"\u5E74\u7EA7"),1)]),_:2},1024)]),_:1}),a(l,{label:"\u4EFB\u52A1\u6807\u7B7E1",width:"280",align:"center"},{default:e(({row:t})=>[(n(!0),y(b,null,g(t.common_tag,o=>(n(),i(m,{style:{margin:"4px"},key:o.id},{default:e(()=>[d(p(o.name),1)]),_:2},1024))),128))]),_:1}),a(l,{label:"\u4EFB\u52A1\u6807\u7B7E2",width:"280",align:"center"},{default:e(({row:t})=>[(n(!0),y(b,null,g(t.special_tag,o=>(n(),i(m,{type:"warning",style:{margin:"4px"},key:o.id},{default:e(()=>[d(p(o.name),1)]),_:2},1024))),128))]),_:1}),a(l,{label:"\u63A8\u8350\u5C55\u793A\u65F6\u95F4",width:"180",align:"center"},{default:e(({row:t})=>[$("span",null,p(w(t.show_date)),1)]),_:1}),c.hasOperation?(n(),i(l,{key:2,align:"center",fixed:"right",label:"\u64CD\u4F5C",width:"120"},{default:e(({row:t})=>[a(B,{to:`/createTask?type=${t.study_type}&study_id=${t.study_id}&id=${t.id}`},{default:e(()=>[a(_,{link:"",type:"primary",size:"small"},{default:e(()=>[z]),_:1})]),_:2},1032,["to"]),a(T,{title:"\u5220\u9664\u540E\u5C06\u4E0D\u53EF\u6062\u590D\uFF0C\u786E\u8BA4\u662F\u5426\u5220\u9664?",onConfirm:o=>C(t.study_id,t.study_type)},{reference:e(()=>[a(_,{link:"",type:"primary",size:"small"},{default:e(()=>[N]),_:1})]),_:2},1032,["onConfirm"])]),_:1})):u("",!0),c.hasOperationAdd?(n(),i(l,{key:3,align:"center",fixed:"right",label:"\u64CD\u4F5C",width:"120"},{default:e(({row:t})=>[a(_,{link:"",type:"primary",size:"small"},{default:e(()=>[O]),_:1}),a(_,{link:"",type:"primary",size:"small",onClick:o=>S(t.id)},{default:e(()=>[Y]),_:2},1032,["onClick"])]),_:1})):u("",!0)]),_:1},8,["data"])])}}},R=V(F,[["__scopeId","data-v-8e730cf7"]]);export{R as S};

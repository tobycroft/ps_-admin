import{e as S,f as P}from"./teacher.e65d7472.js";import{u as f}from"./school.1b60fd80.js";import{_ as k,V as Y,r as Q,H as j,s as q,u as B,b as s,o as m,c as p,e as o,w as n,g as d,t as X,F as D,f as F,i as A,v as R,x as W}from"./index.f157a02a.js";const K="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAjCAYAAACHIWrsAAAAAXNSR0IArs4c6QAAA79JREFUWEfll11oHFUUx//nTnaTKhihKil9CC0BUSlY+mBCRVsfFMVvCD5Y8KP7AS2b7iRY4+6mXs1ultaYnaRI3eykFcHHglFES1UqGBSpYCkpit8Qaf0guCVk053MHNlCkpndndkJbkFwH2f+5/zO/9x7z50l+PjFYhOtm7a2PggojzOwk8CbGVQi8G9M9DExTibU0IyPVKBGovSY/oggjIHQ5all/myZrdih/uh5L50nMKMVXiDQkUZFrbxn8CLATybjkVNuMa7AjFYYINCoX9iajg0w7XZrcV1gdrywg5nO1oHNMfhTNvE1Cb6eSHSD+V4QtTu0zH+Ui9YWKaOL1TnqAjNa4SMCPWAXMyP/63VmbDIaNezP5WvHbgkEAtMEdNufW0A6FQ8NNQRmx/QuFvjeKeSpRDwccmtvJJ8PdC4q54hwm00zV/57rlNKadnjahxmxvUDxNBWNwKjbBhXOuXB/Ze81nM4V7hPIfrE4dLkntRA+EtPYFbTTzDwrE30XiIeeszP5sloepGAG9aKtZ5LqpG3PIEjuclTIHH/WhAfS6rhfX6AI5pe2Wg7VrREJF86sPeVdTlk5reTavgZX8Cc/gsInTaHfUk1ctR7DbWpUQIPrIoYswk1tA0Ae0HlaP6mYIvyp2MN2dqTUiPveAKHX598WFHE+84jQQ8l1b0fegHTOf2wIBy0LYW1UCp1ZBN9jiJqdmlsYqK1w9ywQEQtq8Hg3y8vWbceHowW60HTE4VuYdEXziJ5JqmG7254DiuC9NhkSggx7EgALBHz0xeV0gcb5+eN2dnbqacHwSVRPATQYFVitmDek4pHP/cFrIhGNP0igA4/m6WO5t1EPPREvVjX4S2PvNERDLb+DKBtndBvEvHQdrcYz+tJyhNtwRvNCtSvU1dnq2ezUfVSypZg++ZHQXTSVcsoCrZ2DvZHLjQ6Pg1v/BVIb2+vcseuXRvajLY7Lba2saCiYirnly6Xf5QyWmoE8u2wUQfW+77Gocwd3yoIN683UT19aXHhJ8+D/6pW2NMCOg4g0AwgmItm2bhr6MV939W0NJPTnyfCm02Drc04B/RqSzOaroJ5lIhEU5xVjx3mvwymHtkf+oGuNcw2zK9CaUTTlwEoVYN32lhejoCE43vEr3vFQrsIKqcJ2FI1j09XgI57jpmnLymlp4729V3xC6iny+Tym0DKTBX0TA3QZN49pIbP/BvYSmx2fOplZpa2XP8BIDO+IsJ8MxyC0VX1J6jWYVNA7kn+D8DKl/Y1bqM9/bf/AEE5oa3qAWopAAAAAElFTkSuQmCC";const v=c=>(R("data-v-b03acb33"),c=c(),W(),c),M={class:"notice-add-view-container"},J={class:"card-header"},z={class:"flex-center",style:{"padding-top":"20px"}},L={class:"flex-center",style:{"margin-bottom":"48px"}},G=["src"],O={key:1,class:"avatar-wrap"},Z=v(()=>d("div",{class:"avatar flex-center"},[d("img",{class:"avatar-img",src:K,alt:""})],-1)),$=v(()=>d("span",{class:"upload-char"},"\u70B9\u51FB\u4E0A\u4F20\u5934\u50CF",-1)),ee=[Z,$],ae=A("\u91CD\u7F6E"),oe=A("\u5B8C\u6210"),ne={__name:"teacherAddView",setup(c){const e=Y({name:"",info:"",phone:"",gender:"",imageUrl:"",is_master:0,genderName:""}),i=Q(0),_=j();console.log(_.query);const g=[{id:1,name:"\u7537"},{id:2,name:"\u5973"}];q(()=>{const a=_.query;a.id&&(i.value=Number(a.id),e.name=a.name,e.info=a.info,e.phone=a.phone,e.gender=a.gender,e.imageUrl=a.img,g.forEach(l=>{l.id==e.gender&&(e.genderName=l.name)}))});const V=async()=>{const a={school_id:f().schoolInfo.id,name:e.name,info:e.info,img:e.imageUrl,gender:e.gender,phone:e.phone};await S(a)},b=async()=>{const a={id:i.value,school_id:f().schoolInfo.id,name:e.name,info:e.info,img:e.imageUrl,gender:e.gender,phone:e.phone};await P(a)},w=a=>{e.imageUrl=a.data},y=B(),N=async()=>{i.value?await b():await V(),y.push({path:"/teacherAddSuccessView"})},I=()=>{e.name="",e.info="",e.phone="",e.gender="",e.imageUrl="",e.genderName=""},C=a=>{e.gender=a};return(a,l)=>{const E=s("el-upload"),u=s("el-input"),r=s("el-form-item"),U=s("el-option"),x=s("el-select"),h=s("el-button"),T=s("el-form"),H=s("el-card");return m(),p("div",M,[o(H,{class:"box-card"},{header:n(()=>[d("div",J,[d("span",null,X(i.value?"\u7F16\u8F91":"\u65B0\u589E")+"\u6559\u5E08",1)])]),default:n(()=>[d("div",z,[o(T,{"label-position":"right","label-width":"120px",model:e,style:{width:"540px"}},{default:n(()=>[d("div",L,[o(E,{class:"avatar-uploader",action:"https://upload.familyeducation.org.cn:444/v1/file/index/upfull?token=ps","show-file-list":!1,"on-success":w},{default:n(()=>[e.imageUrl?(m(),p("img",{key:0,src:e.imageUrl,class:"avatar-img-up"},null,8,G)):(m(),p("div",O,ee))]),_:1})]),o(r,{label:"\u6559\u5E08\u540D\u79F0\uFF1A"},{default:n(()=>[o(u,{modelValue:e.name,"onUpdate:modelValue":l[0]||(l[0]=t=>e.name=t),placeholder:"\u8BF7\u8F93\u5165\u6559\u5E08\u540D\u79F0"},null,8,["modelValue"])]),_:1}),o(r,{label:"\u6027\u522B\uFF1A"},{default:n(()=>[o(x,{style:{width:"100%"},modelValue:e.genderName,"onUpdate:modelValue":l[1]||(l[1]=t=>e.genderName=t),class:"m-2",placeholder:"\u8BF7\u9009\u62E9\u6027\u522B",onChange:C},{default:n(()=>[(m(),p(D,null,F(g,t=>o(U,{key:t.name,label:t.name,value:t.id},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),o(r,{label:"\u7535\u8BDD\u53F7\u7801\uFF1A"},{default:n(()=>[o(u,{maxlength:"11",modelValue:e.phone,"onUpdate:modelValue":l[2]||(l[2]=t=>e.phone=t),placeholder:"\u8BF7\u8F93\u5165\u7535\u8BDD\u53F7\u7801"},null,8,["modelValue"])]),_:1}),o(r,{label:"\u5B66\u79D1\uFF1A"},{default:n(()=>[o(u,{modelValue:e.info,"onUpdate:modelValue":l[3]||(l[3]=t=>e.info=t),placeholder:"\u8BF7\u8F93\u5165\u5B66\u79D1"},null,8,["modelValue"])]),_:1}),o(r,null,{default:n(()=>[o(h,{onClick:I},{default:n(()=>[ae]),_:1}),o(h,{type:"primary",onClick:N},{default:n(()=>[oe]),_:1})]),_:1})]),_:1},8,["model"])])]),_:1})])}}},de=k(ne,[["__scopeId","data-v-b03acb33"]]);export{de as default};

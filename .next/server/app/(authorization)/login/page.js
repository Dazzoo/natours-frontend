(()=>{var e={};e.id=635,e.ids=[635],e.modules={55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},15452:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.ZP,__next_app__:()=>p,originalPathname:()=>d,pages:()=>u,routeModule:()=>c,tree:()=>l});var s=r(67096),a=r(16132),i=r(38438),n=r(32564),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);r.d(t,o);let l=["",{children:["(authorization)",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,23928)),"D:\\Files\\Git_repo\\natours-frontend\\app\\(authorization)\\login\\page.jsx"]}]},{}]},{"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,86786)),"D:\\Files\\Git_repo\\natours-frontend\\app\\layout.tsx"],error:[()=>Promise.resolve().then(r.bind(r,80283)),"D:\\Files\\Git_repo\\natours-frontend\\app\\error.jsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["D:\\Files\\Git_repo\\natours-frontend\\app\\(authorization)\\login\\page.jsx"],d="/(authorization)/login/page",p={require:r,loadChunk:()=>Promise.resolve()},c=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(authorization)/login/page",pathname:"/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},59894:(e,t,r)=>{Promise.resolve().then(r.bind(r,61735))},61735:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var s=r(30784),a=r(9885),i=r(66558),n=r(57114),o=r(75605),l=r(15113),u=r(50951),d=r(63024);let __WEBPACK_DEFAULT_EXPORT__=function(e){let{register:t,handleSubmit:r,formState:{errors:p},setError:c,watch:m}=(0,i.cI)(),x=(0,n.useRouter)(),{user:_,mutate:g,loggedOut:h,isLoading:f}=(0,u.Z)(),onSubmit=async e=>{let t=await l.Z.Login(e["Email address"],e.Password);t&&(localStorage.setItem("jwt",t),g(),x.push("/"),window.location.reload())};return(0,a.useEffect)(()=>{_&&x.push("/")},[_]),(0,s.jsxs)("form",{onSubmit:r(onSubmit),children:[s.jsx("div",{className:"flex flex-col mb-[2.5rem] max-md:mb-[1.4rem] relative",children:s.jsx(d.Z,{type:"text",required:!0,errors:p,register:t,pattern_value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,pattern_message:"Wrong email format",label:!0,name:"Email address"})}),s.jsx("div",{className:"flex flex-col mb-[2.5rem] relative",children:s.jsx(d.Z,{type:"password",required:!0,errors:p,register:t,pattern_value:/.{8,}/,pattern_message:"At least 8 characters is required",label:!0,name:"Password"})}),(0,s.jsxs)("div",{className:"mt-[3rem] flex justify-between items-center",children:[s.jsx(o.Z,{value:"Login"}),s.jsx("a",{href:"/forgot-password",className:"text-[1.6rem] ml-[1rem] max-md:text-[1.4rem] text-grey-boulder font-semibold",children:"Forgot password ?"})]})]})}},23928:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>login_page});var s=r(4656);r(3542);var a=r(79478),i=r(95153);let n=(0,i.createProxy)(String.raw`D:\Files\Git_repo\natours-frontend\app\(authorization)\login\LoginForm.jsx`),{__esModule:o,$$typeof:l}=n,u=n.default;var d=r(45047);let login_page=function(e){return(0,s.jsxs)(a.Z,{children:[s.jsx(d.Z,{className:"mb-[3.5rem] max-md:text-center",value:"Log into your account"}),s.jsx(u,{})]})}},79478:(e,t,r)=>{"use strict";r.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var s=r(4656);r(3542);let __WEBPACK_DEFAULT_EXPORT__=function({children:e}){return s.jsx("main",{className:"bg-white-alabaster py-[8rem] px-[6rem]  flex justify-center font-lato ",children:s.jsx("div",{className:"bg-white-basic max-w-[55rem] min-w-[10rem] w-[55rem] bg-white min-h-[20rem] py-[5rem] px-[7rem]    max-md:py-[2rem] max-md:px-[3.5rem] box-shadow-bold rounded-[5px] ",children:e})})}},45047:(e,t,r)=>{"use strict";r.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var s=r(4656);r(3542);let __WEBPACK_DEFAULT_EXPORT__=function({value:e,className:t}){return s.jsx("h2",{className:`uppercase font-bold	text-[2.25rem] bg-green-emerald-gradient bg-clip-text text-transparent ${t}`,children:e})}}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[993,323,878,166,157],()=>__webpack_exec__(15452));module.exports=r})();
var S=Object.create;var a=Object.defineProperty,v=Object.defineProperties,D=Object.getOwnPropertyDescriptor,E=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertyNames,w=Object.getOwnPropertySymbols,T=Object.getPrototypeOf,h=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var g=(t,e,o)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,d=(t,e)=>{for(var o in e||(e={}))h.call(e,o)&&g(t,o,e[o]);if(w)for(var o of w(e))V.call(e,o)&&g(t,o,e[o]);return t},C=(t,e)=>v(t,E(e)),B=t=>a(t,"__esModule",{value:!0});var O=(t,e)=>{B(t);for(var o in e)a(t,o,{get:e[o],enumerable:!0})},P=(t,e,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of I(e))!h.call(t,s)&&s!=="default"&&a(t,s,{get:()=>e[s],enumerable:!(o=D(e,s))||o.enumerable});return t},x=t=>P(B(a(t!=null?S(T(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t);O(exports,{ce:()=>R,cl:()=>k,firebaseClearError:()=>b,firebaseClearUser:()=>W,firebaseDocToObject:()=>j,isNothing:()=>N,isSomething:()=>f,isSomethingWithId:()=>U,modalClose:()=>F,modalConfirm:()=>J,modalError:()=>M,modalInfo:()=>X,modalInput:()=>G,modalInputWithDelete:()=>H,modalLoading:()=>A,modalSuccess:()=>K,modalWarning:()=>Q,toastError:()=>Y,toastInfo:()=>z,toastSuccess:()=>_,toastWarning:()=>q});var i=x(require("lodash")),N=t=>i.default.isUndefined(t)||i.default.isNull(t)||i.default.isNaN(t),f=t=>!N(t),U=t=>f(t)&&f(t.id);var W=t=>t==null?null:{uid:t.uid,email:t.email,displayName:t.displayName,photoURL:t.photoURL,phoneNumber:t.phoneNumber},b=t=>t==null?null:{code:t.code,message:t.message},j=(t,e={})=>{if(t==null)return null;let o=t.data(),s=t.id;return C(d(d({},o),e),{id:s})};var y=process.env.NODE_ENV==="development",k=(...t)=>{!y||console.log(...t)},R=(...t)=>{!y||console.error(...t)};var L=x(require("sweetalert2/dist/sweetalert2.js")),l=(t,e)=>{L.default.fire({position:"top-end",toast:!0,timer:1e5,showConfirmButton:!1,padding:0,background:"transparent",customClass:{htmlContainer:"toh-container-swal",popup:"toh-popup-swal"},html:'<div class="alert alert-'+t+' mb-0" role="alert">'+e+"</div>"})},_=t=>{l("success",t)},Y=t=>{l("danger",t)},q=t=>{l("warning",t)},z=t=>{l("info",t)};var n=x(require("sweetalert2/dist/sweetalert2.js")),p=(t,e,o)=>{n.default.fire({icon:t,title:e,text:o})},A=(t="Please wait...",e="Loading")=>{let o={title:e,text:t,showConfirmButton:!1,showCancelButton:!1,allowOutsideClick:!1,customClass:"simplepad-swal2",didOpen:()=>{n.default.showLoading()}};n.default.fire(o)},F=()=>{n.default.hideLoading(),n.default.close()},G=(t,e,o,s)=>new Promise(async(r,c)=>{let u={title:e,input:"text",inputLabel:o,inputValue:t,showCancelButton:!0,confirmButtonText:"Save",customClass:"simplepad-swal2",inputValidator:s},m=await n.default.fire(u);r(m)}),H=(t,e,o,s)=>new Promise(async(r,c)=>{let u={title:e,input:"text",inputLabel:o,inputValue:t,showCancelButton:!0,showDenyButton:!0,confirmButtonText:"Save",denyButtonText:"Delete",customClass:"simplepad-swal2",inputValidator:s},m=await n.default.fire(u);r(m)}),J=(t,e)=>new Promise(async(o,s)=>{let r={title:t,text:e,showCancelButton:!0,confirmButtonText:"Yes",customClass:"simplepad-swal2"},c=await n.default.fire(r);o(c)}),K=(t,e)=>{p("success",t,e)},M=(t,e)=>{p("error",t,e)},Q=(t,e)=>{p("warning",t,e)},X=(t,e)=>{p("info",t,e)};0&&(module.exports={ce,cl,firebaseClearError,firebaseClearUser,firebaseDocToObject,isNothing,isSomething,isSomethingWithId,modalClose,modalConfirm,modalError,modalInfo,modalInput,modalInputWithDelete,modalLoading,modalSuccess,modalWarning,toastError,toastInfo,toastSuccess,toastWarning});
//# sourceMappingURL=bundle.js.map
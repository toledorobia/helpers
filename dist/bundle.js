var L=Object.create;var i=Object.defineProperty,S=Object.defineProperties,v=Object.getOwnPropertyDescriptor,D=Object.getOwnPropertyDescriptors,E=Object.getOwnPropertyNames,w=Object.getOwnPropertySymbols,I=Object.getPrototypeOf,h=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var g=(t,e,o)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,d=(t,e)=>{for(var o in e||(e={}))h.call(e,o)&&g(t,o,e[o]);if(w)for(var o of w(e))T.call(e,o)&&g(t,o,e[o]);return t},C=(t,e)=>S(t,D(e)),B=t=>i(t,"__esModule",{value:!0});var V=(t,e)=>{B(t);for(var o in e)i(t,o,{get:e[o],enumerable:!0})},O=(t,e,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of E(e))!h.call(t,s)&&s!=="default"&&i(t,s,{get:()=>e[s],enumerable:!(o=v(e,s))||o.enumerable});return t},x=t=>O(B(i(t!=null?L(I(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t);V(exports,{ce:()=>R,cl:()=>k,firebaseClearError:()=>W,firebaseClearUser:()=>U,firebaseDocToObject:()=>j,isNothing:()=>N,isSomething:()=>f,isSomethingWithId:()=>P,modalClose:()=>F,modalConfirm:()=>J,modalError:()=>M,modalInfo:()=>X,modalInput:()=>G,modalInputWithDelete:()=>H,modalLoading:()=>A,modalSuccess:()=>K,modalWarning:()=>Q,toastError:()=>Y,toastInfo:()=>z,toastSuccess:()=>_,toastWarning:()=>q});var a=x(require("lodash")),N=t=>a.default.isUndefined(t)||a.default.isNull(t)||a.default.isNaN(t),f=t=>!N(t),P=t=>f(t)&&f(t.id);var U=t=>t==null?null:{uid:t.uid,email:t.email,displayName:t.displayName,photoURL:t.photoURL,phoneNumber:t.phoneNumber},W=t=>t==null?null:{code:t.code,message:t.message},j=(t,e={})=>{if(t==null)return null;let o=t.data(),s=t.id;return C(d(d({},o),e),{id:s})};var b=process.env.NODE_ENV==="development",k=(...t)=>{!b||console.log(...t)},R=(...t)=>{!b||console.error(...t)};var y=x(require("sweetalert2/dist/sweetalert2.js")),l=(t,e)=>{y.default.fire({position:"top-end",toast:!0,timer:5e3,showConfirmButton:!1,padding:0,background:"transparent",customClass:{htmlContainer:"toh-container-swal",popup:"toh-popup-swal"},html:'<div class="alert alert-'+t+' mb-0" role="alert">'+e+"</div>"})},_=t=>{l("success",t)},Y=t=>{l("danger",t)},q=t=>{l("warning",t)},z=t=>{l("info",t)};var n=x(require("sweetalert2/dist/sweetalert2.js")),p=(t,e,o)=>{n.default.fire({icon:t,title:e,text:o})},A=(t="Please wait...",e="Loading")=>{let o={title:e,text:t,showConfirmButton:!1,showCancelButton:!1,allowOutsideClick:!1,customClass:"simplepad-swal2",didOpen:()=>{n.default.showLoading()}};n.default.fire(o)},F=()=>{n.default.hideLoading(),n.default.close()},G=(t,e,o,s)=>new Promise(async(r,c)=>{let u={title:e,input:"text",inputLabel:o,inputValue:t,showCancelButton:!0,confirmButtonText:"Save",customClass:"simplepad-swal2",inputValidator:s},m=await n.default.fire(u);r(m)}),H=(t,e,o,s)=>new Promise(async(r,c)=>{let u={title:e,input:"text",inputLabel:o,inputValue:t,showCancelButton:!0,showDenyButton:!0,confirmButtonText:"Save",denyButtonText:"Delete",customClass:"simplepad-swal2",inputValidator:s},m=await n.default.fire(u);r(m)}),J=(t,e)=>new Promise(async(o,s)=>{let r={title:t,text:e,showCancelButton:!0,confirmButtonText:"Yes",customClass:"simplepad-swal2"},c=await n.default.fire(r);o(c)}),K=(t,e)=>{p("success",t,e)},M=(t,e)=>{p("error",t,e)},Q=(t,e)=>{p("warning",t,e)},X=(t,e)=>{p("info",t,e)};0&&(module.exports={ce,cl,firebaseClearError,firebaseClearUser,firebaseDocToObject,isNothing,isSomething,isSomethingWithId,modalClose,modalConfirm,modalError,modalInfo,modalInput,modalInputWithDelete,modalLoading,modalSuccess,modalWarning,toastError,toastInfo,toastSuccess,toastWarning});
//# sourceMappingURL=bundle.js.map

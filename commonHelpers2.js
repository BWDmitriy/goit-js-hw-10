import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as o}from"./assets/vendor-ad859c2f.js";const l=document.querySelector("#submit-button"),e=document.querySelector('input[name="delay"]');l.addEventListener("click",u);function u(n){n.preventDefault();let t=document.querySelector('input[name="state"]:checked');if(e.value&&t.value){const i=new Promise((s,r)=>{setTimeout(()=>{t.value=="fulfilled"&&(s(`Fulfilled promise in ${e.value}ms`),console.log(i),o.success({title:"Success!",message:`Fulfilled promise in ${e.value}ms`,position:"topRight"})),t.value=="rejected"&&(r(`Rejected promise in ${e.value}ms`),console.log(i),o.error({title:"Error",message:`Rejected promise in ${e.value}ms`,position:"topRight"}))},e.value)});return i}return o.warning({title:"Warning",message:"You forgot important data!",position:"topRight"})}
//# sourceMappingURL=commonHelpers2.js.map
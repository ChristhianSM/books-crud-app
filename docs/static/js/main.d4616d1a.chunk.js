(this.webpackJsonpamazon=this.webpackJsonpamazon||[]).push([[0],{15:function(e,t,i){},16:function(e,t,i){},18:function(e,t,i){},19:function(e,t,i){},20:function(e,t,i){"use strict";i.r(t);var n=i(1),c=i(0),a=i.n(c),s=i(8),r=i.n(s),l=(i(15),i(2)),o=i(4),j=(i(16),function(e){var t=e.title,i=e.id,c=e.raiting,a=e.image,s=e.eliminarBook,r=Array(c).fill(0);return Object(n.jsxs)("div",{className:"item",children:[Object(n.jsx)("div",{className:"image",children:Object(n.jsx)("img",{src:"img/"+a,width:"100%",alt:"titulo"})}),Object(n.jsxs)("div",{className:"title",children:[" ",t," "]}),Object(n.jsxs)("div",{className:"rating",children:[Object(n.jsx)("p",{children:r.map((function(e,t){return Object(n.jsx)("img",{src:"img/star.png",width:"32"},t)}))}),"Clasificaci\xf3n :",Object(n.jsxs)("select",{value:c,onChange:function(e){},children:[Object(n.jsx)("option",{value:"1",children:"1"}),Object(n.jsx)("option",{value:"2",children:"2"}),Object(n.jsx)("option",{value:"3",children:"3"}),Object(n.jsx)("option",{value:"4",children:"4"}),Object(n.jsx)("option",{value:"5",children:"5"})]}),Object(n.jsx)("div",{className:"actions",children:Object(n.jsx)("button",{onClick:function(){s(i)},children:" Eliminar"})})]})]})}),b=function(e){var t=e.dataBooks,i=e.eliminarBook;return Object(n.jsx)("div",{className:"list",children:t.map((function(e){var t=e.id,c=e.image,a=e.raiting,s=e.title;return Object(n.jsx)(j,{id:t,title:s,raiting:a,image:c,eliminarBook:i},t)}))})},d=function(e){var t=e.onSearch;return Object(n.jsx)("div",{children:Object(n.jsx)("input",{type:"text",onChange:function(e){var i=e.target.value.toString().toLowerCase();t(i)}})})},u=i(9),O=function(e){var t=e.onCancel,i=e.addBook,c=Object(u.a)(),a=c.register,s=c.errors,r=c.handleSubmit;return Object(n.jsx)("div",{className:"new-item-panel-container",children:Object(n.jsx)("div",{className:"new-item-panel",children:Object(n.jsxs)("form",{onSubmit:r((function(e,n){i(e),t(),n.target.reset()})),children:[Object(n.jsx)("h1",{children:" Registro de Libro"}),Object(n.jsxs)("div",{className:"new-item-div",children:[Object(n.jsx)("label",{children:" Titulo Del libro"})," ",Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",name:"title",className:"input",ref:a({required:{value:!0,message:"Campo obligatorio"}})})]}),s.title&&Object(n.jsx)("span",{children:s.title.message}),Object(n.jsxs)("div",{className:"new-item-div",children:[Object(n.jsx)("label",{children:" Nombre de la imagen"})," ",Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",name:"image",className:"input",ref:a({required:{value:!0,message:"Campo obligatorio"}})}),Object(n.jsx)("br",{}),s.image&&Object(n.jsx)("span",{children:s.image.message})]}),Object(n.jsxs)("div",{className:"new-item-div",children:[Object(n.jsx)("label",{children:" Calsificacion"})," ",Object(n.jsx)("br",{}),Object(n.jsxs)("select",{name:"raiting",ref:a({required:{value:!0,message:"Hola mundo"}}),children:[Object(n.jsx)("option",{value:"1",children:"1"}),Object(n.jsx)("option",{value:"2",children:"2"}),Object(n.jsx)("option",{value:"3",children:"3"}),Object(n.jsx)("option",{value:"4",children:"4"}),Object(n.jsx)("option",{value:"5",children:"5"})]})]}),Object(n.jsx)("input",{type:"submit",className:"button btn-blue",value:"Registrar libro"}),Object(n.jsx)("button",{className:"button btn-normal",onClick:function(){t()},children:"Cancelar"})]})})})},m=(i(18),function(e){var t=e.title,i=e.addBook,a=e.onSearch,s=Object(c.useState)(!1),r=Object(o.a)(s,2),l=r[0],j=r[1];return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"subcontainer",children:[Object(n.jsx)("div",{className:"logo",children:t}),Object(n.jsx)("div",{className:"search",children:Object(n.jsx)(d,{onSearch:a})}),Object(n.jsx)("div",{className:"actions",children:Object(n.jsx)("button",{className:"button btn-blue",onClick:function(){console.log("Apretaste click"),j(!0)},children:" + A\xf1adir Nuevo Libro"})})]}),l?Object(n.jsx)(O,{onCancel:function(){j(!1)},addBook:i}):""]})}),x=i(22);i(19);var h=function(){var e=Object(c.useState)([{id:Object(x.a)(),raiting:4,title:"Harry Potther y el caliz de fuego",image:"libro01.jpg"},{id:Object(x.a)(),raiting:3,title:"The shining",image:"libro02.jpg"},{id:Object(x.a)(),raiting:5,title:"Codigo Da Vinci",image:"libro03.jpg"},{id:Object(x.a)(),raiting:5,title:"El principito",image:"libro04.jpg"},{id:Object(x.a)(),raiting:5,title:"Sobrenatural",image:"libro05.jpg"}]),t=Object(o.a)(e,2),i=t[0],a=t[1],s=Object(c.useState)(i),r=Object(o.a)(s,2),j=r[0],d=r[1];return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(m,{title:"Amazon",addBook:function(e){e.id=Object(x.a)(),a([].concat(Object(l.a)(i),[e])),d([].concat(Object(l.a)(i),[e]))},onSearch:function(e){if(""===e)d(Object(l.a)(i));else{var t=Object(l.a)(i),n=[];t.forEach((function(t){t.title.toLowerCase().indexOf(e)>-1&&n.push(t)})),d(n)}}}),Object(n.jsx)(b,{dataBooks:j,eliminarBook:function(e){console.log(e);var t=i.filter((function(t){return t.id!==e}));console.log(t),a(t),d(t)}})]})};r.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(h,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.d4616d1a.chunk.js.map
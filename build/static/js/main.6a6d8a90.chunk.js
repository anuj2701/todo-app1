(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var o=a(2),n=a.n(o),c=a(19),s=a.n(c),i=(a(69),a(32)),d=(a(70),a(121)),r=a(123),l=a(124),j=a(114),u=a(111),b=(a(71),a(59)),p=a.n(b),m=a(122),h=a(115),O=a(116),x=a(117),f=a(118),g=a(35),v=g.a.initializeApp({apiKey:"AIzaSyAiICIMYV9xA-i6MnKA9wf4R3ste37w59A",authDomain:"todo-app-79a73.firebaseapp.com",projectId:"todo-app-79a73",storageBucket:"todo-app-79a73.appspot.com",messagingSenderId:"283791452186",appId:"1:283791452186:web:6b8342dc3b8b9d7d2fc9a3",measurementId:"G-5XRG0Y4TBV"}).firestore(),k=a(8),y=Object(u.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));var C=function(e){var t=y(),a=Object(o.useState)(!1),n=Object(i.a)(a,2),c=n[0],s=n[1],d=Object(o.useState)(),r=Object(i.a)(d,2),l=r[0],u=r[1];return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(m.a,{open:c,onClose:function(e){return s(!1)},className:"modal",children:Object(k.jsxs)("div",{className:t.paper,children:[Object(k.jsx)("h1",{className:"addtask",children:"Edit Your Todo"}),Object(k.jsx)("input",{placeholder:e.todo.todo,value:l,onChange:function(e){return u(e.target.value)}}),Object(k.jsx)(j.a,{onClick:function(){v.collection("todos").doc(e.todo.id).set({todo:l},{merge:!0}),s(!1)},className:"editbut",children:"update"})]})}),Object(k.jsxs)(h.a,{className:"todo_list",children:[Object(k.jsxs)(O.a,{children:[Object(k.jsx)(x.a,{children:function(){Date(document.data.event_date).toString()}}),Object(k.jsx)(f.a,{primary:e.todo.todo,secondary:"task\ud83d\udc46\ud83c\udffb"})]}),Object(k.jsx)(j.a,{onClick:function(e){return s(!0)},className:"editbut",children:"Edit"}),Object(k.jsx)(p.a,{onClick:function(t){return v.collection("todos").doc(e.todo.id).delete()},children:"Delete\u274c"})]})]})},N=a(125),w=a(119),S=a(46),A=a(120),I=Object(u.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));var B=function(){var e=I(),t=Object(o.useState)(["hey there","how are you","my name is anuj"]),a=Object(i.a)(t,2),n=a[0],c=a[1],s=Object(o.useState)(""),u=Object(i.a)(s,2),b=u[0],p=u[1];Object(o.useEffect)((function(){v.collection("todos").orderBy("timestamp","desc").onSnapshot((function(e){c(e.docs.map((function(e){return{id:e.id,todo:e.data().todo}})))}))}),[]);var m=function(e){e.preventDefault(),v.collection("todos").add({todo:b,timestamp:g.a.firestore.FieldValue.serverTimestamp()}),p("")};return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("div",{className:e.root,children:Object(k.jsx)(N.a,{position:"static",children:Object(k.jsxs)(w.a,{children:[Object(k.jsx)(A.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"}),Object(k.jsx)(S.a,{variant:"h6",className:e.title,children:"To do"})]})})}),Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)("h1",{className:"addtask",children:" My Day... "}),Object(k.jsxs)("form",{children:[Object(k.jsxs)(d.a,{children:[Object(k.jsx)(r.a,{children:"\u2795 Add a task"}),Object(k.jsx)(l.a,{className:"inputme",value:b,onChange:function(e){return p(e.target.value)}})]}),Object(k.jsx)(j.a,{disabled:!b,type:"submit",onClick:m,variant:"contained",color:"primary",children:"Add Todo"}),Object(k.jsx)("button",{onClick:m})]}),Object(k.jsx)("ul",{className:"todoscolor",children:n.map((function(e){return Object(k.jsx)(C,{todo:e})}))})]})]})},F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,127)).then((function(t){var a=t.getCLS,o=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),o(e),n(e),c(e),s(e)}))};s.a.render(Object(k.jsx)(n.a.StrictMode,{children:Object(k.jsx)(B,{})}),document.getElementById("root")),F()}},[[87,1,2]]]);
//# sourceMappingURL=main.6a6d8a90.chunk.js.map
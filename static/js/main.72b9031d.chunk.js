(this["webpackJsonptravel-agency"]=this["webpackJsonptravel-agency"]||[]).push([[0],{20:function(e,t,a){},21:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var s=a(2),c=a.n(s),n=a(14),i=a.n(n),r=(a(20),a(21),a(3)),l=(a(5),a(0)),d=function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"flight-label",children:"Flight Data"}),Object(l.jsxs)("div",{class:"flight-container",children:[Object(l.jsxs)("div",{className:"flight-card",children:[Object(l.jsx)("div",{className:"f-1",children:e.data.Carriers[0].Name}),Object(l.jsxs)("div",{className:"f-2",children:["$ ",e.data.Quotes[0].MinPrice]}),Object(l.jsxs)("div",{className:"f-3",children:["Departs at ",e.data.Quotes[0].OutboundLeg.DepartureDate]}),Object(l.jsxs)("div",{className:"f-4",children:["Depart from ",e.data.Places[0].Name]}),Object(l.jsxs)("div",{className:"f-5",children:["Arrive at ",e.data.Places[1].Name]})]}),Object(l.jsxs)("div",{className:"flight-card",children:[Object(l.jsx)("div",{className:"f-1",children:e.data.Carriers[1].Name}),Object(l.jsxs)("div",{className:"f-2",children:["$ ",e.data.Quotes[1].MinPrice]}),Object(l.jsxs)("div",{className:"f-3",children:["Departs at ",e.data.Quotes[1].OutboundLeg.DepartureDate]}),Object(l.jsxs)("div",{className:"f-4",children:["Depart from ",e.data.Places[0].Name]}),Object(l.jsxs)("div",{className:"f-5",children:["Arrive at ",e.data.Places[1].Name]})]})]})]})},j=a(15),o=a.n(j),h=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),i=Object(r.a)(n,2),j=i[0],h=i[1],b=Object(s.useState)([]),u=Object(r.a)(b,2),f=u[0],m=u[1],O=Object(s.useState)(!0),v=Object(r.a)(O,2),p=v[0],x=v[1];return Object(l.jsxs)("div",{class:"parent-container",children:[Object(l.jsx)("div",{className:"form-container",children:Object(l.jsxs)("form",{id:"form",onSubmit:function(e){e.preventDefault(),console.log({origin:a,destination:j});var t={method:"GET",url:"https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/"+a+"-sky/"+j+"-sky/anytime",headers:{"x-rapidapi-key":"31799ff833mshdc413de7a349e59p15c832jsnfd2a01775473","x-rapidapi-host":"skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"}};o.a.request(t).then((function(e){console.log(e.data),m(e.data),x(!1)})).catch((function(e){console.error(e)}))},children:[Object(l.jsx)("label",{htmlFor:"origin",children:"Flying from"}),Object(l.jsx)("input",{onChange:function(e){return c(e.target.value)},type:"text",name:"origin",placeholder:"DAC",id:"",value:a}),Object(l.jsx)("label",{htmlFor:"destination",children:"Flying to"}),Object(l.jsx)("input",{onChange:function(e){return h(e.target.value)},type:"text",name:"destination",id:"",placeholder:"Eg. LHR",value:j}),Object(l.jsx)("button",{type:"submit",children:"Search Flights"})]})}),p?Object(l.jsx)("div",{children:"Search for any flight"}):Object(l.jsx)(d,{data:f})]})};var b=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(h,{})})};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root"))},5:function(e,t,a){}},[[41,1,2]]]);
//# sourceMappingURL=main.72b9031d.chunk.js.map
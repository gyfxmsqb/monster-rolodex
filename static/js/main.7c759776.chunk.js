(this["webpackJsonpmonster-rolodex"]=this["webpackJsonpmonster-rolodex"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),c=n.n(r),s=(n(12),n(3)),l=n(4),i=n(5),u=n(6),m=(n(13),n(14),n(15),function(e){var t=e.id,n=e.name,a=e.email;return o.a.createElement("div",{className:"card-container"},o.a.createElement("img",{src:"https://robohash.org/".concat(t,"?set=set2"),alt:"monster"}),o.a.createElement("p",null,n),o.a.createElement("p",null,a))}),h=function(e){var t=e.monsters;return console.log(t),o.a.createElement("div",{className:"card-list"},t.map((function(e){return o.a.createElement(m,{email:e.email,key:e.id,id:e.id,name:e.name}," ",e.name," ")})))},d=(n(16),function(e){var t=e.placeholder,n=e.handleChange;return o.a.createElement("input",{className:"search-box",type:"search",placeholder:t,onChange:n})}),f=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).onSearchField=function(t){e.setState({searchField:t.target.value},(function(){console.log(e.state)}))},e.state={monsters:[],searchField:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Monster Rolodex"),o.a.createElement(d,{placeholder:"search monsters",handleChange:this.onSearchField}),o.a.createElement(h,{monsters:a}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.7c759776.chunk.js.map
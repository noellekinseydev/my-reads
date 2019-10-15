(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{23:function(e,t,a){e.exports=a(38)},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(19),s=a.n(r),c=a(10),l=a(5),i=a(6),u=a(8),h=a(7),m=a(9),b=a(11),k=function(e){return n.a.createElement("div",{className:"book-shelf-changer"},n.a.createElement("select",{value:e.currentShelf,onChange:function(t){return e.moveBook(e.book,t.target.value)}},n.a.createElement("option",{value:"move",disabled:!0},"Move to..."),e.shelves.map((function(e){return n.a.createElement("option",{value:e.value,key:e.id},e.title)})),n.a.createElement("option",{value:"none"},"None")))},p=function(e){var t=e.book.imageLinks?e.book.imageLinks.thumbnail:"",a=e.book.authors?e.book.authors.join(", "):"";return n.a.createElement("div",{className:"book",id:e.book.id},n.a.createElement("div",{className:"book-top"},n.a.createElement("div",{className:"book-cover",style:{width:100,height:150,borderRadius:5,backgroundImage:'url("'.concat(t,")")}}),n.a.createElement(k,{book:e.book,shelves:e.shelves,currentShelf:e.currentShelf,moveBook:e.moveBook})),n.a.createElement("div",{className:"book-info"},n.a.createElement("div",{className:"book-title"},n.a.createElement("h2",null,e.book.title)),n.a.createElement("div",{className:"book-authors"},n.a.createElement("h3",null,a))))},v=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return this.props.shelves.map((function(t){return n.a.createElement("div",{className:"bookshelf",id:t.value,key:t.id},n.a.createElement("div",{className:"bookshelf-header"},n.a.createElement("h2",{className:"bookshelf-title"},t.title)),n.a.createElement("div",{className:"bookshelf-books"},n.a.createElement("ol",{className:"books-grid main-grid"},e.props.books.filter((function(e){return e.shelf===t.value})).map((function(t){var a=t.shelf;return n.a.createElement("li",{key:t.id,className:"book-li ".concat(t.shelf)},n.a.createElement(p,{book:t,shelves:e.props.shelves,moveBook:e.props.moveBook,currentShelf:a}))})))))}))}}]),t}(o.Component),f=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"list-books"},n.a.createElement("div",{className:"list-books-title"},n.a.createElement("h1",null,"MyReads")),n.a.createElement("div",{className:"list-books-content"},n.a.createElement(v,{books:this.props.books,shelves:this.props.shelves,moveBook:this.props.moveBook}),n.a.createElement("div",{className:"open-search"},n.a.createElement(c.b,{to:"/search"},"Add a book"))))}}]),t}(o.Component),d=a(22);function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(a,!0).forEach((function(t){Object(d.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var g="https://reactnd-books-api.udacity.com",O=localStorage.token;O||(O=localStorage.token=Math.random().toString(36).substr(-8));var j={Accept:"application/json",Authorization:O},N=function(){return fetch("".concat(g,"/books"),{headers:j}).then((function(e){return e.json()})).then((function(e){return e.books}))},B=function(e,t){return fetch("".concat(g,"/books/").concat(e.id),{method:"PUT",headers:y({},j,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then((function(e){return e.json()}))},S=function(e){return fetch("".concat(g,"/search"),{method:"POST",headers:y({},j,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then((function(e){return e.json()})).then((function(e){return e.books}))},w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).state={query:"",matchingBooks:[]},a.updateQuery=function(e){a.setState({query:e}),a.fetchMatchingBooks(e)},a.fetchMatchingBooks=function(e){e?S(e).then((function(e){e.error?a.setState({matchingBooks:[]}):a.setState({matchingBooks:e})})):a.setState({matchingBooks:[]})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"search-books"},n.a.createElement("div",{className:"search-books-bar"},n.a.createElement(c.b,{to:"/",className:"close-search"},"Close"),n.a.createElement("div",{className:"search-books-input-wrapper"},n.a.createElement("input",{type:"text",placeholder:"Search by title or author",value:this.state.query,onChange:function(t){return e.updateQuery(t.target.value)}}))),n.a.createElement("div",{className:"search-books-results"},""!==this.state.query?n.a.createElement("h3",{className:"searchResults"},"Your search for ",n.a.createElement("span",{className:"pink"},'"',this.state.query,'"')," ","yielded ",this.state.matchingBooks.length," results:"):n.a.createElement("h2",{className:"searchResults"},"Please enter a search term in the field above."),n.a.createElement("ol",{className:"books-grid results-grid"},this.state.matchingBooks.map((function(t){var a="none";return e.props.books.length>0&&e.props.books.forEach((function(e){e.id===t.id&&(a=e.shelf)})),n.a.createElement("li",{key:t.id,className:"book-li search-li"},n.a.createElement(p,{book:t,shelves:e.props.shelves,moveBook:e.props.moveBook,currentShelf:a}))})))))}}]),t}(o.Component),P=(a(36),function(e){function t(){var e,a;Object(l.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).state={showSearchPage:!1,books:[]},a.moveBook=function(e,t){B(e,t),N().then((function(e){a.setState({books:e})}))},a.shelves=[{id:1,value:"currentlyReading",title:"Currently Reading"},{id:2,value:"wantToRead",title:"Want To Read"},{id:3,value:"read",title:"Read"}],a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;N().then((function(t){e.setState({books:t})}))}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"app"},n.a.createElement(b.a,{exact:!0,path:"/",render:function(){return n.a.createElement(f,{moveBook:e.moveBook,books:e.state.books,shelves:e.shelves})}}),n.a.createElement(b.a,{path:"/search",render:function(){return n.a.createElement(w,{shelves:e.shelves,books:e.state.books,moveBook:e.moveBook})}}))}}]),t}(n.a.Component));a(37);s.a.render(n.a.createElement(c.a,{basename:"/my-reads"},n.a.createElement(P,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.912252ea.chunk.js.map
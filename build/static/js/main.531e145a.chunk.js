(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(34)},29:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(21),l=a.n(s),c=(a(29),a(5)),o=a(6),i=a(8),h=a(7),u=a(11),m=a(9),d=a(14),g=a(10),v=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("article",null,r.a.createElement("h1",null,"About"),r.a.createElement("p",null,"This project was created by Steve Gilkes using ",r.a.createElement("strong",null,r.a.createElement("a",{href:"https://www.themoviedb.org"},"The Movie DB")),"."),r.a.createElement("h1",null,"Image Credits"),r.a.createElement("h4",null,"Popcorn Banner Image"),r.a.createElement("p",null,"Photo by ",r.a.createElement("a",{href:"https://unsplash.com/@charlesdeluvio"},"Charles \ud83c\uddf5\ud83c\udded")," on Unsplash")))}}]),t}(r.a.Component),p=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(h.a)(t).call(this,e))).props.handleContentChange(),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleContentChange",value:function(e,t){t.preventDefault(),this.props.handleContentChange(e,t)}},{key:"searchMe",value:function(){this.props.searchMe()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"banner"},r.a.createElement("h1",null,"The Movie API")),r.a.createElement("nav",null,r.a.createElement("div",{className:"controlGroup"},r.a.createElement("label",{htmlFor:"genre"},"Genre:\xa0"),r.a.createElement("select",{type:"text",id:"genre",name:"genre",value:this.props.selectedGenre,onChange:function(t){return e.handleContentChange("genre",t)}},this.props.genres.map(function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)}))),r.a.createElement("div",{className:"controlGroup"},r.a.createElement("label",{htmlFor:"page"},"\xa0Page:\xa0"),r.a.createElement("input",{type:"number",id:"page",name:"page",value:this.props.selectedPage,onChange:function(t){return e.handleContentChange("page",t)}}),r.a.createElement("label",{htmlFor:"page"},"\xa0of ",this.props.totalPages)),r.a.createElement("div",{className:"controlGroup"},r.a.createElement("label",{htmlFor:"startdate"},"Start date:\xa0"),r.a.createElement("input",{type:"date",id:"startdate",name:"startdate",value:this.props.startDate,onChange:function(t){return e.handleContentChange("startDate",t)},min:"1900-01-01",max:"2030-12-31"})),r.a.createElement("div",{className:"controlGroup"},r.a.createElement("label",{htmlFor:"enddate"},"\xa0End date:\xa0"),r.a.createElement("input",{type:"date",id:"enddate",name:"enddate",value:this.props.endDate,onChange:function(t){return e.handleContentChange("endDate",t)},min:"1900-01-01",max:"2030-12-31"})),r.a.createElement("div",{className:"controlGroup"},this.props.searching?r.a.createElement(d.b,{to:"/movies/about",onClick:function(){return e.searchMe()}},"About"):r.a.createElement(d.b,{to:"/movies",onClick:function(){return e.searchMe()}},"Back to Movies"))))}}]),t}(r.a.Component),b=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"movieContainer"},this.props.movies.map(function(e){return r.a.createElement("article",{key:e.id},r.a.createElement("div",{className:"film"},r.a.createElement("img",{src:"http://image.tmdb.org/t/p/w185/".concat(e.poster_path),alt:"Movie poster for ".concat(e.title)})),r.a.createElement("div",{className:"titleContainer"},r.a.createElement("h2",null,e.title),r.a.createElement("p",{className:"star"},e.vote_average)),r.a.createElement("h3",null,"Overview"),r.a.createElement("p",null,""===e.overview?"No overview has been submitted for this movie.":e.overview," "),r.a.createElement("br",null))}))}}]),t}(r.a.Component),f="387edbffe136b089267267b98a26451d",E="https://api.themoviedb.org/4/discover/movie?api_key="+f,C="https://api.themoviedb.org/3/genre/movie/list?api_key="+f+"&language=en-US",D=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(h.a)(t).call(this))).state={apiKey:f,startDate:"",endDate:"",movies:[],genres:[],totalPages:1,dayRange:60,selectedGenre:0,selectedPage:1,searching:!0},e.getMovies=e.getMovies.bind(Object(u.a)(e)),e.searchMe=e.searchMe.bind(Object(u.a)(e)),e.handleContentChange=e.handleContentChange.bind(Object(u.a)(e)),e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getGenres(),this.getMovies(),this.checkDates("startDate",this.state.dayRange),this.checkDates("endDate")}},{key:"handleContentChange",value:function(e,t){var a=this;new Promise(function(n,r){"genre"===e?a.setState({selectedPage:1,selectedGenre:t.target.value}):"page"===e?(t.target.value<1?t.target.value=1:t.target.value>a.state.totalPages&&(t.target.value=a.state.totalPages),a.setState({selectedPage:t.target.value})):"startDate"===e?a.checkDates("startDate",a.state.dayRange,t.target.value):"endDate"===e&&a.checkDates("endDate",0,t.target.value),n()}).then(function(){return a.getMovies()})}},{key:"checkDates",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=new Date;n.setDate(n.getDate()-t),n=null===a?n.getFullYear()+"-"+("0"+(Number(n.getMonth())+1)).slice(-2)+"-"+("0"+n.getDate()).slice(-2):a,"startDate"===e?this.setState({startDate:n}):this.setState({endDate:n}),this.getMovies()}},{key:"getMovies",value:function(){var e=this,t="";t=E+"&primary_release_date.gte="+this.state.startDate+"&primary_release_date.lte="+this.state.endDate,t+="&page="+this.state.selectedPage,0===this.state.selectedGenre?t+="&with_genres=28":t+="&with_genres="+this.state.selectedGenre,fetch(t).then(function(e){return e.json()}).then(function(t){e.setState({movies:t.results,totalPages:t.total_pages})}).catch(function(e){alert(e)})}},{key:"getGenres",value:function(){var e=this;fetch(C).then(function(e){return e.json()}).then(function(t){e.setState({genres:t.genres})}).catch(function(e){alert(e)})}},{key:"searchMe",value:function(){this.state.searching?this.setState({searching:!1}):this.setState({searching:!0})}},{key:"render",value:function(){var e=this;return r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(g.b,{path:"/",render:function(t){return r.a.createElement(p,Object.assign({},t,{selectedGenre:e.state.selectedGenre,selectedPage:e.state.selectedPage,startDate:e.state.startDate,endDate:e.state.endDate,genres:e.state.genres,totalPages:e.state.totalPages,searching:e.state.searching,handleContentChange:e.handleContentChange,searchMe:e.searchMe}))}}),r.a.createElement(g.b,{path:"/movies/about",component:v}),r.a.createElement(g.a,{from:"/",to:"/movies"}),r.a.createElement(g.b,{exact:!0,path:"/movies",render:function(t){return r.a.createElement(b,Object.assign({},t,{movies:e.state.movies}))}})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.531e145a.chunk.js.map
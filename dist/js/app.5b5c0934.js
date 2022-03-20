(function(){"use strict";var t={231:function(t,o,s){var e=s(9242),n=s(3396);const a=(0,n._)("h1",null,"gh pages",-1);function i(t,o){const s=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[a,(0,n.Wm)(s)],64)}var r=s(89);const c={},d=(0,r.Z)(c,[["render",i]]);var p=d,l=s(678);const u={class:"home"},g={key:0,class:"container"},f={class:"container grid"},h={class:"container more-wrapper"},m=["disabled"];function v(t,o,s,e,a,i){const r=(0,n.up)("base-card");return(0,n.wg)(),(0,n.iD)("div",u,[t.isPostsLoading?((0,n.wg)(),(0,n.iD)("div",g,"Loading")):((0,n.wg)(),(0,n.iD)(n.HY,{key:1},[(0,n._)("div",f,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.posts,(t=>((0,n.wg)(),(0,n.j4)(r,{key:t.id,title:t.title,body:t.body,postId:t.id},null,8,["title","body","postId"])))),128))]),(0,n._)("div",h,[(0,n._)("button",{class:"more",type:"button",onClick:o[0]||(o[0]=(...o)=>t.loadMorePosts&&t.loadMorePosts(...o)),disabled:t.isEnd}," Download more ",8,m)])],64))])}var P=s(7139);const y={class:"Base-Card"};function w(t,o,s,e,a,i){return(0,n.wg)(),(0,n.iD)("div",y,[(0,n._)("h3",null,(0,P.zw)(s.title),1),(0,n._)("p",null,(0,P.zw)(s.body),1),(0,n._)("a",{class:"link",onClick:o[0]||(o[0]=o=>t.$router.push(`/posts/${s.postId}`))},"More")])}var b={props:{title:{type:String,required:!0},body:{type:String,required:!0},img:{type:String,default:"none"},postId:{type:String,default:"none"}}};const _=(0,r.Z)(b,[["render",w],["__scopeId","data-v-3f80e556"]]);var L=_,k=s(65),O={name:"HomeView",components:{BaseCard:L},mounted(){this.fetchPosts()},methods:{...(0,k.OI)({setPage:"post/setPage"}),...(0,k.nv)({loadMorePosts:"post/loadMorePosts",fetchPosts:"post/fetchPosts"})},computed:{...(0,k.rn)({posts:t=>t.post.posts,isPostsLoading:t=>t.post.isPostsLoading,page:t=>t.post.page,limit:t=>t.post.limit,totalPages:t=>t.post.totalPages,isEnd:t=>t.post.isEnd})}};const I=(0,r.Z)(O,[["render",v],["__scopeId","data-v-4413e54c"]]);var j=I;const M={key:0},D={key:1};function E(t,o,s,e,a,i){return t.isPostsLoading?((0,n.wg)(),(0,n.iD)("div",M,"Loading")):((0,n.wg)(),(0,n.iD)("div",D,[(0,n.Uk)((0,P.zw)(t.$route.params.id)+" ",1),(0,n._)("h1",null,(0,P.zw)(t.post.title),1),(0,n._)("p",null,(0,P.zw)(t.post.body),1)]))}var x={methods:{...(0,k.OI)({setPost:"post/setPost"}),...(0,k.nv)({fetchPostById:"post/fetchPostById"})},computed:{...(0,k.rn)({post:t=>t.post.post,isPostsLoading:t=>t.post.isPostsLoading})},mounted(){this.fetchPostById(this.$route.params.id)}};const B=(0,r.Z)(x,[["render",E],["__scopeId","data-v-5c869796"]]);var C=B;const T=[{path:"/",name:"home",component:j},{path:"/posts/:id",name:"post",component:C}],z=(0,l.p7)({history:(0,l.PO)(),routes:T});var $=z,H=s(6265),S=s.n(H);const Z={namespaced:!0,state:()=>({posts:[],post:{},isPostsLoading:!1,page:1,limit:10,totalPages:0,isEnd:null}),mutations:{setPosts(t,o){t.posts=o},setPost(t,o){t.post=o},setLoading(t,o){t.isPostsLoading=o},setPage(t,o){t.page=o},setTotalPages(t,o){t.totalPages=o},setEndPages(t,o){t.isEnd=o}},actions:{async fetchPostById({commit:t},o){console.log(o);try{t("setLoading",!0);const s=await S().get(`https://jsonplaceholder.typicode.com/posts/${o}`);t("setPost",s.data)}catch(s){console.log(s)}finally{t("setLoading",!1)}},async fetchPosts({state:t,commit:o}){try{o("setLoading",!0);const s=await S().get("https://jsonplaceholder.typicode.com/posts",{params:{_page:t.page,_limit:t.limit}});o("setTotalPages",Math.ceil(s.headers["x-total-count"]/t.limit)),o("setPosts",s.data)}catch(s){console.log(s)}finally{o("setLoading",!1)}},async loadMorePosts({state:t,commit:o}){try{if(t.page>=t.totalPages)return void o("setEndPages",!0);o("setPage",t.page+1);const s=await S().get("https://jsonplaceholder.typicode.com/posts",{params:{_page:t.page,_limit:t.limit}});o("setTotalPages",Math.ceil(s.headers["x-total-count"]/t.limit)),o("setPosts",[...t.posts,...s.data])}catch(s){console.log(s)}}}};var Y=(0,k.MT)({state:{},getters:{},mutations:{},actions:{},modules:{post:Z}});(0,e.ri)(p).use(Y).use($).mount("#app")}},o={};function s(e){var n=o[e];if(void 0!==n)return n.exports;var a=o[e]={exports:{}};return t[e](a,a.exports,s),a.exports}s.m=t,function(){var t=[];s.O=function(o,e,n,a){if(!e){var i=1/0;for(p=0;p<t.length;p++){e=t[p][0],n=t[p][1],a=t[p][2];for(var r=!0,c=0;c<e.length;c++)(!1&a||i>=a)&&Object.keys(s.O).every((function(t){return s.O[t](e[c])}))?e.splice(c--,1):(r=!1,a<i&&(i=a));if(r){t.splice(p--,1);var d=n();void 0!==d&&(o=d)}}return o}a=a||0;for(var p=t.length;p>0&&t[p-1][2]>a;p--)t[p]=t[p-1];t[p]=[e,n,a]}}(),function(){s.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(o,{a:o}),o}}(),function(){s.d=function(t,o){for(var e in o)s.o(o,e)&&!s.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:o[e]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){var t={143:0};s.O.j=function(o){return 0===t[o]};var o=function(o,e){var n,a,i=e[0],r=e[1],c=e[2],d=0;if(i.some((function(o){return 0!==t[o]}))){for(n in r)s.o(r,n)&&(s.m[n]=r[n]);if(c)var p=c(s)}for(o&&o(e);d<i.length;d++)a=i[d],s.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return s.O(p)},e=self["webpackChunkscraping_vue"]=self["webpackChunkscraping_vue"]||[];e.forEach(o.bind(null,0)),e.push=o.bind(null,e.push.bind(e))}();var e=s.O(void 0,[998],(function(){return s(231)}));e=s.O(e)})();
//# sourceMappingURL=app.5b5c0934.js.map
import{_ as p,d as l,u as i,r as k,o as r,c as F,w as d,n as g,g as m,a as n,b as s}from"./index.3318a743.js";const E=l({name:"ArcoMain",components:{},setup(){const{locale:t}=i();return{locale:t,data:{meta:{type:"\u5F00\u53D1\u6307\u5357"},title:"\u5FEB\u901F\u4E0A\u624B",description:"\u8DDF\u968F\u4EE5\u4E0B\u7684\u6B65\u9AA4\uFF0C\u5FEB\u901F\u4E0A\u624B\u7EC4\u4EF6\u5E93\u7684\u4F7F\u7528\u3002"},getMessage:(a,u)=>t.value==="zh-CN"?a:u}}}),f=n("h2",{id:"vue-\u7248\u672C"},"Vue \u7248\u672C",-1),C=n("p",null,"vue >= 3.2.0",-1),v=n("p",null,[n("strong",null,"\u6CE8\u610F"),s("\uFF1A "),n("code",null,"Vue3"),s(" \u4E0D\u652F\u6301IE\u6D4F\u89C8\u5668\u73AF\u5883\uFF0C\u5982\u679C\u9700\u8981\u53EF\u4EE5\u589E\u52A0 "),n("code",null,"polyfill"),s("\u3002")],-1),y=n("h2",{id:"\u5B89\u88C5"},"\u5B89\u88C5",-1),w=n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token comment"},"# npm"),s(`
`),n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(` --save-dev @arco-design/web-vue
`),n("span",{class:"token comment"},"# yarn"),s(`
`),n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(` --dev @arco-design/web-vue
`)])],-1),A=n("h2",{id:"\u5B8C\u6574\u5F15\u5165"},"\u5B8C\u6574\u5F15\u5165",-1),_=n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" createApp "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" ArcoVue "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@arco-design/web-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" App "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'./App.vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},"'@arco-design/web-vue/dist/arco.css'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" app "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"createApp"),n("span",{class:"token punctuation"},"("),s("App"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("ArcoVue"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"mount"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'#app'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])],-1),h=n("h2",{id:"\u6309\u9700\u52A0\u8F7D\uFF08\u6A21\u677F\uFF09"},"\u6309\u9700\u52A0\u8F7D\uFF08\u6A21\u677F\uFF09",-1),D=n("p",null,[s("\u5982\u679C\u4F7F\u7528\u6A21\u677F\u65B9\u5F0F\u8FDB\u884C\u5F00\u53D1\uFF0C\u53EF\u4EE5\u4F7F\u7528 "),n("a",{class:"link",href:"https://github.com/antfu/unplugin-vue-components"},"unplugin-vue-components"),s(" \u63D2\u4EF6\u6765\u5F00\u542F\u6309\u9700\u52A0\u8F7D\u7684\u652F\u6301\u3002"),n("br"),s("\u63D2\u4EF6\u4F1A\u81EA\u52A8\u89E3\u6790\u6A21\u677F\u4E2D\u7684\u4F7F\u7528\u5230\u7684\u7EC4\u4EF6\uFF0C\u5E76\u5BFC\u5165\u7EC4\u4EF6\u548C\u5BF9\u5E94\u7684\u6837\u5F0F\u6587\u4EF6\u3002"),n("br"),s("\u9700\u8981\u7EC4\u4EF6\u5E93 "),n("code",null,"version >= 2.11.0"),s("\u3002")],-1),B=n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vite'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" vue "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@vitejs/plugin-vue'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" Components "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'unplugin-vue-components/vite'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ArcoResolver "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'unplugin-vue-components/resolvers'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// https://vitejs.dev/config/"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  plugins`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token function"},"vue"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token function"},"Components"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      resolvers`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token function"},"ArcoResolver"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token punctuation"},"]"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])],-1),b=n("p",null,[s("\u6CE8\u610F\uFF1A\u8FD9\u79CD\u65B9\u6CD5\u5E76\u4E0D\u4F1A\u5904\u7406\u7528\u6237\u5728 script \u4E2D\u624B\u52A8\u5BFC\u5165\u7684\u7EC4\u4EF6\uFF0C\u6BD4\u5982 Message \u7EC4\u4EF6\uFF0C\u7528\u6237\u4ECD\u9700\u8981\u624B\u52A8\u5BFC\u5165\u7EC4\u4EF6\u5BF9\u5E94\u7684\u6837\u5F0F\u6587\u4EF6\uFF0C\u4F8B\u5982 "),n("code",null,"@arco-design/web-vue/es/message/style/css.js"),s("\u3002")],-1),V=n("h2",{id:"\u6309\u9700\u52A0\u8F7D"},"\u6309\u9700\u52A0\u8F7D",-1),x=n("p",null,[s("\u4E5F\u53EF\u4EE5\u4F7F\u7528\u624B\u52A8\u5BFC\u5165\u7684\u65B9\u5F0F\u6309\u9700\u52A0\u8F7D\u7EC4\u4EF6\uFF0C\u7EC4\u4EF6\u5E93\u5DF2\u7ECF\u9ED8\u8BA4\u652F\u6301 Tree Shaking\u3002\u53EF\u4EE5\u914D\u5408 "),n("a",{class:"link",href:"https://github.com/vbenjs/vite-plugin-style-import"},"vite-plugin-style-import"),s(" \u63D2\u4EF6\u81EA\u52A8\u52A0\u8F7D\u7EC4\u4EF6\u6837\u5F0F\u3002")],-1),j=n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vite'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" vue "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@vitejs/plugin-vue'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" styleImport "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vite-plugin-style-import'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  plugins`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"vue"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token function"},"styleImport"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      libs`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          libraryName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'@arco-design/web-vue'"),n("span",{class:"token punctuation"},","),s(`
          esModule`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token function-variable function"},"resolveStyle"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s("name"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// css"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"@arco-design/web-vue/es/"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("name"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"/style/css.js"),n("span",{class:"token template-punctuation string"},"`")]),s(`
            `),n("span",{class:"token comment"},"// less"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"@arco-design/web-vue/es/"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("name"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"/style/index.js"),n("span",{class:"token template-punctuation string"},"`")]),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"]"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])],-1),$=n("h2",{id:"\u5168\u5C40\u914D\u7F6E"},"\u5168\u5C40\u914D\u7F6E",-1),M=n("p",null,"\u5728\u5F15\u5165 ArcoVue \u65F6\uFF0C\u53EF\u4EE5\u4F20\u5165\u4E00\u4E2A\u5168\u5C40\u914D\u7F6E\u5BF9\u8C61\u3002",-1),N=n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" createApp "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" ArcoVue "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@arco-design/web-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" App "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'./App.vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},"'@arco-design/web-vue/dist/arco.css'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" app "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"createApp"),n("span",{class:"token punctuation"},"("),s("App"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("ArcoVue"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// \u7528\u4E8E\u6539\u53D8\u4F7F\u7528\u7EC4\u4EF6\u65F6\u7684\u524D\u7F00\u540D\u79F0"),s(`
  componentPrefix`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'arco'"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"mount"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'#app'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])],-1);function I(t,o,e,a,u,z){const c=k("arco-article");return r(),F(c,g(m(t.data)),{default:d(()=>[f,C,v,y,w,A,_,h,D,B,b,V,x,j,$,M,N]),_:1},16)}var R=p(E,[["render",I]]);export{R as default};
import{_ as u,d as l,u as k,r,o as i,c as d,w as m,n as g,g as b,a as n,b as s}from"./index.bf318c49.js";const v=l({name:"ArcoMain",components:{},setup(){const{locale:a}=k();return{locale:a,data:void 0,getMessage:(t,o)=>a.value==="zh-CN"?t:o}}}),F=n("p",null,"%%API(index.vue)%%",-1),_=n("h2",{id:"demos"},"Demos",-1),C=n("pre",{class:"code-content"},[n("code",{class:"language-lang"},`[
  {
    "kind": "file",
    "title": "\u7EC4\u4EF6\u540D",
    "memberOf": "\u7EC4\u4EF6\u7C7B\u578B\uFF0C\u4F8B\u5982\uFF1A\u6570\u636E\u8F93\u5165",
    "description": "\u63CF\u8FF0\u4F60\u7684\u7EC4\u4EF6\u3002"
  },
  {
    "kind": "member",
    "title": "\u57FA\u672C\u7528\u6CD5",
    "description": "\u63CF\u8FF0\u4F60\u7684\u4F8B\u5B50"
  }
]
`)],-1),f=n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ATransferTree")]),s(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("searchVal"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":origin-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("list"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("select-key")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("selectKey"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(" ATransferTree "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@dangojs/a-transfer-tree'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// \u76EE\u524Dvue-live\u5BFC\u51FAdefineComponent\u5B58\u5728\u95EE\u9898\uFF0C\u6240\u4EE5\u4EC5\u652F\u6301\u666E\u901A\u5BF9\u8C61\u5BFC\u51FA\u3002"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'BasicDemo'"),n("span",{class:"token punctuation"},","),s(`
  components`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    ATransferTree`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      selectKey`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      searchVal`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`
      list`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),s(`
          value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
          children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
              label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1-1'"),n("span",{class:"token punctuation"},","),s(`
              value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"11"),n("span",{class:"token punctuation"},","),s(`
              children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                `),n("span",{class:"token punctuation"},"{"),s(" label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1-1-1'"),n("span",{class:"token punctuation"},","),s(" value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"111"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token punctuation"},"{"),s(" label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1-1-2'"),n("span",{class:"token punctuation"},","),s(" value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"112"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token punctuation"},"{"),s(" label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1-1-3'"),n("span",{class:"token punctuation"},","),s(" value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"113"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token punctuation"},"{"),s(" label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1-1-4'"),n("span",{class:"token punctuation"},","),s(" value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"114"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),s(`
          value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
          children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
              label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2-1'"),n("span",{class:"token punctuation"},","),s(`
              value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"21"),n("span",{class:"token punctuation"},","),s(`
              children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                `),n("span",{class:"token punctuation"},"{"),s(" label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2-1-1'"),n("span",{class:"token punctuation"},","),s(" value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"211"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token punctuation"},"{"),s(" label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2-1-2'"),n("span",{class:"token punctuation"},","),s(" value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"212"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token punctuation"},"{"),s(" label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2-1-3'"),n("span",{class:"token punctuation"},","),s(" value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"213"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token punctuation"},"{"),s(" label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2-1-4'"),n("span",{class:"token punctuation"},","),s(" value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"214"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function E(a,e,p,t,o,h){const c=r("arco-article");return i(),d(c,g(b(a.data)),{default:m(()=>[F,_,C,f]),_:1},16)}var A=u(v,[["render",E]]);export{A as default};

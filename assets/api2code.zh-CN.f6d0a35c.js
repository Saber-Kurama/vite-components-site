import{_ as F,d as m,u as h,r as e,o as f,c as B,w as t,n as D,g as A,j as u,a as n,b as s}from"./index.c20c0983.js";const x=m({name:"ArcoMain",components:{},setup(){const{locale:c}=h();return{locale:c,data:{meta:{type:"vscode"},title:"swagger\u751F\u6210\u524D\u7AEFapi\u7684\u4EE3\u7801",description:"\u6839\u636Eswagger\u751F\u6210\u524D\u7AEFapi\u7684ts\u4EE3\u7801\uFF0C\u63D0\u4F9B\u826F\u597D\u7684typescript\u7684\u63D0\u793A"},getMessage:(l,i)=>c.value==="zh-CN"?l:i}}}),C=n("h2",{id:"\u5B89\u88C5\u63D2\u4EF6"},"\u5B89\u88C5\u63D2\u4EF6",-1),y=n("p",null,"vscode \u63D2\u4EF6\u5E02\u573A\u5B89\u88C5 \u8BE5\u63D2\u4EF6",-1),v=n("p",null,[n("img",{src:"https://image.parligerly.com/gifox/vscode-api-code.png",alt:""})],-1),T=n("h2",{id:"\u914D\u7F6E\u6587\u4EF6"},"\u914D\u7F6E\u6587\u4EF6",-1),O=n("p",null,[n("code",null,"api-code-config.json")],-1),R=n("pre",{class:"code-content"},[n("code",null,`{
  "originUrl": "https://nextjs-demo-six-alpha.vercel.app/api/doc",
  "docUrl": "https://nextjs-demo-six-alpha.vercel.app/api-doc",
  "outDir": "./src/api",
  "usingOperationId": false, 
}
`)],-1),q=n("p",null,"\u914D\u7F6E\u6587\u4EF6\u8BF4\u660E(\u76EE\u524D\u6709\u6548\u7684\u914D\u7F6E)",-1),I=n("colgroup",null,[n("col",{style:{"min-width":"120px"}})],-1),b=s("\u53C2\u6570"),G=s("\u53C2\u6570\u8BF4\u660E"),P=s("\u9ED8\u8BA4\u503C"),w=s("originUrl"),L=s("swagger\u7684json\u5730\u5740"),M=s("-"),U=s("docUrl"),$=s("swagger\u7684\u6587\u6863\u5730\u5740"),j=s("-"),N=s("outDir"),z=s("api\u4EE3\u7801\u751F\u6210\u5230\u6587\u4EF6\u76EE\u5F55"),V=s("-"),K=s("usingOperationId"),Q=s("\u662F\u5426\u4F7F\u7528OperationIds\u751F\u6210\u65B9\u6CD5\u540D"),H=s("-"),J=s("excludeTags"),S=s("\u8FC7\u6EE4tag\u4E0B\u7684\u63A5\u53E3\u751F\u6210"),W=s("[]"),X=s("tagPathIndex"),Y=s('\u63A5\u53E3\u540D\u79F0\u751F\u6210\u5FFD\u7565\u7684\u957F\u5EA6\uFF0C \u503C\u4E3A "auto"\u6216\u8005\u6570\u5B57\u3002\u503C\u4E3A0\u8868\u793A\u5168\u8DEF\u5F84'),Z=s('"auto"'),nn=n("p",null,[n("code",null,"tagPathIndex"),s(" \u7279\u522B\u8BF4\u660E")],-1),sn=n("pre",{class:"code-content"},[n("code",null,`{
    "tags": [{
        "name": "\u83B7\u53D6\u679A\u4E3E\u4FE1\u606F",
        "description": "Enum Qry Facade Impl"
    }],
    "paths": {
        "/dio/enum/read-mode": {
            "get": {
                "tags": [
                    "\u83B7\u53D6\u679A\u4E3E\u4FE1\u606F"
                ],
                "summary": "\u83B7\u53D6\u8BFB\u53D6\u6A21\u5F0F\u679A\u4E3E\u4FE1\u606F",
                "operationId": "getReadModeEnumUsingGET",
                "responses": {
                    "200": {
                        "description": "OK",
                        "content": {
                            "*/*": {
                                "schema": {
                                    "$ref": "#/components/schemas/Result\xABList\xABOptionDTO\xBB\xBB"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/dio/enum/read-policy": {
            {
                "get": {
                    "tags": [
                        "\u83B7\u53D6\u679A\u4E3E\u4FE1\u606F"
                    ],
                    "summary": "\u83B7\u53D6\u8BFB\u53D6\u6A21\u5F0F\u679A\u4E3E\u4FE1\u606F",
                    "operationId": "getReadPolicyEnumUsingGET",
                    "responses": {
                        "200": {
                            "description": "OK",
                            "content": {
                                "*/*": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Result\xABList\xABOptionDTO\xBB\xBB"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
    }
}
`)],-1),tn=n("p",null,[n("code",null,"tagPathIndex"),s(" \u503C\u4E3A "),n("code",null,"auto"),s(", \u4F1A\u81EA\u52A8\u8BA1\u7B97\u5FFD\u7565\u7684\u6700\u957F\u8DEF\u5F84\uFF0C \u4F8B\u5982\u4E0A\u9762\u7684\u5FFD\u7565 "),n("code",null,"/dio/enum")],-1),un=n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[s("  "),n("span",{class:"token comment"},`/**
   * \u83B7\u53D6\u8BFB\u53D6\u6A21\u5F0F\u679A\u4E3E\u4FE1\u606F
   *
   * @tags \u83B7\u53D6\u679A\u4E3E\u4FE1\u606F
   * @request GET: /dio/enum/read-mode
   */`),s(`
  `),n("span",{class:"token function-variable function"},"getReadMode"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("params"),n("span",{class:"token operator"},":"),s(" AxiosRequestConfig "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(`
    http`),n("span",{class:"token punctuation"},"."),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"request"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),s("defs"),n("span",{class:"token punctuation"},"."),s("ResultListOptionDTO"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      url`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"/dio/enum/read-mode"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
      method`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"GET"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token operator"},"..."),s("params"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},`/**
   * \u83B7\u53D6\u8BFB\u53D6\u6A21\u5F0F\u679A\u4E3E\u4FE1\u606F
   *
   * @tags \u83B7\u53D6\u679A\u4E3E\u4FE1\u606F
   * @request GET: /dio/enum/read-policy
   */`),s(`
  `),n("span",{class:"token function-variable function"},"getReadPolicy"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("params"),n("span",{class:"token operator"},":"),s(" AxiosRequestConfig "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(`
    http`),n("span",{class:"token punctuation"},"."),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"request"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),s("defs"),n("span",{class:"token punctuation"},"."),s("ResultListOptionDTO"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      url`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"/dio/enum/read-policy"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
      method`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"GET"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token operator"},"..."),s("params"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])],-1),an=n("p",null,[n("code",null,"tagPathIndex"),s(" \u503C\u4E3A 1, \u540D\u79F0\u7684\u751F\u6210\u4F1A\u5FFD\u7565 "),n("code",null,"/dio ")],-1),on=n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[s("  "),n("span",{class:"token comment"},`/**
   * \u83B7\u53D6\u8BFB\u53D6\u6A21\u5F0F\u679A\u4E3E\u4FE1\u606F
   *
   * @tags \u83B7\u53D6\u679A\u4E3E\u4FE1\u606F
   * @request GET: /dio/enum/read-mode
   */`),s(`
  `),n("span",{class:"token function-variable function"},"getEnumReadMode"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("params"),n("span",{class:"token operator"},":"),s(" AxiosRequestConfig "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(`
    http`),n("span",{class:"token punctuation"},"."),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"request"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),s("defs"),n("span",{class:"token punctuation"},"."),s("ResultListOptionDTO"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      url`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"/dio/enum/read-mode"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
      method`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"GET"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token operator"},"..."),s("params"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},`/**
   * \u83B7\u53D6\u8BFB\u53D6\u6A21\u5F0F\u679A\u4E3E\u4FE1\u606F
   *
   * @tags \u83B7\u53D6\u679A\u4E3E\u4FE1\u606F
   * @request GET: /dio/enum/read-policy
   */`),s(`
  `),n("span",{class:"token function-variable function"},"getEnumReadPolicy"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("params"),n("span",{class:"token operator"},":"),s(" AxiosRequestConfig "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(`
    http`),n("span",{class:"token punctuation"},"."),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"request"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),s("defs"),n("span",{class:"token punctuation"},"."),s("ResultListOptionDTO"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      url`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"/dio/enum/read-policy"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
      method`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"GET"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token operator"},"..."),s("params"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])],-1),en=n("h2",{id:"\u5DEE\u5F02\u6BD4\u8F83\u751F\u6210\u4EE3\u7801"},"\u5DEE\u5F02\u6BD4\u8F83\u751F\u6210\u4EE3\u7801",-1),cn=n("p",null,[n("img",{src:"https://image.parligerly.com/gifox/vscode-api-code-2.gif",alt:""})],-1),pn=n("h2",{id:"\u6253\u5F00\u63A5\u53E3\u6587\u6863"},"\u6253\u5F00\u63A5\u53E3\u6587\u6863",-1),ln=n("p",null,[n("img",{src:"https://image.parligerly.com/gifox/vscode-api-code-3.gif",alt:""})],-1),rn=n("h2",{id:"\u751F\u6210\u7684\u4EE3\u7801\u7ED3\u6784"},"\u751F\u6210\u7684\u4EE3\u7801\u7ED3\u6784",-1),dn=n("p",null,[n("img",{src:"https://image.parligerly.com/gifox/vscode-api-code-4.png",alt:""})],-1),_n=n("h2",{id:"api\u7684\u63A5\u53E3\u63D0\u793A"},"Api\u7684\u63A5\u53E3\u63D0\u793A",-1),kn=n("p",null,[n("img",{src:"https://image.parligerly.com/gifox/vscode-api-code-6.gif",alt:""})],-1),En=n("h2",{id:"defs\u7684\u7C7B\u578B\u63D0\u793A"},"defs\u7684\u7C7B\u578B\u63D0\u793A",-1),gn=n("p",null,[n("img",{src:"https://image.parligerly.com/gifox/vscode-api-code-5.gif",alt:""})],-1);function Fn(c,r,d,l,i,mn){const p=e("a-th"),o=e("a-tr"),_=e("a-thead"),a=e("a-td"),k=e("a-tbody"),E=e("a-table"),g=e("arco-article");return f(),B(g,D(A(c.data)),{default:t(()=>[C,y,v,T,O,R,q,u(E,{class:"component-api-table"},{default:t(()=>[I,u(_,null,{default:t(()=>[u(o,null,{default:t(()=>[u(p,null,{default:t(()=>[b]),_:1}),u(p,null,{default:t(()=>[G]),_:1}),u(p,null,{default:t(()=>[P]),_:1})]),_:1})]),_:1}),u(k,null,{default:t(()=>[u(o,null,{default:t(()=>[u(a,null,{default:t(()=>[w]),_:1}),u(a,null,{default:t(()=>[L]),_:1}),u(a,null,{default:t(()=>[M]),_:1})]),_:1}),u(o,null,{default:t(()=>[u(a,null,{default:t(()=>[U]),_:1}),u(a,null,{default:t(()=>[$]),_:1}),u(a,null,{default:t(()=>[j]),_:1})]),_:1}),u(o,null,{default:t(()=>[u(a,null,{default:t(()=>[N]),_:1}),u(a,null,{default:t(()=>[z]),_:1}),u(a,null,{default:t(()=>[V]),_:1})]),_:1}),u(o,null,{default:t(()=>[u(a,null,{default:t(()=>[K]),_:1}),u(a,null,{default:t(()=>[Q]),_:1}),u(a,null,{default:t(()=>[H]),_:1})]),_:1}),u(o,null,{default:t(()=>[u(a,null,{default:t(()=>[J]),_:1}),u(a,null,{default:t(()=>[S]),_:1}),u(a,null,{default:t(()=>[W]),_:1})]),_:1}),u(o,null,{default:t(()=>[u(a,null,{default:t(()=>[X]),_:1}),u(a,null,{default:t(()=>[Y]),_:1}),u(a,null,{default:t(()=>[Z]),_:1})]),_:1})]),_:1})]),_:1}),nn,sn,tn,un,an,on,en,cn,pn,ln,rn,dn,_n,kn,En,gn]),_:1},16)}var fn=F(x,[["render",Fn]]);export{fn as default};

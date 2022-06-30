```yaml
meta:
  type: vscode 
title: swagger生成前端api的代码
description: 根据swagger生成前端api的ts代码，提供良好的typescript的提示
```

## 安装插件
vscode 插件市场安装 该插件

![](https://image.parligerly.com/gifox/vscode-api-code.png)

## 配置文件

`api-code-config.json` 

```
{
  "originUrl": "https://nextjs-demo-six-alpha.vercel.app/api/doc",
  "docUrl": "https://nextjs-demo-six-alpha.vercel.app/api-doc",
  "outDir": "./src/api",
  "usingOperationId": false, 
}

```

配置文件说明(目前有效的配置)

| 参数 | 参数说明 | 默认值|
|----| ---| ---|
|originUrl| swagger的json地址 | - |
|docUrl| swagger的文档地址 | - |
|outDir| api代码生成到文件目录 | - |
|usingOperationId| 是否使用OperationIds生成方法名 | - |


## 差异比较生成代码

![](https://image.parligerly.com/gifox/vscode-api-code-2.gif)

## 打开接口文档
![](https://image.parligerly.com/gifox/vscode-api-code-3.gif)

## 生成的代码结构
![](https://image.parligerly.com/gifox/vscode-api-code-4.png)

## Api的接口提示
![](https://image.parligerly.com/gifox/vscode-api-code-6.gif)

## defs的类型提示
![](https://image.parligerly.com/gifox/vscode-api-code-5.gif)
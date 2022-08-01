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
|excludeTags| 过滤tag下的接口生成 | [] |
|tagPathIndex| 接口名称生成忽略的长度， 值为 "auto"或者数字。值为0表示全路径  | "auto" |


`tagPathIndex` 特别说明
```
{
	"tags": [{
		"name": "获取枚举信息",
		"description": "Enum Qry Facade Impl"
	}],
	"paths": {
		"/dio/enum/read-mode": {
			"get": {
				"tags": [
					"获取枚举信息"
				],
				"summary": "获取读取模式枚举信息",
				"operationId": "getReadModeEnumUsingGET",
				"responses": {
					"200": {
						"description": "OK",
						"content": {
							"*/*": {
								"schema": {
									"$ref": "#/components/schemas/Result«List«OptionDTO»»"
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
						"获取枚举信息"
					],
					"summary": "获取读取模式枚举信息",
					"operationId": "getReadPolicyEnumUsingGET",
					"responses": {
						"200": {
							"description": "OK",
							"content": {
								"*/*": {
									"schema": {
										"$ref": "#/components/schemas/Result«List«OptionDTO»»"
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
```

`tagPathIndex` 值为  `auto`, 会自动计算忽略的最长路径， 例如上面的忽略 `/dio/enum`

``` ts
  /**
   * 获取读取模式枚举信息
   *
   * @tags 获取枚举信息
   * @request GET: /dio/enum/read-mode
   */
  getReadMode = (params: AxiosRequestConfig = {}) =>
    http.request<defs.ResultListOptionDTO>({
      url: `/dio/enum/read-mode`,
      method: "GET",
      ...params,
    });

  /**
   * 获取读取模式枚举信息
   *
   * @tags 获取枚举信息
   * @request GET: /dio/enum/read-policy
   */
  getReadPolicy = (params: AxiosRequestConfig = {}) =>
    http.request<defs.ResultListOptionDTO>({
      url: `/dio/enum/read-policy`,
      method: "GET",
      ...params,
    });
```

`tagPathIndex` 值为 1,  名称的生成会忽略 `/dio `

``` ts
  /**
   * 获取读取模式枚举信息
   *
   * @tags 获取枚举信息
   * @request GET: /dio/enum/read-mode
   */
  getEnumReadMode = (params: AxiosRequestConfig = {}) =>
    http.request<defs.ResultListOptionDTO>({
      url: `/dio/enum/read-mode`,
      method: "GET",
      ...params,
    });

  /**
   * 获取读取模式枚举信息
   *
   * @tags 获取枚举信息
   * @request GET: /dio/enum/read-policy
   */
  getEnumReadPolicy = (params: AxiosRequestConfig = {}) =>
    http.request<defs.ResultListOptionDTO>({
      url: `/dio/enum/read-policy`,
      method: "GET",
      ...params,
    });
```

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
**众盾APP后端接口文档**

###### 域名
> http://zdapp.808w.com

###### 返回数据格式
> JSON

###### HTTP请求方式
> GET|POST



###### 公用返回字段

> | 返回字段 | 字段类型      | 说明                             |
> | :------- | :------------ | :------------------------------- |
> | status   | int           | 返回结果状态。1：正常；0：异常。 |
> | company  | string        | 返回信息                         |
> | time     | string        | 返回时间戳                       |
> | data     | string\|array | 业务相关数据                     |



------



1\. 首页推荐新闻列表

###### URL 

> http://zdapp.808w.com/app/news/indexlist

###### 接口功能
> 获取首页推荐新闻列表

###### 请求参数
> | 参数 | 必选 | 类型 | 说明 |
> | :--- | :--- | :--- | ---- |
> | 无   |      |      |      |

###### 业务相关数据
> | 数组字段  | 字段类型 | 说明           |
> | :-------- | :------- | :------------- |
> | id        | int      | 新闻分类id     |
> | name      | string   | 新闻分类名     |
> | thumbnail | string   | 新闻分类缩略图 |
> | articles  | array    | 此分类下的文章 |

###### 



> 接口示例
>
> 地址：http://zdapp.808w.com/app/news/indexlist

``` javascript

```

------

2\. 新闻文章列表

###### URL 

> http://zdapp.808w.com/app/news/showlist

###### 接口功能

> ```
> 新闻文章列表
> ```

###### 请求参数

> | 参数 | 必选 | 类型 | 说明       |
> | :--- | :--- | :--- | ---------- |
> | id   | 是   | int  | 新闻分类id |

###### 业务相关数据

> | 数组字段       | 字段类型 | 说明           |
> | :------------- | :------- | :------------- |
> | id             | int      | 文章id         |
> | post_hits      | int      | 文章点击次数   |
> | post_like      | int      | 文章点赞次数   |
> | post_title     | string   | 文章标题       |
> | published_time | int      | 文章发布时间戳 |
> | thumbnail      | string   | 文章缩略图     |

###### 



> 接口示例

> 地址：http://zdapp.808w.com/app/news/showlist?id=196

``` javascript

```

------

2\. 新闻文章内容

###### URL 

> http://zdapp.808w.com/app/news/article

###### 接口功能

> ```
> 新闻文章内容
> ```

###### 请求参数

> | 参数 | 必选 | 类型 | 说明       |
> | :--- | :--- | :--- | ---------- |
> | id   | 是   | int  | 文章id     |
> | cid  | 否   | int  | 所属分类id |

###### 业务相关数据

> | 数组字段    | 字段类型 | 说明         |
> | :---------- | :------- | :----------- |
> | article     | array    | 文章所有信息 |
> | nextArticle | array    | 下篇文章     |
> | prevArticle | array    | 上篇文章     |

###### 

> 接口示例

> 地址：http://zdapp.808w.com/app/news/article?id=731&cid=196

```javascript

```

------
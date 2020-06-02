# report-js 数据上报方法库

js打点上报，与业务无关的方法库（npm包）

## 如何调试

  1. 构建文件： npm run build 或者 监听模式: npm run watch
  2. 浏览器打开：/demo/index.html
  3. 查看请求：开发工具 - 查看请求
  
## 如何安装&使用

```bash
npm install @xpeng/report-js
```

方式一：SPA页面
  
```js
import Report from '@xpeng/report-js'

// 初始化
  let report = new Report(data, options)
  
// 发送/上报数据
report.send(data, options)
```

方式二：script脚本
  
```js
<script type="text/javascript" src="/report.min.js文件的路径"></script>
<script type="text/javascript">
  report = new Report(data, options)
  report.send(data, options)
</script>
```

方式三：SSR（服务端渲染）

```js
import Report from '@xpeng/report-js'

constructor () {
  // 缓存一下report实例，以便后续使用
  this.reportIns = new Report(data, options)
}

componentDidMount() {
  // 数据上报
  this.reportIns.send(data, options)
}
```

支持umd其他加载方式

## 类的静态方法

```js
// 返回对应的`value`值
Report.getCookie('cookie的name')
```

## 参数说明

```bash
data：上报的数据，可为空对象
options：配置项，url字段必填，即服务器接收数据的地址；
{
  url: '服务器接收数据的地址'
}
```
  
  
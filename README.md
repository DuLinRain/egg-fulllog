# egg-fulllog

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-fulllog.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-fulllog

[download-image]: https://img.shields.io/npm/dm/egg-fulllog.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-fulllog

<!--
Description here.
-->

egg-fulllog 是一个简单的全息日志插件，记录的是请求级别的用户日志。 该插件会在ctx上挂载fulllog对象，该对象提供ctx.fulllog.log、ctx.fulllog.info、ctx.fulllog.error三个方法, 用户在代码中调用这三个方法输出的日志均会被搜集并上报。

默认情况下egg-fulllog还会搜集一些基本的网络、运行环境等信息，如果不想收集这些信息，可以关闭。

egg-fulllog主要负责收集以上日志信息，并提供配置用于用户指定上报的具体位置。

## Install

```bash
$ npm i egg-fulllog --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.fulllog = {
  enable: true,
  package: 'egg-fulllog',
};
```

## Configuration

### 默认配置 

```js
// {app_root}/config/config.default.js
exports.fulllog = {

};
```
### 关闭网络、运行环境

```js
// {app_root}/config/config.default.js
exports.fulllog = {
	onlyself: true
};
```
### 定义上报到何处
```js
// {app_root}/config/config.default.js
exports.fulllog = {
	customReport: function (self) {
    	// do something here
	}
};
```
customReport函数接收一个参数，这个参数上会暴露ctx(请求上下文), collector(一次请求收集的日志集合，是一个数组)。	

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

```js
// {app_root}/config/config.default.js
exports.fulllog = {
	customReport: function (self) {
    	// do something here
		console.log(collector.join('\n') || '')
	}
};
```

## Questions & Suggestions

Please open an issue [here](https://github.com/DuLinRain/egg-fulllog/issues).

## License

[MIT](LICENSE)

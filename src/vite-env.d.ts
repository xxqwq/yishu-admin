// 解决找不到模块声明问题
declare module '*.vue' {
  import { Component } from 'vue'; const component: Component; export default component;
}

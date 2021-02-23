// * 经验总结

// * 1 防抖节流
/**
 *
 * @param {*} fn
 * @param {*} time
 * 防抖 将多次执行变为一次执行
 * 应用场景：resize触发，浏览器窗口大小变化；搜索应用
 */
function debounce(fn, time) {
  var timeout = null;
  return function() {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(fn, time);
  };
}
/**
 *
 * @param {*} fn
 * @param {*} delay
 * 节流 在单位时间内触发一次
 * 应用场景：暴力点击
 */
function throttle(fn, delay) {
  var timer = null;
  var startTime = Date.now(); // 开始滚动时间
  return function() {
    let _that = this;
    var now = Date.now(); // 当前时间
    var remain = delay - (now - startTime); // 剩余时间
    var args = null;
    clearTimeout(timer);
    if (remain <= 0) {
      fn.apply(_that, args);
      startTime = Date.now();
    } else {
      timer = setTimeout(fn, remain);
    }
  };
}

// *  2 ajax和跨域

// readyState 状态
// 0 未初始化 send方法尚未调用
// 1 载入 已经调用send方法，正在发送请求
// 2 载入完成 send方法完成，已经接受到全部响应内容
// 3 交互 正在解析响应内容
// 4 完成 响应内容解析完成，可以再客户端调用

// status状态码
// 2xx 成功处理请求
// 3xx 需要重定向，浏览器直接跳转
// 4xx 客户端请求错误
// 5xx 服务器端错误

// * 跨域解决方法
// 1 JSONP：利用<script></script>绕过跨域限制，需要后端配合拼接并返回js文件
// 2 CORS：通过请求头解决跨域问题，需要服务器端支持

/**
 *
 * @param {*} url
 * 手写简易ajax请求
 */
function ajax(url) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve();
        } else if (xhr.status === 404) {
          reject(new Error("404 not found"));
        }
      }
    };
    xhr.send();
  });
  return promise;
}

// *题目整理
/**
 * 1. typeof 可以判断的类型
 * undefined，Boolean，String，Number，symbol，Object（null会识别为Object），function
 * 基础数据类型：undefined，null，Boolean，String，Number，引用类型：Object
 * 2. 什么时候使用 === ，什么时候使用 ==
 * 大多数情况使用 === ， == 会进行数据类型转换比较
 * 3.值类型和引用类型的区别
 * 保存位置和方式不同。值类型存放在栈中，引用类型存放在堆中，将一个指针存放在栈中；复制内容不同；
 * 识别方式不同，值类型使用typeof，引用类型使用instanceof；
 * 4.手写深拷贝
 * 5.如何判断变量是不是数组 使用instanceof
 * 6.class的原型本质，如何理解
 * 7.this的不同应用场景和不同取值
 * 8.闭包的应用场景
 * 9.attribute和property的区别
 * 10.如何识别浏览器类型
 * 11.事件冒泡的过程，阻止事件冒泡和默认行为
 * 12.输入url到页面加载过程
 * 13.常见的安全攻击方式和预防
 */

 // * vue问题整理
 /**
  * 一.vue的生命周期
  * 定义：从一个组件的创建、数据初始化、挂载、更新、销毁的过程
  * 钩子函数：beforeCreate、created（初始化）、beforeMount、mounted（挂载）、
  * beforeUpload、upload（更新）、beforeDestroy、destroyed（销毁）
  * 方法属性：data(){}, methods:{},computed:{}，watch:{},props:{},
  * data函数原因：保证每个实例组件互不干扰，互不影响。
  * computed与watch的区别：
  * computed：
  * 1.支持缓存，只有依赖数据改变时才会重新计算；
  * 2.不支持异步，当计算中存在异步操作时无效，无法监听数据；
  * 3.computed属性值会默认走缓存，
  * 4.可以存在一对多属性的情况，当前属性如果是通过其他属性计算来的，这个属性依赖其他属性，存在一对一或者一对多情况；
  * 5.存在get和set方法，当数据需要计算时使用set方法，当属性使用函数时默认使用get方法
  * watch：
  * 1.不支持缓存，数据发生改变会直接触发操作；
  * 2.支持异步；
  * 3.监听的函数接受两个参数，一个是最新的值，一个是变化之前的值；
  * 4.监听的数据必须是响应式的；必须在data中申明过或者props中来自父组件；
  * 5.深度监听
  * 二.vue常用api
  * v-for v-if v-show
  * v-for:
  * key的作用：给每个节点添加唯一标识，为了高效的更新虚拟dom；
  * v-if和v-show的区别：
  * v-if有更高的切换开销，v-show有更高的初始化渲染开销；v-if是条件渲染；v-show是display设置为none；
  * 三.vuex存储
  * 1.state：
  * 2.
  * 四.router路由
  * 五.vue-cli工具
  * 六.vue原理
  * 
  */

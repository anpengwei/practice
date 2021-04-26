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
 * 10.浏览器渲染机制
 * .1
 * 11.事件冒泡的过程，阻止事件冒泡和默认行为
 * 12.http请求过程
 * .1 对url进行DNS域名解析获取对应的IP
 * .2 根据IP，找到相应的服务器，建立tcp连接
 * .3 建立tcp连接后发起http请求
 * .4 http连接之后，服务器将html发送到浏览器
 * .5 浏览器解析html js css img 等
 * .6 浏览器渲染html
 * .7 服务器关闭tcp http连接
 * 13.页面渲染过程
 * .1 解析html构建dom树
 * .2 解析css构建渲染树
 * .3
 * 14.常见的安全攻击方式和预防
 * .1
 * 15.o(1)的栈
 * 16.如何进行存储选择，cookie是否可以被二级域名访问，如何进行本地数据共享
 * 17.css权重
 * .1 第一等  内联样式 style="" 权值 1000
 * .2 第二等  id选择器 #content 权值 100
 * .3 第三等  伪类 类和属性选择器 .content 权值 10
 * .4 第四等  类型选择器和元素选择器 div p 权值1
 * .5 如果权重相同，后声明占优
 * 18.flex布局flex的默认值，实现左右固定中间自适应
 * .1 父元素设置flex模式
 * .2 左右宽度固定，中间赋值flex 1
 * flex默认值：0 1 auto
 * 19.new的过程
 * .1 首先是创建一个空对象obj
 * .2 将对象的_proto_指向new的函数的Prototype
 * .3 利用call方法将this指向obj
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
 * 1.state：设置一个全局对象，将需要的值存放在state中，通过this.$store.state方法获取
 * 2.getter：实时监控state中的值，可以对state中的值进行二次计算，取值方式同上
 * 3.mutation：vuex中唯一修改state的方法且是同步执行，修改方式 this.$store.commit('key',value)
 * 4.action：通过提交mutation的方式修改state，支持异步操作， this.$store.dispatch('key',value)
 * 5.modules：模块化管理store，每个模块中都有以上的四种方法
 * 四.router路由
 * 五.vue-cli工具
 * 六.vue原理
 *
 */
/**
 * 涂鸦智能准备
 * 1.react生命周期
 * 2.ts中type和interface的区别
 * 3.说说http，http缓存
 *   .1 http是超文本协议，使用tcp连接进行数据稳定传输，它规定了浏览器与服务器之间响应、请求的格式和规则
 *   .2 http是通过报文交换数据的，发送请求：请求报文；响应请求：响应报文
 *      格式：请求行、请求头部、空行、请求数据
 *   .3 http是无状态、无连接的采用tcp作为传输层协议，保证了数据的可靠性传输
 *   .4 http解析url
 *   .5 http缓存
 *      强缓存：在缓存数据未失效的情况下，会直接使用浏览器的缓存，不会向服务器发送请求，http的状态码是200；
 *             虽然强缓存可以减少服务端请求，但是服务端资源发生修改页面不会做出反应
 *      协商缓存：当第一次请求没有强缓存时，第二次请求会与服务器协商对比判断资源是否进行了修改更新，
 *               如果没有更新http返回304，如果更新http返回200。但是协商缓存每次都需要服务器进行交互
 *               性能不好，从性能方面，推荐多使用强缓存
 *   .6 浏览器缓存：cookie、localStorage、sessionStorage
 *                cookie：
 *                localStorage：本地存储，大小5M左右，需要手动清空， 通过localStorage.setItem(key,value)和 通过localStorage.getItem(key)
 *                              来存储和取值
 *                sessionStorage：本地存储，大小5M左右，窗口关闭存储数据会自动清除
 *                           
 *   .7 http2.0：http2.0大幅度提高了web性能，减少了前端优化工作，实现了低延迟高吞吐量
 *      （1）二进制分帧
 *      （2）首部压缩
 *      （3）多路复用
 *      （4）请求优先级
 *      （5）服务器推送
 *            
 * 4.说说vue的双向绑定
 *  .1 只要通过Object.defineProperty()方法实现数据劫持并结合发布者-订阅者模式实现的
 *  .2 通过Observer监视器监视属性变化
 *  .3 实现一个订阅者Watcher，可以接受到属性变化并通知执行相应的函数，更新视图
 *  .4 实现一个解析器Compile，扫描和解析每个节点的相关指令
 * 5.diff算法
 * .1 diff算法实现的是最小量更新虚拟dom
 * .2 虚拟dom是将真实的dom树构造为js对象形式，解决浏览器操作真实dom的性能问题
 * .3 最小量就是在新老虚拟dom之间找到最小更新的部分，从而将该部分对应的dom更新
 * .4 新旧节点比较（patch）
 * .5 精细化比较（patchVnode）
 * .6 都存在子节点的情况下，使用updateChildren函数进行对比，实现最小更新
 * 6.说说状态逻辑复用问题
 * 7.介绍下 es6 新增了哪些特性
 * 8.Reflect 的用途？
 *  .1 从Reflect对象上能拿到语言内部方法，
 *  .2 操作对象报错时，会返回false
 *  .3 让操作对象变成函数式编程
 *  .4 保持和proxy对象的方法一一对象
 * 9.域名切片
 * 10.为什么 vue 或者 react 要求 key 值唯一
 * 11.MVVM 实现
 * 12.data 里面为什么是函数
 *  .1 vue每个组件都是一个实例，引用同一个对象，data作为函数形成自己的作用域，达到组件实例互不干扰的效果
 * 13.UDP TCP 区别
 * 14.vuex 应用场景,vuex持久化配置
 * 15.说说 vue 的模板编译
 * 16.new 原理实现
 * 17.状态码 403 404 503 304 说说
 * 18.说说事件循环
 * 19.讲讲 fiber
 * 20.nextTick 原理
 * 21.路由跳转原理
 * 22.history和hash模式的区别  各自模式的特点
 */

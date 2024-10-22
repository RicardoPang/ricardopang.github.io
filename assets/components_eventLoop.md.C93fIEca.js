import{_ as l,c as i,o as t,a3 as e}from"./chunks/framework.DMj_wZv2.js";const h=JSON.parse('{"title":"深入浅出：理解浏览器与 Node.js 的 Event Loop","description":"事件循环","frontmatter":{"title":"深入浅出：理解浏览器与 Node.js 的 Event Loop","description":"事件循环"},"headers":[],"relativePath":"components/eventLoop.md","filePath":"components/eventLoop.md"}'),o={name:"components/eventLoop.md"},p=e('<blockquote><p>JS是<code>单线程</code>的，JS是通过事件队列<code>(Event Loop)</code>的方式来实现异步回调的。</p></blockquote><h2 id="一-进程和线程" tabindex="-1">一. 进程和线程 <a class="header-anchor" href="#一-进程和线程" aria-label="Permalink to &quot;一. 进程和线程&quot;">​</a></h2><ul><li>进程是操作系统资源分配的基本单位，进程中包含线程。（拥有资源和独立运行的最小单位）</li><li>线程由进程管理，是进程的执行单位。为了提升浏览器的稳定性和安全性，浏览器采用了多进程模型。</li></ul><h2 id="二-浏览器5个进程" tabindex="-1">二. 浏览器5个进程 <a class="header-anchor" href="#二-浏览器5个进程" aria-label="Permalink to &quot;二. 浏览器5个进程&quot;">​</a></h2><blockquote><p>浏览器采用多进程模型，每一个标签页（Tab）就是一个独立的进程。</p></blockquote><ul><li><strong>浏览器进程</strong>：负责界面显示、用户交互、子进程管理，提供存储等。</li><li><strong>渲染进程</strong>：每个页面都有独立的渲染进程，主要负责页面的渲染工作。</li><li><strong>网络进程</strong>：网络进程：主要负责加载网络资源（如 HTML、CSS、JavaScript 等）。</li><li><strong><code>GPU</code>进程</strong>：负责 3D 绘制，提高图形处理性能。</li><li><strong>插件进程</strong>： 负责管理 Chrome 中安装的插件。</li></ul><p>渲染进程：</p><ol><li>GUI渲染线程 <ul><li>渲染、布局和绘制页面</li><li>当页面需要重绘或回流时，GUI 渲染线程负责执行这些操作。</li><li>与JS引擎互斥</li></ul></li><li>JS引擎线程 <ul><li>负责解析执行JS脚本</li><li>只有一个JS引擎线程（单线程）</li><li>与GUI渲染线程互斥</li></ul></li><li>事件触发线程 <ul><li>用来控制事件循环（鼠标点击、setTimeout、Ajax等）</li><li>当事件满足触发条件时，把时间放入JS引擎的执行队列中</li></ul></li><li>定时器触发线程 <ul><li>setInterval和setTimeout所在线程</li><li>计时完毕后会通知事件触发线程</li></ul></li><li>异步HTTP请求线程 <ul><li>浏览器有一个单独的线程处理AJAX请求</li><li>当请求完毕后，如果有回调函数，会通知事件触发线程</li></ul></li></ol><h2 id="三-eventloop使用" tabindex="-1">三. eventloop使用 <a class="header-anchor" href="#三-eventloop使用" aria-label="Permalink to &quot;三. eventloop使用&quot;">​</a></h2><p><img src="https://p.ipic.vip/fpbyv1.jpg" alt="EventLoop"></p><p><img src="https://p.ipic.vip/x2i3vn.jpg" alt="EventLoop2"></p><ol><li>宏任务 <ul><li>页面的大部分任务是在主任务上执行的，如宏任务渲染事件、用户交互、JavaScript脚本执行、网路请求、文件读写等</li><li>宏任务会添加到消息队列的尾部，当主线程执行到该消息的时候就会执行</li><li>每次从事件队列中获取的就是一个宏任务，宏任务执行过程中不会执行其他其他内容</li><li>每次宏任务执行完毕后会进行GUI渲染线程的渲染，然后再执行下一个宏任务</li><li>宏任务颗粒度较大，不适合需要精确控制的任务</li><li>宏任务是有宿主方控制</li></ul></li><li>微任务 <ul><li>宏任务结束后进行渲染然后执行下一个宏任务</li><li>微任务是当前宏任务执行后立即执行的任务</li><li>当宏任务执行完，就会先将执行期间所产生的所有微任务都执行完再去进行渲染</li><li>微任务由V8引擎控制，在厂家全局执行上下文的时候，也会在V8内部创建一个微任务队列</li><li>微任务: process.nextTick（Nodejs）, Promises, Object.observe, MutationObserver</li></ul></li><li>eventloop实现 <ul><li>JS 分为同步任务和异步任务</li><li>同步任务都在JS引擎线程上执行，形成一个执行栈</li><li>事件触发线程管理一个任务队列，异步任务触发条件达成，将回调事件放到任务队列中</li><li>执行栈中所有同步任务执行完毕，此时JS引擎线程空闲，系统会读取任务队列，将可运行的异步任务回调事件添加到执行栈中，开始执行</li><li>setTimeout/setInterval JS引擎线程=&gt;定时触发器线程=&gt;事件触发线程=&gt;事件队列</li><li>Ajax JS引擎线程=&gt;异步http请求线程=&gt;事件触发线程=&gt;事件队列</li></ul></li></ol><h2 id="node中的eventloop" tabindex="-1">Node中的EventLoop <a class="header-anchor" href="#node中的eventloop" aria-label="Permalink to &quot;Node中的EventLoop&quot;">​</a></h2><ul><li>Node.js 采用 V8 作为 JavaScript 解析引擎，I/O 操作使用自研的 libuv 库。</li><li>libuv是一个基于事件驱动的跨平台抽象层，封装了不同操作系统一些底层特性，对外提供统一的API</li><li>事件循环也在它里面实现 <ul><li>libuv 是一个基于事件驱动的跨平台抽象层，封装了不同操作系统的底层特性，并对外提供统一的 API。</li><li>libuv库负责Node Api的执行，它将不同的任务分配给不同的线程，通过 Event Loop 以异步方式将任务的执行结果返回给 V8。</li><li>V8 引擎再将结果返回给用户</li></ul></li></ul><p><img src="https://p.ipic.vip/rytk1w.jpg" alt="img"></p><p><strong>libuv</strong></p><ul><li>同步执行全局的脚本</li><li>执行所有的微任务，先执行nextTick中的所有的任务，再执行其他微任务</li><li>开始执行宏任务，共有6个阶段，从第1个阶段开始，会执行每一个阶段所有的宏任务</li></ul><p><img src="https://p.ipic.vip/g5wxt5.png" alt="img"></p><p><img src="https://p.ipic.vip/xcvrzs.png" alt="image-20240408231110988"></p>',19),a=[p];function n(s,r,c,u,d,v){return t(),i("div",null,a)}const m=l(o,[["render",n]]);export{h as __pageData,m as default};
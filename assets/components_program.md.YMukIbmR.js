import{_ as e,c as a,o as i,a3 as l}from"./chunks/framework.DMj_wZv2.js";const m=JSON.parse('{"title":"微信小程序","description":"小程序开发和原理","frontmatter":{"title":"微信小程序","description":"小程序开发和原理"},"headers":[],"relativePath":"components/program.md","filePath":"components/program.md"}'),r={name:"components/program.md"},t=l('<h1 id="微信小程序的技术架构与运行原理解析" tabindex="-1">微信小程序的技术架构与运行原理解析 <a class="header-anchor" href="#微信小程序的技术架构与运行原理解析" aria-label="Permalink to &quot;微信小程序的技术架构与运行原理解析&quot;">​</a></h1><p>小程序作为微信生态中的轻量级应用，极大地简化了开发者的开发流程，同时保证了用户的良好使用体验。本文将深入解析小程序的技术架构，从逻辑层与渲染层的角度详细剖析小程序的运行原理，帮助开发者更好地理解小程序的底层机制。</p><h3 id="_1-webview的弊端" tabindex="-1">1. webview的弊端 <a class="header-anchor" href="#_1-webview的弊端" aria-label="Permalink to &quot;1. webview的弊端&quot;">​</a></h3><p>通过操作 DOM，JavaScript 可以直接访问小程序中的一些敏感数据，如用户信息、商家信息等，从而导致小程序的安全性严重受损。</p><h3 id="_2-如何解决传统h5安全管控问题" tabindex="-1">2. 如何解决传统h5安全管控问题 <a class="header-anchor" href="#_2-如何解决传统h5安全管控问题" aria-label="Permalink to &quot;2. 如何解决传统h5安全管控问题&quot;">​</a></h3><p>为了解决安全管控问题，小程序阻止开发者使用一些浏览器提供的比如页面跳转、操作DOM、动态执行脚本等功能。由于 JavaScript 具有高度的灵活性，且浏览器接口繁多，因此很容易忽略某些潜在的安全风险。即便禁用了所有已知的危险接口，浏览器内核的更新仍可能带来新的漏洞。</p><p>所以，要彻底解决这个问题，必须提供一个沙箱环境来运行开发者的js代码。这个沙箱环境没有任何浏览器相关接口，只提供纯js的解释执行环境。</p><h3 id="_3-小程序解决了什么问题" tabindex="-1">3. 小程序解决了什么问题？ <a class="header-anchor" href="#_3-小程序解决了什么问题" aria-label="Permalink to &quot;3. 小程序解决了什么问题？&quot;">​</a></h3><ul><li><p>性能优于传统 H5 应用</p></li><li><p>提供统一的微信入口，方便用户管理</p></li><li><p>集成微信登录功能，简化用户身份验证</p></li><li><p>支持微信分享，提升用户获取和传播效率</p></li><li><p>提供快速加载机制</p></li><li><p>提供接近原生应用的用户体验</p></li><li><p>安全性高，支持微信的数据开放接口</p></li><li><p>简化开发流程，提高开发效率</p></li></ul><h2 id="小程序的基本架构" tabindex="-1">小程序的基本架构 <a class="header-anchor" href="#小程序的基本架构" aria-label="Permalink to &quot;小程序的基本架构&quot;">​</a></h2><p>小程序的架构主要分为<strong>逻辑层</strong>与<strong>渲染层</strong>，这两者通过微信提供的桥梁（WeixinJSBridge）进行通信，确保数据和视图能够实时交互。</p><h3 id="_1-逻辑层" tabindex="-1">1. 逻辑层 <a class="header-anchor" href="#_1-逻辑层" aria-label="Permalink to &quot;1. 逻辑层&quot;">​</a></h3><p>逻辑层负责处理小程序的业务逻辑，包括页面的生命周期管理、事件处理、数据的加载与处理等。它通过JavaScript实现，iOS系统使用的是JSC引擎，Android则使用的是V8引擎，二者通过<strong>单独的线程</strong>运行，保证了逻辑和渲染互不干扰。</p><h4 id="核心结构" tabindex="-1">核心结构 <a class="header-anchor" href="#核心结构" aria-label="Permalink to &quot;核心结构&quot;">​</a></h4><ul><li><strong>Page()</strong> 和 <strong>App()</strong>：分别对应页面和整个小程序的生命周期管理。</li><li><strong>setData()</strong>：用于更新页面的数据，这些数据通过通信机制传递给渲染层。</li><li><strong>WeixinJSBridge</strong>：微信提供的内部桥梁，主要用于逻辑层与渲染层的通信。</li></ul><p>逻辑层执行的过程：</p><ol><li>加载小程序的基础库（<code>WAService.js</code>），这包括了微信提供的API。</li><li>加载所有的页面文件，并构建应用的全局配置。</li><li>处理数据和事件，触发生命周期函数，并通过<code>setData</code>更新渲染层的数据。</li></ol><h3 id="_2-渲染层" tabindex="-1">2. 渲染层 <a class="header-anchor" href="#_2-渲染层" aria-label="Permalink to &quot;2. 渲染层&quot;">​</a></h3><p>渲染层负责显示用户界面，主要通过<strong>WXML</strong>和<strong>WXSS</strong>来定义页面的结构和样式。WXML类似于HTML，而WXSS则与CSS相似。渲染层通过Webkit内核的<strong>iframe</strong>来运行，确保其与逻辑层的分离。</p><h4 id="核心结构-1" tabindex="-1">核心结构 <a class="header-anchor" href="#核心结构-1" aria-label="Permalink to &quot;核心结构&quot;">​</a></h4><ul><li><strong>WXML</strong>：页面结构，类似于HTML。</li><li><strong>WXSS</strong>：页面样式，类似于CSS。</li><li><strong>WeixinJSBridge</strong>：同样在渲染层提供了通信机制，用于接收逻辑层的数据并更新页面。</li><li><strong>exparser组件系统</strong>：微信自定义的一套组件系统，基于WebComponent，通过虚拟DOM（VNode）来实现渲染和更新。</li></ul><p>渲染层的执行过程：</p><ol><li>加载默认的配置文件与基础库，解析WXML和WXSS文件。</li><li>动态计算页面的CSS样式，并结合设备分辨率（通过<code>wcsc</code>编译WXSS），确保适配不同的设备。</li><li>通过<code>VNode</code>机制对比新旧数据，实现<strong>diff算法</strong>，确保高效更新页面。</li></ol><h3 id="_3-逻辑层与渲染层的通信" tabindex="-1">3. 逻辑层与渲染层的通信 <a class="header-anchor" href="#_3-逻辑层与渲染层的通信" aria-label="Permalink to &quot;3. 逻辑层与渲染层的通信&quot;">​</a></h3><p>逻辑层与渲染层之间的通信是通过微信内部的桥梁<code>WeixinJSBridge</code>实现的。它不仅能够在逻辑层和渲染层之间传递数据，还可以与 Native 原生线程进行通信。通过这个桥梁，开发者可以使用<code>setData()</code>来将逻辑层的数据同步到渲染层，达到动态更新视图的效果。</p><p><img src="https://p.ipic.vip/ncwq4a.png" alt="小程序架构1"></p><ul><li><p>小程序微双线程架构，分别有渲染层与逻辑层管理，渲染层界面使用webview进行渲染；逻辑层采用JSCore运行JavaScript代码。</p></li><li><p>两个线程之间有Native层进行统一处理。无论是线程之间的通讯、数据的传递、网路请求都由Native层做转发。</p></li><li><p>渲染层存在多个webview，更加接近原生应用APP的用户体验。</p></li></ul><h2 id="小程序的渲染引擎与编译器" tabindex="-1">小程序的渲染引擎与编译器 <a class="header-anchor" href="#小程序的渲染引擎与编译器" aria-label="Permalink to &quot;小程序的渲染引擎与编译器&quot;">​</a></h2><h3 id="_1-wxss-编译-加载" tabindex="-1">1.WXSS 编译-加载 <a class="header-anchor" href="#_1-wxss-编译-加载" aria-label="Permalink to &quot;1.WXSS 编译-加载&quot;">​</a></h3><p>WXSS文件编译后成 wxss.js 文件，index.wxss文件会先通过 WCSC 可执行程序文件编译成 js 文件。并不是直接编译成css文件。</p><p>在渲染层的一个 script 标签中, 编译后的代码是通过 eval 方法注入执行的。</p><p><img src="https://p.ipic.vip/uilw3j.png" alt="image-20241020230320925"></p><h3 id="_2-wxml-virtualdom-渲染流程" tabindex="-1">2. WXML - - VirtualDOM 渲染流程 <a class="header-anchor" href="#_2-wxml-virtualdom-渲染流程" aria-label="Permalink to &quot;2. WXML - - VirtualDOM 渲染流程&quot;">​</a></h3><p><img src="https://p.ipic.vip/kyjnob.jpg" alt="image.png"></p><p>generateFunc 就是接受动态数据，并生成虚拟DOM树的函数</p><ul><li>如果没有有generateFun那么body标记内部展示 decodeName + &quot;not found&quot;，并输处错误日志</li><li>如果有，检查window或++global环境中自定义事件CustomEvent是否存在。</li><li>document.dispatchEvent 触发自定义事件 将generateFunc当作参数传递给底层渲染库</li><li>在触发自定义事件的时候，添加当前时间节点，可以理解为生命周期pageFrame_generateFunc_ready</li></ul><p><img src="https://p.ipic.vip/0bkqjv.jpg" alt="image.png"></p><h4 id="_3-小程序事件" tabindex="-1">3. 小程序事件 <a class="header-anchor" href="#_3-小程序事件" aria-label="Permalink to &quot;3. 小程序事件&quot;">​</a></h4><ul><li>事件是视图层到逻辑层的通讯方式。</li><li>事件可以将用户的行为反馈到逻辑层进行处理。</li><li>事件可以绑定在组件上，当达到触发事件，就会执行逻辑层中对应的事件处理函数。</li><li>事件对象可以携带额外信息，如 id, dataset, touches 等等。</li></ul><p><strong>小程序的事件都是和 js 原生事件相互转换的，小程序的 tap 事件底层是由 web 的 mouseup 事件转换来的。小程序 tap 事件的触发分为几个过程，首先底层实现是用 web 的 mouseup 事件触发了tap事件，底层为 window 绑定捕获阶段的 mouseup 事件。</strong></p><h3 id="通信系统的设计" tabindex="-1">通信系统的设计 <a class="header-anchor" href="#通信系统的设计" aria-label="Permalink to &quot;通信系统的设计&quot;">​</a></h3><p>内置组件中有部分组件是利用到客户端原生提供的能力，既然需要客户端原生提供的能力，那就会涉及到渲染层与客户端的交互通信。这层通信机制在 iOS 和安卓系统的实现方式并不一样，iOS 是利用了 WKWebView 的提供 messageHandlers 特性，而在安卓则是往 WebView 的 window 对象注入一个原生方法，最终会封装成 WeiXinJSBridge 这样一个兼容层。在微信开发者工具中则是使用了websocket 进行了封装。</p><p>在微信小程序执行过程中，Native层，也就是客户端层分别向渲染层与逻辑层注入WeixinJSBridge以达到线程通讯的目的，WeixinJSBridge的 script标记注入。</p><p>WeixinJSBridge提供了如下几个方法：</p><ul><li>invoke - 调用 Native API，以api方式调用开发工具提供的基础能力，并提供对应api执行后的回调。</li><li>invokeCallbackHandler - Native 传递 invoke 方法回调结果</li><li>on - 用来收集小程序开发者工具触发的事件回调</li><li>publish - 渲染层发布消息，用来向逻辑业务层发送消息，也就是说要调用逻辑层的事件方法</li><li>subscribe - 订阅逻辑层消息</li><li>subscribeHandler - 视图层和逻辑层消息订阅转发</li><li>setCustomPublishHandler - 自定义消息转发</li></ul><h3 id="生命周期" tabindex="-1">生命周期 <a class="header-anchor" href="#生命周期" aria-label="Permalink to &quot;生命周期&quot;">​</a></h3><p><img src="https://p.ipic.vip/xhka7w.png" alt="流程图"></p><p>每个页面对应一个独立的 webview 实例，因此页面数量理论上与 webview 实例数量一致。</p><p>在逻辑层就不一样了，内部只有 <strong>一个 APP 实例</strong>，所有页面里面的写的逻辑都在一个逻辑线程中执行</p><h2 id="小程序路由设计" tabindex="-1">小程序路由设计 <a class="header-anchor" href="#小程序路由设计" aria-label="Permalink to &quot;小程序路由设计&quot;">​</a></h2><p>采用多个 webview 这种方式类似于多页面应用，因为多页面应用可以保留前一个页面的状态，所以路由的内部是基于多页应用的架构实现的。</p><p>在逻辑层中有打开新页面 navigateTo、重定向 redirectTo、页面返回 navigateBack 等，开发者通过官网提供的API触发。</p><p>无论是渲染层用户触发的行为，还是逻辑层 API 触发的行为，这个行为都会被发送到 Native 层，有Native 层统一控制路由。</p><p>对于 webview 的添加或删除都会有一个 路由栈 来维护。</p><p>小程序场景中路由变化相对应的栈变化：</p><ul><li>小程序初始化的时候需要推入首页，新页面入栈。</li><li>打开新页面对应 navigateTo，新页面入栈</li><li>页面重定向 redirectTo，当前页面出栈，而后新页面入栈。</li><li>页面回退 navigateBack，页面一直出栈，到达指定页面停止。</li><li>Tab切换 switchTab，页面全部出栈，只留下新的Tab页面。</li><li>重新加载 reLaunch，页面全部出栈，只留下新的页面。</li></ul><h2 id="渲染层基础库-wawebview" tabindex="-1">渲染层基础库 WAWebview <a class="header-anchor" href="#渲染层基础库-wawebview" aria-label="Permalink to &quot;渲染层基础库 WAWebview&quot;">​</a></h2><ol><li>core-js模块：负责初始化框架js代码，编译js，加载业务逻辑js等功能</li><li>Foundation：基础模块，包含多个 API，如 EventEmitter（事件发布与订阅）、Ready 事件、基础库 Ready 事件、Bridge Ready 事件，以及环境变量（env 和 global）。</li><li>WeixinJSBridge：通讯模块，包含有on、publish、invoke、subscribe、invokeCallbackHandler、subscribeHandler。只是对Native注入通讯api的封装，便于内部调用。</li><li>异常监听模块：基础库内针对promise或者js等异常事件的监听处理</li><li>日志打印模块：包含wxNativeConsole、<strong>webviewConsole</strong>、wxConsole、wxPerfConsole等</li><li>系统函数和第三方函数模块：调用系统函数、包装系统函数、调用小程序或插件函数</li><li>Report 信息上报模块：内部包含了非常多种类的上报 api 及异常监听 api</li><li>Exparser组件系统模块： WXML文件经过WCC编译器编译成js文件，生成$gwx()函数, $gwx()函数接收文件路径和动态数据生成virtualDOM，Exparser组件系统就是将virtualDOM转化成HTML标记</li><li>VirtualDOM 模块：主要模拟了DOM 接口上面的element() 对象</li><li>默认样式注入模块</li></ol><h2 id="逻辑层基础库-waservice" tabindex="-1">逻辑层基础库 WAService <a class="header-anchor" href="#逻辑层基础库-waservice" aria-label="Permalink to &quot;逻辑层基础库 WAService&quot;">​</a></h2><ol><li>core-js模块</li><li>Foundation：基础模块</li><li>WeixinJSBridge：通讯模块</li><li>NativeBuffer 模块：javascript语言自身只有字符串数据类型，没有二进制数据类型。 但在处理像TCP流或文件流时，必须使用到二进制数据。因此在微信小程序中，定义了一个NativeBuffer模块，该模块用来创建一个专门存放二进制数据的缓存区。</li><li>日志打印模块</li><li>WerxinWorker模块：包含创建worker、结束当前workder、发送数据请求、监听回调等方法</li><li>JSContext 模块：JsContext是js代码执行的上下文对象，相当于一个webview中的 window 对象</li><li>appServiceEngine 模块：提供了App、Page、Component、Behavior、getApp、getCurrentPages等框架的基本对外接口</li></ol><h2 id="webcomponent原理" tabindex="-1">WebComponent原理 <a class="header-anchor" href="#webcomponent原理" aria-label="Permalink to &quot;WebComponent原理&quot;">​</a></h2><p>抽离自定义组件为了提高复用率，提升开发效率</p><p><img src="https://p.ipic.vip/bl3v5j.png" alt="img"></p><p>自定义元素类必须继承自window内置的 HTML 相关类， 这些类位于 window.HTML*Element ，他们都继承自 HTMLElement 类。</p><h2 id="小程序的组件系统" tabindex="-1">小程序的组件系统 <a class="header-anchor" href="#小程序的组件系统" aria-label="Permalink to &quot;小程序的组件系统&quot;">​</a></h2><p>微信的小程序组件系统基于<strong>exparser</strong>，它是一套类似于WebComponent的实现，允许开发者定义自定义组件。组件通过虚拟DOM（VNode）进行渲染，当数据发生变化时，系统会自动对比新旧节点，计算出需要更新的部分，从而实现页面的高效更新。</p><p>Exparser 的主要 特点 包括以下几点：</p><ul><li>基于 Shadow DOM 模型：模型上与WebComponents的Shadow DOM高度相似，但不依赖浏览器的原生支持，也没有其他依赖库；实现时，还针对性地增加了其他API以支持小程序组件编程。</li><li>可在纯JS环境中运行：这意味着逻辑层也具有一定的组件树组织能力。</li><li>高效轻量：性能表现好，在组件实例极多的环境下表现尤其优异，同时代码尺寸也较小。</li></ul><p>在自定义组件的概念基础上，我们可以把所有组件都进行分离，这样，各个组件也将具有各自独立的逻辑空间。每个组件都分别拥有自己的独立的数据、setData调用。</p><p>整个页面节点树实质上被拆分成了若干个ShadowTree（页面的body实质上也是一个组件，因而也是一个ShadowTree）最终组成了小程序中的 Composed Tree。 小程序中，所有节点树相关的操作都依赖于Exparser，包括WXML到页面最终节点树的构建、createSelectorQuery 调用和自定义组件特性等。</p><h3 id="_4-补充与问题" tabindex="-1">4. 补充与问题 <a class="header-anchor" href="#_4-补充与问题" aria-label="Permalink to &quot;4. 补充与问题&quot;">​</a></h3><h4 id="双线程对比单线程的优势" tabindex="-1">双线程对比单线程的优势？ <a class="header-anchor" href="#双线程对比单线程的优势" aria-label="Permalink to &quot;双线程对比单线程的优势？&quot;">​</a></h4><p>双线程架构相比单线程架构的最大优势在于<strong>性能和用户体验的提升</strong>。通过渲染层和逻辑层的分离，小程序可以在保证高性能和流畅性的前提下处理复杂的业务逻辑，同时维护较好的用户界面响应。</p><ol><li><p><strong>性能提升与流畅度</strong></p><ul><li>**双线程：**在小程序的双线程架构中，渲染层与逻辑层分别运行在不同的线程中，渲染层通过Webview负责页面的显示，逻辑层通过JSCore引擎或V8引擎处理JavaScript业务逻辑。由于这两个线程分开执行，逻辑处理的复杂度不会影响界面渲染的流畅性，避免了UI卡顿的问题。</li><li>**单线程：**在传统的单线程架构中，渲染与逻辑处理共享同一线程。当业务逻辑复杂或进行耗时的操作时，容易阻塞渲染，导致界面卡顿甚至无响应，影响用户体验。</li></ul></li><li><p><strong>提高用户体验</strong></p><ul><li>**双线程：**由于渲染层和逻辑层独立运行，小程序可以在界面渲染时保持较高的响应速度，尤其是在用户与UI频繁交互时，保持界面的流畅度和即时响应。逻辑层的复杂计算不会影响用户看到的界面效果。</li><li>**单线程：**渲染和逻辑处理相互依赖，较长的逻辑处理可能导致页面渲染延迟，甚至阻塞整个应用的响应，这会显著降低用户体验。</li></ul></li></ol><h4 id="为什么不用html语法和webcomponents来实现渲染-而是选择自定义" tabindex="-1">为什么不用HTML语法和WebComponents来实现渲染，而是选择自定义？ <a class="header-anchor" href="#为什么不用html语法和webcomponents来实现渲染-而是选择自定义" aria-label="Permalink to &quot;为什么不用HTML语法和WebComponents来实现渲染，而是选择自定义？&quot;">​</a></h4><ul><li>管控与安全：web技术可以通过脚本获取修改页面敏感内容或者随意跳转其它页面</li><li>能力有限：会限制小程序的表现形式</li><li>标签众多：增加理解成本</li></ul><p>所以，小程序不能直接使用html标签渲染页面，其提供了10多个内置组件来收敛web标签，并且提供一个JavaScript沙箱环境来避免js访问任何浏览器api。</p><h4 id="为什么要实现-wxs-页面快速计算实时性" tabindex="-1">为什么要实现 wxs 页面快速计算实时性 ？ <a class="header-anchor" href="#为什么要实现-wxs-页面快速计算实时性" aria-label="Permalink to &quot;为什么要实现 wxs 页面快速计算实时性 ？&quot;">​</a></h4><p>如果业务场景为手势识别之类的，监听事件不断的触发，数据不断的改变。这样的业务场景中，可以想像，如果坐标值不断改变的话，在逻辑与视图分开的双线程架构中，线程与线程之间的通讯是非常频繁的，会有很大的性能问题。所以微信开放了一个标记 WXS，可以在渲染层写部分js逻辑。这样话就可以在渲染层单独处理频繁改变的数据，这样的话就避免了线程与线程之间频繁通讯导致的性能和延时问题。</p><h4 id="native层在双线程架构中起到怎样的作用" tabindex="-1">Native层在双线程架构中起到怎样的作用？ <a class="header-anchor" href="#native层在双线程架构中起到怎样的作用" aria-label="Permalink to &quot;Native层在双线程架构中起到怎样的作用？&quot;">​</a></h4><p>双线程的好处不仅仅是一分为二而已，还有强大的Native层做背后支撑</p><p>Native层除了做一些资源的动态注入，还负责着很多的事情，请求的转发，离线存储，组件渲染等等。界面主要由成熟的 Web 技术渲染，辅之以大量的接口提供丰富的客户端原生能力。同时，每个小程序页面都是用不同的WebView去渲染，这样可以提供更好的交互体验，更贴近原生体验，也避免了单个WebView的任务过于繁重。此外，界面渲染这一块还定义了一套内置组件以统一体验，并且提供一些基础和通用的能力，进一步降低开发者的学习门槛。值得一提的是，内置组件有一部分较复杂组件是用客户端原生渲染的，以提供更好的性能。</p><h3 id="webview-pageframe设计原理" tabindex="-1">webview-pageFrame设计原理 <a class="header-anchor" href="#webview-pageframe设计原理" aria-label="Permalink to &quot;webview-pageFrame设计原理&quot;">​</a></h3><p>pageFrame注入的脚本与 pages/index 渲染层 webview 是一样的。正式因为pageFrame快速启动技术，就像一个工厂一样，可以快速生成webview的基础格式。在这其中pageFrame就是业务webview的模板。</p><h3 id="pageframe-html-快速打开新页面" tabindex="-1">pageframe.html 快速打开新页面 <a class="header-anchor" href="#pageframe-html-快速打开新页面" aria-label="Permalink to &quot;pageframe.html 快速打开新页面&quot;">​</a></h3><p>小程序每个视图层页面内容都是通过pageframe.html模板来生成的，包括小程序启动的首页</p><ul><li>首页启动时，即第一次通过pageframe.html生成内容后，后台服务会缓存 pageframe.html 模板首次生成的html内容。</li><li>非首次新打开页面时，页面请求的pageframe.html内容直接走后台缓存</li><li>非首次新打开页面时，pageframe.html页面引入的外链js资源，走本地缓存</li></ul><p>这样在后续新打开页面时，都会走缓存的pageframe的内容，避免重复生成，快速打开一个新页面。</p><p>既然每个视图层页面由pageframe模板生成，那么小程序每个页面独有的页面内容如dom和样式等如何生成呢？</p><p>这主要是利用 nw.js 的 executeScript 方法来执行一段js脚本来 注入 当前页面相关的代码，包括当前页面的配置，注入当前页的 css 以及当前页面的 virtual dom 的生成。</p><p>视图页面生成的dom结构中，document.body 已无 pageframe.html 模板中对应 body 中的 script 内容，这是因为视图层的WAWebview.js在通过virtual dom生成真实dom过程中，它会挂载到页面的document.body上，覆盖掉pageframe.html模板中对应 document.body 的内容。</p><h2 id="结语" tabindex="-1">结语 <a class="header-anchor" href="#结语" aria-label="Permalink to &quot;结语&quot;">​</a></h2><p>微信小程序通过将逻辑层与渲染层分离、引入双线程架构和组件化系统，极大提升了开发效率和用户体验。通过了解其背后的技术架构，开发者可以更灵活地优化代码结构，充分发挥小程序的性能潜力。在日常开发中，理解渲染与逻辑层的通信机制、掌握编译器的工作原理，将帮助开发者更加深入地掌握小程序的开发技巧。</p>',93),o=[t];function n(p,s,h,d,c,u){return i(),a("div",null,o)}const g=e(r,[["render",n]]);export{m as __pageData,g as default};
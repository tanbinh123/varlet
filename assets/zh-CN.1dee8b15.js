import{_ as s}from"./IconSfc.addeaf96.js";import{o as a,c as t,a5 as l}from"./vendor.bac705d4.js";const n={components:{}},e={class:"varlet-site-doc"},d=[l('<h1>选择框</h1><div class="card"><h3>引入</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { Select, Option } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\ncreateApp().use(Select).use(Option)\n</code></pre></div><div class="card"><h3>基本使用</h3><p>组件会使用option的<code>label</code>作为显示的文本。 组件会优先使用option的<code>value</code>作为选项的值，其次使用<code>label</code>。</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> value = ref(<span class="hljs-string">&#39;&#39;</span>)\n\n    <span class="hljs-keyword">return</span> { value }\n  }\n}\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-select</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择一个选项&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;吃饭&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;睡觉&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-select</span>&gt;</span>\n</code></pre></div><div class="card"><h3>朴素模式</h3><p>如果只需要组件的基本功能，可以通过属性去除部分样式。</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-select</span> \n  <span class="hljs-attr">:hint</span>=<span class="hljs-string">&quot;false&quot;</span> \n  <span class="hljs-attr">:line</span>=<span class="hljs-string">&quot;false&quot;</span>\n  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择一个选项&quot;</span> \n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;吃饭&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;睡觉&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-select</span>&gt;</span>\n</code></pre></div><div class="card"><h3>文本关联值</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-select</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择一个选项&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;吃饭&quot;</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;1&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;睡觉&quot;</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;2&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-select</span>&gt;</span>\n</code></pre></div><div class="card"><h3>禁用</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-select</span> \n  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择一个选项&quot;</span> \n  <span class="hljs-attr">disabled</span>\n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;吃饭&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;睡觉&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-select</span>&gt;</span>\n</code></pre></div><div class="card"><h3>只读</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-select</span> \n  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择一个选项&quot;</span>\n  <span class="hljs-attr">readonly</span> \n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;吃饭&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;睡觉&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-select</span>&gt;</span>\n</code></pre></div><div class="card"><h3>可清除</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-select</span>\n  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择一个选项&quot;</span> \n  <span class="hljs-attr">clearable</span>\n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;吃饭&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;睡觉&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-select</span>&gt;</span>\n</code></pre></div><div class="card"><h3>显示图标</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { Icon } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\ncreateApp().use(Icon)\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-select</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择一个选项&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">prepend-icon</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;plus&quot;</span>/&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">append-icon</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;minus&quot;</span>/&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">default</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;吃饭&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;睡觉&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-select</span>&gt;</span>\n</code></pre></div><div class="card"><h3>多选</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> value = ref([])\n\n    <span class="hljs-keyword">return</span> { value }\n  }\n}\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-select</span> \n  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择多个选项&quot;</span> \n  <span class="hljs-attr">multiple</span>\n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;吃饭&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;睡觉&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;打游戏&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;写代码&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-select</span>&gt;</span>\n</code></pre></div><div class="card"><h3>纸片风格的多选</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-select</span> \n  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择多个选项&quot;</span>\n  <span class="hljs-attr">chip</span>\n  <span class="hljs-attr">multiple</span>\n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;吃饭&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;睡觉&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;打游戏&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;写代码&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-select</span>&gt;</span>\n</code></pre></div><div class="card"><h3>单选值校验</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-select</span> \n  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择一个选项&quot;</span> \n  <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[(v) =&gt; v === &#39;摸鱼&#39; || &#39;您一定得选择摸鱼&#39;]&quot;</span>\n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;吃饭&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;睡觉&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;摸鱼&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-select</span>&gt;</span>\n</code></pre></div><div class="card"><h3>多选值校验</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-select</span>\n  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择多个选项&quot;</span>\n  <span class="hljs-attr">multiple</span>\n  <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[(v) =&gt; v.length &gt;= 2 || &#39;您至少选择两个选项&#39;]&quot;</span>\n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;吃饭&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;睡觉&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;打游戏&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;写代码&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-select</span>&gt;</span>\n</code></pre></div><h2>API</h2><div class="card"><h3>属性</h3></div><div class="card"><h3>Select Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>绑定的值</td><td><em>any | any[]</em></td><td><code>-</code></td></tr><tr><td><code>placeholder</code></td><td>占位符</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>multiple</code></td><td>是否开启多选</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>chip</code></td><td>是否使用纸片风格(仅限多选)</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>line</code></td><td>是否显示分割线</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>hint</code></td><td>是否使用占位符作为提示</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>text-color</code></td><td>文字颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>focus-color</code></td><td>聚焦时的主要颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>blur-color</code></td><td>失焦时的主要颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>readonly</code></td><td>是否只读</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>clearable</code></td><td>是否可清除</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>validate-trigger</code></td><td>触发验证的时机， 可选值为 <code>onFocus</code> <code>onBlur</code> <code>onChange</code> <code>onClick</code> <code>onClear</code> <code>onClose</code></td><td><em>ValidateTriggers[]</em></td><td><code>[&#39;onChange&#39;, &#39;onClear&#39;, &#39;onClose&#39;]</code></td></tr><tr><td><code>rules</code></td><td>验证规则，返回<code>true</code>表示验证通过，其余的值则转换为文本作为用户提示</td><td>_Array&lt;(v: any</td><td>any[]) =&gt; any&gt;_</td></tr></tbody></table></div><div class="card"><h3>Option Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>label</code></td><td>选项显示的文本</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>value</code></td><td>选项绑定的值</td><td><em>any</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>方法</h3></div><div class="card"><h3>Select Methods</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>focus</code></td><td>聚焦</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>blur</code></td><td>失焦</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>validate</code></td><td>触发校验</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>清空校验信息</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>清空绑定的值(单选设置为<code>undefined</code>,多选设置为<code>[]</code>)和校验信息</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>事件</h3></div><div class="card"><h3>Select Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>focus</code></td><td>聚焦时触发</td><td><code>event: Event</code></td></tr><tr><td><code>blur</code></td><td>失焦时触发</td><td><code>event: Event</code></td></tr><tr><td><code>click</code></td><td>点击时触发</td><td><code>event: Event</code></td></tr><tr><td><code>clear</code></td><td>清除时触发</td><td><code>value: any | any[]</code></td></tr><tr><td><code>close</code></td><td>输入时触发</td><td><code>value: any | any[]</code></td></tr><tr><td><code>change</code></td><td>更新时触发</td><td><code>value: any | any[]</code></td></tr></tbody></table></div><div class="card"><h3>插槽</h3></div><div class="card"><h3>Select Slots</h3><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>prepend-icon</code></td><td>前置图标</td><td><code>-</code></td></tr><tr><td><code>append-icon</code></td><td>后置图标</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Option Slots</h3><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>选项显示的内容</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><p>以下为组件使用的css变量,可以使用<a href="#/zh-CN/style-provider">StyleProvider组件</a>进行样式定制</p></div><div class="card"><h3>Select Variables</h3><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--select-select-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--select-select-padding</code></td><td><code>5px 0</code></td></tr><tr><td><code>--select-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--select-blur-color</code></td><td><code>#888</code></td></tr><tr><td><code>--select-focus-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--select-scroller-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--select-scroller-padding</code></td><td><code>6px 0</code></td></tr><tr><td><code>--select-scroller-max-height</code></td><td><code>278px</code></td></tr><tr><td><code>--select-placeholder-size</code></td><td><code>16px</code></td></tr><tr><td><code>--select-icon-padding</code></td><td><code>16px 0 0</code></td></tr><tr><td><code>--select-icon-size</code></td><td><code>20px</code></td></tr><tr><td><code>--select-select-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--select-chip-margin</code></td><td><code>5px 5px 0</code></td></tr><tr><td><code>--select-line-size</code></td><td><code>1px</code></td></tr><tr><td><code>--select-line-spread-size</code></td><td><code>2px</code></td></tr><tr><td><code>--select-arrow-size</code></td><td><code>20px</code></td></tr><tr><td><code>--select-disabled-color</code></td><td><code>#aaa</code></td></tr></tbody></table></div><div class="card"><h3>Option Variables</h3><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--option-height</code></td><td><code>38px</code></td></tr><tr><td><code>--option-padding</code></td><td><code>0 12px</code></td></tr><tr><td><code>--option-selected-background</code></td><td><code>var(--select-focus-color)</code></td></tr></tbody></table></div>',27)];var c=s(n,[["render",function(s,l,n,c,p,o){return a(),t("div",e,d)}]]);export{c as default};

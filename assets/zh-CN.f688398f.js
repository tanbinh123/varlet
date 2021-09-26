import{_ as t}from"./IconSfc.addeaf96.js";import{o as s,c as d,a5 as e}from"./vendor.bac705d4.js";const a={components:{}},c={class:"varlet-site-doc"},l=[e('<h1>输入框</h1><div class="card"><h3>引入</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { Input } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\ncreateApp().use(Input)\n</code></pre></div><div class="card"><h3>基本使用</h3><p>组件会自动分析传入的值是字符串还是数字，会返回相同的类型。</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> value = ref(<span class="hljs-string">&#39;&#39;</span>)\n\n    <span class="hljs-keyword">return</span> { value }\n  }\n}\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入文本&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>\n</code></pre></div><div class="card"><h3>朴素模式</h3><p>如果只需要组件的基本功能，可以通过属性去除部分样式。</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-input</span> \n  <span class="hljs-attr">:hint</span>=<span class="hljs-string">&quot;false&quot;</span> \n  <span class="hljs-attr">:line</span>=<span class="hljs-string">&quot;false&quot;</span> \n  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入文本&quot;</span>\n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>\n/&gt;</span>\n</code></pre></div><div class="card"><h3>文本域</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入文本&quot;</span> <span class="hljs-attr">textarea</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>\n</code></pre></div><div class="card"><h3>最大长度</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入文本&quot;</span> <span class="hljs-attr">:maxlength</span>=<span class="hljs-string">&quot;10&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>\n</code></pre></div><div class="card"><h3>禁用</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入文本&quot;</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>\n</code></pre></div><div class="card"><h3>只读</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入文本&quot;</span> <span class="hljs-attr">readonly</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>\n</code></pre></div><div class="card"><h3>可清除</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入文本&quot;</span> <span class="hljs-attr">clearable</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>\n</code></pre></div><div class="card"><h3>显示图标</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { Icon } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\ncreateApp().use(Icon)\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入文本&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">prepend-icon</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;plus&quot;</span>/&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">append-icon</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;minus&quot;</span>/&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-input</span>&gt;</span>\n</code></pre></div><div class="card"><h3>字段校验</h3><p>通过传入一个校验器数组可以对值进行校验，校验器返回<code>true</code>则为校验通过。 以外的值将转换为文本作为用户提示。</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-input</span>\n  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入文本&quot;</span>\n  <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[v =&gt; v.length &gt; 6 || &#39;文本长度必须大于6&#39;]&quot;</span>\n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>\n/&gt;</span>\n</code></pre></div><h2>API</h2><div class="card"><h3>属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>绑定的值</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>placeholder</code></td><td>占位符</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>type</code></td><td>输入框类型, 可选值为 <code>text</code> <code>password</code></td><td><em>string</em></td><td><code>text</code></td></tr><tr><td><code>maxlength</code></td><td>最大长度</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>textarea</code></td><td>是否是文本域</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>rows</code></td><td>文本域的显示行数</td><td><em>string | number</em></td><td><code>8</code></td></tr><tr><td><code>line</code></td><td>是否显示分割线</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>hint</code></td><td>是否使用占位符作为提示</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>text-color</code></td><td>文字颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>focus-color</code></td><td>聚焦时的主要颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>blur-color</code></td><td>失焦时的主要颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>readonly</code></td><td>是否只读</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>clearable</code></td><td>是否可清除</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>resize</code></td><td>文本域是否可以拖动调整尺寸</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>validate-trigger</code></td><td>触发验证的时机， 可选值为 <code>onFocus</code> <code>onBlur</code> <code>onChange</code> <code>onClick</code> <code>onClear</code> <code>onInput</code></td><td><em>ValidateTriggers[]</em></td><td><code>[&#39;onInput&#39;, &#39;onClear&#39;]</code></td></tr><tr><td><code>rules</code></td><td>验证规则，返回<code>true</code>表示验证通过，其余的值则转换为文本作为用户提示</td><td><em>Array&lt;(v: string | number) =&gt; any&gt;</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>方法</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>focus</code></td><td>聚焦</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>blur</code></td><td>失焦</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>validate</code></td><td>触发校验</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>清空校验信息</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>清空绑定的值(字符类型设置为<code>&#39;&#39;</code>,数字类型设置为<code>0</code>)和校验信息</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>focus</code></td><td>聚焦时触发</td><td><code>event: Event</code></td></tr><tr><td><code>blur</code></td><td>失焦时触发</td><td><code>event: Event</code></td></tr><tr><td><code>click</code></td><td>点击时触发</td><td><code>event: Event</code></td></tr><tr><td><code>clear</code></td><td>清除时触发</td><td><code>value: string | number</code></td></tr><tr><td><code>input</code></td><td>输入时触发</td><td><code>value: string | number</code> <code>event: Event</code></td></tr><tr><td><code>change</code></td><td>更新时触发</td><td><code>value: string | number</code> <code>event: Event</code></td></tr></tbody></table></div><div class="card"><h3>插槽</h3><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>prepend-icon</code></td><td>前置图标</td><td><code>-</code></td></tr><tr><td><code>append-icon</code></td><td>后置图标</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><p>以下为组件使用的css变量,可以使用<a href="#/zh-CN/style-provider">StyleProvider组件</a>进行样式定制</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--input-input-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--input-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--input-blur-color</code></td><td><code>#888</code></td></tr><tr><td><code>--input-focus-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--input-placeholder-size</code></td><td><code>16px</code></td></tr><tr><td><code>--input-textarea-height</code></td><td><code>auto</code></td></tr><tr><td><code>--input-textarea-padding-top</code></td><td><code>8px</code></td></tr><tr><td><code>--input-icon-padding</code></td><td><code>16px 0 0</code></td></tr><tr><td><code>--input-icon-size</code></td><td><code>20px</code></td></tr><tr><td><code>--input-input-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--input-line-size</code></td><td><code>1px</code></td></tr><tr><td><code>--input-line-spread-size</code></td><td><code>2px</code></td></tr><tr><td><code>--input-disabled-color</code></td><td><code>#aaa</code></td></tr></tbody></table></div>',17)];var n=t(a,[["render",function(t,e,a,n,o,r){return s(),d("div",c,l)}]]);export{n as default};

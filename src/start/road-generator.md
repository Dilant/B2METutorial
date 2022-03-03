# 路面生成器

::: danger

本章节内容对制图质量和效率具有决定性影响，请务必认真阅读，多加练习。请勿跳过本章节！

:::

Ballex² 中的路面、钢轨和模板均由路面生成器制作而成。

## 创建路面生成器

`创建 → 路面生成器`

在起步版块，只讲解常见的用法和常用的参数项。最关键的参数项为：

- `生成器类型`
- `长度`
- `末端高度`
- `分段`
- `弯曲`
- `形状` <badge text="生成器类型 = 拐角"/>
- `偏移` <badge text="生成器类型 = 钢轨"/>

::: tip

由于拐角参数项与另外三者有较大不同，缺失的参数项不再单独展示。

:::

## 直路面

- 选择 `生成器类型` 为 `石质路面`
- 设置合适的 `长度`
- 若要制作凹路面，设置合适的 `凹陷`（推荐值为 `0.1`）
- 若要制作宽路面，设置合适的 `宽度`（推荐值为 `3`）
- 若要制作斜坡路面，设置合适的 `末端高度`，并勾选 `精确 UV 长度`

::: tip

`长度` 意为到自然系 `xOz` 平面的投影长度，与 `末端高度` 是独立的参数。下同。

:::

## 直木板

- 选择 `生成器类型` 为 `木板`
- 设置合适的 `长度`
- 若要制作宽木板，设置合适的 `宽度`（推荐值为 `2`）
- 若要制作斜坡木板，设置合适的 `末端高度`，并勾选 `精确 UV 长度`

## 直钢轨

- 选择 `生成器类型` 为 `钢轨`
- 设置合适的 `长度`
- 若要改变双轨轨距，设置合适的 `偏移`（不推荐修改）
- 若要制作单轨，设置 `偏移` 数量为 `1`，值为 `(0, 0)`
- 若要制作斜坡钢轨，旋转钢轨并配套合适的衔接弯轨

## 圆弧

## 螺旋

## 纵向弯曲

## 麻花

::: details 弯曲算法

<div class="language-python ext-py line-numbers-mode">
  <pre class="shiki" style="background-color: #1e1e1e" ><code><span class="line"><span style="color:#569CD6;">def</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">skeletonGenerator</span><span style="color:#D4D4D4;">(</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">length</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">float</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">height</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">float</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">bend</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">EulerAngle</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">segment</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">int</span></span>
<span class="line"><span style="color:#D4D4D4;">) -&gt; </span><span style="color:#4EC9B0;">tuple</span><span style="color:#D4D4D4;">[</span><span style="color:#4EC9B0;">list</span><span style="color:#D4D4D4;">[</span><span style="color:#4EC9B0;">Vector3</span><span style="color:#D4D4D4;">], </span><span style="color:#4EC9B0;">list</span><span style="color:#D4D4D4;">[</span><span style="color:#4EC9B0;">EulerAngle</span><span style="color:#D4D4D4;">]]:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">segment_length</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">float</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">length</span><span style="color:#D4D4D4;"> / </span><span style="color:#9CDCFE;">segment</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">segment_height</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">float</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">height</span><span style="color:#D4D4D4;"> / </span><span style="color:#9CDCFE;">segment</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">point_posture_delta</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">EulerAngle</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">bend</span><span style="color:#D4D4D4;"> / </span><span style="color:#9CDCFE;">segment</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">segment_direction_delta</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">EulerAngle</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">bend</span><span style="color:#D4D4D4;"> / </span><span style="color:#9CDCFE;">segment</span><span style="color:#D4D4D4;"> / </span><span style="color:#B5CEA8;">2</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">point_positions</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">list</span><span style="color:#D4D4D4;">[</span><span style="color:#4EC9B0;">Vector3</span><span style="color:#D4D4D4;">] = [</span><span style="color:#4EC9B0;">Vector3</span><span style="color:#D4D4D4;">(</span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">)]</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">point_postures</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">list</span><span style="color:#D4D4D4;">[</span><span style="color:#4EC9B0;">EulerAngle</span><span style="color:#D4D4D4;">] = [</span><span style="color:#4EC9B0;">EulerAngle</span><span style="color:#D4D4D4;">(</span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">)]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">for</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">in</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">range</span><span style="color:#D4D4D4;">(</span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">segment</span><span style="color:#D4D4D4;"> + </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">):</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">segment_direction</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">EulerAngle</span><span style="color:#D4D4D4;"> = (</span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;"> * </span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;"> - </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">) * </span><span style="color:#9CDCFE;">segment_direction_delta</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">point_position</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">Vector3</span><span style="color:#D4D4D4;"> = (</span></span>
<span class="line"><span style="color:#D4D4D4;">            </span><span style="color:#9CDCFE;">point_positions</span><span style="color:#D4D4D4;">[-</span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#D4D4D4;">            + </span><span style="color:#9CDCFE;">segment_direction</span><span style="color:#D4D4D4;"> * </span><span style="color:#4EC9B0;">Vector3</span><span style="color:#D4D4D4;">(</span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">segment_length</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">            + </span><span style="color:#4EC9B0;">Vector3</span><span style="color:#D4D4D4;">(</span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">segment_height</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">        )</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">point_posture</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">EulerAngle</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;"> * </span><span style="color:#9CDCFE;">point_posture_delta</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">point_positions</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">append</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">point_position</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">point_postures</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">append</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">point_posture</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">point_positions</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">point_postures</span></span>
<span class="line"></span></code></pre>
  <div class="line-numbers">
    <span class="line-number">1</span><br>
    <span class="line-number">2</span><br>
    <span class="line-number">3</span><br>
    <span class="line-number">4</span><br>
    <span class="line-number">5</span><br>
    <span class="line-number">6</span><br>
    <span class="line-number">7</span><br>
    <span class="line-number">8</span><br>
    <span class="line-number">9</span><br>
    <span class="line-number">10</span><br>
    <span class="line-number">11</span><br>
    <span class="line-number">12</span><br>
    <span class="line-number">13</span><br>
    <span class="line-number">14</span><br>
    <span class="line-number">15</span><br>
    <span class="line-number">16</span><br>
    <span class="line-number">17</span><br>
    <span class="line-number">18</span><br>
    <span class="line-number">19</span><br>
    <span class="line-number">20</span><br>
    <span class="line-number">21</span><br>
    <span class="line-number">22</span><br>
    <span class="line-number">23</span><br>
    <span class="line-number">24</span><br>
    <span class="line-number">25</span><br>
    <span class="line-number">26</span><br>
  </div>
</div>

:::

## 拐角



# 路面生成器

::: danger

本章节内容对制图质量和效率具有决定性影响，请务必认真阅读，多加练习。请勿跳过本章节！

:::

Ballex² 中的路面、钢轨、木板和管道均由路面生成器制作而成。

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

起步版块不讲解 `自定义形状` 路面。

:::

## 直路面

- 选择 `生成器类型` 为 `石质路面`
- 设置 `长度`
- 若要制作凹路面，设置 `凹陷`（推荐值为 `0.1`）
- 若要制作宽路面，设置 `宽度`（推荐值为 `3`）
- 若要制作斜坡路面，设置 `末端高度`，并勾选 `精确 UV 长度`
- 若要制作不同路面类型之间的转接路面，取消 `链接末端数值`，并分别调整头部和末端的参数

::: tip

`长度` 意为到水平面的投影长度，与 `末端高度` 是独立的参数。

如果两端都有其它物体遮挡，可以取消 `创建封盖` 以提升性能。

:::

## 直木板

- 选择 `生成器类型` 为 `木板`
- 设置 `长度`
- 若要制作宽木板，设置 `宽度`（推荐值为 `2`）
- 若要制作斜坡木板，设置 `末端高度`，并勾选 `精确 UV 长度`

## 直钢轨

- 选择 `生成器类型` 为 `钢轨`
- 设置 `长度`
- 若要改变双轨轨距，设置 `偏移`（不推荐修改）
- 若要制作单轨，设置 `偏移` 数量为 `1`，值为 `(0, 0)`
- 若要制作斜坡钢轨，旋转钢轨并配套衔接圆弧弯轨

## 直管道

- 选择 `生成器类型` 为 `管道`
- 设置 `长度`
- 若要扩大管道外径，设置 `半径`（推荐值为 `0.75`）
- 若要改变横截面圆心角，设置 `起始切片角度` 和 `结束切片角度`（推荐值为 `0` `180`）

## 圆弧

- 根据所需的半径和圆心角计算对应的 `长度`
- 将 `弯曲 Y` 设置为末端方向与起始方向的夹角，单位为角度，右转为正，左转为负
- 根据上述夹角适当设置 `分段数` （推荐值为 `偏航角 / 7.5` 向上取整）

## 螺旋

- 设置 `末端高度` 为末端与头部的高度差
- 其它同圆弧

## 滚轴

- 将 `弯曲 X` 设置为末端方向与起始方向的夹角，单位为角度，下压为正，上抬为负
- 其它同圆弧

## 麻花

- 将 `弯曲 Z` 设置为末端方向与起始方向的夹角，单位为角度，逆时针扭转为正，顺时针为负
- 其它同圆弧

::: danger

为了避免得到诡异的结果：

- 请勿同时设置 `末端高度` 和 `弯曲 X` 两个参数
- 请勿同时设置 `弯曲 X` 和 `弯曲 Y` 两个参数

:::

::: details 弯曲算法

<div class="language-python ext-py line-numbers-mode">
  <pre
    class="shiki"
    style="background-color: #1E1E1E;"
  ><code><span class="line"><span style="color:#569CD6;">def</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">skeletonGenerator</span><span style="color:#D4D4D4;">(</span></span>
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
  <div class="line-numbers" aria-hidden="true">
    <div class="line-number"></div>
    <div class="line-number"></div>
    <div class="line-number"></div>
    <div class="line-number"></div>
    <div class="line-number"></div>
    <div class="line-number"></div>
    <div class="line-number"></div>
    <div class="line-number"></div>
    <div class="line-number"></div>
    <div class="line-number"></div>
    <div class="line-number"></div>
    <div class="line-number"></div>
    <div class="line-number"></div>
    <div class="line-number"></div>
    <div class="line-number"></div>
    <div class="line-number"></div>
    <div class="line-number"></div>
    <div class="line-number"></div>
    <div class="line-number"></div>
    <div class="line-number"></div>
    <div class="line-number"></div>
    <div class="line-number"></div>
    <div class="line-number"></div>
    <div class="line-number"></div>
    <div class="line-number"></div>
    <div class="line-number"></div>
  </div>
</div>

:::

## 拐角

- 选择 `生成器类型` 为 `拐角`
- 根据路面宽度设定对应的 `尺寸`
- 点击修改边缘和角落的纹理样式

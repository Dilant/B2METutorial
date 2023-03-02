# Road Generator

::: warning

This chapter includes critical strategies that contributes to a productive workflow for quality map making. It is recommended to try the techniques out as you read. DO NOT SKIP THIS CHAPTER!

:::

All roads, rails and wooden boards in Ballex² consist of road generators.

## Create a Road Generator

`Create → Road Generator`

The start section will only introduce common usages and parameters. The crucial parameters are:

- `Generator Type`
- `Length`
- `End Height`
- `Segments`
- `Bend`
- `Shape` <badge text="Generator Type = Corner"/>
- `Offsets` <badge text="Generator Type = Steel Rail"/>

::: tip

The start section won't include any content regarding road generators with a `Custom Shape`.

:::

## Straight Road

- Choose `Stone Road` as `Generator Type`
- Set its `Length`
- When generating concave roads, set its `Concave` (`0.1` recommended)
- When generating wide roads, set its `Width` (`3` recommended)
- When generating slopes, set its `End Height` and check `Precise UV Length`
- When generating adapters for different types of roads, uncheck `Link ENd Value` and set parameters of start and end respectively

::: tip

`Length` refers to the length projected onto horizontal plane, which is independent of `End Height`.

If both ends are covered by other objects, uncheck `Create Cap` to improve performance.

:::

## Straight Wooden Board

- Choose `Wooden Board` as `Generator Type`
- Set its `Length`
- When generating wide wooden boards, set its `Width` (`2` recommended)
- When generating wooden slopes, set its `End Height` and check `Precise UV Length`

## Straight Rail

- Choose `Steel Rail` as `Generator Type`
- Set its `Length`
- When adjusting the rail gauge, set its `Offsets` (not recommended)
- When generating single rails, set number of `Offsets` to `1` and its value to `(0, 0)`
- When generating rail slopes, rotate the rail and append cohesive rail arcs at the ends of the slope

## Straight Tube

- Choose `Tube` as `Generator Type`
- Set its `Length`
- When expanding its external diameter, set its `Radius` (`0.75` recommended)
- When changing central angle of the section, set its `Slice Start` and `Slice End` (`0` `180` recommended)

## Arc

- Calculate the `Length` according to your desired radius and central angle
- Set `Bend Y` as the angle between the end direction and the start. The unit is degree, and right is the positive direction.
- Set appropriate `Segments` based on the aforementioned angle (`yaw / 7.5` rounded up recommended)

## Helix

- Set `End Height` as the drop from end to start
- Others same as arc

## Roller

- Set `Bend X` as the angle between the end direction and the start. The unit is degree, and down is the positive direction.
- Others same as arc

## Twist

- Set `Bend Z` as the angle between the end direction and the start. The unit is degree, and counterclockwise is the positive direction.
- Others same as arc

::: danger

To avoid getting weird results:

- Never use `End Height` together with `Bend X`
- Never use `Bend X` together with `Bend Y`

:::

::: details Bending Algorithm

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

## Corner

- Choose `Corner` as `Generator Type`
- Set its `Size` according to road width
- Click to modify the texture and style of edges and corners

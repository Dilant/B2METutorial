# Particle System

`Create → Particle Emitter`

## Parameter

### `Auto Play`

- Type: `bool`
- Default: `true`

### `Loop`

- Type: `bool`
- Default: `true`

### `Duration`

- Type: `float`
- Default: `5`
- Constrain: `t: t > 0`

### `Spawn Rate`

- Type: `float` `float`
- Default: `10` `20`
- Constrain: `x: x > 0` `y: y > 0`

下一粒子的发射时间将由在该区间内均匀取得的随机值决定，负数将视为 `0`。两数不分顺序，相同表示固定，下同。

### `Burst Count`

- Type: `float` `float`
- Default: `0` `0`

每一周期开始时，将有爆发粒子射出。每个爆发粒子的强度将在该区间内均匀取随机值，负数将视为 `0`。

### `Emitter Size`

- Type: `float` `float` `float`
- Default: `1` `1` `1`

粒子将在该区域内随机均匀生成，`0` 表示该轴上位置固定，负数表示反向。

### `Initial Velocity`

- Type: `float` `float`
- Default: `0` `5`

每个粒子将在该区间内均匀取随机值，负数表示反向。

### `Start Rotation`

- Type: `float` `float`
- Default: `0` `0`

每个粒子将在该区间内均匀取随机值，单位为弧度，正数表示顺时针。

### `Angular Velocity`

- Type: `float` `float`
- Default: `0` `0`

每个粒子将在该区间内均匀取随机值，正数表示顺时针。

### `Initial Size`

- Type: `float` `float`
- Default: `0.5` `1`
- Constrain: `x: x >= 0` `y: y >= 0`

每个粒子将在该区间内均匀取随机值，负数将视为 `0`。

### `Lifetime`

- Type: `float` `float`
- Default: `1` `2`
- Constrain: `t1: t1 >= 0` `t2: t2 >= 0`

每个粒子将在该区间内均匀取随机值，负数将视为 `0`。

### `Follow Camera`

- Type: `bool`
- Default: `false`

粒子发射器将跟随摄像机移动和旋转。

### `Follow Position Offset` <badge text="Follow Camera = true"/>

- Type: `float` `float` `float`
- Default: `0` `0` `0`

### `Material`

- Type: `Material.Particle`
- Default: empty

### `Color over Lifetime`

- Type: `list[tuple[float, float, float, float]]`
- Default: `[(1, 1, 1, 1), (1, 0, 0, 0.5), (0, 0, 1, 1)]`
- Constrain: `(r, g, b, τ): 0 <= r <= 1 and 0 <= g <= 1 and 0 <= b <= 1 and 0 <= τ <= 1`

`X` `Y` `Z` 对应 RGB 颜色，负数将视为 `0`，大于 1 的数将视为 `1`。

`W` 表示关键帧时间，遵循以下规则：

- 粒子生命起点为 `τ = 0`，终点为 `τ = 1`
- 负数将视为 `0`，大于 1 的数将视为 `1`
- 当存在多个时刻相同的关键帧时（包含上述超界的关键帧），只有第一个声明的关键帧有效
- 若起点处没有关键帧，取时间最早的关键帧参数值
- 若终点处没有关键帧，取时间最晚的关键帧参数值
- 相邻的两个关键帧之间，各参数线性变换

### `Alpha over Lifetime`

- Type: `list[tuple[float, float]]`
- Default: `[(0, 0), (1, 0.2), (1, 0.7), (0, 1)]`
- Constrain: `(α, τ) : 0 <= α <= 1 and 0 <= τ <= 1`

`X` 表示透明度，负数将视为 `0`，大于 1 的数将视为 `1`。

`Y` 表示关键帧时间，规则同上。

### `Size over Lifetime`

- Type: `list[tuple[float, float]]`
- Default: `[(0.3, 0), (1, 1)]`
- Constrain: `(s, τ): s >= 0 and 0 <= τ <= 1`

`X` 表示相对于粒子 `Initial Size` 的比例，负数将视为 `0`。

`Y` 表示关键帧时间，规则同上。

### `Gravity Factor`

- Type: `float`
- Default: `0`

### `Turbulence Intensity`

- Type: `float`
- Default: `1`

### `Turbulence Frequency`

- Type: `float`
- Default: `0.2`
- Constrain: `f: f > 0`

### `Animation Tiles X` `Animation Tiles Y`

- Type: `int` `int`
- Default: `1` `1`
- Constrain: `m: 0 < m <= 32` `n: 0 < n <= 32`

按给定的格数切分材质图片，每格视为一帧，形成粒子动画。动画周期由粒子 `Lifetime` 决定。

# 网格系统

如果内置的元件无法满足你的制图需求，你可以考虑自行建模。

## 导入模型

在三维软件建模后，将模型导出为 `.fbx` 或 `.obj` 格式。

在 `Assets → Meshes` 窗口中，点击右栏加号，选择模型即可导入。

::: tip

BME Pro 中的单位为米，轴向为 `X` 轴向右，`Y` 轴向上，`Z` 轴向前，为左手系，请建模时注意。

对于 `.fbx` 格式，要求**必须为文本 (ASCII) 格式**，推荐使用 7.4 (2014/2015) 版本并三角化面。

对于 `.obj` 格式，无论建模软件中设置如何，**只能使用一个材质**，该材质将作用于所有面。

:::

## 使用网格

从 `Assets → Meshes` 窗口将网格直接拖入场景即可，在 `检视器` 窗口中可添加材质并指定更多参数。

### `Mesh`

- Type: `Model`
- Default: current mesh

该元件**显示**的网格。

### `Materials`

- Type: `Tuple<int, Material[]>`
- Default: `(0, [])`
- Constrain: `(n, l): n >= 0`

对应关系与建模软件中的设定一致。

### `Collider Type`

- Type: `enum{Box, Sphere, Mesh}`
- Default: `Mesh`

### `Offset`

- Type: `Tuple<float, float, float>`
- Default: `(0, 0, 0)`

### `Size` <badge text="Collider Type = Box"/>

- Type: `Tuple<float, float, float>`
- Default: `(1, 1, 1)`
- Constrain: `(x, y, z): x > 0 && y > 0 && z > 0`

### `Rounded Radius` <badge text="Collider Type = Box"/>

- Type: `float`
- Default: `0.02`
- Constrain: `x: x >= 0`

### `Radius` <badge text="Collider Type = Sphere"/>

- Type: `float`
- Default: `0.5`
- Constrain: `x: x > 0`

### `Mesh Overwrite` <badge text="Collider Type = Mesh"/>

- Type: `Model`
- Default: empty

该元件**碰撞箱**的网格。如果未设定，将与显示网格一致。

### `Physics Body Type`

- Type: `enum{Static, Kinematic, Rigid, Decoration, Collider}`
- Default: `Static`

- 静态：完全静止。如：地面。
- 运动学刚体：静止，只能通过执行器调整位姿。如：移动路面。
- 刚体：参与物理模拟，将受到各种力的影响。如：箱子。
- 装饰：只显示外观，没有碰撞箱。
- 碰撞箱：只有碰撞箱，在游戏中不显示。如：隐形路面。

### `Mass` <badge text="Physics Body Type = Rigid"/>

- Type: `float`
- Default: `1`
- Constrain: `m: m > 0`

### `Linear Drag` <badge text="Physics Body Type = Rigid"/>

- Type: `float`
- Default: `0.5`
- Constrain: `x: x >= 0`

### `Angular Drag` <badge text="Physics Body Type = Rigid"/>

- Type: `float`
- Default: `0.05`
- Constrain: `x: x >= 0`

### `Gravity Factor` <badge text="Physics Body Type = Rigid"/>

- Type: `float`
- Default: `1`

`1` 为正常重力，`0` 为无重力，负数为反重力。

### `Physics Material`

- Type: `enum{Stone, Wood, Steel, Ice, Rubber, Stopper}`
- Default: `Stone`

影响弹力、表面摩擦系数等物理性质。

### `Physics Audio Group`

- Type: `enum{Stone, Wood, Steel}`
- Default: `Stone`

影响碰撞音效等游戏效果。

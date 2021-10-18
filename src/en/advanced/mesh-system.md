# Mesh System

如果内置的元件无法满足你的制图需求，你可以考虑自行建模。

## 导入模型

在三维软件建模后，将模型导出为 `.fbx` 或 `.obj` 格式。

在 `Assets → Meshes` 面板中，点击右栏加号，选择模型即可导入。

::: tip

推荐使用 Cinema 4D 建模，参见：[Start → Preparation → Coordinate System](/en/start/preparation.md#coordinate-system)。

对于 `.fbx` 格式，要求**必须为文本 (ASCII) 格式**，推荐使用 7.4 (2014/2015) 版本并三角化面。导入的模型 `X` `Z` 两轴将被翻转。

对于 `.obj` 格式，无论建模软件中设置如何，**只能使用一个材质**，该材质将作用于所有面。

:::

## 使用网格

从 `Assets → Meshes` 面板将网格直接拖入场景即可，在 `Hierarchy` 窗口中可添加材质并指定更多参数。

### `Mesh`

- Type: `Model`
- Default: empty

该元件**显示**的网格。

### `Materials`

- Type: `Tuple<int, Material[]>`
- Default: `(0, [])`
- Constrain: `(n, l): n >= 0`

对应关系与建模软件中的设定一致。

### `Collider Type`

- Type: `enum{Box, Sphere, Mesh}`
- Default: `Mesh`

::: tip

网格模式的性能远低于另外两者，在效果满足期望的前提下，请优先选择长方体或球体模式。

:::

### `Weld Collider` <badge text="Physics Body Type = Static"/>

- Type: `bool`
- Default: `false`

启用该功能的邻近物体会自动优化碰撞箱，尝试修正细缝、错位、轻微穿模等微小问题。

::: danger

该功能可能导致诸多违背物理的表现，包括但不限于弹跳、单轨滑落、机关穿模。除非清楚自己在做什么，请勿使用。

:::

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
- Constrain: `r: r >= 0`

### `Radius` <badge text="Collider Type = Sphere"/>

- Type: `float`
- Default: `0.5`
- Constrain: `r: r > 0`

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
- Constrain: `m: 0.001 <= m <= 10000`

### `Density` <badge text="Physics Body Type = Rigid"/>

- Type: `float`
- Default: `10`
- Constrain: `ρ: 0.01 <= ρ <= 100`

### `Linear Drag` <badge text="Physics Body Type = Rigid"/>

- Type: `float`
- Default: `0.5`
- Constrain: `ζ: 0.001 <= ζ <= 10000`

### `Angular Drag` <badge text="Physics Body Type = Rigid"/>

- Type: `float`
- Default: `0.05`
- Constrain: `ζ: 0.001 <= ζ <= 10000`

### `Gravity Factor` <badge text="Physics Body Type = Rigid"/>

- Type: `float`
- Default: `1`
- Constrain: `η: -10 <= η <= 10`

1 为正常重力，0 为无重力，负数为反重力。

### `Physics Material`

- Type: `enum{Stone, Wood, Steel, Ice, Rubber, Stopper}`
- Default: `Stone`

影响弹力、表面摩擦系数等物理性质。

### `Physics Audio Group`

- Type: `enum{Stone, Wood, Steel}`
- Default: `Stone`

影响碰撞音效等游戏效果。

# Mesh System

If the built-in assets don't meet your needs, consider modeling them yourself.

## Import Mesh

在三维软件建模后，将网格导出为 `.fbx` 格式。

在 `Assets → Meshes` 面板中，点击右栏加号，选择网格即可导入。导入的网格 `X` `Z` 两轴将被翻转。

::: tip

See: [Start → Preparation → Coordinate System](/en/start/preparation.md#coordinate-system)

为了提升性能，网格建议三角化面。

推荐使用 Cinema 4D 建模，新手也可从 SOLIDWORKS 或 Inventor 入手。但由于多位玩家的翻车经历，请谨慎使用 3ds Max。

对于不支持导出 `.fbx` 的建模软件，可将导出的其它格式模型，导入 Cinema 4D 后再导出 `.fbx`。

已经确认可用的软件：

- Maxon Cinema 4D (R26, R25, ..., R17)
- Blender (3.3, 2.93)
- SketchUp

:::

## Use Mesh

从 `Assets → Meshes` 面板将网格直接拖入场景即可，在 `Hierarchy` 窗口中可添加材质并指定更多参数。

### `Mesh`

- Type: `Mesh`
- Default: empty

该元件**显示**的网格。

### `Materials`

- Type: `list[Material.PBR]`
- Default: `[]`

对应关系与建模软件中的设定一致。

### `Collider Type`

- Type: `Literal`
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

- Type: `float` `float` `float`
- Default: `0` `0` `0`

### `Size` <badge text="Collider Type = Box"/>

- Type: `float` `float` `float`
- Default: `1` `1` `1`
- Constrain: `x: x > 0` `y: y > 0` `z: z > 0`

### `Rounded Radius` <badge text="Collider Type = Box"/>

- Type: `float`
- Default: `0.02`
- Constrain: `r: r >= 0`

### `Radius` <badge text="Collider Type = Sphere"/>

- Type: `float`
- Default: `0.5`
- Constrain: `r: r > 0`

### `Mesh Overwrite` <badge text="Collider Type = Mesh"/>

- Type: `Mesh`
- Default: empty

该元件**碰撞箱**的网格。如果未设定，将与显示网格一致。

### `Physics Body Type`

- Type: `Literal`
- Default: `Static`

各类型含义为：

- 静态：完全静止。如：地面
- 运动学刚体：静止，只能通过执行器调整位姿。如：移动路面
- 刚体：参与物理模拟，将受到各种力的影响。如：箱子
- 装饰：只显示外观，没有碰撞箱
- 碰撞箱：只有碰撞箱，在游戏中不显示。如：隐形路面

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

- Type: `Literal`
- Default: `Stone`

影响弹力、表面摩擦系数等物理性质。

### `Physics Audio Group`

- Type: `Literal`
- Default: `Stone`

影响碰撞音效等游戏效果。

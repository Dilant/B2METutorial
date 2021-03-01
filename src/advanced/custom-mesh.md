# 自定义元件

如果内置的元件无法满足你的制图需求，你可以考虑使用自定义元件。

## 导入模型

在三维软件建好模型后，将模型导出为 `.fbx` 格式 **（FBX2012-2015，ASCII 编码，三角化面）**。
在改动下述参数后，需要点击 `Update Item` 按钮更新元件，元件预览将显示在 `Preview` 窗格中。

`File` → `Import File` 打开导入文件窗口
右下角文件类型选择为 `Model File (.fbx)`，并选择你刚刚导出的模型导入。
模型导入后将以 `CustomMesh` 的形式储存在工程文件中。

## 创建自定义元件

`Create → Custom → Create Custom Item`

创建新的自定义元件，创建后将会显示在 `Hierarchy` 窗口中。
在改动下述参数后，需要点击 `Update Item` 按钮更新元件，元件预览将显示在 Preview 窗格中。

### `customMesh`

- 类型：`CustomMesh`
- 默认值：`null`

自定义模型。可将导入的模型直接拖入此处。

### `useBuiltInMaterial`

- 类型：`bool`
- 默认值：`false`

是否使用内置材质。

### `builtInMaterials`

- 类型：`Tuple<int, enum[]{StoneRoad, StoneBrick, Wooden, Railron}>`
- 默认值：`(0, [])`
- 限制：`(n, l): n >= 0`

内置材质列表。仅当 `useBuiltInMaterial == true` 时有效，对应关系与建模软件中的设定一致。

### `customMaterials`

- 类型：`Tuple<int, CustomMaterial[]>`
- 默认值：`(0, [])`
- 限制：`(n, l): n >= 0`

自定义材质列表。仅当 `useBuiltInMaterial == false` 时有效，对应关系与建模软件中的设定一致。

### `physicsBodyType`

- 类型：`enum{Static, Kinematic, RigidBody, Decoration}`
- 默认值：`Static`

元件物理类型。`Static` 为静态物体，无法移动；`Kinematic` 为运动学物体，仅在路点系统作用下受控移动；`RigidBody` 为刚体，可无形变地自由移动，也可受铰点、转轴等约束；`Decoration` 为装饰，没有碰撞箱。

### `mass`

- 类型：`float`
- 默认值：`1`
- 限制：`m: m > 0`

质量。仅在 `physicsBodyType == RigidBody` 时有效。

### `gravityFactor`

- 类型：`float`
- 默认值：`1`

重力增益比。仅在 `physicsBodyType == RigidBody` 时有效；`1` 为正常重力，`0` 为无重力，负数为反重力。

### `linearDamping`

- 类型：`float`
- 默认值：`1`
- 限制：`x: x >= 0`

位移阻尼。仅在 `physicsBodyType == RigidBody` 时有效。

### `angularDamping`

- 类型：`float`
- 默认值：`1`
- 限制：`x: x >= 0`

旋转阻尼。仅在 `physicsBodyType == RigidBody` 时有效。

### `physicsMaterialTemplate`

- 类型：`enum{Stone, Wood, Iron, Rubber, Ice}`
- 默认值：`Stone`

物理材质模板。影响弹力、表面摩擦系数等物理性质，以及碰撞音效等游戏效果。

# 自定义元件

如果内置的元件无法满足你的制图需求，你可以考虑使用自定义元件。

## 导入模型

在三维软件建好模型后，将模型导出为 `.fbx` 格式 **（FBX2012-2015，ASCII 编码，三角化面）**。
在改动下述参数后，需要点击 `Update Item` 按钮更新元件，元件预览将显示在 `Preview` 窗格中。

`File` → `Import File` 打开导入文件窗口
右下角文件类型选择为 `Model File (.fbx)`，并选择你刚刚导出的模型导入。
模型导入后将以 `CustomMesh` 的形式储存在工程文件中。

## 创建自定义元件

`Create` → `Custom` → `Create Custom Item` 创建新的自定义元件，创建后将会显示在 `Hierarchy` 窗口中。

| 参数                      | 类型                        | 含义           | 补充说明                             |
| ------------------------- | --------------------------- | -------------- | ------------------------------------ |
| `customMesh`              | `CustomMesh`                | 模型           | 将导入的模型拖入此处                 |
| `useBuiltInMaterial`      | `bool`                      | 使用内置材质   |                                      |
| `builtInMaterials`        | `int>=0` `enum[]`           | 内置材质列表   | 与建模软件中设定的对应关系一致       |
| `customMaterials`         | `int>=0` `CustomMaterial[]` | 自定义材质列表 | 与建模软件中设定的对应关系一致       |
| `physicsBodyType`         | `enum`                      | 物理类型       | _见附表_                             |
| `mass`                    | `float>0`                   | 质量           | 只对刚体生效                         |
| `gravityFactor`           | `float`                     | 重力增益比     | 只对刚体生效，0 为失重，负数为反重力 |
| `linearDamping`           | `float>=0`                  | 位移阻尼       | 只对刚体生效                         |
| `angularDamping`          | `float>=0`                  | 旋转阻尼       | 只对刚体生效                         |
| `physicsMaterialTemplate` | `enum`                      | 物理材质模板   | 影响弹力、表面摩擦系数、碰撞音效等   |

::: tip 物理类型说明

- `Static`：静态物体（如路面）
- `Kinematic`：运动学物体（如移动路面）
- `RigidBody`：刚体（如箱子）
- `Decoration`：装饰（无碰撞箱）

:::

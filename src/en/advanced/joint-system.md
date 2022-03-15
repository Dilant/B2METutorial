# Joint System

::: tip

本章节高度依赖于 [Mesh System](/en/advanced/mesh-system.md) 和 [Material System](/en/advanced/material-system.md) 章节，请在阅读前先掌握前述章节内容。

如果需要导入外部网格和材质，你还需要具备建模能力。当然，本章节也提供了一些利用内置素材的方案。

:::

## 实例

### 落石

::: tip

该例用于演示使用关节的完整流程，并利用 `Road Generator` 生成网格，不需要导入外部文件，适合起步练习。

制图请使用现成元件：`Assets → Items → Machinery → StoneBlock`。

:::

- 生成网格
  - `Create → Road Generator`
  - 设置 `生成器类型 = 拐角`
  - 点击 `保存网格`，取名后点击保存
- 添加并设置物体
  - 在 `Assets → Meshes → Default` 中找到上一步保存的网格，拖入 `Scene` 窗口
  - 设置 2 个材质
    - `Assets → Textures → Utility → StoneFloor`
    - `Assets → Textures → Utility → StoneFloorSide`
  - 设置 `碰撞箱类型 = 长方体`，不改动碰撞箱相关参数
  - 设置 `物理体类型 = 刚体`
  - 酌情调整刚体相关参数
  - 将物体摆放在合适的位置
- 添加并设置关节
  - `Create → Joint`
  - 在 `Hierarchy` 窗口中，拖动关节到物体上，使关节成为物体子级
  - 右击关节的 `变换` 参数并 `重置数据`，此时关节应与物体重合
  - 设置 `物理物体 A` 为物体的 ID
  - 设置 2 个约束
    - 线性约束，锁定 `X` `Z` 两轴，确保物体只能沿 `Y` 轴移动
    - 角约束，锁定 `X` `Y` `Z` 三轴，确保物体无法旋转
    - 此时关节表现为平动关节（类似套筒，活塞等）
  - 不改动其它参数
- 在游戏中测试，此时落石应当可以正常工作
- 保存元件
  - 定位到 `Assets → Items → Default`，也可以选择自己喜欢的文件夹
  - 将 `Hierarchy` 窗口中的物体拖入 `Assets` 窗口，取名后点击 `保存`
  - 需要使用时，将元件拖入 `Scene` 窗口，关节的 `物理物体 A` 会自动填写

::: warning

[复制元件](/en/start/basic-operation.md#duplicate)时不会自动更新关节信息，因此需要自行修正，或每次均从 `Assets` 窗口拖入使用。

:::

### 推板

::: tip

该例用于演示需要建模后导入网格的情形。

制图请使用现成元件：`Assets → Items → Machinery → PushBoard`。

:::

- 建模
  - 使用建模软件创建一个长方体
    - 此处假设推板绕 `X` 轴旋转
    - 参考尺寸：`X = 1m` `Y = 2m` `Z = 0.1m`
  - 设定轴心位于底面中心
  - 可在建模软件中使用旋转工具，绕 `X` 轴旋转测试是否符合预期
  - 简单起见，此处不考虑 UV 和材质匹配问题
    ![](/images/mesh-example-push-board.png)
- 添加并设置物体
  - [导入](/advanced/mesh-system.md#导入网格)上一步创建的网格
  - 木板材质位于 `Assets → Textures → Utility → Wood`
  - 请自行完成其它步骤
- 添加并设置关节
  - 添加 2 个约束
    - 线性约束，锁定 `X` `Y` `Z` 三轴，确保物体无法移动
    - 角约束，锁定 `Y` `Z` 两轴，确保物体只能沿 `X` 轴旋转
    - 此时关节表现为平面转动关节（类似套环、铰链等）
  - 请自行完成其它步骤
- 在游戏中测试
  - 此时推板应当可以自由旋转
  - 需要添加限位物体，并略微旋转使推板倾斜，使得推板位于正确的初始位置，并可正常工作

### 浮板

::: tip

该例新增了线性弹簧的使用。请利用这个例子练习各个操作！

制图请使用现成元件：`Assets → Items → Machinery → FloatBoard`。

:::

- 请自行建模导入网格和材质，也可使用现成的素材
  - 保存 `Assets → Items → Machinery → FloatBoard` 的网格
  - 设置 3 个材质
    - `Assets → Textures → Machinery → Machinery_Wood`
    - `Assets → Textures → Machinery → Machinery_Target_Green`
    - `Assets → Textures → Machinery → Machinery_Steel`
- 需要在 `Y` 轴使用线性弹簧
  - 添加线性约束，限制 `Y` 轴
  - 勾选 `使用线性弹簧`
  - 酌情设置弹簧参数
    - 参考：`弹簧频率 = 0.5` `弹簧阻尼 = 0.25`
- 请自行完成其它步骤
- 在游戏中测试

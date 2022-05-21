# 自定义执行器

## MiniScript 简要说明

- MiniScript 官方网站：[https://miniscript.org/](https://miniscript.org/)
  - 请先阅读[官方文档](https://miniscript.org/files/MiniScript-Manual.pdf)和[快速入门](https://miniscript.org/files/MiniScript-QuickRef.pdf)
  - 官方提供[演练场](https://miniscript.org/tryit/)
- MiniScript 是弱类型动态语言
  - 变量会在任何可能的情形自动隐式转换类型，且不抛出异常
- MiniScript 的变量类型：`number` `string` `list` `map`
- MiniScript **没有** `int` 类型（类似 JavaScript）
  - 所有 `number` 均为 `double`
  - 没有被零除异常，有 `INF` 和 `nan`
  - 判断数值相等时请注意浮点误差处理
- MiniScript **没有** `bool` 类型（类似 C）
  - `true` 即为 `1`，`false` 即为 `0`
  - `if` 等条件判断语句中，`0` `""` `[]` `{}` `null` 视为假，其它视为真
- MiniScript 会在任何可能的情形传引用（类似 Python）
  - 复制 `list` 时，请务必使用 `b = a[0:]` 的语法
  - **没有**深拷贝功能，请尽量避免使用复杂结构
- 以下将使用 Python 的类型标注方式标注签名

## 通用

### `GetTransform(ID: int) -> Annotated[tuple[float], 10]`

读取元件变换参数。

- `returns`：变换参数
  - `[0:3]`：坐标
  - `[3:7]`：姿态四元数
  - `[7:10]`：沿三轴的缩放比例

### `SetTransform(ID: int, transform: Annotated[tuple[float], 10]) -> None`

改变元件变换参数。

- `transform`：变换参数
  - `[0:3]`：坐标
  - `[3:7]`：姿态四元数
  - `[7:10]`：沿三轴的缩放比例

### `SetActive(ID: int, active: bool) -> None`

设置物体激活状态，未激活的物体会隐藏并失去功能。

- `active`：是否激活

### `ExecuteExecutor(ID: int) -> None`

执行另一个自定义执行器，当前执行器在它完成后（无论成功还是出错）继续执行。

## 物理

### `PhysicsGetInverseMass(ID: int) -> float`

读取物体质量的倒数。

- `returns`：质量倒数

### `PhysicsSetInverseMass(ID: int, inverse_mass: float) -> None`

改变物体质量的倒数。

- `inverse_mass`：质量倒数

### `PhysicsGetLinearDamping(ID: int) -> float`

读取物体线性阻尼。

- `returns`：线性阻尼

### `PhysicsSetLinearDamping(ID: int, damping: float) -> None`

改变物体线性阻尼。

- `damping`：线性阻尼

### `PhysicsGetAngularDamping(ID: int) -> float`

读取物体角阻尼。

- `returns`：角阻尼

### `PhysicsSetAngularDamping(ID: int, damping: float) -> None`

改变物体角阻尼。

- `damping`：角阻尼

### `PhysicsGetLinearVelocity(ID: int) -> tuple[float, float, float]`

读取物体线速度。

- `returns`：线速度沿三轴的分量

### `PhysicsSetLinearVelocity(ID: int, velocity: tuple[float, float, float]) -> None`

改变物体线速度。

- `velocity`：线速度沿三轴的分量

### `PhysicsGetAngularVelocity(ID: int) -> tuple[float, float, float]`

读取物体角速度。

- `returns`：角速度沿三轴的分量

### `PhysicsSetAngularVelocity(ID: int, velocity: tuple[float, float, float]) -> None`

改变物体角速度。

- `velocity`：角速度沿三轴的分量

### `PhysicsCalculateVelocityToTargetPosition(ID: int, target: tuple[float, float, float]) -> tuple[float, float, float]`

计算物体下一帧平动到指定位置需要的线速度。

- `target`：目标位置坐标
- `returns`：所需线速度沿三轴的分量

### `PhysicsCalculateVelocityToTargetRotation(ID: int, target: tuple[float, float, float, float]) -> tuple[float, float, float]`

计算物体下一帧旋转到指定姿态需要的角速度。

- `target`：目标姿态四元数
- `returns`：所需角速度沿三轴的分量

### `PhysicsDestroy(ID: int, vfx: bool) -> None`

销毁物体。

- `vfx`：是否播放销毁动画

### `PhysicsBreakJoint(ID: int) -> None`

断开关节。

## 游戏流程

### `RemoveAllInactiveBalls() -> None`

移除所有闲置球。

### `SetSpawnPoint(transform_mark: str) -> None`

设置重生点。

- `transform_mark`：重生点对应的变换标记

### `CallLevelComplete(vfx: bool, position: tuple[float, float, float]) -> None`

完成关卡，立即结算。

- `vfx`：是否播放终点动画
- `position`：播放终点动画时，玩家球被传送到的坐标

### `CallSuicide() -> None`

返回检查点。

### `CallRestart() -> None`

重开关卡。

## 摄像机

### `SetCameraMode(mode: int) -> None`

设置摄像机模式。

- `mode`：`0` 四向视角，`1` 自由视角

### `SetCameraTarget(ID: int) -> None`

设置摄像机目标。

### `SetCameraOffset(offset: tuple[float, float, float]) -> None`

设置摄像机偏移。

- `offset`：摄像机相对于玩家球的偏移向量

## 光源

### `SetLightIntensity(ID: int, intensity: float) -> None`

设置光源强度。

- `intensity`：强度

### `SetLightColor(ID: int, RGB: tuple[float, float, float]) -> None`

设置光源颜色。

- `RGB`：颜色，各项范围为 `0 <= x <= 1`

## 天空盒

### `SetSkyboxTime(time: float) -> None`

改变预设天空盒时间。

- `time`：时刻，范围为 `0 <= t <= 24`

## 路径

### `WayPathGetPosition(ID: int, part_index: int, percentage: float) -> tuple[float, float, float]`

计算路径指定点的坐标。

`part_index`：片段编号，从 `0` 开始计数
`percentage`：该片段上的进度百分比，范围为 `0 <= x <= 1`
`returns`：计算得到的坐标

### `WayPathGetRotation(ID: int, part_index: int, percentage: float) -> tuple[float, float, float, float]`

计算路径指定点的姿态。

`part_index`：片段编号，从 `0` 开始计数
`percentage`：该片段上的进度百分比，范围为 `0 <= x <= 1`
`returns`：计算得到的姿态四元数

### `GetWayPointInfo(ID: int, point_index: int) -> tuple[float, bool, float, float]`

读取路径上路点的信息。

- `ID`：路径 ID
- `point_index`：路点编号，从 `0` 开始计数
- `returns`：路点信息
  - `[0]`：前往下一路点的移动速度
  - `[1]`：是否改用用时
  - `[2]`：前往下一路点的用时
  - `[3]`：该点停留时间

### `RefreshWayPath() -> None`

更新所有路径的轨迹。

## 变量系统

### `GetIntVariableValue(name: str) -> int`

### `GetFloatVariableValue(name: str) -> float`

### `GetBoolVariableValue(name: str) -> bool`

读取变量系统中变量的值。

- `name`：变量名
- `returns`：变量值

### `SetIntVariableValue(name: str, value: int) -> None`

### `SetFloatVariableValue(name: str, value: float) -> None`

### `SetBoolVariableValue(name: str, value: bool) -> None`

写入变量系统中变量的值。

- `name`：变量名
- `value`：变量值

## 粒子系统

### `PlayParticle(ID: int) -> None`

播放粒子。

### `PauseParticle(ID: int) -> None`

暂停粒子，下次会从暂停的位置继续播放。

### `StopParticle(ID: int) -> None`

停止粒子，下次会从头播放。

## 音频系统

### `PlayAudio(ID: int) -> None`

播放音频。

### `PauseAudio(ID: int) -> None`

暂停音频，下次会从暂停的位置继续播放。

### `StopAudio(ID: int) -> None`

停止音频，下次会从头播放。

### `SetAudioVolume(ID: int, volume: float) -> None`

设置音频音量。

- `volume`：音量，范围为 `0 <= v <= 1`

## 杂项

### `QuaternionToEuler(quaternion: tuple[float, float, float, float]) -> tuple[float, float, float]`

将四元数转换为欧拉角。

- `quaternion`：四元数
- `returns`：欧拉角

### `EulerToQuaternion(euler: tuple[float, float, float]) -> tuple[float, float, float, float]`

将欧拉角转换为四元数。

- `euler`：欧拉角
- `returns`：四元数

### `SaveData(data: list[float]) -> None`

保存存档。

- `data`：存档数据，大小限制为 1 MB

### `LoadData() -> list[float]`

读取存档。

- `returns`：存档数据

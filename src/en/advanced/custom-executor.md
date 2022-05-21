# Custom Executor

## MiniScript Simple Guide

- MiniScript 官方网站: [https://miniscript.org/](https://miniscript.org/)
  - 请先阅读[官方文档](https://miniscript.org/files/MiniScript-Manual.pdf)和[快速入门](https://miniscript.org/files/MiniScript-QuickRef.pdf)
  - 官方提供[演练场](https://miniscript.org/tryit/)
- MiniScript 是弱类型动态语言
  - 变量会在任何可能的情形自动隐式转换类型，且不抛出异常
- MiniScript 的变量类型: `number` `string` `list` `map`
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

## Generic

### `GetTransform(ID: int) -> Annotated[tuple[float], 10]`

Get transform parameters of an object.

- `returns`: transform parameters
  - `[0:3]`: position's coordinate
  - `[3:7]`: posture's quaternion
  - `[7:10]`: scale ratio along each axis

### `SetTransform(ID: int, transform: Annotated[tuple[float], 10]) -> None`

Set transform parameters of an object.

- `transform`: transform parameters
  - `[0:3]`: position's coordinate
  - `[3:7]`: posture's quaternion
  - `[7:10]`: scale ratio along each axis

### `SetActive(ID: int, active: bool) -> None`

设置物体激活状态，未激活的物体会隐藏并失去功能。

- `active`: whether active

### `ExecuteExecutor(ID: int) -> None`

执行另一个自定义执行器，当前执行器在它完成后（无论成功还是出错）继续执行。

## 物理

### `PhysicsGetInverseMass(ID: int) -> float`

- `returns`: inverse mass

### `PhysicsSetInverseMass(ID: int, inverse_mass: float) -> None`

- `inverse_mass`: inverse mass

### `PhysicsGetLinearDamping(ID: int) -> float`

- `returns`: linear damping

### `PhysicsSetLinearDamping(ID: int, damping: float) -> None`

- `damping`: linear damping

### `PhysicsGetAngularDamping(ID: int) -> float`

- `returns`: angular damping

### `PhysicsSetAngularDamping(ID: int, damping: float) -> None`

- `damping`: angular damping

### `PhysicsGetLinearVelocity(ID: int) -> tuple[float, float, float]`

- `returns`: linear velocity along each axis

### `PhysicsSetLinearVelocity(ID: int, velocity: tuple[float, float, float]) -> None`

- `velocity`: linear velocity along each axis

### `PhysicsGetAngularVelocity(ID: int) -> tuple[float, float, float]`

- `returns`: angular velocity along each axis

### `PhysicsSetAngularVelocity(ID: int, velocity: tuple[float, float, float]) -> None`

- `velocity`: angular velocity along each axis

### `PhysicsCalculateVelocityToTargetPosition(ID: int, target: tuple[float, float, float]) -> tuple[float, float, float]`

计算物体下一帧平动到指定位置需要的线速度。

- `target`: target position's coordinate
- `returns`: required linear velocity along each axis

### `PhysicsCalculateVelocityToTargetRotation(ID: int, target: tuple[float, float, float, float]) -> tuple[float, float, float]`

计算物体下一帧旋转到指定姿态需要的角速度。

- `target`: target posture's quaternion
- `returns`: required angular velocity along each axis

### `PhysicsDestroy(ID: int, vfx: bool) -> None`

- `vfx`: whether to play destruction animation

### `PhysicsBreakJoint(ID: int) -> None`

## Game Process

### `RemoveAllInactiveBalls() -> None`

### `SetSpawnPoint(transform_mark: str) -> None`

- `transform_mark`: corresponding transform mark of the rebirth point

### `CallLevelComplete(vfx: bool, position: tuple[float, float, float]) -> None`

- `vfx`: whether to play destination animation
- `position`: if so, the position's coordinate where the player ball will be transferred to

### `CallSuicide() -> None`

Back to checkpoint.

### `CallRestart() -> None`

## Camera

### `SetCameraMode(mode: int) -> None`

- `mode`: `0` four-directional mode, `1` free look mode

### `SetCameraTarget(ID: int) -> None`

### `SetCameraOffset(offset: tuple[float, float, float]) -> None`

- `offset`: 摄像机相对于玩家球的偏移向量

## Light

### `SetLightIntensity(ID: int, intensity: float) -> None`

- `intensity`: intensity

### `SetLightColor(ID: int, RGB: tuple[float, float, float]) -> None`

- `RGB`: color, each component with range `0 <= x <= 1`

## Skybox

### `SetSkyboxTime(time: float) -> None`

Change time of a procedural skybox.

- `time`: time, with range `0 <= t <= 24`

## Way Path

### `WayPathGetPosition(ID: int, part_index: int, percentage: float) -> tuple[float, float, float]`

计算路径指定点的坐标。

`part_index`: 片段编号，从 `0` 开始计数
`percentage`: 该片段上的进度百分比，范围为 `0 <= x <= 1`
`returns`: calculated position's coordinate

### `WayPathGetRotation(ID: int, part_index: int, percentage: float) -> tuple[float, float, float, float]`

计算路径指定点的姿态。

`part_index`: 片段编号，从 `0` 开始计数
`percentage`: 该片段上的进度百分比，范围为 `0 <= x <= 1`
`returns`: calculated posture's quaternion

### `GetWayPointInfo(ID: int, point_index: int) -> tuple[float, bool, float, float]`

Get information of a way point on a way path.

- `ID`: way path ID
- `point_index`: 路点编号，从 `0` 开始计数
- `returns`: 路点信息
  - `[0]`: 前往下一路点的移动速度
  - `[1]`: 是否改用用时
  - `[2]`: 前往下一路点的用时
  - `[3]`: 该点停留时间

### `RefreshWayPath() -> None`

## Variable System

### `GetIntVariableValue(name: str) -> int`

### `GetFloatVariableValue(name: str) -> float`

### `GetBoolVariableValue(name: str) -> bool`

- `name`: variable name
- `returns`: variable value

### `SetIntVariableValue(name: str, value: int) -> None`

### `SetFloatVariableValue(name: str, value: float) -> None`

### `SetBoolVariableValue(name: str, value: bool) -> None`

- `name`: variable name
- `value`: variable value

## Particle System

### `PlayParticle(ID: int) -> None`

### `PauseParticle(ID: int) -> None`

### `StopParticle(ID: int) -> None`

## Audio System

### `PlayAudio(ID: int) -> None`

### `PauseAudio(ID: int) -> None`

### `StopAudio(ID: int) -> None`

### `SetAudioVolume(ID: int, volume: float) -> None`

- `volume`: volume, with range `0 <= v <= 1`

## Miscellaneous

### `QuaternionToEuler(quaternion: tuple[float, float, float, float]) -> tuple[float, float, float]`

- `quaternion`: quaternion
- `returns`: euler angle

### `EulerToQuaternion(euler: tuple[float, float, float]) -> tuple[float, float, float, float]`

- `euler`: euler angle
- `returns`: quaternion

### `SaveData(data: list[float]) -> None`

- `data`: game save, with size limit of 1MB

### `LoadData() -> list[float]`

- `returns`: game save

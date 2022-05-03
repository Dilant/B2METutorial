# Custom Executor

## MiniScript 编写说明

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

### `GetTransform(ID: int, transform: Annotated[tuple[float], 10]) -> None`

### `SetActive(ID: int, active: bool) -> None`

### `ExecuteExecutor(ID: int) -> None`

## 物理

### `PhysicsGetInverseMass(ID: int) -> float`

### `PhysicsSetInverseMass(ID: int, inverse_mass: float) -> None`

### `PhysicsGetLinearDamping(ID: int) -> float`

### `PhysicsSetLinearDamping(ID: int, damping: float) -> None`

### `PhysicsGetAngularDamping(ID: int) -> float`

### `PhysicsSetAngularDamping(ID: int, damping: float) -> None`

### `PhysicsGetLinearVelocity(ID: int) -> tuple[float, float, float]`

### `PhysicsSetLinearVelocity(ID: int, velocity: tuple[float, float, float]) -> None`

### `PhysicsGetAngularVelocity(ID: int) -> tuple[float, float, float]`

### `PhysicsSetAngularVelocity(ID: int, velocity: tuple[float, float, float]) -> None`

### `PhysicsCalculateVelocityToTargetPosition(ID: int, target: tuple[float, float, float]) -> tuple[float, float, float]`

### `PhysicsCalculateVelocityToTargetRotation(ID: int, target: tuple[float, float, float, float]) -> tuple[float, float, float]`

### `PhysicsDestroy(ID: int, vfx: bool) -> None`

### `PhysicsBreakJoint(ID: int) -> None`

## 游戏流程

### `RemoveAllInactiveBalls() -> None`

### `SetSpawnPoint(transform_mark: str) -> None`

### `CallLevelComplete(vfx: bool, position: tuple[float, float, float]) -> None`

### `CallSuicide() -> None`

### `CallRestart() -> None`

## 摄像机

### `SetCameraMode(mode: int) -> None`

### `SetCameraTarget(ID: int) -> None`

### `SetCameraOffset(offset: tuple[float, float, float]) -> None`

## 光源

### `SetLightIntensity(ID: int, intensity: float) -> None`

### `SetLightColor(ID: int, RGB: tuple[float, float, float]) -> None`

## 天空盒

### `SetSkyboxTime(time: float) -> None`

## 路径

### `WayPathGetPosition(ID: int, part_index: int, percentage: float) -> tuple[float, float, float]`

### `WayPathGetQuaternionRotation(ID: int, part_index: int, percentage: float) -> tuple[float, float, float, float]`

### `GetWayPointInfo(ID: int, point_index: int) -> tuple[float, bool, float, float]`

### `RefreshWayPath() -> None`

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
- `value`：值

## 粒子系统

### `PlayParticle(ID: int) -> None`

### `PauseParticle(ID: int) -> None`

### `StopParticle(ID: int) -> None`

## 音频系统

### `PlayAudio(ID: int) -> None`

### `PauseAudio(ID: int) -> None`

### `StopAudio(ID: int) -> None`

### `SetAudioVolume(ID: int, volume: float) -> None`

## 杂项

### `QuaternionToEuler(quaternion: tuple[float, float, float, float]) -> tuple[float, float, float]`

将四元数转换为欧拉角。

- `quaternion`：四元数，元序为 `X` `Y` `Z` `W`
- `returns`：欧拉角，顺规为 `Z` `X` `Y`，单位为角度

### `EulerToQuaternion(euler: tuple[float, float, float]) -> tuple[float, float, float, float]`

将欧拉角转换为四元数。

- `euler`：欧拉角
- `returns`：四元数

### `SaveData(data: list[float]) -> None`

### `LoadData() -> list[float]`

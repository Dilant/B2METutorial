# Custom Executor

## MiniScript Simple Guide

- MiniScript official site: [https://miniscript.org/](https://miniscript.org/)
  - Read [official manual](https://miniscript.org/files/MiniScript-Manual.pdf) and [quick start](https://miniscript.org/files/MiniScript-QuickRef.pdf) first
  - There's an official [playground](https://miniscript.org/tryit/)
- MiniScript is a weak and dynamic typing language (similar to PHP)
  - Variables will be converted to another type automatically and implicitly whenever possible, without raising exceptions
- MiniScript has these variable types: `number` `string` `list` `map`
- MiniScript **doesn't** have `int` type (similar to JavaScript)
  - All `number`s are `double`s
  - No exception of division by zero, and there's `INF` and `nan`
  - Take care of floating point comparisons
- MiniScript **doesn't** have `bool` type (similar to C)
  - `true` is `1`, `false` is `0`
  - In `if` statements, `0` `""` `[]` `{}` `null` are regarded as false, others as true
- MiniScript passes everything by reference whenever possible (similar to Python)
  - When copying a `list`, remember to use syntax like `b = a[0:]`
  - **No** deep copy function, so avoid using complicated data structures
- The types and signatures below are annotated using Python style

## Global Variables

### `globals.TriggerID: int | None`

The trigger's ID which runs the current custom executor.

### `globals.TriggeredItemID: int | None`

The object's ID which activates the aforementioned trigger.

## Generic

### `GetTransform(ID: int) -> Annotated[tuple[float], 10]`

Get transform parameters of an object.

- `returns`: transform parameters
  - `[0:3]`: position's coordinate
  - `[3:7]`: posture's quaternion
  - `[7:10]`: scale ratio along each axis

### `SetTransform(ID: int, transform: Annotated[tuple[float], 10]) -> None`

Set transform parameters of an object.

This method can't be applied to rigid bodies, use `PhysicsSetTransform` instead.

- `transform`: transform parameters
  - `[0:3]`: position's coordinate
  - `[3:7]`: posture's quaternion
  - `[7:10]`: scale ratio along each axis

### `Instantiate(ID: int, transform: Annotated[tuple[float], 10]) -> int`

Create a new object from the given object template.

- `transform`: transform parameters
  - `[0:3]`: position's coordinate
  - `[3:7]`: posture's quaternion
  - `[7:10]`: scale ratio along each axis
- `returns`: ID of the new object

### `SetActive(ID: int, active: bool) -> None`

Set the active state of an object. An inactivated object will hide itself and lose its functions.

- `active`: whether active

### `ExecuteExecutor(ID: int) -> None`

Run another custom executor. The current one goes on when the latter one completes (either with or without errors).

## 物理

### `PhysicsSetTransform(ID: int, transform: Annotated[tuple[float], 7]) -> None)`

Set transform parameters of a rigid body.

To get transform parameters of a rigid body, use `GetTransform`.

- `transform`: transform parameters
  - `[0:3]`: position's coordinate
  - `[3:7]`: posture's quaternion

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

Calculate the required linear velocity for an object to move to the target position in the next physics frame.

- `target`: target position's coordinate
- `returns`: required linear velocity along each axis

### `PhysicsCalculateVelocityToTargetRotation(ID: int, target: tuple[float, float, float, float]) -> tuple[float, float, float]`

Calculate the required angular velocity for an object to rotate to the target posture in the next physics frame.

- `target`: target posture's quaternion
- `returns`: required angular velocity along each axis

### `PhysicsDestroy(ID: int, vfx: bool) -> None`

- `vfx`: whether to play destruction animation

### `PhysicsBreakJoint(ID: int) -> None`

## Game Process

### `TransferPlayer(target_position: tuple[float, float, float]) -> None`

Transfer the player ball to the target position. Its velocity and camera motion are kept unchanged.

- `target_position`: target position's coordinate

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

- `offset`: the offset vector from the player ball to the camera

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

Calculate the position of a given point on a way path.

`part_index`: index of the way path segment, counting from `0`
`percentage`: percentage of progress on this segment, with range `0 <= x <= 1`
`returns`: calculated position's coordinate

### `WayPathGetRotation(ID: int, part_index: int, percentage: float) -> tuple[float, float, float, float]`

Calculate the posture of a given point on a way path.

`part_index`: index of the way path segment, counting from `0`
`percentage`: percentage of progress on this segment, with range `0 <= x <= 1`
`returns`: calculated posture's quaternion

### `GetWayPointInfo(ID: int, point_index: int) -> tuple[float, bool, float, float]`

Get information of a way point on a way path.

- `ID`: way path ID
- `point_index`: index of the way point (counting from `0`)
- `returns`: way point information
  - `[0]`: moving speed towards the next point
  - `[1]`: whether duration is used instead of moving speed
  - `[2]`: duration to the next point
  - `[3]`: stay time at the point

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

## Code Snippets

### `map`

This function is called `apply`, because `map` is a typing keyword of MiniScript.

<div class="language-miniscript ext-ms line-numbers-mode">
  <pre
    class="shiki"
    style="background-color: #1e1e1e"
  ><code><span class="line"><span style="color:#DCDCAA;">apply</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">function</span><span style="color:#DCDCAA;">(</span><span style="color:#DCDCAA;">func</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">iter</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">result</span><span style="color:#D4D4D4;"> = []</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">for</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">x</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">in</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">iter</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">result</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">push</span><span style="color:#D4D4D4;">(</span><span style="color:#DCDCAA;">func</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">x</span><span style="color:#D4D4D4;">))</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">end</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">for</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">result</span></span>
<span class="line"><span style="color:#C586C0;">end</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">function</span></span>
<span class="line"></span></code></pre>
  <div class="line-numbers" aria-hidden="true">
    <div class="line-number"></div>
    <div class="line-number"></div>
    <div class="line-number"></div>
    <div class="line-number"></div>
    <div class="line-number"></div>
    <div class="line-number"></div>
    <div class="line-number"></div>
  </div>
</div>

### `reduce`

<div class="language-miniscript ext-ms line-numbers-mode">
  <pre
    class="shiki"
    style="background-color: #1e1e1e"
  ><code><span class="line"><span style="color:#DCDCAA;">reduce</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">function</span><span style="color:#DCDCAA;">(</span><span style="color:#DCDCAA;">func</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">iter</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">result</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">iter</span><span style="color:#D4D4D4;">[</span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">for</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">x</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">in</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">iter</span><span style="color:#D4D4D4;">[</span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">:]</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">result</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">func</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">result</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">x</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">end</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">for</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">result</span></span>
<span class="line"><span style="color:#C586C0;">end</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">function</span></span>
<span class="line"></span></code></pre>
  <div class="line-numbers" aria-hidden="true">
    <div class="line-number"></div>
    <div class="line-number"></div>
    <div class="line-number"></div>
    <div class="line-number"></div>
    <div class="line-number"></div>
    <div class="line-number"></div>
    <div class="line-number"></div>
  </div>
</div>

### `filter`

<div class="language-miniscript ext-ms line-numbers-mode">
  <pre
    class="shiki"
    style="background-color: #1e1e1e"
  ><code><span class="line"><span style="color:#DCDCAA;">filter</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;">(</span><span style="color:#DCDCAA;">func</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">iter</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">result</span><span style="color:#D4D4D4;"> = []</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">for</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">x</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">in</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">iter</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">func</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">x</span><span style="color:#D4D4D4;">)</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">then</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">result</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">push</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">x</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">end</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">for</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">result</span></span>
<span class="line"><span style="color:#C586C0;">end</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">function</span></span>
<span class="line"></span></code></pre>
  <div class="line-numbers" aria-hidden="true">
    <div class="line-number"></div>
    <div class="line-number"></div>
    <div class="line-number"></div>
    <div class="line-number"></div>
    <div class="line-number"></div>
    <div class="line-number"></div>
    <div class="line-number"></div>
  </div>
</div>

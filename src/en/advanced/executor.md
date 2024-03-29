# Executor

::: tip

Executors should be used together with triggers, please read [Trigger System](/en/advanced/trigger-system.md) first.

:::

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
  - When copying a `list`, remember to use syntax like `b = a[:]`
  - **No** deep copy function, so avoid using complicated data structures
- The types and signatures below are annotated using Python style

## Global Variables

### `globals.TriggerID: int | None`

The trigger's ID which runs the current executor.

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

### `SetGravity(gravity: tuple[float, float, float]) -> None`

- `gravity`: gravity along each axis

### `Instantiate(ID: int, transform: Annotated[tuple[float], 10]) -> int`

Create a new object from a given object template.

- `transform`: transform parameters
  - `[0:3]`: position's coordinate
  - `[3:7]`: posture's quaternion
  - `[7:10]`: scale ratio along each axis
- `returns`: ID of the new object

### `SetActive(ID: int, active: bool) -> None`

Set the active state of an object. An inactivated object will hide itself and lose its functions.

- `active`: whether active

### `Execute(ID: int, delayed_frame: int) -> None`

Run another executor.

- `delayed_frame`: physics frames to defer
  - When `delayed_frame == 0`, the current one goes on when the latter one completes (either with or without errors)
  - When `delayed_frame >= 0`, the scheduled executors run at the beginning of the corresponding physics frame

## Physics

### `PhysicsCheckExists(ID: int) -> bool`

Check whether the specified physics object exists.

- `returns`: whether it exists

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

::: warning

Due to a bug, you can't use `PhysicsSetLinearVelocity` and `PhysicsSetAngularVelocity` in the same physical frame, or either of them does't take effect. Use `PhysicsSetVelocity` if you want to change both linear and angular velocity.

:::

### `PhysicsSetVelocity(ID: int, linear: tuple[float, float, float], angular: tuple[float, float, float]) -> None`

- `linear`: linear velocity along each axis
- `angular`: angular velocity along each axis

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

### `PhysicsRaycast(origin: tuple[float, float, float], direction: tuple[float, float, float]) -> list[tuple[int, float, float, float, float, float, float]]`

从给定点向给定方向发出射线，不考虑遮挡，返回所有照射点的信息。

- `origin`: 射线原点
- `direction`: 射线方向
- `returns`: 照射点信息
  - `[*][0]`: 照射到的元件 ID
  - `[*][1:4]`: 照射点坐标
  - `[*][4:7]`: 反射法线沿三轴的分量

### `PhysicsMouseRaycast() -> list[tuple[int, float, float, float, float, float, float]]`

从摄像机向鼠标指针方向发出射线，不考虑遮挡，返回所有照射点的信息。

- `returns`: 照射点信息
  - `[*][0]`: 照射到的元件 ID
  - `[*][1:4]`: 照射点坐标
  - `[*][4:7]`: 反射法线沿三轴的分量

## Mesh and Material

### `SetPhysicsObjectRenderMesh(ID: int, mesh_ref: str) -> None`

Set mesh of a physics object.

- `mesh_ref`: asset reference to the mesh

### `SetPhysicsObjectRenderMaterials(ID: int, material_refs: list[str]) -> None`

Set materials of a physics object.

- `material_refs`: list of asset references to the materials

### `SetPhysicsObjectColliderToSphere(ID: int, radius: float, offset: tuple[float, float, float]) -> None`

Set collider of a physics object to sphere.

- `radius`: radius of the collider
- `offset`: offset of the collider along each axis

### `SetPhysicsObjectColliderToBox(ID: int, size: tuple[float, float, float], corner_radius: float, offset: tuple[float, float, float]) -> None`

Set collider of a physics object to box.

- `size`: size of the collider along each axis
- `corner_radius`: corner radius of the collider
- `offset`: offset of the collider along each axis

### `SetPhysicsObjectColliderToMesh(ID: int, mesh_ref: str, offset: tuple[float, float, float]) -> None`

Set collider of a physics object to a given mesh.

- `mesh_ref`: asset reference to the mesh
- `offset`: offset of the collider along each axis

## Game Process

### `TransferPlayer(target_position: tuple[float, float, float]) -> None`

Transfer the player ball to the target position. Its velocity and camera motion are kept unchanged.

- `target_position`: target position's coordinate

### `RemoveAllInactiveBalls() -> None`

### `SetSpawnPoint(transform_mark: str) -> None`

- `transform_mark`: corresponding transform mark of the rebirth point

### `DisablePlayerKey(key: Literal, disabled: bool) -> None`

- `key`: player key ID
- `disabled`: whether to disable

::: details Player key ID

| ID  | Player key                   |
| --- | ---------------------------- |
| 0   | Move Forward                 |
| 1   | Move Backward                |
| 2   | Move Left                    |
| 3   | Move Right                   |
| 4   | View Clockwise Rotate        |
| 5   | View Counterclockwise Rotate |
| 6   | Camera Overlook              |
| 7   | Switch Controlled Ball       |
| 8   | Free-look Move Forward       |
| 9   | Free-look Move Backward      |
| 10  | Free-look Move Left          |
| 11  | Free-look Move Right         |
| 12  | Free-look Camera Correction  |

:::

### `CallLevelComplete(vfx: bool, position: tuple[float, float, float]) -> None`

- `vfx`: whether to play destination animation
- `position`: if so, the position's coordinate where the player ball will be transferred to

### `CallSuicide() -> None`

Back to checkpoint.

### `CallRestart() -> None`

### `ShowTip(tip_id: int, content: str) -> None`

- `tip_id`: tip ID, allocated and managed by you
- `content`: tip content

### `HideTip(tip_id: int) -> None`

- `tip_id`: tip ID

## Peripheral Input

### `CheckKeyDown(key_ID: Literal) -> bool`

Check whether a keyboard key is pressed down in the current physics frame.

### `CheckKeyUp(key_ID: Literal) -> bool`

Check whether a keyboard key is lifted up in the last physics frame.

### `CheckKeyHold(key_ID: Literal) -> bool`

Check whether a keyboard key is being held in the current physics frame.

- `key_ID`: key ID
- `returns`: whether the corresponding event happens

::: details Mapping table for keyboard keys and IDs

| ID  | Key     | ID  | Key          | ID  | Key           | ID  | Key       |
| --- | ------- | --- | ------------ | --- | ------------- | --- | --------- |
| 0   | None    | 27  | `M`          | 54  | `RightAlt`    | 81  | `Numpad-` |
| 1   | `Space` | 28  | `N`          | 55  | `Ctrl`        | 82  | `Numpad.` |
| 2   | `Enter` | 29  | `O`          | 56  | `RightCtrl`   | 83  | `Numpad=` |
| 3   | `Tab`   | 30  | `P`          | 57  | `Win`         | 84  | `Numpad0` |
| 4   | `` ` `` | 31  | `Q`          | 58  | `RightWin`    | 85  | `Numpad1` |
| 5   | `'`     | 32  | `R`          | 59  | `Menu`        | 86  | `Numpad2` |
| 6   | `;`     | 33  | `S`          | 60  | `Esc`         | 87  | `Numpad3` |
| 7   | `,`     | 34  | `T`          | 61  | `←`           | 88  | `Numpad4` |
| 8   | `.`     | 35  | `U`          | 62  | `→`           | 89  | `Numpad5` |
| 9   | `/`     | 36  | `V`          | 63  | `↑`           | 90  | `Numpad6` |
| 10  | `\`     | 37  | `W`          | 64  | `↓`           | 91  | `Numpad7` |
| 11  | `[`     | 38  | `X`          | 65  | `Backspace`   | 92  | `Numpad8` |
| 12  | `]`     | 39  | `Y`          | 66  | `PageDown`    | 93  | `Numpad9` |
| 13  | `-`     | 40  | `Z`          | 67  | `PageUp`      | 94  | `F1`      |
| 14  | `=`     | 41  | `1`          | 68  | `Home`        | 95  | `F2`      |
| 15  | `A`     | 42  | `2`          | 69  | `End`         | 96  | `F3`      |
| 16  | `B`     | 43  | `3`          | 70  | `Insert`      | 97  | `F4`      |
| 17  | `C`     | 44  | `4`          | 71  | `Delete`      | 98  | `F5`      |
| 18  | `D`     | 45  | `5`          | 72  | `CapsLock`    | 99  | `F6`      |
| 19  | `E`     | 46  | `6`          | 73  | `NumLock`     | 100 | `F7`      |
| 20  | `F`     | 47  | `7`          | 74  | `PrintScreen` | 101 | `F8`      |
| 21  | `G`     | 48  | `8`          | 75  | `ScrollLock`  | 102 | `F9`      |
| 22  | `H`     | 49  | `9`          | 76  | `Pause`       | 103 | `F10`     |
| 23  | `I`     | 50  | `0`          | 77  | `NumpadEnter` | 104 | `F11`     |
| 24  | `J`     | 51  | `Shift`      | 78  | `Numpad/`     | 105 | `F12`     |
| 25  | `K`     | 52  | `RightShift` | 79  | `Numpad*`     |     |           |
| 26  | `L`     | 53  | `Alt`        | 80  | `Numpad+`     |     |           |

:::

### `CheckMouseDown(button: Literal) -> bool`

Check whether a mouse button is pressed down in the current physics frame.

### `CheckMouseUp(button: Literal) -> bool`

Check whether a mouse button is lifted up in the last physics frame.

### `CheckMouseHold(button: Literal) -> bool`

Check whether a mouse button is being held in the current physics frame.

- `button`: mouse button
- `returns`: whether the corresponding event happens

::: details Mapping table for mouse buttons and IDs

| ID  | Key          |
| --- | ------------ |
| `0` | `MouseLeft`  |
| `1` | `MouseWheel` |
| `2` | `MouseRight` |

:::

### `GetMouseMoveDelta() -> tuple[int, int]`

Check the movement of the mouse pointer in the current physics frame.

- `returns`: movement along each axis, unit is pixel, right and up are the positive directions

### `GetMouseScrollDelta() -> tuple[int, int]`

Check the movement of the mouse wheel in the current physics frame.

- `returns`: movement along each axis, unit is pixel, right and up are the positive directions

## Camera

### `SetCameraMode(mode: int) -> None`

- `mode`: `0` four-directional mode, `1` free-look mode

### `SetCameraTarget(ID: int) -> None`

### `SetCameraOffset(offset: tuple[float, float, float]) -> None`

- `offset`: the offset vector from the player ball to the camera

## Light

### `SetLightIntensity(ID: int, intensity: float) -> None`

- `intensity`: intensity

### `SetLightColor(ID: int, RGB: tuple[float, float, float]) -> None`

- `RGB`: color, each component with range `0 <= x <= 1`

### `SetLut(lut_ref: str, intensity: float) -> None`

- `lut_ref`: asset reference to the LUT texture
- `intensity`: intensity

## Skybox

### `SetSkyboxTime(time: float) -> None`

Change time of a procedural skybox.

- `time`: time, with range `0 <= t <= 24`

### `SetFogIntensity(intensity: float, skybox_fog_intensity: float) -> None`

孩子看不懂 雾不会用 救救孩子

### `SetFogColor(RGB: tuple[float, float, float]) -> None`

- `RGB`: color, each component with range `0 <= x <= 1`

### `SetFogDistance(start: float, end: float) -> None`

- `start`: the distance where visibility begins to degrade
- `end`: the distance where visibility reaches the worst

## ~~Way Path~~

::: details Way path is deprecated

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

:::

## Variable System

### `GetIntVariableValue(name: str) -> int`

### `GetFloatVariableValue(name: str) -> float`

### `GetBoolVariableValue(name: str) -> bool`

### `GetNumberListVariableValue(name: str) -> list[float]`

- `name`: variable name
- `returns`: variable value

### `SetIntVariableValue(name: str, value: int) -> None`

### `SetFloatVariableValue(name: str, value: float) -> None`

### `SetBoolVariableValue(name: str, value: bool) -> None`

### `SetNumberListVariableValue(name: str, value: list[float]) -> None`

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

## UI System

### `HideGameUI(hide: bool) -> None`

- `hide`: whether to hide

### `UIGetTransform(ID: int) -> tuple[float, float, float, float, float]`

- `returns`: transform parameters
  - `[0:2]`: position's coordinate
  - `[2]`: angle of rotation, unit is degree, counterclockwise is the positive direction
  - `[3:5]`: scale ratio along each axis

### `UISetPosition(ID: int, position: tuple[float, float]) -> None`

- `position`: position's coordinate

### `UISetRotation(ID: int, rotation: float)`

- `rotation`: angle of rotation

### `UISetScale(ID: int, scale: tuple[float, float]) -> None`

- `scale`: scale ratio along each axis

### `UISetSize(ID: int, size: tuple[float, float]) -> None`

- `size`: length and width

### `UISetTexture(ID: int, texture_ref: str) -> None`

Set texture of a UI image or button element.

- `texture_ref`: asset reference to the texture

### `UISetText(ID: int, text: str) -> None`

Set content of a UI text element.

- `text`: content of text

### `UIGetColor(ID: int) -> tuple[float, float, float, float]`

- `returns`: color with alpha, each component with range `0 <= x <= 1`

### `UISetColor(ID: int, RGBA: tuple[float, float, float, float]) -> None`

- `RGBA`: color with alpha, each component with range `0 <= x <= 1`

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

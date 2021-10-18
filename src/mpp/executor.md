# Executor

## 执行器类名

- ~~`AddForce`：施力。可选恒力场、恒加速度场或弹跳盒。~~
- `ChangePhysicsBody`：改变物理性质。可以将物体变为运动学物体或刚体。
- `ChangeTime`：改变场景时间。
- `ChangeTimeSpeed`：改变时间流速。影响场景昼夜变换的速度。
- `ChangeWeather`：改变场景天气。
- `Delay`：延迟。
- `PauseExecutor`：暂停执行。
- `ResumeExecutor`：继续执行。
- ~~`Transform`：变换。需要配合路点系统使用。~~

## 通用参数

### `autoExecute`

- 类型：`bool`
- 默认值：`false`

在开始或重生时，球落地瞬间自动开始执行。自动执行器无需触发器。

## `AddForce`

### `forceType`

- 类型：`enum{0, 1}`
- 默认值：`0`

施力类型。

| `forceType` | 触发器类型为 `Stay` 时 | 否则         |
| ----------- | ---------------------- | ------------ |
| `0`         | 恒力场                 | 恒冲量发生器 |
| `1`         | 恒加速度场             | 恒速度附加器 |

### `forceIntensity` <badge text="必填" type="warning"/>

- 类型：`float`
- 默认值：`0`

施力强度。绝对数值，负数表示反方向。

::: tip

游戏中的重力加速度为 `g = 18`。

:::

### `forceDirectionX` `forceDirectionY` `forceDirectionZ`

- 类型：`float` `float` `float`
- 默认值：`0` `0` `0`

施力方向。仅当 `falloffShape == 0` 时有效；三者构成 `Vector3`，转换为单位向量后作为**相对于触发器**的方向。

::: tip

当三者均为 `0`时，方向视为沿 `Y` 轴正方向。

:::

### `falloffShape`

- 类型：`enum{0, 1}`
- 默认值：`0`

判定区形状。`0` 为长方体状，施力方向由 `forceDirectionX` `forceDirectionY` `forceDirectionZ` 决定；`1` 为圆球状，半径由 `Y` 向缩放决定，施力方向固定为离心。

### `falloffIntensity`

- 类型：`float`
- 默认值：`0`

衰减强度。指数级，`0` 为不衰减。~~负数小心炸服~~

### `targetIsCollider`

- 类型：`bool`
- 默认值：`false`

自身是否为判定区。若是，所有使触发器生效的物体将受力。

### `objects`

- 类型：`int...`
- 默认值：空
- 限制：`i: i > 0`

目标物体 ID 列表。当触发器使能时，这些物体会受力 **（无论它们在哪里）**。

::: details 简单来说就是这样的

![](/images/executor-add-force.gif)

:::

## `ChangePhysicsBody`

::: danger

`ChangePhysicsBody` 和 `Transform` 不可对同一物体使用。

:::

### `objects` <badge text="必填" type="warning"/>

- 类型：`int...`
- 默认值：空
- 限制：`i: i > 0`

目标物体 ID 列表。

### `isKinematic`

- 类型：`bool`
- 默认值：`false`

改变为运动学物体（是）或刚体（否）。

### `mass`

- 类型：`float`
- 默认值：`1`
- 限制：`m: m > 0`

质量。仅在 `isKinematic == false` 时有效。

### `linearDamping`

- 类型：`float`
- 默认值：`0`
- 限制：`x: x >= 0`

位移阻尼。仅在 `isKinematic == false` 时有效。

### `angularDamping`

- 类型：`float`
- 默认值：`0`
- 限制：`x: x >= 0`

旋转阻尼。仅在 `isKinematic == false` 时有效。

### `gravityFactor`

- 类型：`float`
- 默认值：`1`

重力增益比。仅在 `isKinematic == false` 时有效；`1` 为正常重力，`0` 为无重力，负数为反重力。

## `ChangeTime`

### `targetTime` <badge text="必填" type="warning"/>

- 类型：`float`
- 默认值：`0`
- 限制：`t: 0 <= t < 24`

目标时间。单位为小时。

### `duration` <badge text="必填" type="warning"/>

- 类型：`float`
- 默认值：`0`
- 限制：`t: t >= 0`

动画时长。

## `ChangeTimeSpeed`

::: tip

该执行器控制的是游戏场景昼夜变换的速度，并非物理引擎时间流速。

![](./change-time-speed-mush.png)

:::

### `timeSpeed`

- 类型：`float`
- 默认值：`0`
- 限制：`t: 0 <= t <= 3600`

时间流速比。为现实中 1 秒对于游戏中的秒数，`0` 表示禁用时间流动。

## `ChangeWeather`

### `weatherType` <badge text="必填" type="warning"/>

- 类型：`enum{0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10}`
- 默认值：`0`

目标天气编号。

| 编号 | 名称           | 含义 |
| ---- | -------------- | ---- |
| `0`  | `Sunny`        | 晴   |
| `1`  | `Overcast`     | 阴   |
| `2`  | `Foggy`        | 雾   |
| `3`  | `LightRain`    | 小雨 |
| `4`  | `MediumRain`   | 中雨 |
| `5`  | `HeavyRain`    | 大雨 |
| `6`  | `Thunderstorm` | 雷暴 |
| `7`  | `LightSnow`    | 小雪 |
| `8`  | `MediumSnow`   | 中雪 |
| `9`  | `HeavySnow`    | 大雪 |
| `10` | `Hail`         | 冰雹 |

## `Delay`

### `delayTime` <badge text="必填" type="warning"/>

- 类型：`float`
- 默认值：`0`
- 限制：`t: t >= 0`

延迟时长。

## `PauseExecutor`

### `executors` <badge text="必填" type="warning"/>

- 类型：`int...`
- 默认值：空
- 限制：`i: i > 0`

目标执行器 ID 列表。

## `ResumeExecutor`

### `executors` <badge text="必填" type="warning"/>

- 类型：`int...`
- 默认值：空
- 限制：`i: i > 0`

目标执行器 ID 列表。

## `Transform`

### `loopExecute`

- 类型：`bool`
- 默认值：`false`

是否循环执行。

### `wayPointManager` <badge text="必填" type="error"/>

- 类型：`int`
- 默认值：`0`
- 限制：`i: i > 0`

目标路线管理器 ID。决定运动路径或刚体跟踪路径。

### `objects` <badge text="必填" type="warning"/>

- 类型：`int...`
- 默认值：空
- 限制：`i: i > 0`

目标物体 ID 列表。

### `forceRetrigger`

- 类型：`bool`
- 默认值：`false`

是否强制重新触发。

### `useRelativePosition`

- 类型：`bool`
- 默认值：`false`

是否相对移动。

### `useRelativeRotation`

- 类型：`bool`
- 默认值：`false`

是否相对旋转。

### `rotationAlignTangent`

- 类型：`bool`
- 默认值：`false`

朝向是否跟随路径切线。

### `rotationAlignOffsetX` `rotationAlignOffsetY` `rotationAlignOffsetZ`

- 类型：`float` `float` `float`
- 默认值：`0` `0` `0`

旋转偏移。

### `rigidBodyMode`

- 类型：`bool`
- 默认值：`false`

是否使用刚体模式。在刚体模式下，存在一个中心由 `wayPointManager` 控制移动，力度受 `controlRigidbodyStrength` 影响，半径由 `controlRigidbodyDistance` 决定的向心恒力场，`objects` 中的刚体在这一恒力场的牵引下跟随路径运动。

### `controlRigidbodyStrength` <badge text="必填" type="warning"/>

- 类型：`float`
- 默认值：`0`
- 限制：`x: x >= 0`

刚体跟随力度。仅在 `rigidBodyMode == true` 时有效。

### `controlRigidbodyDistance` <badge text="必填" type="warning"/>

- 类型：`float`
- 默认值：`0`
- 限制：`x: x >= 0`

刚体最远跟随距离。仅在 `rigidBodyMode == true` 时有效。

# M++ Executor 文档

## 语法

### 无后继触发器

```
Executor Type[key0 = value0, key1 = value1, ...];
Executor ChangeWeather[autoExecute = false, weatherType = 0];
```

`Type` 为执行器类名，`key` `value` 为键值对。

### 有后继触发器

```
Executor Type[key0 = value0, key1 = value1, ...] -> ExecutorID [id0, id1, ...];
Executor ChangeWeather[autoExecute = false, weatherType = 0] -> ExecutorID [15, 35, 88];
```

`Type` 为执行器类名，`key` `value` 为键值对，`id` 为后继触发器 ID，这些触发器将在本触发器执行完毕后**同时**开始执行。

::: tip

类型为 `type...` 的参数表示可以传入多个，直接在参数名尾部添加编号后逐个传入，**即使只有一个也是如此**。
例如参数名为 `example`，类型为 `int...`，则参数依次填入 `example0 = 162, example1 = 534, ...`。

:::

## 执行器类名

- `AddForce`：施力。可选恒力场、恒加速度场或弹跳盒。
- `ChangePhysicsBody`：改变物理性质。可以将物体变为运动学物体或刚体。
- `ChangeTime`：改变场景时间。
- `ChangeTimeSpeed`：改变时间流速。影响场景昼夜变换的速度。
- `ChangeWeather`：改变场景天气。
- `Delay`：延迟。
- `PauseExecutor`：暂停执行。
- `ResumeExecutor`：继续执行。
- `Transform`：变换。需要配合路点系统使用

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

### `forceIntensity`

- 类型：`float`
- 默认值：`0`

施力强度。绝对数值，负数表示反方向。

::: tip

游戏中的重力加速度为 `g = 18`。

:::

### `forceDirectionX` `forceDirectionY` `forceDirectionZ`

- 类型：`float` `float` `float`
- 默认值：`0` `0` `0`

施力方向。仅当 `falloffShape == 0` 时有效；三者构成 `Vector3`，转换为单位向量后作为相对方向。

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

自身是否为判定区。若是，所有使能触发器的物体将受力。

### `objects`

- 类型：`int...`
- 默认值：`null`
- 限制：`x: x > 0`

目标物体 ID 列表。当触发器使能时，这些物体会受力 **（无论它们在哪里）**。

::: details 简单来说就是这样的

![](./executor-addforce.gif)

:::

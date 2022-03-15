# Trigger

## Universal Parameters

### `Trigger Type`

- Type: `enum`
- Default: `Physics`

### `Activated`

- Type: `bool`
- Default: `true`

触发器激活时才能生效。执行器可以在游戏中改变触发器的激活状态。

### `Trigger Count`

- Type: `int`
- Default: `-1`
- Constrain: `n: n >= -1`

`-1` 表示不限次数。

### `Trigger CD`

- Type: `float`
- Default: `0`
- Constrain: `t: t >= 0`

`0` 表示没有冷却时间。注意：**即使触发失败也会重置冷却时间**。

### `Target Executor ID`

- Type: `int`
- Default: `0`

触发器生效时，该执行器开始执行。

## Physics

### `Physics Trigger Type`

- Type: `enum{Enter, Stay, Exit}`
- Default: `Enter`

`Enter` 在进入触发器时生效；`Stay` 在停留于触发器中时逐物理帧反复生效；`Exit` 在离开触发器时生效。

### `Trigger Targets ID`

- Type: `int[]`
- Default: `[]`

只有列表中的元件可以使触发器生效。

::: tip

以下为具有特殊意义的编号：

- `-1`：玩家球以外的所有刚体
- `-2`：所有刚体
- `-98`：所有玩家球
- `-99`：主球
- `-100`：玩家木球
- `-101`：玩家石球
- `-102`：玩家纸球
- `-103`：玩家冰球
- `-104`：玩家钢球
- `-105`：玩家橡胶球
- `-106`：玩家光球
- `-107`：玩家气球
- `-108`：玩家粘球
- `-109`：玩家海绵球

:::

### `Send Object to Executor`

- Type: `bool`
- Default: `false`

勾选此项时，使触发器生效的任何元件将临时成为关联的执行器的目标编号。

## Input

### `Input Key`

- Type: `enum`
- Default: `Space`

### `Input Action`

- Type: `enum{Down, Hold, Up, Switch}`
- Default: `Down`

`Down` 在按下按键时生效；`Hold` 在按住按键时逐物理帧反复生效；`Up` 在松开按键时生效；`Switch` 在首次按下按键时开始逐物理帧反复生效，再次按下时停止。

## Physics Frame

::: tip

Ballex² 的物理帧频率为 200Hz。

:::

### Wait Frame

- Type: `int`
- Default: `0`
- Constrain: `f: f >= 0`

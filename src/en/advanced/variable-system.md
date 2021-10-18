# Variable System

## Internal Variables

### `G_Life`

- Type: `int`
- Constrain: `x: x >= 0`

Player's extra lives. (Current life not included)

### `G_Score`

- Type: `float`
- Constrain: `x: x >= 0`

Player's current score.

### `G_Time`

- Type: `int`
- Constrain: `t: t >= 0`

Current time in milliseconds.

### `G_Durability`

- Type: `float`
- Constrain: `x: 0 <= x <= 1`

Durability of current player ball.

### `G_CameraDirection` <badge text="Four-directional"/>

- Type: `int`
- Constrain: `x: x in {0, 1, 2, 3}`

Current camera direction. Using global reference frame, `0` means positive direction of `Z`, `1` means positive direction of `X`, `2` means negative direction of `Z`, `3` means negative direction of `X`.

### `G_CameraAngle` <badge text="Free Look"/>

- Type: `int`
- Constrain: `θ: 0 <= θ < 360`

Current camera angle. Using global reference frame, `0` means positive direction of `Z`, which increases clockwise.

### `G_PlayerVelocity`

- Type: `float`
- Constrain: `v: v >= 0`

Player's current velocity.

### `G_PlayerPositionX` `G_PlayerPositionY` `G_PlayerPositionZ`

- Type: `float` `float` `float`

Player's current coordinate.

## Create Variables

`Create → Variable`

### `Variable Name`

- Type: `String`
- Default: empty

All internal variables start with `G_`, so avoid doing so when you create a variable.

### `Variable Type`

- Type: `enum{Int, Float, Bool}`
- Default: `Int`

### `Variable Value`

- Type: `int | float | bool`
- Default: `0 | 0 | false`

## Manipulate Variables

See: [Advanced → Executor → Set Variable Value](/en/advanced/executor.md#set-variable-value)、[Advanced → Executor → Compare Variables](/en/advanced/executor.md#compare-variables).

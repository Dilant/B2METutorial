# Variable System

## Create Variables

`Create → Variable`

### `Variable Name`

- Type: `str`
- Default: empty

All internal variables start with `G_` or `C_`, so avoid doing so when you create a variable.

### `Variable Type`

- Type: `Literal`
- Default: `Int`

### `Variable Value`

- Type: `int | float | bool`
- Default: `0 | 0 | false`

## Manipulate Variables

See: [Advanced → Executor → Variable System](/en/advanced/executor.md#variable-system)

## Internal Variables

### `G_Score`

- Type: `float`
- Constrain: `x: x >= 0`

Player's current score.

### `G_Time`

- Type: `int`
- Constrain: `t: t >= 0`

Current time in physical frames (5ms).

### `G_Durability`

- Type: `float`
- Constrain: `x: 0 <= x <= 200`

Durability value of active ball.

### `G_Humidity`

- Type: `float`
- Constrain: `x: 0 <= x <= 100`

Humidity value of active ball.

### `G_CameraDirection` <badge text="Four-directional"/>

- Type: `int`
- Constrain: `x: x in {0, 1, 2, 3}`

Current camera direction. Using global reference frame, `0` means direction `Z+`, `1` means direction `X+`, `2` means direction `Z-`, `3` means direction `X-`.

### `G_CameraAngle` <badge text="Free-look"/>

- Type: `float`
- Constrain: `θ: 0 <= θ < 360`

Current camera angle. Using global reference frame, `0` means direction `Z+`, which increases clockwise.

### `G_PlayerVelocity` <badge text="Readonly" type="warning"/>

- Type: `float`
- Constrain: `v: v >= 0`

Velocity of active ball.

### `G_PlayerPositionX` `G_PlayerPositionY` `G_PlayerPositionZ` <badge text="Readonly" type="warning"/>

- Type: `float` `float` `float`

Coordinate of active ball.

### `G_CurrentBallType`

- Type: `int`
- Constrain: `x: -100 >= x >= -109`

Type of active ball.

### `C_Key_Red`

- Type: `int`
- Constrain: `n: 0 <= n < 1000`

Number of red keys.

### `C_Key_Green`

- Type: `int`
- Constrain: `n: 0 <= n < 1000`

Number of green keys.

### `C_Key_Blue`

- Type: `int`
- Constrain: `n: 0 <= n < 1000`

Number of blue keys.

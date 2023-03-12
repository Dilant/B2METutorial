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

- Type: `int | float | bool | list[float]`
- Default: `0 | 0 | false | []`

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

::: tip

When the player ball is in the pool, its humidity value may be slightly greater than 100 to prevent ignition. But don't assign a value greater than 100 to this variable。

:::

### `G_Temperature`

- Type: `float`

Temperature value of active ball.

### `G_Power`

- Type: `float`
- Constrain: `x: 0 <= x <= 100`

Power value of active ball.

### `G_Scale`

- Type: `float`
- Constrain: `x: 0.2 <= r <= 2`

Radius multiplier of active ball.

### `G_CameraDirection` <badge text="Four-directional"/>

- Type: `Literal[0, 1, 2, 3]`

Current direction of camera. Using global reference frame, `0` means direction `Z+`, `1` means direction `X+`, `2` means direction `Z-`, `3` means direction `X-`.

### `G_CameraAngle` <badge text="Free-look"/>

- Type: `float`
- Constrain: `θ: 0 <= θ < 360`

Current yaw angle of camera. Using global reference frame, `0` means direction `Z+`, which increases clockwise. The unit is degree.

### `G_CameraPitch` <badge text="Free-look"/>

- Type: `float`
- Constrain: `x: 0 <= x <= 1`

Current pitch state of camera. `0` means the minimum looking-down angle, and `1` means the maximum.

### `G_PlayerVelocity` <badge text="Readonly" type="warning"/>

- Type: `float`
- Constrain: `v: v >= 0`

Velocity of active ball.

### `G_PlayerPositionX` `G_PlayerPositionY` `G_PlayerPositionZ` <badge text="Readonly" type="warning"/>

- Type: `float` `float` `float`

Coordinate of active ball.

### `G_IsTouchGround`

- Type: `bool`

Detecting whether active ball is touching ground.

### `G_IsTouchWall`

- Type: `bool`

Detecting whether active ball is against the wall.

### `G_CurrentBallType`

- Type: `Literal`

Type of active ball.

::: details Mapping from ID to ball type

| ID     | Ball Type    |
| ------ | ------------ |
| `-100` | Wooden ball  |
| `-101` | Stone ball   |
| `-102` | Paper ball   |
| `-103` | Ice ball     |
| `-104` | Steel ball   |
| `-105` | Rubber ball  |
| `-106` | Glow ball    |
| `-107` | Balloon ball |
| `-108` | Sticky ball  |
| `-109` | Sponge ball  |

:::

### `G_IsSwitching`

- Type: `bool`

Whether player ball is switching to or appending another ball.

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

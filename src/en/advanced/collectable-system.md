# Collectable System

## Create collectables

`Create → Collectable Register`

### `Name`

- Type: `String`
- Default: empty
- Constrain: `s: ascii(s) == true`

Please ensure it an ASCII string.

If multiple collectables share the same name, only the first register in BME Pro is valid.

### `Icon`

- Type: `Texture`
- Default: empty

The collectable icon displayed at the bottom left corner.

### `Priority`

- Type: `int`
- Default: `0`

Determine the display sequence of the collectables:

- The priority of a red key is `100`, green `200` and blue `300`
- A collectable with a lower priority comes first
- If multiple collectables have the same priority, their sequence in BME Pro is followed, and the RGB keys come last

### `Always Show`

- Type: `bool`
- Default: `false`

Determine whether the collectable is displayed when its number is 0.

### `SFX`

- Type: `Audio`
- Default: empty

## Place collectables

`Create → Collectable Object`

### `Name`

- Type: `String`
- Default: empty
- Constrain: `s: ascii(s) == true`

### `Trigger Radius`

- Type: `float`
- Default: `0.5`
- Constrain: `r: r > 0`

### `Auto Rotate`

- Type: `float` `float` `float`
- Default: `0` `0` `0`

The angular velocity along each axis of the collectable. The unit is degree.

::: tip

And again, BME Pro uses a **left-handed coordinate system**.

See: [Start → Preparation → Coordinate System](/en/start/preparation.md#coordinate-system)

:::

### `Mesh`

- Type: `Mesh`
- Default: empty

### `Materials`

- Type: `Material.PBR[]`
- Default: `[]`

See: [Mesh System](/en/advanced/mesh-system.md)

## Manipulate number of collectables

When you create a collectable called `name`, a variable called `C_name` is created automatically. Edit its value and it takes effect.

- Type: `int`
- Constrain: `n: 0 <= n < 1000`

See: [Advanced → Variable System → Manipulate Variables](/en/advanced/variable-system.md#manipulate-variables)

::: tip

You can use collectable system to show some small positive integers.

![](/images/collectable-display.jpg)

:::

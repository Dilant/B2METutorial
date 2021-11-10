# Audio System

`Create → Audio Player`

## Parameter

### `Audio File`

- Type: `Audio`
- Default: empty

### `Is BGM`

- Type: `bool`
- Default: `false`

### `Loop`

- Type: `bool`
- Default: `false`

### `Volume`

- Type: `float`
- Default: `1`
- Constrain: `v: 0 <= v <= 1`

### `Spatial Audio` <badge text="Is BGM = false"/>

- Type: `bool`
- Default: `false`

Spatial audios have stereo and doppler effect.

### `Min Distance` <badge text="Spatial Audio = true"/>

- Type: `float`
- Default: `1`
- Constrain: `d: 0 <= d <= 100`

Volume begins to attenuate when the distance between camera and sound source is greater than `Min Distance`.

### `Max Distance` <badge text="Spatial Audio = true"/>

- Type: `float`
- Default: `15`
- Constrain: `d: 0 <= d <= 100`

You can't hear sounds when the distance between camera and sound source is greater than `Max Distance`.

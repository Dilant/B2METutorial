# Control and Functions

::: tip

Here's the default keymap. Most of the keys can be [changed via config file](#keymap).

:::

## Four-directional Camera Mode Control

- Move: `↑` `←` `↓` `→`
- Rotate camera: `A` clockwise, `D` anticlockwise
- Overlook: `Space`

## Free Look Camera Mode Control

- Move: `W` `A` `S` `D`
- Rotate camera: `Mouse`, same as FPS / TPS cursor movements
- 8-way snap: `Space`

## Universal Functions

- Switch player ball: `Tab`
- Pause: `ESC`
- Suicide: `R`
- Restart: `P`
- Back to main: `F9`

## Map Test Functions

- Screenshot: `F5`, saved at `%USERPROFILE%\AppData\LocalLow\Mushreb\Ballex²\Screenshots\`
- Variables Inspector: `F6`

## Config

`%USERPROFILE%\AppData\LocalLow\Mushreb\Ballex²\Settings\Settings.json`

::: tip

We recommend formatting JSON files using VSCode with extension Prettier.

:::

- `invertCameraRotate`: Invert camera rotation direction in four-directional camera mode
- `targetFrameRate`
- `invertFreeLookCameraHorizontal`: Invert camera horizontal rotation direction in free look camera mode
- `invertFreeLookCameraVertical`: Invert camera vertical movement direction in free look camera mode
- `freeLookCameraHorizontalSensitivity`
- `freeLookCameraVerticalSensitivity`
- `screenshotResolution: { "x": *, "y": * }`
- `gameResolution: { "x": *, "y": * }`
- `renderResolutionRate`
- `keys`: Keymap

## Keymap

```json
{
  "keys": [
    "Move Forward",
    "Move Backward",
    "Move Left",
    "Move Right",
    "Camera Clockwise Rotate",
    "Camera Anticlockwise Rotate",
    "Camera Overlook",
    "Function Key 1",
    "Function Key 2",
    "Function Key 3",
    "Function Key 4",
    "Free Look Move Forward",
    "Free Look Move Backward",
    "Free Look Move Left",
    "Free Look Move Right"
  ]
}
```

::: tip

Clockwise rotation of camera means anticlockwise rotation of your view (a.k.a. what you see), vice versa.

If you want to invert camera rotation direction, set `invertCameraRotate = true` instead of editing keymap directly.

:::

::: warning

Avoid using `R` `P` `Tab`, function keys or numpad keys.

:::

Here are some commonly used snippets:

```json
{
  // ↑ ↓ ← → D A _ Q W E S W S A D
  "keys": [63, 64, 61, 62, 18, 15, 1, 31, 37, 19, 33, 37, 33, 15, 18],
  // ↑ ↓ ← → D A _ Z X C V W S A D
  "keys": [63, 64, 61, 62, 18, 15, 1, 40, 38, 17, 36, 37, 33, 15, 18],
  // I K J L D A _ Q W E S W S A D
  "keys": [23, 25, 24, 26, 18, 15, 1, 31, 37, 19, 33, 37, 33, 15, 18],
  // W S A D L J _ U I O K W S A D
  "keys": [37, 33, 15, 18, 26, 24, 1, 35, 23, 29, 25, 37, 33, 15, 18],
  // W S A D E Q _ 1 2 3 4 W S A D
  "keys": [37, 33, 15, 18, 19, 31, 1, 41, 42, 43, 44, 37, 33, 15, 18],
  // W S ← → 1 ` ↑ M , . / W S A D
  "keys": [37, 33, 61, 62, 41, 4, 63, 27, 7, 8, 9, 37, 33, 15, 18]
}
```

::: details Mapping table for keys and IDs

| Key     | ID  | Key          | ID  | Key           | ID  | Key       | ID  |
| ------- | --- | ------------ | --- | ------------- | --- | --------- | --- |
| None    | 0   | `M`          | 27  | `RightAlt`    | 54  | `Numpad-` | 81  |
| `Space` | 1   | `N`          | 28  | `Ctrl`        | 55  | `Numpad.` | 82  |
| `Enter` | 2   | `O`          | 29  | `RightCtrl`   | 56  | `Numpad=` | 83  |
| `Tab`   | 3   | `P`          | 30  | `Win`         | 57  | `Numpad0` | 84  |
| `` ` `` | 4   | `Q`          | 31  | `RightWin`    | 58  | `Numpad1` | 85  |
| `'`     | 5   | `R`          | 32  | `Menu`        | 59  | `Numpad2` | 86  |
| `;`     | 6   | `S`          | 33  | `Esc`         | 60  | `Numpad3` | 87  |
| `,`     | 7   | `T`          | 34  | `←`           | 61  | `Numpad4` | 88  |
| `.`     | 8   | `U`          | 35  | `→`           | 62  | `Numpad5` | 89  |
| `/`     | 9   | `V`          | 36  | `↑`           | 63  | `Numpad6` | 90  |
| `\`     | 10  | `W`          | 37  | `↓`           | 64  | `Numpad7` | 91  |
| `[`     | 11  | `X`          | 38  | `Backspace`   | 65  | `Numpad8` | 92  |
| `]`     | 12  | `Y`          | 39  | `PageDown`    | 66  | `Numpad9` | 93  |
| `-`     | 13  | `Z`          | 40  | `PageUp`      | 67  | `F1`      | 94  |
| `=`     | 14  | `1`          | 41  | `Home`        | 68  | `F2`      | 95  |
| `A`     | 15  | `2`          | 42  | `End`         | 69  | `F3`      | 96  |
| `B`     | 16  | `3`          | 43  | `Insert`      | 70  | `F4`      | 97  |
| `C`     | 17  | `4`          | 44  | `Delete`      | 71  | `F5`      | 98  |
| `D`     | 18  | `5`          | 45  | `CapsLock`    | 72  | `F6`      | 99  |
| `E`     | 19  | `6`          | 46  | `NumLock`     | 73  | `F7`      | 100 |
| `F`     | 20  | `7`          | 47  | `PrintScreen` | 74  | `F8`      | 101 |
| `G`     | 21  | `8`          | 48  | `ScrollLock`  | 75  | `F9`      | 102 |
| `H`     | 22  | `9`          | 49  | `Pause`       | 76  | `F10`     | 103 |
| `I`     | 23  | `0`          | 50  | `NumpadEnter` | 77  | `F11`     | 104 |
| `J`     | 24  | `Shift`      | 51  | `Numpad/`     | 78  | `F12`     | 105 |
| `K`     | 25  | `RightShift` | 52  | `Numpad*`     | 79  |           |     |
| `L`     | 26  | `Alt`        | 53  | `Numpad+`     | 80  |           |     |

:::

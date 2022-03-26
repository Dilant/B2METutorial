# Control and Functions

::: tip

Here's the default keymap. Most of the keys can be [changed via config file](#keymap).

:::

## Four-directional Mode Control

- Move: `↑` `←` `↓` `→`
- Rotate view: `A` clockwise, `D` anticlockwise
- Overlook: `Space`

## Free Look Mode Control

- Move: `W` `A` `S` `D`
- Rotate view: `Mouse`, same as FPS / TPS cursor movements
- 8-way snap: `Space`

## Universal Functions

- Switch player ball: `Tab`
- Pause: `Esc`
- Hide UI elements: `F7`
- Back to main screen: `F9`
- Temporary full screen: `Alt + Enter`
- Temporary unlock all levels: `M + Enter` in main screen

## Map Test Functions

- Screenshot: `F5`, saved at `%USERPROFILE%\AppData\LocalLow\Mushreb\Ballex²\Screenshots\`
- Variables inspector: `F6`
- Ball hot-switch: `0` - `9`

## Config

`%USERPROFILE%\AppData\LocalLow\Mushreb\Ballex²\Settings\Settings.json`

::: tip

We recommend formatting JSON files using VSCode with extension Prettier.

:::

::: details Example / Default config

```json
{
  "invertCameraRotate": false,
  "targetFrameRate": 120,
  "invertFreeLookCameraHorizontal": false,
  "invertFreeLookCameraVertical": false,
  "freeLookCameraHorizontalSensitivity": 0.75,
  "freeLookCameraVerticalSensitivity": 0.75,
  "screenshotResolution": { "x": 1920, "y": 1080 },
  "gameResolution": { "x": 1920, "y": 1080 },
  "renderResolutionRate": 1.0,
  "screenSpaceReflectionQuality": 3,
  "graphicQuality": 3,
  "motionBlurQuality": 0,
  "keys": [63, 64, 61, 62, 18, 15, 1, 31, 37, 19, 33],
  "muteBGM": false
}
```

:::

- `invertCameraRotate`: Invert camera rotation direction in four-directional mode
- `targetFrameRate`
- `invertFreeLookCameraHorizontal`: Invert camera horizontal rotation direction in free look mode
- `invertFreeLookCameraVertical`: Invert camera vertical movement direction in free look mode
- `freeLookCameraHorizontalSensitivity`
- `freeLookCameraVerticalSensitivity`
- `screenshotResolution: { "x": *, "y": * }`
- `gameResolution: { "x": *, "y": * }`
- `renderResolutionRate`
- `screenSpaceReflectionQuality`: `0` off → `3` high
- `graphicQuality`: `1` low → `4` ultra
- `motionBlurQuality`: `0` off → `3` high
- `keys`: Keymap
- `muteBGM`

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

Clockwise rotation of camera means anticlockwise rotation of your view (i.e. what you see), vice versa.

If you want to invert camera rotation direction, set `invertCameraRotate = true` instead of editing keymap directly.

:::

::: warning

Avoid using `Tab`, function keys or numpad keys.

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
  // W S ← → D A ↑ M , . / W S A D
  "keys": [37, 33, 61, 62, 18, 15, 63, 27, 7, 8, 9, 37, 33, 15, 18]
}
```

::: details Mapping table for keys and IDs

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

## Steam Workshop

The last but one button at the bottom left corner.

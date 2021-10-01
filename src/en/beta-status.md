# Ballex² Beta Status

::: warning

When upgrading from a previous version to `0.7.3` or a newer one, please upgrade all assets:

- `Edit → Upgrade Assets` to upgrade everything except audios
- Delete and re-add audios. Be aware that only `.ogg` format is supported

:::

## Description

- Anyone owning Ballex can take part in it
- The latest version
  - Public: `0.7.2 β` @ 2021/10/1
  - Insider: `0.7.3b2 α` @ 2021/10/1
- Require Windows 10 x64 20H1 or newer version, and a graphics card supporting DirectX 12
- Beta will end with the first release of Ballex². The beta channel will no longer receive updates nor supports since then, and a separate purchase for stable releases is required
- Outstanding testers may get Ballex² Steam key

## Control and Functions

::: tip

Here's the default keymap. Most of the keys can be [changed via config file](#keymap).

:::

### Four-directional Camera Mode Control

- Move: `↑` `←` `↓` `→`
- Rotate camera: `A` clockwise, `D` anticlockwise
- Overlook: `Space`

### Free Look Camera Mode Control

- Move: `W` `A` `S` `D`
- Rotate camera: `Mouse`, same as FPS / TPS cursor movements
- 8-way snap: `Space`

### Universal Functions

- Switch player ball: `Tab`
- Pause: `ESC`
- Suicide: `R`
- Restart: `P`
- Back to main: `F9`

### Map Test Functions

- Screenshot: `F5`, saved at `%USERPROFILE%\AppData\LocalLow\Mushreb\Ballex²\Screenshots\`
- Variables Inspector: `F6`

### Config

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

### Keymap

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

## Changelog

### `0.7.3b4 α` `0.7.3 β` @ 2021/10/1

- Add lava pools
- Fix the issue with road generators when it has more than 32 segments
- Fix the size of pools
- Fix the issue with buoyancy of pools scaled along `Y` axis
- Add water and lava materials to built-in assets
- Include _Topo Trip_, a technical map by Aeka

### `0.7.3b3 α` @ 2021/9/30

- Level description will show in loading page now
- Change effect of texture emission
- The max number of segments in a road generator changes from 32 to 128
- Add musics by STERD and Aeka to built-in assets
- Changes to built-in levels
  - Fix the set camera offset executors in official level 1
  - **_Ordinary_ (原)** by Dilant adds section #3 and BGM
  - Add _Flamire_, a casual map by STERD

### `0.7.3 α` `0.7.3b2 α` @ 2021/9/29

- Optimize compression rate of textures and audios by a great margin
- Switch to another import method for audios, which supports `.ogg` only
- Camera offset setting is added to export window
- Add lots of audios to built-in assets

### `0.7.2 β` @ 2021/9/28

- Add keymap setting for free look camera mode
- Level name will show in game now
- Changes to built-in levels
  - Official level 1 changes to snowy weather
  - Minor fixes of **_First Try_** by Aeka
  - Add **_Strato Run_**, a casual map by Aeka
  - Add **_Ordinary_ (原)**, a logical map by Dilant
  - Add **_Ball's Last Tour: Top Floor_ (木球终末旅行·顶层)**, a landscape map by Ding~ao
  - Add a technical map by Matt
  - Add a casual map by Z Red

### `0.7.2b2 α` @ 2021/9/20

- Add keymap setting
- Adjust range of visibility in game
- Slightly adjust properties of balls and machinery
- Fix the issue that score ball traces aren't reset upon restart
- Change start position of score ball traces upon reborn
- Add materials for balls to built-in assets

### `0.7.2 α` @ 2021/9/19

- The default camera offset changes from `(0, 3.5, -4.25)` to `(0, 4, -3.5)`
- Add animations of appenders
- Change the behaviors when inactive player balls activate checkpoints, destination, switchers or appenders
- Change the behavior of score ball trace upon death or winning
- Slightly weaken friction of some materials
- Fix the issue that ice ball can get electric balls
- Add a key to go back to main screen
- Fix some issues related to screenshot function
- Fix the issue that some sound effects don't pause with game pause

### `0.7.1b2 α` `0.7.1 β` @ 2021/9/17

- Fix an issue that blocks screenshot function in free look camera mode
- Add add-to-favorites function for asset folders
- Add a function to import directories as asset folders
- Remove drop-in import method
- Fix the issue that the default folder is not selected when switching panels in `Assets` window
- Fix acrylic effect of editor UI
- Include a landscape map by Aeka

### `0.7.1 α` @ 2021/9/17

- All official assets are built in and showed as blue directories
- Add fall stone machinery
- Add collider welding function
- Fix a selection field issue of road generators
- Fix texture issues of road generators with varied width and concave
- Fix a rendering issue with fade-out effect of pillars

### `0.7.0b2 α` `0.7.0 β` @ 2021/9/12

- Switch camera target executor
  - Fix the issue that camera isn't reset on life start
  - Fix the issue that camera isn't reset when the target is destroyed
  - Fix the issue that camera motion is always determined by player ball

### `0.7.0 α` @ 2021/9/12

- Add variable mechanism
- Triggers
  - Add physics frame trigger
  - Add switch mode for input trigger
  - Input trigger can refer to player keys
- Add executors
  - Set camera offset
  - Set variable value
  - Compare variables
  - Disable player key
  - Switch camera target
- Fix game crash when taking screenshots while the save folder does't exist
- Camera mode setting is moved to export window
- Include a casual map by MushREB

### `0.6.8b2 α` @ 2021/9/11

- Fix a visibility issue with skybox
- Fix collider of rocks, stairs, etc.

### `0.6.8 β` @ 2021/9/10

- First beta version
- Include a casual map by z2414

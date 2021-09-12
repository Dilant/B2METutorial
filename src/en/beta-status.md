# Ballex² Beta Status

## Description

- Anyone owning Ballex can take part in it
- The latest version is `0.7.0` @ 2021/9/12
- Require Windows 10 x64 or newer version
- Beta will end with the first release of Ballex². The beta channel will no longer receive updates nor supports since then, and a separate purchase for stable releases is required
- Outstanding testers may get Ballex² Steam key

## Control and Functions

### Four-directional Camera Mode Control

- Move: `↑` `←` `↓` `→`
- Rotate camera: `A` clockwise, `D` anticlockwise
- Overlook: `Space`

### Free Look Camera Mode Control

- Move: `W` `A` `S` `D`
- Rotate camera: `Mouse`, same as FPS cursor movements
- 8-way snap: `Space`

### Universal Functions

- Switch player ball: `Tab`
- Pause: `ESC`
- Suicide: `R`
- Restart: `P`

### Map Test Functions

- Screenshot: `F5`, saved at `%USERPROFILE%\AppData\LocalLow\Mushreb\Ballex²\Screenshots\`
- Variables Inspector: `F6`

### Settings

`%USERPROFILE%\AppData\LocalLow\Mushreb\Ballex²\Settings\Settings.json`

- `invertCameraRotate`: Swap view rotation directions of `A` `D` in four-directional camera mode
- `targetFrameRate`
- `invertFreeLookCameraHorizontal`
- `invertFreeLookCameraVertical`
- `freeLookCameraHorizontalSensitivity`
- `freeLookCameraVerticalSensitivity`
- `screenshotResolution: { "x": *, "y": * }`
- `gameResolution: { "x": *, "y": * }`
- `renderResolutionRate`

## Changelog

### `0.7.0b2` @ 2021/9/12

- Switch camera target executor
  - Fix problem that camera isn't reset on life start
  - Fix problem that camera isn't reset when the target is destroyed
  - Fix problem that camera motion is always determined by player ball
- Try to fix issues related to quitting game

### `0.7.0` @ 2021/9/12

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
- Camera mode setting moved to export window

### `0.6.8b2` @ 2021/9/11

- Fix visibility problem with skybox
- Fix collider of rocks, stairs, etc

### `0.6.8` @ 2021/9/10

- First beta version
- Include an easy map created by z2414

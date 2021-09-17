# Ballex² Beta Status

## Description

- Anyone owning Ballex can take part in it
- The latest version
  - Public: `0.7.1 β` @ 2021/9/17
  - Insider: `0.7.1b2 α` @ 2021/9/17
- Require Windows 10 x64 20H1 or newer version, and a graphics card supporting DirectX 12
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

### Config

`%USERPROFILE%\AppData\LocalLow\Mushreb\Ballex²\Settings\Settings.json`

- `invertCameraRotate`: Swap camera rotation direction of `A` `D` in four-directional camera mode
- `targetFrameRate`
- `invertFreeLookCameraHorizontal`: Invert camera horizontal rotation direction in free look camera mode
- `invertFreeLookCameraVertical`: Invert camera vertical movement direction in free look camera mode
- `freeLookCameraHorizontalSensitivity`
- `freeLookCameraVerticalSensitivity`
- `screenshotResolution: { "x": *, "y": * }`
- `gameResolution: { "x": *, "y": * }`
- `renderResolutionRate`

## Changelog

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
- Include an easy map by z2414

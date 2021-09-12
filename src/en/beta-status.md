# Ballex² Beta Status

## Description

- Anyone owning Ballex can take part in it
- The latest version is `0.7.0` @ 2021/9/12
- Require Windows 10 x64 or newer version
- Beta will end with the first release of Ballex². The beta channel will no longer receive updates nor supports since then, and a separate purchase for stable releases is required
- Outstanding testers may get Ballex² Steam key

## Control and Functions

### Standard Mode Control

- Move: `↑` `←` `↓` `→`
- Rotate view: `A` clockwise, `D` anti-clockwise
- Lift view: `Space`

### Free Look View Control

- Move: `W` `A` `S` `D`
- Rotate view: `Mouse`, same as FPS cursor movements
- 8-way view snap: `Space`

### Universal Functions

- Pause: `ESC`
- Suicide: `R`
- Restart: `P`

### Map Test Functions

- Screenshot: `F5`, saved at `%USERPROFILE%\AppData\LocalLow\Mushreb\Ballex²\Screenshots\`
- Variables Inspector: `F6`

### Settings

`%USERPROFILE%\AppData\LocalLow\Mushreb\Ballex²\Settings\Settings.json`

- `invertCameraRotate`: Swap view rotation directions of `A` `D` in standard mode
- `targetFrameRate`
- `invertFreeLookCameraHorizontal`
- `invertFreeLookCameraVertical`
- `freeLookCameraHorizontalSensitivity`
- `freeLookCameraVerticalSensitivity`
- `screenshotResolution: { "x": *, "y": * }`
- `gameResolution: { "x": *, "y": * }`
- `renderResolutionRate`

## Changelog

### `0.7.0` @ 2021/9/12

~~TODO: 一时翻不动 挂着先~~

- 新增变量机制
- 触发器
  - 新增物理帧触发器
  - 按键触发器新增开关模式
  - 按键触发器可引用玩家设定的功能键
- 新增执行器
  - 按键屏蔽
  - 摄像机偏移
  - 更改摄像机目标
  - 设置变量
  - 比较变量
- 修复截图文件夹不存在时截图卡死的问题

### `0.6.8b2` @ 2021/9/11

- Fix visibility problem with skybox
- Fix collider of rocks, stairs, etc

### `0.6.8` @ 2021/9/10

- First beta version
- Include an easy map created by z2414

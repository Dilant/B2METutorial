# 按键与功能

::: tip

以下为默认键位，大多数按键可[在配置文件中修改](#键位)。

:::

## 四向视角模式操作

- 移动：`↑` `←` `↓` `→`
- 旋转视角：`A` 顺时针，`D` 逆时针
- 抬升视角：`Space`

## 自由视角模式操作

- 移动：`W` `A` `S` `D`
- 转动视角：`鼠标`，遵循 FPS / TPS 准星移动方向
- 视角八向锁定：`Space`

## 通用功能

- 切换玩家球：`Tab`
- 暂停：`Esc`
- 隐藏界面元素：`F7`
- 返回主界面：`F9`
- 临时全屏：`Alt + Enter`
- 临时解锁全关：在主界面 `M + Enter`

## 测图功能

- 截图：`F5`，保存在 `%USERPROFILE%\AppData\LocalLow\Mushreb\Ballex²\Screenshots\`
- 变量检视器：`F6`
- 快速变球：`0` - `9`

## 配置

`%USERPROFILE%\AppData\LocalLow\Mushreb\Ballex²\Settings\Settings.json`

::: tip

推荐使用 VSCode 并安装 Prettier 插件用于格式化 JSON 文件。

:::

::: details 示例 / 默认配置

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

- `invertCameraRotate`：反转四向视角模式视角旋转方向
- `targetFrameRate`：限定帧率
- `invertFreeLookCameraHorizontal`：反转自由视角模式视角水平旋转方向
- `invertFreeLookCameraVertical`：反转自由视角模式视角竖直移动方向
- `freeLookCameraHorizontalSensitivity`：自由视角模式视角水平旋转灵敏度
- `freeLookCameraVerticalSensitivity`：自由视角模式视角竖直移动灵敏度
- `screenshotResolution: { "x": *, "y": * }`：截图分辨率
- `gameResolution: { "x": *, "y": * }`：游戏分辨率
- `renderResolutionRate`：渲染比例
- `screenSpaceReflectionQuality`: 屏幕空间反射，`0` 关闭 → `3` 高质量
- `graphicQuality`: 画面质量，`1` 低 → `4` 极高
- `motionBlurQuality`: 运动模糊，`0` 关闭 → `3` 高质量
- `keys`：键位
- `muteBGM`：关闭背景音乐

## 键位

```json
{
  "keys": [
    "向前移动",
    "向后移动",
    "向左移动",
    "向右移动",
    "摄像机顺时针旋转",
    "摄像机逆时针旋转",
    "摄像机俯视",
    "功能键 1",
    "功能键 2",
    "功能键 3",
    "功能键 4",
    "自由视角向前移动",
    "自由视角向后移动",
    "自由视角向左移动",
    "自由视角向右移动"
  ]
}
```

::: tip

摄像机顺时针旋转，即为视角（你看到的东西）逆时针旋转，反之亦然。

如果需要交换旋转方向，请设置 `invertCameraRotate = true`，不要直接编辑键位。

:::

::: warning

请避免设置 `Tab`，功能键或小键盘。

:::

以下为一些常用配置：

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

::: details 按键与编号的对应关系

| 编号 | 按键    | 编号 | 按键         | 编号 | 按键          | 编号 | 按键      |
| ---- | ------- | ---- | ------------ | ---- | ------------- | ---- | --------- |
| 0    | 空      | 27   | `M`          | 54   | `RightAlt`    | 81   | `Numpad-` |
| 1    | `Space` | 28   | `N`          | 55   | `Ctrl`        | 82   | `Numpad.` |
| 2    | `Enter` | 29   | `O`          | 56   | `RightCtrl`   | 83   | `Numpad=` |
| 3    | `Tab`   | 30   | `P`          | 57   | `Win`         | 84   | `Numpad0` |
| 4    | `` ` `` | 31   | `Q`          | 58   | `RightWin`    | 85   | `Numpad1` |
| 5    | `'`     | 32   | `R`          | 59   | `Menu`        | 86   | `Numpad2` |
| 6    | `;`     | 33   | `S`          | 60   | `Esc`         | 87   | `Numpad3` |
| 7    | `,`     | 34   | `T`          | 61   | `←`           | 88   | `Numpad4` |
| 8    | `.`     | 35   | `U`          | 62   | `→`           | 89   | `Numpad5` |
| 9    | `/`     | 36   | `V`          | 63   | `↑`           | 90   | `Numpad6` |
| 10   | `\`     | 37   | `W`          | 64   | `↓`           | 91   | `Numpad7` |
| 11   | `[`     | 38   | `X`          | 65   | `Backspace`   | 92   | `Numpad8` |
| 12   | `]`     | 39   | `Y`          | 66   | `PageDown`    | 93   | `Numpad9` |
| 13   | `-`     | 40   | `Z`          | 67   | `PageUp`      | 94   | `F1`      |
| 14   | `=`     | 41   | `1`          | 68   | `Home`        | 95   | `F2`      |
| 15   | `A`     | 42   | `2`          | 69   | `End`         | 96   | `F3`      |
| 16   | `B`     | 43   | `3`          | 70   | `Insert`      | 97   | `F4`      |
| 17   | `C`     | 44   | `4`          | 71   | `Delete`      | 98   | `F5`      |
| 18   | `D`     | 45   | `5`          | 72   | `CapsLock`    | 99   | `F6`      |
| 19   | `E`     | 46   | `6`          | 73   | `NumLock`     | 100  | `F7`      |
| 20   | `F`     | 47   | `7`          | 74   | `PrintScreen` | 101  | `F8`      |
| 21   | `G`     | 48   | `8`          | 75   | `ScrollLock`  | 102  | `F9`      |
| 22   | `H`     | 49   | `9`          | 76   | `Pause`       | 103  | `F10`     |
| 23   | `I`     | 50   | `0`          | 77   | `NumpadEnter` | 104  | `F11`     |
| 24   | `J`     | 51   | `Shift`      | 78   | `Numpad/`     | 105  | `F12`     |
| 25   | `K`     | 52   | `RightShift` | 79   | `Numpad*`     |      |           |
| 26   | `L`     | 53   | `Alt`        | 80   | `Numpad+`     |      |           |

:::

## Steam 创意工坊

左下角倒数第 2 个按钮。

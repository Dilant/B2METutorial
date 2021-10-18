# 按键与功能

::: tip

以下为默认键位，大多数按键可[在配置文件中修改](#键位)。

:::

## 四向视角摄像机模式操作

- 移动：`↑` `←` `↓` `→`
- 旋转视角：`A` 顺时针，`D` 逆时针
- 抬升视角：`Space`

## 自由视角摄像机模式操作

- 移动：`W` `A` `S` `D`
- 旋转视角：`鼠标`，遵循 FPS / TPS 准星移动方向
- 视角八向锁定：`Space`

## 通用功能

- 切换玩家球：`Tab`
- 暂停：`ESC`
- 自杀：`R`
- 重开：`P`
- 返回主界面：`F9`

## 测图功能

- 截图：`F5`，保存在 `%USERPROFILE%\AppData\LocalLow\Mushreb\Ballex²\Screenshots\`
- 变量检视器：`F6`

## 配置

`%USERPROFILE%\AppData\LocalLow\Mushreb\Ballex²\Settings\Settings.json`

::: tip

推荐使用 VSCode 并安装 Prettier 插件用于格式化 JSON 文件。

:::

- `invertCameraRotate`：反转四向视角摄像机模式视角旋转方向
- `targetFrameRate`：限定帧率
- `invertFreeLookCameraHorizontal`：反转自由视角摄像机模式视角水平旋转方向
- `invertFreeLookCameraVertical`：反转自由视角摄像机模式视角竖直移动方向
- `freeLookCameraHorizontalSensitivity`：自由视角摄像机模式视角水平旋转灵敏度
- `freeLookCameraVerticalSensitivity`：自由视角摄像机模式视角竖直移动灵敏度
- `screenshotResolution: { "x": *, "y": * }`：截图分辨率
- `gameResolution: { "x": *, "y": * }`：游戏分辨率
- `renderResolutionRate`：渲染比例
- `keys`：键位

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

请避免设置 `R` `P` `Tab`，功能键或小键盘。

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
  // W S ← → 1 ` ↑ M , . / W S A D
  "keys": [37, 33, 61, 62, 41, 4, 63, 27, 7, 8, 9, 37, 33, 15, 18]
}
```

::: details 按键与编号的对应关系

| 按键    | 编号 | 按键         | 编号 | 按键          | 编号 | 按键      | 编号 |
| ------- | ---- | ------------ | ---- | ------------- | ---- | --------- | ---- |
| 空      | 0    | `M`          | 27   | `RightAlt`    | 54   | `Numpad-` | 81   |
| `Space` | 1    | `N`          | 28   | `Ctrl`        | 55   | `Numpad.` | 82   |
| `Enter` | 2    | `O`          | 29   | `RightCtrl`   | 56   | `Numpad=` | 83   |
| `Tab`   | 3    | `P`          | 30   | `Win`         | 57   | `Numpad0` | 84   |
| `` ` `` | 4    | `Q`          | 31   | `RightWin`    | 58   | `Numpad1` | 85   |
| `'`     | 5    | `R`          | 32   | `Menu`        | 59   | `Numpad2` | 86   |
| `;`     | 6    | `S`          | 33   | `Esc`         | 60   | `Numpad3` | 87   |
| `,`     | 7    | `T`          | 34   | `←`           | 61   | `Numpad4` | 88   |
| `.`     | 8    | `U`          | 35   | `→`           | 62   | `Numpad5` | 89   |
| `/`     | 9    | `V`          | 36   | `↑`           | 63   | `Numpad6` | 90   |
| `\`     | 10   | `W`          | 37   | `↓`           | 64   | `Numpad7` | 91   |
| `[`     | 11   | `X`          | 38   | `Backspace`   | 65   | `Numpad8` | 92   |
| `]`     | 12   | `Y`          | 39   | `PageDown`    | 66   | `Numpad9` | 93   |
| `-`     | 13   | `Z`          | 40   | `PageUp`      | 67   | `F1`      | 94   |
| `=`     | 14   | `1`          | 41   | `Home`        | 68   | `F2`      | 95   |
| `A`     | 15   | `2`          | 42   | `End`         | 69   | `F3`      | 96   |
| `B`     | 16   | `3`          | 43   | `Insert`      | 70   | `F4`      | 97   |
| `C`     | 17   | `4`          | 44   | `Delete`      | 71   | `F5`      | 98   |
| `D`     | 18   | `5`          | 45   | `CapsLock`    | 72   | `F6`      | 99   |
| `E`     | 19   | `6`          | 46   | `NumLock`     | 73   | `F7`      | 100  |
| `F`     | 20   | `7`          | 47   | `PrintScreen` | 74   | `F8`      | 101  |
| `G`     | 21   | `8`          | 48   | `ScrollLock`  | 75   | `F9`      | 102  |
| `H`     | 22   | `9`          | 49   | `Pause`       | 76   | `F10`     | 103  |
| `I`     | 23   | `0`          | 50   | `NumpadEnter` | 77   | `F11`     | 104  |
| `J`     | 24   | `Shift`      | 51   | `Numpad/`     | 78   | `F12`     | 105  |
| `K`     | 25   | `RightShift` | 52   | `Numpad*`     | 79   |           |      |
| `L`     | 26   | `Alt`        | 53   | `Numpad+`     | 80   |           |      |

:::

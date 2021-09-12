# Ballex² 公测进度

## 机制

- 所有拥有 Ballex 的玩家均可参与公测
- 目前最新版是 `0.7.0` @ 2021/9/12
- 系统要求为 Windows 10 x64 或更高
- 公测将在 Ballex² 正式发布前结束，届时测试通道将停止更新，正式版需单独购买
- 贡献突出的测试者有机会获得 Ballex² 激活码

## 按键与功能

### 标准模式操作

- 移动：`↑` `←` `↓` `→`
- 旋转视角：`A` 顺时针，`D` 逆时针
- 抬升视角：`Space`

### 自由视角模式操作

- 移动：`W` `A` `S` `D`
- 旋转视角：`鼠标`，遵循 FPS 准星移动方向
- 视角八向锁定：`Space`

### 通用功能

- 暂停：`ESC`
- 自杀：`R`
- 重开：`P`

### 测图功能

- 截图：`F5`，保存在 `%USERPROFILE%\AppData\LocalLow\Mushreb\Ballex²\Screenshots\`
- 变量检视器：`F6`

### 配置

`%USERPROFILE%\AppData\LocalLow\Mushreb\Ballex²\Settings\Settings.json`

- `invertCameraRotate`：交换标准模式 `A` `D` 视角旋转方向
- `targetFrameRate`：限定帧率
- `invertFreeLookCameraHorizontal`：反转自由视角模式视角水平旋转方向
- `invertFreeLookCameraVertical`：反转自由视角模式视角竖直移动方向
- `freeLookCameraHorizontalSensitivity`：自由视角模式视角水平旋转灵敏度
- `freeLookCameraVerticalSensitivity`：自由视角模式视角竖直移动灵敏度
- `screenshotResolution: { "x": *, "y": * }`：截图分辨率
- `gameResolution: { "x": *, "y": * }`：游戏分辨率
- `renderResolutionRate`：渲染比例

## 更新日志

### `0.7.0` @ 2021/9/12

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

- 修复天空盒不显示的问题
- 修复岩石、楼梯等元件的碰撞箱

### `0.6.8` @ 2021/9/10

- 第一个公测版本
- 内置 z2414 制作的简单图

# Release

## 准备封面

### 截图

- 进入测图模式：`File → Export BMS → Test Map`
- 进入截图功能：`F5`
  - `Mouse` 转动视角
  - `WASD` 移动，`Q` 上升，`E` 下降
  - 按住 `Shift` 可加速移动
  - `Enter` 完成截图
- 截图保存在 `%USERPROFILE%\AppData\LocalLow\Mushreb\Ballex²\Screenshots\`

### 自己制作

你也可以自己制作封面，要求为：

- `.png` 或 `.jpg` 格式
- 画面比例为 16:9，推荐分辨率为 1920×1080
- 契合地图主题

## 导入封面

在 `Assets → Textures` 面板，点击右栏加号导入封面。

::: warning

导入的图片无法再导出，如有必要，请自己留存源文件。

:::

## 导出 `.bms` 文件

`File → Export BMS`

![](/images/level-info-legend.jpg)

### `Author Name`

- Type: `str`
- Default: Steam nickname

### `Author Steam ID`

- Type: `const int`

### `Level Name`

- Type: `str`
- Default: empty

请在此处只填写**源语言**。例如中文为源语言、英文为翻译时，只填写中文。

### `Level Description`

- Type: `str`
- Default: empty

请在此处只填写**源语言**。例如中文为源语言、英文为翻译时，只填写中文。

### `Initial Ball Type`

- Type: `enum`
- Default: `Wooden Ball`

### `Camera Mode`

- Type: `enum`
- Default: `Four-directional Camera`

::: danger

驾驶视角模式正在制作，目前请勿使用。

:::

### `Difficulty`

- Type: `int`
- Default: `0`
- Constrain: `x: 0 <= x <= 10`

难度分级为：

- `EASY: 0, 1`
- `NORMAL: 2, 3, 4`
- `HARD: 5, 6, 7`
- `EXPERT: 8, 9`
- `MASTER: 10`

### `Gravity`

- Type: `float` `float` `float`
- Default: `0` `-18` `0`

### `Camera Offset`

- Type: `float` `float` `float`
- Default: `0` `4` `-3.5`

### `Version`

- Type: `int` `int` `int`
- Default: `0` `0` `0`

~~小编也不知道为什么它能填负数~~

### `Cover`

- Type: `Texture`
- Default: empty

将 `Assets → Textures` 面板中的图片拖入此处。

## 上传到 Steam 创意工坊

`File → Upload to Workshop`

![](/images/steam-info-legend.jpg)

### `Upload Mode`

- Type: `enum`
- Default: `Create`

此处请选择 `Create`。

### `Title`

- Type: `str`
- Default: empty

请在此处只填写**英文**。如果没有英文翻译，请只填写源语言。

### `Description`

- Type: `str`
- Default: empty

请在此处只填写**英文**。如果没有英文翻译，请只填写源语言。

### `Tag`

- Type: `enum`
- Default: `Racing`

### `Cover`

- Type: `Texture`
- Default: empty

将 `Assets → Textures` 面板中的图片拖入此处。

## 更新地图

`File → Upload to Workshop`

### `Upload Mode`

- Type: `enum`
- Default: `Create`

此处请选择 `Update`。

### `Workshop File ID`

- Type: `int`
- Default: empty

在创意工坊网页中找到你的地图，点击分享，链接中 `id=` 后面的数字即为文件 ID。

### `Change Note`

- Type: `str`
- Default: empty

请在此处只填写**英文**。如果没有英文翻译，请只填写源语言。

## 更新其它语言的地图信息

![](/images/steam-info-localization.jpg)

### 标题与描述

- 在创意工坊网页中找到你的地图
- 点击编辑标题与描述
- 语言选择简体中文（或待更新的其它语言）
- 修改并保存

### 改动说明

- 在创意工坊网页中找到你的地图
- 点击改动说明
- 点击对应条目的编辑按钮
- 语言选择简体中文（或待更新的其它语言）
- 修改并保存

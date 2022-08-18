# Release

## Prepare a Cover

### Take a Screenshot

- 进入测图模式：`File → Export BMS → Test Map`
- 进入截图功能：`F5`
  - `Mouse` 转动视角
  - `WASD` 移动，`Q` 上升，`E` 下降
  - 按住 `Shift` 可加速移动
  - `Enter` 完成截图
- 截图保存在 `%USERPROFILE%\AppData\LocalLow\Mushreb\Ballex²\Screenshots\`

### Do it Yourself

你也可以自己制作封面，要求为：

- `.png` 或 `.jpg` 格式
- 画面比例为 16:9，推荐分辨率为 1920×1080
- 契合地图主题

## Import Cover

在 `Assets → Textures` 面板，点击右栏加号导入封面。

::: warning

导入的图片无法再导出，如有必要，请自己留存源文件。

:::

## Export `.bms` File

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

- Type: `Literal`
- Default: `Wooden Ball`

### `Camera Mode`

- Type: `Literal`
- Default: `Four-directional Camera`

::: danger

驾驶视角模式正在制作，目前请勿使用。

:::

### `Difficulty`

- Type: `int`
- Default: `0`
- Constrain: `x: 0 <= x <= 10`

The difficulty levels are:

- Easy: `0` `1`
- Normal: `2` `3` `4`
- Hard: `5` `6` `7`
- Expert: `8` `9`
- Master: `10`

### `Gravity`

- Type: `float` `float` `float`
- Default: `0` `-18` `0`

### `Camera Offset`

- Type: `float` `float` `float`
- Default: `0` `4` `-3.5`

### `Version`

- Type: `int` `int` `int`
- Default: `0` `0` `0`

~~I don't know why but negative integers will work~~

### `Cover`

- Type: `Texture`
- Default: empty

Drag an image in `Assets → Textures` panel and drop it here.

## Upload to Steam Workshop

`File → Upload to Workshop`

![](/images/steam-info-legend.jpg)

### `Upload Mode`

- Type: `Literal`
- Default: `Create`

Select `Create` here.

### `Title`

- Type: `str`
- Default: empty

请在此处只填写**英文**。如果没有英文翻译，请只填写源语言。

### `Description`

- Type: `str`
- Default: empty

请在此处只填写**英文**。如果没有英文翻译，请只填写源语言。

### `Tag`

- Type: `Literal`
- Default: `Racing`

### `Cover`

- Type: `Texture`
- Default: empty

Drag an image in `Assets → Textures` panel and drop it here.

## Update Level

`File → Upload to Workshop`

### `Upload Mode`

- Type: `Literal`
- Default: `Create`

Select `Update` here.

### `Workshop File ID`

- Type: `int`
- Default: empty

在创意工坊网页中找到你的地图，点击分享，链接中 `id=` 后面的数字即为文件 ID。

### `Change Note`

- Type: `str`
- Default: empty

请在此处只填写**英文**。如果没有英文翻译，请只填写源语言。

## Update Level Info in Other Languages

![](/images/steam-info-localization.jpg)

### Title and Description

- 在创意工坊网页中找到你的地图
- 点击 `Edit title & description`
- 语言选择简体中文（或待更新的其它语言）
- 修改并保存

### Change Note

- 在创意工坊网页中找到你的地图
- 点击 `Change Notes`
- 点击对应条目的编辑按钮
- 语言选择简体中文（或待更新的其它语言）
- 修改并保存

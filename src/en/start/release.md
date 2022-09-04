# Release

## Prepare a Cover

### Take a Screenshot

- Enter test map mode: `File → Export BMS → Test Map`
- Enter screenshot function: `F5`
  - `Mouse` to rotate your view
  - `W` `A` `S` `D` to move, `Q` to go up and `E` down
  - Hold `Shift` to dash
  - `Enter` to take a screenshot
- Screenshots are saved at `%USERPROFILE%\AppData\LocalLow\Mushreb\Ballex²\Screenshots\`

### Do it Yourself

You can also design a custom cover, providing that:

- `.png` or `.jpg` format
- 16:9 ratio, 1920×1080 recommended
- It fits the level theme

## Import Cover

In `Assets → Textures` panel, click the plus sign in the right column to import the cover.

::: warning

You can't re-export the imported files, so keep the source files if necessary.

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

Please write in **source language** only.

### `Level Description`

- Type: `str`
- Default: empty

Please write in **source language** only.

### `Initial Ball Type`

- Type: `Literal`
- Default: `Wooden Ball`

### `Camera Mode`

- Type: `Literal`
- Default: `Four-directional Camera`

::: danger

We're still working on the driving camera mode, don't use it now.

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

### `Environment Temperature`

- Type: `float`
- Default: `0`

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

Please write in **English** only, or source language instead.

### `Description`

- Type: `str`
- Default: empty

Please write in **English** only, or source language instead.

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

Find your map in the workshop website, click the share button, and copy the number after `id=` in the link.

### `Change Note`

- Type: `str`
- Default: empty

Please write in **English** only, or source language instead.

## Update Level Info in Other Languages

![](/images/steam-info-localization.jpg)

### Title and Description

- Find your map in the workshop website
- Click `Edit title & description`
- Choose the language you want to update
- Edit and save

### Change Note

- Find your map in the workshop website
- Click `Change Notes`
- Click the edit button of the corresponding note
- Choose the language you want to update
- Edit and save

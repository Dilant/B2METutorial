# Terrain System

`Create → Terrain`

制图器中自带一个示例地形。

## Basic Parameter

修改基本参数后，请点击 `Refresh` 按钮应用更改。

### `Terrain Quality`

- Type: `enum{Low, Medium, High}`
- Default: `Medium`

::: danger

请在制作地形前确定地形质量，中途修改将清空地形。

:::

### `Terrain Mesh Quality`

- Type: `enum{0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10}`
- Default: `6`

### `Terrain Size`

- Type: `float` `float` `float`
- Default: `250` `150` `250`
- Constrain: `x: x > 0` `y: y > 0` `z: z > 0`

### `Terrain Materials`

- Type: `Material.Terrain[]`
- Default:

```
[
    Materials/Terrain/GrassGreen.mat,
    Materials/Terrain/GrassYellow.mat,
    Materials/Terrain/CliffDark.mat,
    Materials/Terrain/CliffBright.mat
]
```

- Constrain: `l: len(l) <= 4`

内置地形材质位于 `Assets → Materials → Terrain`。

由于分布图通道限制，每个地形最多使用四种材质，多余的材质不生效。

## Terrain Painter

### 升降地形工具

- 按住 `MouseLeft` 并拖动可抬高地形
- 按住 `Shift + MouseLeft` 并拖动可降低地形

### 平整地形工具

- 按住 `MouseLeft` 并拖动可升降地形至设定高度
- `Shift + MouseLeft` 可读取当前位置的高度
- 点击 `Flatten Terrain` 可将**整个地形**设为指定高度

### 平滑地形工具

- 按住 `MouseLeft` 并拖动可平滑地形

### 材质绘制工具

- 选择所需的 `Terrain Materials`
- 按住 `MouseLeft` 并拖动可绘制材质

## Brushes

### `Style`

- Type: `TerrainBrush`
- Default: circle

在 `Assets → Textures → _TerrainBrush` 文件夹中导入 `.png` 图片（仅 `A` 通道生效），点击 `Edit → Refresh Brushes` 后可以使用自定义笔刷。

### `Brush Size`

- Type: `float`
- Default: `2.5`
- Constrain: `x: 0.5 <= x <= 100`

### `Brush Opacity`

- Type: `int`
- Default: `100`
- Constrain: `α: 0 <= α <= 100`

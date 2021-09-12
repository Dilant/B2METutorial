# 材质系统

## 准备纹理贴图

BME Pro 的材质系统为蘑菇特制的 PBR 材质系统，每个材质包含三张 1024×1024 `.png` 贴图文件。

### 漫射贴图

`RGB` 通道：漫射颜色。（必需）
`A` 通道：深度或不透明度。（可选，不使用留白色）

![](/images/texture-albedo.jpg)

### 法线贴图

`RGB` 通道：表面法线方向。可以模拟出物体的凹凸感。（可选，不使用则不导入）
`A` 通道：~~暂无用途~~

![](/images/texture-normal.jpg)

::: tip

在 Adobe Photoshop 中，可以使用 `滤镜 → 3D → 生成法线图……` 功能生成法线贴图。

:::

### 遮罩贴图

`R` 通道：自发光贴图。越接近白色自发光越强。（可选，不使用留黑色）
![](/images/texture-mask-r.jpg)

`G` 通道：光滑度贴图。越接近白色越光滑，光滑度将会影响材质的反光程度。（可选，不使用留黑色）
![](/images/texture-mask-g.jpg)

`B` 通道：金属度贴图。越接近白色越体现金属反光特性。（可选，不使用留黑色）
![](/images/texture-mask-b.jpg)

`A` 通道：环境光遮蔽贴图。用于模拟角落等位置光线吸收的特性。（可选，不使用留白色）
![](/images/texture-mask-a.jpg)

## 导入纹理

在 `Assets → Textures` 窗口中，点击右栏加号，选择图片即可导入。

目前 BME Pro 中暂不支持重命名纹理，可以在 `%USERPROFILE%\AppData\LocalLow\Mushreb\BME Pro\Assets\Textures` 中直接修改文件名。

## 创建材质

在 `Assets → Textures` 窗口中，点击右栏加号创建材质，双击材质进行编辑。

点击 `Save` 将保存材质，点击 `Reload` 或关闭窗口将放弃更改。

### `Albedo`

- Type: `Texture`
- Default: empty

漫射贴图。可将导入的纹理直接拖入此处。

### `Normal`

- Type: `Texture`
- Default: empty

法线贴图。可将导入的纹理直接拖入此处。

### `Mask`

- Type: `Texture`
- Default: empty

遮罩贴图。可将导入的纹理直接拖入此处。

### `Transparency Mode`

- 类型：`enum{Opaque, Threshold, Blend}`
- 默认值：`Opaque`

选择 `Threshold` 模式时，材质在漫射贴图 `A` 通道小于 128 的位置完全透明，大于等于 128 的位置完全不透明。选择 `Blend` 模式时，材质不透明度完全取决于漫射贴图 `A` 通道。

::: tip

二值化模式的性能远高于混合模式，在效果满足期望的情况下，请优先选择二值化模式。

:::

### `Tiling Scale`

- Type: `Tuple<float, float>`
- Default: `(1, 1)`
- Constrain: `(x, y): x > 0 && y > 0`

### `Tiling Offset`

- Type: `Tuple<float, float>`
- Default: `(0, 0)`

### `Emission Color`

- Type: `Color`
- Default: `RGB(0, 0, 0)`

亮度由遮罩贴图的 `R` 通道控制。

### `Metallic`

- Type: `float`
- Default: `0.05`
- Constrain: `x: 0 <= x <= 1`

在遮罩贴图的 `B` 通道基础上继续增强金属度。

### `Smoothness`

- Type: `float`
- Default: `0.2`
- Constrain: `x: 0 <= x <= 1`

在遮罩贴图的 `G` 通道基础上继续增强光滑度。

### `Ambient Occlusion`

- Type: `float`
- Default: `0`
- Constrain: `x: 0 <= x <= 1`

在遮罩贴图的 `A` 通道基础上继续增强环境光遮蔽效果。

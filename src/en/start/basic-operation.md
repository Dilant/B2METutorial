# Basic Operation

## Set Level Info

`File → Export BMS`

Please set `Initial Ball Type` at least, and click `Apply` to save. You can fill in other fields if you've planned them.

## Set Skybox

Set appropriate weather and check `Show in Editor`.

If there's no skybox, create one at `Create → Skybox`.

## Save

`File → Save Scene` / `Ctrl + S`

Saved maps will appear in `Assets → Scenes` panel and can be double-clicked to open.

::: tip

The saving path on disk is: `%USERPROFILE%\AppData\LocalLow\Mushreb\BME Pro\Assets\Scenes\`

:::

## Add objects

Find the needed element in `Assets → Items` panel and drag it into `Scene` window. You'll see it in `Hierarchy` window at the end of the list, and you can change its position, posture or other parameters in `Inspector` window.

Now you can place any objects you want -- and know that much more convenient ways of adjusting an object will be introduced later.

## Undo

`Edit → Undo` / `Ctrl + Z`, also #1 button of toolbar.

Don't rely on it, and always make a backup before making breaking changes.

## Redo

`Edit → Redo` / `Ctrl + Y`, also #2 button of toolbar.

## Adjust View

### Translation

Use `MouseWheel` or `MouseRight` and drag.

### Rotation

Use `Alt + MouseLeft` and drag.

### Zoom

Use `MouseScroll`.

### Travel

Hold `Alt + MouseRight` to enter travel mode. Drag to change orientation of camera, hold `W` to go front, `S` back, `A` left, `D` right, `Q` down and `E` up.

### Focus

`F`

The view will automatically change to focus on the selected object, and set current position as the center of view adjustments.

::: tip

All view adjustments are based on this center. Try to focus and change it if it's hard to change the view.

:::

### Three Views

Click the arrows of the coordinate axis.

### Toggle Perspective / Orthogonal View

Current view (`Persp` / `Ortho`) is shown under the coordinate axis, and can be clicked to toggle. Orthogonal view excels at fine-tuning layouts.

## Adjusting Objects

### Spectator Mode

`Q`, also #3 button of toolbar.

You can't select or make any change to objects ~~to avoid misoperations~~. We don't use it often.

### Moving Mode

`W`, also #4 button of toolbar.

Drag the arrows to move an object in corresponding directions, or drag the plane symbols to move it in corresponding planes.

### Rotation Mode

`E`, also #5 button of toolbar.

Drag the colored arcs to rotate the object in corresponding planes, or drag the white arc to rotate it in the projection plane, or drag the surface to ~~let it go~~ rotate it freely.

### Scaling Mode

`R`, also #6 button of toolbar.

Drag the handles to scale the object in corresponding directions. The opposite direction means mirroring.

::: warning

For fixed objects, there's no need to scale them in most cases. For machinery, most of them behave improperly when scaled. So, don't scale an object unless there's no other way.

:::

### Ruler mode

`T`, also #7 button of toolbar.

Drag the handles on the rectangle to scale the object, and current size of the object is shown. [Rotate your view](#Rotation) to switch to another surface to operate.

### Quantization

`Ctrl` / `Shift`, hold to enable and release to disable.

When enabled, the units of move, rotate, scale and ruler operations are 0.5 absolutely, 15° absolutely, 50% relatively and 0.5 absolutely, correspondingly.

## Multi-select

In `Scene` window: Hold `Shift` and select each object, or hold `MouseLeft` and box-select.
In `Hierarchy` window: Use `Ctrl` `Shift` in common sense.

::: tip

In `Scene` window, an object is selected if **any part of it** is in the field.

In order not to select any unneeded object, using [overlook](#three-views) view to multi-select is recommended.

:::

## Duplicate

`Edit → Duplicate` / `Ctrl + D`

A copy will be created at the same position, in `Hierarchy` window at the end of the list.

Sorry but there's no `Ctrl + X` `Ctrl + C` `Ctrl + V`.

## Delete Objects

`Edit → Delete` / `Delete`

## Create Starting Point, Check Point and Destination

`Assets → Items → CheckPoint`

Check points don't distinguish with each other and can be activated more than once. You will always reborn from the last active check point.

You complete the level upon entering destination without needing to activate all check points.

## Test Map

`File → Export BMS → Test Map`

Ballex² will launch automatically if you've [set Ballex² path](/en/start/preparation.md#set-ballex2-path) correctly.

::: tip

Destination can't be activated in maptest mode.

For convenience, you can fetch aids from `Assets → Items → TestMapTools`.

:::

### Ball Hot-switch

`0` ~ `9`

| Key | Switch to    |
| --- | ------------ |
| `0` | Wooden ball  |
| `1` | Stone ball   |
| `2` | Paper ball   |
| `3` | Ice ball     |
| `4` | Steel ball   |
| `5` | Rubber ball  |
| `6` | Glow ball    |
| `7` | Balloon ball |
| `8` | Sticky ball  |
| `9` | Sponge ball  |

### Screenshot

`F5`

The screenshot is 1920×1080 in `.jpg` format in default, and saved at `%USERPROFILE%\AppData\LocalLow\Mushreb\Ballex²\Screenshots\`.

### Variables Inspector

`F6`

See: [Advanced → Variable System](/en/advanced/variable-system.md)

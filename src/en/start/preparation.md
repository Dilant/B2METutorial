# Preparation

## Start the Map Editor

Launch it via Steam and choose the 2nd option `Launch Game Editor`.

::: tip

Ballex² and BME Pro can be launched from local directory. Ensure that Steam is launched and logged in.

:::

## Adjust the Interface

### Change Language

`Settings → Language` / `设置 → 语言`

### Change UI Scale

`Settings → UI Scale`

Auto mode will select 200% if resolution width is greater than 1920, or 100% instead.

### Change Power Save Mode

`Settings → Power Save Mode`

Power save mode will clamp the frame rate of the scene. Frame rate of editor UI is not affected.

### Set Ballex² Path

`Settings → Set Ballex² Path`

It should end in `Ballex².exe`. When you enter test map mode, it will launch automatically.

### Change Layout

Drag to resize or move them. Closed windows can be called out in `Window` menu, and layout can be restored to default in `Window → Layout`.

## Windows

### `Scene`

Show the map visually. Most operations are done here.

### `Inspector`

View and change parameters of selected objects.

### `Hierarchy`

List all objects with their hierarchical relationships.

### `Assets`

Categorize and display all assets. There're 6 panels:

- `Scenes`: list all source files of maps
- `Items`: list all available elements
- `Meshes`: list all imported meshes
- `Textures`: list all imported texture pictures
- `Materials`: list all available materials
- `Audios`: list all imported audios

## Coordinate System

BME Pro uses a left-handed coordinate system same as Unity3D and Cinema 4D.

- `X+` axis goes right, `Y+` up and `Z+` front
- The order of quaternion is `X` `Y` `Z` `W`
- The euler angle uses `Y` `X` `Z` (yaw, pitch, roll) as rotation order and degree as unit
- Grid length is 1 meter in the sense of modeling softwares

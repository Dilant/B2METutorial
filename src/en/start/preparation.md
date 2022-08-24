# Preparation

## Start the Map Editor

Launch it via Steam and choose the 2nd option `Launch Game Editor`.

::: tip

Ballex² and BME Pro can be launched from local directory. Ensure that:

- Steam is launched and logged in
- Manually relaunch Steam if it's launched automatically by other tools (for example Steam++ or SteamCommunity302)

:::

## Adjust the Interface

### Change Language

`Settings → Language` / `设置 → 语言`

### Change UI Scale

`Settings → UI Scale`

Auto mode will select 200% if resolution width is greater than 1920, or 100% instead.

::: tip

For Windows, if you encounter performance issues while using high scale rate, try setting high DPI scaling override: Right-click `BME Pro.exe` → Properties → Compatibility → Change settings for all users → Change high DPI settings → High DPI scaling override → System.

:::

### Change Power Save Mode

`Settings → Power Save Mode`

Power save mode will restrict frame rate of the scene. Frame rate of editor UI is not affected.

### Set Ballex² Path

`Settings → Set Ballex² Path`

It should end in `Ballex².exe`, either stable or beta version. When you enter maptest mode, it will launch automatically.

### Change Layout

Drag to resize or move them. Closed windows can be called out in `Window` menu, and layout can be restored to default in `Window → Layout`.

## Windows

### `Scene`

Show the map graphically. Most operations are done here.

### `Inspector`

View and change parameters of selected objects.

### `Hierarchy`

List all objects with their hierarchical relationships.

### `Assets`

Categorize and display all assets. There're 6 panels:

- `Scenes`: List all source files of maps
- `Items`: List all available elements
- `Meshes`: List all imported meshes
- `Textures`: List all imported texture pictures
- `Materials`: List all available materials
- `Audios`: List all imported audios

## Coordinate System

BME Pro uses a left-handed coordinate system same as Unity3D and Cinema 4D.

- `X+` axis goes right, `Y+` up and `Z+` front
- The order of quaternion is `X` `Y` `Z` `W`
- The euler angle uses `Y` `X` `Z` as rotation order and degree as unit
- Grid length is 1 meter in the sense of modeling softwares

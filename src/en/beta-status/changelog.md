# Changelog

## `0.9.3b3` @ 2022/3/9

- Temporarily remove ghost ball function
- The main screen can no longer be entered from test map mode
- The default graphics setting is changed to 1920×1080 with highest graphics quality
- Fix flashing lights in certain cases

## `0.9.3b2` @ 2022/3/8

- Add numeric display for durability
- Iceballs become opaque
- The sponge ball won't take any physical damage
- ~~The ghost ball is adjusted to be translucent~~

## `0.9.3b1` @ 2022/3/7

- ~~Add ghost ball function~~

## `0.9.2b6` @ 2022/3/5

- Paperballs turn back to regular spheres
- The `Disable Player Key` executor can disable 8-way snap function in free look mode
- Fix an issue that disabled player keys take effect again after death

## `0.9.2b4` `0.9.2b5` @ 2022/3/4

- Add leaderboard for official levels
- ~~Paperballs become irregular spheres~~
- Expand the trigger area of switchers and appenders
- The color of durability bar no longer considers injury buffer
- Supplies got by an inactive player ball will take effect
- Bring back the muted BGM when restarting after completing a level

## `0.9.2b2` `0.9.2b3` @ 2022/3/3

- Add leaderboard for custom levels
- The player ball won't get any supply during the death animation
- Items are sorted by weekly trend by default in workshop
- Adjust scroll speed of workshop screen
- Fix issues with mouse capture while pausing in the free look mode

## `0.9.2b1` @ 2022/3/2

- Change mechanisms related to durability
- Add level evaluation screen
- Fix the flickering issue with wooden boards in section #2 of official level 1-3 E
- Remove injury effect of inactive player balls

## `0.9.1b3` @ 2021/12/30

- Change mechanisms related to inactive player balls
- The camera won't lock now upon death of an inactive player ball

## `0.9.1b2` @ 2021/12/25

- Adjust read / write permissions of internal variables
- Add official level 1-3 E

## `0.9.1b1` @ 2021/12/22

- Re-add DirectX 11 Support
- Adjust read / write permissions of internal variables
- Add search dependencies function to the package collector
- Fix the black screen issue when taking screenshots using Steam in BME Pro

## `0.9.0` @ 2021/12/18

- Overall gravity setting is added to export window
- Fix unexpected truncations of workshop item descriptions
- Fix the issue that cursor is not released when back to main screen
- ~~Items are sorted by update time by default in workshop~~
- Add official level 1-2 E

## `0.9.0b1 α` @ 2021/12/17

- Full support of Steam Workshop
- Game UI is redesigned
- Add more graphics settings
- Fix reflection of water further from a certain distance
- `Gravity Factor` should work now
- Aggressively address the game freeze issue upon exit
- Add official level 1-1 E

## `0.8.1b2 α` @ 2021/11/17

- BME Pro now supports Steam Workshop
- Support packing and unpacking assets
- Add icons to menu items

## `0.8.1b1 α` @ 2021/11/14

- All parameters of a joint should work now
- Fix an issue which hides the border of selection

## `0.8.0 β` @ 2021/11/10

- Optimize rendering effect of screen space reflection
- Custom terrain brushes should work now

## `0.8.0b2 α` @ 2021/11/9

- Optimize physical calculation speed under heavy loads
- Fix the textures of appenders
- Fix audio players and now they can be triggered
- Fix an issue causing BME Pro to crash
- Make burst count of particle emitters work again
- Particle emitters should rotate with camera now

## `0.8.0b1 α` @ 2021/11/7

- Address the game freeze issue upon exit
- Add screen space reflection support
- Object ID will show in `Hierarchy` window
- Add terrain system and particle system
- Replace audio manager
- Fix the UV texture issue with custom meshes
- Support `.jpg` when importing textures
- Drop `.obj` support when importing meshes
- Optimize the rendering pipeline to allow handling a large amount of simultaneous illuminations
- Audio assets are provided separately now (instead of being built-in)

## `0.7.3b4 α` `0.7.3 β` @ 2021/10/1

- Add lava pools
- Road generators with more than 32 segments should work now
- Fix the size of pools
- Fix the issue with buoyancy of pools scaled along `Y` axis
- Add water and lava materials to built-in assets

## `0.7.3b3 α` @ 2021/9/30

- Level description will show in loading page now
- Change effect of texture emission
- The max number of segments in a road generator changes from 32 to 128
- Add musics by STERD and Aeka to built-in assets

## `0.7.3b1 α` `0.7.3b2 α` @ 2021/9/29

- Optimize compression rate of textures and audios by a great margin
- Switch to another import method for audios, which supports `.ogg` only
- Camera offset setting is added to export window
- Add lots of audios to built-in assets

## `0.7.2 β` @ 2021/9/28

- Add keymap setting for free look mode
- Level name will show in game now

## `0.7.2b2 α` @ 2021/9/20

- Add keymap setting
- Adjust range of visibility in game
- Slightly adjust properties of balls and machinery
- Score ball traces should reset upon restart now
- Change start position of score ball traces upon reborn
- Add materials for balls to built-in assets

## `0.7.2b1 α` @ 2021/9/19

- The default camera offset changes from `(0, 3.5, -4.25)` to `(0, 4, -3.5)`
- Add animations of appenders
- ~~Change the behaviors when inactive player balls activate checkpoints, destination, switchers or appenders~~
- Change the behavior of score ball trace upon death or winning
- Slightly weaken friction of some materials
- Ice ball won't get electric balls now
- Add a key to go back to main screen
- Fix some issues related to screenshot function
- Fix the issue that some sound effects don't pause with game pause

## `0.7.1b2 α` `0.7.1 β` @ 2021/9/17

- Fix an issue that blocks screenshot function in free look mode
- Add add-to-favorites function for asset folders
- Add a function to import directories as asset folders
- Remove drop-in import method
- Fix the issue that the default folder is not selected when switching panels in `Assets` window

## `0.7.1b1 α` @ 2021/9/17

- All official assets are built in and showed as blue directories
- Add fall stone machinery
- Add collider welding function
- Fix a selection field issue of road generators
- Fix texture issues of road generators with varied width and concave
- Fade-out effect of pillars should render correctly

## `0.7.0b2 α` `0.7.0 β` @ 2021/9/12

- `Switch Camera Target` executor
  - Fix the issue that camera isn't reset on life start
  - Fix the issue that camera isn't reset when the target is destroyed
  - Fix the issue that camera motion is always determined by player ball

## `0.7.0b1 α` @ 2021/9/12

- Add variable mechanism
- Triggers
  - Add `Physics Frame` trigger
  - Add switch mode for `Input` trigger
  - `Input` trigger can refer to player keys
- Add executors
  - `Set Camera Offset`
  - `Set Variable Value`
  - `Compare Variables`
  - `Disable Player Key`
  - `Switch Camera Target`
- The game won't freeze when taking screenshots while the save folder does't exist
- Camera mode setting is moved to export window

## `0.6.8b2 α` @ 2021/9/11

- Fix a visibility issue with skybox
- Fix collider of rocks, stairs, etc

## `0.6.8 β` @ 2021/9/10

- First beta version

# Changelog

## `0.7.3b4 α` `0.7.3 β` @ 2021/10/1

- Add lava pools
- Fix the issue with road generators when it has more than 32 segments
- Fix the size of pools
- Fix the issue with buoyancy of pools scaled along `Y` axis
- Add water and lava materials to built-in assets
- Include _Topo Trip_, a technical map by Aeka

## `0.7.3b3 α` @ 2021/9/30

- Level description will show in loading page now
- Change effect of texture emission
- The max number of segments in a road generator changes from 32 to 128
- Add musics by STERD and Aeka to built-in assets
- Changes to built-in levels
  - Fix the set camera offset executors in official level 1
  - **_Ordinary_ (原)** by Dilant adds section #3 and BGM
  - Add _Flamire_, a casual map by STERD

## `0.7.3 α` `0.7.3b2 α` @ 2021/9/29

- Optimize compression rate of textures and audios by a great margin
- Switch to another import method for audios, which supports `.ogg` only
- Camera offset setting is added to export window
- Add lots of audios to built-in assets

## `0.7.2 β` @ 2021/9/28

- Add keymap setting for free look camera mode
- Level name will show in game now
- Changes to built-in levels
  - Official level 1 changes to snowy weather
  - Minor fixes of **_First Try_** by Aeka
  - Add **_Strato Run_**, a casual map by Aeka
  - Add **_Ordinary_ (原)**, a logical map by Dilant
  - Add **_Ball's Last Tour: Top Floor_ (木球终末旅行·顶层)**, a landscape map by Ding~ao
  - Add a technical map by Matt
  - Add a casual map by Z Red

## `0.7.2b2 α` @ 2021/9/20

- Add keymap setting
- Adjust range of visibility in game
- Slightly adjust properties of balls and machinery
- Fix the issue that score ball traces aren't reset upon restart
- Change start position of score ball traces upon reborn
- Add materials for balls to built-in assets

## `0.7.2 α` @ 2021/9/19

- The default camera offset changes from `(0, 3.5, -4.25)` to `(0, 4, -3.5)`
- Add animations of appenders
- Change the behaviors when inactive player balls activate checkpoints, destination, switchers or appenders
- Change the behavior of score ball trace upon death or winning
- Slightly weaken friction of some materials
- Fix the issue that ice ball can get electric balls
- Add a key to go back to main screen
- Fix some issues related to screenshot function
- Fix the issue that some sound effects don't pause with game pause

## `0.7.1b2 α` `0.7.1 β` @ 2021/9/17

- Fix an issue that blocks screenshot function in free look camera mode
- Add add-to-favorites function for asset folders
- Add a function to import directories as asset folders
- Remove drop-in import method
- Fix the issue that the default folder is not selected when switching panels in `Assets` window
- Fix acrylic effect of editor UI
- Include a landscape map by Aeka

## `0.7.1 α` @ 2021/9/17

- All official assets are built in and showed as blue directories
- Add fall stone machinery
- Add collider welding function
- Fix a selection field issue of road generators
- Fix texture issues of road generators with varied width and concave
- Fix a rendering issue with fade-out effect of pillars

## `0.7.0b2 α` `0.7.0 β` @ 2021/9/12

- Switch camera target executor
  - Fix the issue that camera isn't reset on life start
  - Fix the issue that camera isn't reset when the target is destroyed
  - Fix the issue that camera motion is always determined by player ball

## `0.7.0 α` @ 2021/9/12

- Add variable mechanism
- Triggers
  - Add physics frame trigger
  - Add switch mode for input trigger
  - Input trigger can refer to player keys
- Add executors
  - Set camera offset
  - Set variable value
  - Compare variables
  - Disable player key
  - Switch camera target
- Fix game crash when taking screenshots while the save folder does't exist
- Camera mode setting is moved to export window
- Include a casual map by MushREB

## `0.6.8b2 α` @ 2021/9/11

- Fix a visibility issue with skybox
- Fix collider of rocks, stairs, etc.

## `0.6.8 β` @ 2021/9/10

- First beta version
- Include a casual map by z2414

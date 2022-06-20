# Ballex² Beta Status

- The latest version: `0.14.1b1` @ 2022/6/16
- The minimum requirement is Windows 7 x64
- DirectX 12 mode require Windows 10 x64 20H2 or newer version

(Refer to the sidebar for configs and changelog)

## Breaking Change

::: warning

Since neither game mechanism nor level design is finalized, **the leaderboards would be reset without any prior notice during the beta period.** Remember to record your runs, and don't be crazy about hitting a leaderboard.

:::

### `0.11.3b1`

- The mass of the sponge ball is defined by its humidity
- It becomes heavier under higher humidity with formula `current_mass = stone_ball_mass * humidity% + sponge_ball_mass * (1 - humidity%)`

### `0.10.0b1 α`

- Durability value no longer takes part in the final evaluation
- A cure supply gives an extra 15 points
- A life supply gives an extra 100 points

### `0.9.5b1`

- ~~The formula of final evaluation changes to `final_score = time_point + durability * 5`~~

### `0.9.2b1`

- Change mechanisms related to durability
  - The initial value of durability is 100, and the upper limit is 200
  - The part exceeding 100 displays as the dark bar. This part has no injury buffer (the light bar), and recovery effect to this part is 20% of the numeric value
    - e.g. If a durability of 90 is topped up by 100, it becomes `118 = 90 + 10 + 90 * 0.2`
  - A durability lower than 100 will be filled to 100 upon activating a checkpoint
  - ~~Durability value takes part in the final evaluation with formula `final_score = time_point + durability * 10`~~

### `0.9.1b3`

_To be discussed: may revert these changes later_

- Change mechanisms related to inactive balls
  - An inactive ball will be destroyed upon activating checkpoints, destination, switchers or appenders
  - All inactive ball will be destroyed when the active ball activates checkpoints or destination

### `0.9.0`

- Cross off the concept of life
- Green supply (cure) is changed to restore 15 durability
- Blue supply (life) is changed to restore 100 durability

### `0.7.3`

- Formats of assets are changed, so assets imported before and after this point are incompatible with each other

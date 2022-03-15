# Ballex² Beta Status

- The latest version: `0.9.6b1` @ 2022/3/15
- The minimum requirement is Windows 7 x64
- DirectX 12 mode require Windows 10 x64 20H2 or newer version

(Refer to the sidebar for configs and changelog)

## Breaking Change

::: warning

Since neither game mechanism nor level design is finalized, **the leaderboards would be reset without any prior notice.** Remember to record your runs, and don't be crazy about hitting a leaderboard.

:::

### `0.9.5b1`

- The formula of final evaluation changes to `finalScore = timePoint + durability * 5`

### `0.9.2b1`

- Change mechanisms related to durability
  - The initial value of durability is 100, and the upper limit is 200
  - The part exceeding 100 displays as the dark bar. This part has no injury buffer (the light bar), and recovery effect to this part is 20% of the numeric value
    - e.g. If a durability of 90 gets a supply of 100, it becomes `118 = 90 + 10 + 90 * 0.2`
  - A durability lower than 100 will be filled to 100 upon activating a checkpoint
  - Durability value takes part in the final evaluation ~~with formula `finalScore = timePoint + durability * 10`~~

### `0.9.1b3`

_To be discussed: may revert these changes later_

- ~~Change mechanisms related to inactive balls~~
  - ~~An inactive ball will be destroyed upon activating checkpoints, destination, switchers or appenders~~
  - ~~All inactive ball will be destroyed when the active ball activates checkpoints or destination~~

### `0.9.0`

- Cross off the concept of life
- Blue supply (life) is changed to restore 100 durability
- Green supply (durability) is changed to restore 15 durability

### `0.7.3`

- Formats of assets are changed, so assets imported before and after this point are incompatible with each other

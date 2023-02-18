# Ballex² Early Access Status

- The latest version: `0.18.0b1` @ 2022/2/14
- The minimum requirement in theory is Windows 7 x64 (We don't guarantee this, but you can try to copy the executables to Windows 7 and play)

(Refer to the sidebar for configs and changelog)

## Major Change

::: warning

Since neither game mechanism nor level design is finalized, **the leaderboards would be reset without any prior notice during the early access period.** Remember to record your runs, and don't be crazy about hitting a leaderboard.

:::

### `0.17.0b1`

- Change mechanisms related to inactive balls
  - When an inactive ball activates checkpoints, destination, switchers or appenders, it will turn to be the active ball and trigger the corresponding event
  - An inactive ball won't activate switchers or appenders during an existing ball switching animation

### `0.16.0b1 α`

- Add temperature system
  - The initial temperature of player ball is 0, which spontaneously approaches the environment temperature
  - While the display range of the temperature bar is from -50 to 200, there's neither upper nor lower limit
  - When cooled down to -10, the freezing point
    - Any ball (except the ice ball) will freeze with its friction reduced to the same as the ice ball. The ball unfreezes when its temperature rises above -10
    - The temperature of ice ball remains unchanged. Instead, its radius increases, with the maximum of 200%, together with its mass and volume
  - When heated up
    - The reduction rate of humidity increases with temperature
    - TNTs will be immediately detonated when the temperature is higher than 190
    - The temperature of ice ball remains unchanged. Instead, its radius decreases, with the minimum of 20%, together with its mass and volume. It will lose durability if it continues to be heated
  - When heated up to 200, the igniting point
    - The paper ball or the wooden ball will ignite. Its temperature rises to 500 instantly and then approaches 250. The ball goes out when its temperature drops below 200
    - The balloon ball will explode and die
    - (Balls not mentioned above have no special effect)
  - When getting a froze supply
    - if the player ball is already igniting, it goes out and its temperature drops to 0
    - if its temperature is above 0, the temperature drops to -50
    - if its temperature is below 0, the temperature decreases by 50
  - When entering a pool, the temperature of the player ball won't be higher than 200, and an igniting ball goes out immediately
  - When switching ball or activating a checkpoint, the temperature of the player ball is set to 0, and its frozen or igniting state is cancelled
- Add power mechanism to the sticky ball
  - The sticky ball has a power bar, and its initial power is 100
  - Any movement consumes power, and a full power bar allows it rolling at full speed for 25 seconds
  - It rolls much slower and will be unable to climb up walls when it runs out of power
  - An electric supply won't damage it or kick it away, instead it restores 50 power
  - Its power will be filled up to 100 upon activating a checkpoint

### `0.15.8b3`

- Force applied when rolling diagonally is increased from 1.207x to 1.414x
- A player can get and submit a higher score easily, so the leaderboards are kept

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

- Change mechanisms related to inactive balls
  - ~~An inactive ball will be destroyed upon activating checkpoints, destination, switchers or appenders~~
  - All inactive ball will be destroyed when the active ball activates checkpoints or destination

### `0.9.0`

- Cross off the concept of life
- Green supply (cure) is changed to restore 15 durability
- Blue supply (life) is changed to restore 100 durability

### `0.7.3`

- Formats of assets are changed, so assets imported before and after this point are incompatible with each other

# Online Multiplayer

## Join Server

Press `F4` in main screen. Chat box will show a prompt upon a successful connection.
Press `F4` again to disconnect.

## Chat

Press `` ` `` to toggle the visibility of the chat box.

The default behaviors of sending messages are:

- If in a room, messages will be sent to players in the same room
- If in a level (but not in any room), messages will be sent to players in the same level (but not in any room)
- If in the main screen, messages will be sent to players in the main screen

## Commands

### <code>/g <em>message</em></code>

Send a global message.

### `/list`

List online players in the server.

### `/np`

Broadcast the level you are currently playing to all players.

## Broadcasted Events

These events will be broadcasted to all players:

- Joining server
- Leaving server
- Final evaluation of a level

These events will be broadcasted to players in the same level (but not in any room):

- Entering level
- Quitting level

These events will be broadcasted to players in the same room:

- Joining room
- Leaving room

## Room

::: tip

Here're several behavior changes if you're in the competition mode:

- Restarting is not allowed
- Pausing is not allowed. `Esc` won't pause physics stimulation and the timer
- The timer won't pause during the animation of death and rebirth

:::

### Create Room

<code>/create <em>mode</em> <em>password</em></code> after entering a level

The mode can be set to highscore `hs` or speedrun `sr`, which determines the ranking criteria.

The server will return the room ID, and you'll enter this room and become the host.

### Join Room

<code>/join <em>room</em> <em>password</em></code> after entering a level

### Leave Room

`Esc` and quit the level to leave the room. If you are the host, the room will be dismissed on your quit.

### Ready

`/ready`

Type again to retract it.

### Kick

<code>/kick <em>player</em></code>

Host only. Kick the selected player out. If the match hasn't started yet, and the room still has seats, the player is able to join again.

### Start

`/start`

Host only. All players will start racing at the same time.

### Restart

`/restart`

Host only. This immediately puts an end to the current match, and all players will be sent back to the start point.

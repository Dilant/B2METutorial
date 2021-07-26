# Trigger System

触发器系统分为触发器与执行器两块内容，同一个执行器也可以被多个触发器触发。

## Trigger

`Create → Trigger → ...`

触发器可以被指定的物体触发，此时关联的执行器将自动执行。

See also: [Advanced → Trigger](/en/advanced/trigger.md)。

## Executor

`Create → Executor → ...`

执行器可以被触发器触发，也可以关联执行器实现链式触发。

See also: [Advanced → Executor](/en/advanced/executor.md)。

::: tip

执行器的位姿和缩放没有作用，不过建议摆放在便于查找的位置。

:::
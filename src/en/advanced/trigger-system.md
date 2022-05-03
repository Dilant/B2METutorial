# Trigger System

触发器系统分为触发器与执行器两块内容，同一个执行器也可以被多个触发器触发。

## Trigger

`Create → Trigger`

触发器可以被指定的物体触发，此时关联的执行器将自动执行。

See: [Advanced → Trigger](/en/advanced/trigger.md)

## Executor

`Create → Executor`

执行器可以被触发器触发，也可以关联执行器实现链式触发。

See: [Advanced → Executor](/en/advanced/executor.md)

## Custom Executor

`Create → Custom Executor`

自定义执行器使用 [MiniScript](https://miniscript.org/) 编写，可以实现各类复杂逻辑。

See: [Advanced → Custom Executor](/en/advanced/custom-executor.md)

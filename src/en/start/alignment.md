# Alignment

::: danger

**This section includes critical strategies that contributes to a productive workflow for quality map making. It is recommended to try the techniques out as you read.**

DO NOT SKIP THIS SECTION!
DO NOT SKIP THIS SECTION!
DO NOT SKIP THIS SECTION!

:::

## Coordinate Alignment

Fill in parameters of an object in `Inspector` window. Simple and straightforward. ~~Where's my calculator?~~

Often applied on irregular shaped objects such as decorations or machinery.

## Vertex Alignment

`V`, hold to enable and release to disable.

**Under moving mode**, hold `V` and mouse pointer will attach to the nearest vertex. Then use `MouseLeft` and drag to attach the aforementioned vertex to another vertex of another object. Release `MouseLeft` and then `V` to apply changes.

Often used when aligning block-shaped objects such as road, boards, boxes, and concatenating iron rails.

![A gif showing how to perform a vertex alignment](/images/vertex-alignment-example.gif)

::: tip

- Multiple objects can be selected to perform alignment simultaneously. Their relative position will remain unchanged.
- The selectable vertices includes all the ones on the mesh of the object, which may include excessive ones at where the textures meet. In most cases, only the ones at the outside of the object are used.

:::

## Vertex Alignment + Quantization

Perform a vertex alignment first, then fine tune the position using [quantization](/en/start/basic-operation.md#quantization).

Often applied ~~on chessboard map~~ when determining location 1 grid length apart from a certain object.

## Vertex Alignment + Coordinate Alignment

Perform a vertex alignment to nail down the coordinate of an axis or two, then perform a coordinate alignment to tune the rest.

Often applied on the connection of road and iron rails, and for fine tuning purposes.

## Cheat Alignment

Add an arbitrary object to the scene as a pivot (usually a single block of road), then align other object with it by vertex. Delete that auxiliary object when finished.

Often applied when moving objects in a batch (for instance, a whole section) to a specific location and aligning them to existing objects.

## Duplicate + Quantization

When an identical object is nearby, [duplicate](/en/start/basic-operation.md#duplicate-objects) it and perform a [quantized move](/en/start/basic-operation.md#quantization) to pinpoint its position. It can save you a lot of hassle. (Especially those having the same posture!)

Specially, when a lot of identical objects are to be placed orderly (e.g. ~~dahkjdas' tower~~ chessboard), this method will come in real handy.

::: tip

This method can also be useful to create the auxiliary object for cheat alignment! Try to mix and match those methods, and connect the dots as you progress.

:::

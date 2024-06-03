// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// whenLoaded.js

document.addEventListener("DOMContentLoaded", function()
{
    // get the canvas element
    let canvas = ge("renderCanvas");

    // create the Babylon.js engine
    let engine = new BABYLON.Engine(canvas, true, { antialias: true });

    // create the scene
    let scene = makeScene(engine, canvas);

    // run the render loop
    engine.runRenderLoop(function()
    {
        scene.render();
    });

    // when window is resized
    window.addEventListener("resize", function ()
    {
        engine.resize();
    });

    makeObjectMenu(scene);

    makeTitleOfApp();
});


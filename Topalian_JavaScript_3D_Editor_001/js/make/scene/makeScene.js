// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// makeScene.js

function makeScene(whichEngine, whichCanvas)
{
    let scene = new BABYLON.Scene(whichEngine);

    // background color
    scene.clearColor = new BABYLON.Color4(0.2, 0.2, 0.2, 1);

    //-//

    makeLight(light001);

    makeArcRotateCamera(scene, whichCanvas)

    return scene;
}


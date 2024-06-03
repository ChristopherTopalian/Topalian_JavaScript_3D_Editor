// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// makeArcRotateCamera.js

function makeArcRotateCamera(whichScene, whichCanvas)
{
    // create the arc rotate camera
    let camera = new BABYLON.ArcRotateCamera('arcCamera1', 0, 0, 10, BABYLON.Vector3(0, 0, 100), whichScene);

    // scroll zoom speed
    camera.wheelPrecision = 20;
    camera.speed = 20;

    camera.attachControl(whichCanvas, false);

    // camera position
    camera.setPosition(new BABYLON.Vector3(0, 20, -10));

    camera.checkCollisions = true;
    camera.applyGravity = true;

    // how close to object
    camera.lowerRadiusLimit = 2;

    // how far from object
    camera.upperRadiusLimit = 100;

    return camera;
}


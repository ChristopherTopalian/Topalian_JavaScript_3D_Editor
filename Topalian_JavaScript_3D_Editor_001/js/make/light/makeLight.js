// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// makeLight.js

let light001 =
[
    {
        name: 'light',
        rotationX: 0,
        rotationY: 1,
        rotationZ: 0,
        intensity: 0.7
    }
];

function makeLight(whichArray, whichScene)
{
    let light = new BABYLON.HemisphericLight(whichArray[0].name,
    new BABYLON.Vector3(
    whichArray[0].rotationX,
    whichArray[0].rotationY,
    whichArray[0].rotationZ),
    whichScene);

    light.intensity = whichArray[0].intensity;
}


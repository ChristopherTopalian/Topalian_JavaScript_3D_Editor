// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// makeCube.js

let cubeCounter = 0;

function makeCube(whichScene)
{
    cubeCounter += 1;

    // create a new cube
    let box = BABYLON.MeshBuilder.CreateBox("box" + cubeCounter, { size: 1 }, whichScene);

    box.id = 'cube' + cubeCounter;

    box.position.x = Math.round(Math.random() * 5);

    box.position.z = Math.round(Math.random() * 5);

    // when right clicked
    box.actionManager = new BABYLON.ActionManager(whichScene);

    box.actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(
            BABYLON.ActionManager.OnRightPickTrigger,
            function (evt)
            {
                evt.source.position.x += 1;
            }
        )
    );
}


// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// makeCylinder.js

function makeCylinder(whichScene)
{
    // create a cylinder
    let cylinder = BABYLON.MeshBuilder.CreateCylinder("cylinder", { diameterTop: 1, diameterBottom: 1, height: 2 }, whichScene);

    // set the position of the cylinder
    cylinder.position.x = Math.round(Math.random() * 5);
    cylinder.position.y = Math.round(Math.random() * 5);
    cylinder.position.z = Math.round(Math.random() * 5);

    return cylinder;
}


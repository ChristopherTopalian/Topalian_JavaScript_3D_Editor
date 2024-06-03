// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// makeSphere.js

function makeSphere(whichScene)
{
    let sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 1 }, whichScene);

    sphere.position.x = Math.round(Math.random() * 5);
    sphere.position.y = Math.round(Math.random() * 5);

    return sphere;
}


// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// makePyramid.js

function makePyramid(whichScene)
{
    // define the vertices of the pyramid
    let vertices =
    [
        new BABYLON.Vector3(-0.5, 0, -0.5),
        new BABYLON.Vector3(0.5, 0, -0.5),
        new BABYLON.Vector3(0.5, 0, 0.5),
        new BABYLON.Vector3(-0.5, 0, 0.5),
        // apex of the pyramid
        new BABYLON.Vector3(0, 1, 0)
    ];

    // define the faces of the pyramid
    let faces = [
        [0, 1, 4], // base triangle 1
        [1, 2, 4], // base triangle 2
        [2, 3, 4], // base triangle 3
        [3, 0, 4]  // base triangle 4
    ];

    // create the pyramid mesh
    let pyramid = BABYLON.MeshBuilder.CreatePolyhedron("pyramid", { vertices: vertices, faceIndices: faces }, whichScene);

    // set position
    pyramid.position.x = Math.round(Math.random() * 5);
    pyramid.position.y = Math.round(Math.random() * 5);

    return pyramid;
}


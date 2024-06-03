// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// makeObjectMenu.js

function makeObjectMenu(whichScene)
{
    // objectMenuContainer
    let objectMenuContainer = ce('div');
    objectMenuContainer.id = 'objectMenuContainer';
    objectMenuContainer.style.position = 'fixed';
    objectMenuContainer.style.left = '10px';
    objectMenuContainer.style.top = '10px';
    objectMenuContainer.style.display = 'grid';
    objectMenuContainer.style.gridTemplateColumns = 'repeat(1, 1fr)';
    objectMenuContainer.style.gap = '2.5px';
    ba(objectMenuContainer);

    //-//

    // cubeButton
    let cubeButton = ce('button');
    cubeButton.id = 'cubeButton';
    cubeButton.className = 'buttonStyle001';
    cubeButton.textContent = 'Cube';
    cubeButton.onclick = function()
    {
        makeCube(whichScene);
    };
    objectMenuContainer.append(cubeButton);

    //-//

    // sphereButton
    let sphereButton = ce('button');
    sphereButton.id = 'sphereButton';
    sphereButton.className = 'buttonStyle001';
    sphereButton.textContent = 'Sphere';
    sphereButton.onclick = function()
    {
        makeSphere(whichScene);
    };
    objectMenuContainer.append(sphereButton);

    //-//

    // pyramidButton
    let pyramidButton = ce('button');
    pyramidButton.id = 'pyramidButton';
    pyramidButton.className = 'buttonStyle001';
    pyramidButton.textContent = 'Pyramid';
    pyramidButton.onclick = function()
    {
        makePyramid(whichScene);
    };
    objectMenuContainer.append(pyramidButton);

    //-//

    // cylinderButton
    let cylinderButton = ce('button');
    cylinderButton.id = 'pyramidButton';
    cylinderButton.className = 'buttonStyle001';
    cylinderButton.textContent = 'Cylinder';
    cylinderButton.onclick = function()
    {
        makeCylinder(whichScene);
    };
    objectMenuContainer.append(cylinderButton);
}


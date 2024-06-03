// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// makeTitleOfApp.js

function makeTitleOfApp()
{
    // titleContainer
    let titleContainer = ce('div');
    titleContainer.style.position = 'absolute';
    titleContainer.style.right = '10px';
    titleContainer.style.bottom = '4px';
    titleContainer.style.zIndex = 1;
    titleContainer.style.fontFamily = 'Arial';
    titleContainer.style.fontSize = '17px';
    titleContainer.style.fontWeight = 'bold';
    ba(titleContainer);

    //-//

    // titleOfApp
    let titleOfApp = ce('div');
    titleOfApp.id = 'titleOfApp';
    titleOfApp.innerHTML =
    `<a href = 'https://github.com/christophertopalian/topalian_javascript_3d_editor' target = '_blank'> Topalian JavaScript 3D Editor </a>`;
    titleContainer.append(titleOfApp);
}


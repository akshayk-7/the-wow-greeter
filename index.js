#!/usr/bin/env node

import pc from 'picocolors';
import figlet from 'figlet';
import gradient from 'gradient-string';


// Generating the massive ASCII text
const asciiArt = figlet.textSync('Wow CLI', {
    font: 'Standard',
    horizontalLayout: 'default',
    verticalLayout: 'default'
});

// adding the gradient instead of pc colors i used gradient 
const coloredArt = gradient.retro(asciiArt);

console.log(coloredArt);

// printing the colorful welcome message
console.log(pc.blueBright('Welcome to the First CLI tool ! \n'));

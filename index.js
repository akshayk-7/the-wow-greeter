#!/usr/bin/env node

import pc from 'picocolors';
import figlet from 'figlet';

// Generating the massive ASCII text
const asciiArt = figlet.textSync('Wow CLI', {
    font: 'Standard',
    horizontalLayout: 'default',
    verticalLayout: 'default'
});

// now adding some color to the ASCII art
const coloredArt = pc.cyan(asciiArt);

console.log(coloredArt);

// printing the colorful welcome message
console.log(pc.blueBright('Welcome to the First CLI tool ! \n'));



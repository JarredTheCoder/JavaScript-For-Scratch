var color; function colourRandom() { var num = Math.floor(Math.random() * Math.pow(2, 24)); return '#' + ('00000' + num.toString(16)).substr(-6); } ext._shutdown = function() {};ext._getStatus = function() { return {status: 2, msg: 'Ready'};}; ext.color = function (callback){ color = colourRandom(); }; ext.say = function (a,callback){ alert("Hello!") }; var descriptor = { blocks: [ ["r","( %c)","color"],[" ","( hello)","say"],],menus: {},url: 'https://kyleplo.github.io/scratch-extension-creator/help#'Hello!};ScratchExtensions.register('JavaScript Scratch Edition', descriptor, ext);
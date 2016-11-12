$('.hero-header').velocity({ opacity: 1, translateX: "12px", duration: 300 });

// The following will work if jQuery is removed; see site-notes.md for explanation of Velocity with and without jQuery

// var fadeIns = document.querySelectorAll('.hero-header,.site-header.alt');
// Velocity(fadeIns,{opacity:1,translateX:10},800);

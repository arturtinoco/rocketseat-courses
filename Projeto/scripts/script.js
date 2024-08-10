function toggleMode() {
    // Gets the document's class="light" and add/remove it, so it changes to light-mode or back
    const html = document.documentElement;
    html.classList.toggle('light');

    // Gets the img tag
    const img = document.querySelector('#profile img');

    // Checks if the document is in light-mode or not, and changes img attributes respectively
    if (html.classList.contains('light')) {
        img.setAttribute('src', './images/avatar-light.png');
    } else {
       img.setAttribute('src', './images/avatar.png');
    }
    
    
}
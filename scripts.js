const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=theme]");



const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)

const themes = {
    light: {
        background: getStyle(html, "--background"),
        primaryColor: getStyle(html, "--primary-color"),
        secondaryColor: getStyle(html, "--secondary-color"),
        textColor: getStyle(html, "--text-color"),
    },
    dark: {
        background: "#151515",
        primaryColor: "#1C1C1C",
        secondaryColor: "#FFFFFF",
        textColor: "#FFFFFF",
    }
};

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

function setTheme(newTheme) {
    const themeColors = themes[newTheme]; // Seleciona o tema para aplicar
  
    Object.keys(themeColors).map(function(key) {
        html.style.setProperty(transformKey(key), themeColors[key])
    });
    

    localStorage.setItem('theme', newTheme);
}

const theme = localStorage.getItem('theme');
if( theme ) {
  setTheme(theme)
}

const darkModeToggle = document.querySelector('input[name=theme]');
    darkModeToggle.addEventListener('change', function({ target }) {
        setTheme(target.checked ? 'dark' : 'light');
});
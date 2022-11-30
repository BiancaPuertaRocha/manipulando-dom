function toggle_dark_mode(){
    var elements_list = ["body", "footer", "button"]
    for(var i in elements_list){
        var elements = document.getElementsByTagName(elements_list[i])
        for (var k in elements){
            var classList = elements[k].classList
            if(classList != undefined)
                classList.toggle("dark-mode");
        }
    }
    
}

//pela instrutora:
/**
function changeMode() {
	changeClasses();
	changeText();
}

function changeClasses() {
	button.classList.toggle(darkModeClass);
	h1.classList.toggle(darkModeClass);
	body.classList.toggle(darkModeClass);
	footer.classList.toggle(darkModeClass);
}

function changeText() {
	const lightMode = 'Light Mode';
	const darkMode = 'Dark Mode';

	if (body.classList.contains(darkModeClass)) {
		button.innerHTML = lightMode;
		h1.innerHTML = darkMode + ' ON';
		return;
	}

	button.innerHTML = darkMode;
	h1.innerHTML = lightMode + ' ON';
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode);
 */

/*
STRINGS (tekstas)

iniciajivo budai:
-viengubos (') kabutes
-dvigubos (") kabutes
-backtick (`) kabutes

*/


const kabutes1 = 'labas';
const kabutes2 = "rytas";

console.log(kabutes1);
console.log(kabutes2);

// Viengubos (') kabutes
const kabutes21 = "Viengubos (') kabutes";
console.log(kabutes21);

// Dvigubos (") kabutes
const kabutes12 = 'Dvigubos (") kabutes';
console.log(kabutes12);

// Viengubos (') ir dvigubos (") kabutes
const kabutes2e = "Viengubos (') ir dvigubos (\") kabutes";
console.log(kabutes2e);

const kabutes1e = 'Viengubos (\') ir dvigubos (") kabutes';
console.log(kabutes1e);

// Tekste backslash \ yra jega
const backslash = 'Tekste backslash \\\' yra jega'
console.log(backslash);

const vardas = 'Vardenis';
const pavarde = 'Pavardenis';

const fullName = vardas + ' ' + pavarde;
console.log(fullName);

// sveiki, as esu Vardenis!
const sayHi = 'sveiki, as esu ' + vardas + '!'
console.log(sayHi);

// \n = enter
// \t = tab
const imgSrc = './img/logo.png';
const HTML = '<header>\n\
                <img src="' + imgSrc + '" alt="logo" class="logo">\n\
                <nav>\n\
                    <a href="#">Link</a>\n\
                    <a href="#">Link</a>\n\
                    <a href="#">Link</a>\n\
                    <a href="#">Link</a>\n\
                </nav>\n\
            </header>';

console.log(HTML);

const H2 = `<header>
                <img src="${imgSrc}" alt="logo" class="logo">
                <nav>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                </nav>
            </header>`;
console.log(H2);

const demo = 'asd ${imgSrc} asd';
console.log(demo);


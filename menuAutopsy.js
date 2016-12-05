/**
 * Created by Ъ- on 29.09.2015.
 */
/*VISUAL EFFECTS*/


function changeLocality(id1, crd1, id2, crd2, side) { //смещение двух блоков
    var e1 = document.getElementById(id1);
    var e2 = document.getElementById(id2);
    var zIndex = getComputedStyle(e1).zIndex;

    if (zIndex !== '12') e1.style.zIndex = '12';
    else e1.style.zIndex = '0';

    if (side == 'right') {
        var compStyleRight1 = getComputedStyle(e1).right;
        var compStyleRight2 = getComputedStyle(e2).right;

        if (compStyleRight1 !== crd1) e1.style.right = crd1;
        else e1.style.right = '';

        if (compStyleRight2 !== crd2) e2.style.right = crd2;
        else e2.style.right = '';
    }
    else {
        var compStyleLeft1 = getComputedStyle(e1).left;
        var compStyleLeft2 = getComputedStyle(e2).left;

        if (compStyleLeft1 !== crd1) e1.style.left = crd1;
        else e1.style.left = '';

        if (compStyleLeft2 !== crd2) e2.style.left = crd2;
        else e2.style.left = '';
    }
}

function changeLocalityLeft(id, crd) { //смещение от левого края, и по z-index
    var e = document.getElementById(id);
    var computedStyle = getComputedStyle(e).left;
    var zIndex = getComputedStyle(e).zIndex;

    if (computedStyle !== crd) e.style.left = crd;
    else e.style.left = '';

    if (zIndex !== '12') e.style.zIndex = '12';
    else e.style.zIndex = '0';
}

function resetLocalityLeft(id) {
    var e = document.getElementById(id);
    e.style.left = '';
    e.style.zIndex = '0';
}


function changeStyle(id, newStyle){
    var element = document.getElementById(id);
    var className = element.className;
    if (className.indexOf(newStyle) == -1 ) className += newStyle;
    else className = className.replace(newStyle, '');
    element.className = className;
}

function changeStyleOneOff(id, newStyle){
    var element = document.getElementById(id);
    var className = element.className;
    if (className.indexOf(newStyle) == -1 ) className += newStyle;
    element.className = className;
}

function changeStyleIfChecked(id, idCheckbox, newStyle){
    var element = document.getElementById(id);
    var className = element.className;
    var checkbox = document.getElementById(idCheckbox);
    if (checkbox.checked) {
        if (className.indexOf(newStyle) == -1) className += newStyle;
        else className = className.replace(newStyle, '');
        element.className = className;
    }
}

function changeStyleIfNoChecked(id, idCheckbox, newStyle){
    var element = document.getElementById(id);
    var className = element.className;
    var checkbox = document.getElementById(idCheckbox);
    if (!checkbox.checked) {
        if (className.indexOf(newStyle) == -1) className += newStyle;
        else className = className.replace(newStyle, '');
        element.className = className;
    }
}

function changeStyleIfSelected(id, idSelect, newStyle, optionNumber){
    var element = document.getElementById(id);                           //доступ к блоку
    var select = document.getElementById(idSelect);                   //доступ к селекту
    var index = select.options[select.selectedIndex].index;         //какой выбрали option
    var className = element.className;

    if (optionNumber) {
        if (index == (optionNumber-1)){   							//выбор option, тот который указан в optionNumber
            if (className.indexOf(newStyle) == -1) className += newStyle; //стиль новый, если устанвлен старый
            element.className = className;
        }
        else {
            if (className.indexOf(newStyle) !== -1) {
                className = className.replace(newStyle, ''); //сброс нового стиля если, если установлен новый
                element.className = className;
            }
        }
    }
    else {
        if (index == 0){
            console.log('else2');
            if (className.indexOf(newStyle) == -1) className += newStyle;
            element.className = className;
        }
        else {
            if (className.indexOf(newStyle) !== -1) {
                className = className.replace(newStyle, ''); //сброс нового стиля если, если установлен новый
                element.className = className;
            }
        }
    }

}

function changeStyleAllExceptSelected(id, idSelect, newStyle, optionNumber){
    var element = document.getElementById(id);                           //доступ к блоку
    var select = document.getElementById(idSelect);                   //доступ к селекту
    var index = select.options[select.selectedIndex].index;         //какой выбрали option
    var className = element.className;

    if (optionNumber) {
        if (index !== (optionNumber-1)){   							//выбор option, тот который указан в optionNumber
            if (className.indexOf(newStyle) == -1) className += newStyle; //стиль новый, если устанвлен старый
            element.className = className;
        }
        else {
            if (className.indexOf(newStyle) !== -1) {
                className = className.replace(newStyle, ''); //сброс нового стиля если, если установлен новый
                element.className = className;
            }
        }
    }
    else {
        if (index !== 0){
            if (className.indexOf(newStyle) == -1) className += newStyle;
            element.className = className;
        }
        else {
            if (className.indexOf(newStyle) !== -1) {
                className = className.replace(newStyle, ''); //сброс нового стиля если, если установлен новый
                element.className = className;
            }
        }
    }
}

function changeSelectBySelect(idSelectSettings, idTransformedSelect, pattern){
    var selectSettings = document.getElementById(idSelectSettings);
    var transformedSelect = document.getElementById(idTransformedSelect);
    var selectSettingsIndex = selectSettings.options[selectSettings.selectedIndex].index;         //какой выбрали option
    var transformedSelectIndex = transformedSelect.options[transformedSelect.selectedIndex].index;//какой выбрали option
    var re = /(^\d-\d$)|(^(\d,)*\d-\d$)/;
    var subStringSet, setNumbers, transformNumber;
    for (var i = 2; i < arguments.length; i++) {
        if (!re.test(arguments[i])) console.log('Patterns error');
        else {
            subStringSet = arguments[i].slice(0, arguments[i].indexOf('-'));
            setNumbers = subStringSet.replace(/,/g,'');
            transformNumber = arguments[i].substr(-1);
            for (var j = 0; j < setNumbers.length; j++){
                if (selectSettingsIndex == setNumbers[j]-1){
                    if (transformedSelectIndex+1 !== transformNumber){
                        transformedSelect.selectedIndex = transformNumber-1;
                    }
                }
            }
        }
    }
}

function changeSelectByCheckbox(idSelect, idCheckbox, selectSettingIndex, selectResetIndex) {
    var select = document.getElementById(idSelect);
    var checkbox = document.getElementById(idCheckbox);
    if (checkbox.checked){
        select.selectedIndex = selectSettingIndex-1;
    }
    else {
        select.selectedIndex = selectResetIndex-1;
    }
}

function onlyOneCheckboxChecked(idCheckbox){
    for (var i = 0, checkbox = document.getElementById(arguments[i]); i < arguments.length; i++){
        if (checkbox.checked) checkbox.checked = false;
    }
}

function resetNewStyle(id) {
    for (var i = 0; i < arguments.length; i++) {
        var element = document.getElementById(arguments[i]);
        var className = element.className;
        var re = /\s/;
        var t = className.search(re);
        var oldClass = '';
        if (t > 0) {
            oldClass = className.slice(0, t);
            element.className = oldClass;
        }
    }
}

function resetStyleIfChecked(id, idCheckboxButton, newStyle){
    var element = document.getElementById(id);
    var checkboxButton = document.getElementById(idCheckboxButton);
    if (checkboxButton.checked) element.className = newStyle;
}

function viewDiv(id, heightNum) {
    var el = document.getElementById(id);
    var height = getComputedStyle(el).height;
    var opacity = getComputedStyle(el).opacity;
    var dspl = getComputedStyle(el).display;

    if (height == '0px') el.style.height = heightNum;
    else el.style.height = '0px';

    if (opacity == '0') el.style.opacity = '1';
    else el.style.opacity = '0';

    if (dspl == 'none') el.style._display = 'block';
    else el.style._display = 'none';
}

function viewDivReset(id) {
    var el = document.getElementById(id);
    el.style.height = '0px';
    el.style.opacity = '0';
    el.style._display = 'none';
}

function hideExpandDivByCheckbox (elementId, checkboxId, checkOrUncheck, height) {
    var element = document.getElementById(elementId);
    var checkbox = document.getElementById(checkboxId);
    if (checkOrUncheck == 1) {				//hide on uncheck
        if (checkbox.checked) {
            element.style.opacity = '1';
            element.style.height = height;
        }
        else {
            element.style.opacity = '0';
            element.style.height = '0px';
        }
    }
    else {									 //hide on check
        if (checkbox.checked) {
            element.style.opacity = '0';
            element.style.height = '0px';
//                   element.style._display = 'none';
        }
        else {
            element.style.opacity = '1';
            element.style.height = ''; 		//reset height
//                    element.style._display = '';
        }
    }
}

function expandDivTroughSelect1(idSelect, id, heightNum) {
    var el = document.getElementById(id);                    //доступ к блоку
    var select = document.getElementById(idSelect);          //доступ к селекту
    var index = select.options[select.selectedIndex].index;  //какой выбрали option
    if (index !== 0) {                                       //если выбран не 1 option, скрываем блок
        el.style.height = heightNum;
        el.style.opacity = '1';
    }
    else {
        el.style.height = '0px';
        el.style.opacity = '0';
    }
}

function expandDivTroughSelect2(idSlct, optionNum, id, heightNum) { //только на один option
    var el = document.getElementById(id);                           //доступ к блоку
    var select = document.getElementById(idSlct);                   //доступ к селекту
    var index = select.options[select.selectedIndex].index;         //какой выбрали option
    if (index == optionNum) {                                       //если выбран не 1 option, скрываем блок
        el.style.height = heightNum;
        el.style.opacity = '1';
    }
    else {
        el.style.height = '0px';
        el.style.opacity = '0';
    }
}

/*AUTOPSY */

function getTextForm(inputId, outputId) {
    var forma = document.getElementById(inputId).value; // Объявляем переменную равную значению введенному
    var div = document.createElement("div");            // Создаем элемент div
    div.innerHTML = forma;                              // Наполняем созданный div
    document.getElementById(outputId).appendChild(div); //вывод данных

}



function ISchecked(id) { //проверка на нажатие
    return document.getElementById(id).checked;
}

function checkCheckboxesOR(id) {
    for (var i=0; i<arguments.length; i++) {
        if (document.getElementById(arguments[i]).checked) return true;
    }
    return false;
}

function checkCheckboxesAND(id) {
    for (var i=0; i<arguments.length; i++) {
        if (!document.getElementById(arguments[i]).checked) return false;
    }
    return true;
}

//if (element) return true;
//else return false;

function resetFormElements(){ 								//reset input (text, checkbox, radio), textarea and select
    for (var i=0; i<arguments.length; i++) {				//you need to add any number of IDs elements in the function arguments
        var element = document.getElementById(arguments[i]);
        var name = element.tagName;
        var type = element.getAttribute('type');
        if (name == 'INPUT') {
            if (type == 'text') element.value = '';
            else if (type == 'checkbox' || type == 'radio') element.checked = element.defaultChecked;
        }
        if (name == 'TEXTAREA') element.value = '';
        if (name == 'SELECT') {
            for (var j = 0, defaultSelectedMarker = false; j < element.options.length; j++) {
                if (element.options[j].defaultSelected) {
                    element.selectedIndex = j;
                    defaultSelectedMarker = true;
                    break;
                }
                if (!defaultSelectedMarker) element.selectedIndex = 0; //если по умолчанию нет, тогда сброс на первый option
            }

        }
    }
}

function resetForm(id) {
    document.getElementById(id).reset();
}

function resetTextarea(){
    for (var i=0; i<arguments.length; i++) {
        var textarea = document.getElementById(arguments[i]);
        textarea.value = '';
    }
}

function ISchecked_AndOutputArrayElem(id, item, num) { //проверка на нажатие
    var element = document.getElementById(id).checked;
    if (num == 1) {
        if (element) return item;
        else  return false;
    }
    else {
        if (element) return false;
        else  return item;
    }
}

function ISchecked_AndOutputArrayElem2(id, item1, item2, num) { //проверка на нажатие
    var element = document.getElementById(id).checked;
    if (num == 1) {
        if (element) return item1;
        else  return item2;
    }
    else {
        if (element) return item2;
        else  return item1;
    }
}

function checkboxChecked(checkboxSetId, checkboxChangeId) {
    var checkboxSet = document.getElementById(checkboxSetId);
    for (var i=1; i<arguments.length; i++) {
        var checkboxChange = document.getElementById(checkboxChangeId);
        if (checkboxSet.checked) checkboxChange.checked = true;
        else checkboxChange.checked = false;
    }
}

function checkAreaForFill(id, regExp) {
    var q = document.getElementById(id).value;
    return regExp.test(q);
}


function getValueFromSelect(id) {
    return document.getElementById(id).value
}

function getOptionNumberOfSelect(idSelect){
    var select = document.getElementById(idSelect);
    return select.options[select.selectedIndex].index + 1;
}

function getFromTextarea(id) {
    return document.getElementById(id).value;
}

function getNumberFromTextarea(id) {
    return document.getElementById(id).value.replace (/\./, ',');
}


function getStringFromSelect(id, optQnt, array, elmArr) {
    for (var i = 1; i <= optQnt; i++, elmArr++) {
        if (document.getElementById(id).value == i) {
            return array[elmArr];
        }
    }
}

function getStringFromSelect2(idSelect, array, startArrayElement){
    var select = document.getElementById(idSelect);
    var index = select.options[select.selectedIndex].index;         //какой выбрали option
    return array[index + startArrayElement];

}

function verificationSelect(id, point) { //то ли выбрано, что задано в point (№ option)?
    var select = document.getElementById(id);
    var index = select.options[select.selectedIndex].index;
    if (index == point-1) return true;
    else return false;
}

function getStringEnumeration(idCheckbox, array, firstElement){
    var result = '', resultArray = [], arrayCounter = 0, arrayPlace = arguments[arguments.length - 1];
    if (!Array.isArray(arguments[arguments.length - 1])) { //last argument is not array?
        arrayCounter  = arguments[arguments.length - 1];
        arrayPlace = arguments[arguments.length - 2]; // the array will be the penultimate argument

    }

    for (var i = 0; i < arguments.length; i++, arrayCounter++) {
        if (Array.isArray(arguments[i])) break;
        if (!document.getElementById(arguments[i]).checked) {
            resultArray.push(arrayPlace[arrayCounter]);
        }
    }

    result = resultArray.join(', '); //making the string
    result = result.charAt(0).toUpperCase() + result.substr(1); //the first letter is capitalized

    return result;
}

function getStringEnumeration2(idCheckbox, array, firstElement){
    var result = '', resultArray = [], arrayCounter = 0, arrayPlace = arguments[arguments.length - 1];
    if (!Array.isArray(arguments[arguments.length - 1])) { //last argument is not array?
        arrayCounter  = arguments[arguments.length - 1];
        arrayPlace = arguments[arguments.length - 2]; // the array will be the penultimate argument

    }

    for (var i = 0; i < arguments.length; i++, arrayCounter++) {
        if (Array.isArray(arguments[i])) break;
        if (!document.getElementById(arguments[i]).checked) {
            resultArray.push(arrayPlace[arrayCounter]);
        }
    }

    result = resultArray.join(' и '); //making the string
    result = result.charAt(0).toUpperCase() + result.substr(1); //the first letter is capitalized

    return result;
}


/*numbers */

function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

function randomIntegerMultiple(min, max, num) {
    var rand = Math.floor(Math.random() * (max - min + 1)) + min;
    return Math.floor(rand / num) * num;
}

function getRandAndAddInValue(id, min, max){
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    document.getElementById(id).value = rand;
}

function get05RandAndAddInValue(id, min, max){ //с десятичной дробью
    var rand = Math.random() * (max - min) + min;
    document.getElementById(id).value = Math.round((rand)*10)/10;
}

function get5RandAndAddInValue(id, min, max, num) { //кратное num
    var rand = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById(id).value = Math.floor(rand/num)*num;
}

/* -----  */

function countOfOject(obj) {
    var t = typeof(obj);
    var i = 0;
    var x;
    if (t != "object" || obj == null) return 0;
    for (x in obj) i++;
    return i;
}

function getProp(obj) {
    var res = "";
    for (var i in obj) // обращение к свойствам объекта по индексу
        (typeof(obj[i]) == 'function') ? res += obj[i]() : res += obj[i];
    return res;
}

/*TEETH*/
function push(input) {
    var mark = ' ';
    if (document.getElementsByName('raz')[0].checked == true) mark = ' Н ';
    else if (document.getElementsByName('raz')[1].checked == true) mark = ' Ж ';
    else if (document.getElementsByName('raz')[2].checked == true) mark = ' Б ';
    else if (document.getElementsByName('raz')[3].checked == true) mark = ' К ';
    else if (document.getElementsByName('raz')[4].checked == true) mark = ' Ц ';
    else if (document.getElementsByName('raz')[5].checked == true) mark = ' Кр ';
    input.value = mark;
}

function getPushSymb() {
    var mark = ' ';
    if (document.getElementsByName('raz')[0].checked == true) mark = ' Н ';
    else if (document.getElementsByName('raz')[1].checked == true) mark = ' Ж ';
    else if (document.getElementsByName('raz')[2].checked == true) mark = ' Б ';
    else if (document.getElementsByName('raz')[3].checked == true) mark = ' К ';
    else if (document.getElementsByName('raz')[4].checked == true) mark = ' Ц ';
    else if (document.getElementsByName('raz')[5].checked == true) mark = ' Кр ';
    return mark;
}

function resetTeeth(name, symb) {
    var elLength = document.getElementsByName(name).length;
    for (var i = 0; i < elLength; i++) {
            document.getElementsByName(name)[i].value = symb;
    }
}

function allTheSelectSymb(name) {
    var elLength = document.getElementsByName(name).length;
    for (var i = 0; i < elLength; i++) {
        document.getElementsByName(name)[i].value = getPushSymb();
    }
}

var symb = [' Н ',
    ' Ц ',
    ' К ',
    ' Кр ',
    ' Б ',
    ' Ж '
];

var textPhrasesArray = [
    'Зубы отсутствуют. ',
    'Все зубы целы. ',
    'На верхней и нижней челюсти определяются корни всех зубов. ',
    'Все зубы поражены кариесом. ',
    'На верхней и нижней челюсти все зубы из металла белого цвета. ',
    'На верхней и нижней челюсти все зубы из металла желтого цвета.',

    'На верхней челюсти ',
    'На нижней челюсти ',

    'зубы отсутствуют. ',
    'зубы целы. ',
    'определяются корни всех зубов. ',
    'все зубы поражены кариесом. ',
    'зубы из металла белого цвета. ',
    'зубы из металла желтого цвета.',
    'справа: ',
    'слева: ',
    'зубы целы; ',
    'зубы отсутствуют; '
];


//Filling the matrix
var matrix = [
    [' Ц ', ' Ц ', ' Ц ', ' Ц ', ' Ц ', ' Ц ', ' Ц ', ' Ц '],
    [' Ц ', ' Ц ', ' Ц ', ' Ц ', ' Ц ', ' Ц ', ' Ц ', ' Ц '],
    [' Ц ', ' Ц ', ' Ц ', ' Ц ', ' Ц ', ' Ц ', ' Ц ', ' Ц '],
    [' Ц ', ' Ц ', ' Ц ', ' Ц ', ' Ц ', ' Ц ', ' Ц ', ' Ц ']
];

function getMatrix(array) {
    var f = 0;
    for (var j = 0; j < 4; j++) {
        for (var i = 0; i < 8; i++, f++) {
            array[j][i] = document.getElementsByName('inp')[f].value;
        }
    }
}


function generate_table(array) {
    // get the reference for the body
    var body = document.getElementsByTagName("body")[0];

    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");

    // creating all cells
    for (var i = 0; i < 4; i++) {
        // creates a table row
        var row = document.createElement("tr");

        for (var j = 0; j < 8; j++) {
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            var cell = document.createElement("td");
            var cellText = document.createTextNode(array[i][j]);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        // add the row to the end of the table body
        tblBody.appendChild(row);
    }

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);
    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "1");
}


function getArray(nameArr, row, start, end) {
    var arrResult = [];
    for (var i = start, j = 0; i <= end; i++, j++) {
        arrResult[j] = nameArr[row][i];
    }
    console.log(arrResult);
    return arrResult;
}


function getUniqueElementOfArray(array, uniqueType, co1, co2, co3) {
    /*
     Получение массива уникальных(встречающихся) элементов либо их количества в предоставленном массиве или только его части
     array - имя массива. Массив может быть либо одномерный либо двухмерный.
     uniqueType - если 0, то ф-ция получает массив уникальных элементов
     если 1, то ф-ция получает число уникальных элементов
     co1, co2, co3 - координаты массива, непостоянные аргументы
     Если координаты не заданы, обрабатывается весь предоставленный массив
     Для одномерного предоставляется только co1 и co2
     Если для одномерного массива присутсвует и со3, то он не принимается во внимание
     Если для одномерного массива только один аргумент т.е. со1, то обрабатывается весь предоставленный массив
     Если для двухмерного массива присутствует <3 координат, то обрабатывается только  один ряд, указанный первым числом

     */

    if (array[0][0] == undefined) { //one-dimentional
        if (uniqueType == 0) { //output Unique elements
            if ((co1 == undefined && co2 == undefined && co3 == undefined) || (co2 == undefined && co3 == undefined)) {

                var result = [];
                nextInput:
                    for (var i = 0; i < array.length; i++) {
                        var str = array[i]; // для каждого элемента
                        for (var j = 0; j < result.length; j++) { // ищем, был ли он уже?
                            if (result[j] == str) continue nextInput; // если да, то следующий
                        }
                        result.push(str);
                    }

                return result;
            } else {
                var result = [];
                nextInput:
                    for (var i = co1; i <= co2; i++) {
                        var str = array[i]; // для каждого элемента
                        for (var j = 0; j < result.length; j++) { // ищем, был ли он уже?
                            if (result[j] == str) continue nextInput; // если да, то следующий
                        }
                        result.push(str);
                    }

                return result;


            }

        } else { //output number of Unique elements
            if ((co1 == undefined && co2 == undefined && co3 == undefined) || (co2 == undefined && co3 == undefined)) {
                var result = [],
                    counter = 0;

                nextInput: //метка
                    for (var i = 0; i < array.length; i++) {
                        var element = array[i]; // для каждого элемента
                        for (var j = 0; j < result.length; j++) { // ищем, был ли он уже?
                            if (result[j] == element) continue nextInput; // если да, то следующий, переход на внешний цикл
                        }
                        result.push(element);
                        counter++;
                    }
                console.log(counter);
                return counter;
            } else {


            }
        }
    } else { //two-dimentional
        if (uniqueType == 0) {
            if (co1 == undefined && co2 == undefined && co3 == undefined) {

                var result = [];

                for (var i = 0; i < array.length; i++) {
                    nextInput: for (var j = 0; j < array[i].length; j++) {
                        var str = array[i][j]; // для каждого элемента
                        for (var k = 0; k < result.length; k++) { // ищем, был ли он уже?
                            if (result[k] == str) continue nextInput; // если да, то следующий
                        }
                        result.push(str);
                    }
                }

                return result;
            } else if (co1 !== undefined && (co2 == undefined || co3 == undefined)) {

                var result = [];
                nextInput:
                    for (var j = 0; j < array[co1].length; j++) {
                        var str = array[co1][j]; // для каждого элемента
                        for (var k = 0; k < result.length; k++) { // ищем, был ли он уже?
                            if (result[k] == str) continue nextInput; // если да, то следующий
                        }
                        result.push(str);


                    }

                return result;


            } else {

                var result = [];
                nextInput:
                    for (var j = co2; j <= co3; j++) {
                        var str = array[co1][j]; // для каждого элемента
                        for (var k = 0; k < result.length; k++) { // ищем, был ли он уже?
                            if (result[k] == str) continue nextInput; // если да, то следующий
                        }
                        result.push(str);

                    }

                return result;

            }

        } else {
            if (co1 == undefined && co2 == undefined && co3 == undefined) {
                var result = [],
                    counter = 0;

                for (var i = 0; i < array.length; i++) {
                    nextInput: for (var j = 0; j < array[i].length; j++) {
                        var str = array[i][j]; // для каждого элемента
                        for (var k = 0; k < result.length; k++) { // ищем, был ли он уже?
                            if (result[k] == str) continue nextInput; // если да, то следующий
                        }
                        result.push(str);
                        counter++;
                    }
                }

                return counter;

            } else if (co1 !== undefined && (co2 == undefined || co3 == undefined)) {

                var result = [],
                    counter = 0;
                nextInput:
                    for (var j = 0; j < array[co1].length; j++) {
                        var str = array[co1][j]; // для каждого элемента
                        for (var k = 0; k < result.length; k++) { // ищем, был ли он уже?
                            if (result[k] == str) continue nextInput; // если да, то следующий
                        }
                        result.push(str);
                        counter++

                    }

                return counter;
            } else {
                var result = [],
                    counter = 0;
                nextInput:
                    for (var j = co2; j <= co3; j++) {
                        var str = array[co1][j]; // для каждого элемента
                        for (var k = 0; k < result.length; k++) { // ищем, был ли он уже?
                            if (result[k] == str) continue nextInput; // если да, то следующий
                        }
                        result.push(str);
                        counter++;
                    }


                return counter;


            }
        }

    }

}


function funcEcho(data, id) {
    var target = document.getElementById(id);
    var p = document.createElement("p");
    var content = document.createTextNode(data);
    p.appendChild(content);
    target.innerHTML = '';
    target.appendChild(p);
}


/*
 Обрабатывет массив-матрицу. Получает результат: откорректированная последовательность выбранных эелментов, добавляет надписи
 */
function joingArrayTeeth(array, row, arrSymb) {
    var arrResult = [],
        arrMiddle = [],
        result = '',
        arrayOutput = [];

    for (var i = 0; i < arrSymb.length; i++) {
        for (var j = 0; j < array[row].length; j++) {
            if (row % 2 !== 0) {
                if (arrSymb[i] == array[row][j]) arrMiddle.push(j + 1);
            } else {
                if (arrSymb[i] == array[row][j]) arrMiddle.push(8 + ((j + 1) - 1) * (-1));
            }
        }
        if (row % 2 == 0) arrMiddle.reverse();
        arrResult.push(arrMiddle);
        arrMiddle = [];
    }

    for (var z = 0; z < arrResult.length; z++) { // сокращение перечислений цифр 1,2,3,4, - будет 1-4
        for (var i = 0, tire = false, flow = false, flowcnt = 0; i < arrResult[z].length; i++) { //1,2,3 - восходящий поток
            if (arrResult[z][i] !== arrResult[z][i + 1] - 1) { //нет восходящего потока
                if ((i !== 0) && (arrResult[z][i] !== arrResult[z][i - 1] + 1)) { //одиночный, последний-одиночный
                    result += ',' + arrResult[z][i];
                    tire = false;

                } else {
                    if (flowcnt == 1) { //если поток только из 2 цифр, например: 4,5,
                        result += ',' + arrResult[z][i];
                        flow = false;
                        flowcnt = 0;
                        tire = false;
                    } else {
                        result += arrResult[z][i]; //первый-одиночный, последний-крайний, крайний
                        flow = false;
                        flowcnt = 0;
                        tire = false;
                    }

                }

            } else {
                if (flow == false) { //начальный,
                    if (i == 0) { //первый-начальный
                        result += arrResult[z][i];
                        flow = true;
                        flowcnt++;
                    } else {
                        result += ',' + arrResult[z][i];
                        flow = true;
                        flowcnt++;
                    }

                } else {
                    if (tire == false) { //промежуточный-тире
                        result += '-';
                        tire = true;
                        flowcnt++;

                    } else {
                        result; //промежуточный-0
                        flowcnt++;

                    }
                }
            }

        }
        if (result.length == 1 && z !== 2) result += ' зуб ';
        else if (result.length > 1 && z !== 2) result += ' зубы ';
        arrayOutput.push(result);
        result = '';
    }


    for (var v = 0; v < arrayOutput.length; v++) {
        switch (v) {
            case 0:
                if (arrResult[v].length !== 0)
                    (arrResult[v].length == 1) ? arrayOutput[v] += 'отсутствует' : arrayOutput[v] += 'отсутствуют';
                break;
            case 1:
                if (arrResult[v].length !== 0)
                    (arrResult[v].length == 1) ? arrayOutput[v] += 'целый' : arrayOutput[v] += 'целы';
                break;
            case 2:
                if (arrResult[v].length !== 0)
                    (arrResult[v].length == 1) ? arrayOutput[v] += ' представлен корнем' : arrayOutput[v] += ' представлены корнями';
                break;
            case 3:
                if (arrResult[v].length !== 0)
                    (arrResult[v].length == 1) ? arrayOutput[v] += ' поражен кариесом' : arrayOutput[v] += ' поражены кариесом';
                break;
            case 4:
                if (arrResult[v].length !== 0)
                    arrayOutput[v] += ' из белого металла';
                break;
            case 5:
                if (arrResult[v].length !== 0)
                    arrayOutput[v] += ' из желтого металла';
                break;
        }

    }


    //var tre = arrayOutput.length;

    for (var s = 0; s < arrayOutput.length; s++) { //удаление пустых элементов в массиве
        if (arrayOutput[s] == '') {
            arrayOutput.splice(s, 1);
            s = s - 1; //потому что splice сместил элементы


        }
    }

    arrayOutput = arrayOutput.join(', ');

    return arrayOutput;
}


//  MAIN FUNCTION

function getResultString(array, symbArray, textArray1) {
    var teethAll,
        teethMaxilla, teethMandible,
        teethMaxillaRight, teethMaxillaLeft,
        teethMandibleRight, teethMandibleLeft,

        result = 'No';

    //if (getUniqueElementOfArray(array, 1) == 1) teethAll = true;
    //else teethAll = false;


    (getUniqueElementOfArray(array, 1) == 1) ? teethAll = true : teethAll = false;


    if (teethAll) { //все однотипные
        if (array[0][0] == symbArray[0]) result = textArray1[0];
        else if (array[0][0] == symbArray[1]) result = textArray1[1];
        else if (array[0][0] == symbArray[2]) result = textArray1[2];
        else if (array[0][0] == symbArray[3]) result = textArray1[3];
        else if (array[0][0] == symbArray[4]) result = textArray1[4];
        else result = textArray1[5];

        return result;

    }


    (getUniqueElementOfArray(array, 1, 0) == 1 && getUniqueElementOfArray(array, 1, 1) == 1) ? teethMaxilla = true : teethMaxilla = false;
    (getUniqueElementOfArray(array, 1, 2) == 1 && getUniqueElementOfArray(array, 1, 3) == 1) ? teethMandible = true : teethMandible = false;

    if (teethMaxilla) { // все на ВЧ
        result = textArray1[6];

        if (array[0][0] == symbArray[0]) result += textArray1[8];
        else if (array[0][0] == symbArray[1]) result += textArray1[9];
        else if (array[0][0] == symbArray[2]) result += textArray1[10];
        else if (array[0][0] == symbArray[3]) result += textArray1[11];
        else if (array[0][0] == symbArray[4]) result += textArray1[12];
        else result = textArray1[13];
    } else {
        result = textArray1[6] + textArray1[14];
        result += joingArrayTeeth(array, 0, symb) + '; ' + textArray1[15] + joingArrayTeeth(array, 1, symb) + '. ';

    }


    if (teethMandible) { // все на HЧ
        result += textArray1[7];

        if (array[2][0] == symbArray[0]) result += textArray1[8];
        else if (array[2][0] == symbArray[1]) result += textArray1[9];
        else if (array[2][0] == symbArray[2]) result += textArray1[10];
        else if (array[2][0] == symbArray[3]) result += textArray1[11];
        else if (array[2][0] == symbArray[4]) result += textArray1[12];
        else result = textArray1[13];
    } else {
        result += textArray1[7] + textArray1[14];
        result += joingArrayTeeth(array, 2, symb) + '; ' + textArray1[15] + joingArrayTeeth(array, 3, symb) + '. ';

    }
    return result;
}

/*end teeth*/

var arr_commonPhrases = [
    ' цвета ',
    ' цвета, ',
    ' цвета. ',
    'синюшно-коричневого',
    'бледно-синюшного'
];

var arr_Dress = [
    'В секционную морга труп доставлен без одежды. ',
    'В секционную морга труп доставлен в одежде. С трупа снята и осмотрена следующая одежда: ',
    'Вся одежда поношенная ',
    'Вся одежда средней степени изношенности ',
    'Вся одежда слабой степени изношенности ',
    'без загрязнений',
    'загрязнена бытовой пылью',
    'со следами грязи',
    'со следами рвотных масс',
    'со следами засохшей жидкости буровато-красного цвета похожей на кровь',
    'загрязнена каловыми массами',
    ' и повреждений. ',
    ', без повреждений. ',
    '. Имеются следующие повреждения одежды: ',
    ' Других повреждений одежды не обнаружено.'
];

var arr_General = [
    'Труп мужского пола, ',
    'Труп женского пола, ',
    'крупного телосложения, ',
    'среднего телосложения, ',
    'слабого телосложения, ',
    'умеренного питания',
    'повышенного питания',
    'пониженного питания',
    'резко пониженного питания',
    ' и нормального физического развития. ',
    'Длина тела ',
    ' возраст на вид соответствует указанному выше. ',
    ' выглядит старше вышеуказанного  возраста. ',
    ' выглядит младше вышеуказанного возраста. ',
    ' на вид возраст: ',
    'Масса тела не измерялась. ',
    'Масса тела ',
    'вне трупных пятен мертвенно-бледного цвета, ',
    'вне трупных пятен бледно-серого цвета, ',
    'смуглый вне трупных пятен, ',
    'вне трупных пятен бледно-серого цвета с желтушным оттенком, ',
    'грязно-зеленого цвета, ',
    'бледно-серого цвета с розовым оттенком вне трупных пятен, ',
    'упругий, ',
    'мягкий, ',
    'дряблый, ',
    'без видимых участков подсыхания. ',
    'с участками подсыхания ',
    'Скелетные мышцы мягкие на ощупь',
    'Скелетные мышцы плотные на ощупь',
    ', рельеф их выражен хорошо. ',
    ' с умеренно выраженным рельефом. ',
    ', рельеф их выражен слабо. '

];
var arr_Decomposition = [
  'Кожный покров холодный на ощупь по всем поверхностям тела, ',
  'Кожный покров теплый на ощупь в подмышечных впадинах и внутренних поверхностях бедер, ',
  'Кожный покров тепловатый на ощупь по всем поверхностям тела, ',
  'Кожный покров тепловатый на ощупь в подмышечных впадинах и внутренних поверхностях бедер, ',
  'Трупные пятна синюшно-фиолетового цвета, ',
  'Трупные пятна синюшно-багрового цвета, ',
  'Трупные пятна розовато-красного цвета, ',
  'интенсивные, ',
  'слабой интенсивности ',
  'сливные, ',
  'очаговые ',
  'располагаются на задней поверхности шеи, спины и конечностей, за исключением мест сдавлений в области лопаток и ягодиц, ',
  'располагаются на заднебоковых поверхностях шеи, спины и конечностей, ',
  'располагаются на передней поверхности шеи, спины и конечностей, ',
  'располагаются на левой боковой поверхности шеи, туловища и конечностей, ',
  'располагаются на правой боковой поверхности шеи, туловища и конечностей, ',
  'при надавливании в трех рядом расположенных участках судебно-медицинским динамометром СМЭД-2 с силой 2 кг/см',
  'не изменяют свою окраску. ',
  'бледнеют, восстанавливая свою окраску через ',
  'исчезают, восстанавливая свою окраску через ',
  'Трупное окоченение умеренно развито во всех группах мышц. ',
  'Трупное окоченение хорошо развито во всех группах мышц. ',
  'Трупное окоченение плохо развито во всех группах мышц. ',
  'Трупное окоченение отсутствует во всех группах мышц. ',
  'Видимые признаки гниения отсутствуют. ',
  'Кожный покров на передней брюшной стенке темно-зеленого цвета (трупная зелень). ',
  'Кожный покров в паховых областях темно-зеленого цвета (трупная зелень). '
];

var arr_Damage = [
   'Кости свода черепа и лицевого скелета на ощупь целы. ',
   'Повреждений на волосистой части головы не обнаружено. ',
   ', без повреждений и кровоизлияний. ',
   ', без повреждений. ',
   ', без кровоизлияний. ',
   ' ребра на ощупь целы. ',
   ' на ощупь целы. ', /*6*/
   'позвоночник',
   'кости таза',
   'ключицы',
   'лопатки',
    '',
   'Спина и поясничная область без повреждений. ',
   'Спина без повреждений. ',
   'Поясничная область без повреждений. ',
    'Других изменений и каких-либо повреждений при наружном исследовании трупа не обнаружено.',
    'Других повреждений и изменений при наружном исследовании трупа не обнаружено.',
    'При исследовании трупа обнаружены следующие телесные повреждения: ' /*17*/,
    'не повреждена, ',
    ' верхние ',  //19
    ' нижние ',
    'конечности ',
    'грудина',   //22
    'позвоночник',
    'кости таза',
    'ключицы',
    'лопатки',
    ' целы. ', //27
    'Других изменений и каких-либо повреждений при внутреннем исследовании трупа не обнаружено.',
    'Других повреждений и изменений при внутреннем исследовании трупа не обнаружено.',
    'кости ', //30
    'Кости ', //31
    ' верхних ',
    ' нижних ',
    'конечностей ',
    'Кости '

];

var arr_Head = [ /*array5*/
    'Волосы на голове отсутствуют. ',
    'Волосы на голове темно-русые',
    'Волосы на голове русые',
    'Волосы на голове светло-русые',
    'Волосы на голове черные',
    'Волосы на голове седые',
    ' с сединой',
    'Волосы на голове ',
    ', длиной до ',
    'Лицо бледно-синюшного цвета',
    'Лицо бледно-серого цвета',
    'Лицо синюшно-фиолетового цвета',
    'Лицо синюшно-багрового цвета',
    'Лицо синюшно-розового цвета',
    ', не одутловатое. ',
    ', одутловатое. ',
    'Глаза закрыты, ',
    'Глаза открыты, ',
    'роговицы прозрачные, ',
    'роговицы мутные, ',
    'радужная оболочка светло-коричневого цвета. ',
    'радужная оболочка темно-коричневого цвета. ',
    'радужная оболочка голубого цвета. ',
    'радужная оболочка черного цвета. ',
    'радужная оболочка светло-зеленого цвета. ',
    'радужная оболочка ',
    'Соединительные оболочки глаз бледно-розового цвета, ', /*25*/
    'Соединительные оболочки глаз серо-розового цвета, ',
    'Соединительные оболочки глаз желтого цвета, ',
    'Соединительные оболочки глаз светло-желтого цвета, ',
    'гладкие',
    'шероховатые',
    'Кости и хрящи носа на ощупь целы. ',
    'Кости носа на ощупь целы. ',
    'Хрящи носа на ощупь целы. ',
    'Выделений из наружных отверстий носовых ходов нет. ', /*35*/
    'Из наружных отверстий носовых ходов кровянистые выделения. ',
    'Из наружных отверстий носовых ходов выделения светло-желтого цвета. ',
    'Из наружных отверстий носовых ходов выделения темно-желтого цвета. ',
    'Из наружных отверстий носовых ходов выделения зеленого цвета. ',
    'закрыты',
    'Слизистая оболочка преддверия и полости рта синюшно-розового цвета', /*41*/
    'Слизистая оболочка преддверия и полости рта бледно-синюшного цвета',
    'Слизистая оболочка преддверия и полости рта бледно-серого цвета',
    'Слизистая оболочка преддверия и полости рта бледно-желтого цвета',
    'Переходная кайма губ багрово-синюшного цвета, ',
    'Переходная кайма губ синюшного цвета, ',
    'Переходная кайма губ бледно-синюшного цвета, ',
    'Переходная кайма губ бледно-розового цвета, ',
    'гладкая. ',
    'шероховатая. ',
    'Ушные раковины без повреждений, из наружных слуховых проходов ', /*51*/
    'Из наружных слуховых проходов ',
    'выделений нет. ',
    'кровянистые выделения. ',
    'выделения светло-желтого цвета. ',
    'выделения темно-желтого цвета. ',
    'выделения зеленого цвета. ',
    'Видимые зубы целы. ',
    'Зрачки равномерно округлой формы, по ' /*59*/

];

var arr_NeckTorso = [
    'Шея средней длины, развита пропорционально туловищу',
    'Подмышечные впадины свободные',
    'Грудная клетка цилиндрической формы, ',
    'Грудная клетка бочкообразной формы, ',
    'Грудная клетка конической формы, ',
    'Грудная клетка килевидной формы, ',
    'Грудная клетка воронкообразной формы, ',
    'Грудная клетка ладьевидной формы, ',
    'симметричная', /*8*/
    'асимметричная',
    'Молочные железы плоские, мягкие на ощупь, ',
    'Молочные железы округлой формы, мягкие на ощупь, ',
    'околососковая пигментация серо-розового цвета, выделений из сосков нет. ',
    'околососковая пигментация светло-коричневого цвета, выделений из сосков нет. ',
    'околососковая пигментация буровато-красного цвета, выделений из сосков нет. ',
    'Живот симметричный, ', /*15*/
    'Живот асимметричный, ',
    'расположен на уровне передней поверхности грудной клетки. ',
    'расположен ниже уровня передней поверхности грудной клетки. ',
    'расположен выше уровня передней поверхности грудной клетки. ', /*19*/
    'Оволосение на лобке выражено хорошо, ',
    'Оволосение на лобке слабо выражено, ',
    'Оволосение на лобке отсутствует. ',
    'по мужскому типу. ', /*23*/
    'по женскому типу. ',
    'Яички в мошонке. ',
    'Выделений из наружного отверстия мочеиспускательного канала нет. ', /*26*/
    'Из наружного отверстия мочеиспускательного канала кровянистые выделения. ',
    'Из наружного отверстия мочеиспускательного канала выделения светло-желтого цвета. ',
    'Из наружного отверстия мочеиспускательного канала выделения темно-желтого цвета. ',
    'Из наружного отверстия мочеиспускательного канала темно-зеленые выделения. ',
    'Выделений из половых путей нет. ', /*31*/
    'Определяются кровянистые выделения из половых путей. ',
    'Из половых путей определяются выделения светло-желтого цвета. ',
    'Из половых путей определяются выделения темно-желтого цвета. ',
    'Из половых путей определяются выделения темно-зеленого цвета. ',
    'Задний проход сомкнут, ',/*36*/
    'Задний проход зияет, ',
    'кожа вокруг него чистая. ',
    'кожа вокруг него загрязнена каловыми массами. ',
    'на коже вокруг него следы буровато-красной жидкости похожей на кровь. '
];

var arr_headbrain = [
    'Вскрыты и отсепарированы мягкие ткани волосистой части головы. На ощупь они плотно-эластичные, ' +
    'с внутренней поверхности розовато-желтого цвета, влажные, блестящие, без кровоизлияний. ' +
    'Височные мышцы на разрезах красно-коричневого цвета, без кровоизлияний. ' /*0*/,
    'Кости свода черепа целы. ',
    'Кости основания черепа целы. ',
    'Толщина костей черепа в области анатомического распила: лобная кость - ', /*3*/
    'правая и левая височные кости -  ',
    'затылочная кость - ',
    'Твердая мозговая оболочка ' /*6*/,
    'не напряжена, ',
    'напряжена, ',
    'от костей черепа отделяется с трудом, ',
    'легко отделяется от костей черепа, ',
    'на всем протяжении светло-сероватая, гладкая, блестящая, ', /*11*/
    'в пазухах ее темная жидкая кровь. ',
    'в пазухах ее темная жидкая кровь и темные рыхлые свертки. ',
    'Полушария головного мозга симметричны, борозды несколько сглажены, извилины слегка уплощены. ',
    'Паутинная мозговая оболочка ',
    'гладкая, блестящая кровоизлияний под ней нет, ', /*16*/
    'сосуды ее не расширены, умеренного кровенаполнения. ',
    'сосуды ее расширены, полнокровные. ',
    'По ходу борозд под паутинной мозговой оболочкой содержится бесцветная прозрачная жидкость в небольшом количестве. ',
    'Полушария головного мозга симметричные. Рельеф извилин и борозд головного мозга слегка сглажен. ',
    'Масса головного мозга ',
    'Ткань головного мозга на ощупь мягко-тестоватой консистенции, на разрезах ',
    'умеренного кровенаполнения. ', /*23*/
    'Желудочки мозга не расширены, симметричны, заполнены прозрачной розоватой жидкостью; внутренняя оболочка желудочков блестящая, гладкая, сосудистые сплетения серовато-красные, ',
    'Подкорковые ядра обычного анатомического строения, симметричные. ',
    'Артерии основания головного мозга слегка утолщены, слабоэластичные, без очаговых изменений. ',
    'Артерии основания головного мозга на большем протяжении с непрозрачными светло-желтоватыми циркулярно утолщенными стенками и желтыми плотными атеросклеротическими бляшками, суживающие просвет на 1/2. ',
    'Артерии основания головного мозга практически на всем протяжении с непрозрачными светло-желтоватыми циркулярно утолщенными стенками и большим количеством желтых плотных атеросклеротических бляшек, суживающие просвет на 2/3. ',
    'Артерии основания головного мозга тонкие, слабоэластичные, без очаговых изменений. ',
    'Мозжечок и ствол мозга на разрезах с хорошо различимым обычным симметричным рисунком строения, без кровоизлияний. ', /*30*/
    'Эпифиз эластичный на ощупь, неправильной овальной формы, размерами ',
    'Эпифиз эластичный на ощупь, шаровидной формы, размерами ',
    'с поверхности и на разрезе светло-коричневого цвета. ',
    'Гипофиз бобовидной формы, размерами ',/*34*/
    ' см, эластичный на ощупь, с поверхности и на разрезе синюшно-серого цвета с красным оттенком. ',
    'Каких-либо кровоизлияний и очагов размягчения в веществе мозга не выявлено. '
];

var arr_pletora = [
    'умеренного кровенаполнения. ',
    'умеренного кровенаполнения, ',
    'полнокровная. ',
    'полнокровные. ',
    'полнокровная, ',
    'полнокровные, ', /*5*/
    'неравномерного кровенаполнения. ',
    'неравномерного кровенаполнения, ',
    'малокровная, ',
    'малокровная. ',
    '',
    ''
];

var arr_visceralGeneral = [
    'Подкожно-жировая клетчатка ',
    'толщиной на уровне грудины ',
    'на уровне пупка ',
    'Мягкие ткани передне-боковых отделов шеи, груди и живота ', /*3*/
    'Общее расположение органов брюшной полости правильное. Большой сальник розовато-желтого цвета, частично закрывает петли кишечника. Брюшина гладкая, влажная, полупрозрачная, белесовато-серого цвета, без повреждений. Спаек, сращений и посторонней жидкости в  брюшной полости не обнаружено. Червеобразный отросток не изменен, свободно расположен на своей брыжейке. ',
    'Передний край печени заострен, ', /*5*/
    'Передний край печени слегка закруглен, ',
    'Передний край печени закруглен, ',
    'выступает из-под края реберной дуги на ',
    'не выступает из-под края реберной дуги. ', /*9*/
    'Петли кишечника и желудок умеренно вздуты газами.  Высота стояния куполов диафрагмы: справа – на уровне 4 межреберья, слева – на уровне 5 ребра. Общее расположение органов грудной полости правильное. ',
    'Клетчатка переднего и заднего средостения не изменена, без кровоизлияний. Сердечная сорочка розовато-серого цвета, гладкая, блестящая, внутренняя поверхность ее гладкая, в полости сердечной сорочки 10 мл желтоватой прозрачной жидкости. Кровоизлияний в области сосудисто-нервных пучков шеи не обнаружено. Ход магистральных артерий шеи не нарушен. В просветах яремных вен и сонных артерий следы жидкой темно-красной крови. ',
    'Сонные артерии проходимы, внутренняя их оболочка гладкая, блестящая. ',
    'Сонные артерии проходимы, внутренняя их оболочка гладкая, на небольших учаcтках гладкая, блестящая, а на большем протяжении желтая, бугристая с многочисленными серыми плотными возвышающимися атеросклеротическими бляшками, суживающими просвет на половину. ',
    'Внутренние органы извлечены единым органокомплексом и исследованы разрезами раздельно и по системам. ',
    'Слизистая языка бледно-розовая, в области спинки обложена светло-буроватым налетом, сосочки ее выражены хорошо, мышцы языка на разрезе красновато-коричневые, без рубцов и кровоизлияний; язычная миндалина не увеличена, бледно-синюшная. Вход в гортань и глотку свободен, голосовая щель зияет. Подъязычная кость и хрящи гортани без повреждений, кровоизлияний в мягких тканях вокруг них нет.   ',
    ' Щитовидная железа на ощупь плотно-эластичная, имеет двухдольчатое строение, размерами: правая доля ',
    'левая доля ',
    'ткань ее на разрезе мелкозернистая, блестящая, ',
    'Паращитовидные железы не различимы. ',
    'В просвете пищевода, в нижней трети, незначительное количество серовато-коричневой слизи, слизистая его серовато-синюшная, со слегка сглаженной складчатостью. ',
    'В просветах трахеи и главных бронхов незначительное количество желтовато-розовой слизи, слизистая дыхательных путей бледно-розовая, гладкая, блестящая. ', /*20*/
    'Перибронхиальные и паратрахеальные лимфатические узлы размерами по 0,5х0,4х0,5 см, эластичные, на разрезе темно-серые, '
];

var arr_visceraColor = [
    'серовато-желтого цвета, ',
    'бледно-желтого цвета, ',
    'серо-красного цвета',
    'темно-красного цвета',
    'бледно-красного цвета',
    'желтоватой полупрозрачной жидкости, ', /*5*/
    'желтой мутноватой жидкости, ',
    'красноватой полупрозрачной жидкости, ',
    'желтоватая полупрозрачная жидкость: ', /*8*/
    'желтая мутноватая жидкость: ',
    'красноватая полупрозрачная жидкость: ',
    'желтоватой прозрачной жидкости'
];

var arr_lungs = [
    'Легкие наполовину заполняют плевральные полости. ',
    'Легкие на 1/3 заполняют плевральные полости. ',
    'Легкие почти полностью заполняют плевральные полости. ',
    'Спаек, сращений, посторонней жидкости в плевральных полостях нет. Пристеночная плевра серо-синюшного цвета, без кровоизлияний. ',
    'Спаек и сращений в плевральных полостях нет. Пристеночная плевра серо-синюшного цвета, без кровоизлияний. ',
    'В правой плевральной полости ', /*5*/
    'В левой плевральной полости ',
    'в левой посторонней жидкости не обнаружено. ',
    'в правой посторонней жидкости не обнаружено. ',
    'В плевральных полостях ',
    'Легкие на ощупь тестоватые, без очаговых уплотнений, массой: ', /*10*/
    'Легочная плевра тонкая, гладкая, блестящая, без кровоизлияний, под ней сетчатый темно-серый рисунок. ',
    'Ткань легких на разрезах темно-красного цвета, ',
    'Ткань легких на разрезах бледно-красного цвета, ',
    'с плоскостей разрезов стекает розоватая пенистая жидкость. ', /*14*/
    'с плоскостей разрезов стекает обильное количество розоватой пенистой жидкости. ',
    'Стенки бронхов не утолщены, не выстоят над поверхностью разрезов, ',
    'Стенки бронхов утолщены, выстоят над поверхностью разрезов, ',
    'просветы их свободны. ',
    'в их просветах серо-бурая слизь. '
];

var arr_heartVessels = [
    'Легочная артерия и ее ветви проходимы, внутренняя оболочка их серовато-синюшная, гладкая. ',
    'Сердце свободно располагается в полости перикарда, ',
    'Наружная оболочка сердца сероватая, полупрозрачная, тонкая, блестящая, без кровоизлияний. ',
    'Под ней преимущественно по передней и боковым поверхностям отложение желтоватой жировой клетчатки толщиной до 0,4 см. ',
    'Под ней, по всем поверхностям отложение желтоватой жировой клетчатки толщиной до 0,6 см. ',
    'Под ней, по всем поверхностям отложение желтоватой жировой клетчатки толщиной до 1 см. ',
    'Под ней, по всем поверхностям большое отложение желтоватой жировой клетчатки толщиной до 2 см. ',
    'Венечные артерии извиты, стенки их эластичные, ', /*7*/
    'Венечные артерии извиты, стенки их плотноватые, ',
    'Венечные артерии извиты, стенки их плотные, режутся с трудом, ',
    'на внутренней стенке бляшек нет, в просветах небольшое количество темно-красной жидкой крови. ',
    'с внутренней стороны с наложением множественных полулунных бляшек, на большем протяжении сливающихся между собой, расположенных в передней межжелудочковой и огибающей ветвях левой венечной артерии, суживающих просвет на 1/3. В просвете венечных артерий небольшое количество темно-красной жидкой крови. ',
    'с внутренней стороны с наложением множественных кольцевидных и полулунных бляшек, на большем протяжении сливающихся между собой, расположенных в передней межжелудочковой и огибающей ветвях левой венечной артерии, суживающих просвет на 2/3. В просвете венечных артерий небольшое количество темно-красной жидкой крови. ',
    'с внутренней стороны с наложением множественных кольцевидных и полулунных бляшек, на большем протяжении сливающихся между собой, расположенных в передней межжелудочковой и огибающей ветвях левой венечной артерии, суживающих просвет на 2/3, в отдельных участках полностью закрывающие просвет. В свободном от бляшек просвете венечных артерий небольшое количество темно-красной жидкой крови. ',
    'Сердце вскрыто по току крови. ',
    'Полости сердца не расширены, ',
    'Полости сердца расширены, ',
    'в них небольшое количество темно-красной жидкой крови. ',
    'содержат темно-красную жидкую кровь. ',
    'содержат темно-красные рыхлые свертки. ',
    'содержат желтовато-красные эластичные свертки. ',
    'содержат желтые эластичные свертки. ',
    'Клапанный аппарат сердца и крупных сосудов сформирован правильно. ',
    'Створки клапанов белесовато-желтоватого цвета, уплотнены у основания, не сращены между собой, легко подвижные, смыкаются полностью, гладкие, блестящие. ',
    'Створки клапанов белесовато-желтоватого цвета, утолщены, не сращены между собой, легко подвижные, смыкаются полностью, гладкие, блестящие. ',
    'Створки клапанов белесовато-желтоватого цвета, утолщены, плотные, не сращены между собой, с незначительным снижением подвижности, смыкаются полностью, гладкие, блестящие. ',
    'Периметр митрального клапана ',
    'аортального ',
    'трехстворчатого ',
    'клапана легочного ствола ',
    'Сосочковые мышцы не утолщены, сухожильные нити тонкие, не укорочены, не сросшиеся, светло-серого цвета. ',
    'Сосочковые мышцы утолщены, сухожильные нити тонкие, не укорочены, не сросшиеся, светло-серого цвета. ',
    'Сосочковые мышцы не утолщены, сухожильные нити тонкие, укорочены, не сросшиеся, светло-серого цвета. ',
    'Сосочковые мышцы утолщены, сухожильные нити тонкие, укорочены, не сросшиеся, светло-серого цвета. ',
    'Внутренняя оболочка сердца полупрозрачная, красновато-серого цвета, гладкая, тонкая, без кровоизлияний. ',
    'Мышца сердца на разрезах красновато-коричневого цвета, ',
    ' с мелкими сероватыми прослойками, расположенными хаотично по всей сердечной мышце. ',
    'Толщина стенки левого желудочка ',
    'правого - ',
    'В просвете аорты содержится небольшое количество темно-красной жидкой крови, ',
    'В просвете аорты содержится темно-красная жидкая кровь, ',
    'В просвете аорты содержатся темно-красные рыхлые свертки, ',
    'В просвете аорты содержатся желтовато-красные эластичные свертки, ',
    'В просвете аорты содержатся желтые эластичные свертки, ',
    'внутренняя оболочка аорты светло-желтая, ',
    'внутренняя оболочка аорты желтая, ',
    'внутренняя оболочка аорты темно-желтая, ',
    'внутренняя оболочка аорты красновато-желтая, ',
    'внутренняя оболочка аорты темно-красная, ',
    'содержит многочисленные желтые участки (липидные пятна). ',
    'гладкая. ',
    'содержит многочисленные желтые участки (липидные пятна) и единичные плотноватые атеросклеротические бляшки. ',
    'содержит многочисленные желтые участки (липидные пятна) и плотноватые атеросклеротические бляшки. ',
    'на ней имеются многочисленные, сильно выбухающие желтоватые атеросклеротические бляшки, часть которых находятся в состоянии изъязвления.  ',
    'на ней имеются многочисленные, сильно выбухающие желтоватые атеросклеротические бляшки, часть которых находятся в состоянии изъязвления. В отдельных участках аорты, больше в брюшном отделе, отмечается кальциноз бляшек. ',
    'Аорта режется с характерным хрустом. ',
    'В просвете нижней полой вены содержится небольшое количество темно-красной жидкой крови, ',
    'В просвете нижней полой вены содержится темно-красная жидкая кровь, ',
    'В просвете нижней полой вены содержатся темно-красные рыхлые свертки, ',
    'В просвете нижней полой вены содержатся желтовато-красные эластичные свертки, ',
    'В просвете нижней полой вены содержатся желтые эластичные свертки, ',
    'Длина окружности аорты в грудном отделе ',
    'края ее при пересечении разошлись на ',
    'внутренняя оболочка сосуда темно-синюшная, гладкая, блестящая. ',
    'Перикард розовато-серого цвета, поверхности его гладкие и блестящие. В полости перикарда '
    ];

var arr_LienGsr = [
    'Селезенка обычной формы, мягкой консистенции, серо-красного цвета, поверхность гладкая, капсула не напряжена. ',
    'Масса селезенки: ',
    'На разрезах ткань ее темно-вишневого цвета, рисунок строения различим, ',
    'соскоб пульпы умеренный. ',
    'соскоб пульпы обильный. ',
    'соскоб пульпы незначительный. ',
    'Надпочечники на ощупь плотные, листовидной формы, на разрезах корковое вещество ярко-желтого цвета, мозговое вещество серо-коричневого цвета, кашицеобразное. ',
    ''

];

var arr_genitourinary = [
  'Почки на ощупь плотно-эластичные, бобовидной формы. Жировая капсула почек бледно-желтого цвета, толщина жировой капсулы почек до ',
  'Правая почка размерами ',
  'левая почка размерами ',
  'Капсулы почек гладкие, снимаются легко, без потери вещества почек, ',
  'Капсулы почек гладкие, снимаются с трудом, с частичной потерей вещества почек, ',
  'обнажая их гладкие поверхности ',    //5
  'обнажая их мелкобугристые поверхности ',
  'обнажая их крупнобугристые поверхности ',
  'На разрезах ткань почек красно-коричневого цвета, обычного анатомического строения, ',
  'границы между корковым и мозговым веществами четкие. ',
  'границы между корковым и мозговым веществами нечеткие. ',
  'Очаговых изменений в ткани почек нет. Просветы лоханок свободны, слизистые оболочки их бледно-желтые, гладкие, без повреждений и кровоизлияний. Мочеточники проходимы, слизистые оболочки их серо-синюшного цвета, гладкие, без повреждений и кровоизлияний. ',
  'В мочевом пузыре ', //12
  'светло-желтой полупрозрачной мочи. ',
  'мочи не обнаружено. ',
  'Слизистая оболочка мочевого пузыря бледно-синюшная, гладкая, без повреждений и кровоизлияний, складчатость ее выражена слабо. ',
  'Предстательная железа на ощупь плотноэластичной консистенции, обычной формы, размерами ', //16
  'Матка обычной формы и величины, на разрезах обычного анатомического строения, умеренного кровенаполнения без очаговых изменений. Полость матки заполнена слизью.  ',
  'Наружный зев щелевидный. ',
  'Наружный зев округлой формы. ',
  'Яичники обычного анатомического строения, умеренного кровенаполнения без очаговых изменений. ' //20
    ];

var arr_frequentlyPhrases = [
    'без очаговых изменений',
    'без кровоизлияний',
    'темной жидкой крови',
    'в правой - ',
    'в левой - ',
    'правое - ',
    'левое - ',
    'размерами: ',
    'массой ',
    'плотноватой консистенции', /*9*/
    'мягкой консистенции',
    'дрябловатой консистенции',
    'размеры: '


];

function getResult(t) {
    var re = /[\S+]/;

    var dressC = {
        dressType: function () {
            if (checkAreaForFill(t.id2, re)) {
                return t.array1[1] + getFromTextarea(t.id2) + ' ';
            }
            else return t.array1[0];
        }
    };


    if (checkAreaForFill(t.id2, re)) {
        dressC.dressWorn = getStringFromSelect(t.id3, 3, t.array1, 2);
        dressC.dressDirty = getStringFromSelect(t.id4, 6, t.array1, 5);
        dressC.dressDamage = function () {
            if (checkAreaForFill(t.id5, re)) {
                return t.array1[13] + getFromTextarea(t.id5) + t.array1[14];
            }
            else {
                if (verificationSelect(t.id4, 1)) return t.array1[11];
                else return t.array1[12];
            }
        };
    }

    var generalCharacters = {
        sex: function(){
            if (ISchecked(t.id6)) return t.array2[0];
            else return t.array2[1];
        },
        physique: getStringFromSelect2(t.id8, t.array2, 2),
        pitanie: getStringFromSelect2(t.id7, t.array2, 5),
        defects: function(){
            if (!ISchecked(t.id9)) return t.array2[9];
            else return '. ';
        },
        growth: arr_General[10] + getFromTextarea(t.id10) + ' см, ',
        age: function(){
            if (verificationSelect(t.id11, 4)) {
                return t.array2[14] + getFromTextarea(t.id12) + '-' + getFromTextarea(t.id13) + ' лет. ';
            }
            else {
                return getStringFromSelect2(t.id11, arr_General, 11);
            }
        },
        mass: function(){
            if (ISchecked(t.id14)) return t.array2[15];
            else return t.array2[16] + getFromTextarea(t.id15) + ' кг. ';
        }
        };

    var decompositionAndSkin = {
      cool: getStringFromSelect2(t.id16, t.array3, 0),
      skinColor: getStringFromSelect2(t.id17, t.array2, 17),
      skinElastic: getStringFromSelect2(t.id18, t.array2, 23),
      skinDry: function(){
          if (ISchecked(t.id19)) return t.array2[27];
          else  return t.array2[26];
      },
      spotColor: getStringFromSelect2(t.id20, t.array3, 4),
      spotIntensity: getStringFromSelect2(t.id21, t.array3, 7),
      spotArea: getStringFromSelect2(t.id22, t.array3, 9),
      spotLocalization: getStringFromSelect2(t.id23, t.array3, 11),
      spotStage: function(){
          return t.array3[16];
      }
    };

    var decompositionMuscle = {
      spotColorAfterPush: function(){
         if (verificationSelect(t.id24, 1)) return t.array3[17];
         else return getStringFromSelect2(t.id24, t.array3, 17) + getFromTextarea(t.id25) + ' мин. ';
      },
      rigorMortis: getStringFromSelect2(t.id26, t.array3, 20),
      muscle: function(){
          if (verificationSelect(t.id26, 2)) return t.array2[29] + getStringFromSelect2(t.id27, t.array3, 30);
          else return t.array2[28] + getStringFromSelect2(t.id27, t.array2, 30);
      },
      rotting: function(){
          if (verificationSelect(t.id28, 4)) return getFromTextarea(t.id29);
          else return getStringFromSelect2(t.id28, t.array3, 24);
      }
    };

    var head = {
        skullDamage: function(){
          if (!(ISchecked(t.id30) || ISchecked(t.id31))) return t.array4[0];
          else return '';
        },
        hair: function(){
            if (!(ISchecked(t.id32))) {
                if (!verificationSelect(t.id33, 6)){
                    if (!ISchecked(t.id35)) return getStringFromSelect2(t.id33, t.array5, 1) + t.array5[8] + getFromTextarea(t.id36) + ' см. ';
                    else return getStringFromSelect2(t.id33, t.array5, 1) + t.array5[6] + t.array5[8] + getFromTextarea(t.id36) + ' см. ';
                }
                else return t.array5[7] + t.array5[8] + getFromTextarea(t.id36) + ' см. ';

            }
            else  return t.array5[0];
        },

        headHairDamage: function(){
            if (!ISchecked(t.id49)) return t.array4[1];
            else return '';
        },

        face: getStringFromSelect2(t.id37, t.array5, 9),
        facePuffy: function(){
            if (ISchecked('puffy')) return  t.array5[15];
            else return t.array5[14];
        },

        eyes: getStringFromSelect2(t.id39, t.array5, 16) + getStringFromSelect2(t.id40, t.array5, 18),

        iris: function(){
            if (!verificationSelect(t.id41, 6)) return getStringFromSelect2(t.id41, t.array5, 20);
            else return t.array5[25] + getFromTextarea(t.id42) + t.array0[2];
        },

        pupil: function(){
           return  t.array5[59] + getNumberFromTextarea(t.id43) + ' см каждый. ';
        },

        eyesConnectMembran: getStringFromSelect2(t.id46, t.array5, 26) + getStringFromSelect2(t.id47, t.array5, 30),
        eyesConnectMembranDamageAndHemorrhage: function(){
            if (!ISchecked(t.id50) && !ISchecked(t.id48)) return t.array4[2];
            else if (!ISchecked(t.id50) && ISchecked(t.id48)) return t.array4[3];
            else if (ISchecked(t.id50) && !ISchecked(t.id48)) return t.array4[4];
            else return '. ';
        },

        noseDamage: function(){
            if (!ISchecked(t.id51) && !ISchecked(t.id52)) return t.array5[32];
            else if (!ISchecked(t.id51) && ISchecked(t.id52)) return t.array5[33];
            else if (ISchecked(t.id51) && !ISchecked(t.id52)) return t.array5[34];
            else return '';
        },

        noseExcret: function(){
            if (verificationSelect(t.id53, 6)) {
                if (checkAreaForFill(t.id54, re)) {
                    return getFromTextarea(t.id54);
                }
                else return t.array5[35];
            }
            else {
                return getStringFromSelect2(t.id53, t.array5, 35);
            }
        },

        teeth: function() {
           if (ISchecked(t.id85)) return t.array5[58];
           else return getResultString(matrix, symb, textPhrasesArray);
        },

        mouth: getStringFromSelect2(t.id57, t.array5, 41),
        mouthDamage: function(){
            if (!ISchecked(t.id58)) return t.array4[3];
            else return '. ';
        },

        lipsborder: getStringFromSelect2(t.id59, t.array5, 45) + getStringFromSelect2(t.id60, t.array5, 49),
        ear: function(){
            if (!ISchecked(t.id61)){
                if (verificationSelect(t.id62, 6)) {
                    if (checkAreaForFill(t.id63, re))  return t.array5[51] + getFromTextarea(t.id63);

                    else {
                        return t.array5[51] + t.array5[53];
                    }
                }
                else return t.array5[51] + getStringFromSelect2(t.id62, t.array5, 53);
                }
            else {
                if (verificationSelect(t.id62, 6)) {

                    if (checkAreaForFill(t.id63, re)) return t.array5[52] + getFromTextarea(t.id63);
                    else return t.array5[52] + t.array5[53];
                }
                else return t.array5[52] + getStringFromSelect2(t.id62, t.array5, 53);
            }
        }
    };

    var neckTorso = {
        neck: function(){
            if (ISchecked(t.id64)) return t.array6[0] + '. ';
            else return t.array6[0] + t.array4[3];
        },

        armpits: function(){
            if (ISchecked(t.id65)) return '';
            else return t.array6[1] + t.array4[3];
        },

        thorax: function(){
            if (ISchecked(t.id66)) {
                if (ISchecked(t.id68)) return getStringFromSelect2(t.id67, t.array6, 2) + t.array6[8] + '. ';
                else return getStringFromSelect2(t.id67, t.array6, 2) + t.array6[9] + '. ';
            }
            else {
                if (ISchecked(t.id68)) return getStringFromSelect2(t.id67, t.array6, 2) + t.array6[8] + ', ' + t.array4[5];
                else return getStringFromSelect2(t.id67, t.array6, 2) + t.array6[9] + ', ' + t.array4[5];
            }
        },

        mammaryGland:  function(){
            if (ISchecked(t.id6a)) return getStringFromSelect2(t.id69, t.array6, 10) + getStringFromSelect2(t.id70, t.array6, 12);
            else return '';
        },

        abdomen: function(){
            if (ISchecked(t.id71)) return t.array6[15] + getStringFromSelect2(t.id72, t.array6, 17);
            else return t.array6[16] + getStringFromSelect2(t.id72, t.array6, 17);
        },

        pubis: function(){
            if (verificationSelect(t.id73, 3)) return t.array6[22];
            else {
                if (ISchecked(t.id6)) return getStringFromSelect2(t.id73, t.array6, 20) + t.array6[23];
                else return getStringFromSelect2(t.id73, t.array6, 20) + t.array6[24];
            }
        },

        genitals: function() {
            if (ISchecked(t.id6)) return t.array6[25] + getStringFromSelect2(t.id74, t.array6, 26);
            else return getStringFromSelect2(t.id74, t.array6, 31);
        },

        rectum: getStringFromSelect2(t.id75, t.array6, 36) + getStringFromSelect2(t.id76, t.array6, 38),

        spinLoinsDamage: function(){
            if (!ISchecked(t.id82) && !ISchecked(t.id83)){
              return t.array4[12];
            }
            else if (!ISchecked(t.id82) && ISchecked(t.id83)){
                return t.array4[13];
            }
            else if (ISchecked(t.id82) && !ISchecked(t.id83)){
                return t.array4[14];
            }
            else return '';
        },

        bonesDamageExternalResearch: function() {
         var otherBones = getStringEnumeration(t.id77, t.id78, t.id80, t.id81, t.array4, 7),
             limbBones = getStringEnumeration2(t.id79a, t.id79b, t.array4, 19);


         if (limbBones !== '' && otherBones !== '') {
             return otherBones + ', ' + limbBones + t.array4[21] + t.array4[6];
         }
         else if (limbBones == '' && otherBones !== '') {
             return otherBones + t.array4[6];
         }
         else if (limbBones !== '' && otherBones == ''){
             return limbBones.charAt(1).toUpperCase() + limbBones.substr(2) + t.array4[21] + t.array4[6];
         }
         else return '';
        },

        //bonesDamageInternalResearch: function() {
        //    var otherBones = getStringEnumeration(t.id173, t.id77, t.id78, t.id80, t.id81, t.array4, 22),
        //        limbBones = getStringEnumeration2(t.id79a, t.id79b, t.array4, 32);
        //    console.log(limbBones);
        //
        //    if (limbBones !== '' && otherBones !== '') {
        //        console.log('first');
        //        return otherBones + ', ' + t.array4[30] + limbBones + t.array4[34] + t.array4[27];
        //    }
        //    else if (limbBones == '' && otherBones !== '') {
        //        return otherBones + t.array4[27];
        //    }
        //    else if (limbBones !== '' && otherBones == ''){
        //        console.log('1234');
        //        return limbBones.charAt(1).toUpperCase() + limbBones.substr(2) + t.array4[21] + t.array4[27];
        //    }
        //    else return '';
        //},



        textareaDamage: function() {
           if (checkAreaForFill(t.id84, re)) return t.array4[17] + getFromTextarea(t.id84) + ' ';
           else return '';
        },

        lastSentenceExternalResearch: function() {
            if (checkCheckboxesOR(t.id30, t.id31, t.id49, t.id50, t.id51, t.id52, t.id58, t.id61, t.id64, t.id65, t.id66, t.id77, t.id78, t.id79a, t.id79b, t.id80, t.id81, t.id82, t.id83) || checkAreaForFill(t.id84, re)) return t.array4[16];
            else return t.array4[15];
        },

    };

    var headBrain = {
        headSoftTissues: function(){
            return t.array7[0];
        },
        calvaria: function(){
            if (!ISchecked(t.id86)){
                return t.array7[1];
            }
            else return '';
        },

        skull: function(){
            return t.array7[3] + getNumberFromTextarea(t.id88) + ' см, ' + t.array7[4] +
                getNumberFromTextarea(t.id89) + ' см, ' + t.array7[5] + getNumberFromTextarea(t.id90) + ' см. ';
        },

        duraMater: function(){
            if (!ISchecked(t.id91)){
                return t.array7[6] + t.array4[18] + getStringFromSelect2(t.id92, t.array7, 7) + getStringFromSelect2(t.id93, t.array7, 9) + t.array7[11] + getStringFromSelect2(t.id94, t.array7, 12);
            }
            else return t.array7[6] + getStringFromSelect2(t.id92, t.array7, 7) + getStringFromSelect2(t.id93, t.array7, 9) + t.array7[11] + getStringFromSelect2(t.id94, t.array7, 12);
        },

        arachnoidMater1: function(){
            if (!ISchecked(t.id91)){
                return t.array7[15] + t.array4[18] + t.array7[16];
            }
            else return t.array7[15] + t.array7[16];
        },

        arachnoidMater2: function(){
            if (!ISchecked(t.id95)){
                return t.array7[17] + t.array7[19];
            }
            else return t.array7[18] + t.array7[19];

        },

        brainArterias: getStringFromSelect2(t.id104, t.array7, 26),

        hemisphere: function(){
          return t.array7[20];
        },

        brainMass: function(){
            return t.array7[21] + getNumberFromTextarea(t.id97) + ' г. ';
        },

        brain: function(){
            if (!ISchecked(t.id95)) return t.array7[22] + t.array8[0];
            else return t.array7[22] + t.array8[2];
        },

        brainCavity: function(){
            if (!ISchecked(t.id95)) return t.array7[24] + t.array8[0];
            else return t.array7[24] + t.array8[3];
        },

        nucleiSubcortical: function(){
          return t.array7[25];
        },

        brainstemCerebellim: function(){
            return t.array7[30];
        },

        pinealGland: function(){
            if (getNumberFromTextarea(t.id98) == getNumberFromTextarea(t.id99) && getNumberFromTextarea(t.id98) == getNumberFromTextarea(t.id100)) return t.array7[32] + getNumberFromTextarea(t.id98) + 'x' + getNumberFromTextarea(t.id99) + 'x' + getNumberFromTextarea(t.id100) + ' см, ' + t.array7[33];
            else return t.array7[31] + getNumberFromTextarea(t.id98) + 'x' + getNumberFromTextarea(t.id99) + 'x' + getNumberFromTextarea(t.id100) + ' см, ' + t.array7[33];
        },

        pituitaryGlandOtherBraim: function(){
            return t.array7[34] + getNumberFromTextarea(t.id101) + 'x' + getNumberFromTextarea(t.id102) + 'x' + getNumberFromTextarea(t.id103) + t.array7[35] + t.array7[36];
        },

        baseSkull: function(){
        if (!ISchecked(t.id87)){
            return t.array7[2];
        }
        else return '';
        }

    };

    var visceralGeneral = {
        subcutaneousFat: function(){
            if (ISchecked(t.id96)) return t.array10[0] + t.array9[1] + t.array10[1]  + getNumberFromTextarea(t.id105) + ' см, ' + t.array10[2] + getNumberFromTextarea(t.id106) + ' см. ';
            else return t.array10[0] + t.array9[0] + t.array10[1] + getNumberFromTextarea(t.id105) + ' см, ' + t.array10[2] + getNumberFromTextarea(t.id106) + ' см. ';
        },

        softTissueNeckThoraxAbdomen: function(){
            if (ISchecked(t.id95)) return t.array10[3] + t.array9[3] + ', ' + t.array11[1] + '. ';
            else if (ISchecked(t.id96)) return t.array10[3] + t.array9[4] + ', ' + t.array11[1] + '. ';
            else return t.array10[3] + t.array9[2] + ', ' + t.array11[1] + '. ';
        },

        abdominalCavity: function(){ return t.array10[4]; },
        liverEdgeCurve: function(){
            if (verificationSelect(t.id107, 1)) return t.array10[5];
            else if (verificationSelect(t.id107, 2)) return t.array10[6];
            else return t.array10[7];
        },

        liverEdgeProtrusion: function(){
            if (verificationSelect(t.id108, 2)) return t.array10[8] + getNumberFromTextarea(t.id109) + ' см. ';
            else return t.array10[9];
        },

        thoracicCavity: function(){
            return t.array10[10];
        },

        pleuralCavityLiquid: function(){
            if (verificationSelect(t.id117, 2)) { /*Liquid*/
                    if (getNumberFromTextarea(t.id118) == 0 && getNumberFromTextarea(t.id119) == 0) return t.array12[1];
                    if (getNumberFromTextarea(t.id118) !== 0 && getNumberFromTextarea(t.id119) == 0) {
                        if (verificationSelect(t.id120, 1)) return t.array12[5] + getNumberFromTextarea(t.id118) + ' мл ' +  t.array9[5] + t.array12[7] + t.array12[4];
                        if (verificationSelect(t.id120, 2)) return t.array12[5] + getNumberFromTextarea(t.id118) + ' мл ' +  t.array9[6] + t.array12[7] + t.array12[4];
                        if (verificationSelect(t.id120, 3)) return t.array12[5] + getNumberFromTextarea(t.id118) + ' мл ' +  t.array9[7] + t.array12[7] + t.array12[4];
                    }
                    if (getNumberFromTextarea(t.id118) == 0 && getNumberFromTextarea(t.id119) !== 0) {
                        if (verificationSelect(t.id120, 1)) return t.array12[6] + getNumberFromTextarea(t.id119) + ' мл ' +  t.array9[5] + t.array12[8] + t.array12[4];
                        if (verificationSelect(t.id120, 2)) return t.array12[6] + getNumberFromTextarea(t.id119) + ' мл ' +  t.array9[6] + t.array12[8] + t.array12[4];
                        if (verificationSelect(t.id120, 3)) return t.array12[6] + getNumberFromTextarea(t.id119) + ' мл ' +  t.array9[7] + t.array12[8] + t.array12[4];
                    }
                    if (getNumberFromTextarea(t.id118) !== 0 && getNumberFromTextarea(t.id119) !== 0) {
                        if (verificationSelect(t.id120, 1)) return  t.array12[9] + t.array9[8] + t.array11[3] + getNumberFromTextarea(t.id118) + ' мл, ' + t.array11[4] + getNumberFromTextarea(t.id119) + ' мл. ' + t.array12[4];
                        if (verificationSelect(t.id120, 2)) return  t.array12[9] + t.array9[9] + t.array11[3] + getNumberFromTextarea(t.id118) + ' мл, ' + t.array11[4] + getNumberFromTextarea(t.id119) + ' мл. ' + t.array12[4];
                        if (verificationSelect(t.id120, 3)) return  t.array12[9] + t.array9[10] + t.array11[3] + getNumberFromTextarea(t.id118) + ' мл, ' + t.array11[4] + getNumberFromTextarea(t.id119) + ' мл. ' + t.array12[4];

                    }
            }
            else return t.array12[1] + t.array12[3];
        },

        pericard: function() {
         return t.array13[64] + getNumberFromTextarea(t.id154) + ' мл ' + t.array9[11] + '. ';
        },

        neckVessels: function(){
            if (ISchecked(t.id110)) return t.array10[13] + t.array10[14] + t.array10[15];
            else return t.array10[12] + t.array10[14] + t.array10[15];
        },

        thyreoidGland: function(){
            return t.array10[16] + getNumberFromTextarea(t.id111) + 'x' + getNumberFromTextarea(t.id112) + 'х' + getNumberFromTextarea(t.id113) + ' см, ' +
                   t.array10[17] + getNumberFromTextarea(t.id114) + 'x' + getNumberFromTextarea(t.id115) + 'х' + getNumberFromTextarea(t.id116) + ' см. ' +
                   t.array10[18] + t.array11[0] + '. ' + t.array10[19];
        },

        respiratoryDigestivePathNL: function(){
            return t.array10[20] + t.array10[21] + t.array10[22] + t.array11[0] + '. ';
        },

        lungsMass: function(){
            return t.array12[10] + t.array11[5] + getNumberFromTextarea(t.id121) + ' г., ' +  t.array11[6] +  getNumberFromTextarea(t.id122) + ' г. ' ;
        },

        pulmonaryPleura: function(){
            return t.array12[11];
        },

        lungTissue: function(){
            if (ISchecked(t.id124)) {
                if (verificationSelect(t.id123, 1)) return t.array12[12] + t.array8[1] + t.array12[15];
                /*ум. кровенап*/
                if (verificationSelect(t.id123, 2)) return t.array12[12] + t.array8[4] + t.array12[15];
                /*полнокровие*/
                if (verificationSelect(t.id123, 3)) return t.array12[12] + t.array8[7] + t.array12[15];
                /*неравномерного*/
                if (verificationSelect(t.id123, 4)) return t.array12[13] + t.array8[8] + t.array12[15];
                /*малокр*/
            }
            else {
                if (verificationSelect(t.id123, 1)) return t.array12[12] + t.array8[1] + t.array12[14];
                /*ум. кровенап*/
                if (verificationSelect(t.id123, 2)) return t.array12[12] + t.array8[4] + t.array12[14];
                /*полнокровие*/
                if (verificationSelect(t.id123, 3)) return t.array12[12] + t.array8[7] + t.array12[14];
                /*неравномерного*/
                if (verificationSelect(t.id123, 4)) return t.array12[13] + t.array8[8] + t.array12[14];
                /*малокр*/
            }
        },

        bronchInSection: function(){
            if (ISchecked(t.id125) && ISchecked(t.id126)){
                return t.array12[17] + t.array12[19];
            }
            else if (ISchecked(t.id125) && !ISchecked(t.id126)){
                return t.array12[17] + t.array12[18];
            }
            else if (!ISchecked(t.id125) && ISchecked(t.id126)){
                return t.array12[16] + t.array12[19];
            }
            else return t.array12[16] + t.array12[18];
        },

        heartGeneral: function(){
            return t.array13[0] + t.array13[1] + getStringFromSelect2(t.id128, t.array11, 9) + ', ';
        },

        heartSizeWeight: function(){
            return t.array11[7] + getNumberFromTextarea(t.id130L) + 'x'+ getNumberFromTextarea(t.id130W) + 'x' + getNumberFromTextarea(t.id130D) + ' см, ' + t.array11[8] + getNumberFromTextarea(t.id129) + ' г. '
        },

        heartFatСoronaritis: function(){
            return getStringFromSelect2(t.id127, t.array13, 3) +
                   getStringFromSelect2(t.id131, t.array13, 7) + getStringFromSelect2(t.id132, t.array13, 10);
        },

        heartCavity: function(){
            if(ISchecked(t.id133)) return t.array13[14] + t.array13[16] + getStringFromSelect2(t.id134, t.array13, 17);
            else return t.array13[14] + t.array13[15] + getStringFromSelect2(t.id134, t.array13, 17);
        },

        heartValves: function(){
            return getStringFromSelect2(t.id135, t.array13, 23) + t.array13[26] +
             getNumberFromTextarea(t.id136) + ' см, ' + t.array13[27] + getNumberFromTextarea(t.id137) + ' см, ' +
                t.array13[28] + getNumberFromTextarea(t.id138) + ' см, ' + t.array13[29] + getNumberFromTextarea(t.id139) + ' см. ' ;
        },

        heartPapillMusclThreadsEndocard: function(){
            if (!ISchecked(t.id140) && !ISchecked(t.id141)) return t.array13[30] + t.array13[34];
            if (ISchecked(t.id140) && !ISchecked(t.id141)) return t.array13[31] + t.array13[34];
            if (!ISchecked(t.id140) && ISchecked(t.id141)) return t.array13[32] + t.array13[34];
            if (ISchecked(t.id140) && ISchecked(t.id141)) return t.array13[33] + t.array13[34];
        },

        heartTissue: function(){
            if (ISchecked(t.id142)) {
                if (verificationSelect(t.id143, 1)) return t.array13[35] + t.array8[1] + t.array13[36];
                /*ум. кровенап*/
                if (verificationSelect(t.id143, 2)) return t.array13[35] + t.array8[4] + t.array13[36];
                /*полнокровие*/
                if (verificationSelect(t.id143, 3)) return t.array13[35] + t.array8[7] + t.array13[36];
                /*неравномерного*/
                if (verificationSelect(t.id143, 4)) return t.array13[35] + t.array8[8] + t.array13[36];
                /*малокр*/
            }
            else {
                if (verificationSelect(t.id143, 1)) return t.array13[35] + t.array8[1] + t.array11[0] + '. ';
                /*ум. кровенап*/
                if (verificationSelect(t.id143, 2)) return t.array13[35] + t.array8[4] + t.array11[0] + '. ';
                /*полнокровие*/
                if (verificationSelect(t.id143, 3)) return t.array13[35] + t.array8[7] + t.array11[0] + '. ';
                /*неравномерного*/
                if (verificationSelect(t.id143, 4)) return t.array13[35] + t.array8[8] + t.array11[0] + '. ';
                /*малокр*/
            }
        },

    heartVentriclesSize: function() {
        return  t.array13[37] + getNumberFromTextarea(t.id144) + ' см, ' +  t.array13[38] + getNumberFromTextarea(t.id145) + ' см. ';
    },

    aorta: function() {
        if (verificationSelect(t.id149, 6)) return t.array13[55] + getStringFromSelect2(t.id146, t.array13, 39) + getStringFromSelect2(t.id148, t.array13, 44) + getStringFromSelect2(t.id149, t.array13, 49);
        else return getStringFromSelect2(t.id146, t.array13, 39) + getStringFromSelect2(t.id148, t.array13, 44) + getStringFromSelect2(t.id149, t.array13, 49);
    },

    aortaSize: function(){
        return t.array13[61] + getNumberFromTextarea(t.id150) + ' см, ' + t.array13[62] + getNumberFromTextarea(t.id151) + ' см. ';
    },

    venaCavaInf: function(){
            return getStringFromSelect2(t.id147, t.array13, 56) + t.array13[63];
    },

    spleenGSR: function(){
        return t.array14[0] + t.array14[1] + getNumberFromTextarea(t.id152M) + ' г, ' +
            t.array11[12] + getNumberFromTextarea(t.id152H) + 'х' + getNumberFromTextarea(t.id152W) + 'х'+ getNumberFromTextarea(t.id152D) + ' см. ' +
            t.array14[2] + getStringFromSelect2(t.id153, t.array14, 3) + t.array14[6];
    },

    kidneyFat: function(){
        return t.array15[0] + getNumberFromTextarea(t.id155) + ' мм. ';
    },

        kidneyRightSize: function(){
          return t.array15[1] + getNumberFromTextarea(t.id156) + 'х' + getNumberFromTextarea(t.id157) + 'х' + getNumberFromTextarea(t.id158) + ' см, ';
        },

        kidneyLeftSize: function(){
            return t.array15[2] + getNumberFromTextarea(t.id159) + 'х' + getNumberFromTextarea(t.id160) + 'х' + getNumberFromTextarea(t.id161) + ' см. ';
        },

        kidneyCapsule: function(){
            return getStringFromSelect2(t.id162, t.array15, 3) + getStringFromSelect2(t.id163, t.array15, 5) + getStringFromSelect2(t.id164, t.array0, 3) + t.array0[2];
        },

        kidneyTissue: function(){
            if (!ISchecked(t.id165)) {
                if (verificationSelect(t.id166, 1)) return t.array15[8] + t.array8[1] + t.array15[9] + t.array15[11];
                /*ум. кровенап*/
                if (verificationSelect(t.id166, 2)) return t.array15[8] + t.array8[4] + t.array15[9] + t.array15[11];
                /*полнокровие*/
                if (verificationSelect(t.id166, 3)) return t.array15[8] + t.array8[7] + t.array15[9] + t.array15[11];
                /*неравномерного*/
                if (verificationSelect(t.id166, 4)) return t.array15[8] + t.array8[8] + t.array15[9] + t.array15[11];
                /*малокр*/
            }
            else {
                if (verificationSelect(t.id166, 1)) return t.array15[8] + t.array8[1] + t.array15[10] + t.array15[11];
                /*ум. кровенап*/
                if (verificationSelect(t.id166, 2)) return t.array15[8] + t.array8[4] + t.array15[10] + t.array15[11];
                /*полнокровие*/
                if (verificationSelect(t.id166, 3)) return t.array15[8] + t.array8[7] + t.array15[10] + t.array15[11];
                /*неравномерного*/
                if (verificationSelect(t.id166, 4)) return t.array15[8] + t.array8[8] + t.array15[10] + t.array15[11];
                /*малокр*/
            }
        },

        bladder: function(){
            if (!ISchecked(t.id168)) return t.array15[12] + getNumberFromTextarea(t.id167) + ' мл ' + t.array15[13] + t.array15[15];
            else return t.array15[12] + t.array15[14] + t.array15[15];
        },

        prostateUterus: function(){
            if (ISchecked(t.id6)) return t.array15[16] + getNumberFromTextarea(t.id169) + 'x' + getNumberFromTextarea(t.id170) + 'x' + getNumberFromTextarea(t.id171) + ' см. ';
            else return t.array15[17] + getStringFromSelect2(t.id172, t.array15, 18);
        },

        bonesDamageInternalResearch: function() {
            var otherBones = getStringEnumeration(t.id173, t.id77, t.id78, t.id80, t.id81, t.array4, 22),
                limbBones = getStringEnumeration2(t.id79a, t.id79b, t.array4, 32);

            if (!ISchecked(t.id173) && checkCheckboxesAND(t.id77, t.id78, t.id80, t.id81, t.id79a, t.id79b)) {
                return 'Грудина цела. ';
            }
            else if (!ISchecked(t.id77) && checkCheckboxesAND(t.id173, t.id78, t.id80, t.id81, t.id79a, t.id79b)){
                return 'Позвоночник цел. ';
            }
            else {
                if (limbBones !== '' && otherBones !== '') {
                    return otherBones + ', ' + t.array4[30] + limbBones + t.array4[34] + t.array4[27];
                }
                else if (limbBones == '' && otherBones !== '') {
                    return otherBones + t.array4[27];
                }
                else if (limbBones !== '' && otherBones == ''){
                    console.log(t.array4[35] + limbBones + t.array4[21] + t.array4[27]);
                    return t.array4[35] + limbBones + t.array4[21] + t.array4[27];
                }
                else return '';
            }
        },

        lastSentenceInternalResearch: function() {
            if (checkCheckboxesOR(t.id66, t.id77, t.id78, t.id79a, t.id79b, t.id80, t.id81, t.id86, t.id87, t.id91, t.id173)) return t.array4[29];
            else return t.array4[28];
        }

    };


    var title1 = 'наружное исследование',
        title2 = 'внутреннее исследование';
    var result1 = getProp(dressC) + getProp(generalCharacters) + getProp(decompositionAndSkin);
    var result2 = getProp(decompositionMuscle) + getProp(head) + getProp(neckTorso);
    var result3 = getProp(headBrain) + getProp(visceralGeneral);

    var spanTitle1 = document.createElement("span"),
        spanTitle2 = document.createElement("span");
    spanTitle1.classList.add("titleResearch");
    spanTitle2.classList.add("titleResearch");


    var divFrame = document.createElement("div"),
        p = document.createElement("p"),
        br = document.createElement("br"),
        p2 = document.createElement("p");

    var inputTitle1 = document.createTextNode(title1),
        inputTitle2 = document.createTextNode(title2);
    var content1 = document.createTextNode(result1),
        content2 = document.createTextNode(result2),
        content3 = document.createTextNode(result3);

    spanTitle1.appendChild(inputTitle1); //заворачиваем заголовки в span
    spanTitle2.appendChild(inputTitle2);

    var sup = document.createElement("sup"); //верхний индекс
    var contentSup = document.createTextNode('2 ');
    sup.appendChild(contentSup);

    p.appendChild(content1);
    p.appendChild(sup);
    p.appendChild(content2);
    p2.appendChild(content3);

    //var w = document.getElementById(t.outputId); //вывод данных
    var isGecko = navigator.userAgent.toLowerCase().indexOf("gecko") != -1;
    var iframe = (isGecko) ? document.getElementById("frameId") : frames["frameId"];
    var iWin = (isGecko) ? iframe.contentWindow : iframe.window;
    var iDoc = (isGecko) ? iframe.contentDocument : iframe.document;

    iHTML = "<style>p {text-align: justify; text-indent: 30px; font-family: 'Times New Roman', sans-serif;} .titleResearch {margin-left: 40%; font-family: Georgia, 'Times New Roman', Times, serif; font-weight:bold; text-transform: uppercase;}</style>" +
        "<div id='divFrame' style='background: #fbecdd; padding: 10px 20px 20px 30px'></div>" ;
    iDoc.open(); // Открываем фрейм
    iDoc.write(iHTML); // Добавляем написанный код в фрейм
    iDoc.getElementById("divFrame").innerHTML = "";
    iDoc.getElementById("divFrame").appendChild(spanTitle1);
    iDoc.getElementById("divFrame").appendChild(br);
    iDoc.getElementById("divFrame").appendChild(p); //
    iDoc.getElementById("divFrame").appendChild(br); divFrame.appendChild(br);
    iDoc.getElementById("divFrame").appendChild(spanTitle2);
    iDoc.getElementById("divFrame").appendChild(p2);
    iDoc.close(); // Закрываем фрейм
    iDoc.designMode = "on"; // Включаем режим редактирования фрейма

}

var t = {
    outputId: 'd',
    array0: arr_commonPhrases,
    array1: arr_Dress,
    array2: arr_General,
    array3: arr_Decomposition,
    array4: arr_Damage,
    array5: arr_Head,
    array6: arr_NeckTorso,
    array7: arr_headbrain,
    array8: arr_pletora,
    array9: arr_visceraColor,
    array10: arr_visceralGeneral,
    array11: arr_frequentlyPhrases,
    array12: arr_lungs,
    array13: arr_heartVessels,
    array14: arr_LienGsr,
    array15: arr_genitourinary,
    id2: 'dress',
    id3: 'dressold',
    id4: 'dirty',
    id5: 'clotheds',
    id6: 'man',
    id6a: 'woman',
    id7: 'pitanie',
    id8: 'physique',
    id9: 'defects',
    id10: 'growth',
    id11: 'age',
    id12: 'ageIntervalMin',
    id13: 'ageIntervalMax',
    id14: 'mass',
    id15: 'massNum',
    id16: 'cool',
    id17: 'skinColor',
    id18: 'skinElastic',
    id19: 'skinDry',
    id20: 'spot_color',
    id21: 'spot_intensity',
    id22: 'spot_area',
    id23: 'spot_localization',
    id24: 'spot_stage',
    id25: 'spot_time',
    id26: 'rigorMortis',
    id27: 'muscless',
    id28: 'rotting',
    id29: 'rotting2',
    id30: 'd10', /*scull bones*/
    id31: 'd11', /*nose bone*/
    id32: 'hairNo',
    id33: 'hairColor',
    id34: 'hairColorOther',
    id35: 'greyHair',
    id36: 'hair_length',
    id37: 'face',
    id38: 'puffy',
    id39: 'eyes',
    id40: 'cornea',
    id41: 'iris',
    id42: 'iris_color',
    id43: 'pupil',
    //id44: 'pupil_left',
    //id45: 'pupil_right',
    id46: 'shell_color',
    id47: 'shell_surface',
    id48: 'eyesHemorrhage',
    id49: 'd1',  /* hair pars of head*/
    id50: 'd2', /*eyes membranes*/
    id51: 'd11', /*nose bones*/
    id52: 'd11a', /*nose cartilages*/
    id53: 'noseExcret',
    id54: 'noseExcretOther',
    id55: 'earExcret',
    id56: 'earExcretOther',
    id57: 'mouth',
    id58: 'd3', /*mouth*/
    id59: 'lipsBorderColor',
    id60: 'lipsBorderSurface',
    id61: 'd5', /*ear*/
    id62: 'earExcret',
    id63: 'earExcretOther',
    id64: 'd6', /*neck*/
    id65: 'd7', /*neck*/
    id66: 'd12', /*ribs*/
    id67: 'chest',
    id68: 'chest_symmetry',
    id69: 'breast',
    id70: 'nipples',
    id71: 'abdomenSymmetry',
    id72: 'abdomen',
    id73: 'pubisHair',
    id74: 'genitalsExcret',
    id75: 'rectum',
    id76: 'rectumSkin',
    id77: 'd16', /*vertebra*/
    id78: 'd15', /*pelvis*/
    id79a: 'd17a', /*upper limbs*/
    id79b: 'd17b', /*lower limbs*/
    id80: 'd18', /*claviculas*/
    id81: 'd19', /*scapulas*/
    id82: 'd13', /*spin*/
    id83: 'd14',  /*loins*/
    id84: 'textareaDamage',
    id85: 'teethVisible',
    id86: 'd9' /*calvaria*/,
    id87: 'd9a' /*baseSkull*/,
    id88: 'osFrontale',
    id89: 'osTemporale',
    id90: 'osOccipitale',
    id91: 'd20',  /*meninges*/
    id92: 'duraMaterTension',
    id93: 'duraMaterSeparate',
    id94: 'duraMaterSinus',
    id95: 'plethora',
    id96: 'anemia',
    id97: 'massBrain',
    id98: 'pinealGlandLength',
    id99: 'pinealGlandWidth',
    id100: 'pinealGlandDepth',
    id101: 'pituitaryGlandLength',
    id102: 'pituitaryGlandWidth',
    id103: 'pituitaryGlandDepth',
    id104: 'arteriaCerebri',
    id105: 'subcutaneousFatChest',
    id106: 'subcutaneousFatAbdomen',
    id107: 'liverEdgeCurve',
    id108: 'liverEdge',
    id109: 'liverEdgeValue',
    id110: 'generalAtherosclerosis',
    id111: 'thyroidRightHeight',
    id112: 'thyroidRightWidth',
    id113: 'thyroidRightDepth',
    id114: 'thyroidLeftHeight',
    id115: 'thyroidLeftWidth',
    id116: 'thyroidLeftDepth',
    id117: 'pleuralCavity',
    id118: 'pleuralCavityRight',
    id119: 'pleuralCavityLeft',
    id120: 'pleuralCavityLiquid',
    id121: 'lungRightWeight',
    id122: 'lungLeftWeight',
    id123: 'lungsBloodFill',
    id124: 'pulmonaryEdema',
    id125: 'bronchialWall',
    id126: 'bronchialMucus',
    id127: 'heartFat',
    id128: 'heartConsistence',
    id129: 'heartWeigth',
    id130L: 'heartLength',
    id130W: 'heartWidth',
    id130D: 'heartDepth',
    id131: 'coronaritis',
    id132: 'coronarosclerosis',
    id133: 'heartCavExtend',
    id134: 'heartCavity',
    id135: 'heartValves',
    id136: 'mitral',
    id137: 'aortaValve',
    id138: 'tricuspid',
    id139: 'pulmValve',
    id140: 'papillaryMuscles',
    id141: 'tendonThread',
    id142: 'diffuseCardscl',
    id143: 'heartBloodFill',
    id144: 'ventricleLeft',
    id145: 'ventricleRight',
    id146: 'aortaCavity',
    id147: 'v_cavaInf',
    id148: 'aortaInnerMembrСolor',
    id149: 'aortaInnerMembr',
    id150: 'aortaWidth',
    id151: 'aortaEdgesDivergence',
    id152H: 'lienHeight',
    id152W: 'lienWidth',
    id152D: 'lienDepth',
    id152M: 'lienMass',
    id153: 'lienScraping',
    id154: 'liquidPericard',
    id155: 'kidneyFat',
    id156: 'kidneyRightSize1',
    id157: 'kidneyRightSize2',
    id158: 'kidneyRightSize3',
    id159: 'kidneyLeftSize1',
    id160: 'kidneyLeftSize2',
    id161: 'kidneyLeftSize3',
    id162: 'kidneyCapsula',
    id163: 'kidneySurface',
    id164: 'kidneySurfaceColor',
    id165: 'kidneyMedCortexBorder',
    id166: 'kidneyBloodFill',
    id167: 'urine',
    id168: 'bladder',
    id169: 'prostataSize1',
    id170: 'prostataSize2',
    id171: 'prostataSize3',
    id172: 'uterus',
    id173: 'd21' /*sternum*/

};


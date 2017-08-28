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

function changeTextInBlock(id, text) {
    var span = document.getElementById(id);
    var content = document.createTextNode(text);
    span.innerHTML = '';
    span.appendChild(content);
}

function changeStyleDisplay() {
    for (var i = 0; i < arguments.length - 1; i++) {
        document.getElementById(arguments[i]).style.display = arguments[arguments.length - 1];
    }
}

function changeStyle(id, newStyle) {
    var element = document.getElementById(id);
    var className = element.className;
    if (className.indexOf(newStyle) == -1) className += newStyle;
    else className = className.replace(newStyle, '');
    element.className = className;
}

function changeStyleOneOff(id, newStyle) {
    var element = document.getElementById(id);
    var className = element.className;
    if (className.indexOf(newStyle) == -1) className += newStyle;
    element.className = className;
}

function changeStyleIfChecked(id, idCheckbox, newStyle) {
    var element = document.getElementById(id);
    var className = element.className;
    var checkbox = document.getElementById(idCheckbox);
    if (checkbox.checked) {
        if (className.indexOf(newStyle) == -1) className += newStyle;
        else className = className.replace(newStyle, '');
        element.className = className;
    }
}

function changeStyleIfNoChecked(id, idCheckbox, newStyle) {
    var element = document.getElementById(id);
    var className = element.className;
    var checkbox = document.getElementById(idCheckbox);
    if (!checkbox.checked) {
        if (className.indexOf(newStyle) == -1) className += newStyle;
        else className = className.replace(newStyle, '');
        element.className = className;
    }
}

function changeStyleIfSelected(id, idSelect, newStyle, optionNumber) {
    var element = document.getElementById(id);                           //доступ к блоку
    var select = document.getElementById(idSelect);                   //доступ к селекту
    var index = select.options[select.selectedIndex].index;         //какой выбрали option
    var className = element.className;

    if (optionNumber) {
        if (index == (optionNumber - 1)) {   							//выбор option, тот который указан в optionNumber
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
        if (index == 0) {
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

function changeStyleAllExceptSelected(id, idSelect, newStyle, optionNumber) {
    var element = document.getElementById(id);                           //доступ к блоку
    var select = document.getElementById(idSelect);                   //доступ к селекту
    var index = select.options[select.selectedIndex].index;         //какой выбрали option
    var className = element.className;

    if (optionNumber) {
        if (index !== (optionNumber - 1)) {   							//выбор option, тот который указан в optionNumber
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
        if (index !== 0) {
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

function changeSelectBySelect(idSelectSettings, idTransformedSelect, pattern) {
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
            setNumbers = subStringSet.replace(/,/g, '');
            transformNumber = arguments[i].substr(-1);
            for (var j = 0; j < setNumbers.length; j++) {
                if (selectSettingsIndex == setNumbers[j] - 1) {
                    if (transformedSelectIndex + 1 !== transformNumber) {
                        transformedSelect.selectedIndex = transformNumber - 1;
                    }
                }
            }
        }
    }
}

function changeSelectByCheckbox(idSelect, idCheckbox, selectSettingIndex, selectResetIndex) {
    var select = document.getElementById(idSelect);
    var checkbox = document.getElementById(idCheckbox);
    if (checkbox.checked) {
        select.selectedIndex = selectSettingIndex - 1;
    }
    else {
        select.selectedIndex = selectResetIndex - 1;
    }
}

function onlyOneCheckboxChecked(idCheckbox) {
    for (var i = 0, checkbox = document.getElementById(arguments[i]); i < arguments.length; i++) {
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

function resetStyleIfChecked(id, idCheckboxButton, newStyle) {
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

function hideExpandDivByCheckbox(elementId, checkboxId, checkOrUncheck, height) {
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

function chemResearchNonDetected(array, idTextarea, idCheckbox1, idCheckbox2, idCheckbox3) { //вывод списка веществ в textarea
    var text = '';                                                                           //в зависимости от нажатия checkbox
    for (var i = 2, ch = false; i < arguments.length; i++) {
        if (document.getElementById(arguments[i]).checked) {
            if (i !== 0 && ch) text += '; ';
            text += array[i - 2];
            ch = true;
        }
    }
    if (ch) text += '. ';
    document.getElementById(idTextarea).value = text;
}

/*WARNING*/
function getCaretCharacterOffsetWithin(id) {
    var iframe = document.getElementById(id);
    var element = (iframe.contentDocument || iframe.contentWindow.document).body;
    var doc = element.ownerDocument || element.document;
    var win = doc.defaultView || doc.parentWindow;
    var sel, range, preCaretRange, caretOffset = 0;
    if (typeof win.getSelection != "undefined") {
        sel = win.getSelection();
        if (sel.rangeCount) {
            range = sel.getRangeAt(0);
            preCaretRange = range.cloneRange();
            preCaretRange.selectNodeContents(element);
            preCaretRange.setEnd(range.endContainer, range.endOffset);
            caretOffset = preCaretRange.toString().length;
        }
    } else if ((sel = doc.selection) && sel.type != "Control") {
        preCaretRange = doc.body.createTextRange();
        preCaretRange.moveToElementText(element);
        preCaretRange.setEndPoint("EndToEnd", textRange);
        caretOffset = preCaretTextRange.text.length;
    }
    return caretOffset;
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
    for (var i = 0; i < arguments.length; i++) {
        if (document.getElementById(arguments[i]).checked) return true;
    }
    return false;
}

function checkCheckboxesAND(id) {
    for (var i = 0; i < arguments.length; i++) {
        if (!document.getElementById(arguments[i]).checked) return false;
    }
    return true;
}

function changeCheck(input1, input2) {
    var chbx1 = document.getElementById(input1),
        chbx2 = document.getElementById(input2);
    if (chbx1.checked && chbx2.checked) chbx2.checked = false;
    else if (!chbx1.checked && !chbx2.checked) chbx2.checked = true;
    else return undefined;
}

function changeCheckedFalse(id) {
    var element = document.getElementById(id);
    if (element.checked) element.checked = false;
}

function resetFormElements() { 								//reset input by default (text, checkbox, radio), textarea and select
    for (var i = 0; i < arguments.length; i++) {				//you need to add any number of IDs elements in the function arguments
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

function resetTextarea() {
    for (var i = 0; i < arguments.length; i++) {
        var textarea = document.getElementById(arguments[i]);
        textarea.value = '';
    }
}

function ISchecked_AndOutputArrayElem(id, item, num) { //проверка на нажатие
    var element = document.getElementById(id).checked;
    if (num == 1) {
        if (element) return item;
        else return false;
    }
    else {
        if (element) return false;
        else return item;
    }
}

function ISchecked_AndOutputArrayElem2(id, item1, item2, num) { //проверка на нажатие
    var element = document.getElementById(id).checked;
    if (num == 1) {
        if (element) return item1;
        else return item2;
    }
    else {
        if (element) return item2;
        else return item1;
    }
}

function checkboxChecked(checkboxSetId, checkboxChangeId) {
    var checkboxSet = document.getElementById(checkboxSetId);
    for (var i = 1; i < arguments.length; i++) {
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

function getOptionNumberOfSelect(idSelect) {
    var select = document.getElementById(idSelect);
    return select.options[select.selectedIndex].index + 1;
}

function getFromTextarea(id) {
    return document.getElementById(id).value;
}

function getNumberFromTextarea(id) {
    return document.getElementById(id).value.replace(/\./, ',');
}


function getStringFromSelect(id, optQnt, array, elmArr) {
    for (var i = 1; i <= optQnt; i++, elmArr++) {
        if (document.getElementById(id).value == i) {
            return array[elmArr];
        }
    }
}

function getStringFromSelect2(idSelect, array, startArrayElement) {
    var select = document.getElementById(idSelect);
    var index = select.options[select.selectedIndex].index;         //какой выбрали option
    return array[index + startArrayElement];

}

function verificationSelect(id, point) { //то ли выбрано, что задано в point (№ option)?
    var select = document.getElementById(id);
    var index = select.options[select.selectedIndex].index;
    if (index == point - 1) return true;
    else return false;
}

function getStringEnumeration(idCheckbox, array, firstElement) {
    var result = '', resultArray = [], arrayCounter = 0, arrayPlace = arguments[arguments.length - 1];
    if (!Array.isArray(arguments[arguments.length - 1])) { //last argument is not array?
        arrayCounter = arguments[arguments.length - 1];
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

function getStringEnumeration2(idCheckbox, array, firstElement) {
    var result = '', resultArray = [], arrayCounter = 0, arrayPlace = arguments[arguments.length - 1];
    if (!Array.isArray(arguments[arguments.length - 1])) { //last argument is not array?
        arrayCounter = arguments[arguments.length - 1];
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

function getStringEnumeration3(idCheckbox, array, firstElement) {
    var result = '', resultArray = [], arrayCounter = 0, arrayPlace = arguments[arguments.length - 1];
    if (!Array.isArray(arguments[arguments.length - 1])) { //last argument is not array?
        arrayCounter = arguments[arguments.length - 1];
        arrayPlace = arguments[arguments.length - 2]; // the array will be the penultimate argument
    }

    for (var i = 0; i < arguments.length; i++, arrayCounter++) {
        if (Array.isArray(arguments[i])) break;
        if (document.getElementById(arguments[i]).checked) {
            resultArray.push(arrayPlace[arrayCounter]);
        }
    }

    result = resultArray.join(', '); //making the string
    return result;
}

function getStringEnumeration4(idCheckbox, array, firstElement) {
    var result = '', resultArray = [], arrayCounter = 0, arrayPlace = arguments[arguments.length - 1];
    if (!Array.isArray(arguments[arguments.length - 1])) { //last argument is not array?
        arrayCounter = arguments[arguments.length - 1];
        arrayPlace = arguments[arguments.length - 2]; // the array will be the penultimate argument
    }

    for (var i = 0; i < arguments.length; i++, arrayCounter++) {
        if (Array.isArray(arguments[i])) break;
        if (document.getElementById(arguments[i]).checked) {
            resultArray.push(arrayPlace[arrayCounter]);
        }
    }

    result = resultArray.join(', '); //making the string

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

function getRandAndAddInValue(id, min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    document.getElementById(id).value = rand;
}

function get05RandAndAddInValue(id, min, max) { //с десятичной дробью
    var rand = Math.random() * (max - min) + min;
    document.getElementById(id).value = Math.round((rand) * 10) / 10;
}

function get5RandAndAddInValue(id, min, max, num) { //кратное num
    var rand = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById(id).value = Math.floor(rand / num) * num;
}

/*Date*/
function getDateYear(id) {
    var year = new Date();
    for (var i = 0; i < arguments.length; i++) {
        document.getElementById(arguments[i]).value = year.getFullYear().toString().slice(2);
    }
}

function getDateMonth(id) {
    var date = new Date();
    var month = date.getMonth() + 1;
    if (month.toString().length < 2) month = '0' + month;
    for (var i = 0; i < arguments.length; i++) {
        document.getElementById(arguments[i]).value = month;
    }
}

function getDateDay(id) {
    var date = new Date();
    var day = date.getDate();
    if (day.toString().length < 2) day = '0' + day;
    for (var i = 0; i < arguments.length; i++) {
        document.getElementById(arguments[i]).value = day;
    }
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

function checkAlveolus(nameTeeth, targetCheckbox, symb) {
    var elLength = document.getElementsByName(nameTeeth).length;
    var checkbox = document.getElementById(targetCheckbox);
    for (var i = 0, counter = 0; i < elLength; i++) {
        if (counter >= 2) break;
        if (document.getElementsByName(nameTeeth)[i].value == symb) counter++;
    }
    if (counter !== 0) checkbox.checked = true;
    else checkbox.checked = false;
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
    'На верхней и нижней челюсти все зубы с коронками из металла белого цвета. ',
    'На верхней и нижней челюсти все зубы с коронками из металла желтого цвета. ',

    'На верхней челюсти ', //6
    'На нижней челюсти ', //7

    'зубы отсутствуют. ',
    'зубы целы. ',
    'зубы представлены корнями. ', //10
    'все зубы поражены кариесом. ',
    'зубы с коронками из металла белого цвета. ',
    'зубы с коронками из металла желтого цвета. ', //13
    'справа: ', //14
    'слева: ',
    'зубы отсутствуют; ', //16
    'зубы целы; ', //17
    'справа ',
    'слева ',
    'зубы представлены корнями; ', //20
    'зубы поражены кариесом; ',
    'зубы с коронками из металла белого цвета; ',
    'зубы с коронками из металла желтого цвета; ' //23
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
     uniqueType - если 0, то ф-ция возвращает массив уникальных элементов
     если 1, то ф-ция возвращает число уникальных элементов
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
                    for (i = 0; i < array.length; i++) {
                        var element = array[i]; // для каждого элемента
                        for (j = 0; j < result.length; j++) { // ищем, был ли он уже?
                            if (result[j] == element) continue nextInput; // если да, то следующий, переход на внешний цикл
                        }
                        result.push(element);
                        counter++;
                    }
                return counter;
            } else {
//////////////////////////

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
                    (arrResult[v].length == 1) ? arrayOutput[v] += ' с коронкой из металла белого цвета' : arrayOutput[v] += ' с коронками из металла белого цвета';
                break;
            case 5:
                if (arrResult[v].length !== 0)
                    (arrResult[v].length == 1) ? arrayOutput[v] += ' с коронкой из металла желтого цвета' : arrayOutput[v] += ' с коронками из металла желтого цвета';
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

function getResultString(array, symbArray, textArray1) {
    var teethAll,
        teethMaxilla, teethMandible,
        maxillaRareComb = false, mandibleRareComb = false,
        result = 'No';

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
    //Частичная проверка однотипности зубного ряда на ВЧ и НЧ, кроме редкого сочетания
    if (getUniqueElementOfArray(array, 1, 0) == 1 && getUniqueElementOfArray(array, 1, 1) == 1) teethMaxilla = true; else teethMaxilla = false;
    if (getUniqueElementOfArray(array, 1, 2) == 1 && getUniqueElementOfArray(array, 1, 3) == 1) teethMandible = true; else teethMandible = false;

    /*maxilla*/
    if (teethMaxilla && array[0][0] !== array[1][0]) { //редкое сочетание, когда слева все одного типа, а справа все другого на ВЧ
        maxillaRareComb = true;
        result = textArray1[6] + textArray1[18]; //Начало строки "На верхней челюсти справа "
        if (array[0][0] == symbArray[0]) result += textArray1[16]; //отсутствуют
        else if (array[0][0] == symbArray[1]) result += textArray1[17]; //целы
        else if (array[0][0] == symbArray[2]) result += textArray1[20]; //корни
        else if (array[0][0] == symbArray[3]) result += textArray1[21]; // кариес
        else if (array[0][0] == symbArray[4]) result += textArray1[22];  // белые
        else if (array[0][0] == symbArray[5]) result += textArray1[23];  // желтые
        else result = '';

        result += textArray1[19]; //После точки с запятой слово "слева "
        if (array[1][0] == symbArray[0]) result += textArray1[8]; //отсутствуют
        else if (array[1][0] == symbArray[1]) result += textArray1[9]; //целы
        else if (array[1][0] == symbArray[2]) result += textArray1[10]; //корни
        else if (array[1][0] == symbArray[3]) result += textArray1[11]; // кариес
        else if (array[1][0] == symbArray[4]) result += textArray1[12];  // белые
        else if (array[1][0] == symbArray[5]) result += textArray1[13];  // желтые
        else result = '';
    }

    if (teethMaxilla && !maxillaRareComb) { // все на ВЧ однотипны
        result = textArray1[6]; //Начало строки "На верхней челюсти"
        if (array[0][0] == symbArray[0]) result += textArray1[8]; //отсутствуют
        else if (array[0][0] == symbArray[1]) result += textArray1[9];
        else if (array[0][0] == symbArray[2]) result += textArray1[10];
        else if (array[0][0] == symbArray[3]) result += textArray1[11];//кариес
        else if (array[0][0] == symbArray[4]) result += textArray1[12];
        else if (array[0][0] == symbArray[5]) result += textArray1[13];
        else result = '';
    }

    if (!teethMaxilla && !maxillaRareComb) {
        result = textArray1[6] + textArray1[14]; //Начало строки "На верхней челюсти" + "справа"
        //Добавление числовой последовательности
        result += joingArrayTeeth(array, 0, symb) + '; ' + textArray1[15] + joingArrayTeeth(array, 1, symb) + '. ';
    }

    /*mandible*/

    if (teethMandible && array[2][0] !== array[3][0]) { //редкое сочетание, когда слева все одного типа, а справа все другого на ВЧ
        mandibleRareComb = true;
        result += textArray1[7] + textArray1[18]; //Начало строки "На нижней челюсти справа "
        if (array[2][0] == symbArray[0]) result += textArray1[18] + textArray1[16]; //отсутствуют
        else if (array[2][0] == symbArray[1]) result += textArray1[17]; //целы
        else if (array[2][0] == symbArray[2]) result += textArray1[20]; //корни
        else if (array[2][0] == symbArray[3]) result += textArray1[21]; // кариес
        else if (array[2][0] == symbArray[4]) result += textArray1[22];  // белые
        else if (array[2][0] == symbArray[5]) result += textArray1[23];  // желтые
        else result = '';

        result += textArray1[19]; //После точки с запятой слово "слева "
        if (array[3][0] == symbArray[0]) result += textArray1[8]; //отсутствуют
        else if (array[3][0] == symbArray[1]) result += textArray1[9]; //целы
        else if (array[3][0] == symbArray[2]) result += textArray1[10]; //корни
        else if (array[3][0] == symbArray[3]) result += textArray1[11]; // кариес
        else if (array[3][0] == symbArray[4]) result += textArray1[12];  // белые
        else if (array[3][0] == symbArray[5]) result += textArray1[13];  // желтые
        else result = '';
    }

    if (teethMandible && !mandibleRareComb) { // все на HЧ однотипны
        result += textArray1[7]; //Начало строки "На нижней челюсти"
        if (array[2][0] == symbArray[0]) result += textArray1[8];
        else if (array[2][0] == symbArray[1]) result += textArray1[9];
        else if (array[2][0] == symbArray[2]) result += textArray1[10];
        else if (array[2][0] == symbArray[3]) result += textArray1[11];
        else if (array[2][0] == symbArray[4]) result += textArray1[12];
        else if (array[2][0] == symbArray[5]) result += textArray1[13];
        else result = '';
    }

    if (!teethMandible && !mandibleRareComb) {
        result += textArray1[7] + textArray1[14];
        //Добавление числовой последовательности
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
    'бледно-синюшного',
    'бледно-розового цвета, без кровоизлияний. ',
    'бледно-серого цвета, без кровоизлияний. ',
    'грязно-бурого цвета, без кровоизлияний. ',
    'без кровоизлияний. ',
    'красновато-коричневого цвета', /*9*/
    'желтовато-коричневого цвета',
    'темно-желтого цвета',
    ''

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
    'умеренного питания', //5
    'повышенного питания',
    'пониженного питания',
    'резко пониженного питания',
    ' и нормального физического развития. ',
    'Длина тела ',  //10
    ' возраст на вид соответствует указанному выше. ',
    ' выглядит старше вышеуказанного  возраста. ',
    ' выглядит младше вышеуказанного возраста. ',
    ' на вид возраст: ',
    'Масса тела не измерялась. ',
    'Масса тела ',
    'вне трупных пятен мертвенно-бледного цвета, ',
    'вне трупных пятен бледно-серого цвета, ',
    'смуглый вне трупных пятен, ',
    'вне трупных пятен бледно-серого цвета с желтушным оттенком, ', //20
    'грязно-зеленого цвета, ',
    'бледно-серого цвета с розовым оттенком вне трупных пятен, ',
    'упругий, ',
    'мягкий, ',
    'дряблый, ', //25
    'без видимых участков подсыхания. ',
    'с участками подсыхания ',
    'Скелетные мышцы мягкие на ощупь', //28
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
    'интенсивные, ', //7
    'слабой интенсивности ',
    'сливные, ',
    'очаговые ',//10
    'располагаются на задней поверхности шеи, спины и конечностей, за исключением мест сдавлений в области лопаток и ягодиц, ',
    'располагаются на заднебоковых поверхностях шеи, спины и конечностей, ',
    'располагаются на передней поверхности шеи, спины и конечностей, ',
    'располагаются на левой боковой поверхности шеи, туловища и конечностей, ',
    'располагаются на правой боковой поверхности шеи, туловища и конечностей, ',
    'при надавливании в трех рядом расположенных участках судебно-медицинским динамометром СМЭД-2 с силой 2 кг/см', //16
    'не изменяют свою окраску. ',
    'бледнеют, восстанавливая свою окраску через ',
    'исчезают, восстанавливая свою окраску через ',
    'Трупное окоченение умеренно развито во всех группах мышц. ', //20
    'Трупное окоченение хорошо развито во всех группах мышц. ',
    'Трупное окоченение слабо развито во всех группах мышц. ',
    'Трупное окоченение отсутствует во всех группах мышц. ',
    'Видимые признаки гниения отсутствуют. ',
    'Кожный покров на передней брюшной стенке темно-зеленого цвета (трупная зелень). ', //25
    'Кожный покров в паховых областях темно-зеленого цвета (трупная зелень). ',
    ' с грязно-серыми участками треугольной формы, вершиной обращенной к углу глаза (пятна Лярше). ' //27

];

var arr_Damage = [
    'Кости свода черепа и лицевого скелета на ощупь целы. ',
    'Повреждений на волосистой части головы не обнаружено. ',
    ', без повреждений и кровоизлияний. ',
    ', без повреждений. ',//3
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
    'Кости ', //35
    'Рассечены межреберные промежутки - переломов ребер не обнаружено. ',
    ', без повреждений и кровоизлияний', //37
    ', без повреждений',
    ', без кровоизлияний'

];

var arr_Head = [/*array5*/
    'Волосы на голове отсутствуют. ',
    'Волосы на голове темно-русые, ',
    'Волосы на голове русые, ',
    'Волосы на голове светло-русые, ',
    'Волосы на голове черные, ',
    'Волосы на голове седые, ', //5
    ' с сединой ',
    'Волосы на голове ', //7
    'длиной до ',
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
    'радужная оболочка светло-коричневого цвета. ', //20
    'радужная оболочка темно-коричневого цвета. ',
    'радужная оболочка голубого цвета. ',
    'радужная оболочка черного цвета. ',
    'радужная оболочка светло-зеленого цвета. ',
    'радужная оболочка ',
    'Соединительные оболочки глаз бледно-розового цвета, ', /*26*/
    'Соединительные оболочки глаз серо-розового цвета, ',
    'Соединительные оболочки глаз желтого цвета, ',
    'Соединительные оболочки глаз светло-желтого цвета, ',
    'гладкие',
    'шероховатые', //31
    'Кости и хрящи носа на ощупь целы. ',
    'Кости носа на ощупь целы. ',
    'Хрящи носа на ощупь целы. ',
    'Выделений из наружных отверстий носовых ходов нет. ', /*35*/
    'Из наружных отверстий носовых ходов кровянистые выделения. ',
    'Из наружных отверстий носовых ходов выделения светло-желтого цвета. ',
    'Из наружных отверстий носовых ходов выделения темно-желтого цвета. ',
    'Из наружных отверстий носовых ходов выделения зеленого цвета. ',
    'закрыты',
    ' Слизистая оболочка преддверия и полости рта синюшно-розового цвета', /*41*/
    ' Слизистая оболочка преддверия и полости рта бледно-синюшного цвета',
    ' Слизистая оболочка преддверия и полости рта бледно-серого цвета',
    ' Слизистая оболочка преддверия и полости рта бледно-желтого цвета',
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
    'Зрачки равномерно округлой формы, по ' /*59*/,
    'Лунка отсутствующего зуба заращена, атрофичная. ',
    'Лунки отсутствующих зубов заращены, атрофичные. '

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
    'Задний проход сомкнут, ', /*36*/
    'Задний проход зияет, ',
    'кожа вокруг него чистая. ',
    'кожа вокруг него загрязнена каловыми массами. ',
    'на коже вокруг него следы буровато-красной жидкости похожей на кровь. '
];

var arr_headbrain = [
    'Вскрыты и отсепарованы мягкие ткани волосистой части головы. На ощупь они плотно-эластичные, ' +
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
    'Артерии основания головного мозга на большем протяжении с непрозрачными светло-желтоватыми циркулярно утолщенными стенками и желтыми плотными атеросклеротическими бляшками, суживающие просвет на 50%. ',
    'Артерии основания головного мозга практически на всем протяжении с непрозрачными светло-желтоватыми циркулярно утолщенными стенками и большим количеством желтых плотных атеросклеротических бляшек, суживающие просвет на 80%. ',
    'Артерии основания головного мозга тонкие, слабоэластичные, без очаговых изменений. ',
    'Мозжечок и ствол мозга на разрезах с хорошо различимым обычным симметричным рисунком строения, без кровоизлияний. ', /*30*/
    'Эпифиз эластичный на ощупь, неправильной овальной формы, размерами ',
    'Эпифиз эластичный на ощупь, шаровидной формы, размерами ',
    'с поверхности и на разрезе светло-коричневого цвета. ',
    'Гипофиз бобовидной формы, размерами ', /*34*/
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
    'Мягкие ткани переднебоковых отделов шеи, груди и живота ', /*3*/
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
    'Легочной ствол, отходящие от него артерии и их ветви проходимы, внутренняя оболочка их серовато-синюшная, гладкая. ',
    'Сердце свободно располагается в полости перикарда, ',
    'Наружная оболочка сердца сероватая, полупрозрачная, тонкая, блестящая, без кровоизлияний. ',
    'Под ней преимущественно по передней и боковым поверхностям отложение желтоватой жировой клетчатки толщиной до 0,4 см. ',
    'Под ней, по всем поверхностям отложение желтоватой жировой клетчатки толщиной до 0,6 см. ',
    'Под ней, по всем поверхностям отложение желтоватой жировой клетчатки толщиной до 1 см. ',
    'Под ней, по всем поверхностям большое отложение желтоватой жировой клетчатки толщиной до 2 см. ',
    'Венечные артерии извиты, стенки их эластичные, ', /*7*/
    'Венечные артерии извиты, стенки их плотноватые, ',
    'Венечные артерии извиты, стенки их плотные, режутся с трудом, ',
    'на внутренней стенке бляшек нет, в просветах небольшое количество темно-красной жидкой крови. ', /*10*/
    'с внутренней стороны с наложением множественных полулунных бляшек, на большем протяжении сливающихся между собой, расположенных в передней межжелудочковой и огибающей ветвях левой венечной артерии, суживающих просвет до 70%. В просвете венечных артерий небольшое количество темно-красной жидкой крови. ',
    'с внутренней стороны с наложением множественных кольцевидных и полулунных бляшек, на большем протяжении сливающихся между собой, расположенных в передней межжелудочковой и огибающей ветвях левой венечной артерии, суживающих просвет до 70%. В просвете венечных артерий небольшое количество темно-красной жидкой крови. ',
    'с внутренней стороны с наложением множественных кольцевидных и полулунных бляшек, на большем протяжении сливающихся между собой, расположенных в передней межжелудочковой и огибающей ветвях левой венечной артерии, суживающих просвет до 80%, в отдельных участках полностью закрывающие просвет. В свободном от бляшек просвете венечных артерий небольшое количество темно-красной жидкой крови. ',
    'Сердце вскрыто по току крови. ', /*14*/
    'Полости сердца не расширены, ',
    'Полости сердца расширены, ',
    'в них небольшое количество темно-красной жидкой крови. ',
    'содержат темно-красную жидкую кровь. ',
    'содержат темно-красные рыхлые свертки. ',
    'содержат желтовато-красные эластичные свертки. ', /*20*/
    'содержат желтые эластичные свертки. ',
    'Клапанный аппарат сердца и крупных сосудов сформирован правильно. ',
    'Створки клапанов белесовато-желтоватого цвета, уплотнены у основания, не сращены между собой, легко подвижные, смыкаются полностью, гладкие, блестящие. ',
    'Створки клапанов белесовато-желтоватого цвета, утолщены, не сращены между собой, легко подвижные, смыкаются полностью, гладкие, блестящие. ',
    'Створки клапанов белесовато-желтоватого цвета, утолщены, плотные, не сращены между собой, с незначительным снижением подвижности, смыкаются полностью, гладкие, блестящие. ',
    'Периметр митрального клапана ',
    'аортального ',
    'трехстворчатого ',
    'клапана легочного ствола ',
    'Сосочковые мышцы не утолщены, сухожильные нити тонкие, не укорочены, не сросшиеся, светло-серого цвета. ', /*30*/
    'Сосочковые мышцы утолщены, сухожильные нити тонкие, не укорочены, не сросшиеся, светло-серого цвета. ',
    'Сосочковые мышцы не утолщены, сухожильные нити тонкие, укорочены, не сросшиеся, светло-серого цвета. ',
    'Сосочковые мышцы утолщены, сухожильные нити тонкие, укорочены, не сросшиеся, светло-серого цвета. ',
    'Внутренняя оболочка сердца полупрозрачная, красновато-серого цвета, гладкая, тонкая, без кровоизлияний. ',
    'Мышца сердца на разрезах красновато-коричневого цвета, ',
    ' с мелкими сероватыми прослойками, расположенными хаотично по всей сердечной мышце. ',
    'Толщина стенки левого желудочка ',
    'правого - ',
    'В просвете аорты содержится небольшое количество темно-красной жидкой крови, ',
    'В просвете аорты содержится темно-красная жидкая кровь, ', /*40*/
    'В просвете аорты содержатся темно-красные рыхлые свертки, ',
    'В просвете аорты содержатся желтовато-красные эластичные свертки, ',
    'В просвете аорты содержатся желтые эластичные свертки, ',
    'внутренняя оболочка аорты светло-желтая, ',
    'внутренняя оболочка аорты желтая, ',
    'внутренняя оболочка аорты темно-желтая, ',
    'внутренняя оболочка аорты красновато-желтая, ',
    'внутренняя оболочка аорты темно-красная, ',
    'содержит многочисленные желтые участки (липидные пятна). ',
    'гладкая. ', /*50*/
    'содержит многочисленные желтые участки (липидные пятна) и единичные плотноватые атеросклеротические бляшки. ',
    'содержит многочисленные желтые участки (липидные пятна) и плотноватые атеросклеротические бляшки. ',
    'на ней имеются многочисленные, сильно выбухающие желтоватые атеросклеротические бляшки, часть которых находятся в состоянии изъязвления.  ',
    'на ней имеются многочисленные, сильно выбухающие желтоватые атеросклеротические бляшки, часть которых находятся в состоянии изъязвления. В отдельных участках аорты, больше в брюшном отделе, отмечается кальциноз бляшек. ',
    'Аорта режется с характерным хрустом. ',
    'В просвете нижней полой вены содержится небольшое количество темно-красной жидкой крови, ',
    'В просвете нижней полой вены содержится темно-красная жидкая кровь, ',
    'В просвете нижней полой вены содержатся темно-красные рыхлые свертки, ',
    'В просвете нижней полой вены содержатся желтовато-красные эластичные свертки, ',
    'В просвете нижней полой вены содержатся желтые эластичные свертки, ', /*60*/
    'Длина окружности аорты в грудном отделе ',
    'края ее при пересечении разошлись на ',
    'внутренняя оболочка сосуда темно-синюшная, гладкая, блестящая. ',
    'Перикард розовато-серого цвета, поверхности его гладкие и блестящие. В полости перикарда ',
    'с внутренней стороны с наложением множественных полулунных бляшек, на большем протяжении сливающихся между собой, расположенных в передней межжелудочковой и огибающей ветвях левой венечной артерии, ',
    'суживающих просвет до ',
    'В просвете венечных артерий небольшое количество темно-красной жидкой крови. ' /*67*/
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

var arr_digestive = [
    'Желудок обычной формы, ',
    'в его полости около ',
    'в его полости незначительное количество серой слизи. ',
    'полупереваренных пищевых масс. ',
    'Слизистая оболочка желудка умеренно складчатая, ',   //4
    'Слизистая оболочка желудка с хорошо выраженной складчатостью, ',
    'Слизистая оболочка желудка со слабой складчатостью, ',
    'Слизистая оболочка желудка гладкая, ',
    'В просвете двенадцатиперстной кишки незначительное количество серо-желтой слизи. Фатеров сосок не контурируется, желчь из него выделяется при умеренном надавливании на желчный пузырь. ',
    'Поджелудочная железа в виде тяжа ', //9
    'мягкой консистенции, ',
    'плотно-эластичной консистенции, ',
    'плотной консистенции, ',
    'Капсула ее гладкая, не напряжена, ткань на разрезе серо-желтого цвета, ',
    'дольчатого строения, ', /*14*/
    'с нечетким дольчатым рисунком, ',
    'В желчном пузыре около ',
    ' мл желчи темно-оливкового цвета. ', /*17*/
    'Слизистая оболочка желчного пузыря бархатистая, темно-зеленого цвета. Стенка его тонкая, эластичная, не деформирована. ',
    'Печень двудольчатого строения, ',
    'поверхность ее гладкая, ',
    'Размеры печени: ',
    'Ткань печени на разрезах ', /*22*/
    'с нечетко выраженным дольковым рисунком. ',
    'с четко выраженным дольковым рисунком. ',
    'В просвете тонкой кишки умеренное количество однородных вязких желтоватых масс. В просвете толстой кишки коричневые полуоформленные каловые массы в умеренном количестве. ',
    'Слизистая оболочка всех отделов кишечника серого цвета с зеленоватым оттенком, умеренно складчатая, без кровоизлияний, рубцов и дефектов. '

];

var arr_additionInvestigation = [
    'На судебно-химическое исследование направлено ',
    'по ',
    'периферической крови ',
    'мочи ',
    ' На судебно-химическое исследование направлено ', //4
    'по 10 мл периферической крови и мочи  ',
    '10 мл периферической крови ',
    'для определения концентрации этилового спирта', //7
    'одна треть печени',
    '200 гр. головного мозга',
    'почка', //10
    'желудок с содержимым',
    ' для определения наличия ',
    'суррогатов алкоголя',
    'лекарственных препаратов',
    'наркотических веществ', //15
    'стекловидное тело для определения концентрации глюкозы',
    'На судебно-химическое исследование направлено стекловидное тело для определения концентрации глюкозы',
    'На судебно-биологическое исследование направлена кровь для определения групповой принадлежности. ',
    '10 мл периферической крови для определения концентрации карбоксигемоглобина', //19
    '10 мл мочи '
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
    'размеры: ',
    'размерами ', /*13*/
    'масса '
];

var arr_hystology = [
    'На судебно-гистологическое исследование направлены кусочки ',
    'головного мозга',
    'гипофиза',
    'твердой мозговой оболочки',
    'спинного мозга',
    'сердца',
    'аорты',
    'щитовидной железы',
    'надпочечников',
    'почек',
    'мочевого пузыря',
    'предстательной железы',
    'яичек',
    'матки',
    'яичников',
    'лимфатических узлов',
    'селезенки',
    'грудины',
    'костного мозга',
    'брюшины',
    'брыжейки',
    'пищевода',
    'желудка',
    'кишечника',
    'печени',
    'желчного пузыря',
    'поджелудочной железы',
    'мягких тканей нижних конечностей',
    'мягких тканей шеи',
    'кожи с фрагментом странгуляционной борозды'

];

var arr_chem = [
    'хлороформ, хлоралгидрат, 4-хлористый углерод, дихлорэтан; ацетальдегид; ацетон; метиловый, пропиловые, бутиловые, амиловые спирты; бензол, толуол, ксилол',
    'морфин, кодеин, дионин, героин, промедол, папаверин; димедрол',
    'амитриптилин; аминазин, дипразин, трифтазин, мажептил, тизерцин, этмозин и другие производные фенотиазина; имизин; МДА, МДМА; элениум, седуксен, тазепам, нитразепам, феназепам и другие производные 1,4-бензодиазепина'
];

var arr_hystologists = [
    'Захарова О.А.',
    'Штарберг Р.С.',
    'Захарчук Я.',
    'Салтонас '
];

var arr_chemist = [
    'Дорофеева О.Е.',
    'Жердева Е.А.'
];

var arr_biologist = [
    'Колисниченко Н.В.'
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
        sex: function () {
            if (ISchecked(t.id6)) return t.array2[0];
            else return t.array2[1];
        },
        physique: getStringFromSelect2(t.id8, t.array2, 2),
        pitanie: getStringFromSelect2(t.id7, t.array2, 5),
        defects: function () {
            if (!ISchecked(t.id9)) return t.array2[9];
            else return '. ';
        },
        growth: arr_General[10] + getFromTextarea(t.id10) + ' см, ',
        age: function () {
            if (verificationSelect(t.id11, 4)) {
                return t.array2[14] + getFromTextarea(t.id12) + '-' + getFromTextarea(t.id13) + ' лет. ';
            }
            else {
                return getStringFromSelect2(t.id11, arr_General, 11);
            }
        },
        mass: function () {
            if (ISchecked(t.id14)) return t.array2[15];
            else return t.array2[16] + getFromTextarea(t.id15) + ' кг. ';
        }
    };

    var decompositionAndSkin = {
        cool: getStringFromSelect2(t.id16, t.array3, 0),
        skinColor: getStringFromSelect2(t.id17, t.array2, 17),
        skinElastic: getStringFromSelect2(t.id18, t.array2, 23),
        skinDry: function () {
            if (ISchecked(t.id19)) return t.array2[27];
            else return t.array2[26];
        },
        spotColor: getStringFromSelect2(t.id20, t.array3, 4),
        spotIntensity: getStringFromSelect2(t.id21, t.array3, 7),
        spotArea: getStringFromSelect2(t.id22, t.array3, 9),
        spotLocalization: getStringFromSelect2(t.id23, t.array3, 11),
        spotStage: function () {
            return t.array3[16];
        }
    };

    var decompositionMuscle = {
        spotColorAfterPush: function () {
            if (verificationSelect(t.id24, 1)) return t.array3[17];
            else return getStringFromSelect2(t.id24, t.array3, 17) + getFromTextarea(t.id25) + ' мин. ';
        },
        rigorMortis: getStringFromSelect2(t.id26, t.array3, 20),
        muscle: function () {
            if (verificationSelect(t.id26, 2)) return t.array2[29] + getStringFromSelect2(t.id27, t.array2, 30);
            else return t.array2[28] + getStringFromSelect2(t.id27, t.array2, 30);
        },
        rotting: function () {
            if (verificationSelect(t.id28, 4)) return getFromTextarea(t.id29);
            else return getStringFromSelect2(t.id28, t.array3, 24);
        }
    };

    var head = {
        skullDamage: function () {
            if (!(ISchecked(t.id30) || ISchecked(t.id31))) return t.array4[0];
            else return '';
        },
        hair: function () {
            if (!(ISchecked(t.id32))) {
                if (!verificationSelect(t.id33, 6)) {
                    if (!ISchecked(t.id35)) return getStringFromSelect2(t.id33, t.array5, 1) + t.array5[8] + getFromTextarea(t.id36) + ' см. ';
                    else return getStringFromSelect2(t.id33, t.array5, 1) + t.array5[6] + t.array5[8] + getFromTextarea(t.id36) + ' см. ';
                }
                else return t.array5[7] + getFromTextarea(t.id34) + ', ' + t.array5[8] + getFromTextarea(t.id36) + ' см. ';
            }
            else return t.array5[0];
        },

        headHairDamage: function () {
            if (!ISchecked(t.id49)) return t.array4[1];
            else return '';
        },

        face: getStringFromSelect2(t.id37, t.array5, 9),
        facePuffy: function () {
            if (ISchecked('puffy')) return t.array5[15];
            else return t.array5[14];
        },

        eyes: getStringFromSelect2(t.id39, t.array5, 16) + getStringFromSelect2(t.id40, t.array5, 18),

        iris: function () {
            if (!verificationSelect(t.id41, 6)) return getStringFromSelect2(t.id41, t.array5, 20);
            else return t.array5[25] + getFromTextarea(t.id42) + t.array0[2];
        },

        pupil: function () {
            return t.array5[59] + getNumberFromTextarea(t.id43) + ' см каждый. ';
        },

        eyesConnectMembran: function () {
            return getStringFromSelect2(t.id46, t.array5, 26) + getStringFromSelect2(t.id47, t.array5, 30);
        },

        eyesConnectMembranDamageAndHemorrhage: function () {
            var larshe = function () {
                if (ISchecked(t.id235)) return ', ' + t.array3[27];
                else return '. ';
            };

            if (!ISchecked(t.id50) && !ISchecked(t.id48)) return t.array4[37] + larshe(); //без повреждений и кровоизлияний
            else if (!ISchecked(t.id50) && ISchecked(t.id48)) return t.array4[38] + larshe(); //без повреждений
            else if (ISchecked(t.id50) && !ISchecked(t.id48)) return t.array4[39] + larshe(); //без кровоизлияний
            else return larshe();
        },

        noseDamage: function () {
            if (!ISchecked(t.id51) && !ISchecked(t.id52)) return t.array5[32];
            else if (!ISchecked(t.id51) && ISchecked(t.id52)) return t.array5[33];
            else if (ISchecked(t.id51) && !ISchecked(t.id52)) return t.array5[34];
            else return '';
        },

        noseExcret: function () {
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

        teeth: function () {
            if (ISchecked(t.id85)) return t.array5[58];
            else return getResultString(matrix, symb, textPhrasesArray);
        },

        teethAlveolus: function () {
            if (ISchecked(t.id57t)) {
                var elLength = document.getElementsByName(t.id57t_name).length;
                for (var i = 0, counter = 0; i < elLength; i++) {
                    if (document.getElementsByName(t.id57t_name)[i].value == ' Н ') counter++;

                }

                if (counter == 1) return t.array5[60];
                else if (counter > 1) return t.array5[61];
                else return '';

            } else return '';
        },

        mouth: getStringFromSelect2(t.id57, t.array5, 41),
        mouthDamage: function () {
            if (!ISchecked(t.id58)) return t.array4[3];
            else return '. ';
        },

        lipsborder: getStringFromSelect2(t.id59, t.array5, 45) + getStringFromSelect2(t.id60, t.array5, 49),
        ear: function () {
            if (!ISchecked(t.id61)) {
                if (verificationSelect(t.id62, 6)) {
                    if (checkAreaForFill(t.id63, re)) return t.array5[51] + getFromTextarea(t.id63);

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
        neck: function () {
            if (ISchecked(t.id64)) return t.array6[0] + '. ';
            else return t.array6[0] + t.array4[3];
        },

        armpits: function () {
            if (ISchecked(t.id65)) return '';
            else return t.array6[1] + t.array4[3];
        },

        thorax: function () {
            if (ISchecked(t.id66)) {
                if (ISchecked(t.id68)) return getStringFromSelect2(t.id67, t.array6, 2) + t.array6[8] + '. ';
                else return getStringFromSelect2(t.id67, t.array6, 2) + t.array6[9] + '. ';
            }
            else {
                if (ISchecked(t.id68)) return getStringFromSelect2(t.id67, t.array6, 2) + t.array6[8] + ', ' + t.array4[5];
                else return getStringFromSelect2(t.id67, t.array6, 2) + t.array6[9] + ', ' + t.array4[5];
            }
        },

        mammaryGland: function () {
            if (ISchecked(t.id6a)) return getStringFromSelect2(t.id69, t.array6, 10) + getStringFromSelect2(t.id70, t.array6, 12);
            else return '';
        },

        abdomen: function () {
            if (ISchecked(t.id71)) return t.array6[15] + getStringFromSelect2(t.id72, t.array6, 17);
            else return t.array6[16] + getStringFromSelect2(t.id72, t.array6, 17);
        },

        pubis: function () {
            if (verificationSelect(t.id73, 3)) return t.array6[22];
            else {
                if (ISchecked(t.id6)) return getStringFromSelect2(t.id73, t.array6, 20) + t.array6[23];
                else return getStringFromSelect2(t.id73, t.array6, 20) + t.array6[24];
            }
        },

        genitals: function () {
            if (ISchecked(t.id6)) return t.array6[25] + getStringFromSelect2(t.id74, t.array6, 26);
            else return getStringFromSelect2(t.id74, t.array6, 31);
        },

        rectum: getStringFromSelect2(t.id75, t.array6, 36) + getStringFromSelect2(t.id76, t.array6, 38),

        spinLoinsDamage: function () {
            if (!ISchecked(t.id82) && !ISchecked(t.id83)) {
                return t.array4[12];
            }
            else if (!ISchecked(t.id82) && ISchecked(t.id83)) {
                return t.array4[13];
            }
            else if (ISchecked(t.id82) && !ISchecked(t.id83)) {
                return t.array4[14];
            }
            else return '';
        },

        bonesDamageExternalResearch: function () {
            var otherBones = getStringEnumeration(t.id77, t.id78, t.id80, t.id81, t.array4, 7),
                limbBones = getStringEnumeration2(t.id79a, t.id79b, t.array4, 19);


            if (limbBones !== '' && otherBones !== '') {
                return otherBones + ', ' + limbBones + t.array4[21] + t.array4[6];
            }
            else if (limbBones == '' && otherBones !== '') {
                return otherBones + t.array4[6];
            }
            else if (limbBones !== '' && otherBones == '') {
                return limbBones.charAt(1).toUpperCase() + limbBones.substr(2) + t.array4[21] + t.array4[6];
            }
            else return '';
        },

        textareaDamage: function () {
            if (checkAreaForFill(t.id84, re)) return t.array4[17] + getFromTextarea(t.id84) + ' ';
            else return '';
        },

        lastSentenceExternalResearch: function () {
            if (checkCheckboxesOR(t.id30, t.id31, t.id49, t.id50, t.id51, t.id52, t.id58, t.id61, t.id64, t.id65, t.id66, t.id77, t.id78, t.id79a, t.id79b, t.id80, t.id81, t.id82, t.id83) || checkAreaForFill(t.id84, re)) return t.array4[16];
            else return t.array4[15];
        }

    };

    var headBrain = {
        headSoftTissues: function () {
            return t.array7[0];
        },
        calvaria: function () {
            if (!ISchecked(t.id86)) {
                return t.array7[1];
            }
            else return '';
        },

        skull: function () {
            return t.array7[3] + getNumberFromTextarea(t.id88) + ' см, ' + t.array7[4] +
                getNumberFromTextarea(t.id89) + ' см, ' + t.array7[5] + getNumberFromTextarea(t.id90) + ' см. ';
        },

        duraMater: function () {
            if (!ISchecked(t.id91)) {
                return t.array7[6] + t.array4[18] + getStringFromSelect2(t.id92, t.array7, 7) + getStringFromSelect2(t.id93, t.array7, 9) + t.array7[11] + getStringFromSelect2(t.id94, t.array7, 12);
            }
            else return t.array7[6] + getStringFromSelect2(t.id92, t.array7, 7) + getStringFromSelect2(t.id93, t.array7, 9) + t.array7[11] + getStringFromSelect2(t.id94, t.array7, 12);
        },

        arachnoidMater1: function () {
            if (!ISchecked(t.id91)) {
                return t.array7[15] + t.array4[18] + t.array7[16];
            }
            else return t.array7[15] + t.array7[16];
        },

        arachnoidMater2: function () {
            if (!ISchecked(t.id95)) {
                return t.array7[17] + t.array7[19];
            }
            else return t.array7[18] + t.array7[19];

        },

        brainArterias: getStringFromSelect2(t.id104, t.array7, 26),

        hemisphere: function () {
            return t.array7[20];
        },

        brainMass: function () {
            return t.array7[21] + getNumberFromTextarea(t.id97) + ' г. ';
        },

        brain: function () {
            if (!ISchecked(t.id95)) return t.array7[22] + t.array8[0];
            else return t.array7[22] + t.array8[2];
        },

        brainCavity: function () {
            if (!ISchecked(t.id95)) return t.array7[24] + t.array8[0];
            else return t.array7[24] + t.array8[3];
        },

        nucleiSubcortical: function () {
            return t.array7[25];
        },

        brainstemCerebellim: function () {
            return t.array7[30];
        },

        pinealGland: function () {
            if (getNumberFromTextarea(t.id98) == getNumberFromTextarea(t.id99) && getNumberFromTextarea(t.id98) == getNumberFromTextarea(t.id100)) return t.array7[32] + getNumberFromTextarea(t.id98) + 'x' + getNumberFromTextarea(t.id99) + 'x' + getNumberFromTextarea(t.id100) + ' см, ' + t.array7[33];
            else return t.array7[31] + getNumberFromTextarea(t.id98) + 'x' + getNumberFromTextarea(t.id99) + 'x' + getNumberFromTextarea(t.id100) + ' см, ' + t.array7[33];
        },

        pituitaryGlandOtherBraim: function () {
            return t.array7[34] + getNumberFromTextarea(t.id101) + 'x' + getNumberFromTextarea(t.id102) + 'x' + getNumberFromTextarea(t.id103) + t.array7[35] + t.array7[36];
        },

        baseSkull: function () {
            if (!ISchecked(t.id87)) {
                return t.array7[2];
            }
            else return '';
        }

    };

    var visceralGeneral = {
        subcutaneousFat: function () {
            if (ISchecked(t.id96)) return t.array10[0] + t.array9[1] + t.array10[1] + getNumberFromTextarea(t.id105) + ' см, ' + t.array10[2] + getNumberFromTextarea(t.id106) + ' см. ';
            else return t.array10[0] + t.array9[0] + t.array10[1] + getNumberFromTextarea(t.id105) + ' см, ' + t.array10[2] + getNumberFromTextarea(t.id106) + ' см. ';
        },

        softTissueNeckThoraxAbdomen: function () {
            if (ISchecked(t.id95)) return t.array10[3] + t.array9[3] + ', ' + t.array11[1] + '. ';
            else if (ISchecked(t.id96)) return t.array10[3] + t.array9[4] + ', ' + t.array11[1] + '. ';
            else return t.array10[3] + t.array9[2] + ', ' + t.array11[1] + '. ';
        },

        abdominalCavity: function () {
            return t.array10[4];
        },
        liverEdgeCurve: function () {
            if (verificationSelect(t.id107, 1)) return t.array10[5];
            else if (verificationSelect(t.id107, 2)) return t.array10[6];
            else return t.array10[7];
        },

        liverEdgeProtrusion: function () {
            if (verificationSelect(t.id108, 2)) return t.array10[8] + getNumberFromTextarea(t.id109) + ' см. ';
            else return t.array10[9];
        },

        thoracicCavity: function () {
            return t.array10[10];
        },

        pleuralCavityLiquid: function () {
            if (verificationSelect(t.id117, 2)) { /*Liquid*/
                if (getNumberFromTextarea(t.id118) == 0 && getNumberFromTextarea(t.id119) == 0) return t.array12[1];
                if (getNumberFromTextarea(t.id118) !== 0 && getNumberFromTextarea(t.id119) == 0) {
                    if (verificationSelect(t.id120, 1)) return t.array12[5] + getNumberFromTextarea(t.id118) + ' мл ' + t.array9[5] + t.array12[7] + t.array12[4];
                    if (verificationSelect(t.id120, 2)) return t.array12[5] + getNumberFromTextarea(t.id118) + ' мл ' + t.array9[6] + t.array12[7] + t.array12[4];
                    if (verificationSelect(t.id120, 3)) return t.array12[5] + getNumberFromTextarea(t.id118) + ' мл ' + t.array9[7] + t.array12[7] + t.array12[4];
                }
                if (getNumberFromTextarea(t.id118) == 0 && getNumberFromTextarea(t.id119) !== 0) {
                    if (verificationSelect(t.id120, 1)) return t.array12[6] + getNumberFromTextarea(t.id119) + ' мл ' + t.array9[5] + t.array12[8] + t.array12[4];
                    if (verificationSelect(t.id120, 2)) return t.array12[6] + getNumberFromTextarea(t.id119) + ' мл ' + t.array9[6] + t.array12[8] + t.array12[4];
                    if (verificationSelect(t.id120, 3)) return t.array12[6] + getNumberFromTextarea(t.id119) + ' мл ' + t.array9[7] + t.array12[8] + t.array12[4];
                }
                if (getNumberFromTextarea(t.id118) !== 0 && getNumberFromTextarea(t.id119) !== 0) {
                    if (verificationSelect(t.id120, 1)) return t.array12[9] + t.array9[8] + t.array11[3] + getNumberFromTextarea(t.id118) + ' мл, ' + t.array11[4] + getNumberFromTextarea(t.id119) + ' мл. ' + t.array12[4];
                    if (verificationSelect(t.id120, 2)) return t.array12[9] + t.array9[9] + t.array11[3] + getNumberFromTextarea(t.id118) + ' мл, ' + t.array11[4] + getNumberFromTextarea(t.id119) + ' мл. ' + t.array12[4];
                    if (verificationSelect(t.id120, 3)) return t.array12[9] + t.array9[10] + t.array11[3] + getNumberFromTextarea(t.id118) + ' мл, ' + t.array11[4] + getNumberFromTextarea(t.id119) + ' мл. ' + t.array12[4];

                }
            }
            else return t.array12[1] + t.array12[3];
        },

        pericard: function () {
            return t.array13[64] + getNumberFromTextarea(t.id154) + ' мл ' + t.array9[11] + '. ';
        },

        neckVessels: function () {
            if (ISchecked(t.id110)) return t.array10[13] + t.array10[14] + t.array10[15];
            else return t.array10[12] + t.array10[14] + t.array10[15];
        },

        thyreoidGland: function () {
            return t.array10[16] + getNumberFromTextarea(t.id111) + 'x' + getNumberFromTextarea(t.id112) + 'х' + getNumberFromTextarea(t.id113) + ' см, ' +
                t.array10[17] + getNumberFromTextarea(t.id114) + 'x' + getNumberFromTextarea(t.id115) + 'х' + getNumberFromTextarea(t.id116) + ' см, ' +
                t.array10[18] + t.array11[0] + '. ' + t.array10[19];
        },

        respiratoryDigestivePathNL: function () {
            return t.array10[20] + t.array10[21] + t.array10[22] + t.array11[0] + '. ';
        },

        lungsMass: function () {
            return t.array12[10] + t.array11[5] + getNumberFromTextarea(t.id121) + ' г., ' + t.array11[6] + getNumberFromTextarea(t.id122) + ' г. ';
        },

        pulmonaryPleura: function () {
            return t.array12[11];
        },

        lungTissue: function () {
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

        bronchInSection: function () {
            if (ISchecked(t.id125) && ISchecked(t.id126)) {
                return t.array12[17] + t.array12[19];
            }
            else if (ISchecked(t.id125) && !ISchecked(t.id126)) {
                return t.array12[17] + t.array12[18];
            }
            else if (!ISchecked(t.id125) && ISchecked(t.id126)) {
                return t.array12[16] + t.array12[19];
            }
            else return t.array12[16] + t.array12[18];
        },

        heartGeneral: function () {
            return t.array13[0] + t.array13[1] + getStringFromSelect2(t.id128, t.array11, 9) + ', ';
        },

        heartSizeWeight: function () {
            return t.array11[7] + getNumberFromTextarea(t.id130L) + 'x' + getNumberFromTextarea(t.id130W) + 'x' + getNumberFromTextarea(t.id130D) + ' см, ' + t.array11[8] + getNumberFromTextarea(t.id129) + ' г. '
        },

        heartFat: function () {
            return getStringFromSelect2(t.id127, t.array13, 3);
        },

        coronars: function () {
            if (!verificationSelect(t.id142с, 5)) {
                return getStringFromSelect2(t.id131, t.array13, 7) + getStringFromSelect2(t.id132, t.array13, 10);
            } else return getStringFromSelect2(t.id131, t.array13, 7) + t.array13[65] + t.array13[66] + getNumberFromTextarea(t.id142сs) + '%. ' + t.array13[67];
        },

        heartCavity: function () {
            if (ISchecked(t.id133)) return t.array13[14] + t.array13[16] + getStringFromSelect2(t.id134, t.array13, 17);
            else return t.array13[14] + t.array13[15] + getStringFromSelect2(t.id134, t.array13, 17);
        },

        heartValves: function () {
            return getStringFromSelect2(t.id135, t.array13, 23) + t.array13[26] +
                getNumberFromTextarea(t.id136) + ' см, ' + t.array13[27] + getNumberFromTextarea(t.id137) + ' см, ' +
                t.array13[28] + getNumberFromTextarea(t.id138) + ' см, ' + t.array13[29] + getNumberFromTextarea(t.id139) + ' см. ';
        },

        heartPapillMusclThreadsEndocard: function () {
            if (!ISchecked(t.id140) && !ISchecked(t.id141)) return t.array13[30] + t.array13[34];
            if (ISchecked(t.id140) && !ISchecked(t.id141)) return t.array13[31] + t.array13[34];
            if (!ISchecked(t.id140) && ISchecked(t.id141)) return t.array13[32] + t.array13[34];
            if (ISchecked(t.id140) && ISchecked(t.id141)) return t.array13[33] + t.array13[34];
        },

        heartTissue: function () {
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

        heartVentriclesSize: function () {
            return t.array13[37] + getNumberFromTextarea(t.id144) + ' см, ' + t.array13[38] + getNumberFromTextarea(t.id145) + ' см. ';
        },

        aorta: function () {
            if (verificationSelect(t.id149, 6)) return t.array13[55] + getStringFromSelect2(t.id146, t.array13, 39) + getStringFromSelect2(t.id148, t.array13, 44) + getStringFromSelect2(t.id149, t.array13, 49);
            else return getStringFromSelect2(t.id146, t.array13, 39) + getStringFromSelect2(t.id148, t.array13, 44) + getStringFromSelect2(t.id149, t.array13, 49);
        },

        aortaSize: function () {
            return t.array13[61] + getNumberFromTextarea(t.id150) + ' см, ' + t.array13[62] + getNumberFromTextarea(t.id151) + ' см. ';
        },

        venaCavaInf: function () {
            return getStringFromSelect2(t.id147, t.array13, 56) + t.array13[63];
        },

        spleenGSR: function () {
            return t.array14[0] + t.array14[1] + getNumberFromTextarea(t.id152M) + ' г, ' +
                t.array11[12] + getNumberFromTextarea(t.id152H) + 'х' + getNumberFromTextarea(t.id152W) + 'х' + getNumberFromTextarea(t.id152D) + ' см. ' +
                t.array14[2] + getStringFromSelect2(t.id153, t.array14, 3) + t.array14[6];
        },

        kidneyFat: function () {
            return t.array15[0] + getNumberFromTextarea(t.id155) + ' мм. ';
        },

        kidneyRightSize: function () {
            return t.array15[1] + getNumberFromTextarea(t.id156) + 'х' + getNumberFromTextarea(t.id157) + 'х' + getNumberFromTextarea(t.id158) + ' см, ';
        },

        kidneyLeftSize: function () {
            return t.array15[2] + getNumberFromTextarea(t.id159) + 'х' + getNumberFromTextarea(t.id160) + 'х' + getNumberFromTextarea(t.id161) + ' см. ';
        },

        kidneyCapsule: function () {
            return getStringFromSelect2(t.id162, t.array15, 3) + getStringFromSelect2(t.id163, t.array15, 5) + getStringFromSelect2(t.id164, t.array0, 3) + t.array0[2];
        },

        kidneyTissue: function () {
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

        bladder: function () {
            if (!ISchecked(t.id168)) return t.array15[12] + getNumberFromTextarea(t.id167) + ' мл ' + t.array15[13] + t.array15[15];
            else return t.array15[12] + t.array15[14] + t.array15[15];
        },

        prostateUterus: function () {
            if (ISchecked(t.id6)) return t.array15[16] + getNumberFromTextarea(t.id169) + 'x' + getNumberFromTextarea(t.id170) + 'x' + getNumberFromTextarea(t.id171) + ' см. ';
            else return t.array15[17] + getStringFromSelect2(t.id172, t.array15, 18) + t.array15[20];
        },

        gaster: function () {
            if (verificationSelect(t.id174, 1)) return t.array16[0] + t.array16[1] + getNumberFromTextarea(t.id175) + ' мл ' + t.array16[3] + getStringFromSelect2(t.id176, t.array16, 4) + getStringFromSelect2(t.id177, t.array0, 5) + t.array16[8];
            if (verificationSelect(t.id174, 2)) return t.array16[0] + t.array16[2] + getStringFromSelect2(t.id176, t.array16, 4) + getStringFromSelect2(t.id177, t.array0, 5) + t.array16[8];
        },

        pancreas: function () {
            return t.array16[9] + getStringFromSelect2(t.id182, t.array16, 10) + t.array11[13] + getNumberFromTextarea(t.id179) + 'x' + getNumberFromTextarea(t.id180) + 'x' + getNumberFromTextarea(t.id181) + ' см, массой ' + getNumberFromTextarea(t.id178) + ' г. ';
        },

        pancreasStructure: function () {
            return t.array16[13] + getStringFromSelect2(t.id182, t.array16, 10) + getStringFromSelect2(t.id183, t.array16, 14) + '';
        },

        pancreasBloodFillingOther: function () {
            if (verificationSelect(t.id184, 1)) return t.array8[1] + t.array0[8];
            /*ум. кровенап*/
            if (verificationSelect(t.id184, 2)) return t.array8[4] + t.array0[8];
            /*полнокровие*/
            if (verificationSelect(t.id184, 3)) return t.array8[7] + t.array0[8];
            /*неравномерного*/
            if (verificationSelect(t.id184, 4)) return t.array8[8] + t.array0[8];
            /*малокр*/
        },

        gallbladder: function () {
            return t.array16[16] + getNumberFromTextarea(t.id185) + t.array16[17] + t.array16[18];
        },

        hepar: function () {
            return t.array16[19] + getStringFromSelect2(t.id186, t.array16, 10) + t.array16[20] + getStringFromSelect2(t.id187, t.array0, 9) + '. ' + t.array16[21] + getNumberFromTextarea(t.id188) + 'x' + getNumberFromTextarea(t.id189) + 'x' + getNumberFromTextarea(t.id190) + 'x' + getNumberFromTextarea(t.id191) + 'x' + getNumberFromTextarea(t.id192) + ' см, ' + t.array11[14] + getNumberFromTextarea(t.id193) + ' г. ';
        },

        heparDisection: function () {
            if (verificationSelect(t.id194, 1)) return t.array16[22] + getStringFromSelect2(t.id187, t.array0, 9) + ', ' + t.array8[1] + getStringFromSelect2(t.id195, t.array16, 23);
            /*ум. кровенап*/
            if (verificationSelect(t.id194, 2)) return t.array16[22] + getStringFromSelect2(t.id187, t.array0, 9) + ', ' + t.array8[4] + getStringFromSelect2(t.id195, t.array16, 23);
            /*полнокровие*/
            if (verificationSelect(t.id194, 3)) return t.array16[22] + getStringFromSelect2(t.id187, t.array0, 9) + ', ' + t.array8[7] + getStringFromSelect2(t.id195, t.array16, 23);
            /*неравномерного*/
            if (verificationSelect(t.id194, 4)) return t.array16[22] + getStringFromSelect2(t.id187, t.array0, 9) + ', ' + t.array8[8] + getStringFromSelect2(t.id195, t.array16, 23);
            /*малокр*/
        },

        intestines: function () {
            return t.array16[25] + t.array16[26];
        },

        bonesDamageInternalResearch: function () {
            var otherBones = getStringEnumeration(t.id173, t.id77, t.id78, t.id80, t.id81, t.array4, 22),
                limbBones = getStringEnumeration2(t.id79a, t.id79b, t.array4, 32);

            if (!ISchecked(t.id173) && checkCheckboxesAND(t.id77, t.id78, t.id80, t.id81, t.id79a, t.id79b)) {
                return 'Грудина цела. ';
            }
            else if (!ISchecked(t.id77) && checkCheckboxesAND(t.id173, t.id78, t.id80, t.id81, t.id79a, t.id79b)) {
                return 'Позвоночник цел. ';
            }
            else {
                if (limbBones !== '' && otherBones !== '') {
                    return otherBones + ', ' + t.array4[30] + limbBones + t.array4[34] + t.array4[27];
                }
                else if (limbBones == '' && otherBones !== '') {
                    return otherBones + t.array4[27];
                }
                else if (limbBones !== '' && otherBones == '') {
                    console.log(t.array4[35] + limbBones + t.array4[21] + t.array4[27]);
                    return t.array4[35] + limbBones + t.array4[21] + t.array4[27];
                }
                else return '';
            }
        },

        ribsDamage: function () {
            if (!ISchecked(t.id66)) return t.array4[36];
            else return '';
        },

        lastSentenceInternalResearch: function () {
            if (checkCheckboxesOR(t.id66, t.id77, t.id78, t.id79a, t.id79b, t.id80, t.id81, t.id86, t.id87, t.id91, t.id173)) return t.array4[29];
            else return t.array4[28];
        },

        additionalInvestigationsChem: function () {
            if (!ISchecked(t.id203) && !ISchecked(t.id204)) {                   //bloodChem, urineChem are unchecked
                if (checkCheckboxesOR(t.id196, t.id197, t.id198, t.id199)) {    //general chemistry
                    if (checkCheckboxesOR(t.id200, t.id201, t.id202)) {         //general chemistry items
                        return t.array17[4]
                            + getStringEnumeration3(t.id196, t.id197, t.id198, t.id199, t.array17, 8) + t.array17[12]
                            + getStringEnumeration3(t.id200, t.id201, t.id202, t.array17, 13) + '. ';
                    }
                    return '';
                }
                else return '';
            }

            var alcogol = function () {
                if (!ISchecked(t.id204)) return t.array17[4] + t.array17[6] + t.array17[7];
                else if (!ISchecked(t.id203)) return t.array17[4] + t.array17[20] + t.array17[7];
                else return t.array17[4] + t.array17[5] + t.array17[7];
            };

            if (checkCheckboxesOR(t.id196, t.id197, t.id198, t.id199)) {
                if (checkCheckboxesOR(t.id200, t.id201, t.id202)) {
                    var chemItem = getStringEnumeration3(t.id200, t.id201, t.id202, t.array17, 13);
                } else chemItem = '';
                return alcogol() + '; ' + getStringEnumeration3(t.id196, t.id197, t.id198, t.id199, t.array17, 8) + t.array17[12] + chemItem;
            }
            else return alcogol();
        },

        vitreous: function () {
            if (checkCheckboxesOR(t.id203, t.id204)) {                          //bloodChem, urineChem are checked
                if (ISchecked(t.id236)) {                                      //стекловидное тело checked
                    if (ISchecked(t.id237)) {
                        return '; ' + t.array17[16] + '; ' + t.array17[19] + '. ';  // if(CO выбрано) return стекловидное тело + СО + '. '
                    } else return '; ' + t.array17[16] + '. ';                       // else only стекловидное тело (ниже)
                }
                else {                                          //стекловидное тело unchecked
                    if (ISchecked(t.id237)) {                    // if(CO выбрано) return СО + '. '
                        return '; ' + t.array17[19] + '. ';
                    } else return '. ';                         // else return '. ';
                }

            } else {                                            //bloodChem, urineChem are checked
                if (ISchecked(t.id236)) {                        //стекловидное тело checked
                    if (ISchecked(t.id237)) {                   // if(CO выбрано)
                        return ' ' + t.array17[17] + ', ' + t.array17[19] + '. ';
                    } else return ' ' + t.array17[17] + '. ';
                }
                else {                                          //стекловидное тело unchecked
                    if (ISchecked(t.id237)) {                   // if(CO выбрано)
                        return ' ' + t.array17[0] + t.array17[19] + '. ';
                    } else return ' ';                          // совсем ничего не выбрано, в том числе ни кровь ни моча
                }
            }
        },

        bloodType: function () {
            if (ISchecked(t.id205)) return t.array17[18];
            else return '';
        },

        hystilogy: function () {
            if (checkCheckboxesOR(t.id206, t.id207, t.id208, t.id209, t.id210, t.id211, t.id212, t.id213, t.id214, t.id215, t.id216, t.id217, t.id218, t.id219, t.id220, t.id221, t.id222, t.id223, t.id224, t.id225, t.id226, t.id227, t.id228, t.id229, t.id230, t.id231, t.id232, t.id233, t.id234)) {
                return t.array18[0] + getStringEnumeration4(t.id206, t.id207, t.id208, t.id209, t.id210, t.id211, t.id212, t.id213, t.id214, t.id215, t.id216, t.id217, t.id218, t.id219, t.id220, t.id221, t.id222, t.id223, t.id224, t.id225, t.id226, t.id227, t.id228, t.id229, t.id230, t.id231, t.id232, t.id233, t.id234, t.array18, 1) + '. ';
            } else return '';
        }
    };

    var investigationHystology = {
        hystology: function () {
            if (ISchecked('hystologySecondCopy')) {
                return '1. Акт судебно-гистологического исследования прилагается ко второму экземпляру данного заключения. '
            } else {
                if (ISchecked('hystologyArchive')) {
                    return '1. Материал для судебно-гистологического исследования сдан в архив № ' + getNumberFromTextarea('numHystologyArchive') + '. ';
                } else {
                    if (verificationSelect('hystologist', 5)) {
                        return '1. Из акта судебно-гистологического исследования № ' + getNumberFromTextarea('numHystologyText') + ' от ' + getNumberFromTextarea('hystologyTextDay') + '.' + getNumberFromTextarea('hystologyTextMounth') + '.' + getNumberFromTextarea('hystologyTextYear') + '. ' + '(судебно-медицинский эксперт ' + getFromTextarea('hystologistOther') + ') известно, что: "' + getFromTextarea('textareaHystology') + '". ';
                    } else return '1. Из акта судебно-гистологического исследования № ' + getNumberFromTextarea('numHystologyText') + ' от ' + getNumberFromTextarea('hystologyTextDay') + '.' + getNumberFromTextarea('hystologyTextMounth') + '.' + getNumberFromTextarea('hystologyTextYear') + '. ' + '(судебно-медицинский эксперт ' + getStringFromSelect2('hystologist', arr_hystologists, 0) + ') известно, что: "' + getFromTextarea('textareaHystology') + '". ';
                }

            }
        }
    };

    var investigationChem = {
//вывод номера 2. Если хоть один чекбокс выбран
        numTwo: function () {
            if (checkCheckboxesOR('bloodChem', 'urineChem', 'surrogates', 'drug', 'narcotic', 'vitreous', 'carboxyhemoglobin')) return '2. ';
            else return '';
        },

        alcohol: function () {
            var bloodChem = ISchecked('bloodChem'),
                urineChem = ISchecked('urineChem');

            var getChemist = function () {
                var chemistOtherCheck = verificationSelect('chemistAlсohol', 3),
                    chemist = getStringFromSelect2('chemistAlсohol', arr_chemist, 0),
                    chemistOther = getFromTextarea('chemistAlсoholOther'),
                    chemistStartStr = ' (судебно-медицинский эксперт ',
                    chemistEndStr = ') ';

                if (chemistOtherCheck) return chemistStartStr + chemistOther + chemistEndStr;
                else return chemistStartStr + chemist + chemistEndStr;
            };

            var getCorpseInfo = function () {
                var corpse = getFromTextarea('surname');
                if (ISchecked(t.id6)) return ' от трупа гр-на ' + corpse;
                else return ' от трупа гр-ки ' + corpse;
            };

            var startStr = 'Из акта судебно-химического исследования № ';
            var point = '. ',
                promille = String.fromCharCode(8240);
            var protocolData = getNumberFromTextarea('numChemAlhogolText'),
                getFromDate = function () {
                    var day = getNumberFromTextarea('chemAlhogolTextDay'),
                        month = getNumberFromTextarea('chemAlhogolTextMounth'),
                        year = getNumberFromTextarea('chemAlhogolTextYear');
                    return ' от ' + day + '.' + month + '.' + year;
                };
            var bloodCheck = checkAreaForFill('сhemAlcoholBlood', re),
                urineCheck = checkAreaForFill('сhemAlcoholUrine', re),
                alcoholBlood = getNumberFromTextarea('сhemAlcoholBlood'),
                alcoholUrine = getNumberFromTextarea('сhemAlcoholUrine');

            var partStr1 = startStr + protocolData + getFromDate() + getChemist();

            if (bloodChem && urineChem) {
                if (bloodCheck && urineCheck) return partStr1 + 'известно, что в крови и моче ' + getCorpseInfo() +
                    ' обнаружен этиловый спирт в концентрации: в крови ' + alcoholBlood + promille +
                    ', в моче ' + alcoholUrine + promille + point;
                else if (bloodCheck && !urineCheck) return partStr1 + 'известно, что в крови' + getCorpseInfo() +
                    ' обнаружен этиловый спирт в концентрации: ' + alcoholBlood + promille + point;
                else if (!bloodCheck && urineCheck) return partStr1 + 'известно, что в моче' + getCorpseInfo() +
                    ' обнаружен этиловый спирт в концентрации: ' + alcoholUrine + promille + point;
                else return partStr1 + 'известно, что в крови и моче ' + getCorpseInfo() + ' этиловый спирт не обнаружен' + point;
            }
            else if (bloodChem && !urineChem) {
                if (bloodCheck) return partStr1 + 'известно, что в крови' + getCorpseInfo() +
                    ' обнаружен этиловый спирт в концентрации: ' + alcoholBlood + promille + point;
                else return partStr1 + 'известно, что в крови ' + getCorpseInfo() + ' этиловый спирт не обнаружен' + point;
            }
            else if (!bloodChem && urineChem) {
                if (urineCheck) return partStr1 + 'известно, что в моче' + getCorpseInfo() +
                    ' обнаружен этиловый спирт в концентрации: ' + alcoholUrine + promille + point;
                else return partStr1 + 'известно, что в моче ' + getCorpseInfo() + ' этиловый спирт не обнаружен' + point;
            }
            else return '';

        },
        chemOther: function () {
            var getChemist = function () {
                var chemistOtherCheck = verificationSelect('chemistAlсohol', 3),
                    chemist = getStringFromSelect2('chemistAlсohol', arr_chemist, 0),
                    chemistOther = getFromTextarea('chemistAlсoholOther'),
                    chemistStartStr = ' (судебно-медицинский эксперт ',
                    chemistEndStr = ')';

                if (chemistOtherCheck) return chemistStartStr + chemistOther + chemistEndStr;
                else return chemistStartStr + chemist + chemistEndStr;
            };

            var startStr = 'Из акта судебно-химического исследования № ';
            var point = '. ';

            var protocolData = getNumberFromTextarea('numChemSubstrText'),
                getFromDate = function () {
                    var day = getNumberFromTextarea('chemSubstrTextDay'),
                        month = getNumberFromTextarea('chemSubstrTextMounth'),
                        year = getNumberFromTextarea('chemSubstrTextYear');
                    return ' от ' + day + '.' + month + '.' + year;
                };

            var arr_organs = [
                'головного мозга',
                'печени',
                'почки',
                'желудка с содержимым'
            ];
            var organs = ' (' + getStringEnumeration4(t.id197, t.id196, t.id198, t.id199, arr_organs) + ') ';


            var noDetected = getFromTextarea('chemSubstrNothing');
            //    detected = getFromTextarea();

            var partStr1 = startStr + protocolData + getFromDate() + getChemist();

            if (checkAreaForFill('chemSubstrNothing', re) && checkAreaForFill('chemSubstrYes', re)) {
                return partStr1 + ', известно, что при химическом исследовании биологического материала'
                    + organs + ' обнаружено: ' + getFromTextarea('chemSubstrYes') + point
                    + 'Не обнаружено:  ' + getFromTextarea('chemSubstrNothing') + point;
            }
            else if ((checkAreaForFill('chemSubstrNothing', re) && !checkAreaForFill('chemSubstrYes', re))) {
                return partStr1 + ', известно, что при химическом исследовании биологического материала'
                    + organs + ' не обнаружены: ' + getFromTextarea('chemSubstrNothing');
            }
            else if ((!checkAreaForFill('chemSubstrNothing', re) && checkAreaForFill('chemSubstrYes', re))) {
                return partStr1 + ', известно, что при химическом исследовании биологического материала'
                    + organs + ' обнаружено: ' + getFromTextarea('chemSubstrYes');
            }
            else return '';
        },


        carboxy: function () {
            var carboxyChem = ISchecked('carboxyhemoglobin');

            var getChemist = function () {
                var chemistOtherCheck = verificationSelect('chemistCarboxy', 3),
                    chemist = getStringFromSelect2('chemistCarboxy', arr_chemist, 0),
                    chemistOther = getFromTextarea('chemistCarboxyOther'),
                    chemistStartStr = ' (судебно-медицинский эксперт ',
                    chemistEndStr = ')';

                if (chemistOtherCheck) return chemistStartStr + chemistOther + chemistEndStr;
                else return chemistStartStr + chemist + chemistEndStr;
            };

            var getCorpseInfo = function () {
                var corpse = getFromTextarea('surname');
                if (ISchecked(t.id6)) return ' от трупа гр-на ' + corpse;
                else return ' от трупа гр-ки ' + corpse;
            };

            var startStr = 'Из акта судебно-химического исследования № ';
            var point = '. ';

            var protocolData = getNumberFromTextarea('numChemCarboxyText'),
                getFromDate = function () {
                    var day = getNumberFromTextarea('chemCarboxyTextDay'),
                        month = getNumberFromTextarea('chemCarboxyTextMounth'),
                        year = getNumberFromTextarea('chemCarboxyTextYear');
                    return ' от ' + day + '.' + month + '.' + year;
                };

            var carboxyCheck = checkAreaForFill('chemCarboxy', re),
                carboxy = getNumberFromTextarea('chemCarboxy') + '% ';

            var partStr1 = startStr + protocolData + getFromDate() + getChemist();

            if (carboxyChem) {
                if (carboxyCheck) {
                    return partStr1 + ' известно, что в крови' + getCorpseInfo() + 'обнаружен карбоксигемоглобин в количестве: '
                        + carboxy + point;
                } else {
                    return partStr1 + ' известно, что в крови' + getCorpseInfo() + 'карбоксигемоглобин не обнаружен' + point;
                }
            } else return ''
        },

        vitreous: function () {
            var vitreousChem = ISchecked('vitreous');
            var getChemist = function () {
                var chemistOtherCheck = verificationSelect('chemistVitreousNothing', 3),
                    chemist = getStringFromSelect2('chemistVitreousNothing', arr_chemist, 0),
                    chemistOther = getFromTextarea('divChemistVitreousNothingOther'),
                    chemistStartStr = ' (судебно-медицинский эксперт ',
                    chemistEndStr = ')';

                if (chemistOtherCheck) return chemistStartStr + chemistOther + chemistEndStr;
                else return chemistStartStr + chemist + chemistEndStr;
            };

            var getCorpseInfo = function () {
                var corpse = getFromTextarea('surname');
                if (ISchecked(t.id6)) return ' от трупа гр-на ' + corpse;
                else return ' от трупа гр-ки ' + corpse;
            };

            var startStr = 'Из акта судебно-химического исследования № ';
            var point = '. ';

            var protocolData = getNumberFromTextarea('numChemVitreousText'),
                getFromDate = function () {
                    var day = getNumberFromTextarea('chemVitreousTextDay'),
                        month = getNumberFromTextarea('chemVitreousTextMounth'),
                        year = getNumberFromTextarea('chemVitreousTextYear');
                    return ' от ' + day + '.' + month + '.' + year;
                };

            var vitreousCheck = checkAreaForFill('chemVitreousGlucose', re),
                vitreous = getNumberFromTextarea('chemVitreousGlucose') + ' ммоль/л';

            var partStr1 = startStr + protocolData + getFromDate() + getChemist();

            if (vitreousChem) {
                if (vitreousCheck) {
                    return partStr1 + ' известно, что в стекловидном теле' + getCorpseInfo() + 'обнаружена глюкоза в концентрации: '
                        + vitreous + point;
                } else {
                    return partStr1 + ' известно, что в стекловидном теле' + getCorpseInfo() + 'глюкоза не обнаружена' + point;
                }
            } else return ''

        }

    };

    var investigationEvidence = {
        numberThree: function () {
            if (ISchecked('bloodType')) {
                if (checkCheckboxesOR('bloodChem', 'urineChem', 'surrogates', 'drug', 'narcotic', 'vitreous', 'carboxyhemoglobin'))
                    return '3. ';
                else return '2. ';
            } else return '';
        },

        evidence: function () {
            var bloodType = ISchecked('bloodType');
            var getBiologist = function () {
                var biologistOtherCheck = verificationSelect('biologist', 2),
                    biologist = getStringFromSelect2('biologist', arr_biologist, 0),
                    biologistOther = getFromTextarea('biologistOther'),
                    biologistStartStr = ' (судебно-медицинский эксперт ',
                    biologistEndStr = ')';
                if (biologistOtherCheck) return biologistStartStr + biologistOther + biologistEndStr;
                else return biologistStartStr + biologist + biologistEndStr;
            };

            var getCorpseInfo = function () {
                var corpse = getFromTextarea('surname2');
                if (ISchecked(t.id6)) return ' от трупа гр-на ' + corpse;
                else return ' от трупа гр-ки ' + corpse;
            };

            var protocolData = getNumberFromTextarea('numBioText'),
                getFromDate = function () {
                    var day = getNumberFromTextarea('bioTextDay'),
                        month = getNumberFromTextarea('bioTextMounth'),
                        year = getNumberFromTextarea('bioTextYear');
                    return ' от ' + day + '.' + month + '.' + year;
                };


            var startStr = 'Из заключения эксперта (экспертиза вещественных доказательств) № ';

            var bloodTypeText = function () {
                var option = getOptionNumberOfSelect('bloodTypeBio');
                var alfa = String.fromCharCode(945),
                    betta = String.fromCharCode(946);

                switch (option) {
                    case 1:
                        return ' относится к O' + alfa + betta + ' группе. ';  break;
                    case 2:
                        return ' относится к A' + betta + ' группе. '; break;
                    case 3:
                        return ' относится к B' + alfa + ' группе. '; break;
                    case 4:
                        return ' относится к AB группе. '; break;
                }

            };

            if (bloodType) {
                return  startStr + protocolData + getFromDate() + getBiologist() + ' известно, что кровь ' + getCorpseInfo() + bloodTypeText();
            } else return '';
        }
    };

    ////////////////////

    var title1 = 'наружное исследование',
        title2 = 'внутреннее исследование',
        title3 = 'данные дополнительных методов исследования';

    var result1 = getProp(dressC) + getProp(generalCharacters) + getProp(decompositionAndSkin);
    var result2 = getProp(decompositionMuscle) + getProp(head) + getProp(neckTorso);
    var result3 = getProp(headBrain) + getProp(visceralGeneral);
    var result4 = getProp(investigationHystology);
    var result5 = getProp(investigationChem);
    var result6 = getProp(investigationEvidence);

    var spanTitle1 = document.createElement("span"),
        spanTitle2 = document.createElement("span"),
        spanTitle3 = document.createElement("span");
    spanTitle1.classList.add("titleResearch");
    spanTitle2.classList.add("titleResearch");
    spanTitle3.classList.add("title3");


    var divFrame = document.createElement("div"),
        p = document.createElement("p"),
        br = document.createElement("br"),
        p2 = document.createElement("p"),
        p3 = document.createElement("p"),
        p4 = document.createElement("p"),
        p5 = document.createElement("p");

    var inputTitle1 = document.createTextNode(title1),
        inputTitle2 = document.createTextNode(title2),
        inputTitle3 = document.createTextNode(title3);
    var content1 = document.createTextNode(result1),
        content2 = document.createTextNode(result2),
        content3 = document.createTextNode(result3),
        content4 = document.createTextNode(result4),
        content5 = document.createTextNode(result5),
        content6 = document.createTextNode(result6);

    spanTitle1.appendChild(inputTitle1); //заворачиваем заголовки в span
    spanTitle2.appendChild(inputTitle2);
    spanTitle3.appendChild(inputTitle3);

    var sup = document.createElement("sup"); //верхний индекс
    var contentSup = document.createTextNode('2 ');
    sup.appendChild(contentSup);

    p.appendChild(content1);
    p.appendChild(sup);
    p.appendChild(content2);
    p2.appendChild(content3); //внутреннее исследование
    p3.appendChild(content4); //данные дополнительных методов исследования. Гистология
    p4.appendChild(content5); //данные дополнительных методов исследования. Химия
    p5.appendChild(content6); //данные дополнительных методов исследования. Вещ. доказательства

    //var w = document.getElementById(t.outputId); //вывод данных
    var isGecko = navigator.userAgent.toLowerCase().indexOf("gecko") != -1;
    var iframe = (isGecko) ? document.getElementById("frameId") : frames["frameId"];
    var iWin = (isGecko) ? iframe.contentWindow : iframe.window;
    var iDoc = (isGecko) ? iframe.contentDocument : iframe.document;

    iHTML = "<style> p{text-align: justify; text-indent: 30px; font-family: 'Times New Roman', sans-serif; font-size: 16px; margin: 0}"
        + " .titleResearch {display: block; margin-top: 20px; margin-left: 270px; font-family: Georgia, 'Times New Roman', Times, serif; font-weight:bold; text-transform: uppercase;} .title3{display: block; margin-top: 20px; margin-left: 140px; font-family: Georgia, 'Times New Roman', Times, serif; font-weight:bold; text-transform: uppercase;}</style>"
        + "<div id='divFrame' style='background: #fbecdd; padding: 10px 20px 20px 30px'></div>";
    iDoc.open(); // Открываем фрейм
    iDoc.write(iHTML); // Добавляем написанный код в фрейм
    iDoc.getElementById("divFrame").innerHTML = "";
    iDoc.getElementById("divFrame").appendChild(spanTitle1);

    iDoc.getElementById("divFrame").appendChild(p); //
    //iDoc.getElementById("divFrame").appendChild(br);
    //divFrame.appendChild(br);
    //iDoc.getElementById("divFrame").appendChild(br);
    //iDoc.getElementById("divFrame").appendChild(br);
    //iDoc.getElementById("divFrame").appendChild(br);
    iDoc.getElementById("divFrame").appendChild(spanTitle2);  //заголовок внутреннее исследование
    iDoc.getElementById("divFrame").appendChild(p2); //внутреннее исследование


    //iDoc.getElementById("divFrame").appendChild(br);
    //iDoc.getElementById("divFrame").appendChild(br);
    iDoc.getElementById("divFrame").appendChild(spanTitle3);  //заголовок внутреннее исследование
    iDoc.getElementById("divFrame").appendChild(p3); //данные дополнительных методов исследования
    iDoc.getElementById("divFrame").appendChild(p4); //данные дополнительных методов исследования
    iDoc.getElementById("divFrame").appendChild(p5); //данные дополнительных методов исследования
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
    array16: arr_digestive,
    array17: arr_additionInvestigation,
    array18: arr_hystology,
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
    id49: 'd1', /* hair pars of head*/
    id50: 'd2', /*eyes membranes*/
    id51: 'd11', /*nose bones*/
    id52: 'd11a', /*nose cartilages*/
    id53: 'noseExcret',
    id54: 'noseExcretOther',
    id55: 'earExcret',
    id56: 'earExcretOther',
    id57: 'mouth',
    id57t: 'teeth_alveolus',
    id57t_name: 'inp',
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
    id83: 'd14', /*loins*/
    id84: 'textareaDamage',
    id85: 'teethVisible',
    id86: 'd9' /*calvaria*/,
    id87: 'd9a' /*baseSkull*/,
    id88: 'osFrontale',
    id89: 'osTemporale',
    id90: 'osOccipitale',
    id91: 'd20', /*meninges*/
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
    id142с: 'coronarosclerosis',
    id142сs: 'coronars',
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
    id173: 'd21' /*sternum*/,
    id174: 'gasterFilling',
    id175: 'gasterFillingValue',
    id176: 'gasterFolds',
    id177: 'gasterColor',
    id178: 'pancreasMass',
    id179: 'pancreasSize1',
    id180: 'pancreasSize2',
    id181: 'pancreasSize3',
    id182: 'pancreasConsistency',
    id183: 'pancreasLobule',
    id184: 'pancreasBloodFill',
    id185: 'gall',
    id186: 'liverConsistency',
    id187: 'liverColor',
    id188: 'liverSize1',
    id189: 'liverSize2',
    id190: 'liverSize3',
    id191: 'liverSize4',
    id192: 'liverSize5',
    id193: 'liverMass',
    id194: 'liverBloodFill',
    id195: 'liverLobule',
    id196: 'liverChem',
    id197: 'brainChem',
    id198: 'kidneyChem',
    id199: 'stomachChem',
    id200: 'surrogates',
    id201: 'drug',
    id202: 'narcotic',
    id203: 'bloodChem',
    id204: 'urineChem',
    id205: 'bloodType',
    id206: 'hystBrain',
    id207: 'hystHypophysis',
    id208: 'hystDuraMater',
    id209: 'hystSpinalCord',
    id210: 'hystHeart',
    id211: 'hystAorta',
    id212: 'hystThyroid',
    id213: 'hystAdrenal',
    id214: 'hystBud',
    id215: 'hystBladder',
    id216: 'hystProstata',
    id217: 'hystTesticles',
    id218: 'hystUterus',
    id219: 'hystOvary',
    id220: 'hystLymph',
    id221: 'hystSpleen',
    id222: 'hystSternum',
    id223: 'hystBoneMarrow',
    id224: 'hystPeritoneum',
    id225: 'hystMesentery',
    id226: 'hystEsophagus',
    id227: 'hystStomach',
    id228: 'hystIntestine',
    id229: 'hystLiver',
    id230: 'hystGullbladder',
    id231: 'hystPancreas',
    id232: 'softTissueFeet',
    id233: 'softTissueNeck',
    id234: 'hystStrangulation',
    id235: 'larshe',
    id236: 'vitreous',
    id237: 'carboxyhemoglobin'
};


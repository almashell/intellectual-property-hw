'use strict';

import View from '../core/view.js';

export default class MenuView extends View {

    constructor(parent) {
        super(parent);
        this.parent = parent;
    }

    destructor() {}
    
    render() {
        console.log(this.parent);

        this.parent.innerHTML = `
            <h1>Получение ссылки на заявку в Роспатенте на основе открытых данных</h1>

            <p>Источник: Открытый реестр товарных знаков и знаков обслуживания Российской Федерации (<a href="https://rospatent.gov.ru/opendata/7730176088-tz">https://rospatent.gov.ru/opendata/7730176088-tz</a>)</p>
            
            <p>Выберите требуенмый вид товарного знака для получения 5 случайных ссылок на заявки в Роспатенте:</p>

            <div>
                <form action="" method="get">
                    <input type="radio" name="choice" id="word" value="word" checked> словесные обозначения<br>
                    <input type="radio" name="choice" id="threedimensional" value="threedimensional"> трехмерные обозначения<br>
                    <input type="radio" name="choice" id="holographic" value="holographic"> голографические обозначения<br>
                    <input type="radio" name="choice" id="sound" value="sound"> звуковые обозначения<br>
                    <input type="radio" name="choice" id="olfactory" value="olfactory"> обонятельные обозначения<br>
                    <input type="radio" name="choice" id="color" value="color"> цветные обозначения<br>
                    <input type="radio" name="choice" id="light" value="light"> световые обозначения<br>
                    <input type="radio" name="choice" id="changing" value="changing"> изменяющиеся обозначения<br>
                    <input type="radio" name="choice" id="positional" value="positional"> позиционные обозначения<br>
                    <input type="submit">
                </form>
            </div>

            <div id=res></div>
        `;
    }

    printLinks(links) {
        let listDiv = document.getElementById('res');
        let ul = document.createElement('ul');

        for (let i = 0; i < links.links.length; ++i) {
            let li=document.createElement('li');

            li.innerHTML = `<a href="${links.links[i]}" target="_blank">${links.links[i]}</a>`;   // Use innerHTML to set the text
            console.log(li)
            ul.appendChild(li);                                 
        }

        console.log(ul)
        listDiv.innerHTML = "";
        listDiv.appendChild(ul);    // Note here
        // document.getElementById('res').innerHTML = links;
    }
}
class UI {
    addUIElement(tagname, classname = '', textcontent = '', attributes = {}) {
        const element = document.createElement(tagname);
        if(classname !== ''){
            element.className = classname;
        }
        // Text content
        let text = document.createTextNode(textcontent);
        element.appendChild(text);
        // Attributes
        if(Object.keys(attributes).length >  0){
            for (let key in attributes) {
                element.setAttribute(key, attributes[key])
            }
        }
        return element;
}
    addBook(book) {
        const tbody = document.querySelector("tbody");
        // Create and append tr element
        const tr = this.addUIElement("tr");
        tbody.appendChild(tr);
        tr.className = 'rida';

        for (let key in book) {
            let td = document.createElement("td");
            tr.appendChild(td);
            td.innerHTML = book[key];
        }

        // Create link element
        const alink = document.createElement('a');
        // Create text node
        const linkText = document.createTextNode("x");
        // Add text to link
        alink.appendChild(linkText);
        // Create link reference
        alink.href = "#";

        // Make fourth td element (x link)
        const td4 = document.createElement("td");
        tr.appendChild(td4);
        td4.appendChild(alink);
    }
}
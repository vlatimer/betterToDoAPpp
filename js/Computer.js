const message = document.querySelector("#message");
const sent = document.querySelector("#messageP");
const messageImg = document.querySelector("#message img");
class Computer {
  constructor() {
    //pass
  }

  /* Function get data of element, from form.
   * Get data name -> {data},
   * Of element name -> {prop},
   * In form name -> {form} or defolt ** name == 'create'.
   */
  getFormElementData(data, prop, form = 'create', forSelect = false) {
    try {
      if (forSelect) {
        return document[form][prop].options[forSelect][data];
      }
      return document[form][prop][data];
    } catch (error) {
      console.log(`[Computer]:: getFormElementData() return \n${error.name} \n${error.message}`);
      return '';
    }
  }

  /*Function add element with innerHTML, with class,and porperty to other element.
   * Add element name -> {elem},
   * With InnerHTMl name -> {[inner]} inner can be plent, can be HtmlElement | text,
   * With class name -> {kind},
   * Add to element name -> {addelem} 
   * Whith porperty name -> {prop}
   * And value of property -> {value} .
   */
  addElementToDocument(elem, inner, addelem = null, kind = false, prop = false, value = false) {
    let element = document.createElement(elem);
    for (let i = 0; i < inner.length; i++) {
      if (inner[i] instanceof HTMLElement) {
        element.appendChild(inner[i]);
      } else if (typeof (inner[i]) == "string") {
        element.innerHTML = inner[i];
      }
    }
    if (addelem) {
      addelem.appendChild(element);
    }
    for (let k = 0; k < kind.length; k++) {
      if (kind[k]) {
        element.classList.add(kind[k]);
      }
    }
    for (let j = 0; j < prop.length; j++) {
      if (prop[j]) {
        element[prop[j]] = value[j];
      }
    }
    return element;
  }

  /*Function check: 
   * if input[name = "name"] is checked,
   * if input[name = "surname"] is checked,
   * if input[name = "date"] is checked,
   */
  verifyInputForm() {
    if (comp.getFormElementData("value", "name").trim() != "" && comp.getFormElementData("value", "surname").trim() != "" && comp.getFormElementData("value", "date").trim() != "") {
      return true;
    }
    return false;
  }

  /* Function show message with text and one color
   * With text name -> {text},
   * And color style with -> {info}.
   */
  sendMessage(text, info) {
    sent.innerHTML = `${_capitalLetter(text)}`;
    message.classList.toggle("noMess");
    if (info === "error") {
      messageImg.style.backgroundColor = `var(--error-color)`;
      message.style.color = `var(--error-color)`;
    } else if (info === "correct") {
      messageImg.style.backgroundColor = `var(--corect-color)`;
      message.style.color = `var(--corect-color)`;
    }
    setTimeout(() => {
      message.classList.toggle("noMess");
    }, 3000);
  }
}
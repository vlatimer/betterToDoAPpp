class Computer {
  constructor() {
    //pass
  }

  /* Function get data of element, from form.
   * Get data name -> {data},
   * Of element name -> {prop},
   * In form name -> {form} or defolt ** name == 'create'.
   */
  getFormElementData(data, prop, form = 'create') {
    try {
      return document[form][prop][data];
    } catch (error) {
      console.log(`[Computer]:: getFormElementData() return \n${error.name} \n${error.message}`);
      return '';
    }
  }

  /*Function add element with innerHTML, with class to other element.
   * Add element name -> {elem},
   * With InnerHTMl name -> {[inner]} inner can be plent, can be HtmlElement | text,
   * With class name -> {kind},
   * Add to element name -> {addelem} .
   */
  addElementToDocument(elem, inner, addelem = null, kind = false) {
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
    return element;
  }
}
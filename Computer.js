class Computer {
  constructor() {
    //pass
  }
  // get value of element name -> {prop}
  // in form name -> {form} or defolt ** name == 'create' 
  getFormElementData(prop, form = 'create') {
    try {
      return document[form][prop].value;
    } catch (error) {
      console.log(`[Computer]:: getFormElementData() return \n${error.name} \n${error.message}`);
      return '';
    }
  }
}
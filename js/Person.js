class Person {
  constructor(name, surname, date, education, sex) {
    this.name = name;
    this.surname = surname;
    this.date = date;
    this.education = education;
    this.sex = sex;
    this.delete = undefined;
    this.time = new Date();
  }
  getProperty(prop) {
    return this[prop];
  }
  setDeleteTime(div) {
    if (this.delete == undefined) {
      this.delete = new Date();
      comp.addElementToDocument("p", [comp.addElementToDocument("p", ["Delete Time"]), comp.addElementToDocument("span", [`${_getStringOfTime(this.delete)} / ${_getStringOfDate(this.delete)}`])], div, ["deletiontime"]);
    }
  }
}
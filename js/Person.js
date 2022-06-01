class Person {
  constructor(data) {
    this.name = capitalLetter(data.name);
    this.surname = capitalLetter(data.surname);
    this.date = data.date;
    this.education = data.education ? true : false;
    this.sex = capitalLetter(data.sex);
    this.time = new Date();
  }

  get fullName() {
    return `${this.surname} ${this.name}`;
  }

  get age() {
    let e = new Error("Age returns Nan");
    try {
      if (isNaN(calculateAge(this.date))) {
        throw e;
      }
      return calculateAge(this.date);
    } catch (error) {
      console.log(`Error: <<<${error.message}>>>`);
      let rnd = getRndInteger(0, 31);
      this.date = `${(rnd).toString().padStart(2, "0")}.${(4).toString().padStart(2, "0")}.${2020 - rnd}`;
      return this.age;
    }
  }

  get onlyTime() {
    return getStringOfTime(this.time);
  }

  get onlyDate() {
    return getStringOfDate(this.time);
  }

  get classEducation() {
    return this.education ? "high" : "low";
  }

  get strEducation() {
    return this.education ? "Higher education" : "Secondary education";
  }
  // setDeleteTime(div) {
  //   if (this.delete == undefined) {
  //     this.delete = new Date();
  //     comp.addElementToDocument("p", [comp.addElementToDocument("p", ["Delete Time"]), comp.addElementToDocument("span", [`${_getStringOfTime(this.delete)} / ${_getStringOfDate(this.delete)}`])], div, ["deletiontime"]);
  //   }
  // }
  static verify(data) {
    if (data['name'] && data['surname'] && data['date']) {
      return true;
    }
    return false;
  }
}
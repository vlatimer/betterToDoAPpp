class Person {
  constructor(name, surname, date, education, sex) {
    this.name = name;
    this.surname = surname;
    this.date = date;
    this.education = education;
    this.sex = sex;

    this.time = new Date();
  }
  getProperty(prop) {
    return this[prop];
  }
}
function arrayFilter(arr, filters) {
  return arr.filter((item) => {
    let _status = (status, person) => {
      const personStatus = person.deleted;
      if (status === "all") {
        return true;
      }
      if (status === "work" && !personStatus) {
        return true;
      }
      if (status === "notWork" && personStatus) {
        return true;
      }
      return false;
    };
    let _age = (age, person) => {
      const personAge = person.age;
      if (age === "all") {
        return true;
      }
      if (age === "teen" && personAge < 25) {
        return true;
      }
      if (age === "grown" && (personAge >= 25 && personAge < 45)) {

        return true;
      }
      if (age == "old" && personAge >= 45) {
        return true;
      }
      return false;
    };
    let _education = (education, person) => {
      const personEducation = person.education;
      if (education === "all") {
        return true;
      }
      if (education === "educated" && personEducation) {
        return true;
      }
      if (education === "notEducated" && !personEducation) {
        return true;
      }
      return false;
    };
    let _sex = (sex, person) => {
      const personSex = person.sex;
      if (sex === "all") {
        return true;
      }
      if (sex === "Man" && personSex === "Man") {
        return true;
      }
      if (sex === "Woman" && personSex === "Woman") {
        return true;
      }
      return false;
    };
    if (_status(filters.statusName, item.person) &&
      _age(filters.ageName, item.person) &&
      _education(filters.educationName, item.person) &&
      _sex(filters.sexName, item.person)) {
      item.element.style.display = "grid";
      item.element.style.order = "0";
      return true;
    }
    item.element.style.display = "none";
    item.element.style.order = "0";
    return false;
  });
}

function arraySorting(array, sort) {
  if (sort === "surname") {
    return array.sort((a, b) => {
      let posA = a.person.fullName;
      let posB = b.person.fullName;
      if (posA > posB) {
        return 1;
      } else if (posA < posB) {
        return -1;
      } else {
        return 0;
      }
    });
  }
  if (sort === "time") {
    return array.sort((a, b) => {
      let posA = a.person.time.getTime();
      let posB = b.person.time.getTime();
      if (posA > posB) {
        return 1;
      } else if (posA < posB) {
        return -1;
      } else {
        return 0;
      }
    });
  }
  if (sort === "delete") {
    return array.sort((a, b) => {
      let posA = a.person.deleted ? a.person.deleted.getTime() : Infinity;
      let posB = b.person.deleted ? b.person.deleted.getTime() : Infinity;
      if (posA > posB) {
        return 1;
      } else if (posA < posB) {
        return -1;
      } else {
        return 0;
      }
    });
  }
  return array;
}
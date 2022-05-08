function mapFilter(map, filters) {
  return [...map].filter((item, index, array) => {
    let _status = (status, person) => {
      let personStatus = person.getProperty("delete");
      if (status === "all") {
        return true;
      }
      if (status === "work" && personStatus == undefined) {
        return true;
      }
      if (status === "notWork" && personStatus != undefined) {
        return true;
      }
      return false;
    };
    let _age = (age, person) => {
      let personAge = _calculateAge(person.getProperty("date"));
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
      let personEducation = person.getProperty("education");
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
      let personSex = person.getProperty("sex");
      if (sex === "all") {
        return true;
      }
      if (sex === "man" && personSex === "man") {
        return true;
      }
      if (sex === "woman" && personSex === "woman") {
        return true;
      }
      return false;
    };
    if (_status(filters[0], item[1]) && _age(filters[1], item[1]) && _education(filters[2], item[1]) && _sex(filters[3], item[1])) {
      item[0].style.display = "grid";
      return true;
    } else {
      item[0].style.display = "none";
      return false;
    }
  });
}

function arraySorting(array, parameter) {
  if (parameter === "surname") {
    return array.sort((a, b) => {
      let posA = a[1][parameter];
      let posB = b[1][parameter];
      if (posA > posB) {
        return 1;
      } else if (posA < posB) {
        return -1;
      } else {
        return 0;
      }
    });
  } else if (parameter === "none") {
    return array;
  } else {
    return array.sort((a, b) => {
      let posA = a[1][parameter].getTime();
      let posB = b[1][parameter].getTime();
      if (posA > posB) {
        return 1;
      } else if (posA < posB) {
        return -1;
      } else {
        return 0;
      }
    });
  }
}
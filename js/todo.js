const listDiv = document.querySelector("#listDiv");
var dict = new Map();
var comp = new Computer();

document.getElementById("createButton").onclick = () => {
  let employeeClass = new Person(
    comp.getFormElementData("value", "name"),
    comp.getFormElementData("value", "surname"),
    comp.getFormElementData("value", "date"),
    comp.getFormElementData("checked", "education"),
    comp.getFormElementData("value", "sex"));
  let element = comp.addElementToDocument("div",
    [comp.addElementToDocument("p", [`${_capitalLetter(employeeClass.getProperty("name"))}
  ${_capitalLetter(employeeClass.getProperty("surname"))}`], null, ["names"]),
      comp.addElementToDocument("p", [`Age: ${_calculateAge(employeeClass.getProperty("date"))}`], null, ["birthday"]),
      comp.addElementToDocument("p", [comp.addElementToDocument("p", ["Create Time"]), comp.addElementToDocument("span", [`${_getStringOfTime(employeeClass.time)} / ${_getStringOfDate(employeeClass.time)}`])], null, ["creationTime"]), comp.addElementToDocument("p", [toStringEducation(employeeClass.education)], null, ["educatedElement", toClass(employeeClass.education, "high", "low")]), comp.addElementToDocument("p", [_capitalLetter(employeeClass.sex)], null, ["sexElement", employeeClass.sex]), comp.addElementToDocument("input", [], null, ["buttonForDeley"], ["type", "onclick", "value"], ["button", (event) => {
        let closestDiv = event.target.closest('div');
        if (dict.get(closestDiv)["delete"] == undefined) {
          event.target.classList.add("noButton");
          setTimeout(function () {
            event.target.style.display = "none";
            dict.get(closestDiv).setDeleteTime(closestDiv);
          }, 1000);
        }
      }, "Delete"])
    ], listDiv, ["newElemenet"]);
  dict.set(element, employeeClass);
};
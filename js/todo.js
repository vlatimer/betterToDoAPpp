const listDiv = document.querySelector("#listDiv");

const message = document.querySelector("#message");
const sent = document.querySelector("#messageP");
const messageImg = document.querySelector("#message img");

const create_form = document.getElementById("createForm");
const search_form = document.getElementById("searchForm");

let mainArray = [];

function deleteElement(event) {
  let closestDiv = event.target.closest('div');

  let arrElem = mainArray[closestDiv.id];
  if (!arrElem.person.deleted) {
    arrElem.person.deleted = new Date();
    arrElem.element.appendChild(
      createDelTime(arrElem.person.deleted)
    );
    setStylesToDeletedButton(event.target);
  }
}

function createElement(element_name, attributes, element_children) {
  const element = document.createElement(element_name);

  //adding child to element
  (element_children || []).forEach((child) => {
    //if child is other element:
    if (child instanceof HTMLElement) {
      element.appendChild(child);
    }
    //if child is text:
    if (typeof (child) === "string") {
      element.innerHTML = child;
    }
  });

  Object.keys(attributes || {}).forEach((key) => {

    if (key === "classList") {
      attributes[key].forEach((class_name) => {
        element.classList.add(class_name);
      });
      return;
    }

    if (key.startsWith("on")) {
      attributes[key].forEach((event_foo) => {
        const eventName = key.slice(2);
        element.addEventListener(eventName, event_foo, false);
      });
      return;
    }
    element.setAttribute(key, attributes[key]);
  });

  return element;
}

function createNewElement(person) {
  const newElemenet = createElement("div", {
    classList: ["newElemenet"]
  }, [

    createElement("p", {
      classList: ["names"]
    }, [`${person.fullName}`]),

    createElement("p", {
      classList: ["birthday"]
    }, [`Age: ${person.age}`]),

    createElement("p", {
      classList: ["creationTime"]
    }, [
      createElement("p", {}, ["Create Time"]),

      createElement("span", {}, [`${person.onlyTime} / ${person.onlyDate}`])
    ]),

    createElement("p", {
      classList: ["educatedElement", person.classEducation]
    }, [person.strEducation]),

    createElement("p", {
      classList: ["sexElement", person.sex]
    }, [person.sex]),

    createElement("input", {
      classList: ["buttonForDeley", "workButton"],
      onclick: [deleteElement],
      type: "button"
    })

  ]);

  return newElemenet;
}

create_form.onsubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = getFormData(formData);

  const person = new Person(data);

  if (Person.verify(data)) {
    const element = createNewElement(person);
    listDiv.appendChild(element);

    element.id = addToMainArray(person, element);

    element.style.order = "-1";
    mess.send("new Employee");
  } else {
    mess.error("You must fill all inputs");
  }
  create_form.reset();
};

search_form.onsubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const {
    sorting,
    ...filters
  } = getFormData(formData);
  try {
    let len;
    arraySorting(
      arrayFilter(mainArray, filters),
      sorting
    ).forEach((item, index, array) => {
      if (!len) {
        len = array.length;
      }
      item.element.style.order = `${index}`;
    });
    mess.send(`Found ${len} employees`);
  } catch (e) {
    console.log(e.message);
    mess.error("Incorect filters");
  }
};
const names = ["Russel", "Jane", "Ben", "Ann", "John", "Sophia", "Billy", "Olivia", "Noah", "Emma", "Jack"];
const surnames = ["Ball", "WestBrook", "Brown", "Smith", "Lee", "Johnson", "Martin", "Roy", "Gagnon", "Tremblay", "Love"];

function createTest(count) {
  for (let i = 0; i < count; i++) {
    let rnd = getRndInteger(0, 11);
    let rnd2 = getRndInteger(0, 11);
    let year = getRndInteger(0, 80);
    let month = getRndInteger(1, 13);
    let data = {
      name: names[rnd],
      surname: surnames[rnd2],
      sex: rnd % 2 !== 0 ? "woman" : "man",
      education: rnd % 3 === 0 ? true : false,
      date: `${(month + rnd).toString().padStart(2, "0")}.${month.toString().padStart(2, "0")}.${2020 - year}`,
    };

    const person = new Person(data);

    if (Person.verify(data)) {
      const element = createNewElement(person);

      listDiv.appendChild(element);

      element.id = addToMainArray(person, element);
    }
  }
}
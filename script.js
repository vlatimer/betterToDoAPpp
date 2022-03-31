function show() {
  console.log(`  Name: ${document.Person.personname.value} \n
  Surname: ${document.Person.personsurname.value} \n
  Date: ${document.Person.persondate.value} \n
  Education: ${document.Person.education.checked ? "Yes" : "No"} \n
  Sex: ${document.Person.sex[0].checked ? "Man" : "Woman"} \n
  End`);
}
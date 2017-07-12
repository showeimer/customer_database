// console.log(Object.getOwnPropertyNames(customers));
//
// customers.results.forEach(function(element) {console.log(element)})
//
// console.log(customers.results.length);
//
// console.log(customers.results[0].picture.large);

let person = "";

for (let i = 0; i < customers.results.length; i++) {
  person += `
  <div class="container">
    <img src="${customers.results[i].picture.large}" class="employeeImage">
    <h3 class="employeeName">${customers.results[i].name.first} ${customers.results[i].name.last}</h3>
    <a href="mailto:${customers.results[i].email}" class="employeeEmail">${customers.results[i].email}</a>

    <p>${customers.results[i].location.street}<br> ${customers.results[i].location.city}, ${customers.results[i].location.state}, ${customers.results[i].location.postcode}</p>

    <a href="tel:${customers.results[i].phone}" class="employeePhone">${customers.results[i].phone}</a>

    <p class="SSN">${customers.results[i].id.value}</p>
  </div>`;
};

document.querySelector('.wrapper').innerHTML = person;

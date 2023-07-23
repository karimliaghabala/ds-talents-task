
let firstName = document.querySelector("#firstname");
let lastName = document.querySelector("#lastname");
let email = document.querySelector("#email");
let btn = document.querySelector("#btn");
let tbody = document.querySelector("tbody");

let firstTd = document.querySelector("#firstTd");
let lastTd = document.querySelector("#lastTd");
let emailTd = document.querySelector("#emailTd");
let deleteTd = document.querySelector("#deleteTd>button");



fetch('data.json')
.then((res) => {
    return res.json()
})
.then((data) => {
    data.forEach(e => {
        firstTd.textContent = e.firstName
        lastTd.textContent = e.lastName
        emailTd.textContent = e.email
    })
    deleteTd.addEventListener("click", (i) => {
        delTrjson = i.target.parentElement.parentElement.firstChild.textContent;
        tdDelete = i.target.parentElement.parentElement;
        data.filter(item => item.firstTd != delTrjson)
        tdDelete.remove()
    })
})

let userList = [];
function Users(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
}
btn.addEventListener("click", (e) => {
    if(firstName.value.length > 0 && lastName.value.length > 0 && email.value.length > 0){
    e.preventDefault();
    newUser = new Users(firstName.value, lastName.value, email.value);
    userList.push(newUser);

    tr = document.createElement("tr");

    tbody.append(tr)
    trFirst = document.createElement("td");
    trLast = document.createElement("td");
    trMail = document.createElement("td");
    tdBtns = document.createElement("td");

    tr.append(trFirst);
    tr.append(trLast);
    tr.append(trMail);
    tr.append(tdBtns);

    btnDelete = document.createElement("button");
    tdBtns.append(btnDelete);

    btnDelete.textContent = "Delete";

    userList.forEach(item => {
        trFirst.textContent = item.firstName
        trLast.textContent = item.lastName
        trMail.textContent = item.email
    })
    btnDelete.addEventListener("click", (e) => {
        delTr = e.target.parentElement.parentElement.firstChild.textContent;
        trDeleted = e.target.parentElement.parentElement
        userList = userList.filter(item => item.trFirst != delTr)
        trDeleted.remove()
    })
}else{
    alert("Zəhmət olmasa formu doldurun")
    e.preventDefault();
}
})
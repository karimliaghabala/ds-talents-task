
let firstName = document.querySelector("#firstname");
let lastName = document.querySelector("#lastname");
let email = document.querySelector("#email");
let btn = document.querySelector("#btn");
let tbody = document.querySelector("tbody");

let userList = [];
function Users (firstName,lastName,email){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
}
btn.addEventListener("click", (e)=>{
    e.preventDefault();
    newUser = new Users(firstName.value,lastName.value,email.value);
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

    userList.forEach(item=>{
        trFirst.textContent = item.firstName
        trLast.textContent = item.lastName
        trMail.textContent = item.email
    })

    btnDelete.addEventListener("click",(e)=>{
        delTr = e.target.parentElement.parentElement.firstChild.textContent;
        trDeleted = e.target.parentElement.parentElement
        userList = userList.filter(item=>item.trFirst != delTr )
        trDeleted.remove()
    })
})
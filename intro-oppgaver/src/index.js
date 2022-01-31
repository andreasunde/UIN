// Oppgave 1
const remove = document.getElementById("remove");
const removebtn = document.getElementById("remove-btn");

const removeText = () => {
  //remove.innerText = "";
  //Begge kan brukes og gjør nesten det samme.
  remove.remove();
};

removebtn.addEventListener("click", removeText);

// Oppgave 2

const change = document.getElementById("change");
const changebtn = document.getElementById("change-btn");

changebtn.onclick = () => {
  change.innerText = "Changed";
};

// Oppgave 3

const input = document.getElementById("input");
const inputtext = document.getElementById("input-text");

input.addEventListener("keyup", () => {
  inputtext.innerText = input.value;
});

// Oppgave 4
const myList = ["item one", "item two", "item three"];
const ul = document.querySelector("#ul");
const writelist = document.querySelector("#write-list");

writelist.addEventListener("click", () => {
  myList.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = item;
    ul.appendChild(li);
  });
});

// Oppgave 5

const select = document.querySelector("#select");
const text = document.querySelector("#text");
const create = document.querySelector("#create");
const placeholder = document.querySelector("#placeholder");

create.addEventListener("click", () => {
  const element = document.createElement(select.value);
  element.innerText = text.value;
  placeholder.appendChild(element);
});

// Oppgave 6

const list = document.getElementById("list");
const removeli = document.getElementById("remove-li");

removeli.addEventListener("click", () => {
  if (list.lastElementChild == null) return;
  list.lastElementChild.remove();
});

// Oppgave 7

const nameinput = document.getElementById("name");
const order = document.getElementById("order");

nameinput.addEventListener("keyup", () => {
  if (nameinput.value.length <= 4) {
    order.disabled = false;
  } else {
    order.disabled = true;
  }
});

// Oppgave 8

const color = document.getElementById("color");
const children = document.querySelector(".children").children;

color.addEventListener("click", () => {
  /*for (let i = 0; i < children.length; i++) {
    if (i % 2 === 0) {
      children[i].style.border = "3px solid green";
    } else {
      children[i].style.border = "3px solid pink";
    }
  }*/

  /*Array.from(children).forEach((child, index) => {
    if (index % 2 === 0) {
      child.style.border = "3px solid green";
    } else {
      child.style.border = "3px solid pink";
    }
  });*/

  for (let i = 0; i < children.length; i++) {
    i % 2 === 0
      ? (children[i].style.border = "3px solid green")
      : (children[i].style.border = "3px solid pink");
  }
});

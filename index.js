const teaImg = "./images/peppermint-tea-on-teacup-1417945.jpg";
const coffeeImg = "./images/flat-white-3402c4f.jpg";
const hotChocoImg = "./images/images.jpg";

function WriteData() {
    let r = prompt("Enter the daytime (morning, afternoon, or evening):").toLowerCase();
    if (r === "morning" || r === "afternoon" || r === "evening") {
        displayBeverageImage(r); 
    } else {
        alert("Please write a valid daytime: morning, afternoon, or evening.");
    }
}

function displayBeverageImage(r) {
   const container = document.getElementById("beverage-container");
   container.innerHTML = ""; 
   const imgDiv = document.createElement("div"); 
   imgDiv.style.textAlign = "center"; 
   const img = document.createElement("img"); 
   img.style.borderRadius = "5px";
   const text = document.createElement("h3");
   text.style.textAlign = "center";

   if (r === "morning") {
       img.src = teaImg;
       text.textContent = "It's morning! Enjoy your tea."; 
   } else if (r === "afternoon") {
       img.src = coffeeImg;
       text.textContent = "It's afternoon! Time for some coffee."; 
   } else if (r === "evening") {
       img.src = hotChocoImg;
       text.textContent = "It's evening! Relax with hot chocolate."; 
   }
   img.style.maxWidth = "200px";
   imgDiv.appendChild(img); 
   imgDiv.appendChild(text); 
   container.appendChild(imgDiv); 
}
// Задача 2
function datas(){
   const student = {
      name: prompt("Введите имя:"),
      age: parseInt(prompt("Введите возраст:"), 10),
      subject: prompt("Введите предмет:"),
      grade: prompt("Введите оценку:")
   };
   
console.log("Изначальный объект:", student);

student.age += 5;

console.log("Обновленный объект (возраст +5):", student);
}

// Задача 3
const movies = [
   { title: "Начало", director: "Кристофер Нолан", year: 2010, genre: "фантастика" },
   { title: "Форрест Гамп", director: "Роберт Земекис", year: 1994, genre: "драма" },
   { title: "Криминальное чтиво", director: "Квентин Тарантино", year: 1994, genre: "боевик" },
   { title: "Зеленая миля", director: "Фрэнк Дарабонт", year: 1999, genre: "триллер" },
   { title: "Жизнь прекрасна", director: "Роберто Бениньи", year: 1997, genre: "комедия/драма" },
];

console.log("Режиссёр второго фильма:", movies[1].director);
console.log("Жанр четвёртого фильма:", movies[3].genre);

// Задача 4
let shoppingList = ["яблоки", "бананы", "молоко", "сыр", "хлеб", "шоколад"];
shoppingList.unshift("яйца");
console.log("После добавления в начало:", shoppingList);
shoppingList.pop();
console.log("После удаления последнего элемента:", shoppingList);
shoppingList.splice(2, 1, "печенье", "йогурт");
console.log("После замены третьего элемента:", shoppingList);



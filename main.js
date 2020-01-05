
/*

console.log("Hello world");

// let const var
// let scope variable resignable 
// const scope un-resignable
// var global variable
let name = "azzam";
let age = 21;
let x = null; // empty variable
let y = undefined; //similiar to  let z;





console.log(typeof name); //string
console.log(`My name is ${name},I am ${age} years old.`);
//Template String






const h = "Hello World";
console.log(h.length);
console.log(h.toUpperCase());
console.log(h.split(' '));








const fruits = ["apples","oranges","banana"]
//fruits[0] apples, fruits[fruits.length -1] banana
fruits[0] = "watermelon";
fruits.push("kiwi");//adds at end
fruits.pop();//deletes at end
delete fruits[0];
console.log(fruits);









//Object Literals - used as js dictonary 
const person = {
    firstname: 'azzam',
    lastname : 'maki',
    age: 30,
    hobbies : ['code','football'],
    address:{
        city : 'cheras',
        condo : 'Bayu'
    }
}

console.log(person['firstname']);// same as person.firstname

//pull out properties of object literals
const {firstname,lastname, address: {city}} = person;
console.log(lastname);
console.log(city);

person.email = "azzam49coder@gmail.com"; //add property

//Array of object literals
const tasks = [
    {
        id : 1,
        text : 'Take out trash',
        isCompleted: true
    },
    {
        id : 2,
        text : 'Meet with boss',
        isCompleted: true
    },
    {
        id : 3,
        text : 'Dentist appt',
        isCompleted: false
    }
];

console.log(tasks[1].text)

//JSON is used send data from server to webpage-
//rules: data in key/value pairs, keys shall be within double quotes
// it can contain objects or arrays

//Converting tasks to JSON -
const to_json = JSON.stringify(tasks);
console.log(to_json);












//Loops
for(let i = 0; i < tasks.length ; i++){
    console.log(`for loop : ${tasks[i].text}`);
}

let i = 0;
while( i < tasks.length){
    console.log(`while loop :  ${tasks[i].text}`)
    i++;
}

for(let task of tasks){
    console.log(`for of loop : ${task.text}`);
}

//Array loops 
tasks.forEach(function(task){
    console.log(`foreach loop : ${task.text}`);
});
//map & filter returns array
const task_text = tasks.map(function(task) {
    return task.text
});
console.log(task_text);

// return only completed tasks
const task_text2 = tasks.filter(function(task){
    return task.isCompleted === true;
}).map(function(task){
    return task.text
});
console.log(task_text2);











//Conditionals
let x2 = 10;
if(x2 === 10){
    console.log("\nx is 10");
}else if(x > 10){
    console.log("x is greater than 10");
}else{
    console.log("x is less than 10");
}

//Ternary operator
const x3 = 10;
const color = x3 > 10 ? 'red':'blue';

//Switch
switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
}

















//Functions
function addNum(num1, num2 = 2){
    return num1 + num2;
}
const result = addNum(3);
console.log(result);

//ES6
const addNum2 = (num1, num2 = 2) =>{
    //console.log(num1 + num2);
    return num1 + num2;
}
const result2 = addNum2(3);
console.log(result2);

//Single Line
const addNum3 = (num1,num2) => num1 + num2;
console.log(addNum3(4,4));












//OOP
class Person{
  
    constructor(name,age,hobby){
        this.name = name;
        this.age = age;
        this._hobby = hobby;
    }

    

    get hobby(){
        if(this.hobby === "")
        {
            return 'there is no hobby';
        }else{
            return this.hobby;
        }   
    }
  
  
    set hobby(value) {    
            this._hobby = value;
      }

    show_info(){
      console.log(`User : ${this.name},Age: ${this.age},Hobby: ${this._hobby}`);
    }
  
  }
  
  
  const person1 = new Person('azzam','21','code');
  
  person1.show_info();
















*/








//DOM
//Select single element
//document.getElementsByClassName
//document.getElementById
//console.log(document.querySelector('form'));

//Select Multiple elements
//console.log(document.querySelectorAll('.item'));

//querySelectorAll() allows us to run list methods on it
//const items = document.querySelectorAll('.item');
//items.forEach( (item) => console.log(item.textContent));


//const ul = document.querySelector('.items');
//ul.remove(); //removes ul element
//ul.lastElementChild.remove();
//ul.firstElementChild.textContent = 'First Item';

//Select a child element by index
//ul.children[1].textContent = 'Second Item';


//const btn = document.querySelector('button');
//adding css style to element
//btn.style.background = 'gold';



//2 parameters, event type & function to invoke
//btn.addEventListener('click' , (e) =>{
   
    //const body = document.querySelector('body');
    //e.preventDefault(); //prevents the defult flash action for submit button
    //body.style.background = "#ccc";
    //document.querySelector('.items').lastElementChild.innerHTML='<h1>3RD Item</h1>';
//});




const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('.users');



form.addEventListener('submit', onSubmit);


function onSubmit(e){
    e.preventDefault();

   if(nameInput.value === '' || emailInput.value === ''){
    
    //add style and text for msg
    msg.style.background = 'red';
    msg.style.padding = '5px';
    msg.textContent = `Please fill out all fields`;

    //clear msg after 3 seconds
    setTimeout( () => msg.remove(), 3000);
   }else{
       //add class for ul parent
       userList.classList.add('items');

       //create li
       const li = document.createElement('li');
       //create text for li
       li.appendChild(document.createTextNode(`${nameInput.value} ${emailInput.value}`));
       //add class for li
       li.classList.add('item');
       //add li at ul parent
       userList.appendChild(li);

       //clear values
       nameInput.value = '';
       emailInput.value = '';
    }
}
















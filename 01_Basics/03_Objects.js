//Singleton
//Constructor

//Objects Literals

const mySym = Symbol("Key1");
const JsUser = {
    name: "Manoj",
    age: 18,
    "full name": "Manoj Kumar Rai",
    location: "Lucknow",
    email: "Manoj@gmail.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday", "Saturday"],
    mySym: "Key1"
}

console.log(JsUser.name);
console.log(JsUser["name"]);
console.log(JsUser.full_name);
console.log(JsUser["full name"]);
console.log(typeof JsUser.mySym);


JsUser.greeting = function() {
    console.log("Hello World");    
}

console.log(JsUser.greeting());
console.log(JsUser.greeting);

const user = [
    {id: 1,
        email:"ram@gmail.com"
    },
    {id: 2,
        email:"shyam@gmail.com"
    },
    {id: 3,
        email:"ghanshyam@gmail.com"
    },
    {id: 4,
        email:"suraj@gmail.com"
    },
    {id: 5,
        email:"karn@gmail.com"
    }
]

console.log(user[0].email);

const tinderUser = {
    name: "Ghanshyam",
    id: 123576,
    emailId: "ghanshyam@gmail.com"
}

console.log(Object.values(tinderUser));

const obj1 = {1: "a", 2: "b", 3: "c"};
const obj2 = {4: "d", 5: "e", 6: "f"};

console.log(Object.keys(obj1));

const obj3 = Object.values(obj1);
const obj4 = Object.values(obj2);

console.log(obj3);
console.log(obj4);

const obj5 = {...obj1, ...obj2};

console.log(obj5);

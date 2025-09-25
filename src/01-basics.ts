import {Friend, Colleague, ColleagueHistory } from './myTypes'


const friend1: Friend = {
    name: "SpongeBob Squarepants",
    phone: "087-12345",
    age: 25,
};

const friend2: Friend = {
    name: "Patrick Star",
    phone: "086--12345",
    age: 31,
};

export const friends = [friend1, friend2];


//console.log(friends[1]);

//   -------------------
const colleague1 : Colleague = {
    name: "Sandy Cheeks",
    department: "Engineering",
    contact: {
        email: "sandycheeks@bikinibottom.com",
        extension: 121,
    },
};

const colleague2 : Colleague= {
    name: "Mr Krabs",
    department: "Finance",
    contact: {
        email: "krabbs@bikinibottom.com",
        extension: 132,
    },
};

const colleague3 : Colleague = {
    name: "Plankton Sheldon",
    department: "HR",
    contact: {
        email: "plank@chumbucket.com",
        extension: 125,
    },
};
export const colleagues = {
    current: [colleague1, colleague2, colleague3],
    former: [],
};

//console.log(colleagues.current[0]);

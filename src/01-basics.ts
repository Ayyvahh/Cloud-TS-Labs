// (Optional) Change the names below to your friends.

interface Friend {
    name: string;
    phone: string;
    age: number
}

interface Colleague {
    name: "Sandy Cheeks",
    department: "Engineering",
    contact: {
        email: string,
        extension: number
    },
}

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

const friends: Friend[] = [friend1, friend2];
console.log(friends[1]);

//   -------------------
const colleague1 = {
    name: "Sandy Cheeks",
    department: "Engineering",
    contact: {
        email: "sandycheeks@bikinibottom.com",
        extension: 121,
    },
};

const colleague2 = {
    name: "Mr Krabs",
    department: "Finance",
    contact: {
        email: "krabbs@bikinibottom.com",
        extension: 132,
    },
};

const colleague3 = {
    name: "Plankton Sheldon",
    department: "HR",
    contact: {
        email: "plank@chumbucket.com",
        extension: 125,
    },
};
const colleagues = {
    current: [colleague1, colleague2, colleague3],
    former: [],
};

console.log(colleagues.current[0]);

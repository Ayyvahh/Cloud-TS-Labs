// (Optional) Change the names below to your friends.

interface Friend {
    name: string;
    phone: string;
    age: number
}

const friend1 = {
  name: "SpongeBob Squarepants",
  phone: "087-12345",
  age: 25,
};

const friend2 = {
  name: "Patrick Star",
  phone: "086--12345",
  age: 31,
};

const friends = [friend1, friend2];
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

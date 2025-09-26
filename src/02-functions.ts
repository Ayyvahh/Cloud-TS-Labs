import { Friend, Colleague, EmailContact } from './myTypes'
import { friends, colleagues } from './01-basics'


function older(f: Friend): string {
    f.age += 1
    return `${f.name} is now ${f.age}`
}

//console.log(older(friends[0]))


//increment all friends age by 1
function allOlder(friends: Friend[]): string[] {
    const older: string[] = []
    for (const f of friends) {
        f.age += 1
        older.push(`${f.name} is now ${f.age}`)
    }
    return older
}
//console.log(allOlder(friends))


// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]) {
    const result = cs.sort(
        (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
}
//console.log(highestExtension(colleagues.current));


function addColleague(colleagues: Colleague[], name: string, dep: string, email: string) {

    const highext = highestExtension(colleagues).contact.extension + 1
    const c: Colleague = { name: name, department: dep, contact: { email: email, extension: highext } }
    colleagues.push(c)
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
//console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));


// sort list of colleagues
function sortColleagues(colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number
): EmailContact[] {
    const sorted = colleagues.sort(sorter); // Colleague[] inferred
    const result: EmailContact[] = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return result
}

//console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
//console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length));


//find friends by criterion
function findFriends(friends: Friend[], criterion: (friend: Friend) => boolean) {
    const found = friends.filter(criterion);

    return found.map(friend => friend.name);
}

console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
//console.log(findFriends(friends, (friend) => friend.age < 35));

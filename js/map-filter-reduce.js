const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let three = users.filter(users => users.languages.length >2);
console.log(three);

let email = users.map(user => user.email);
console.log(email);

let totalYears = users.reduce((userStack, users) =>{
    return userStack + users.yearsOfExperience;
}, 0);
console.log(totalYears);
console.log(totalYears / users.length);

let longestEmail = users.reduce((x, y) => {
    if (x.length < y.email.length) {
        x = y.email
    }
    return x
},'');
console.log(longestEmail);

let instructors = users.reduce((instructorsStack, user) => {
    return instructorsStack.concat(user.name)
},[] );
console.log("this is the instructors: " + instructors +".");

let instructorLanguages = Array.from(users.reduce((x, user) => {
    user.languages.forEach(language => x.add(language));
    return x
}, new Set()));
    console.log(instructorLanguages);

// MY WAY WITH PROMISES
// let numb;
// function wait(num) {
//     numb = num
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//              resolve()
//         }, num * 1000);
//     });
// }

// DANIELS WAY WITHOUT PROMISE
// const wait = (num) => {
//     for (let i=0; i<num*1000000;i++){
//     }
//     return "hello"
// }


// DANIELS WAY WITH PROMISES
const wait = (num) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, num);
    })
};

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));



// function getUserNames() {
// fetch(`https://api.github.com/users/${user}/events`, {headers: {'Authorization':`token ${githubKey}`}});  {
//     const users = response.json().then((users) => {
//         const usernames = users.map(user => user.login);
//         usernames.forEach((username) => {
//         });
//     });
// }}




const lastCommit= (username) => {
    // return a promise that resolves to usernames last commit
    let url = `https://api.github.com/users/${username}/events/public`;
    fetch(url, {headers: {'Authorization': `token ${githubToken}`}})
        .then(data => data.json())
        // .then(data => console.log(data));
        .then(data => {
            for (let event of data) {
                if (event.type === "PushEvent")
                    return event;
            }
        })
        .then(firstPushEvent => {
            return firstPushEvent.created_at;
        })
};
lastCommit("gaston-tarango");





// level 1

let users = [
    { id: 1, name: "Emma", gender: "Female" },
    { id: 2, name: "Oscar", gender: "Male" },
    { id: 3, name: "Alexis", gender: "Female" },
    { id: 4, name: "Adam", gender: "Male" },
  ];

/* my version:

function filterUsers(idToRemove) {
    const filteredUsers = users.filter(filterFunction);

    function filterFunction(user) {
        if(user.id !== idToRemove) {
            return true;
        }
    }

    users = filteredUsers;
}

filterUsers(1);
console.log(users);

*/

// level 2

const filterUsers = (idToRemove) => users.filter((user) => user.id !== idToRemove);

users = filterUsers(3);
// Jan wrote:
// const filteredUsers = filterUsers(2);

console.log(users);
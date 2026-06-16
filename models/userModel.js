let users = [
    {
        name: "i gede suarsana",
        age: 36,
        email: "gede@yahoo.com"
    },
    {
        name: "i wayan",
        age: 38,
        email: "wayan@yahoo.com"
    },
    {
        name: "i putu",
        age: 37,
        email: "putu@yahoo.com"
    }
];


exports.getAll = () => { return users; }



exports.getByName = (name) => {
    users.find(user => user.name.startsWith(name));
}


exports.create = (user) => {
    users.push(user);
}

exports.update = (updateUser) => {

    let tempuser = users.find(user => user.startsWith(updateUser.name));

    tempuser.name = updateUser.name;
    tempuser.age = updateUser.age;
    tempuser.email = updateUser.email;

}


exports.delete = (name) => {
    users.filter(user => !user.name.startsWith(name));
}





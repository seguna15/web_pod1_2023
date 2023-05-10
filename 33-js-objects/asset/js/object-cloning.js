//object cloning

const user = {
    name: 'Cypher',
    role: 'tutor'
};

const admin = {};

console.log(`admin object: ${Object.entries(admin)}`);

//cloning by iteration
for (let key in user){
    admin[key] = user[key];
}

console.log(`admin object: ${Object.entries(admin)}`);

//Object.assign: Object(destination, ...sourcesOfObjects)
const author = {name:'Pep Fraudiola'};
const permission1 = {canEdit: true};
const permission2 = {canDelete: true};

console.log(`author object: ${Object.entries(author)}`);
Object.assign(author, permission1, permission2);
console.log(`author object: ${Object.entries(author)}`);

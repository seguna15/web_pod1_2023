//JSON looks like string version of objects

let user ={
    name: 'Pelumi Akerele',
    club: 'Manchester City',
    favArtist: 'Kiss Daniel',
    getname: function(){
        return this.name;
    }
}

console.log(user);

const jsonFormat = JSON.stringify(user);
console.log(jsonFormat); //{ "name": "Pelumi Akerele", "club": "Manchester City", "favArtist": "Kiss Daniel" }

const objFormat = JSON.parse(jsonFormat);
console.log(objFormat);

console.log(typeof jsonFormat);
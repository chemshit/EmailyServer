//a function to retrive a blob of json
//make and ajax request! Use the 'fetch' function.

//https://rallycoding.herokuapp.com/api/music_albums


function fetchAlbums2() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums') //returns a promise
        .then(res => res.json()) // fetch resolves promize with an object. we will get real json response by collin .json() that return another promise
        .then(json => console.log(json)); //After getting json console log it
}



//ES2017 Syntax

async function fetchAlbums() {
    const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums'); //returns a promise
    const json = await res.json(); // fetch resolves promize with an object. we will get real json response by collin .json() that return another promise

    console.log(json); //After getting json console log it
}

fetchAlbums();

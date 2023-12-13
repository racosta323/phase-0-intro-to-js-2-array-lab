// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name){
    cats.push("Ralph");
};
function destructivelyPrependCat(name){
    cats.unshift("Bob");
};
function destructivelyRemoveLastCat(){
    cats.pop();
};
function destructivelyRemoveFirstCat(){
    cats.shift();
};
function appendCat(name){
    const addCatAtEnd = [
        ...cats,
        "Broom",
    ];
    return addCatAtEnd;
};
function prependCat(name){
    const addCatAtStart = [
        "Arnold",
        ...cats,
    ];
    return addCatAtStart;
};
function removeLastCat(){
    const removeLast = [
        ...cats.slice(0,2),
    ];
    return removeLast;
};
function removeFirstCat(){
    const removeFirst = [
        ...cats.slice(1),
    ];
    return removeFirst;
};

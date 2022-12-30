function capitalize(text) {
    if (typeof text != 'string') {
        return "not a string"
    }

    return text.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
}

console.log(capitalize("huhahaha"));
console.log(capitalize("reimari is the truth"));
console.log(capitalize(323232));

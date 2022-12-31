function capitalize(text) {
    if (typeof text != 'string') {
        return "Not a string"
    }

    return text.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
}

export default capitalize;
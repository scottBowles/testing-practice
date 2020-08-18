function capitalize(str) {
    // return str[0].toUpperCase() + str.slice(1)
    return str.replace(/^\w/, char => char.toUpperCase())
}

export default capitalize
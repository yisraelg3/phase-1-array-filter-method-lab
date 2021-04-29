// Code your solution here
function findMatching (array, matchName) {
    const match = array.filter((name) => {
        return name.toLowerCase() === matchName.toLowerCase()
    })
    return match
}

function fuzzyMatch (array, matchName) {
    const match = array.filter((name) => {
        return name.slice(0, matchName.length) === matchName
    })
    return match
}

function matchName (arrayOfObjects, matchName) {
    const match = arrayOfObjects.filter((object) => {
        return object.name === matchName
    })
    return match
}
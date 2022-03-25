const capitalize = (str) =>{ 
    if (str.length === ""){
        return "";
    }

    let firstLetter = str.charAt(0).toUpperCase();
    return firstLetter
}

module.exports = capitalize;
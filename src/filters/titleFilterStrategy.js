// There is not need to create a class for a strategy

function isInTitle(searchTerm, suggestion) {
    return suggestion.title && removeExtraSpacesAndToLowerCase(suggestion.title).includes(removeExtraSpacesAndToLowerCase(searchTerm));
}

const removeExtraSpacesAndToLowerCase = (str) => {
    return str.split(/\s+/).join(' ')
        .toLowerCase();
}

module.exports = isInTitle;
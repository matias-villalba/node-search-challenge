// There is not need to create a class for a strategy

function matchWithQuery(query, suggestion) {

    for (field in query) {
        if ((typeof suggestion[field]) !== 'string') {
            continue;
        }
        if (!suggestion[field] || !removeExtraSpacesAndToLowerCase(suggestion[field]).includes(removeExtraSpacesAndToLowerCase(query[field]))) {
            return false;
        }
    }
    return true;
}

const removeExtraSpacesAndToLowerCase = (str) => {
    return str.split(/\s+/).join(' ')
        .toLowerCase();
}

module.exports = matchWithQuery;
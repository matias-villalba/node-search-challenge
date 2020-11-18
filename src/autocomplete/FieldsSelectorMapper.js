
class FieldsSelectorMapper {
    constructor(fieldsToSelect, selectAllFields) {
        this.fieldsToSelect = fieldsToSelect;
        this.selectAllFields = selectAllFields;
    }

    map(suggestionResponse) {
        if (this.selectAllFields) {
            return suggestionResponse;
        }
        suggestionResponse.result = suggestionResponse.result.map(suggestion => {
            return this.fieldsToSelect.reduce((fieldsToReturn, field) => {
                if (suggestion[field]) {
                    fieldsToReturn[field] = suggestion[field];
                }
                return fieldsToReturn;
            }, {});
        });
        return suggestionResponse;
    }

}

module.exports = FieldsSelectorMapper;
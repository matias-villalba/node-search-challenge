class Paginator {
    constructor(performSearchFunction) {
        this.performSearchFunction = performSearchFunction;
    }

    getItems(pageStart, count) {

        const items = this.performSearchFunction();

        let moreResults;
        let pageKey;

        const pageItems = items.slice(pageStart, pageStart + count + 1);

        if (pageItems.length > count) {
            pageItems.pop();
            moreResults = true;
            pageKey = count + pageStart
        } else {
            moreResults = false;
        }

        return {
            status: {
                moreResults,
                pageNext: pageKey
            },
            result: pageItems,
        };
    }


}
module.exports = Paginator;
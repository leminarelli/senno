let MongoUtils = {
    AGGREGATE: {
        "$match": (object) => {
            return {
                "$match": object
            }
        },
        "$group": (object) => {
            return {
                "$group": object
            }
        },
        "$project": (object) => {
            return {
                "$project": object
            }
        },
        "$lookup": (object) => {
            return {
                "$lookup": object
            }
        },
        "_$lookup": (_from, _localField, _foreignField, _as) => {
            return {
                "$lookup": {
                    'from': _from,
                    'localField': _localField,
                    'foreignField': _foreignField,
                    'as': _as
                }
            }
        }
    }
}

if(typeof module !== 'undefined') {
    module.exports = MongoUtils;
}
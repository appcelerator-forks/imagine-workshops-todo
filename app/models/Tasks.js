exports.definition = {
    config: {
        URL: 'http://localhost:8080/api/task',
        headers: {
            "Authorization": 'Basic ' + 
            Ti.Utils.base64encode('O62x7AE39M90NKZQDwNE1BfKkU2bf59R:'),
        },

        adapter: {
            type: 'restapi',
            collection_name: 'tasks',
            idAttribute: "id"
        },
        parentNode: function(data) {
            data = data || [];
            return data.tasks || data;
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};


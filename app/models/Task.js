exports.definition = {
    config: {
        URL: 'http://localhost:8080/api/task',
        headers: {
            "Authorization": 'Basic RnppQkMrZEduU0tkbzNjQ1o4RVhycVc4VGV5eWwzcEM6',
        },

        adapter: {
            type: 'restapi',
            collection_name: 'task',
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

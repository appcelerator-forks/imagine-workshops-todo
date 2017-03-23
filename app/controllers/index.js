Alloy.Collections.tasks.fetch();
/**
 *
 * @param {Object} e
 */
function handleRowClick(e) {

    Alloy.Collections.tasks.at(e.index).save({
        completed : !Alloy.Collections.tasks.at(e.index).get("completed")
    });
}

/**
 * Adds a task to our list
 */
function handleAdd() {
    if ($.taskName.value) {

        var model = Alloy.createModel("tasks");

        model.save({
            "description" : $.taskName.value,
            "completed" : false
        }, {
            success : function() {
                Alloy.Collections.tasks.add(model);
            }
        });

        $.taskName.value = "";

    } else {
        alert("Enter a description!");
    }
}

$.index.open();

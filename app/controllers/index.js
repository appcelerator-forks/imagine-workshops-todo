Alloy.Collections.task.fetch();

function handleRowClick(e) {
    //Alloy.Collections.task.at(e.index).destroy();
    Alloy.Collections.task.at(e.index).save({
        completed: !Alloy.Collections.task.at(e.index).get("completed")
    });
}

function handleAdd() {
    if ($.taskName.value) {

        var model = Alloy.createModel("task");

        model.save({
            "description": $.taskName.value,
            "completed": false
        }, {
            success: function() {
                Alloy.Collections.task.add(model);
            }
        });

        $.taskName.value = "";

    } else {
        alert("Enter a description!");
    }
}

$.index.open();

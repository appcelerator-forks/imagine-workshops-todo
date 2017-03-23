Alloy.Collections.task.fetch();

function handleRowClick(e) {
    Alloy.Collections.task.at(e.index).set("completed", !Alloy.Collections.task.at(e.index).get("completed"));
    //alert(Alloy.Collections.task.at(e.index).id)
    Alloy.Collections.task.at(e.index).save();
}

function handleAdd() {
    if ($.taskName.value) {

        var model = Alloy.createModel("task", {
            description: $.taskName.value,
            completed: false
        });

        model.save();

        //Alloy.Collections.task.add(model);

        $.taskName.value = "";

    } else {
        alert("Enter a description!");
    }
}

$.index.open();

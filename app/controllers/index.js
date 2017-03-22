var todo = {};

(function constructor() {

    todo.getTasks = function() {
        var xhr = Ti.Network.createHTTPClient({
            onload : function onLoad() {
                console.log("Loaded: " + this.status + ": " + this.responseText);
                var data = JSON.parse(this.responseText),
                isComplete = false;
                
                for(i=0;i<data.todos.length;i++){
                    var t = data.todos[i],
                    desc = t.description;
                    
                    if(t.competed){
                        isComplete = true;
                    }else{
                        isComplete = false;
                    }
                    
                    Alloy.Collections.tasks.add(Alloy.Globals.mock.createModel("task", {
                        description : desc,
                        completed : isComplete
                    }));
                   
                }
            },
            onerror : function onError() {
                alert("Errored: " + this.status + ": " + this.responseText);
            }
        });

        xhr.open("GET", "http://localhost:8080/api/todo");
        var authstr = 'Basic ' + Ti.Utils.base64encode('kY1KgGRdegPT5tkl1PM76nkBekwMUddp:');
        xhr.setRequestHeader("Authorization", authstr);
        xhr.send();
    };

    todo.addTask = function() {

        if ($.taskName.value) {

            var xhr = Ti.Network.createHTTPClient({
                onload : function onLoad() {
                    Alloy.Collections.tasks.add(Alloy.Globals.mock.createModel("task", {
                        description : $.taskName.value,
                        completed : false
                    }));

                    $.taskName.value = "";
                },
                onerror : function onError() {
                    alert("Errored: " + this.status + ": " + this.responseText);
                }
            });

            xhr.open("POST", "http://localhost:8080/api/todo");
            var authstr = 'Basic ' + Ti.Utils.base64encode('kY1KgGRdegPT5tkl1PM76nkBekwMUddp:');
            xhr.setRequestHeader("Authorization", authstr);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify({
                description : $.taskName.value,
                completed : false
            }));

        } else {
            alert("Enter a description!");
        }
    };
    
    todo.getTasks();

})();

Alloy.Collections.tasks.fetch();

/**
 *
 * @param {Object} e
 */
function handleRowClick(e) {
    Alloy.Collections.tasks.at(e.index).set("completed", !Alloy.Collections.tasks.at(e.index).get("completed"));
    Alloy.Collections.tasks.at(e.index).save();
}

/**
 * Adds a task to our list
 */
function handleAdd() {
    todo.addTask();
}

$.index.open();

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".change-complete").on("click", function (event) {
        var id = $(this).data("id");
        var newComplete = $(this).data("newcomplete");

        var newCompleteState = {
            complete: newComplete
        };

        // Send the PUT request.
        $.ajax("/api/todo/" + id, {
            type: "PUT",
            data: newCompleteState
        }).then( function () {
                console.log("changed complete to: ", newComplete);
                // Reload the page to get the updated list
                location.reload();
        });
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newTodo = {
            name: $("#todo").val().trim(),
            complete: $("[name=complete]:checked").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/todo", {
            type: "POST",
            data: newTask
        }).then(function () {
                console.log("created new task");
                // Reload the page to get the updated list
                location.reload();
        });
    });

    $(".delete-todo").on("click", function(event) {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/todo/" + id, {
            type: "DELETE"
        }).then(
            function() {
                console.log("deleted todo", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
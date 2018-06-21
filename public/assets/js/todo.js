        // Make sure we wait to attach our handlers until the DOM is fully loaded.
        $(function () {
            $(".change-complete").on("click", function (event) {
                const id = $(this).data("id");
                const newComplete = $(this).data("newcomplete");

                const newCompleteState = {
                    complete: newComplete
                };

                // Send the PUT request.
                $.ajax("/api/todo/" + id, {
                    type: "PUT",
                    data: newCompleteState
                }).then(
                    function () {
                        console.log("changed complete to: ", newComplete);
                        // Reload the page to get the updated list
                        location.reload();
                    }
                );
            });

            $(".create-form").on("submit", function (event) {
                // Make sure to preventDefault on a submit event.
                event.preventDefault();

                var newCat = {
                    name: $("#todo").val().trim(),
                    sleepy: $("[name=complete]:checked").val().trim()
                };

                // Send the POST request.
                $.ajax("/api/todo", {
                    type: "POST",
                    data: newTask
                }).then(
                    function () {
                        console.log("created new task");
                        // Reload the page to get the updated list
                        location.reload();
                    }
                );
            });
        });
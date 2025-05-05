<script>
    document.addEventListener('DOMContentLoaded', function() {
        // Toggle dark/light mode
        const toggleCheckbox = document.getElementById('toggle');
        toggleCheckbox.addEventListener('change', function() {
            // Implement dark mode toggle functionality
            if (this.checked) {
                document.body.classList.add('dark');
            } else {
                document.body.classList.remove('dark');
            }
        });

        // Add functionality to buttons
        const addSpendingButton = document.querySelector('button:contains("Add Spending")');
        addSpendingButton.addEventListener('click', function() {
            // Logic for adding spending
            alert('Add Spending button clicked!');
            // You can replace this alert with your actual logic
        });

        const addSavingButton = document.querySelector('button:contains("Add Saving")');
        addSavingButton.addEventListener('click', function() {
            // Logic for adding saving
            alert('Add Saving button clicked!');
            // You can replace this alert with your actual logic
        });

        const setGoalButton = document.querySelector('button:contains("Set Goal")');
        setGoalButton.addEventListener('click', function() {
            // Logic for setting a goal
            alert('Set Goal button clicked!');
            // You can replace this alert with your actual logic
        });
    });
</script>

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
    });
</script>

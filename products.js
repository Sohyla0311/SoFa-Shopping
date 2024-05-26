
document.addEventListener('DOMContentLoaded', function () {
  // Function to handle filter option clicks
  function handleFilterClick(event) {
    const filterType = event.target.dataset.filter;
    const filterValue = event.target.dataset.value;
    const parentRow = event.target.closest('.row');

    if (filterValue === 'all') {
      // Deselect all other options in the same row when "All" is clicked
      parentRow.querySelectorAll(`.filter-option[data-filter="${filterType}"]`).forEach(option => {
        option.classList.remove('selected');
      });
      event.target.classList.add('selected');
    } else {
      // Deselect "All" when another option is clicked
      parentRow.querySelector(`.filter-option[data-filter="${filterType}"][data-value="all"]`).classList.remove('selected');

      // Toggle the selected state of the clicked option
      event.target.classList.toggle('selected');

      // If no other options are selected, select "All"
      const selectedOptions = parentRow.querySelectorAll(`.filter-option.selected[data-filter="${filterType}"]`);
      if (selectedOptions.length === 0) {
        parentRow.querySelector(`.filter-option[data-filter="${filterType}"][data-value="all"]`).classList.add('selected');
      }
    }
  }

  // Attach click event listeners to filter options
  document.querySelectorAll('.filter-option').forEach(option => {
    option.addEventListener('click', handleFilterClick);
  });
});



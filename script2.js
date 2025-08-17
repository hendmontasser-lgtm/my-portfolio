// script.js
document.addEventListener('DOMContentLoaded', () => {
    const calendarDays = document.getElementById('calendar-days');
    const currentMonthElement = document.getElementById('current-month');
    const prevMonthButton = document.getElementById('prev-month');
    const nextMonthButton = document.getElementById('next-month');
    const eventModal = document.getElementById('event-modal');
    const eventTitleInput = document.getElementById('event-title');
    const saveEventButton = document.getElementById('save-event');
    const closeModalButton = document.getElementById('close-modal');

    let currentDate = new Date();
    let selectedDate = null;

    // Render the calendar
    function renderCalendar() {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        // Set the current month and year in the header
        currentMonthElement.textContent = `${new Intl.DateTimeFormat('en-US', { month: 'long' }).format(currentDate)} ${year}`;

        // Clear the calendar days
        calendarDays.innerHTML = '';

        // Get the first day of the month and the number of days in the month
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // Add empty cells for days before the first day of the month
        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement('div');
            calendarDays.appendChild(emptyCell);
        }

        // Add cells for each day of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const dayCell = document.createElement('div');
            dayCell.textContent = day;
            dayCell.addEventListener('click', () => {
                selectedDate = new Date(year, month, day);
                eventModal.style.display = 'flex';
            });
            calendarDays.appendChild(dayCell);
        }
    }

    // Event listeners for previous and next month buttons
    prevMonthButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    nextMonthButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });

    // Event listener for saving an event
    saveEventButton.addEventListener('click', () => {
        const eventTitle = eventTitleInput.value.trim();
        if (eventTitle && selectedDate) {
            alert(`Event "${eventTitle}" saved for ${selectedDate.toDateString()}`);
            eventTitleInput.value = '';
            eventModal.style.display = 'none';
        }
    });

    // Event listener for closing the modal
    closeModalButton.addEventListener('click', () => {
        eventModal.style.display = 'none';
    });

    // Initial render
    renderCalendar();
});
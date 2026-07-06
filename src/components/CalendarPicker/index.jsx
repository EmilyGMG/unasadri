import './CalendarPicker.css';

const weekDays = ['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB', 'DOM'];

function getDateKey(year, monthIndex, day) {
  const month = String(monthIndex + 1).padStart(2, '0');
  const dateDay = String(day).padStart(2, '0');

  return `${year}-${month}-${dateDay}`;
}

function CalendarPicker({ availability, selectedDate, onSelectDate }) {
  const year = 2016;
  const monthIndex = 5;

  const availableDates = new Set(availability.map((item) => item.date));

  const firstDay = new Date(year, monthIndex, 1);
  const totalDays = new Date(year, monthIndex + 1, 0).getDate();

  const startDay = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;

  const calendarDays = [
    ...Array(startDay).fill(null),
    ...Array.from({ length: totalDays }, (_, index) => index + 1),
  ];

  return (
    <div className="calendar">
      <div className="calendar__month">
        <button type="button" disabled>‹</button>
        <strong>Junho 2016</strong>
        <button type="button" disabled>›</button>
      </div>

      <div className="calendar__week">
        {weekDays.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>

      <div className="calendar__grid">
        {calendarDays.map((day, index) => {
          if (!day) {
            return <span key={`empty-${index}`} />;
          }

          const dateKey = getDateKey(year, monthIndex, day);
          const isAvailable = availableDates.has(dateKey);
          const isSelected = selectedDate === dateKey;

          return (
            <button
              key={dateKey}
              type="button"
              disabled={!isAvailable}
              className={`${isAvailable ? 'available' : ''} ${isSelected ? 'selected' : ''}`}
              onClick={() => onSelectDate(dateKey)}
            >
              {day}
            </button>
          );
        })}
      </div>

      <div className="calendar__legend">
        <span />
        Dias disponíveis
      </div>
    </div>
  );
}

export default CalendarPicker;
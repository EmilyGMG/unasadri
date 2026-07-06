import './TimeSlots.css';

function TimeSlots({ times, selectedTime, onSelectTime }) {
  return (
    <div className="time-slots">
      {times.map((time) => (
        <button
          key={time}
          type="button"
          className={selectedTime === time ? 'selected' : ''}
          onClick={() => onSelectTime(time)}
        >
          {time}
        </button>
      ))}
    </div>
  );
}

export default TimeSlots;
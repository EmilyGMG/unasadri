import './BookingSuccess.css';

function formatFullDate(dateKey) {
  const [year, , day] = dateKey.split('-');

  return `${day} de Junho de ${year} (Quarta)`;
}

function BookingSuccess({ selectedDate, selectedTime, whatsappUrl }) {
  return (
    <div className="booking-success">
      <div className="booking-success__icon">✓</div>

      <h1>Agendamento realizado!</h1>
      <p>Seu horário foi reservado com sucesso.</p>

      <div className="booking-success__summary">
        <h3>Resumo do agendamento</h3>

        <p>
          <span>▣</span>
          {formatFullDate(selectedDate)}
        </p>

        <p>
          <span>◴</span>
          {selectedTime}
        </p>
      </div>

      <p className="booking-success__text">
        Você será redirecionado para o WhatsApp...
      </p>

      <div className="booking-success__loader" />

      <a href={whatsappUrl} className="booking-success__whatsapp">
        ☏ Ir para o WhatsApp agora
      </a>

      <small>Redirecionando em 3 segundos...</small>
    </div>
  );
}

export default BookingSuccess;
import './ClientForm.css';

function formatFullDate(dateKey) {
  const [year, month, day] = dateKey.split('-');

  return `${day} de Junho de ${year} (Quarta)`;
}

function ClientForm({
  client,
  setClient,
  selectedDate,
  selectedTime,
  onSubmit,
}) {
  return (
    <form className="client-form" onSubmit={onSubmit}>
      <label>
        Nome completo
        <input
          type="text"
          placeholder="Digite seu nome"
          value={client.name}
          onChange={(event) => setClient({ ...client, name: event.target.value })}
          required
        />
      </label>

      <label>
        WhatsApp
        <div className="client-form__phone">
          <input
            type="tel"
            placeholder="(11) 99999-9999"
            value={client.whatsapp}
            onChange={(event) => setClient({ ...client, whatsapp: event.target.value })}
            required
          />

          <span>☏</span>
        </div>
      </label>

      <button className="primary-button" type="submit">
        Agendar
      </button>

      <div className="client-form__safe">
        <span>♙</span>
        <p>Seus dados estão seguros e serão usados apenas para agendamento.</p>
      </div>

      <div className="client-form__summary">
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
    </form>
  );
}

export default ClientForm;
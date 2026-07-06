import { useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import CalendarPicker from '../../components/CalendarPicker';
import TimeSlots from '../../components/TimeSlots';
import ClientForm from '../../components/ClientForm';
import BookingSuccess from '../../components/BookingSuccess';
import MobileFrame from '../../components/MobileFrame';

import { brand } from '../../data/brand';
import { mockAvailability } from '../../data/mockAvailability';

import './Booking.css';

function formatDateShort(dateKey) {
  const [, month, day] = dateKey.split('-');

  return `${day}/${month}`;
}

function getDayTimes(dateKey) {
  const day = mockAvailability.find((item) => item.date === dateKey);

  return day?.times || [];
}

function Booking() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const selectedService = searchParams.get('servico') || 'Manicure';

  const availability = useMemo(() => mockAvailability, []);

  const [step, setStep] = useState('day');
  const [selectedDate, setSelectedDate] = useState('2016-06-18');
  const [selectedTime, setSelectedTime] = useState('14:30');
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const [client, setClient] = useState({
    name: '',
    whatsapp: '',
  });

  const times = getDayTimes(selectedDate);

  function handleSelectDate(dateKey) {
    setSelectedDate(dateKey);

    const availableTimes = getDayTimes(dateKey);
    setSelectedTime(availableTimes[0] || '');
  }

  async function saveAppointmentMock(appointment) {
    console.log('Depois vamos salvar no Google Sheets:', appointment);
    return true;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!client.name.trim() || !client.whatsapp.trim()) {
      alert('Preencha nome e WhatsApp para continuar.');
      return;
    }

    const appointment = {
      service: selectedService,
      name: client.name,
      whatsapp: client.whatsapp,
      date: selectedDate,
      time: selectedTime,
      createdAt: new Date().toISOString(),
    };

    await saveAppointmentMock(appointment);

    const message = `Olá sou ${client.name} e quero marquei para o ${formatDateShort(selectedDate)} e ${selectedTime}`;

    const url = `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(message)}`;

    setWhatsappUrl(url);
    setStep('success');

    setTimeout(() => {
      window.location.href = url;
    }, 3000);
  }

  function handleBack() {
    if (step === 'day') {
      navigate('/servicos');
      return;
    }

    if (step === 'time') {
      setStep('day');
      return;
    }

    if (step === 'form') {
      setStep('time');
    }
  }

  return (
    <MobileFrame>
      <section className="booking-page page">
        {step !== 'success' && (
          <button type="button" className="back-button" onClick={handleBack}>
            ‹
          </button>
        )}

        {step === 'day' && (
          <>
            <header className="booking-page__title">
              <h1>Escolha o dia</h1>
              <p>Selecione um dia disponível</p>
            </header>

            <CalendarPicker
              availability={availability}
              selectedDate={selectedDate}
              onSelectDate={handleSelectDate}
            />

            <button
              type="button"
              className="primary-button"
              disabled={!selectedDate}
              onClick={() => setStep('time')}
            >
              Continuar
            </button>

            <div className="booking-page__info">
              Agendamentos disponíveis somente para o mês de Junho/2016.
            </div>
          </>
        )}

        {step === 'time' && (
          <>
            <header className="booking-page__title">
              <h1>Escolha o horário</h1>
              <p>Quarta, 18 de Junho</p>
            </header>

            <TimeSlots
              times={times}
              selectedTime={selectedTime}
              onSelectTime={setSelectedTime}
            />

            <button
              type="button"
              className="primary-button booking-page__time-button"
              disabled={!selectedTime}
              onClick={() => setStep('form')}
            >
              Continuar
            </button>

            <div className="booking-page__info">
              Agendamentos disponíveis somente para o mês de Junho/2016.
            </div>
          </>
        )}

        {step === 'form' && (
          <>
            <header className="booking-page__title">
              <h1>Seus dados</h1>
              <p>Preencha seus dados para concluir o agendamento</p>
            </header>

            <ClientForm
              client={client}
              setClient={setClient}
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              onSubmit={handleSubmit}
            />
          </>
        )}

        {step === 'success' && (
          <BookingSuccess
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            whatsappUrl={whatsappUrl}
          />
        )}
      </section>
    </MobileFrame>
  );
}

export default Booking;
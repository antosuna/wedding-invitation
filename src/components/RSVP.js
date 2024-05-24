import React, { useState } from 'react';
import { ref, update } from 'firebase/database';
import { db } from '../firebaseConfig';
import { sendEmailNotification } from '../emailService';
import { appendRowToSheet } from '../googleSheetsService';

const RSVP = ({ invitationId, guestNames }) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const handleResponse = async (accept) => {
    setLoading(true);
    setError(null);
    const dbRef = ref(db, `invitations/${invitationId}`);

    try {
      await update(dbRef, {
        responded: true,
        accepted: accept,
      });
      setResponse(accept);
      var templateParams = {
        names: guestNames,
        response: accept ? 'Sí 🥳' : 'No 😿'
      };
      await sendEmailNotification(templateParams, accept); // Enviar email de notificación
      await appendRowToSheet({'Nombre': guestNames, 'Respuesta': accept ? 'Yes' : 'No', 'Fecha': new Date().toUTCString()}); // Actualizar Google Sheets
    } catch (error) {
      console.error("Error updating response:", error);
      setError("Hubo un error al enviar tu respuesta. Por favor, intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rsvp">
      <h2>RSVP</h2>
      <p>¿Podrás asistir a nuestra boda, {guestNames}?</p>
      {response === null ? (
        <div>
          <button onClick={() => handleResponse(true)} disabled={loading}>Sí</button>
          <button onClick={() => handleResponse(false)} disabled={loading}>No</button>
        </div>
      ) : (
        <p>Gracias por tu respuesta: {response ? '¡Nos vemos en la boda!' : 'Lamentamos que no puedas asistir.'}</p>
      )}
      {loading && <p>Enviando respuesta...</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default RSVP;

import React from 'react';

function ParticipantForm({ onChangeParticipants }) {
  return (
    <div className="ParticipantForm">
      <label htmlFor="participants">Participants: </label>
      <textarea onChange={onChangeParticipants} id="participants" placeholder="Input 8 participants, comma-separated"></textarea>
    </div>
  );
}

export default ParticipantForm;

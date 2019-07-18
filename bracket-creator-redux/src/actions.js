// action types
export const SET_PARTICIPANTS = 'SET_PARTICIPANTS'
export const SET_ROUNDS = 'SET_ROUNDS'

// action creators
export const setParticipants = (participants) => ({
  type: SET_PARTICIPANTS,
  participants
})

export const setRounds = (rounds) => ({
  type: SET_ROUNDS,
  rounds
})

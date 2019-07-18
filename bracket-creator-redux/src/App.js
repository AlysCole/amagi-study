import React from 'react';
import ParticipantForm from './ParticipantForm';
import Bracket from './Bracket';
import { connect } from 'react-redux';
import { setParticipants, setRounds } from './actions';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rounds: this.generateRounds(props.participants)
    };
  }

  handleParticipantChange = (event) => {
    const participants = event.target.value.split(',');
    this.props.setParticipants(participants);
  }

  /*
  initiateRounds = (participants) => {
    let roundOne = [];
    for (let i = 0; i < participants.length; i += 2) {
      roundOne.push([i, i + 1])
    }
    return [roundOne]
  }
  */

  onShuffleParticipants = () => {
    // use the fisher-yates algorithm on a cloned array to shuffle participants
    let participants = [...this.props.participants];

    // start from end of the array
    for (let i = participants.length - 1; i >= 0; i--) {
      // get a random number between (including) i and 0
      let j = Math.floor(Math.random() * (i + 1));
      // destructure and swap the elements
      [participants[j], participants[i]] = [participants[i], participants[j]];
    }

    this.props.setParticipants(participants);
  }

  onGenerateWinners = () => {
    this.setState({
      rounds: this.generateRounds(this.props.participants)
    });
  }

  nestIntoPairs = (arr) => {
    return arr.reduce( (acc, cur, idx) => {
      if (idx % 2 === 0) return [...acc, [cur, arr[idx + 1]]];
      return acc;
    }, []);
  }
  
  generateRounds = (participants) => {
    let rounds = [[], [], []];
    
    // initiate round 1
    rounds[0] = this.nestIntoPairs(participants);
    
    // Loop through remaining rounds
    for (let i = 1; i < 3; i++) {
      // Generate winners from the previous round and push them onto the next round
      rounds[i] = this.nestIntoPairs(this.generateWinners(rounds[i - 1]));
    }
    
    return rounds;
  }
  
  generateWinners = (round) => {
    // map through and pick out a winner from each game
    return round.map((game) => {
      return game[Math.round(Math.random())];
    });
  }

  render() {
    return (
      <div className="App">
        <ParticipantForm onChangeParticipants={this.handleParticipantChange} />
        <input type="button" value="Shuffle Participants" onClick={this.onShuffleParticipants} />
        <input type="button" value="Generate Winners" onClick={this.onGenerateWinners} />
        <Bracket participants={this.props.participants} rounds={this.state.rounds}  />
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => ({
  participants: state.participants,
  rounds: state.rounds
});

export default connect(
  mapStateToProps,
  { setParticipants, setRounds }
)(App);

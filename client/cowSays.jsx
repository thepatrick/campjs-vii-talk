import React from 'react';
import { Radio, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export function CowSaysDisplay({ value, mode, onChangeText, onSpeakClick, onSetSay, onSetThink, cowSays }) {
  return (
    <div>
      <form role="form">
        <FormGroup controlId="formControlsText">
          <ControlLabel>Phrase</ControlLabel>
          <FormControl type="text" placeholder="Enter text" value={value} onChange={onChangeText} />
        </FormGroup>

        <FormGroup>
          <Radio inline checked={ mode === 'speak' } onChange={ onSetSay }>
            Say
          </Radio>

          <Radio inline checked={ mode === 'think' } onChange={ onSetThink }>
            Think
          </Radio>
        </FormGroup>

        <button className="btn btn-primary" onClick={ onSpeakClick }>{mode}!</button>
      </form>

      <pre>{cowSays}</pre>
    </div>
  );
}

export default class CowSays extends React.Component {
  constructor() {
    super();
    this.state = { value: 'Hello campjs vii!', mode: 'speak', cowSays: undefined };
  }
  onChangeText(event) {
    this.setState({ value: event.target.value });
  }
  onChangeMode(mode) {
    console.log('set mode', mode);
    this.setState({ mode });
  }
  onSpeakClick(e) {
    e.preventDefault();
    const mode = encodeURIComponent(this.state.mode);
    const value = encodeURIComponent(this.state.value);
    this.setState({ cowSays: 'Loading...' });
    fetch(`/cow?mode=${mode}&thought=${value}`)
      .then(data => data.text())
      .then(cowSays => this.setState({ cowSays }))
      .catch(err => this.setState({ cowSays: `Sorry, no cowsay for you: ${err.message}` }));

  }
  render() {
    return (
      <CowSaysDisplay value={this.state.value}
                    cowSays={this.state.cowSays}
                       mode={this.state.mode}
               onChangeText={this.onChangeText.bind(this)}
                   onSetSay={this.onChangeMode.bind(this, 'speak')}
                 onSetThink={this.onChangeMode.bind(this, 'think')}
               onSpeakClick={this.onSpeakClick.bind(this)}/>
    );
  }
}

/* global describe, it */

import React from 'react';
import { expect } from 'chai';

import { shallow, mount, render } from 'enzyme';

import CowSays, { CowSaysDisplay } from '../cowSays.jsx';

describe('<CowSaysDisplay />', function () {
  it('has a text field', function () {
    const wrapper = mount(<CowSaysDisplay value="test value" />);
    expect(wrapper.find('input[type="text"]')).to.have.length(1);
  });

  it('calls the onSpeakClick when the speak button is clicked', function () {
    const onSpeakClick = sinon.spy();
    const wrapper = shallow(<CowSaysDisplay value="Click" mode="speak" onSpeakClick={onSpeakClick} />);
    wrapper.find('button').simulate('click');
    expect(onSpeakClick.calledOnce).to.be.true;
  });

  it('renders the cow', function () {
    const cowSays = ` ___________________
< Hello campjs vii! >
-------------------
      \\   ^__^
       \\  (oo)\\_______
          (__)\\       )\\/\\
              ||----w |
              ||     ||`;
    const wrapper = shallow(<CowSaysDisplay cowSays={cowSays} />);
    expect(wrapper.find('pre').contains(cowSays)).to.be.true;
  });
});

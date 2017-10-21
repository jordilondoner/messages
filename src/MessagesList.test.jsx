import React from 'react';
import renderer from 'react-test-renderer';
import MessagesList from './MessagesList';
const messages = require('./messages.json');
const users = require('./members.json');

it('renders correctly', () => {
  const tree = renderer.create(
    <MessagesList
      messages={{isPending: false, messages}}
      users={{isPending: false, users}}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

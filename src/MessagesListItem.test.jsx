import React from 'react';
import renderer from 'react-test-renderer';
import MessagesListItem from './MessagesListItem';
const messages = require('./messages.json');
const users = require('./members.json');

it('renders correctly', () => {
  const tree = renderer.create(
    <MessagesListItem
      message={messages[0]}
      users={{isPending: false, users}}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

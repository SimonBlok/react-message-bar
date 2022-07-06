# React Message Bar Component

![npm](https://img.shields.io/npm/v/react-message-bar)

This package gives a single component which shows a message/announcement bar on a page. A dismiss button is shown and
clickable to dismiss the message, which hides the bar.

LocalStorage is used to hold the 'dismiss-state'.
The component can receive an `announcement-id` prop to set a unique
message, which overrides the previous (dismissed) message.

## Install

```sh
npm i react-message-bar
```

## Usage

Import <code>react-message-bar</code>

```js
import ReactMessageBar from 'react-message-bar'
```

Use the component in your app
```js
<ReactMessageBar>Hello, welcome to this announcement!</ReactMessageBar>
```

Or, to override dismissed bars

```js
<ReactMessageBar messageId="message-2">Hello, welcome to this NEW announcement!</ReactMessageBar>
```

## Props

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>messageId</code></td>
    <td><code>String</code></td>
    <td>Set whether you want to make sure your message is shown to all users, including which have dismissed the bar.</td>
  </tr>
</table>

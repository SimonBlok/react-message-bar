# React Message Bar Component

![npm](https://img.shields.io/npm/v/react-message-bar)

This package provides a single component which shows a message/announcement bar on a page. A dismiss button is shown and
clickable to closes the message for the current and further sessions.

LocalStorage is used to hold the 'dismiss-state'.
The component can receive an `announcement-id` prop to set a new
message, which overrides the previous (dismissed) message.

[Demo](https://codesandbox.io/s/react-message-bar-demo-vnvboz?file=/src/App.js)


## Install

```sh
npm i react-message-bar
```

## Usage

Import <code>react-message-bar</code>

```js
import ReactMessageBar from 'react-message-bar'
```

Add default styling (optional)
```js
import 'react-message-bar/lib/styles/default.css'
```

Use the component in your app

```js
<ReactMessageBar>Hello, welcome to this announcement!</ReactMessageBar>
```

Or, to override dismissed bars

```js
<ReactMessageBar messageId="message-2">Hello, welcome to this NEW announcement!</ReactMessageBar>
```

## Styling
Default styling is provided via CSS. All elements have classnames to apply your own styling.

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

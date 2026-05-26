# Passing Refs to Child Components in React

Sometimes a parent component needs direct access to a DOM element inside a child — for example, to call `.focus()` on an input. In React 19, you can do this by accepting `ref` as a regular prop.

## The Problem

By default, components don't expose their DOM nodes to parent components. If you try to attach a ref to a custom component, the component won't forward it to the underlying DOM node automatically.

## The Solution: Accept `ref` as a prop

Add `ref` to the list of props your component accepts and pass it to the DOM node you want to expose:

```jsx
function FancyInput({ ref, ...props }) {
  return <input ref={ref} className="fancy-input" {...props} />;
}
```

The parent can now attach a ref and call DOM methods directly:

```jsx
import { useRef } from 'react';
import FancyInput from './FancyInput';

export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <FancyInput ref={inputRef} placeholder="Type here..." />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}
```

## How It Works

- `ref` is a built-in prop in React 19 — no wrapper or special API needed
- Destructure `ref` from props and pass it to the DOM element you want to expose
- `useRef(null)` initializes the ref with `null` until the component mounts

This pattern works any time you need a parent to imperatively control a DOM node inside a child component.

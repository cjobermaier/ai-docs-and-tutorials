# Forwarding Refs to Child Components in React

Sometimes a parent component needs direct access to a DOM element inside a child — for example, to call `.focus()` on an input. In React 19, you can pass `ref` as a regular prop — no wrapper needed.

## The Solution: `ref` as a Prop

Pass `ref` directly in your child component's props, just like any other prop:

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

- `ref` is now a regular prop — destructure it from props and attach it to the DOM element you want to expose
- `useRef(null)` initializes the ref with `null` until the component mounts
- No import required — unlike `forwardRef`, there is no wrapper function

> **Upgrading from React 18?** The old `forwardRef` wrapper is deprecated in React 19. Replace `forwardRef(function MyComp(props, ref) { ... })` with a plain function that accepts `ref` in its props.

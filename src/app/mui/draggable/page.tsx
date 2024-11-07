'use client';
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

export default function MyComponent(): JSX.Element {
  // We will use React useRef hook to reference the wrapping div:
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:

  return (
    <div
      className="flex max-w-xl space-x-3 overflow-x-scroll scrollbar-hide"
      {...events}
      ref={ref} // add reference and events to the wrapping div
    >
      <div className="flex-none w-52 h-32 bg-red-200" />
      <div className="flex-none w-52 h-32 bg-red-200" />
      <div className="flex-none w-52 h-32 bg-red-200" />
      <div className="flex-none w-52 h-32 bg-red-200" />
      <div className="flex-none w-52 h-32 bg-red-200" />
      <div className="flex-none w-52 h-32 bg-red-200" />
      <div className="flex-none w-52 h-32 bg-red-200" />
      <div className="flex-none w-52 h-32 bg-red-200" />
      <div className="flex-none w-52 h-32 bg-red-200" />
    </div>
  );
}
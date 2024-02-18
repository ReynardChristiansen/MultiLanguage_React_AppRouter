"use client"

export default function Alertmessage({ message }: { message: string }): JSX.Element {

  return (
    <div>
        <p>{message}</p>
    </div>
  );
}

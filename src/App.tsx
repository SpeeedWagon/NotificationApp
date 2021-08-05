import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { LocalNotifications } from "@capacitor/local-notifications";

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function App() {
  const [count, setCount] = useState(0);
  LocalNotifications.schedule({
    notifications: [
      {
        title: "Repeating notification",
        body: "Hello world",
        id: 1,
        schedule: {
          // at: new Date(Date.now() + 1000 * 1),

          repeats: true,
          every: "minute",
          allowWhileIdle: true,
        },
        sound: "soundNotification.wav",
        attachments: undefined,
        actionTypeId: "",

        extra: null,
      },
    ],
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Simple capacitor notification app</p>
        <p>
          <button
            type="button"
            onClick={async () => {
              await LocalNotifications.schedule({
                notifications: [
                  {
                    title: "On click Notification",
                    body: "Hello world!",
                    id: 2,
                    schedule: { at: new Date(Date.now() + 50 * 1) },
                  },
                ],
              });
            }}
          >
            Notify now!
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;

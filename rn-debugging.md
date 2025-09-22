How does Metro help in debugging a React Native app?

- Live realoading as metro watches sources files, if you hcange code it will rebuild and push changed moduels to the app.
- Implementation of Developer menu provided need features like reload app, toggle debug JS.
- Console and logging from the app to the metro terminal window.
- It makes bridges that connect the apps JS runtime to external debuggers like creat native debugger and flipper.
- It feeds JS errors into react native overlay systems.

Flipper features

- Network inspection to see fetch/XHR call.
- Logs viewer for console.logs errors and warining.
- React Devtools integration so you can inspect the react native component tree.
- Crash Reports.
- Can inspect the native UI heirachy using layout inspector.

Inspecting network reacts in react native

- Can be doen via flipper if running expo in a custom development build otherwise you can also use react native debuger.
  React native debugger allows you to see the fetch/XHR requests and response. Fligger allows your to replay requests without relaunching the screen.

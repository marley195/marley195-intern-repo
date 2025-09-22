Redux-Persist.

- Saves the redux store to local store and allows for the applicationt automatically rehydrates the state when the application restarts. This provides the user with a better experience as they can resume their session where they left off if if the app is closed/opened.

react-native-background-fetch

- The big difference compared to a normal timer is when tasks are actually allowed to run. Normal timers only really work while your app is in the foreground, whereas background fetch can run whether the app is in the foreground, running in the background, or even completely terminated letting it handle tasks in all of those situations.

Auth0 instead of handling authentication manually

- Auth0 provides focusbear with an out of the box solution to authentication which can be extremely complex to build and implement, by doing this focusbear can focus their time on building the platform.

PostHog Improvements to UI

- PostHog offers tools and analytical data to understand how users interact with the application. This provides Focus Bear with the capability to pinpoint frustration points within the app, while also giving a broader overview of how users actually engage with it and where they may drop off.

Sentry Vs PostHog

- Sentry purpose is to track crashes erros and performance bottlenecks in the application to improve turnaround of bug detection and technical issue resolutions whereas PostHog tracks how the users inteacts with the application and helps improve the user expereince by removing friction points.

react-native-localize + interacting with i18next

- react-native-localize works by acting as a bridge to native functionaility exposing the devices locale settings such as their preferred language, country code, etc. Why these two libraries complement each other is becausse i18next can use the preferred launguage gathered by localize to apply the correct translation.

replacing a library.

- Auth0 while a full and complete library tends to blow out costwise when applications grow. An alternative would be superbase Auth which provides the required functionability needed to meet the current authenication obligations less it does nto have enterprise grade options

Redux-Persist.

- Saves the redux store to local store and allows for the applicationt automatically rehydrates the state when the application restarts. This provides the user with a better experience as they can resume their session where they left off if if the app is closed/opened. This is useful to Focusbear as it allow the user to close the app while not losing their current state for example if the users is in a focus session but taps out of the app Focusbear will not reset their session time even when re-entering the app.

react-native-background-fetch

- The big difference compared to a normal timer is when tasks are actually allowed to run. Normal timers only really work while your app is in the foreground, whereas background fetch can run whether the app is in the foreground, running in the background, or even completely terminated letting it handle tasks in all of those situations. Focusbear uses this in their code base to track things like session timer to ensure that even when the app is not open the users session timer will still tick down.

Auth0 instead of handling authentication manually

- Auth0 provides focusbear with an out of the box solution to be able to hanlde users login and verification, this is important as users need to to be tracked across mutiple applications including Mac, Windows, IOS and andriod. FocusBear uses JWT's implemented by Auth0 for token based authentication across all these applications.

PostHog Improvements to UI

- PostHog offers tools and analytical data to understand how users interact with the application. This provides Focus Bear with the capability to pinpoint frustration points within the app, while also giving a broader overview of how users actually engage with it and where they may drop off. Posthog has been used with focusbear to help users raise issues/bugs within the application, if a users logs an issues the Posthog output gathers recent event data prior to the issues which it then groups with the lodged issue for the development team to then use for debugging and issue recreation.

Sentry Vs PostHog

- Sentry and PostHog work together but serve different purposes. Sentry helps Focus Bear track crashes, performance issues, and bottlenecks within their applications, while PostHog is primarily used to analyze how users interact with the app providing summaries and insights into user behavior, engagement patterns, and feature usage. PostHog has ben benfifical to FocusBear as it allow them to see insights into user beheaviours and allows reports of this when they log issues in the applcation

react-native-localize + interacting with i18next

- react-native-localize works by acting as a bridge to native functionaility exposing the devices locale settings such as their preferred language, country code, etc. Why these two libraries complement each other is becausse i18next can use the preferred launguage gathered by localize to apply the correct translation.

replacing a library.

- Auth0 while a full and complete library tends to blow out costwise when applications grow. An alternative would be superbase Auth which provides the required functionability needed to meet the current authenication obligations less it does nto have enterprise grade options

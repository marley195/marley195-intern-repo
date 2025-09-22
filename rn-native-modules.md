Why are native modules needed in React Native app

- Native modules provide bridges for our react native app when javscript alone cannot access certain OS specific features. This is mainly used to gain access to platform specific API/s, for performance critical opeations that may be to slow if implemented only in JS and unify cross-platform APIS

React Native communication with native code.

- For our Javascript side and Native side to communcation they require bridges to talk this is beacuse they live on different threads and environments. For new archtiecture this comes is done using the JavaScript interface (JSI) model which implements TurboModules which provides a way to auto-generate bindings between JS and native methods. Fabric is also used as the new render that uses JSI to directly manipulate OU components.

Challenges of maintaining native bridges.

- Maintaing native bridges can be difficult due to many factors but primarily include having to keep up with platform changes mainly of native platforms, as they evolve the bridges need to be checked to ensure they remain compatiable with the latest platform features and requirements. Bridges are also notoriously hard to debug as they can span both the javascript and native layers and often you cannot get a picture of both layers.

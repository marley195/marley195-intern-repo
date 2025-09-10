differences between stack, tab and drawer

- Stack: Works similar to a web browser history where each screen sits on top of a history stack. when you open a new screen it will move that to the top of the stack. Stack is implemented for things link details screens, forms or things that require a sequential flow.
- Tabs: present a set of tabs normally at the top or bottom of a screen, these tabs allow users to swap between different sections of an application. this is mainly used for when users need to switch between main sections of an application
- Drawers: this is a panel which generally slides out from the left of the screen via a gesture. This is generally used for things like settings help ect.

Screen transitions

- Screen transitions are handled via the navigators, each navigation stack, tab and drawer have their default tranisitions but can be customized by setting properties within the screenOptions props of a navigator or the options prop of individual stack.screen components.

Deep linking in react native.

- To implement deep linking you need to do the following.
- Create and configure URL schemes, for andriod this would be andriod app links and for IOS it would be IOS universal links.
- Add Schemes to setup files for Expo.

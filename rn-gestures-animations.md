animated vs react-native-reanimated

- React-native-reanimated runs on the UI thread via worklets and shared values allowing it to have better performance, it is generally used for complex animations and provides greater control over animation behaivor as it has more lower level control and advanced features where as animated runs on the JS thread which can have some performance issues but is more tailered towards basic straightforward animations. The trade-off with using reanimated over animated is that it is has a higher learning curve and can be more prone to needing reconfiguring as its a 3rd part library.

improve gesture performance with react-native-gesture-handler

- It does this by removing gestures off the JS thread and onto the UI thread, this alows the removal/reduction of the touchmove events across the JS bridge ensuring improved latency and reduces high frequency updates.

gestures instead of buttons

- Gestures work great for when the user needs to interact directly with the content on the screen. An example of this would be to reorder a list or pinching to zoom in on a photo. If a gesture provides the user with a fast and natural way to interact with the content on the screen then its generally best.

interactionManager.runAfterInteraction

- This lets you defer tasks that are non-urgent and/or heavy work until after ongoing animations, gestures and navigations transitions by prevent JS work from competing with with.

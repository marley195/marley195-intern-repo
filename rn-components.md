View vs div

- View rendered using native UI components (andriod/IOS) where as div is interpreted by web browser.
- View has flexbox as default layout system vs div which is box model.
- View uses react native styling vs div which uses css.

performance improvemnet using StyleSheet.create()

- using StyleSheet.create() the style object is only created once during applications initalization or component mountingand allows for them to be reused.
- It allows react native to internally optimize the style objectives for faster processing on the native side.

Reason React Native doesnt use className

- Because react native doesnt run in a browser and therefore have no dom or CSS files it doesn't require it, it alternatively renders native views and styles them with JS objects using style props and stylesheet.create().

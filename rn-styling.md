Reasoning for React Natvice camelCase

- Because react native styles are javascript object it cannot use hyphens like css properties as they are not a valid character in javascript object keys. changing from kebab-case to camelCase avoids the syntax issues and also ensures it aligns with javascript practices

Benefits of StyleSheet.create over inline style.

- performance benefits: using stylesheets creates static style objects that are only processed once and can be referred to it by its ID.
- Removing the styles away from render function can make the code easier to read and understand.
- Centralizing styles in a stylesheet makes it easier to refactor.
- as stylesheets create an object that can be referred to by its ID it can then be reused across mutiple components reducing code duplication.

handling different screen sizes in React Native.

- To get the width and height of a window you can use useWindowsDeimensions() from react-native this allows you to get the devices width and height which can then be provided to a stylesheet to determine how you want your container to be displayed.

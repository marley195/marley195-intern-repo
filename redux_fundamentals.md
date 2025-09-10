Benefits of using selector

- Decouples components from store as components depend on selectors not state shape.
- Makes dervied data faster as comutes are done in selectors rather than components
- reduces unnecessary re-renders by useing useSelector so only re-renders when a selected value changes

when to use reduce instead of useState

- If you need to manage global application state generally required when amny components use the same data across different parts of application.
- medium - large applications that use significant amounts of data.
- if predictable state changes are needed to help with debugging or understanding application behaivour.

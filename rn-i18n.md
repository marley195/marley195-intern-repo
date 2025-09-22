How does react-i18next handle translations?

- it provivdes tools and components taht integrate with the i18next internationalization framework. The main things to do are configruation of the i18n instance including translation resources, default languages and fallback languages.
- Translations resources are stored typically in JSOn files which contain translations strings using translation key maps that correspond to the translation in that language.
- To access the translations the hook useTranslation and component trans are used.
- Language switching is llaowed for dynamic launauge siwthcing. the i18n ojbect provides changeLanguage function.

Challenges.

- Devices report report variants of languages like fr-FR or en-AU.
- text expansion can cause issues as translated strings can be 20%+ longer.
- you need to make sure fonts & glyph coverage is met for all characters.
- Need to make sure the app picks the persisted language before rending UI to pervent a flash in wrong language.

How to test

- Maunal testing for things like language switching, local-specific formatting, UI layout, right to left languages and fallback languages.
- automate testing with tools like jest to do snapshot testing and unit testing for individiaul components.
- testing the application on various devices androd, iphone and different models to ensure conistent localisation across platforms.

benefits of deep linking

- Deep linkin provides many benefits including creating a streamlined expereince for the user allowing them to reach their required content quicker, allowing them to share URL's that take users directly to the specified content. Doing this ensure the user will be more engaged and is more likely to interact with the app.

Handling deep linking in react native

- In react native with expo deep linking works by mapping external URLS or universal links for IOS/app links on Andriod to screens in the navigation stack. To do this you need to define the URL scheme, configure react navigation with linking prop in the navigation container. The benefit of Expo deep linking over bare react native is that expo manages most of the native configruations for you.

Challenges

- inconsistency across platforms with implementation as IOS and andriod can vary.
- pathing to screen mismatches
- Broke or legacy links.
- Configuring universal links properly across all platforms.
- Security vulnerabilities can be created if weak implementations are made.
- Data transimission can fail to transmit on deep links causing the content to not be personalised.

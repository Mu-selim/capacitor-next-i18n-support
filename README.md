## Capacitor + Next.js

This is a simple example of how to use Capacitor with Next.js. It demonstrates how to set up a Next.js application that can be built and run as a mobile app using Capacitor.

<img width="1512" height="892" alt="Screenshot 2025-07-25 at 1 14 32 AM" src="https://github.com/user-attachments/assets/7b608d7f-365c-4b44-b086-5f306d94e437" />


### How to run the example

1. install dependencies

```bash
pnpm install
```

2. build the Next.js app

```bash
pnpm static
```

3. sync the Capacitor project

```bash
npx cap sync
```

4. run the app on a mobile device or emulator

```bash
npx cap run ios
npx cap run android
```

4. open the app in a web browser

```bash
pnpm dev
```

### Notes

- If the `Android` build failed, the common reason is that you need java 21.
- This example uses Capacitor to create a mobile app from a Next.js application.
- The Next.js app is built as a static site and then served by Capacitor.
- The `pnpm static` command builds the Next.js app and outputs it to the `out` directory.
- The example shows case of internationalization (i18n) with Next.js, where the app supports multiple languages.
- the example supports both client and server components, allowing for a rich user experience.

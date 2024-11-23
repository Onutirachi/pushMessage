<p align="center">
  <a href="https://onutirachi.github.io/pushMessage/"><img src="https://github.com/user-attachments/assets/c2cc4a3a-eaaf-482d-91b6-67ddd9eb67df" width="50%" height="50%"></a>
</p>
<br>

<h2>pushMessage</h2>
<p><strong>pushMessage</strong> is a JavaScript library designed to create on-screen notifications for web applications and websites. It supports both simple and advanced use cases, making it easy to create all kinds of notifications.</p>

<a href="https://onutirachi.github.io/pushMessage/"><img src="https://github.com/user-attachments/assets/fed8ccdb-1cf9-4c97-8dcb-daf8f3ba42a1"></a>

<h2>Customization</h2>
<p>Fully customize your notifications by adjusting size, background, title, text, icons, images, and more. With <strong>pushMessage</strong>, the possibilities are endless! Display information, errors, successes, warnings, loading indicators, texts, images, and more.</p>

<h2>Features</h2>
<ul>
  <li>Send dynamic push notifications.</li>
  <li>Display the notification time on each push.</li>
  <li>Configure behavior: persistent notifications, user-closed only, and more.</li>
  <li>Create notifications that follow the mouse cursor on hover.</li>
  <li>Fully customizable.</li>
  <li>Written entirely in JavaScript with no external libraries or frameworks required.</li>
  <li>Lightweight and efficient.</li>
  <li>Well-documented and easy to use.</li>
  <li>Compatible with all major desktop browsers.</li>
  <li>Fully supported on all major mobile browsers.</li>
</ul>

<h1>Getting Started</h1>

<h2>Import script</h2>
<p>Download <code>pushMessage.js</code> to use locally on your page:</p>

```html
<html>
    <head>
        <title>pushMessage</title>
        <!-- Simple import JS Script here -->
        <!-- Use defer to load it after page load -->
        <script src="pushMessage.js" defer></script>

        <!-- Import pushMessage before use it in other scripts -->
        <script src="OtherScript.js" defer></script>
    </head>
    <body>
        <!-- Your content here -->
    </body>
</html>
```

<p>Or import <strong>pushMessage</strong> using CDN at the end of your page, or use the <code>defer</code> attribute to load it in the <code>&lt;head&gt;</code> section:</p>

```html
<!-- Import the script at the end of the body -->
<script src="https://cdn.jsdelivr.net/gh/Onutirachi/pushMessage@main/src/pushMessage.js"></script>

<!-- Or, load the script in the head with defer -->
<script src="https://cdn.jsdelivr.net/gh/Onutirachi/pushMessage@main/src/pushMessage.js" defer></script>
```

<h2>Basic Usage</h2>
<p>Create a <code>pushMessage</code> instance to use the <code>push</code> method:</p>

```javascript
// Create instance
const message = new PushMessage({});

// Use instance to push messages
message.push("Hello, world!");
```

<h2>Complementations</h2>
<p>Set title and icon for your push message like this:</p>

```javascript
// Push Message with title
message.push("Hello, World!", { title: "Push Message" });

// Push Message with title and icon
message.push("Hello, World!", {
    title: "Push Message",
    icon: "success",
});
```

<h2>Initialization</h2>
<p>You can set initial settings for your <code>pushMessage</code> instance:</p>

```javascript
const message = new PushMessage({
    gap: 20,
    anchor: "bottom",
    position: "right",
    elementToAppend: "false", // See more on Advanced Usage
    custom: {
        // Customize here
        // background: "white",
        // titleFont: "Helvetica",
        // .....
        // See details in Customize >> Parameters section
    },
    customIcons: {
        example: "icons/example.png",
        // Valid object key and path to icon.
        // You can use the path directly on push icon src as well.

        // You can use Base64 here too
        // exampleBase64: "data:image/png;base64,iVBORw0KGg...",

        // There are 5 default icons ready to use:
        // info, success, warning, error, loading
    },
});
```

<h3>Parameters</h3>
<p>Any of these parameters is valid inside the <code>PushMessage({ })</code> object:</p>

<table>
  <thead>
    <tr>
      <th><strong>Configuration</strong></th>
      <th><strong>Description</strong></th>
      <th><strong>Default Value</strong></th>
      <th><strong>Valid Values</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>gap</code></td>
      <td>Gap between pushes in pixels</td>
      <td><code>20</code></td>
      <td>Any positive integer</td>
    </tr>
    <tr>
      <td><code>anchor</code></td>
      <td>Anchor to define where pushes will come from</td>
      <td><code>bottom</code></td>
      <td><code>top</code>, <code>bottom</code></td>
    </tr>
    <tr>
      <td><code>position</code></td>
      <td>Align your pushes relative to anchor</td>
      <td><code>right</code></td>
      <td><code>left</code>, <code>center</code>, <code>right</code></td>
    </tr>
    <tr>
      <td><code>elementToAppend</code></td>
      <td>DOM element where pushes will be appended. If nothing is defined, pushes will be appended to body.</td>
      <td><code>false</code></td>
      <td>Any valid DOM element</td>
    </tr>
    <tr>
      <td><code>custom</code></td>
      <td>Customize default style properties and other attributes</td>
      <td><code>{}</code> *empty object*</td>
      <td>Parameters specified in the Customization section. If nothing is defined, default values will be used for all properties.</td>
    </tr>
    <tr>
      <td><code>customIcons</code></td>
      <td>Attribute a name to your icons' path here. There are 5 default icons (info, success, warning, error, loading)</td>
      <td><code>{}</code> *empty object*</td>
      <td><code>iconName: "icon/path.png"</code></td>
    </tr>
  </tbody>
</table>

<h3>License</h3>
<p>MIT License</p>
<a href="https://www.buymeacoffee.com/carloslandini" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important; width: 217px !important" /></a>

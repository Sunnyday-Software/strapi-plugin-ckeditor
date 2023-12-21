# Custom CKEditor 5 Field for Strapi (TypeScript and TailwindCSS)

## Overview

This is a custom implementation of the CKEditor 5 field for Strapi, tailored for use with TypeScript and optionally with TailwindCSS. This plugin is developed for Strapi versions 4.4 and above, allowing for the integration of CKEditor with additional TypeScript support.

This plugin is a community modification based on the official CKEditor team's work.

## Important Note

For managing dependencies in Strapi projects, we strongly recommend using `yarn` instead of `npm` to avoid common issues such as compiling or build errors.

## Installation

The plugin should be treated as an extension of Strapi, not as a dependency of the package. 
It is hosted on GitHub at `github.com/Sunnyday-Software/strapi/plugin/ckeditor`.

To integrate the plugin into your Strapi project, follow these steps:

Clone the plugin repository into your Strapi project:

```bash
git clone https://github.com/Sunnyday-Software/strapi/plugin/ckeditor path/to/your/strapi/project/plugins/ckeditor
```

Navigate to your Strapi project directory and install the plugin dependencies:

```bash
cd path/to/your/strapi/project

yarn install
```

Run the build process for your Strapi project to incorporate the plugin:

```bash
yarn build
```

## TypeScript Configuration
Update the `./config/plugins.ts` file in your Strapi project to include the CKEditor plugin:

```typescript
// ./config/plugins.ts
import path from "path";

export default ({ env }) => ({
ckeditor: {
enabled: true,
resolve: "./src/plugins/strapi-plugin-ckeditor"
},
// Additional plugin configurations...
});
```

For production environments, make corresponding changes in `./config/env/production/plugin.ts` using the path module.


```typescript
// ./config/env/production/plugins.ts
const path = require("path");

export default ({env}) => ({

  ckeditor: {
    enabled: true,
    resolve: path.join(__dirname, '..', '..', '..', '..', 'src', 'plugins', 'strapi-plugin-ckeditor')
  }

  // ... The rest of your configuration

});

```

## Branch Selection for styling

**Main Branch**: For default CKEditor styling.
**TailwindCSS Branch**: For TailwindCSS styling. Switch to the tailwind-impl branch.


## Updating from Upstream
When updating from the upstream repository, add the following dependencies to your package:

- `@ckeditor/ckeditor5-core`
- `@ckeditor/ckeditor5-html-support`
- `@ckeditor/ckeditor5-source-editing`

These dependencies should be included in your project's `package.json`.

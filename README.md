# cssu.ca: The CSSU Website

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](LICENSE)

This repository contains the source code for the CSSU website. It is built using [Next.js](https://nextjs.org/) with the App directory, TailwindCSS, and TypeScript, and is hosted on [Netlify](https://www.netlify.com/).

The website is highly customizable yet easy to maintain and compile statically. It is a re-write of the original [Hugo ReFresh theme](https://github.com/PippoRJ/hugo-refresh), which was built using Hugo and SASS and licensed under [MIT](https://github.com/PippoRJ/hugo-refresh/blob/master/LICENSE).

## Getting Started

This repository uses Yarn as the primary package manager. You can install it by following the instructions on the [official website](https://yarnpkg.com/).

```bash
yarn install # Install dependencies
yarn dev     # Start the development server
yarn build   # Build the website
yarn start   # Start the production server
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

> [!TIP]
> Although we recommend running the Next.js server, you can also export the website statically by setting `output: "export"` and `images: { unoptimized: true }`, and removing redirects in the `next.config.mjs` file. Refer to the [Next.js documentation](https://nextjs.org/docs/app/building-your-application/deploying/static-exports) for more information.

> [!NOTE]  
> Sharp is installed as a server-side dependency to optimize images. If you encounter issues with the Sharp package, install it using `yarn install --ignore-engines`.

## Customization

The website content is built from the ground up using MDX files located in the [content](content) directory. To learn how to customize the website, refer to the GitHub Wiki.

## Contributing

We welcome contributions! Please fork this repository and submit a pull request with your changes. If you have a feature request or have found a bug, please open an issue.

To learn more about the internal workings of the website, including how static pages are generated and MDX files are processed, refer to the GitHub Wiki.

## License

This project is licensed under the AGPL-3.0-only license. See the [LICENSE](LICENSE) file for details.

This project is a re-write of the original [Hugo ReFresh theme](https://github.com/PippoRJ/hugo-refresh), licensed under the [MIT License](https://github.com/PippoRJ/hugo-refresh/blob/master/LICENSE).

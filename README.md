# SvelteScaling
Analyzing the scalability of Svelte. 

# [Results of the Analysis](http://svelte-scaling.acmion.com)
[http://svelte-scaling.acmion.com](http://svelte-scaling.acmion.com)

## About

Inspired by **[svelte-it-will-scale](https://github.com/halfnelson/svelte-it-will-scale)**. If two studies come to similar results, then the conclusions are with a higher probability correct.

## Analyze

To perform the analysis on your own computer, do the following: 

1. Install NodeJS.
2. Install npm.
3. Clone this repository.
4. Execute `node install.js`, which installs all npm dependencies for projects. This step takes about 10 minutes to execute.
5. Execute `node analyze.js`, which performs the actual analysis.
6. View `index.html` in a browser to see the report.

**Warning:** The analysis will take approximately 1 GB of disk space (mostly npm packages). 

## Methodology & Structure

### Svelte
1. All directories under `sample-apps/svelte-apps` are independent Svelte applications, which have been instantiated from the [Svelte template app](https://github.com/sveltejs/template). These directories use the following naming convention: `svelte-app-<n>`, where `<n>` is the number of Svelte components in the app. The components are added in an incremental fashion, which means that `svelte-app-<n + 1>` contains all of the components in `svelte-app-<n>` (with the exact same source code) and one additonal component.
2. All Svelte applications contain a `<svelte-app-directory>/src/_components/` directory. The number of components in each app varies.
3. All components will be referenced and instantiated in `<svelte-app-directory>/src/App.svelte`, which does not contain anything besides the code required by the components and one H1 tag that specifies the name of the app.
4. The components are taken from the following projects:
    + [sveltejs/svelte](https://github.com/sveltejs/svelte)
    + [sveltejs/realworld](https://github.com/sveltejs/realworld)
    + [sveltejs/hn.svelte.dev](https://github.com/sveltejs/hn.svelte.dev)
    + [itswadesh/sapper-ecommerce](https://github.com/itswadesh/sapper-ecommerce)
5. Components that require properties or CSS variables to be specified, so that visible content will be rendered, will have them specified in their `<component-name>.svelte` files. All comments will be removed. All dependencies on external components will be removed (for example: feather-icons). Reliance on stores will be rewritten to standard JS variables. Sapper dependencies will be removed.
6. The application is built with `npm run build`. This will build an optimized version of the app.
7. The following sizes are measured:
    | Size                 | Target                                 |
    |----------------------|----------------------------------------|
    | Component Source     | `src/_components/`                     |
    | JS Bundle            | `public/build/bundle.js`               |
    | CSS Bundle           | `public/build/bundle.css`              |
    | Total Bundle         | JS Bundle + CSS Bundle                 |
    | Gzipped JS Bundle    | Gzipped `public/build/bundle.js`       |
    | Gzipped CSS Bundle   | Gzipped `public/build/bundle.css`      |
    | Gzipped Total Bundle | Gzipped JS Bundle + Gzipped CSS Bundle |

### React

1. All directories under `sample-apps/react-apps` are independent React applications, which have been instantiated with `npx create-react-app <app-name>`. These directories use the following naming convention: `react-app-<n>`, where `<n>` is the number of Svelte components in the app. The components are added in an incremental fashion, which means that `react-app-<n + 1>` contains all of the components in `react-app-<n>` (with the exact same source code) and one additonal component.
2. All React applications contain a `<react-app-directory>/src/_components/` directory. The number of components in each app varies.
3. All components will be referenced and instantiated in `<react-app-directory>/src/App.js`, which does not contain anything besides the code required by the components and one H1 tag that specifies the name of the app.
4. The components are taken from the following projects:
    + [reactjs/reactjs.org](https://github.com/reactjs/reactjs.org)
5. Components that require properties or CSS variables to be specified, so that visible content will be rendered, will have them specified in their `<component-name>.js` files. All comments will be removed. All dependencies on external components will be removed (for example: feather-icons). Reliance on stores will be rewritten to standard JS variables. 
6. The application is built with `npm run build`. This will build an optimized version of the app.
7. The following sizes are measured:
    | Size                 | Target                                 |
    |----------------------|----------------------------------------|
    | Component Source     | `src/_components/`                     |
    | JS Bundle            | `public/build/<all-js-files>`          |
    | CSS Bundle           | `public/build/<all-css-files>`         |
    | Total Bundle         | JS Bundle + CSS Bundle                 |
    | Gzipped JS Bundle    | Gzipped `public/build/<all-js-files>`  |
    | Gzipped CSS Bundle   | Gzipped `public/build/<all-css-files>` |
    | Gzipped Total Bundle | Gzipped JS Bundle + Gzipped CSS Bundle |
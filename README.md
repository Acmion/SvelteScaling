# SvelteScaling
Testing the scalability of Svelte.

Inspired by **[svelte-it-will-scale](https://github.com/halfnelson/svelte-it-will-scale)**. If two studies come to similar results, then the conclusions are with a higher probability correct.

## Methodology & Structure

### Svelte
1. All directories under `svelte-apps` are independent Svelte applications, which have been instantiated from the [Svelte template app](https://github.com/sveltejs/template). These directories use the following naming convention: `svelte-app-<n>`, where `<n>` is the number of Svelte components in the app. The components are added in an incremental fashion, which means that `svelte-app-<n + 1>` contains all of the components in `svelte-app-<n>` (with the exact same source code) and one additonal component.
2. All Svelte applications contain a `<svelte-app-directory>/src/_components/` directory. The number of components in each app varies.
3. All components will be referenced and instantiated in `<svelte-app-directory>/src/App.svelte`, which does not contain anything besides the code required by the components and one H1 tag that specifies the name of the app.
4. The components are taken from the following projects:
    + [sveltejs/svelte](https://github.com/sveltejs/svelte)
    + [sveltejs/realworld](https://github.com/sveltejs/realworld)
    + [sveltejs/hn.svelte.dev](https://github.com/sveltejs/hn.svelte.dev)
    + [itswadesh/sapper-ecommerce](https://github.com/itswadesh/sapper-ecommerce)
5. Components that require properties or CSS variables to be specified, so that visible content will be rendered, will have them specified in their `<component-name>.svelte` files. All comments will be removed. All dependencies on external components will be removed (for example: feather-icons). Reliance on stores will be rewritten to standard JS variables. Sapper dependencies will be removed.
6. The application is built with `npm run build`. This will build an optimized version of the Svelte app.
7. The following sizes are measured:
    | Size                 | Target                                 |
    |----------------------|----------------------------------------|
    | Component Source     | `src/_components/`                    |
    | JS Bundle            | `public/build/bundle.js`              |
    | CSS Bundle           | `public/build/bundle.css`             |
    | Total Bundle         | JS Bundle + CSS Bundle                 |
    | Gzipped JS Bundle    | Gzipped `public/build/bundle.js`      |
    | Gzipped CSS Bundle   | Gzipped `public/build/bundle.css`     |
    | Gzipped Total Bundle | Gzipped JS Bundle + Gzipped CSS Bundle |

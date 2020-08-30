<script>
    import PreloadingIndicator from "./_components/svelte-website/PreloadingIndicator.svelte";
    import ScreenToggle from "./_components/svelte-website/ScreenToggle.svelte";

    import ListErrors from "./_components/svelte-realworld/ListErrors.svelte";
    import Nav from "./_components/svelte-realworld/Nav.svelte";

    import ArticlePreview from "./_components/svelte-realworld/ArticleList/ArticlePreview.svelte";
    import ListPagination from "./_components/svelte-realworld/ArticleList/ListPagination.svelte";

    import Nav2 from "./_components/svelte-hn/Nav.svelte";
    import ThemeToggler from "./_components/svelte-hn/ThemeToggler.svelte";
</script>
<h1>svelte-app-8</h1>
<PreloadingIndicator />
<ScreenToggle />

<ListErrors />
<Nav />

<ArticlePreview />
<ListPagination />

<Nav2 />
<ThemeToggler />
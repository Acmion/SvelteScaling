<script>
  import { onMount } from 'svelte'
  import Product from './Product.svelte'
  export let products = ["These", "are", "some", "random", "products"],
    title = 'This is some title'
  const uniqueId = `siema--${Math.random()
    .toString(36)
    .substring(2, 10)}`
  let Siema,
    controller,
    currentSlide = 0
  onMount(async () => {
    
  })
  function onChangeCallback() {
    currentSlide = this.currentSlide
  }
  function prev() {
    controller.prev()
  }
  function next() {
    controller.next()
  }
</script>

<style>
  .prev {
    position: absolute;
    outline: none;
    z-index: 100;
    top: 30%;
    left: -30px;
    width: 47px;
    height: 104px;
    background-color: hsla(0, 0%, 100%, 0.98) !important;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.11);
  }
  .next {
    position: absolute;
    outline: none;
    z-index: 100;
    top: 30%;
    right: -30px;
    width: 47px;
    height: 104px;
    background-color: hsla(0, 0%, 100%, 0.98) !important;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.11);
  }
</style>

<div class="relative px-2 pt-2 mx-0 rounded lg:pt-5 lg:mx-5 lg:px-5">
  <h1 class="mb-5 text-2xl font-bold text-gray-800 underline">{title}</h1>
  <div class="">
    {#if currentSlide != 0}
      <button on:click={prev} class="hidden lg:block prev">
        <i class="fa fa-chevron-left" />
      </button>
    {/if}
    <button on:click={next} class="hidden lg:block next">
      <i class="fa fa-chevron-right" />
    </button>
    <div class={uniqueId}>
      {#each products as p}
        <Product />
      {/each}
    </div>
  </div>
</div>

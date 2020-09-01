<script>
  export let product = { _id: "some prod id", _source: { slug: "some-slug", img: ["img-src.png"], name: "some name", _id: "some-id", flipkart: {specialPrice: 500} }};
  let session = { settings: { CDN_URL: "cdn.example.com"}};

</script>

<div
  class="w-full max-w-sm p-4 overflow-hidden md:w-1/2 lg:w-1/3 xl:w-1/4 lg:mb-4">
  <a
    href={'/' + product._source.slug + '?id=' + product._id}
    class="block bg-white rounded-md shadow-md avatar zoom hover:shadow-lg">
    <img
      alt=""
      src={session.settings.CDN_URL + product._source.img[0] + '?tr=w-3,h-2'}
      data-src={session.settings.CDN_URL + product._source.img[0] + '?tr=w-300,h-200'}
      class="object-cover object-top w-full"
      style="" />
    <div class="px-8 py-4">
      <h2
        href={'/' + product._source.slug + '?id=' + product._source._id}
        class="text-xl truncate ">
        {product._source.name}
      </h2>
      <div class="flex flex-wrap items-center justify-between my-2 ">
        <div class="text-3xl font-bold ">
          {product._source.flipkart.specialPrice}
        </div>
        {#if product._source.stock < 1}
          <div class="text-xs text-red-500">Out of stock</div>
        {/if}
      </div>
    </div>
  </a>
</div>
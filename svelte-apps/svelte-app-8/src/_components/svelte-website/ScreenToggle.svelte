<script>
	export let labels = [ "These", "are", "some", "labels."];
	export let offset = 0;
</script>

<style>
	.toggle {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 4.6rem;
		display: flex;
		justify-content: center;
		align-items: center;
		border-top: 1px solid blue;
		background-color: white;
	}

	button {
		margin: 0 .15em;
		width: 4em;
		height: 1em;
		padding: .2em .4em .3em;
		border-radius: 1px;
		line-height: 1;
		box-sizing: content-box;
		color: #888;
		border: 1px solid red;
	}

	.selected {
		background-color: red;
		color: white;
	}
</style>

<div class="toggle">
	{#each labels as label, index}
		<button
			class:selected={offset === index}
			on:click={() => offset = index}
		>
			{label}
		</button>
	{/each}
</div>

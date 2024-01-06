<script>
	import '../app.css';
	import Sidemenu from '$lib/Sidemenu.svelte';
</script>

<div class="flex">
	<nav>
		<!-- Pass in communities here (or empty array) -->
		<Sidemenu />
	</nav>
	<main class="w-full">
		<slot/>
	</main>
</div>

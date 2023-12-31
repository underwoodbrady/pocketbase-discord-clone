<script lang="ts">
	import Call from 'virtual:icons/material-symbols/call';
	import Video from 'virtual:icons/material-symbols/video-camera-front-rounded';
	import Search from 'virtual:icons/material-symbols/search-rounded';
	import Connection from 'virtual:icons/material-symbols/wifi-rounded';

	export let inCall: boolean = false;
</script>

<header
	class={inCall ? 'border-neutral px-6 py-3 bg-base-300' : 'border-b border-neutral px-6 py-3'}
>
	<div class="flex w-full justify-between">
		<div class="form-control relative">
			<input type="text" placeholder="Search" class="input input-bordered w-auto input-sm pl-8" />
			<Search class="absolute top-2 left-2 " />
		</div>

		<div class="flex space-x-2 items-center">
			{#if inCall}
				<div class="flex items-center mr-2 space-x-1">
					<Connection class="text-success text-sm" />
					<p class="text-xs text-success font-semibold">Voice Connected</p>
				</div>
			{/if}
			<button class={'btn btn-sm btn-ghost btn-circle' + (inCall ? ' btn-disabled' : '')}>
				<Call class="text-lg" />
			</button>
			<button class={'btn btn-sm btn-ghost btn-circle' + (inCall ? ' btn-disabled' : '')}>
				<Video class="text-lg" />
			</button>
		</div>
	</div>
</header>

<script lang="ts">
	import Call from 'virtual:icons/material-symbols/call';
	import Video from 'virtual:icons/material-symbols/video-camera-front-rounded';
	import Search from 'virtual:icons/material-symbols/search-rounded';
	import Connection from 'virtual:icons/material-symbols/wifi-rounded';
	import Settings from 'virtual:icons/material-symbols/settings';
	import Profile from 'virtual:icons/material-symbols/account-circle';
	import Logout from 'virtual:icons/material-symbols/logout-rounded';

	export let inCall: boolean = false;
	export let onJoinCall: () => void;
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
					<Connection class="text-success text-xs" />
					<p class="text-xs text-success font-semibold">Voice Connected</p>
				</div>
			{:else}
				<button
					class={'btn btn-sm btn-ghost btn-circle' + (inCall ? ' btn-disabled' : '')}
					on:click={onJoinCall}
				>
					<Call class="text-lg" />
				</button>
				<button
					class={'btn btn-sm btn-ghost btn-circle' + (inCall ? ' btn-disabled' : '')}
					on:click={onJoinCall}
				>
					<Video class="text-lg" />
				</button>
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<div class="dropdown dropdown-end">
					<div
						tabindex="0"
						role="button"
						class="btn btn-sm btn-ghost btn-circle avatar placeholder ml-2"
					>
						<div class="bg-neutral text-neutral-content rounded-full w-8">
							<span class="text-xs">BU</span>
						</div>
					</div>
					<!-- svelte-ignore a11y-missing-attribute -->
					<ul
						tabindex="0"
						class="mt-3 z-[1] p-2 shadow menu dropdown-content bg-base-100 text-neutral-content rounded-box w-44"
					>
						<li>
							<!-- svelte-ignore a11y-missing-attribute -->
							
							<a><Profile/> Profile </a>
						</li>
						<!-- svelte-ignore a11y-missing-attribute -->
						<li>
							
							<a><Settings/>Settings</a>
						</li>
						<!-- svelte-ignore a11y-missing-attribute -->
						<li><a class="font-semibold"><Logout/>Logout</a></li>
					</ul>
				</div>
			{/if}
		</div>
	</div>
</header>

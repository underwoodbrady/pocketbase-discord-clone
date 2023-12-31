<script lang="ts">
	import Friend from 'virtual:icons/material-symbols/person-add-rounded';
	import Requests from 'virtual:icons/material-symbols/stacked-email-outline';
	import Add from 'virtual:icons/material-symbols/add-rounded';
	import Search from 'virtual:icons/material-symbols/search-rounded';

	export let messages: any;
    export let onUpdateSelectedMessageChannel: (n:number) =>void;

    let selectedMessageChannel = 0;

    function updateSelectedMessage(i:number){
        selectedMessageChannel = i;
        onUpdateSelectedMessageChannel(i);
    }
</script>

<div class="flex h-full flex-col">
	<header class="border-b bg-base-200 border-base-300 px-4 py-3 flex items-center space-x-2">
		<button class="btn btn-sm w-full justify-start">
			<h3 class="">Rabble</h3>
			<div class="badge badge-primary badge-sm">v0.2</div>
		</button>
	</header>
	<ul class="menu bg-base-200 w-56 h-full">
		<button class="btn btn-ghost btn-sm mx-2 my-1 justify-start"><Requests />Requests</button>
		<li class="menu-title">
			<div class="flex justify-between items-center">
				Direct Messages
				<button class="btn btn-circle btn-sm">
					<Add />
				</button>
			</div>
		</li>
		{#each messages as message, i}
			<li class="mb-1">
				<button on:click={()=>updateSelectedMessage(i)} class={"space-x-1 items-center" + (i === selectedMessageChannel ? " active" : "")}
					><div class="avatar placeholder online">
						<div class="bg-neutral text-neutral-content rounded-full w-8">
							<span class="text-xs">{(message.initials).toUpperCase()}</span>
						</div>
					</div>
					<p class="mb-1">{message.username}</p>
				</button>
			</li>
		{/each}
	</ul>
</div>

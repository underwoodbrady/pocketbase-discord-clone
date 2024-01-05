<script lang="ts">
	import Mail from 'virtual:icons/material-symbols/stacked-email';
	import Notification from 'virtual:icons/material-symbols/notifications';
	import Map from 'virtual:icons/material-symbols/map';
	import Add from 'virtual:icons/material-symbols/add-rounded';
	import Friend from 'virtual:icons/material-symbols/group-rounded';
	import { serversWritable } from '../routes/data';

	let selectedMenu: any = 0;

	function onServerSelected(i:number){
		selectedMenu = i;
	}

	console.log(selectedMenu)
</script>

<ul class="menu bg-base-300 w-[72px] h-screen space-y-1">
	<li class="">
		<a class={"relative h-9" + (selectedMenu == 0 ? " active" : "")} href="/" on:click={()=>selectedMenu = 0}>
			<span class="absolute right-4 top-2 w-2 h-2 bg-info rounded-full"></span>
			<Notification class="text-lg" />
		</a>
	</li>
	<li>
		<a class={"h-9" + (selectedMenu == 1 ? " active" : "")} href="/" on:click={()=>selectedMenu = 1}>
			<Mail class="text-lg" />
		</a>
	</li>
	<li>
		<a class={"h-9" + (selectedMenu == 2 ? " active" : "")} href="/" on:click={()=>selectedMenu = 2}>
			<Friend class="text-lg" />
		</a>
	</li>
	<div class="divider my-1"></div>
	<div class="space-y-2 z-50">
		{#each $serversWritable as server, i}
		<li>
			<a 
				style={`background-color:${server.color}`}
				class={`tooltip tooltip-right h-9 border-2 ` + (i+3 == selectedMenu ? "  border-neutral-content" : " border-transparent hover:border-neutral")}
				data-tip={`${server.name}`}
				href={`/server/${server.id}`}
				on:click={()=>onServerSelected(i+3)}
			>
			</a>
		</li>
		{/each}
		
		<li>
			<button
				class="bg-base-100 h-9 flex items-center justify-center"
				on:click={()=>document.getElementById('newServerModal')?.showModal()}
			>
				<Add class="text-lg text-primary"/>
			</button>
		</li>
	</div>
</ul>

<dialog id="newServerModal" class="modal">
	<div class="modal-box">
	  <form method="dialog">
		<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
	  </form>
	  <h3 class="font-bold text-lg">Create New Community</h3>
	  <label class="form-control w-full">
		<div class="label">
		  <span class="label-text">Name</span>
		</div>
		<input type="text" placeholder="Type here" class="input input-sm input-bordered w-full" />
		<div class="label">
		  <span class="label-text">Logo</span>
		</div>
		<input type="file" class="file-input file-input-sm w-full" />
		<div class="flex space-x-2 w-full">
			<button class="btn btn-neutral btn-sm mt-8 flex-1">Cancel</button>
			<button class="btn btn-primary btn-sm mt-8 flex-1">Create Community</button>
		</div>

	  </label>
	</div>
  </dialog>

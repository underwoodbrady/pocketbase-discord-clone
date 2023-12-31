<script lang="ts">
	import Friend from 'virtual:icons/material-symbols/person-add-rounded';
	import Requests from 'virtual:icons/material-symbols/stacked-email-outline';
	import Add from 'virtual:icons/material-symbols/add-rounded';
</script>

<ul class="menu bg-base-200 w-56">
	<button class="btn btn-neutral btn-sm mx-4 my-1 justify-start"><Friend />Friends</button>
	<button class="btn btn-sm mx-4 my-1 justify-start"><Requests />Requests</button>
	<li class="menu-title">
		<div class="flex justify-between items-center">
			Direct Messages
			<button class="btn btn-circle btn-sm">
				<Add />
			</button>
		</div>
	</li>
	<li>
		<a href="/"
			><div class="avatar placeholder online">
				<div class="bg-neutral text-neutral-content rounded-full w-8">
					<span class="text-xs">AW</span>
				</div>
			</div></a
		>
	</li>
	<li>
		<a href="/"
			><div class="avatar placeholder online">
				<div class="bg-neutral text-neutral-content rounded-full w-8">
					<span class="text-xs">AW</span>
				</div>
			</div></a
		>
	</li>
	<li>
		<a href="/"
        class="space-x-1 items-cente"
			><div class="avatar placeholder online">
				<div class="bg-neutral text-neutral-content rounded-full w-8">
					<span class="text-xs">AW</span>
				</div>
			</div>
            <p class="mb-1">awyllie</p>
            </a
		>
	</li>
	<li>
		<a href="/"
			><div class="avatar placeholder online">
				<div class="bg-neutral text-neutral-content rounded-full w-8">
					<span class="text-xs">AW</span>
				</div>
			</div></a
		>
	</li>

</ul>

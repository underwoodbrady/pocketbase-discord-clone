<script lang="ts">
	import Mail from 'virtual:icons/material-symbols/stacked-email';
	import Notification from 'virtual:icons/material-symbols/notifications';
	import Map from 'virtual:icons/material-symbols/map';
	import Add from 'virtual:icons/material-symbols/add-rounded';
	import Friend from 'virtual:icons/material-symbols/group-rounded';

</script>

<ul class="menu bg-base-300 w-[72px] h-screen space-y-1">
	<li class="">
		<a class="relative h-9" href="/">
			<span class="absolute right-4 top-2 w-2 h-2 bg-info rounded-full"></span>
			<Notification class="text-lg" />
		</a>
	</li>
	<li>
		<a class="h-9 active" href="/">
			<Mail class="text-lg" />
		</a>
	</li>
	<li>
		<a class="h-9" href="/">
			<Friend class="text-lg" />
		</a>
	</li>
	<div class="divider my-1"></div>
	<div class="space-y-2 z-50">
		<li>
			<a class="bg-neutral tooltip tooltip-right h-9" data-tip="Explore" href="/server">
				<Map class="text-lg" />
			</a>
		</li>
		<li>
			<a class="tooltip tooltip-right bg-red-600/60 h-9 hover:bg-red-600/40" data-tip="Server 1" href="/server">
			</a>
		</li>
		<li>
			<a class="tooltip tooltip-right bg-blue-600/60 h-9 hover:bg-blue-600/40" data-tip="Server 2" href="/server">
			</a>
		</li>
		<li>
			<a class="tooltip tooltip-right bg-purple-600/60 h-9 hover:bg-purple-600/40" data-tip="Server 3" href="/server">
			</a>
		</li>
		<li>
			<a class="tooltip tooltip-right bg-green-600/60 h-9 hover:bg-green-600/40" data-tip="Server 4" href="/server">
			</a>
		</li>
		<li>
			<a class="border-neutral border-2 h-9 flex items-center justify-center" href="/">
        <Add />
			</a>
		</li>
	</div>
</ul>

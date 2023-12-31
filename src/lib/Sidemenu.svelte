<script lang="ts">
	import Mail from 'virtual:icons/material-symbols/stacked-email';
	import Notification from 'virtual:icons/material-symbols/notifications';
	import Map from 'virtual:icons/material-symbols/map';
</script>

<ul class="menu bg-base-300 w-[72px] h-screen">
	<li class="">
		<a class="tooltip tooltip-right relative h-9" data-tip="Notifications" href="/">
			<span class="absolute right-4 top-2 w-2 h-2 bg-info rounded-full"></span>
			<Notification class="text-lg" />
		</a>
	</li>
	<li>
		<a class="tooltip tooltip-right h-9" data-tip="Messages" href="/">
			<Mail class="text-lg" />
		</a>
	</li>
	<div class="divider my-1"></div>
	<div class="space-y-2">
		<li>
			<a class="bg-neutral tooltip tooltip-right h-9" data-tip="Explore" href="/">
				<Map class="text-lg" />
			</a>
		</li>
		<li>
			<a class="tooltip tooltip-right bg-red-600 h-9 opacity-50" data-tip="Server 1" href="/">
			</a>
		</li>
		<li>
			<a class="tooltip tooltip-right bg-blue-600 h-9 opacity-50" data-tip="Server 2" href="/">
			</a>
		</li>
		<li>
			<a class="tooltip tooltip-right bg-purple-600 h-9 opacity-50" data-tip="Server 3" href="/">
			</a>
		</li>
		<li>
			<a class="tooltip tooltip-right bg-green-600 h-9 opacity-50" data-tip="Server 4" href="/">
			</a>
		</li>
	</div>
</ul>

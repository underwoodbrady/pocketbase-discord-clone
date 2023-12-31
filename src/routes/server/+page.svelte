<script lang="ts">
	import ChatHeader from '$lib/ChatHeader.svelte';
	import ChatArea from '$lib/ChatArea.svelte';
	import ChatFooter from '$lib/ChatFooter.svelte';
	import ServerUsers from '$lib/ServerUsers.svelte';
	import { messagesWritable } from '../data';

	let selectedMessageChannel = $messagesWritable[0];


</script>

<div class="w-full h-full flex flex-col justify-between max-h-screen">
	<ChatHeader onJoinCall={() => {}} />
	<div class="flex flex-1">
		<div class="flex flex-col flex-1">
			<ChatArea messageChannel={selectedMessageChannel} />
			<ChatFooter />
		</div>
		<div>
			<ServerUsers/>
		</div>
	</div>
</div>

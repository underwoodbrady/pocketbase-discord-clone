<script lang="ts">
	import ChatHeader from '$lib/ChatHeader.svelte';
	import ChatArea from '$lib/ChatArea.svelte';
	import ChatFooter from '$lib/ChatFooter.svelte';
	import ChatCall from '$lib/ChatCall.svelte';
	import MessageSidebar from '$lib/MessageSidebar.svelte';

	let inCall: boolean = false;

	function toggleInCall() {
		inCall = !inCall;
	}
</script>

<main class="flex h-full">
	<MessageSidebar />
	<div class="w-full h-full flex flex-col justify-between max-h-screen">
		<ChatHeader {inCall} onJoinCall={toggleInCall} />
		{#if inCall}
			<ChatCall onEndCall={toggleInCall} />
		{/if}
		<ChatArea />
		<ChatFooter />
	</div>
</main>

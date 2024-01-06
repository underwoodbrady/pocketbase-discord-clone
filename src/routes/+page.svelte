<script lang="ts">
	import ChatHeader from '$lib/ChatHeader.svelte';
	import ChatArea from '$lib/ChatArea.svelte';
	import ChatFooter from '$lib/ChatFooter.svelte';
	import ChatCall from '$lib/ChatCall.svelte';
	import MessageSidebar from '$lib/MessageSidebar.svelte';
	import { messagesWritable } from './data';
	import NotLoggedIn from '$lib/NotLoggedIn.svelte';

	let inCall: boolean = false;

	let selectedMessageChannel = $messagesWritable[0];

	function toggleInCall() {
		inCall = !inCall;
	}

	export let data;
</script>

<main class="flex h-full">
	{#if data.user}
		<MessageSidebar
			messages={$messagesWritable}
			onUpdateSelectedMessageChannel={(i) => (selectedMessageChannel = $messagesWritable[i])}
		/>
		<div class="w-full h-full flex flex-col justify-between max-h-screen">
			<ChatHeader {inCall} onJoinCall={toggleInCall} />
			{#if inCall}
				<ChatCall onEndCall={toggleInCall} />
			{/if}
			<ChatArea messageChannel={selectedMessageChannel} />
			<ChatFooter />
		</div>
	{:else}
		<NotLoggedIn/>
	{/if}
</main>

<script lang="ts">
	import ChatHeader from '$lib/ChatHeader.svelte';
	import ChatArea from '$lib/ChatArea.svelte';
	import ChatFooter from '$lib/ChatFooter.svelte';
	import ChatCall from '$lib/ChatCall.svelte';
</script>

<div class="w-full h-full max-h-screen flex flex-col justify-between">
	<ChatHeader inCall/>
    <ChatCall/>
	<ChatArea />
	<ChatFooter/>
</div>

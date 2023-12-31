<script lang="ts">
	import ChatHeader from '$lib/ChatHeader.svelte';
	import ChatArea from '$lib/ChatArea.svelte';
	import ChatFooter from '$lib/ChatFooter.svelte';
</script>

<div class="w-full h-full flex flex-col justify-between">
	<ChatHeader/>
	<ChatArea />
	<ChatFooter/>
</div>
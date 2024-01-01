<script lang="ts">
	import Call from 'virtual:icons/material-symbols/call';

	export let messageChannel: any;
</script>

<section class="p-6 w-full h-full flex-1 overflow-y-auto overflow-hidden">
	<div class="prose">
		{#if messageChannel.initials}
			<div class="avatar placeholder">
				<div class="bg-neutral text-neutral-content rounded-full w-12">
					<span>{messageChannel.initials}</span>
				</div>
			</div>
		{/if}
		<h3 class="mt-4">{messageChannel.topic}</h3>
		<p>This is the beginning of your message channel with {messageChannel.topic}</p>
	</div>
	<div class="divider text-xs">December 31, 2023</div>

	<div class="space-y-2">
		{#each messageChannel.messages as message, i}
			{#if message.startedCall === true}
				<div class="chat chat-start items-center">
					<div class="flex items-center justify-center w-10">
						<Call class="text-success" />
					</div>
					<div class="text-base-content text-sm">
						<span class="font-semibold">{message.user}</span> started a call lasting {message.length}
						<span class="text-xs text-base-content/50">{message.time}</span>
					</div>
				</div>
			{:else}
				<div class="chat chat-start">
					<div class="chat-image avatar placeholder">
						<div class="bg-neutral text-neutral-content rounded-full w-10">
							<span class="text-sm">{message.initials}</span>
						</div>
					</div>
					<div class="chat-header">
						{message.user}
						<time class="text-xs text-base-content/50">{message.time}</time>
					</div>
					<div class="">{message.message}</div>
				</div>
			{/if}
		{/each}
	</div>
</section>

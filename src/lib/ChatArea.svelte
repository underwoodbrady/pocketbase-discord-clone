<script lang="ts">
	import Call from 'virtual:icons/material-symbols/call';
	import Video from 'virtual:icons/material-symbols/video-camera-front-rounded';
	import Search from 'virtual:icons/material-symbols/search-rounded';
	import Upload from 'virtual:icons/material-symbols/upload-rounded';
	import Face from 'virtual:icons/material-symbols/mood-rounded';
</script>

<div class="w-full h-full flex flex-col justify-between">
	<header class="border-b border-neutral px-6 py-3">
		<div class="flex w-full justify-between">
			<div class="form-control relative">
				<input type="text" placeholder="Search" class="input input-bordered w-auto input-sm pl-8" />
				<Search class="absolute top-2 left-2 " />
			</div>
			<div class="flex space-x-2">
				<button class="btn btn-sm btn-ghost btn-circle">
					<Call class="text-lg" />
				</button>
				<button class="btn btn-sm btn-ghost btn-circle">
					<Video class="text-lg" />
				</button>
			</div>
		</div>
		<div class=""></div>
	</header>
	<section class="p-6 w-full h-full flex-1 overflow-y-auto">
		<div class="prose">
			<div class="avatar placeholder">
				<div class="bg-neutral text-neutral-content rounded-full w-12">
					<span>AW</span>
				</div>
			</div>
			<h3 class="mt-4">awyllie</h3>
			<p>This is the beginning of your messages with awyllie</p>
		</div>
        <div class="divider text-xs">December 31, 2023</div>

        <div class="space-y-2">
            <div class="chat chat-start">
                <div class="chat-image avatar placeholder">
                    <div class="bg-neutral text-neutral-content rounded-full w-10">
                        <span class="text-sm">AW</span>
                    </div>
                </div>
                <div class="chat-header">
                    awyllie
                    <time class="text-xs text-base-content/50">12:45pm</time>
                </div>
                <div class="">Get on rl</div>
            </div>
            <div class="chat chat-start">
                <div class="chat-image avatar placeholder">
                    <div class="bg-neutral text-neutral-content rounded-full w-10">
                        <span class="text-sm">BU</span>
                    </div>
                </div>
                <div class="chat-header">
                    brades6
                    <time class="text-xs text-base-content/50">12:47pm</time>
                </div>
                <div class="">Bet</div>
            </div>
            <div class="chat chat-start items-center">
                <div class="flex items-center justify-center w-10">
                        <Call class="text-success"/>
                </div>
                <div class="text-base-content text-sm"><span class="font-semibold">brades6</span> started a call lasting 2 hours <span class="text-xs text-base-content/50">12:50pm</span></div>
            </div>
        </div>
		
	</section>
	<footer class="p-6">
        <div class="form-control relative">
            <input type="text" placeholder="Send Message" class="input w-full bg-neutral" />
            <Upload class="absolute right-[52px] top-3 text-xl"/>
            <Face class="absolute right-4 top-3 text-xl"/>
        </div>
      
    </footer>
</div>

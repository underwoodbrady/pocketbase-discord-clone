<script lang="ts">
    
    import Mic from 'virtual:icons/material-symbols/mic-rounded';
    import EndCall from 'virtual:icons/material-symbols/call-end';

</script>

<div class="bg-base-300 p-6 flex flex-col items-center space-y-4">
    <div class="flex justify-center space-x-3">
        <div class="avatar placeholder">
			<div class="bg-neutral text-neutral-content rounded-full w-12">
				<span>AW</span>
			</div>
		</div>
        <div class="avatar placeholder">
			<div class="bg-neutral text-neutral-content rounded-full w-12">
				<span>BU</span>
			</div>
		</div>
    </div>
    <div class="flex justify-center space-x-3">
        <button class="btn btn-circle">
            <Mic class="text-lg"/>
        </button>
        <button class="btn btn-circle btn-error">
            <EndCall class="text-lg"/>
        </button>
    </div>
</div>
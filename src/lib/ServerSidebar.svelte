<script lang="ts">
	import Add from 'virtual:icons/material-symbols/add-rounded';
	import ArrowDown from 'virtual:icons/material-symbols/keyboard-arrow-down-rounded';
	import Text from 'virtual:icons/material-symbols/text-snippet-outline-rounded';
	import Sound from 'virtual:icons/mdi/microphone';
</script>

<div class="flex h-full flex-col">
    <header class="border-b bg-base-200 border-base-300 px-4 py-3 flex items-center space-x-2">
        <button class="btn btn-sm btn-ghost w-full justify-between">
            <h3 class="">Server 1</h3>
            <ArrowDown class="text-lg"/>
        </button>
      

    </header>
    <ul class="menu bg-base-200 w-56 h-full">
        <li class="menu-title">
            <div class="flex justify-between items-center">
                Rules
                <button class="btn btn-circle btn-sm">
                    <Add />
                </button>
            </div>
        </li>
        <li>
            <a href="/" class="space-x-1 items-center"
                >
                <Text/>
                Rules
            </a>
        </li>
        <li class="menu-title ">
            <div class="flex justify-between items-center ">
                General
                <button class="btn btn-circle btn-sm">
                    <Add />
                </button>
            </div>
        </li>
        <li>
            <a href="/" class="space-x-1 items-center active"
                >
                <Text/>
                general
            </a>
        </li>
        <li>
            <a href="/" class="space-x-1 items-center"
                >
                <Text/>
                valorant
            </a>
        </li>
        <li>
            <a href="/" class="space-x-1 items-center"
                >
                <Text/>
                memes
            </a>
        </li>
        <li class="menu-title">
            <div class="flex justify-between items-center">
                Voice
                <button class="btn btn-circle btn-sm">
                    <Add />
                </button>
            </div>
        </li>
        <li>
            <a href="/" class="space-x-1 items-center"
                >
                <Sound/>
                voice1
            </a>
        </li>
        <li>
            <a href="/" class="space-x-1 items-center" 
                >
                <Sound/>
                admin only
            </a>
        </li>
    </ul>    
</div>



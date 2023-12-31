<script>
    import "../app.css";
    import Sidemenu from "$lib/Sidemenu.svelte"
    import MessageSidebar from "$lib/MessageSidebar.svelte";
    import ServerSidebar from "$lib/ServerSidebar.svelte";

    const messages = {
        "awyllie": {
            username: "awyllie",
            messages: [
                {
                    user: "awyllie",
                    message: "Get on rl",
                    time: "12:45pm",
                },
                {
                    user: "brades6",
                    message: "Bet",
                    time: "12:47pm",
                },
                {
                    user:"brades6",
                    startedCall: true,
                    time: "12:50pm",
                    length: "2 hours"
                }
            ]
        }
    }
</script>
<div class="flex">
    <nav>
        <Sidemenu/>
    </nav>
    <main class="w-full">
        <slot />
    </main>
</div>

<script>
    import "../app.css";
    import Sidemenu from "$lib/Sidemenu.svelte"
    import MessageSidebar from "$lib/MessageSidebar.svelte";
    import ServerSidebar from "$lib/ServerSidebar.svelte";

</script>
<div class="flex">
    <nav>
        <Sidemenu/>
    </nav>
    <main class="w-full">
        <slot />
    </main>
</div>

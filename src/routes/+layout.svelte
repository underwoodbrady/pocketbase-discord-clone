<script>
    import "../app.css";
    import Sidemenu from "$lib/Sidemenu.svelte"
    import MessageSidebar from "$lib/MessageSidebar.svelte";
</script>
<nav class="flex">
    <Sidemenu/>
    <MessageSidebar/>
</nav>
<slot />
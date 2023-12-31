<script>
    import "../app.css";
    import Sidemenu from "$lib/Sidemenu.svelte"
    import MessageSidebar from "$lib/MessageSidebar.svelte";
    import ChatArea from "$lib/ChatArea.svelte";
</script>
<div class="flex">
    <nav class="flex">
        <Sidemenu/>
        <MessageSidebar/>
    </nav>
    <main class="w-full">
        <ChatArea/>
    </main>
</div>

<slot />
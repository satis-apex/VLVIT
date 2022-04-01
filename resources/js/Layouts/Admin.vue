<template>
    <sidebar />
    <div class="relative md:ml-56 bg-slate-100">
        <admin-navbar />
        <header-stats />
        <div class="px-4 md:px-10 mx-auto w-full -m-28">
            <slot />
            <footer-admin />
        </div>
    </div>
</template>
<script>
import AdminNavbar from "@/components/Navbars/AdminNavbar.vue";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import HeaderStats from "@/components/Headers/HeaderStats.vue";
import FooterAdmin from "@/components/Footers/FooterAdmin.vue";
export default {
    components: {
        AdminNavbar,
        Sidebar,
        HeaderStats,
        FooterAdmin,
    },
};
</script>

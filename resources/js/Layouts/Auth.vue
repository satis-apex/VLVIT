<template>
    <div>
        <navbar />
        <main>
            <section class="relative w-full h-full py-40 min-h-screen">
                <div
                    class="absolute top-0 w-full h-full bg-slate-800 bg-no-repeat bg-full"
                    :style="`background-image: url('${registerBg2}');`"
                ></div>
                <slot />
                <footer-small absolute />
            </section>
        </main>
    </div>
</template>
<script>
import Navbar from "@/components/Navbars/AuthNavbar.vue";
import FooterSmall from "@/components/Footers/FooterSmall.vue";

export default {
    data() {
        return {
            registerBg2: "img/register_bg_2.png",
        };
    },
    components: {
        Navbar,
        FooterSmall,
    },
};
</script>

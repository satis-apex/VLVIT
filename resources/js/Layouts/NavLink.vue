<template>
    <Link
        class="text-sm py-1 block"
        :class="
            active
                ? 'text-emerald-500 hover:text-emerald-600'
                : 'text-slate-700 hover:text-slate-500'
        "
    >
        <template v-if="icon != ''">
            <i
                class="mr-1 w-4 text-sm"
                :class="
                    active
                        ? 'text-emerald-500 hover:text-emerald-600 ' + icon
                        : 'text-slate-300 ' + icon
                "
            ></i>
        </template>
        <slot />
    </Link>
</template>

<script>
export default {
    props: {
        active: Boolean,
        icon: String,
    },
};
</script>

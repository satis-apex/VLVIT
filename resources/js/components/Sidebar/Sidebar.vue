<template>
    <nav
        class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-56 z-10 py-4 px-6"
    >
        <div
            class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"
        >
            <!-- Toggler -->
            <button
                class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                type="button"
                v-on:click="toggleCollapseShow('bg-white m-2 py-3 px-6')"
            >
                <i class="fas fa-bars"></i>
            </button>
            <!-- Brand -->
            <NavLink
                class="md:block text-left md:pb-2 text-slate-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                href="/"
            >
                Vue Notus
            </NavLink>
            <!-- User -->
            <ul class="md:hidden items-center flex flex-wrap list-none">
                <li class="inline-block relative">
                    <notification-dropdown />
                </li>
                <li class="inline-block relative">
                    <user-dropdown />
                </li>
            </ul>
            <!-- Collapse -->
            <div
                class="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded"
                v-bind:class="collapseShow"
            >
                <!-- Collapse header -->
                <div
                    class="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-slate-200"
                >
                    <div class="flex flex-wrap">
                        <div class="w-6/12">
                            <NavLink
                                class="md:block text-left md:pb-2 text-slate-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                                href="/"
                            >
                                Vue Notus
                            </NavLink>
                        </div>
                        <div class="w-6/12 flex justify-end">
                            <button
                                type="button"
                                class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                                v-on:click="toggleCollapseShow('hidden')"
                            >
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <!-- Form -->
                <form class="mt-6 mb-4 md:hidden">
                    <div class="mb-3 pt-0">
                        <input
                            type="text"
                            placeholder="Search"
                            class="border-0 px-3 py-2 h-12 border border-solid border-slate-500 placeholder-slate-300 text-slate-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                        />
                    </div>
                </form>

                <!-- Divider -->
                <hr class="my-4 md:min-w-full" />
                <!-- Heading -->
                <h6
                    class="md:min-w-full text-slate-500 text-sm uppercase font-bold block pt-1 pb-4 no-underline"
                >
                    Admin Layout Pages
                </h6>
                <!-- Navigation -->

                <ul class="md:flex-col md:min-w-full flex flex-col list-none">
                    <li class="items-center">
                        <NavLink
                            href="/"
                            :active="$page.component === 'Dashboard'"
                            icon="fas fa-tv"
                        >
                            Dashboard
                        </NavLink>
                    </li>

                    <li class="items-center">
                        <NavLink
                            :href="route('settings')"
                            :active="$page.component === 'Settings'"
                            icon="fas fa-tools"
                        >
                            Settings
                        </NavLink>
                    </li>

                    <li class="items-center">
                        <NavLink
                            :href="route('tables')"
                            :active="$page.component === 'Tables'"
                            icon="fas fa-table"
                        >
                            Tables
                        </NavLink>
                    </li>

                    <!-- <li class="items-center">
                        <NavLink href="/maps">
                            <i
                                class="fas fa-map-marked mr-1 w-4 text-sm"
                                :class="[
                                    isActive
                                        ? 'opacity-75'
                                        : 'text-slate-300',
                                ]"
                            ></i>
                            Maps
                        </NavLink>
                    </li> -->
                </ul>

                <!-- Divider -->
                <hr class="my-4 md:min-w-full" />
                <!-- Heading -->
                <h6
                    class="md:min-w-full text-slate-500 text-sm uppercase font-bold block pt-1 pb-4 no-underline"
                >
                    Auth Layout Pages
                </h6>
                <!-- Navigation -->

                <ul
                    class="md:flex-col md:min-w-full flex flex-col list-none md:mb-4"
                >
                    <li class="items-center">
                        <NavLink href="/login" icon="fas fa-fingerprint">
                            Login
                        </NavLink>
                    </li>

                    <li class="items-center">
                        <NavLink href="/register" icon="fas fa-clipboard-list">
                            Register
                        </NavLink>
                    </li>
                </ul>

                <!-- Divider -->
                <hr class="my-4 md:min-w-full" />
                <!-- Heading -->
                <h6
                    class="md:min-w-full text-slate-500 text-sm uppercase font-bold block pt-1 pb-4 no-underline"
                >
                    No Layout Pages
                </h6>
                <!-- Navigation -->

                <ul
                    class="md:flex-col md:min-w-full flex flex-col list-none md:mb-4"
                >
                    <li class="items-center">
                        <NavLink href="/landing" icon="fas fa-newspaper">
                            Landing Page
                        </NavLink>
                    </li>

                    <li class="items-center">
                        <NavLink href="/profile" icon="fas fa-user-circle">
                            Profile Page
                        </NavLink>
                    </li>
                </ul>

                <!-- Divider -->
                <hr class="my-4 md:min-w-full" />
                <!-- Heading -->
                <h6
                    class="md:min-w-full text-slate-500 text-sm uppercase font-bold block pt-1 pb-4 no-underline"
                >
                    Documentation
                </h6>
                <!-- Navigation -->
            </div>
        </div>
    </nav>
</template>
); }

<script>
import NotificationDropdown from "@/components/Dropdowns/NotificationDropdown.vue";
import UserDropdown from "@/components/Dropdowns/UserDropdown.vue";
import NavLink from "@/Layouts/NavLink.vue";
export default {
    data() {
        return {
            collapseShow: "hidden",
        };
    },
    methods: {
        toggleCollapseShow: function (classes) {
            this.collapseShow = classes;
        },
    },
    components: {
        NavLink,
        NotificationDropdown,
        UserDropdown,
    },
};
</script>

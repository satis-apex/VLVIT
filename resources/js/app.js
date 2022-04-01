//import './bootstrap';
import AdminLayout from '@/Layouts/Admin.vue'
import Auth from '@/Layouts/Auth.vue'
import { createApp, h } from 'vue'
import { createInertiaApp, Link } from '@inertiajs/inertia-vue3'

createInertiaApp({
	resolve: async name => {
		let page = (await import(`./Pages/${name}.vue`)).default
		if (page.layout === undefined) {
			page.layout = AdminLayout
		}
		else if (page.layout == 'auth') {
			page.layout = Auth
		}
		return page
	},
	setup({ el, App, props, plugin }) {
		createApp({ render: () => h(App, props) })
			.use(plugin)
			.component("Link", Link)
			.mixin({ methods: { route } })
			.mount(el)
	},
})
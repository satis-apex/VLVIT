//import './bootstrap';
import AdminLayout from '@/Layouts/Admin.vue'
import { createApp, h } from 'vue'
import { createInertiaApp, Link } from '@inertiajs/inertia-vue3'

createInertiaApp({
	resolve: async name => {
		let page = (await import(`./Pages/${name}.vue`)).default
		if (page.layout === undefined) {
			page.layout = AdminLayout
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
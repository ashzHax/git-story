/*
 * mixins.ts
 * Created on Mon Jul 13 2020
 *
 * Copyright (c) git-story. Licensed under the GPL 3.0 License.
 */

import Vue from 'vue';
import { Component, Vue as VueDecorator } from 'vue-property-decorator';
import Vuetify from '@/plugins/vuetify';

@Component
export default class Mixin extends VueDecorator {

	/*
	 * Must be binding mixin method.
	 * Because sometimes this becomes undefined when call in another scope.
	 */
	constructor() {
		super();

		this.$t = this.$t.bind(this);
		this.mount = this.mount.bind(this);
		this.$assign = this.$assign.bind(this);
	}

	public $t(key: string) {
		const tmp: any = this;
		return tmp.$vuetify.lang.t('$vuetify.' + key);
	}

	public mount(component: any, options: any = {}, selector?: (string | HTMLElement)) {
		const instanceComponent = Vue.extend(component);

		if ( typeof options.vuetify === 'undefined' ) {
			options.vuetify = Vuetify;
		}

		const instance = new instanceComponent(options);
		instance.$mount(selector);

		return instance;
	}

	public $assign(url: string, newTab: boolean = false) {
		if ( newTab ) {
			window.open(url);
			return;
		}

		const router = this && this.$router;
		if ( router ) {
			if ( router.currentRoute.path !== url ) {
				router.push({ path: url });
			}
		}
	}
}

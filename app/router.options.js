export default {
	scrollBehavior: function (to, from, savedPosition) { //(1)
		if (savedPosition) { //(2)
			return savedPosition;
		}
		if (to.hash) { //(3)
			return { el: to.hash, behavior: "smooth", top: 30 };
		}
		return { top: 0, left: 0, behavior: "smooth" };//(4)
	},
};

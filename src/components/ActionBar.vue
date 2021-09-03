<template>
	<div class="action-bar flex a-center">
		<button class="btn add-btn" @click="addNew">+ Add</button>

		<div class="search-products-wrapper flex a-center main-border">
			<img src="@/assets/images/Magnifying_glass_icon.svg" />
			<input
				type="text"
				class="search-products"
				placeholder="search-products"
				v-model="searchTerm"
				oninput=""
			/>
		</div>

		<!-- <select
			name="category-select"
			class="category-select main-border"
			v-model="category"
		>
			<option value="date">Recently Added</option>
			<option value="name">Name</option>
		</select> -->
		<!-- <v-select
			name="category-select"
			class="category-select main-border"
			v-model="selected"
			:options="options"
			label="labels"
		>
		</v-select> -->

		<select v-model="selected">
			<!-- inline object literal -->
			<option
				v-for="option in options"
				:key="option.id"
				:value="option.id"
				:label="option.label"
			></option>
		</select>
	</div>
</template>

<style lang="scss" scoped>
.action-bar {
	gap: 1vmin;
	margin-left: 1vmin;
	.add-btn {
		align-self: stretch;
		background-color: $clr4;
		min-width: 5vw;
	}
	.search-products-wrapper {
		border-radius: 50px;
		padding: 0 15px;
		margin-top: 3px;
		.search-products {
			border: none;
			padding: 6px;
		}
		img {
			height: 2vmin;
		}
	}
	.category-select {
		padding: 6px;
		margin-top: 3px;
		&* {
			@extend .main-border;
		}
	}
}
</style>

<script>
export default {
	name: "Action-Bar",
	data() {
		return {
			timeout: null,
			debouncedInput: "",
			options: [
				{ id: 1, label: "Name" },
				{ id: 2, label: "Recently Added" },
			],
		};
	},
	computed: {
		searchTerm: {
			get() {
				return this.debouncedInput;
			},
			set(val) {
				if (this.timeout) clearTimeout(this.timeout);
				this.timeout = setTimeout(() => {
					this.debouncedInput = val;
					this.$store.commit("setSearchTerm", this.debouncedInput);
				}, 300);
			},
		},
		// selected() {
		// 	console.log(
		// 		"🚀 ~ file: ActionBar.vue ~ line 105 ~ selected ~ this.$store.getters.getCategory",
		// 		this.$store.getters.getCategory
		// 	);
		// 	return this.$store.getters.getCategory;
		// },
		selected: {
			get: function () {
				return this.$store.getters.getCategory;
			},
			set: function () {
				this.$store.commit("toggleCategory");
			},
		},
	},
	methods: {
		addNew() {
			this.$store.commit("setSelectedProduct", null);
		},
	},
};
</script>

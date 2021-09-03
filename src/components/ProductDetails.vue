<template>
	<fieldset class="product-details flex column">
		<legend v-if="editProduct">{{ editProduct.name }}</legend>

		<form
			@submit.prevent="saveChanges"
			class="wrapper flex column"
			v-if="editProduct"
		>
			<img :src="editProduct.imageUrl || defaultUrl" alt="" class="img" />
			<!-- name -->
			<label class="name-label">Name</label>
			<input
				type="text"
				name="product-name"
				:value="editProduct.name"
				@change="updateValue('name', $event)"
			/>
			<!-- description -->
			<label class="name-description">Name</label>
			<textarea
				type="text"
				name="product-description"
				:value="editProduct.description"
				@change="updateValue('description', $event)"
			/>
			<!-- price -->
			<label class="name-label">Price</label>
			<div class="flex">
				<input
					type="number"
					name="product-price"
					class="product-price"
					:value="editProduct.price"
					@change="updateValue('price', $event)"
				/>
				<span class="price-after">$</span>
			</div>

			<button class="btn save-btn">Save</button>
		</form>
	</fieldset>
</template>

<style lang="scss" scoped>
.product-details {
	flex: 4;
	margin: 10px 0 9px 0;
	border: 3px solid black;

	position: relative;
	legend {
		position: absolute;
		text-transform: capitalize;
		left: 20px;
		top: -25px;
		border: 1px solid $clr1;
		background-color: $clr1;
	}
	.wrapper {
		height: 100% !important;
		img {
			align-self: flex-start;
			max-width: 20vh;
			margin: 4vmin 1vmin;
			border: 1px solid $clr5;
		}

		label {
			align-self: flex-start;
			margin: 0 1vmin;
		}
		input,
		textarea {
			@extend .main-border;
			margin: 0 1vmin;
			padding: 1vmin;
			&.product-price {
				width: 7vw;
			}
		}

		.save-btn {
			position: absolute;
			bottom: 0;
			right: 0;
			background-color: $clr4;
			max-height: 5vh;
			// align-self: flex-end;
			margin: 2vmin;
		}
	}
}
</style>

<script>
import makeId from "../utils/makeId";
export default {
	name: "product-details",
	data() {
		return {
			editProduct: null,
			defaultUrl:
				"https://wtwp.com/wp-content/uploads/2015/06/placeholder-image-300x225.png",
		};
	},
	computed: {
		selectedProduct() {
			return this.$store.getters.selectedProduct;
		},
	},
	watch: {
		selectedProduct: {
			handler: function (val) {
				this.editProduct = { ...val };
			},
			deep: true,
			immediate: true,
		},
	},
	methods: {
		updateValue(name, evt) {
			this.editProduct[name] = evt.target.value;
		},
		saveChanges() {
			if (!this.editProduct.id) {
				this.editProduct.id = makeId();
			}
			this.$store.commit("updateProducts", this.editProduct);
		},
	},
};
</script>
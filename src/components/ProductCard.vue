<template>
	<div class="product-card main-border flex j-between">
		<img class="img" :src="product.imageUrl" alt="" />
		<div class="details flex column j-start">
			<h4 class="title">{{ product.name }}</h4>
			<p class="description">{{ product.description }}</p>
		</div>
		<button class="btn" @click="setSelectedProduct">Details</button>
	</div>
</template>

<style lang="scss" scoped>
.product-card {
	max-height: 25vh;
	margin: 1vmin;
	text-transform: capitalize;
	.img {
		margin: 2vh;
		max-height: 23vh;
		max-width: 23vh;
	}
	.details {
		flex: 1;
		text-align: left;
	}
	.btn {
		background-color: $clr3;
		max-height: 5vh;
		align-self: flex-end;
		margin: 2vmin;
	}
}
</style>

<script>
export default {
	props: {
		product: {
			type: Object,
			required: true,
		},
	},
	name: "product-card",
	methods: {
		setSelectedProduct() {
			this.$store.commit("setSelectedProduct", this.product.id);
		},
	},
};
</script>
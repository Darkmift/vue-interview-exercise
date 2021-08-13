<template>
	<div class="product-list">
		<product-card
			v-for="(item, index) in productListPage"
			:key="index"
			:product="item"
		/>
	</div>
</template>

<style lang="scss" scoped>
.product-list {
	flex: 6;
}
</style>

<script>
import ProductCard from "@/components/ProductCard";
export default {
	name: "product-list",
	computed: {
		productListPage() {
			return this.$store.getters.productListPage;
		},
	},
	components: { ProductCard },
};
</script>
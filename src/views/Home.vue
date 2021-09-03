<template>
	<div class="home flex column">
		<action-bar />
		<div class="products-container flex j-between">
			<product-list />
			<product-details />
		</div>
		<pagination />
	</div>
</template>

<style lang="scss">
.home {
	padding: 1vmin;
	margin: 1vh 1vw;
	flex: 1 1 auto;
	.products-container {
		max-width: 90vw;
		margin-top: 1vh;
	}
}
</style>

<script>
import ActionBar from "@/components/ActionBar";
import ProductList from "@/components/ProductList";
import ProductDetails from "@/components/ProductDetails";
import Pagination from "@/components/Pagination";

export default {
	components: {
		ActionBar,
		ProductList,
		ProductDetails,
		Pagination,
	},
};
</script>

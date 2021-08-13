<template>
	<div id="app" class="flex column">
		<my-nav />
		<router-view />
	</div>
</template>

<style lang="scss">
#app {
	text-align: center;
	min-height: 100vh;
	margin: 0;
}
</style>

<script>
import myNav from "@/components/Nav";
export default {
	components: { myNav },
};
</script>

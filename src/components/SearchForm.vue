<template>
	<form
		method="get"
		role="search"
		action="/blog/posts"
		class="d-flex align-items-center"
	>
		<input
			:value="$route.query.q || ''"
			name="q"
			type="search"
			aria-label="Title, content..."
			placeholder="Title, content..."
			class="form-control search me-2 ms-lg-3 ms-sm-0"
		/>
		<button type="submit" class="btn btn-outline-success mt-1">
			Search
		</button>
	</form>
</template>

<style scoped>
.search {
	max-width: 70%;
}

@media screen and (max-width: 576px) {
	.search_form {
		margin-bottom: 25px;
	}
}
</style>

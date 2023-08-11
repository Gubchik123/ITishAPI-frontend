<template>
	<form method="get" action="/blog" role="search" class="d-flex align-items-center">
		<input
			name="q"
			type="search"
			:value="$route.params.q || ''"
			aria-label="Title, content..."
			placeholder="Title, content..."
			class="form-control search me-2 ms-lg-3 ms-sm-0"
		/>
		<button type="submit" class="btn btn-outline-success mt-1">
			Search
		</button>
	</form>
</template>

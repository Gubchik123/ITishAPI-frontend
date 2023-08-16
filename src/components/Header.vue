<template>
	<header>
		<nav class="navbar navbar-expand-lg navbar-dark my-panel-bg-color">
			<div class="container-fluid">
				<router-link to="/" class="navbar-brand my-logo">
					ITish
				</router-link>

				<!-- Burger button -->
				<button
					type="button"
					class="navbar-toggler"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
					aria-controls="navbarSupportedContent"
				>
					<span class="navbar-toggler-icon"></span>
				</button>

				<div
					id="navbarSupportedContent"
					class="collapse navbar-collapse"
				>
					<!-- Left navbar menu -->
					<ul
						class="navbar-nav list-group-horizontal-md me-lg-auto top-menu justify-content-center text-center"
					>
						<li class="nav-item me-lg-2 me-sm-4">
							<router-link
								:to="{ name: 'home' }"
								class="nav-link"
							>
								Home
							</router-link>
						</li>
						<li class="nav-item me-lg-2 me-sm-4">
							<router-link
								:to="{ name: 'blog' }"
								class="nav-link"
							>
								Blog
							</router-link>
						</li>
						<li class="nav-item me-lg-2 me-sm-4">
							<router-link
								:to="{ name: 'faqs' }"
								class="nav-link"
							>
								FAQs
							</router-link>
						</li>
						<li class="nav-item me-lg-2 me-sm-4">
							<router-link
								:to="{ name: 'feedback' }"
								class="nav-link"
							>
								Feedback
							</router-link>
						</li>
						<li class="nav-item me-lg-2 me-sm-4">
							<!-- Search form -->
							<div
								class="search_form d-flex justify-content-center"
							>
								<search-form />
							</div>
						</li>
					</ul>

					<!-- Right navbar menu -->
					<ul
						class="navbar-nav list-group-horizontal justify-content-between mt-lg-0 mt-md-3 mt-sm-3"
					>
						<li class="nav-item me-3">
							<theme-toggler />
						</li>
						<li class="nav-item">
							<div
								v-if="is_user_authenticated"
								class="dropdown text-end"
							>
								<a
									href="#"
									class="d-block link-light text-decoration-none dropdown-toggle"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									<ion-icon
										v-pre
										name="person-circle-outline"
									></ion-icon>
								</a>
								<ul
									class="dropdown-menu text-small position-absolute mt-3"
								>
									<li>
										<a
											href="#"
											class="dropdown-item d-flex justify-content-between align-items-center"
										>
											Profile
											<ion-icon
												v-pre
												name="person-outline"
											></ion-icon>
										</a>
									</li>
									<li>
										<router-link
											:to="{ name: 'post-create' }"
											class="dropdown-item d-flex justify-content-between align-items-center"
										>
											New post...
											<ion-icon
												v-pre
												name="add-circle-outline"
											></ion-icon>
										</router-link>
									</li>
									<li>
										<hr class="dropdown-divider" />
									</li>
									<li>
										<a
											href="#"
											@click="$emit('logout')"
											class="dropdown-item d-flex justify-content-between align-items-center"
										>
											Log out
											<ion-icon
												v-pre
												name="log-out-outline"
											></ion-icon>
										</a>
									</li>
								</ul>
							</div>
							<template v-else>
								<router-link
									:to="{ name: 'login' }"
									class="btn btn-outline-success me-2"
								>
									Log In
								</router-link>
								<router-link
									:to="{ name: 'signup' }"
									class="btn btn-primary"
								>
									Sign Up
								</router-link>
							</template>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
</template>

<script>
import SearchForm from "./SearchForm.vue";
import ThemeToggler from "./buttons/ThemeToggler.vue";

export default {
	name: "Header",
	components: { SearchForm, ThemeToggler },
	props: {
		is_user_authenticated: {
			type: Boolean,
			required: true,
		},
	},
};
</script>

<style scoped>
a.my-logo,
a.my-logo:hover {
	color: lightblue;
}
.my-logo {
	font-size: 1.5em;
	font-weight: bold;
	font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
		sans-serif;
}

.top-menu a,
.top-menu a:hover {
	color: var(--bs-light);
}
.top-menu li a::after {
	content: "";
	display: block;
	width: 100%;
	background-color: var(--bs-light);
	height: 1px;
	transition: all 0.5s;
	transform: scale(0);
}
.top-menu li a:hover::after {
	transform: scale(1);
}

.navbar-nav .dropdown-menu {
	right: 0;
	left: auto;
	z-index: 100;
}
.navbar-nav .dropdown-menu ion-icon {
	font-size: 1.5em;
}
</style>

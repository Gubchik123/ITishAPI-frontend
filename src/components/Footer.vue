<template>
	<footer
		class="container-fluid my-panel-bg-color d-flex flex-wrap justify-content-between align-items-center py-3"
	>
		<div class="col-md-4 d-flex align-items-center">
			<router-link
				to="/"
				class="mb-3 me-2 mb-md-0 text-decoration-none lh-1"
			>
				<ion-icon v-pre name="aperture"></ion-icon>
			</router-link>
			<span class="mb-3 mb-md-0 text-muted">&copy; 2023</span>
		</div>

		<ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
			<li class="ms-3">
				<a
					target="_blank"
					class="text-muted"
					href="https://github.com/Gubchik123"
				>
					<ion-icon v-pre name="logo-github"></ion-icon>
				</a>
			</li>
			<li class="ms-3">
				<a
					target="_blank"
					class="text-muted"
					href="https://www.instagram.com/nikitos.1746/"
				>
					<ion-icon v-pre name="logo-instagram"></ion-icon>
				</a>
			</li>
			<li class="ms-3">
				<a
					target="_blank"
					class="text-muted"
					href="https://www.linkedin.com/in/nikita-hubariev/"
				>
					<ion-icon v-pre name="logo-linkedin"></ion-icon>
				</a>
			</li>
		</ul>
	</footer>
</template>

<script>
export default {
	name: "Footer",
	options: {
		compilerOptions: {
			isCustomElement: (tag) => ["md-linedivider"].includes(tag),
		},
	},
};
</script>

<style scoped>
footer {
	z-index: 90;
}

ion-icon[name="aperture"],
ion-icon[name="logo-instagram"],
ion-icon[name="logo-linkedin"],
ion-icon[name="logo-github"],
ion-icon[name="logo-facebook"], 
ion-icon[name="send"], /* Icon like telegram */
ion-icon[name="mail-outline"] {
	color: white;
	border-radius: 10px;
}
ion-icon[name="logo-instagram"] {
	background: #f09433;
	background: -moz-linear-gradient(
		45deg,
		#f09433 0%,
		#e6683c 25%,
		#dc2743 50%,
		#cc2366 75%,
		#bc1888 100%
	);
	background: -webkit-linear-gradient(
		45deg,
		#f09433 0%,
		#e6683c 25%,
		#dc2743 50%,
		#cc2366 75%,
		#bc1888 100%
	);
	background: linear-gradient(
		45deg,
		#f09433 0%,
		#e6683c 25%,
		#dc2743 50%,
		#cc2366 75%,
		#bc1888 100%
	);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
}
ion-icon[name="logo-linkedin"],
ion-icon[name="aperture"],
ion-icon[name="logo-facebook"] {
	background: darkblue;
}
ion-icon[name="aperture"],
ion-icon[name="logo-github"],
ion-icon[name="logo-facebook"],
ion-icon[name="send"] {
	border-radius: 50%;
}
ion-icon[name="mail-outline"] {
	color: red;
	background-color: #fff;
}
ion-icon[name="send"] {
	transform: rotate(-35deg);
	background-color: #28a8e9;
}
ion-icon[name="logo-github"] {
	color: black;
	background: white;
}
</style>

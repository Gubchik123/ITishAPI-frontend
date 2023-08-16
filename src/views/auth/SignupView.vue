<template>
	<BaseLayout title="Registration" content_title="Sign Up">
		<div class="d-flex flex-column align-items-center my-3">
			<div class="col-md-6 col-sm-12 rounded my-form-bg-color">
				<Alert
					v-if="message !== null"
					:category="message.category"
					:message="message.message"
				/>

				<form @submit.prevent="sign_up" class="text-white py-3 px-3">
					<!-- Username field -->
					<div class="mt-3">
						<div class="form-floating">
							<input
								v-model.lazy.trim="username"
								@input="message = null"
								required=""
								type="text"
								id="username"
								minlength="3"
								maxlength="50"
								class="form-control"
								placeholder="Username"
							/>
							<label for="username" class="text-black">
								Username
							</label>
						</div>
					</div>
					<!-- Email field -->
					<div class="mt-3">
						<div class="form-floating">
							<input
								v-model.lazy.trim="email"
								@input="message = null"
								id="email"
								required=""
								type="email"
								minlength="10"
								maxlength="255"
								placeholder="Email"
								class="form-control"
							/>
							<label for="email" class="text-black">
								Email
							</label>
						</div>
					</div>
					<!-- Password field -->
					<div class="mt-3">
						<div class="form-floating">
							<input
								v-model.lazy.trim="password"
								@input="message = null"
								required=""
								id="password"
								minlength="5"
								type="password"
								class="form-control"
								placeholder="Password"
							/>
							<label for="password" class="text-black">
								Password
							</label>
						</div>
					</div>
					<!-- Password again field -->
					<div class="mt-3">
						<div class="form-floating">
							<input
								v-model.lazy.trim="password_again"
								@input="message = null, password_again_error_message=''"
								required=""
								minlength="5"
								type="password"
								id="password_again"
								class="form-control"
								placeholder="Password again"
							/>
							<label class="text-black" for="password_again">
								Password again
							</label>
						</div>
                        <div class="text-sm text-white bg-danger">
                            {{ password_again_error_message }}
                        </div>
					</div>
					<!-- Sign up button -->
					<div class="text-center">
						<div class="mt-2">
							<button class="btn btn-success btn-lg mt-2">
								Sign Up
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</BaseLayout>
</template>

<script>
import { mapGetters } from "vuex";

import BaseLayout from "../BaseLayout.vue";
import Alert from "../../components/Alert.vue";

import { signup } from "../../api/auth.js";

export default {
	name: "SignupView",
	components: { BaseLayout, Alert },
	data() {
		return {
			username: "",
			email: "",
			password: "",
			password_again: "",
            password_again_error_message: "",
			message: null,
		};
	},
	computed: {
		...mapGetters("backend", ["server_url"]),
	},
	methods: {
		sign_up() {
            if (!this._is_valid_data()) return;

			signup(this.username, this.email, this.password, this.server_url)
				.then((response) => {
					this.$router.push({ name: "login" });
				})
				.catch((error) => {
					this.message = {
						category: "danger",
						message: "User with this email or username already exists",
					};
				});
		},
        _is_valid_data() {
            if (!this.username || !this.email || !this.password || !this.password_again) {
                this.message = {
                    category: "warning",
                    message: "Please fill all fields",
                };
                return false;
            }
            if (this.password !== this.password_again) {
                this.password_again_error_message = "Passwords do not match";
                return false;
            }
            return true;
        }
	},
};
</script>

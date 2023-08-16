<template>
	<BaseLayout title="Log In" content_title="Log In">
		<div class="d-flex flex-column align-items-center my-3">
			<div class="col-md-6 col-sm-12 rounded my-form-bg-color">
                <Alert
                    v-if="message !== null"
                    :category="message.category"
                    :message="message.message"
                />

				<form class="text-white pt-3 px-3">
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
							<label
								for="email"
								class="text-black"
							>
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
							<label
								for="password"
								class="text-black"
							>
                                Password
                            </label>
						</div>
					</div>
                    <!-- Remember me checkbox -->
					<div class="mt-3">
						<div class="text-center">
							<label for="remember">Remember me</label>
                            &nbsp;
							<input
								value="y"
								id="remember"
								name="remember"
								type="checkbox"
							/>
						</div>
					</div>
                    <!-- Login button -->
					<div class="text-center">
						<div class="mt-2">
							<button @click.prevent="log_in" class="btn btn-success btn-lg mt-2">
                                Log In
                            </button>
						</div>
					</div>
				</form>
				<!-- Adding form content -->
				<div class="text-center mb-4 px-3">
					<hr class="my-text-color" />

					<router-link 
                        :to="{ name: 'signup' }" 
                        class="btn btn-primary btn-lg"
                    >
						Create new account
					</router-link>
				</div>
			</div>
		</div>
	</BaseLayout>
</template>

<script>
import { mapGetters } from "vuex";

import BaseLayout from "../BaseLayout.vue";
import Alert from "../../components/Alert.vue";

import { login } from "../../api/auth.js";

export default {
	name: "LoginView",
	components: { BaseLayout, Alert },
    data() {
        return {
            email: "",
            password: "",
            message: null,
        }
    },
    computed: {
        ...mapGetters("backend", ["server_url"])
    },
    methods: {
        log_in() {
            if (!this._is_valid_data()) return;

            login(this.email, this.password, this.server_url)
                .then((response) => {
                    localStorage.setItem("user_id", response.user_id);
                    localStorage.setItem("access_token", response.access_token);

                    this.$router.push({ name: "home" });
                })
                .catch((error) => {
                    this.message = {
                        category: "danger",
                        message: "Incorrect email or password"
                    };
                });
        },
        _is_valid_data() {
            if (!this.email || !this.password) {
                this.message = {
                    category: "warning",
                    message: "Please fill in all fields"
                };
                return false;
            }
            return true;
        }
    }
};
</script>

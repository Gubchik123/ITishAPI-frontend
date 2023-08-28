<template>
	<BaseLayout title="Feedback" content_title="Feedback">
		<div class="d-flex flex-column align-items-center mt-3">
			<div class="col-md-6 col-sm-12 rounded my-form-bg-color">
				<form ref="form" class="text-white py-3 px-3">
					<div class="form-floating mb-3">
						<input
                            v-model="subject"
							required
							type="text"
							name="subject"
							id="floatingInput"
							class="form-control"
							placeholder="Subject"
						/>
						<label for="floatingInput" class="text-black">
							Subject
						</label>
					</div>
					<div class="form-floating mb-4">
						<textarea
                            v-model="body"
							required
							name="body"
							placeholder="Body"
							class="form-control"
							id="floatingTextarea"
							style="height: 150px"
						></textarea>
						<label for="floatingTextarea" class="text-black">
							Body
						</label>
					</div>
					<div class="text-center">
						<input
							@click="send_message"
							name="send"
							value="Send"
							type="button"
							class="btn btn-success btn-lg"
						/>
					</div>
				</form>
			</div>
		</div>
	</BaseLayout>
</template>

<script>
import BaseLayout from "@/layouts/BaseLayout.vue";

export default {
	name: "FeedbackView",
	components: { BaseLayout },
    data() {
        return { subject: "", body: "" }
    },
	methods: {
		send_message() {
            if (!this.subject || !this.body) 
                return;
			window.open(
				`mailto:nikitos.gubchik123@gmail.com?subject=${this.subject}&body=${this.body}`,
				"_blank"
			);
            this.subject = "";
            this.body = "";
		},
	},
};
</script>

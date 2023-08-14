<template>
	<div 
        :class="'alert-' + category, {
            'alert-dismissible fade show': is_dismissible 
        }"
        role="alert"
        class="alert"
    >
		<div class="float_left me-3">
            <template v-if="category == 'primary'">
                <ion-icon
                    v-pre
                    name="alert-circle"
                ></ion-icon>
            </template>
            <template v-else-if="category == 'success'">
                <ion-icon
                    v-pre
                    name="checkmark-circle"
                ></ion-icon>
            </template>
            <template v-else>
                <ion-icon
                    v-pre
                    name="warning"
                ></ion-icon>
            </template>
		</div>
		<div class="h-100 d-flex justify-content-center align-items-center">
			<h5>{{ message }}</h5>
		</div>
	</div>
</template>

<script>
export default {
    name: "Alert",
    props: {
        category: { type: String, required: true },
        message: { type: String, required: true },
        is_dismissible: { type: Boolean, default: false }
    },
}
</script>

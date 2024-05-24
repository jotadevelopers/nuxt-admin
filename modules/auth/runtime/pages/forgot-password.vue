<script setup>
definePageMeta({
    layout: 'blank',
})
</script>
<template>
    <div class="min-h-screen p-10 bg-gray-100 flex-row justify-center items-center">
        <UCard class="max-w-xl mx-auto">
            <div class="text-center">
                <img src="@/assets/logo.png" alt="Logo" class="mx-auto h-16 dark:bg-gray-600 dark:rounded-full" />
                <h1 class="font-medium text-xl text-gray-700">Forgot Password</h1>
                <p class="text-gray-400">Enter your email and we'll send you instructions to reset your password</p>
            </div>

            <UForm class="space-y-4 mt-4">

                <UFormGroup name="email">
                    <UInput placeholder="Email" />
                </UFormGroup>

                <UButton type="submit" label="Send reset link" color="primary" block />
                <div class="flex gap-2 justify-center">
                    <NuxtLink class="text-primary" to="/login">
                        Back to login</NuxtLink>
                </div>
            </UForm>
        </UCard>
    </div>

</template>
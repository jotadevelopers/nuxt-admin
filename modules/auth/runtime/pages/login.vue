<script setup>
definePageMeta({
    layout: 'blank',
})
</script>
<template>
    <div class="min-h-screen bg-gray-100 flex-row justify-center items-center p-10">
        <UCard class="max-w-xl mx-auto">
            <div class="text-center">
                <img src="@/assets/logo.png" alt="Logo" class="mx-auto h-16 dark:bg-gray-600 dark:rounded-full" />
                <h1 class="font-medium text-xl text-gray-700">Welcome to Uno Admin</h1>
                <p class="text-gray-400">Please sign-in to your account and start the adventure </p>
            </div>

            <UForm class="space-y-4 mt-4" @submit="() => $router.push('/')">

                <UFormGroup label="Email" name="email">
                    <UInput />
                </UFormGroup>

                <UFormGroup label="Password" name="password">
                    <UInput type="password" />
                </UFormGroup>

                <UButton type="submit" label="Login" color="primary" block />

                <div class="flex gap-2 items-center justify-between">
                    <UCheckbox label="Remember me" />
                    <NuxtLink class="text-primary" to="/forgot-password">Forgot password?</NuxtLink>
                </div>



                <UDivider label="OR" />

                <UButton color="gray" label="Sign in with Google" icon="i-simple-icons-github" block />
                <UButton color="gray" label="Sign in with Facebook" icon="i-simple-icons-google" block />

                <div class="flex gap-2 justify-center">
                    <span class="text-gray-500">New on our platform?</span>
                    <NuxtLink class="text-primary" to="/register">Create an account</NuxtLink>
                </div>
            </UForm>
        </UCard>
    </div>

</template>
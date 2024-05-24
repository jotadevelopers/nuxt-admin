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
                <h1 class="font-medium text-xl text-gray-700">Welcome to Uno Admin</h1>
                <p class="text-gray-400">Sign-up on our platform and have lots of fun</p>
            </div>

            <UForm class="space-y-4 mt-4" @submit="() => $router.push('/')">

                <UFormGroup label="User Name" name="name">
                    <UInput />
                </UFormGroup>

                <UFormGroup label="Email" name="email">
                    <UInput />
                </UFormGroup>

                <UFormGroup label="Password" name="password">
                    <UInput type="password" />
                </UFormGroup>

                <div class="flex gap-2 items-center">
                    <UCheckbox label="I agree to" />
                    <NuxtLink class="text-primary" to="/register">privacy policy & terms</NuxtLink>
                </div>

                <UButton type="submit" label="Sign Up" color="primary" block />

                <div class="flex gap-2">
                    <span class="text-gray-500">Already have an account?</span>
                    <NuxtLink class="text-primary" to="/login"> Sign in instead </NuxtLink>
                </div>

                <UDivider label="OR" />

                <UButton color="gray" label="Sign up with Google" icon="i-simple-icons-github" block />
                <UButton color="gray" label="Sign up with Facebook" icon="i-simple-icons-google" block />
            </UForm>
        </UCard>
    </div>

</template>
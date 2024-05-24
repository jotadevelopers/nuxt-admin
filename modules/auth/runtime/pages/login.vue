<script setup>
definePageMeta({
    layout: 'blank',
})
</script>
<template>
    <div class="h-screen bg-gray-100 flex-row justify-center items-center">
        <UCard class="max-w-xl mx-auto mt-10">
            <h1 class="font-medium text-xl text-gray-700">Welcome to Uno Admin</h1>
            <p class="text-gray-400">Please sign-in to your account and start the adventure </p>
            <UAlert class="my-4" icon="i-heroicons-user" color="primary" variant="soft" title=""
                description="You can add components to your app using the cli." />
            <UForm class="space-y-4">

                <UFormGroup label="Email" name="email">
                    <UInput />
                </UFormGroup>

                <UFormGroup label="Password" name="password">
                    <UInput type="password" />
                </UFormGroup>

                <UButton type="submit" label="Login" color="primary" block />

                <div class="flex gap-2">
                    <span class="text-gray-500">New on our platform?</span>
                    <NuxtLink class="text-primary" to="/register"> Create an account </NuxtLink>
                </div>

                <UDivider label="OR" />

                <UButton color="gray" label="Sign in with Google" icon="i-simple-icons-github" block />
                <UButton color="gray" label="Sign in with Facebook" icon="i-simple-icons-google" block />
            </UForm>
        </UCard>
    </div>

</template>
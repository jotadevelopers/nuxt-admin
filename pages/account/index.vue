<script setup>
const toast = useToast();
const deactivateConfirm = ref(false);
const countries = ['United States', 'Canada', 'Mexico']
const language = ['English', 'Spanish', 'Arabic', 'Portuguese']
const formSubmit = () => {
    toast.add({ title: 'Saved successfully' })
}
</script>
<template>
    <div class="space-y-4">
        <UCard>
            <template #header>
                <h1>Account Details</h1>
            </template>
            <div class="space-y-4">
                <div class="flex flex-row gap-8 items-center">
                    <UAvatar size="3xl" src="https://avatars.githubusercontent.com/u/739984?v=4" alt="Avatar" />
                    <div class="space-y-4">
                        <UButton label="Update New Photo" color="primary"></UButton>
                        <p class="text-gray-500 text-sm"> Allowed JPG, GIF or PNG. Max size of 600K </p>
                    </div>
                </div>
                <UDivider />
                <UForm class="space-y-4" @submit="formSubmit">
                    <div class="grid md:grid-cols-2 gap-4">
                        <UFormGroup label="First Name">
                            <UInput size="lg" />
                        </UFormGroup>
                        <UFormGroup label="Last Name">
                            <UInput size="lg" />
                        </UFormGroup>
                    </div>
                    <div class="grid md:grid-cols-2 gap-4">
                        <UFormGroup label="E-mail">
                            <UInput size="lg" />
                        </UFormGroup>
                        <UFormGroup label="Organization">
                            <UInput size="lg" />
                        </UFormGroup>
                    </div>
                    <div class="grid md:grid-cols-2 gap-4">
                        <UFormGroup label="State">
                            <UInput size="lg" />
                        </UFormGroup>
                        <UFormGroup label="Zip Code">
                            <UInput size="lg" />
                        </UFormGroup>
                    </div>
                    <div class="grid md:grid-cols-2 gap-4">
                        <UFormGroup label="Country">
                            <USelect :options="countries" placeholder="Select a country" size="lg" />
                        </UFormGroup>
                        <UFormGroup label="Language">
                            <USelect :options="language" placeholder="Select a language" size="lg" />
                        </UFormGroup>
                    </div>
                    <div class="flex gap-2">
                        <UButton type="submit" label="Save Changes" />
                        <UButton label="Reset" variant="outline" color="gray" />
                    </div>
                </UForm>
            </div>
        </UCard>
        <UCard>
            <template #header>
                <h1>Deactivate Account</h1>
            </template>
            <div class="space-y-4">
                <UCheckbox v-model="deactivateConfirm" name="notifications" label="I confirm my account deactivation" />
                <UButton label="Deactivate Account" color="red" :disabled="!deactivateConfirm"
                    @click="() => toast.add({ title: 'Account successfully deactivated' })" />
            </div>
        </UCard>
    </div>
</template>

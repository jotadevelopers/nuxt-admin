<template>
    <div class="space-y-4">
        <UCard>
            <template #header>Change Password</template>
            <UForm class="space-y-4">
                <div class="grid md:grid-cols-2 gap-4">
                    <UFormGroup label="Current Password">
                        <UInput size="lg" type="password" icon="i-heroicons-lock-closed" trailing />
                    </UFormGroup>
                </div>
                <div class="grid md:grid-cols-2 gap-4">
                    <UFormGroup label="New Password">
                        <UInput size="lg" type="password" icon="i-heroicons-lock-closed" trailing />
                    </UFormGroup>
                    <UFormGroup label="Confirm New Password">
                        <UInput size="lg" type="password" icon="i-heroicons-lock-closed" trailing />
                    </UFormGroup>
                </div>
                <div class="font-medium text-slate-500 text-sm">
                    <p>Password Requeriments:</p>
                    <ul class="list-disc pl-3">
                        <li>Minimum 8 characters long</li>
                        <li>At least one lowercase character</li>
                        <li>At least one number, symbol, or whitespace character</li>
                    </ul>
                </div>
                <div class="flex gap-2">
                    <UButton type="submit" label="Save Changes" />
                    <UButton label="Reset" variant="outline" color="gray" />
                </div>
            </UForm>

        </UCard>
        <UCard>
            <template #header>Two-steps verification</template>
            <p class="text-gray-500 my-2">Two factor authentication is not enabled yet.</p>
            <p class="text-gray-500 my-2">Two-factor authentication adds an additional layer of security to your account
                by
                requiring more than just a password to log in. </p>
            <UButton class="my-2" type="submit" label="Enable Two-Factor Authentication" />
        </UCard>
    </div>
</template>
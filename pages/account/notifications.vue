<script setup>
const columns = [{
    key: 'type',
    label: 'TYPE'
}, {
    key: 'email',
    label: 'EMAIL'
}, {
    key: 'browser',
    label: 'BROWSER'
}, {
    key: 'app',
    label: 'APP'
}]

const permissions = [
    { type: 'New for you', email: true, browser: true, app: false },
    { type: 'Account activity', email: true, browser: false, app: false },
    { type: 'A new browser used to sign in', email: true, browser: true, app: false },
    { type: 'A new device is linked', email: true, browser: true, app: true },
]
</script>
<template>
    <UCard>
        <template #header> Request Permission</template>
        <p class="text-sm text-gray-500 font-medium mb-4">We need permission from your browser to show notifications. </p>
        <UTable :columns="columns" :rows="permissions">
            <template #email-data="{ row }">
                <UCheckbox v-model="row.email" name="email" />
            </template>
            <template #browser-data="{ row }">
                <UCheckbox v-model="row.browser" name="browser" />
            </template>
            <template #app-data="{ row }">
                <UCheckbox v-model="row.app" name="app" />
            </template>
        </UTable>
        <div class="space-y-4 mt-4">
            <p class="text-sm text-gray-500 font-medium ">When should we send you notifications? </p>
            <USelect :options="['only whem I\'m online', 'Anytime']" />
            <div class="flex gap-2">
                <UButton type="submit" label="Save Changes" />
                <UButton label="Reset" variant="outline" color="gray" />
            </div>
        </div>
    </UCard>
</template>
<template>
  <div class="">
    <UCard>
      <div class="space-y-8">
        <UFormGroup label="InputText">
          <div class="grid grid-cols-2 gap-2">
            <UInput color="primary" variant="none" placeholder="Border none" />
            <UInput disabled placeholder="Disabled..." />
            <UInput icon="i-heroicons-magnifying-glass-20-solid" size="sm" color="white" :trailing="false"
              placeholder="Icon..." />
            <UInput type="password" icon="i-heroicons-lock-closed" size="sm" :trailing="false" placeholder="*******" />
            <UInput type="file" size="sm" icon="i-heroicons-folder" placeholder="File" />
            <UInput loading icon="i-heroicons-magnifying-glass-20-solid" placeholder="Loading..." />
          </div>
        </UFormGroup>
        <div class="flex gap-8">
          <URadioGroup v-model="check" legend="RadioButton" :options="[{
            value: 'email',
            label: 'Email'
          }, {
            value: 'sms',
            label: 'Phone (SMS)'
          }, {
            value: 'push',
            label: 'Push notification'
          }]" />
          <URadioGroup legend="RadioButton Disabled" disabled
            :options="[{ value: 'email', label: 'Email' }, { value: 'sms', label: 'Phone (SMS)' }, { value: 'push', label: 'Push notification', disabled: true }]"
            model-value="sms" />
          <URadioGroup v-model="check" legend="RadioButton Required"
            :options="[{ value: 'email', label: 'Email', required: true }, { value: 'sms', label: 'Phone (SMS)' }, { value: 'push', label: 'Push notification' }]" />

        </div>
        <UFormGroup label="Checkbox">
          <div class="flex gap-4">
            <UCheckbox name="notifications" label="Notifications" />
            <UCheckbox label="Disabled" disabled />
            <UCheckbox label="Required" required />
            <UCheckbox label="Label" help="checkbox helper" />
          </div>
        </UFormGroup>
        <UFormGroup label="Select">
          <div class="grid grid-cols-2 gap-2">
            <USelect :options="['United States', 'Canada', 'Mexico']" placeholder="Select item..." />
            <USelect icon="i-heroicons-magnifying-glass-20-solid" color="white" size="sm"
              :options="['United States', 'Canada', 'Mexico']" placeholder="Select with icon..." />
          </div>
        </UFormGroup>
        <UFormGroup label="Textarea">
          <UTextarea color="primary" variant="outline" placeholder="Search..." />
        </UFormGroup>
        <UFormGroup label="ToggleButton">
          <div class=" flex gap-8">
            <UToggle v-model="toggle" color="primary" />
            <UToggle v-model="toggle" on-icon="i-heroicons-check-20-solid" off-icon="i-heroicons-x-mark-20-solid" />
            <UToggle loading />
            <UToggle disabled />
          </div>
        </UFormGroup>
      </div>

    </UCard>
  </div>
</template>

<script lang="ts" setup>
const toggle = ref(true)
const check = ref(false)
</script>

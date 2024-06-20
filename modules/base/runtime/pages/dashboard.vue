<template>
  <PageScaffold>
    <div class="space-y-4">
      <div class="grid md:grid-cols-4 gap-2">
        <PageInfoCard v-for="(card, idx) in infoCards" :key="idx" :title="card.title" :color="card.color"
          :description="card.description" :icon="card.icon" :info="card.info">
        </PageInfoCard>
      </div>
      <div>
        <UCard>
          <template #header>
            <h1>Recent Custumers</h1>
          </template>
          <UTable :rows="rows" :columns="columns">
            <template #actions-data="{ row }">
              <UButton color="primary" variant="ghost" icon="i-heroicons-chat-bubble-oval-left" />
            </template>
          </UTable>
          <div class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
            <UPagination v-model="page" :page-count="pageCount" :total="custumers.length" />
          </div>
        </UCard>
      </div>
    </div>
  </PageScaffold>
</template>

<script lang="ts" setup>
const infoCards = [
  { title: 'Orders', description: '200', info: '24 new since last visit', icon: 'i-heroicons-shopping-cart', color: 'primary', },
  { title: 'Revenue', description: '$2.400', info: '%52+ since last week', icon: 'i-heroicons-map-pin', color: 'purple', },
  { title: 'Customers', description: '15.000', info: '520 newly registered', icon: 'i-heroicons-inbox', color: 'teal', },
  { title: 'Comments', description: '10 Unread', info: '85 responded', icon: 'i-heroicons-chat-bubble-oval-left', color: 'red', },
];

const columns = [{
  key: 'id',
  label: 'ID'
}, {
  key: 'name',
  label: 'Name',
  sortable: true
}, {
  key: 'title',
  label: 'Title',
  sortable: true
}, {
  key: 'email',
  label: 'Email',
  sortable: true,
  direction: 'desc' as const
}, {
  key: 'actions',
}]
const custumers = [{
  id: 1,
  name: 'Lindsay Walton',
  title: 'Front-end Developer',
  email: 'lindsay.walton@example.com',
  role: 'Member'
}, {
  id: 2,
  name: 'Courtney Henry',
  title: 'Designer',
  email: 'courtney.henry@example.com',
  role: 'Admin'
}, {
  id: 3,
  name: 'Tom Cook',
  title: 'Director of Product',
  email: 'tom.cook@example.com',
  role: 'Member'
}, {
  id: 4,
  name: 'Whitney Francis',
  title: 'Copywriter',
  email: 'whitney.francis@example.com',
  role: 'Admin'
}, {
  id: 5,
  name: 'Leonard Krasner',
  title: 'Senior Designer',
  email: 'leonard.krasner@example.com',
  role: 'Owner'
}, {
  id: 6,
  name: 'Floyd Miles',
  title: 'Principal Designer',
  email: 'floyd.miles@example.com',
  role: 'Member'
}];
const page = ref(1)
const pageCount = 3

const rows = computed(() => {
  return custumers.slice((page.value - 1) * pageCount, (page.value) * pageCount)
})
</script>

<style></style>
<template>
  <div v-if="application && application.position" class="application max-w-[500px] border border-gray-200 rounded-lg overflow-hidden shadow-lg">
    <header class="px-6 py-4 bg-gray-200">
      <h2 class="text-xl font-bold">{{ application.position }}</h2>
      <p class="text-gray-600">Application Status: {{ application.applicationStatus }}</p>
    </header>
    <main class="p-6">
      <dl class="grid grid-cols-1 gap-4">
        <div>
          <p><strong>Matric Number:</strong> {{ application.matricNumber }}</p>
          <p><strong>CGPA:</strong> {{ application.cgpa }}</p>
        </div>
        <div>
          <p><strong>Disciplinary Issues:</strong> {{ application.hasDisciplinaryIssues ? 'Yes' : 'No' }}</p>
          <p><strong>Image of GPA:</strong> <img :src="application.imageOfGpa" alt="GPA Image"></p>
        </div>
      </dl>
    </main>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>
<script>
export default {
  props: {
    application: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style scoped>
.application {
  margin-top: 20px;
}
</style>

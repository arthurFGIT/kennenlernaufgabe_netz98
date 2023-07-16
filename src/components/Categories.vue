<template>
    <div>
        <h2 class="my-4 inline-flex items-center text-lg font-medium text-gray-700 hover:text-blue-600">Kategorien</h2>
        <div class="w-full bg-white border border-gray-200 rounded-lg shadow">
            <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50"
                id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
                <li class="mr-2" v-for="category in data.items" :key="category.id">
                    <button type="button" role="tab"
            
                        class="inline-block p-4 text-blue-600 rounded-tl-lg hover:bg-gray-100">{{
                            category.name }}</button>
                </li>
            </ul>
            <div id="defaultTabContent">
                <div class="p-4 bg-white rounded-lg md:p-8" id="about" role="tabpanel"
                    aria-labelledby="about-tab">
                    <h2 class="mb-3 text-3xl font-extrabold tracking-tight text-gray-900">Default Kategorie für Magento Produkte</h2>
                    <p class="mb-3 text-gray-500">Die "Default Category" ist eine vordefinierte Kategorie in Magento, die jedem Produkt zugewiesen wird, das nicht explizit anderen Kategorien zugeordnet ist. Sie fungiert als Standardkategorie für Produkte, die keine spezifischen Kategorien haben.</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'Categories',
    props: {
        data: {
            type: Object,
            required: true,
        },
    },
};
</script>
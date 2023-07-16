<template>
    <div>
        <h2 class="my-4 inline-flex items-center text-lg font-medium text-gray-700 hover:text-blue-600">Produkte</h2>
        <div v-for="category in data.items">
            <div class="grid grid-cols-4 gap-6">
                <div v-for="product in category.products.items" class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow grid-col-1">
                    <a href="#">
                        <img class="rounded-t-lg" :src="product.image.url" alt="product image" />
                    </a>
                    <div class="px-5 py-5">
                        <a href="#">
                            <h5 class="text-xl font-semibold tracking-tight text-gray-900">{{ product.name }}</h5>
                        </a>                        
                        <div class="flex items-center justify-between mt-4">
                            <span class="text-xl font-bold text-gray-600">${{ product.price.regularPrice.amount.value }}</span>
                            <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">{{ product.stock_status }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </template>

  <script>
  
  export default {
    name: 'Products',
    props: {
      data: {
          type: Object,
          required: true,
      },
    },
  };
  </script>
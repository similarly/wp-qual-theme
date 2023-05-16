<div class="flex flex-row justify-around">
<div class="flex items-center justify-center">
  <a href="http://localhost/wp-content/uploads/2023/05/ustav.pdf" target="_blank" rel="noopener noreferrer">
    <div class="relative bg-gray-200 p-4 rounded-md">
      <img src="https://www.a-pdf.com/watermark/examples/pdf-Secret.gif" alt="Документ" class="w-40 h-40 object-cover rounded-md">
      <div class="absolute inset-0 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-12 h-12 text-gray-500">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </div>
    </div>
  </a>
</div>

<div class="flex items-center justify-center">
  <a href="http://localhost/wp-content/uploads/2023/05/ustav.pdf" target="_blank" rel="noopener noreferrer" class="relative group">
    <div class="bg-gray-200 p-4 rounded-md overflow-hidden shadow-lg transform transition duration-300 ease-in-out hover:scale-105">
      <img src="https://www.a-pdf.com/watermark/examples/pdf-Secret.gif" alt="Документ" class="w-40 h-40 object-cover rounded-md">
      <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-12 h-12 text-gray-500">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </div>
    </div>
  </a>
</div>
<div class="flex items-center justify-center">
  <a href="http://localhost/wp-content/uploads/2023/05/ustav.pdf" target="_blank" rel="noopener noreferrer" class="relative group">
    <div class="bg-white p-4 rounded-md border-2 border-blue-500 hover:border-blue-700 overflow-hidden shadow-lg transform transition duration-300 ease-in-out hover:scale-105">
      <img src="https://www.a-pdf.com/watermark/examples/pdf-Secret.gif" alt="Документ" class="w-40 h-40 object-cover rounded-md">
      <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-12 h-12 text-gray-500">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </div>
    </div>
  </a>
</div>
</div>
<div class="flex items-center justify-center">
  <div class="relative group">
    <img src="https://www.a-pdf.com/watermark/examples/pdf-Secret.gif" alt="Документ" class="w-40 h-40 object-cover rounded-md cursor-pointer">

    <!-- Модальное окно для отображения изображения -->
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 hidden">
      <div class="relative">
        <img src="пhttps://www.a-pdf.com/watermark/examples/pdf-Secret.gif" alt="Документ" class="max-w-full max-h-full">
        <button class="absolute top-0 right-0 mt-2 mr-2 p-2 bg-white rounded-full text-gray-500 hover:text-gray-800 transition duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>
<script>
  // JavaScript код для открытия и закрытия модального окна при клике на изображение
  const image = document.querySelector('.object-cover');
  const modal = document.querySelector('.bg-black');

  image.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.add('hidden');
    }
  });
</script>
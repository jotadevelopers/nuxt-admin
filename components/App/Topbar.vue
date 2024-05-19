<template>
    <header
        class="fixed top-0 right-0 left-0 w-full flex justify-between items-center text-white p-2 h-14 shadow-md bg-white border-b-[0.5] border-gray-100">
        <div class="flex items-center gap-2">
            <img src="@/assets/logo.png" alt="Logo" class="h-8 mr-4" />
            <input type="text" class="h-8 px-2 rounded border-none" placeholder="Search" />
        </div>
        <div class="flex">
            <nav>
                <ul class="flex space-x-4">
                    <li><a href="#" class="hover:underline">Mail</a></li>
                    <li><a href="#" class="hover:underline">Calendar</a></li>
                    <li><a href="#" class="hover:underline">People</a></li>
                    <li><a href="#" class="hover:underline">Files</a></li>
                </ul>
            </nav>
        </div>
        <div class="flex items-center">
            <button class="bg-transparent border-none text-white mx-2 hover:underline">Settings</button>
            <button class="bg-transparent border-none text-white mx-2 hover:underline">Help</button>
            <img src="@/assets/user-avatar.png" alt="User Avatar" class="h-8 w-8 rounded-full ml-4" />
        </div>
    </header>
</template>
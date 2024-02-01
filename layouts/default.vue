<template>
    <div>
        <body class="bg-white dark:bg-slate-900 font-main text-white">
    <div class="max-w-screen-xl mx-auto h-screen grid grid-rows-[auto_1fr_auto]">
            <ElHeader/>
            
            <div class="flex">
                <div class="w-1/5">
                    <Sidebar/>
                </div>
                <div class="w-4/5">
                    <slot/>  
                </div>
            </div>
            <ElFooter/>
            </div>
        </body>
    </div>
</template>
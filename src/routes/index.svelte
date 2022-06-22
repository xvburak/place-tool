<div class="flex">

    <div class="panel bg-neutral-100 overflow-y-scroll h-screen w-1/2">
        <div class="head border-b-2 border-b-white p-4">
            <p class="text-4xl">🙂🙂</p>
        </div>


        <div class="flex gap-x-4 border-b-2  border-b-white p-4">

            <div class="w-1/2">
                <h2 class="mb-4">Barvy</h2>
                <div class="flex gap-x-4">
                    <div class="w-1/2 flex items-center justify-between">
                        <label for="bgr">Pozadí</label>
                        <input class="p-1 bg-white  rounded-full h-12 w-12" type="color" id="bgr" name="bgr"
                            value="#FAE0E4">
                    </div>
                    <div class="w-1/2 flex items-center justify-between">
                        <label for="bgr">Text</label>
                        <input class="p-1 bg-white rounded-full h-12 w-12" type="color" id="bgr" name="bgr"
                            value="#4C956C">
                    </div>

                </div>
                
            </div>

            <div class="w-1/2 bg-neutral-200">
                <h2 class="mb-4">Velikost textu</h2>
                <div>
                    <input type="radio" id="malá" name="txt-size" value="malá"
                           checked>
                    <label for="malá">malá</label>
                  </div>
              
                  <div>
                    <input type="radio" id="střední" name="txt-size" value="střední">
                    <label for="střední">střední</label>
                  </div>
              
                  <div>
                    <input type="radio" id="velká" name="txt-size" value="velká">
                    <label for="velká">velká</label>
                  </div>
            </div>
            
           
        </div>

        <div class="  border-b-2 border-b-white p-4">
            <div class="flex gap-x-4 bg-neutral-200">
                <h2 class="w-6/12 bg-neutral-50">Název</h2>
                <h2 class="w-3/12 bg-neutral-50">Typ</h2>
                <h2 class="w-2/12">Datum</h2>
                <h2 class="w-1/12">😀</h2>
            </div>

        </div>



        <div class="flex border-b-2 border-b-white p-6">
            <h2>Info a kontakt</h2>
        </div>

    </div>

    <div class="workarea overflow-y-scroll h-screen w-1/2">
        <p>hello</p>
    </div>

</div>

<style>

    h2 {
        @apply text-lg font-semibold;
    }

</style>
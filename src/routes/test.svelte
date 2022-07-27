<script>
    import html2canvas from 'html2canvas';

	function handleClick() {
		html2canvas(document.querySelector("#capture")).then(canvas => {

            document.querySelector("#final").appendChild(canvas)
});
	}
</script>

<button on:click|once={handleClick}>
	Click me
</button>

<div class="p-4 bg-neutral-200">
    <div id="capture" class="w-[200px] h-[200px] border-4 border-red-400 bg-red-200 flex flex-col justify-center">
        <p class="w-full leading-none text-2xl text-center mx-auto">hello</p>
        
    </div>
</div>
<div class="p-4 bg-neutral-400" id="final">
    <p>hello</p>

</div>

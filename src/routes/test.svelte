<script>
    import html2canvas from 'html2canvas';


    function capture_post() {
        html2canvas(document.querySelector("#capture")).then(function (canvas) {
            console.log(canvas);
            const a = document.createElement("a");
            a.href = canvas
                .toDataURL("image/jpeg", 0.92)
                .replace("image/jpeg", "image/octet-stream");
            a.download = "image.jpg";
            a.click();
        });
    }
</script>


<div id="capture" style="padding: 10px; background: #f5da55">
    <div class="text">fesfes</div>
</div>

<button on:click|once={capture_post}>
	Export
</button>


<style>
    .text {
        background-color: #fff;
        font-size: 28px;
        overflow: auto;
        padding: 16px;
    }

    button {
        margin: 5px;
        background-color: rgb(217, 217, 185);
        padding: 8px;
        padding-left: 16px;
        padding-right: 16px;
    }
</style>




<!-- <script>
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
    <div id="capture" class="w-[200px] h-[200px] border-4 p-2 border-red-400 bg-red-300 rounded-md flex flex-col justify-between">
        <p class="w-full leading-none text-2xl text-center mx-auto bg-blue-700 text-white">hello</p>
        <p class="w-full leading-normal text-2xl text-center  mx-auto bg-yellow-700 text-white">yellow omg i dont know</p>
        <p class="w-full leading-none text-2xl text-center mx-auto bg-green-700 text-white">bello</p>
    </div>
</div>
<div class="p-4 bg-neutral-400" id="final">
    <p>hello</p>

</div> -->
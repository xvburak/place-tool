<script context="module">
	export const prerender = true;
</script>

<svelte:head>
	<title>Place</title>
	<meta name="description" content="Place Content Ediotor" />
</svelte:head>

<div class="h-screen flex">
	<!-- Fixed sidebar -->
	<div class="bg-neutral-200 w-1/2 overflow-hidden p-4">
		<!-- Sidebar content -->

		<div class="visuals flex mb-4 border-b border-b-white pb-4">
			<div class="colors w-1/2">
				<h2>Barvy</h2>
				<div class="flex gap-4">
					<div class="flex gap-4 items-center">
						<label for="pozadi">Pozadí</label>
						<input type="color" id="pozadi" name="pozadi" value="#fee4e8">

					</div>

					<div class="flex gap-4 items-center">
						<label for="text">Text</label>
						<input type="color" id="text" name="text" value="#2d9779">

					</div>
				</div>
			</div>
			<div class="text-size w-1/2">
				<h2>Velikost textu</h2>
						<div class="w-full">
							<div class="grid grid-cols-3 gap-2 w-full">

								<div class="inline-block radio">
									<input name="answer" type="radio" id="small" hidden="hidden" value="small" />
									<label for="small"
										class="px-2 py-1 rounded-full flex justify-center items-center  w-full h-8">
										Malá
									</label>
								</div>
								<div class="inline-block radio">
									<input name="answer" type="radio" id="medium" hidden="hidden" value="medium" />
									<label for="medium"
										class="px-2 py-1 rounded-full flex justify-center items-center w-full h-8">
										Střední
									</label>
								</div>
								<div class="inline-block radio">
									<input name="answer" type="radio" id="big" hidden="hidden" value="big" />
									<label for="big"
										class="px-4 py-1 rounded-full flex justify-center items-center  w-full h-8">
										Velká
									</label>
								</div>
							</div>
						</div>
			</div>
		</div>

			<div class="serie mb-4 border-b border-b-white pb-4">
				<h2>Série</h2>
				<div class="">
					<input class="w-full px-4 py-1 h-8 rounded-full mb-2" type="text" name="serie-name" id="serie-name" placeholder="Název série">
					<div class="flex space-x-2">
						<input class="w-full px-4 py-1 h-8 rounded-full" type="date" name="serie-month" id="serie-month">
						<input class="h-8 w-8 text-center rounded-full" type="text" name="serie-emoji" id="serie-emoji" placeholder="🔮">
					</div>
				</div>
				
			</div>
			<div class="events mb-4 border-b border-b-white pb-4">
				<h2>Události</h2>
				<div class="">
					<input class="w-full px-4 py-1 h-8 rounded-full mb-2" type="text" name="event-name" id="event-name" placeholder="Název události">
					<div class="flex space-x-2 mb-4">
						<input class="w-full px-4 py-1 h-8 rounded-full" type="date" name="event-date" id="event-date">
						<input class="w-full px-4 py-1 h-8 rounded-full" type="text" name="event-type" id="event-type" placeholder="Typ události">
						<input class="h-8 w-8 text-center rounded-full" type="text" name="event-emoji" id="event-emoji" placeholder="🎨">
					</div>
				</div>

				<div class="">
					<input class="w-full px-4 py-1 h-8 rounded-full mb-2" type="text" name="event-name" id="event-name" placeholder="Název události">
					<div class="flex space-x-2 mb-4">
						<input class="w-full px-4 py-1 h-8 rounded-full" type="date" name="event-date" id="event-date">
						<input class="w-full px-4 py-1 h-8 rounded-full" type="text" name="event-type" id="event-type" placeholder="Typ události">
						<input class="h-8 w-8 text-center rounded-full" type="text" name="event-emoji" id="event-emoji" placeholder="🏔">
					</div>
				</div>

				<div class="">
					<input class="w-full px-4 py-1 h-8 rounded-full mb-2" type="text" name="event-name" id="event-name" placeholder="Název události">
					<div class="flex space-x-2 mb-4">
						<input class="w-full px-4 py-1 h-8 rounded-full" type="date" name="event-date" id="event-date">
						<input class="w-full px-4 py-1 h-8 rounded-full" type="text" name="event-type" id="event-type" placeholder="Typ události">
						<input class="h-8 w-8 text-center rounded-full" type="text" name="event-emoji" id="event-emoji" placeholder="🌸">
					</div>
				</div>

				<div class="">
					<input class="w-full px-4 py-1 h-8 rounded-full mb-2" type="text" name="event-name" id="event-name" placeholder="Název události">
					<div class="flex space-x-2">
						<input class="w-full px-4 py-1 h-8 rounded-full" type="date" name="event-date" id="event-date">
						<input class="w-full px-4 py-1 h-8 rounded-full" type="text" name="event-type" id="event-type" placeholder="Typ události">
						<input class="h-8 w-8 text-center rounded-full" type="text" name="event-emoji" id="event-emoji" placeholder="🌱">
					</div>
				</div>
			</div>


		<div class="info">

		</div>
	</div>

	<!-- Scroll wrapper -->
	<div class="flex-1 flex overflow-hidden">
		<!-- Scrollable container -->
		<div class="flex-1">

		</div>
	</div>
</div>

<style>
	h2 {
		@apply text-xl mb-4 font-semibold;
	}


	.radio input~label {
		@apply bg-white text-neutral-400 uppercase text-xs tracking-widest;
	}

	.radio input:checked~label {
		@apply text-purple-400 ring-2 ring-purple-400;
	}


	/* .sizes div {
		@apply w-full flex flex-col justify-center rounded-full text-neutral-400;
	}

	.sizes label {
		@apply w-full h-8 bg-white text-center rounded-full;
	} */

	/* .sizes div {
		@apply flex-1 w-full
	} */

	input[type="radio"] {
		@apply appearance-none;
	}

	/* input[type="radio"]:checked+label,
	.checked+label {
	@apply text-purple-400 bg-amber-300;
	} */





	input[type="color"] {
		-webkit-appearance: none;
		border: none;
		@apply w-8 h-8 rounded-full bg-white;
	}

	input[type="color"]::-webkit-color-swatch-wrapper {
		@apply p-1;
	}

	input[type="color"]::-webkit-color-swatch {
		border: none;
		@apply rounded-full;
	}
</style>
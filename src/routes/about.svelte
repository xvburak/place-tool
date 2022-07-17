<script>
	// import logo from '$lib/assets/place-logo.svg';
	import PlaceLogo from '$lib/PlaceLogo.svelte';

	let series = {
		title: 'Název série',
		date: '',
		emoji: '🥬'
	}

	let colors = {
		primary: '#FAE0E4',
		secondary: '#4C956C'
	}

	let actions = [{
			title: 'Název události 1',
			type: 'live',
			day: '0',
			month: '0',
			emoji: '🔮'
		},
		{
			title: 'Název události 2',
			type: 'live',
			day: '0',
			month: '0',
			emoji: '🎧'
		},
		{
			title: 'Název události 3',
			type: 'live',
			day: '0',
			month: '0',
			emoji: '🗻'
		},
		{
			title: 'Název události 4',
			type: 'live',
			day: '0',
			month: '0',
			emoji: '🍤'
		},


	]
</script>

<svelte:head>
	<title>Place</title>
	<meta name="description" content="Place Content Ediotor" />
</svelte:head>

<div class="h-screen flex">
	<!-- Fixed sidebar -->
	<div class="bg-neutral-200 w-2/5 overflow-hidden p-4">
		<!-- Sidebar content -->

		<div class="visuals flex mb-4 border-b border-b-white pb-4">
			<div class="colors w-1/2">
				<h2>Barvy</h2>
				<div class="flex gap-4">
					<div class="flex gap-4 items-center">
						<label for="pozadi">Pozadí</label>
						<input type="color" id="pozadi" name="pozadi" bind:value={colors.primary}>

					</div>

					<div class="flex gap-4 items-center">
						<label for="text">Text</label>
						<input type="color" id="text" name="text" bind:value={colors.secondary}>

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
								class="px-2 py-1 rounded-full flex justify-center items-center  w-full h-10">
								Malá
							</label>
						</div>
						<div class="inline-block radio">
							<input name="answer" type="radio" id="medium" hidden="hidden" value="medium" />
							<label for="medium"
								class="px-2 py-1 rounded-full flex justify-center items-center w-full h-10">
								Střední
							</label>
						</div>
						<div class="inline-block radio">
							<input name="answer" type="radio" id="big" hidden="hidden" value="big" />
							<label for="big"
								class="px-4 py-1 rounded-full flex justify-center items-center  w-full h-10">
								Velká
							</label>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="serie mb-4 border-b border-b-white pb-4">
			<h2>Série</h2>
			<div class="flex space-x-2 mb-2">
				<input class="w-full p-4 h-10 rounded-full" type="text" bind:value={series.title}
					placeholder="Název události">
				<!-- <div class="flex w-1/4 space-x-2">
						<input class="w-full p-4 h-10 rounded-full" type="number" >
						<input class="w-full p-4 h-10 rounded-full" type="number" >
					</div> -->

				<input class="h-10 w-10 text-center rounded-full" type="text" bind:value={series.emoji}>
			</div>

		</div>
		<div class="events mb-4 border-b border-b-white pb-4">
			<h2>Události</h2>
			{#each actions as action}
				<div class="flex space-x-2 mb-2">
					<input class="w-5/12 p-4 h-10 rounded-full" bind:value={action.title} placeholder="Název události">
					<input class="w-3/12 p-4 h-10 rounded-full" type="text" bind:value={action.type} placeholder="Typ události">
					<div class="flex w-4/12 space-x-2">
						<input class="w-full p-4 h-10 rounded-full" type="number" min="1" max="31" bind:value={action.day}>
						<input class="w-full p-4 h-10 rounded-full" type="number" min="1" max="12" bind:value={action.month}>
					</div>
					<!-- <input class="w-1/4 p-4 h-10 rounded-full" type="date" bind:value={action.date}> -->
					<input class="h-10 w-10 text-center rounded-full" type="text" bind:value={action.emoji}>
				</div>
				{/each} 
			</div>


		<div class="info">
			<h2>Info & kontakt</h2>
				<div class="flex space-x-2 mb-2">
					<textarea class="w-full p-4 rounded-[16px]" name="event-name" id="event-name" cols="40" rows="4">každý pátek v 18:00
online na @placezlin
Youtube → AC Zlín
placezlin@gmail.com</textarea>
				</div>


		</div>
	</div>

	<div class="flex-1 overflow-clip w-full bg-yellow-100 p-8">
		<div class="bg-purple-100 flex flex-col space-y-4 h-full">
			<div class="bg-green-100"> 
				<p>hello</p>
			</div>

			<div class="bg-neutral-100 flex-grow flex flex-col justify-center"> 
				<div class="w-full h-full bg-stone-300 flex overflow-visible">
					<div class="w-[540px] h-[540px] bg-blue-600 mx-auto my-auto">
						
					</div>

					<div class="w-[540px] h-[540px] bg-blue-600 mx-auto my-auto">
						
					</div>

					<div class="w-[540px] h-[540px] bg-blue-600 mx-auto my-auto">
						
					</div>
				</div>
			</div>

			<div class="bg-green-100"> 
				<p>hello</p>
			</div>
		</div>

	</div>

		<!-- <div class="flex-1 flex overflow-clip w-full">
				
			<div class="mx-auto space-x-8 w-full bg-green-100 flex p-4 snap-mandatory snap-x overflow-scroll">
				
				{#each actions as action}
					<div class="bg-blue-100 snap-center w-full flex-shrink-0">
						<div  class="instagram-post" style="background-color:{colors.primary}; color:{colors.secondary};">
							<p class="text-[38px] text-center">{action.emoji}</p>
							<p class="text-[68px] tracking-normal leading-[1] uppercase text-center">{action.title}</p>
							<div class="flex justify-center">
								<PlaceLogo color={colors.secondary}/>
							</div>
						</div>
					</div>
				{/each}
				
			</div>
	</div> -->
</div>

<style>
	h2 {
		@apply text-sm uppercase tracking-widest mb-4 ;
	}

	.superscript { position: relative; font-size: 60%; top: 0.1em}

	.instagram-post {
		@apply font-suisse w-[540px] h-[540px] flex flex-col justify-between p-8 mb-8 my-auto ;
	}

	.instagram-story {
		@apply font-suisse w-[540px] h-[960px] flex flex-col justify-between px-8 py-32 mb-8;
	}

	.facebook-cover {

	}

	.a3-poster {

	}
 


	input[type="radio"] {
		@apply appearance-none;
	}

	.radio input:checked~label {
		@apply text-purple-400 ring-2 ring-purple-400;
	}

	.radio input~label {
		@apply bg-white text-neutral-400 uppercase text-xs tracking-widest;
	}


	input[type="color"] {
		-webkit-appearance: none;
		border: none;
		@apply w-10 h-10 rounded-full bg-white;
	}

	input[type="color"]::-webkit-color-swatch-wrapper {
		@apply p-1;
	}

	input[type="color"]::-webkit-color-swatch {
		border: none;
		@apply rounded-full;
	}

</style>
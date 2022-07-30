<script>
	import {
		marked
	} from 'marked';
	import domtoimage from 'dom-to-image';
	import {
		saveAs
	} from 'file-saver';

	function printDocument(documentId) {
		var doc = document.getElementById(documentId);
		print();
	}

	function capture_post(number) {
		domtoimage.toPng(document.getElementById(`my-node-${number}`), {
				width: 1080,
				height: 1080,
				style: {
					'transform': 'scale(2)',
					'transform-origin': 'top left'
				}
			})
			.then(function (dataUrl) {
				var link = document.createElement('a');
				link.download = `post-${number}.png`;
				link.href = dataUrl;
				link.click();
			});
	}

	function capture_cover(number) {
		domtoimage.toPng(document.getElementById(`my-node-${number}f`), {
				width: 1640,
				height: 624,
				style: {
					'transform': 'scale(3.08)',
					'transform-origin': 'top left'
				}
			})
			.then(function (dataUrl) {
				var link = document.createElement('a');
				link.download = `cover.png`;
				link.href = dataUrl;
				link.click();
			});
	}

	function capture_story(number) {
		domtoimage.toPng(document.getElementById(`my-node-${number}s`), {
				width: 1080,
				height: 1920,
				style: {
					'transform': 'scale(3.56)',
					'transform-origin': 'top left'
				}
			})
			.then(function (dataUrl) {
				var link = document.createElement('a');
				link.download = `story-${number}.png`;
				link.href = dataUrl;
				link.click();
			});
	}


	// import logo from '$lib/assets/place-logo.svg';
	import PlaceLogo from '$lib/PlaceLogo.svelte';

	let desc = `každý pátek v 18:00 <br>
online na @placezlin <br>
Youtube → AC Zlín <br> <br>
placezlin@gmail.com
`;

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
			title: 'Akce první týden',
			type: 'live',
			day: '1',
			month: '1',
			emoji: '🔮'
		},
		{
			title: 'Akce druhý týden',
			type: 'live',
			day: '8',
			month: '1',
			emoji: '🎧'
		},
		{
			title: 'Akce třetí týden',
			type: 'live',
			day: '15',
			month: '1',
			emoji: '🗻'
		},
		{
			title: 'Akce čtvrtý týden',
			type: 'live',
			day: '21',
			month: '1',
			emoji: '🍤'
		},
		{
			title: 'Akce pátý týden',
			type: 'live',
			day: '28',
			month: '1',
			emoji: '🏳️‍🌈'
		},


	]
</script>

<svelte:head>
	<title>Place</title>
	<meta name="description" content="Place Content Ediotor" />
</svelte:head>




<div class="h-screen flex">
	<!-- Fixed sidebar -->
	<div class="bg-neutral-200 w-2/5 overflow-hidden p-4 print:hidden">
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
			<!-- <div class="text-size w-1/2">
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
			</div> -->
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
					<textarea bind:value={desc} class="w-full p-4 rounded-[16px]"  cols="40" rows="4"></textarea>
				</div>
		</div>
	</div>

		<div class="flex-1 snap-mandatory snap-y flex flex-col overflow-scroll w-full">

			<div class="snap-center flex flex-col justify-evenly w-full h-full flex-shrink-0 p-4">

				<div class="w-full flex justify-center">

					<div id="a3"  class="a3 font-suisse print:p-16 p-4 flex flex-col w-[382.08px] h-[540px] print:w-[297mm] print:h-[420mm]" style="background-color:{colors.primary}; color:{colors.secondary};">
						
						
						<div class="h-full flex flex-col justify-between">

							<div class="flex justify-between">
								<div class="flex justify-center logomini">
									<PlaceLogo color={colors.secondary}/>
								</div>
								<p class="text-[28px] print:text-[70px] leading-none text-center">{series.emoji}</p>
							</div>


							<p class="text-[52px] print:text-[136px] tracking-normal leading-[1] uppercase text-center">{series.title}</p>


							<div class="flex justify-between text-[9px] print:text-[28px]">
								<div class="w-full uppercase">
									{#each actions as action}
										{#if action.title}
											<div class="flex space-x-4">
												<div class="flex">
													<p class="tabular-nums lining-nums"> {('0' + action.day).slice(-2)}</p>
													<span> .</span>
													<p class="tabular-nums lining-nums">{('0' + action.month).slice(-2)}</p>
													<span> .</span>
												</div>
												<div class="flex space-x-1">
													<p class="">{action.title}</p>
													<p class="superscript lowercase">{action.type}</p>
												</div>
											</div>
										{/if}
									{/each}
								</div>
								<div class="text-right">
									{@html marked(desc)}
								</div>
							</div>



						</div>
					</div>
					</div>

					<div class="w-full print:hidden flex justify-center">
						<button on:click={() => printDocument("a3")}>
							Export
						</button>
					</div>
				</div>






				<!-- Instagram Post -->
			<div class="snap-center flex flex-col justify-evenly w-full h-full flex-shrink-0 p-4">
						
					<div class="w-full flex justify-center">

						<div id="my-node-x"  class="instagram-post" style="background-color:{colors.primary}; color:{colors.secondary};">
							<div class="">
								<p class="text-[38px] text-center">{series.emoji}</p>
							</div>
							
							<div class="h-full flex flex-col justify-center space-y-6">
								<p class="text-[68px] tracking-normal leading-[1] uppercase text-center">{series.title}</p>
								<div class="mx-auto uppercase">
									
									{#each actions as action}
										{#if action.title}
											<div class="flex space-x-4 text-[18px]">
												<div class="flex">
													<p class="tabular-nums lining-nums"> {('0' + action.day).slice(-2)}</p>
													<span> .</span>
													<p class="tabular-nums lining-nums">{('0' + action.month).slice(-2)}</p>
													<span> .</span>
												</div>
												<div class="flex space-x-1">
													<p class="">{action.title}</p>
													<p class="superscript lowercase">{action.type}</p>
												</div>
											</div>
										{/if}
										
									{/each}
								</div>
							</div>
							<div class="flex justify-center">
								<PlaceLogo color={colors.secondary}/>
							</div>
						</div>
						</div>

						<div class="w-full flex justify-center">
							<button on:click={() => capture_post("x")}>
								Export
							</button>
						</div>
					</div>
				<div class="snap-center flex flex-col justify-evenly w-full h-full flex-shrink-0 p-4">

					<div class="w-full flex justify-center">

						<div id="my-node-xs"  class="instagram-story" style="background-color:{colors.primary}; color:{colors.secondary};">
							<div class="">
								<p class="text-[26px] text-center">{series.emoji}</p>
							</div>
							
							<div class="h-full flex flex-col justify-center space-y-6">
								<p class="text-[39px] tracking-normal leading-[1] uppercase text-center">{series.title}</p>
								<div class="mx-auto uppercase">
									{#each actions as action}
										{#if action.title}
											<div class="flex space-x-4 text-[12px]">
												<div class="flex">
													<p class="tabular-nums lining-nums"> {('0' + action.day).slice(-2)}</p>
													<span> .</span>
													<p class="tabular-nums lining-nums">{('0' + action.month).slice(-2)}</p>
													<span> .</span>
												</div>
												<div class="flex space-x-1">
													<p class="">{action.title}</p>
													<p class="superscript lowercase">{action.type}</p>
												</div>
											</div>
										{/if}
										
									{/each}
								</div>
							</div>
							<div class="flex justify-center logomini">
								<PlaceLogo color={colors.secondary}/>
							</div>
						</div>
						</div>

						<div class="w-full flex justify-center">
							<button on:click={() => capture_story("x")}>
								Export
							</button>
						</div>
					</div>
				
					<div class="snap-center flex flex-col justify-evenly w-full h-full flex-shrink-0 p-4">

						<div class="w-full flex justify-center">
	
							<div id="my-node-xf"  class="facebook-cover" style="background-color:{colors.primary}; color:{colors.secondary};">
								
								
								<div class="h-full flex flex-col justify-evenly">
									<div class="">
										<p class="text-[22px] leading-none text-center">{series.emoji}</p>
									</div>
									<p class="text-[30px] tracking-normal leading-[1] uppercase text-center">{series.title}</p>
									<div class="mx-auto uppercase">
										{#each actions as action}
											{#if action.title}
												<div class="flex space-x-4 text-[9px]">
													<div class="flex">
														<p class="tabular-nums lining-nums"> {('0' + action.day).slice(-2)}</p>
														<span> .</span>
														<p class="tabular-nums lining-nums">{('0' + action.month).slice(-2)}</p>
														<span> .</span>
													</div>
													<div class="flex space-x-1">
														<p class="">{action.title}</p>
														<p class="superscript lowercase">{action.type}</p>
													</div>
												</div>
											{/if}
											
										{/each}
									</div>
								</div>
							</div>
							</div>
	
							<div class="w-full flex justify-center">
								<button on:click={() => capture_cover("x")}>
									Export
								</button>
							</div>
						</div>
	


				{#each actions as action , index}
				{#if action.title}
				<div class="snap-center flex flex-col justify-evenly w-full h-full flex-shrink-0 p-4">
						
					<div class="flex w-full justify-center">


					<div id="my-node-{index}" class="instagram-post" style="background-color:{colors.primary}; color:{colors.secondary};">
						<div class="">
							<p class="text-[38px] text-center">{action.emoji}</p>
						</div>
						<div class="h-full flex flex-col justify-center">
							<p class="text-[64px] tracking-normal leading-[1] uppercase text-center">{action.title}</p>
						</div>
						<div class="flex justify-center">
							<PlaceLogo color={colors.secondary}/>
						</div>

					</div>
				</div>
					<div class="w-full flex justify-center">
						<button on:click={() => capture_post(`${index}`)}>
							Export
						</button>
					</div>
				</div>
				{/if}
					
				{/each}
<!-- Instagram Story -->
			
				{#each actions as action , index}
				{#if action.title}
				<div class="snap-center flex flex-col justify-evenly w-full h-full flex-shrink-0 p-4">
						
					<div class="flex w-full justify-center">


					<div id="my-node-{index}s" class="instagram-story" style="background-color:{colors.primary}; color:{colors.secondary};">
						<div class="">
							<p class="text-[26px] text-center">{action.emoji}</p>
						</div>
						<div class="h-full flex flex-col justify-center">
							<p class="text-[39px] tracking-normal leading-[1] uppercase text-center">{action.title}</p>
						</div>
						<div class="flex justify-center logomini">
							<PlaceLogo color={colors.secondary}/>
						</div>

					</div>
				</div>
					<div class="w-full flex justify-center">
						<button on:click={() => capture_story(`${index}`)}>
							Export
						</button>
					</div>
				</div>
				{/if}
					
				{/each}
			</div>


		

</div>

<style>
	h2 {
		@apply text-sm uppercase tracking-widest mb-4 ;
	}

	.superscript { position: relative; font-size: 60%; top: 0.1em}

	.instagram-post {
		width: 540px;
		height: 540px;
		@apply  font-suisse p-8 flex flex-col;
	}

	.instagram-story {
		width: 303px;
		height: 540px;
		@apply  font-suisse px-8 py-16 flex flex-col;
	}

	/* .a3 {
		width: 382.08px;
		height: 540px;
		@apply font-suisse p-4 flex flex-col;
	} */



	.facebook-cover {
		width: 540px;
		height: 205.46px;
		@apply  font-suisse px-20 flex flex-col;
	}

	.logomini {
		zoom: 75%;
	}

	@media print {
		.logomini {
		zoom: 200%;
	}
}

	.logomaxi {
		zoom: 125%;
	}

	.logominimini {
		zoom: 50%;
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

	button {
		@apply px-2 py-1 rounded-full flex justify-center items-center  w-1/4 h-10 bg-neutral-200 text-neutral-600 uppercase text-xs tracking-widest;
	}


</style>
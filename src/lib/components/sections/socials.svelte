<script lang="ts">
	import { Button } from 'flowbite-svelte';

	const githubUrl = 'https://github.com/aydreas';
	const linkedinUrl = 'https://www.linkedin.com/in/andreas-schloessl/';
</script>

<Button
	href={linkedinUrl}
	target="_blank"
	rel="noopener noreferrer external"
	color="primary"
	class="flex items-center"
>
	<!-- LinkedIn icon -->
	<svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
		<path
			d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.352V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.369-1.85 3.602 0 4.268 2.37 4.268 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.116 20.452H3.553V9h3.563v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z"
		/>
	</svg>
	<span>LinkedIn</span>
</Button>
<Button
	href={githubUrl}
	target="_blank"
	rel="noopener noreferrer external"
	color="light"
	class="flex items-center"
>
	<!-- GitHub icon -->
	<svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
		<path
			d="M12 .5C5.648.5.5 5.648.5 12c0 5.086 3.292 9.385 7.862 10.905.575.101.786-.25.786-.556 0-.274-.01-1.182-.015-2.144-3.198.695-3.874-1.357-3.874-1.357-.523-1.329-1.277-1.684-1.277-1.684-1.044-.714.079-.7.079-.7 1.153.081 1.76 1.184 1.76 1.184 1.028 1.762 2.695 1.253 3.35.957.104-.744.402-1.253.731-1.54-2.553-.29-5.236-1.277-5.236-5.685 0-1.256.45-2.283 1.184-3.087-.119-.29-.513-1.458.112-3.04 0 0 .965-.309 3.164 1.18.916-.255 1.899-.382 2.877-.387.977.005 1.96.132 2.877.387 2.197-1.49 3.161-1.18 3.161-1.18.626 1.582.232 2.75.114 3.04.737.804 1.183 1.831 1.183 3.087 0 4.42-2.688 5.39-5.252 5.674.414.357.782 1.063.782 2.143 0 1.548-.014 2.795-.014 3.176 0 .31.207.664.792.552C20.21 21.38 23.5 17.082 23.5 12c0-6.352-5.148-11.5-11.5-11.5Z"
		/>
	</svg>
	<span>GitHub</span>
</Button>

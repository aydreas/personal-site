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
	<i class="devicon-linkedin-plain text-xl mr-2" aria-hidden="true"></i>
	<span>LinkedIn</span>
</Button>
<Button
	href={githubUrl}
	target="_blank"
	rel="noopener noreferrer external"
	color="light"
	class="flex items-center"
>
	<i class="devicon-github-original text-xl mr-2" aria-hidden="true"></i>
	<span>GitHub</span>
</Button>

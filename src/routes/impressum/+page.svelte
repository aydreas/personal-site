<script>
	import Section from '$lib/components/section.svelte';
	import Container from '$lib/components/container.svelte';
	import { Heading, P, Li, A, List } from 'flowbite-svelte';
	import { m } from '$lib/paraglide/messages';
</script>

<Section>
	<Container class="space-y-4">
		<Heading tag="h1" class="mb-8">{m['impressum.headline']()}</Heading>

		<Heading tag="h2">{m['impressum.legalHeadline']()}</Heading>
		<P>{m['impressum.responsibleIntro']()}</P>
		<List class="pl-6">
			<Li>
				<strong>{m['impressum.responsible.nameLabel']()}:</strong>
				{m['impressum.responsible.nameValue']()}
			</Li>
			<Li>
				<strong>{m['impressum.responsible.addressLabel']()}:</strong>
				{m['impressum.responsible.addressValue']()}
			</Li>
			<Li>
				<strong>{m['impressum.responsible.contactLabel']()}:</strong>
				<A href="mailto:schloessl.andreas@gmail.com" target="_blank" rel="noopener external">
					schloessl.andreas@gmail.com
				</A>
			</Li>
		</List>

		<Heading tag="h3">{m['impressum.companyHeadline']()}</Heading>
		<List class="pl-6">
			<Li><strong>{m['impressum.company.formLabel']()}:</strong> {m['impressum.company.form']()}</Li
			>
			<Li
				><strong>{m['impressum.company.authorityLabel']()}:</strong>
				{m['impressum.company.authority']()}</Li
			>
			<Li
				><strong>{m['impressum.company.memberLabel']()}:</strong>
				{m['impressum.company.member']()}</Li
			>
			<Li
				><strong>{m['impressum.company.professionLabel']()}:</strong>
				{m['impressum.company.profession']()}</Li
			>
			<Li>
				<strong>{m['impressum.company.lawsLabel']()}:</strong>
				{m['impressum.company.lawsText']()}
				<A href="https://www.ris.bka.gv.at" target="_blank" rel="noopener">ris.bka.gv.at</A>
			</Li>
		</List>

		<Heading tag="h3">{m['impressum.liabilityHeadline']()}</Heading>
		<P>{m['impressum.liabilityText']()}</P>

		<Heading tag="h3">{m['impressum.copyrightHeadline']()}</Heading>
		<P>{m['impressum.copyrightText']()}</P>

		<Heading tag="h3">{m['impressum.imagesHeadline']()}</Heading>
		<P>{m['impressum.imagesText']()}</P>
	</Container>
</Section>

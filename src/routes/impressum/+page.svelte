<script>
	import Section from '$lib/components/section.svelte';
	import Container from '$lib/components/container.svelte';
	import { Heading, P, Li, A, List } from 'flowbite-svelte';
</script>

<Section>
	<Container class="space-y-4">
		<Heading tag="h1" class="mb-8">Impressum</Heading>

		<Heading tag="h2">
			Informationspflicht gemäß § 5 ECG, § 14 UGB, § 63 GewO und § 24 MedienG
		</Heading>
		<P>Verantwortlich für den Inhalt dieser Website:</P>
		<List class="pl-6">
			<Li><strong>Name:</strong> Andreas Schloessl</Li>
			<Li>
				<strong>Adresse:</strong> <em>Bitte Straße, Hausnummer angeben</em>, 1010 Wien, Österreich
			</Li>
			<Li>
				<strong>Kontakt:</strong>
				<A href="mailto:schloessl.andreas@gmail.com" target="_blank" rel="noopener external">
					schloessl.andreas@gmail.com
				</A>
			</Li>
		</List>

		<Heading tag="h3">Unternehmensdaten</Heading>
		<List class="pl-6">
			<Li><strong>Unternehmensform:</strong> Einzelunternehmen (Selbstständig)</Li>
			<Li><strong>UID-Nummer:</strong> <em>falls vorhanden, hier eintragen</em></Li>
			<Li><strong>Gewerbebehörde:</strong> Magistrat der Stadt Wien</Li>
			<Li><strong>Mitglied bei:</strong> Wirtschaftskammer Wien (WKO)</Li>
			<Li><strong>Berufsbezeichnung:</strong> IT-Dienstleistungen, Softwareentwicklung</Li>
			<Li>
				<strong>Berufsrechtliche Vorschriften:</strong> Gewerbeordnung (GewO) abrufbar unter <A
					href="https://www.ris.bka.gv.at"
					target="_blank"
					rel="noopener">ris.bka.gv.at</A
				>
			</Li>
		</List>

		<Heading tag="h3">Haftungsausschluss</Heading>
		<P>
			Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
			Vollständigkeit und Aktualität der Inhalte wird jedoch keine Gewähr übernommen. Als
			Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
			allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch
			nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder
			nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen
			zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
			bleiben hiervon unberührt.
		</P>

		<Heading tag="h3">Urheberrecht</Heading>
		<P>
			Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
			österreichischen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die
			Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen
			des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw.
			Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen
			Gebrauch gestattet.
		</P>

		<Heading tag="h3">Bildnachweise</Heading>
		<P>
			Sofern nicht anders angegeben, stammen Grafiken, Icons und Bilder von eigenen Quellen oder
			freien Bibliotheken. Marken- und Produktnamen sind Eigentum der jeweiligen Rechteinhaber.
		</P>

		<Heading tag="h3">Online-Streitbeilegung</Heading>
		<P>
			Verbraucher haben die Möglichkeit, Beschwerden an die Online-Streitbeilegungsplattform der EU
			zu richten: <A
				href="https://ec.europa.eu/consumers/odr"
				target="_blank"
				rel="noopener external">ec.europa.eu/consumers/odr</A
			>. Meine E-Mail-Adresse finden Sie oben im Impressum.
		</P>

		<Heading tag="h3">Datenschutz</Heading>
		<P>Hinweise zum Datenschutz finden Sie in der Datenschutzerklärung auf dieser Website.</P>
	</Container>
</Section>

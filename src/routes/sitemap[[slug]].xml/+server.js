export async function GET({params}) {

	let slug = 'list'
	if(params.slug){
		slug = params.slug.slice(1)
	}
	const data = await fetch(import.meta.env.VITE_API_URL + '/sitemap/' + slug);
	const body = await data.text();

	return new Response(
		body,
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
}

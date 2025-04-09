import { Client } from '@notionhq/client';
import { PRIVATE_API_KEY_NOTION, PRIVATE_DATABASE_ID } from '$env/static/private';
import ProductsStore from '$lib/stores/productsStore';

// export function altImages(data:any) {
// 	const alt = 'Serplastin - ' + data
// 	return alt
// }

export async function getProducts() {
	// @ts-ignore
	let products = [];

	// ProductsStore.subscribe((data) => {
	// 	products = data;
	// });

	// if (products.length == 0) {
		await getDataFromNotion().then((data) => {
			// ProductsStore.set(data);
			products = data;
		});
	// }
	// @ts-ignore
	return products;
}

export async function getDataFromNotion() {
    console.log('notion');
	const notion = new Client({
		auth: PRIVATE_API_KEY_NOTION,
	});

	const query = {
		database_id: PRIVATE_DATABASE_ID,
	};

	const { results } = await notion.databases.query(query);
	let PRODUCTS = [];
	let TIME = [];
    let cartegories = []

	PRODUCTS = results.map((page) => {


		//  get categories
		
		// @ts-ignore
		const { properties } = page;
		const { ID, Nombre, Descripcion, Imagen, Categoria } = properties;
		
		cartegories = (Categoria.select) ? [...cartegories, Categoria.select.name] : cartegories
		TIME = Imagen.files[0].file.expiry_time;

		return {
			id: ID.unique_id.number,
			title: Nombre.title && Nombre.title.length > 0 ? Nombre.title[0].plain_text : null,
			description:
				Descripcion.rich_text && Descripcion.rich_text.length > 0
					? Descripcion.rich_text[0].plain_text
					: null,
			category: (Categoria.select) ? Categoria.select.name : null,
			image: Imagen.files[0] ? Imagen.files[0].file.url : null,
			
		};
	});
	cartegories = Array.from(new Set(cartegories));
	console.log(cartegories);
	return {PRODUCTS,TIME,cartegories};
}

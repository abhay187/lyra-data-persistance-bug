import { create, insertBatch, search, insert } from '@lyrasearch/lyra'
import data from './movies.json'
import { persistToFile } from '@lyrasearch/plugin-data-persistence'

const db = create({
	schema: {
		id: 'number',
		title: 'string',
		overview: 'string'
	}
})

const addData = async () => {
	const res = await insertBatch(db, data)
	console.log('res : ', res)
}

addData()

const searchFn = () => {
	const term = document.getElementById('gsearch').value
	const searchResult = search(db, {
		term,
		properties: '*',
		tolerance: 1,
		limit: 100
	})
	console.log('Count : ', searchResult.count)
	searchResult.hits.map((res) => console.log(res.document))
	console.log('****')
}

export const persistDb = (element) => {
	element.addEventListener('click', () => {
		const filePath = persistToFile(db, 'binary', './quotes.msp')
		console.log(filePath)
	})
}

export const setupSearch = (element) => {
	element.addEventListener('click', () => {
		searchFn()
	})
}

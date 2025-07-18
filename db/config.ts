import { defineDb, column, defineTable } from 'astro:db';

const Book = defineTable({
	columns: {
	book_id: column.number({primaryKey: true}),
	title: column.text(),
	status: column.text(),
	date_finished: column.date({optional: true}),
	cover: column.text(),
	notes: column.text({optional: true}),
	author_id: column.number({ references: () => Author.columns.author_id}),
	},
});

const Author = defineTable({
	columns: {
		author_id: column.number({primaryKey: true}),
		name: column.text(),
	},
});

// https://astro.build/db/config
export default defineDb({
  tables: {Book, Author}
});

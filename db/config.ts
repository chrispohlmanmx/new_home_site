import { column, defineDb, defineTable, NOW } from "astro:db";

const media = defineTable({
    columns: {
        name: column.text(),
        medium: column.text(),
        author: column.text({ optional: true }),
        created: column.date({ default: NOW }),
    },
});

export default defineDb({
    tables: {
        media,
    },
});

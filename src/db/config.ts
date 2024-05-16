import { column, defineDb, defineTable, NOW } from "astro:db";

const Media = defineTable({
    columns: {
        name: column.text(),
        medium: column.text({ unique: true }),
        author: column.text({ optional: true }),
        created: column.date({ default: NOW }),
    },
});

export default defineDb({
    tables: {
        Media,
    },
});

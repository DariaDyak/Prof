import { pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';

export const products = pgTable('products', {
    id: serial('id').primaryKey(),
    title: varchar('title', { length: 255 }).notNull(),
    short_description: text('short_description').notNull(),
    platform: varchar('platform', { length: 100 }).notNull(),
    registration_num: varchar('registration_num', { length: 50 }),
    reg_program_num: varchar('reg_program_num', { length: 50 }),
    certificate_image: text('certificate_image'),
    description: text('description').notNull(),
});
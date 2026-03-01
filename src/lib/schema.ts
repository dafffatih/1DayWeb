import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

// --- Better Auth Schema ---
export const user = sqliteTable("user", {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull().unique(),
    emailVerified: integer("email_verified", { mode: "boolean" }).notNull(),
    image: text("image"),
    createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
    updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
    role: text("role").default("client"), // "admin" | "client"
});

export const session = sqliteTable("session", {
    id: text("id").primaryKey(),
    expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
    token: text("token").notNull().unique(),
    createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
    updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
    ipAddress: text("ip_address"),
    userAgent: text("user_agent"),
    userId: text("user_id").notNull().references(() => user.id)
});

export const account = sqliteTable("account", {
    id: text("id").primaryKey(),
    accountId: text("account_id").notNull(),
    providerId: text("provider_id").notNull(),
    userId: text("user_id").notNull().references(() => user.id),
    accessToken: text("access_token"),
    refreshToken: text("refresh_token"),
    idToken: text("id_token"),
    accessTokenExpiresAt: integer("access_token_expires_at", { mode: "timestamp" }),
    refreshTokenExpiresAt: integer("refresh_token_expires_at", { mode: "timestamp" }),
    scope: text("scope"),
    password: text("password"),
    createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
    updatedAt: integer("updated_at", { mode: "timestamp" }).notNull()
});

export const verification = sqliteTable("verification", {
    id: text("id").primaryKey(),
    identifier: text("identifier").notNull(),
    value: text("value").notNull(),
    expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
    createdAt: integer("created_at", { mode: "timestamp" }),
    updatedAt: integer("updated_at", { mode: "timestamp" })
});


// --- Application Specific Schema ---
export const packages = sqliteTable("packages", {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    price: real("price").notNull(),
    maxDeliveryDays: integer("max_delivery_days").notNull(),
    description: text("description"),
});

export const orders = sqliteTable("orders", {
    id: text("id").primaryKey(),
    userId: text("user_id").notNull().references(() => user.id),
    packageId: text("package_id").notNull().references(() => packages.id),
    status: text("status").notNull().default("Pending"), // "Pending", "In Progress", "Review", "Completed"
    intakeDetails: text("intake_details"),
    createdAt: integer("created_at", { mode: "timestamp" }),
    deliveryDeadline: integer("delivery_deadline", { mode: "timestamp" }),
});

export const messages = sqliteTable("messages", {
    id: text("id").primaryKey(),
    orderId: text("order_id").notNull().references(() => orders.id),
    senderId: text("sender_id").notNull().references(() => user.id),
    content: text("content").notNull(),
    isRead: integer("is_read", { mode: "boolean" }).default(false),
    createdAt: integer("created_at", { mode: "timestamp" }),
});

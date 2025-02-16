import { pgTable, integer, text, foreignKey, varchar, uuid, timestamp, date, boolean, doublePrecision, check, numeric, interval, jsonb, unique } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const submitTypeCode = pgTable("submit_type_code", {
	code: integer().primaryKey().notNull(),
	description: text().notNull(),
});

export const reportTypeCode = pgTable("report_type_code", {
	code: integer().primaryKey().notNull(),
	description: text().notNull(),
});

export const publicPrivatePartnershipProjectNameCode = pgTable("public_private_partnership_project_name_code", {
	code: integer().primaryKey().notNull(),
	description: text().notNull(),
});

export const suspicionTypeCode = pgTable("suspicion_type_code", {
	code: integer().primaryKey().notNull(),
	description: text().notNull(),
});

export const personEntityTypeCode = pgTable("person_entity_type_code", {
	code: integer().primaryKey().notNull(),
	description: text().notNull(),
});

export const addressTypeCode = pgTable("address_type_code", {
	code: integer().primaryKey().notNull(),
	description: text().notNull(),
});

export const activitySectorCode = pgTable("activity_sector_code", {
	code: integer().primaryKey().notNull(),
	description: text().notNull(),
});

export const countryCode = pgTable("country_code", {
	code: text().primaryKey().notNull(),
	description: text().notNull(),
});

export const provinceStateCode = pgTable("province_state_code", {
	code: text().primaryKey().notNull(),
	country: text(),
	description: text().notNull(),
}, (table) => [
	foreignKey({
		columns: [table.country],
		foreignColumns: [countryCode.code],
		name: "province_state_code_country_fkey"
	}),
]);

export const personIdentifierTypeCode = pgTable("person_identifier_type_code", {
	code: integer().primaryKey().notNull(),
	description: text().notNull(),
});

export const entityIdentifierTypeCode = pgTable("entity_identifier_type_code", {
	code: integer().primaryKey().notNull(),
	description: text().notNull(),
});

export const structureTypeCode = pgTable("structure_type_code", {
	code: integer().primaryKey().notNull(),
	description: text().notNull(),
});

export const incorporationRegistrationTypeCode = pgTable("incorporation_registration_type_code", {
	code: integer().primaryKey().notNull(),
	description: text().notNull(),
});

export const relatedPartyTypeCode = pgTable("related_party_type_code", {
	code: text().primaryKey().notNull(),
	description: text().notNull(),
});

export const startingActionDetailsDirectionCode = pgTable("starting_action_details_direction_code", {
	code: integer().primaryKey().notNull(),
	description: text().notNull(),
});

export const currencyCode = pgTable("currency_code", {
	code: text().primaryKey().notNull(),
	description: text().notNull(),
});

export const accountTypeCode = pgTable("account_type_code", {
	code: integer().primaryKey().notNull(),
	description: text().notNull(),
});

export const accountStatusAtTimeOfTransaction = pgTable("account_status_at_time_of_transaction", {
	code: integer().primaryKey().notNull(),
	description: text().notNull(),
});

export const relationshipOfConductorCode = pgTable("relationship_of_conductor_code", {
	code: integer().primaryKey().notNull(),
	description: text().notNull(),
});

export const organizations = pgTable("organizations", {
	id: text().primaryKey().notNull(),
	name: varchar({ length: 255 }).notNull(),
	adminId: uuid("admin_id"),
	createdAt: timestamp("created_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	databaseUrl: text("database_url"),
	status: varchar({ length: 50 }),
});

export const entities = pgTable("entities", {
	entityType: varchar("entity_type", { length: 50 }),
	id: text().primaryKey().notNull(),
	emailAddress: varchar("email_address", { length: 255 }),
	name: varchar({ length: 255 }),
	surname: varchar({ length: 255 }),
	givenName: varchar("given_name", { length: 255 }),
	otherNameInitial: varchar("other_name_initial", { length: 10 }),
	address: varchar({ length: 255 }),
	telephoneNumber: varchar("telephone_number", { length: 50 }),
	extensionNumber: varchar("extension_number", { length: 50 }),
	dateOfBirth: date("date_of_birth"),
	countryOfResidenceCode: varchar("country_of_residence_code", { length: 10 }),
	countryOfCitizenshipCode: varchar("country_of_citizenship_code", { length: 10 }),
	occupation: varchar({ length: 255 }),
	addressTypeCode: integer("address_type_code"),
	authorizedPersonsName: varchar("authorized_persons_name", { length: 255 }),
	structureTypeCode: integer("structure_type_code"),
	structureTypeOther: varchar("structure_type_other", { length: 255 }),
	natureOfPrincipalBusiness: text("nature_of_principal_business"),
	registrationIncorporationIndicator: boolean("registration_incorporation_indicator"),
	entityCategory: varchar("entity_category", { length: 100 }),
	naicsCode: varchar("naics_code", { length: 100 }),
	dateOfIncorporation: date("date_of_incorporation"),
	pepHioExposure: boolean("pep_hio_exposure"),
	establishedClient: boolean("established_client"),
	status: varchar({ length: 50 }),
	url: text(),
	typeOfDevice: varchar("type_of_device", { length: 255 }),
	username: varchar({ length: 255 }),
	deviceIdentifierNumber: varchar("device_identifier_number", { length: 255 }),
	ipAddress: varchar("ip_address", { length: 50 }),
	datetimeOnlineSession: timestamp("datetime_online_session", { mode: 'string' }),
	dateOnboarded: date("date_onboarded"),
	lengthOfClientRelationship: integer("length_of_client_relationship"),
	dateOfTermination: date("date_of_termination"),
	dateOfRemovalFromSystem: date("date_of_removal_from_system"),
	riskScore: doublePrecision("risk_score"),
	createdAt: timestamp("created_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	createdBy: text("created_by"),
	updatedAt: timestamp("updated_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	updatedBy: text("updated_by"),
	organizationId: text("organization_id"),
	amount: text(),
	fundType: text("fund_type"),
});

export const accounts = pgTable("accounts", {
	id: uuid().default(sql`uuid_generate_v4()`).primaryKey().notNull(),
	financialInstitutionNumber: varchar("financial_institution_number", { length: 50 }),
	branchNumber: varchar("branch_number", { length: 50 }),
	routingNumer: varchar("routing_numer", { length: 9 }),
	swiftCode: text("swift_code"),
	entityId: text("entity_id"),
	country: text(),
	number: varchar({ length: 50 }),
	type: varchar({ length: 50 }),
	currency: varchar({ length: 10 }),
	identificationObtained: boolean("identification_obtained"),
	dateOpened: date("date_opened"),
	dateClosed: date("date_closed"),
	lastTransactionAt: timestamp("last_transaction_at", { mode: 'string' }),
	balance: doublePrecision(),
	virtualCurrencyType: varchar("virtual_currency_type", { length: 50 }),
	isVirtual: boolean("is_virtual"),
	walletAddress: varchar("wallet_address", { length: 255 }),
	averageDailyAmountIn: doublePrecision("average_daily_amount_in"),
	averageDailyAmountOut: doublePrecision("average_daily_amount_out"),
	averageDailyTransactionsIn: integer("average_daily_transactions_in"),
	averageDailyTransactionsOut: integer("average_daily_transactions_out"),
	createdAt: timestamp("created_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	createdBy: text("created_by"),
	updatedAt: timestamp("updated_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	updatedBy: text("updated_by"),
	organizationId: text("organization_id"),
}, (table) => [
	foreignKey({
		columns: [table.entityId],
		foreignColumns: [entities.id],
		name: "accounts_entity_id_fkey"
	}),
]);

export const fundAssetVirtualCurrencyTypeCode = pgTable("fund_asset_virtual_currency_type_code", {
	code: integer().primaryKey().notNull(),
	description: text().notNull(),
});

export const dispositionCode = pgTable("disposition_code", {
	code: integer().primaryKey().notNull(),
	description: text().notNull(),
});

export const jtTransactionsEntities = pgTable("jt_transactions_entities", {
	id: uuid().default(sql`uuid_generate_v4()`).primaryKey().notNull(),
	transactionId: text("transaction_id"),
	entityId: text("entity_id"),
	role: text(),
	typeCode: integer("type_code"),
	clientNumber: varchar("client_number", { length: 100 }),
	emailAddress: varchar("email_address", { length: 200 }),
	username: varchar({ length: 100 }),
	url: varchar({ length: 200 }),
	typeOfDeviceCode: integer("type_of_device_code"),
	typeOfDeviceOther: varchar("type_of_device_other", { length: 200 }),
	deviceIdentifierNumber: varchar("device_identifier_number", { length: 200 }),
	internetProtocolAddress: varchar("internet_protocol_address", { length: 200 }),
	dateTimeOfOnlineSession: text("date_time_of_online_session"),
	onBehalfOfIndicator: boolean("on_behalf_of_indicator"),
	accountNumber: varchar("account_number", { length: 200 }),
	policyNumber: varchar("policy_number", { length: 100 }),
	identifyingNumber: varchar("identifying_number", { length: 100 }),
	createdAt: timestamp("created_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	createdBy: text("created_by").default('system'),
	updatedAt: timestamp("updated_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	updatedBy: text("updated_by").default('system'),
	organizationId: text("organization_id"),
}, (table) => [
	foreignKey({
		columns: [table.transactionId],
		foreignColumns: [transactions.id],
		name: "jt_transactions_entities_transaction_id_fkey"
	}),
	foreignKey({
		columns: [table.entityId],
		foreignColumns: [entities.id],
		name: "jt_transactions_entities_entity_id_fkey"
	}),
	foreignKey({
		columns: [table.typeOfDeviceCode],
		foreignColumns: [typeOfDeviceCode.code],
		name: "jt_transactions_entities_type_of_device_code_fkey"
	}),
	check("jt_transactions_entities_role_check", sql`role = ANY (ARRAY['source_of_funds'::text, 'conductor'::text, 'beneficiary'::text, 'involvement'::text])`),
]);

export const transactions = pgTable("transactions", {
	id: text().primaryKey().notNull(),
	timeOfTransaction: timestamp("time_of_transaction", { mode: 'string' }),
	timeOfPosting: timestamp("time_of_posting", { mode: 'string' }),
	methodOther: varchar("method_other", { length: 200 }),
	reportingEntityTransactionReference: text("reporting_entity_transaction_reference"),
	purpose: varchar({ length: 200 }),
	attemptedTransactionIndicator: boolean("attempted_transaction_indicator"),
	reasonNotCompleted: varchar("reason_not_completed", { length: 200 }),
	entryType: text("entry_type"),
	amount: numeric({ precision: 18, scale: 8 }).notNull(),
	currencyCode: text("currency_code"),
	exchangeRate: numeric("exchange_rate", { precision: 18, scale: 8 }),
	valueInCanadianDollars: numeric("value_in_canadian_dollars", { precision: 18, scale: 8 }),
	accountId: uuid("account_id"),
	accountStatusAtTimeOfTransaction: text("account_status_at_time_of_transaction"),
	methodCode: integer("method_code").default(17),
	virtualCurrencyTypeCode: text("virtual_currency_type_code"),
	virtualCurrencyTypeOther: varchar("virtual_currency_type_other", { length: 200 }),
	virtualCurrencyTransactionIds: varchar("virtual_currency_transaction_ids", { length: 200 }).array(),
	sendingVirtualCurrencyAddresses: varchar("sending_virtual_currency_addresses", { length: 200 }).array(),
	receivingVirtualCurrencyAddresses: varchar("receiving_virtual_currency_addresses", { length: 200 }).array(),
	referenceNumber: varchar("reference_number", { length: 200 }),
	referenceNumberOtherRelatedNumber: varchar("reference_number_other_related_number", { length: 200 }),
	fundAssetVirtualCurrencyTypeCode: integer("fund_asset_virtual_currency_type_code"),
	fundAssetVirtualCurrencyTypeOther: varchar("fund_asset_virtual_currency_type_other", { length: 200 }),
	involvementIndicator: boolean("involvement_indicator"),
	beneficiaryIndicator: boolean("beneficiary_indicator"),
	sourcesOfFundsOrVirtualCurrencyIndicator: boolean("sources_of_funds_or_virtual_currency_indicator"),
	conductorIndicator: boolean("conductor_indicator"),
	dispositionCode: integer("disposition_code"),
	dispositionOther: varchar("disposition_other", { length: 200 }),
	createdAt: timestamp("created_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	createdBy: text("created_by").default('system'),
	updatedAt: timestamp("updated_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	updatedBy: text("updated_by").default('system'),
	organizationId: text("organization_id"),
}, (table) => [
	foreignKey({
		columns: [table.accountId],
		foreignColumns: [accounts.id],
		name: "transactions_account_id_fkey"
	}),
	foreignKey({
		columns: [table.methodCode],
		foreignColumns: [methodCode.code],
		name: "transactions_method_code_fkey"
	}),
	foreignKey({
		columns: [table.virtualCurrencyTypeCode],
		foreignColumns: [virtualCurrencyTypeCode.code],
		name: "transactions_virtual_currency_type_code_fkey"
	}),
	foreignKey({
		columns: [table.fundAssetVirtualCurrencyTypeCode],
		foreignColumns: [fundAssetVirtualCurrencyTypeCode.code],
		name: "transactions_fund_asset_virtual_currency_type_code_fkey"
	}),
	foreignKey({
		columns: [table.dispositionCode],
		foreignColumns: [dispositionCode.code],
		name: "transactions_disposition_code_fkey"
	}),
	check("transactions_entry_type_check", sql`entry_type = ANY (ARRAY['debit'::text, 'credit'::text])`),
	check("transactions_amount_check", sql`amount > (0)::numeric`),
]);

export const methodCode = pgTable("method_code", {
	code: integer().primaryKey().notNull(),
	description: text().notNull(),
});

export const virtualCurrencyTypeCode = pgTable("virtual_currency_type_code", {
	code: text().primaryKey().notNull(),
	description: text().notNull(),
});

export const typeOfDeviceCode = pgTable("type_of_device_code", {
	code: integer().primaryKey().notNull(),
	description: text().notNull(),
});

export const rules = pgTable("rules", {
	id: uuid().default(sql`uuid_generate_v4()`).primaryKey().notNull(),
	name: varchar({ length: 255 }),
	description: text(),
	category: varchar({ length: 255 }),
	riskScore: integer("risk_score"),
	isTemplate: boolean("is_template"),
	createdAt: timestamp("created_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	createdBy: text("created_by").default('system'),
	updatedAt: timestamp("updated_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	updatedBy: text("updated_by").default('system'),
	organizationId: text("organization_id"),
});

export const filters = pgTable("filters", {
	id: uuid().default(sql`uuid_generate_v4()`).primaryKey().notNull(),
	ruleId: uuid("rule_id"),
	name: varchar({ length: 255 }),
	columnName: varchar("column_name", { length: 255 }),
	tableName: varchar("table_name", { length: 255 }),
	fkColumn: varchar("fk_column", { length: 255 }),
	operator: varchar({ length: 50 }),
	aggregateOperator: varchar("aggregate_operator", { length: 50 }),
	timeWindow: interval("time_window"),
	timeColumn: varchar("time_column", { length: 255 }),
	partitionColumn: varchar("partition_column", { length: 255 }),
	value: jsonb(),
	datatype: varchar({ length: 255 }),
	createdAt: timestamp("created_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	createdBy: text("created_by").default('system'),
	updatedAt: timestamp("updated_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	updatedBy: text("updated_by").default('system'),
	description: text(),
	organizationId: text("organization_id"),
}, (table) => [
	foreignKey({
		columns: [table.ruleId],
		foreignColumns: [rules.id],
		name: "filters_rule_id_fkey"
	}),
]);

export const screeners = pgTable("screeners", {
	id: uuid().default(sql`uuid_generate_v4()`).primaryKey().notNull(),
	name: varchar({ length: 255 }).notNull(),
	description: text(),
	startDate: timestamp("start_date", { mode: 'string' }),
	endDate: timestamp("end_date", { mode: 'string' }),
	status: varchar({ length: 255 }),
	targetingRuleId: uuid("targeting_rule_id"),
	createdAt: timestamp("created_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	createdBy: text("created_by").default('system'),
	updatedAt: timestamp("updated_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	updatedBy: text("updated_by").default('system'),
	organizationId: text("organization_id"),
}, (table) => [
	foreignKey({
		columns: [table.targetingRuleId],
		foreignColumns: [rules.id],
		name: "screeners_targeting_rule_id_fkey"
	}),
]);

export const jtScreenerRules = pgTable("jt_screener_rules", {
	id: uuid().default(sql`uuid_generate_v4()`).primaryKey().notNull(),
	screenerId: uuid("screener_id"),
	ruleId: uuid("rule_id"),
	organizationId: text("organization_id"),
}, (table) => [
	foreignKey({
		columns: [table.screenerId],
		foreignColumns: [screeners.id],
		name: "jt_screener_rules_screener_id_fkey"
	}).onDelete("cascade"),
	foreignKey({
		columns: [table.ruleId],
		foreignColumns: [rules.id],
		name: "jt_screener_rules_rule_id_fkey"
	}).onDelete("cascade"),
]);

export const alertGroups = pgTable("alert_groups", {
	id: uuid().default(sql`uuid_generate_v4()`).primaryKey().notNull(),
	ruleId: uuid("rule_id"),
	screenerId: uuid("screener_id"),
	status: varchar({ length: 50 }),
	riskScore: integer("risk_score"),
	analystId: text("analyst_id"),
	createdAt: timestamp("created_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	createdBy: text("created_by").default('system'),
	updatedAt: timestamp("updated_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	updatedBy: text("updated_by").default('system'),
	organizationId: text("organization_id"),
}, (table) => [
	foreignKey({
		columns: [table.ruleId],
		foreignColumns: [rules.id],
		name: "alert_groups_rule_id_fkey"
	}),
	foreignKey({
		columns: [table.screenerId],
		foreignColumns: [screeners.id],
		name: "alert_groups_screener_id_fkey"
	}),
]);

export const analysts = pgTable("analysts", {
	id: text().primaryKey().notNull(),
	name: varchar({ length: 255 }).default('system'),
	surname: varchar({ length: 100 }),
	givenName: varchar("given_name", { length: 100 }),
	otherNameInitial: varchar("other_name_initial", { length: 10 }),
	address: varchar({ length: 255 }),
	telephoneNumber: varchar("telephone_number", { length: 50 }),
	extensionNumber: varchar("extension_number", { length: 50 }),
	email: varchar({ length: 255 }).notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	createdBy: text("created_by").default('system'),
	role: varchar({ length: 50 }),
	organizationId: text("organization_id"),
}, (table) => [
	unique("analysts_email_key").on(table.email),
]);

export const tmCases = pgTable("tm_cases", {
	id: uuid().default(sql`uuid_generate_v4()`).primaryKey().notNull(),
	analystId: text("analyst_id"),
	status: varchar({ length: 50 }),
	name: varchar({ length: 255 }),
	description: text(),
	riskScore: integer("risk_score"),
	createdAt: timestamp("created_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	createdBy: text("created_by").default('system'),
	updatedAt: timestamp("updated_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	updatedBy: text("updated_by").default('system'),
	organizationId: text("organization_id"),
}, (table) => [
	foreignKey({
		columns: [table.analystId],
		foreignColumns: [analysts.id],
		name: "tm_cases_analyst_id_fkey"
	}),
]);

export const alerts = pgTable("alerts", {
	id: uuid().default(sql`uuid_generate_v4()`).primaryKey().notNull(),
	transactionId: text("transaction_id"),
	alertGroupId: uuid("alert_group_id"),
	riskScore: integer("risk_score"),
	createdAt: timestamp("created_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	createdBy: text("created_by").default('system'),
	updatedAt: timestamp("updated_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	updatedBy: text("updated_by").default('system'),
	organizationId: text("organization_id"),
}, (table) => [
	foreignKey({
		columns: [table.transactionId],
		foreignColumns: [transactions.id],
		name: "alerts_transaction_id_fkey"
	}),
	foreignKey({
		columns: [table.alertGroupId],
		foreignColumns: [alertGroups.id],
		name: "alerts_alert_group_id_fkey"
	}),
]);

export const jtTmCasesAlerts = pgTable("jt_tm_cases_alerts", {
	id: uuid().default(sql`uuid_generate_v4()`).primaryKey().notNull(),
	alertId: uuid("alert_id"),
	tmCaseId: uuid("tm_case_id"),
	createdAt: timestamp("created_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	createdBy: text("created_by").default('system'),
	updatedAt: timestamp("updated_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	updatedBy: text("updated_by").default('system'),
	organizationId: text("organization_id"),
}, (table) => [
	foreignKey({
		columns: [table.alertId],
		foreignColumns: [alerts.id],
		name: "jt_tm_cases_alerts_alert_id_fkey"
	}),
	foreignKey({
		columns: [table.tmCaseId],
		foreignColumns: [tmCases.id],
		name: "jt_tm_cases_alerts_tm_case_id_fkey"
	}),
]);

export const notes = pgTable("notes", {
	id: uuid().default(sql`uuid_generate_v4()`).primaryKey().notNull(),
	foreignId: uuid("foreign_id"),
	foreignTableName: varchar("foreign_table_name", { length: 255 }),
	createdBy: text("created_by").default('system'),
	createdAt: timestamp("created_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	note: text().notNull(),
	organizationId: text("organization_id"),
});

export const attachments = pgTable("attachments", {
	id: uuid().default(sql`uuid_generate_v4()`).primaryKey().notNull(),
	foreignId: uuid("foreign_id"),
	foreignTableName: varchar("foreign_table_name", { length: 255 }),
	createdBy: text("created_by").default('system'),
	createdAt: timestamp("created_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	name: varchar({ length: 255 }),
	size: integer(),
	storageUrl: text("storage_url"),
	sourceUrl: text("source_url"),
	organizationId: text("organization_id"),
});

export const addresses = pgTable("addresses", {
	id: uuid().default(sql`uuid_generate_v4()`).primaryKey().notNull(),
	entityId: text("entity_id"),
	typeCode: varchar("type_code", { length: 10 }),
	unitNumber: varchar("unit_number", { length: 50 }),
	buildingNumber: varchar("building_number", { length: 50 }),
	streetAddress: text("street_address"),
	city: varchar({ length: 100 }),
	district: varchar({ length: 100 }),
	provinceStateCode: varchar("province_state_code", { length: 10 }),
	provinceStateName: varchar("province_state_name", { length: 100 }),
	subProvinceSubLocality: varchar("sub_province_sub_locality", { length: 100 }),
	postalZipCode: varchar("postal_zip_code", { length: 20 }),
	countryCode: varchar("country_code", { length: 10 }),
	unstructured: text(),
	organizationId: text("organization_id"),
}, (table) => [
	foreignKey({
		columns: [table.entityId],
		foreignColumns: [entities.id],
		name: "addresses_entity_id_fkey"
	}),
]);

export const identifications = pgTable("identifications", {
	id: uuid().default(sql`uuid_generate_v4()`).primaryKey().notNull(),
	entityId: text("entity_id"),
	identifierTypeCode: varchar("identifier_type_code", { length: 50 }),
	identifierTypeOther: varchar("identifier_type_other", { length: 255 }),
	number: varchar({ length: 255 }),
	organizationId: text("organization_id"),
}, (table) => [
	foreignKey({
		columns: [table.entityId],
		foreignColumns: [entities.id],
		name: "identifications_entity_id_fkey"
	}),
]);

export const countries = pgTable("countries", {
	id: uuid().default(sql`uuid_generate_v4()`).primaryKey().notNull(),
	riskScore: doublePrecision("risk_score"),
	countryCode: varchar("country_code", { length: 10 }),
	organizationId: text("organization_id"),
});

export const jtAccountEntities = pgTable("jt_account_entities", {
	id: uuid().default(sql`uuid_generate_v4()`).primaryKey().notNull(),
	entityId: text("entity_id"),
	accountId: uuid("account_id"),
	dateOpened: date("date_opened"),
	dateClosed: date("date_closed"),
	organizationId: text("organization_id"),
}, (table) => [
	foreignKey({
		columns: [table.entityId],
		foreignColumns: [entities.id],
		name: "jt_account_entities_entity_id_fkey"
	}),
	foreignKey({
		columns: [table.accountId],
		foreignColumns: [accounts.id],
		name: "jt_account_entities_account_id_fkey"
	}),
]);

export const incorporations = pgTable("incorporations", {
	id: uuid().default(sql`uuid_generate_v4()`).primaryKey().notNull(),
	entityId: text("entity_id"),
	typeCode: varchar("type_code", { length: 50 }),
	number: varchar({ length: 50 }),
	jurisdictionOfIssueCountryCode: varchar("jurisdiction_of_issue_country_code", { length: 10 }),
	jurisdictionOfIssueStateCode: varchar("jurisdiction_of_issue_state_code", { length: 10 }),
	jurisdictionOfIssueStateName: varchar("jurisdiction_of_issue_state_name", { length: 100 }),
	organizationId: text("organization_id"),
}, (table) => [
	foreignKey({
		columns: [table.entityId],
		foreignColumns: [entities.id],
		name: "incorporations_entity_id_fkey"
	}),
]);

export const kycCases = pgTable("kyc_cases", {
	id: uuid().default(sql`uuid_generate_v4()`).primaryKey().notNull(),
	entityId: text("entity_id"),
	analystId: text("analyst_id"),
	createdAt: timestamp("created_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	createdBy: text("created_by"),
	email: varchar({ length: 200 }),
	formLink: text("form_link"),
	name: varchar({ length: 255 }),
	status: varchar({ length: 50 }),
	type: varchar({ length: 50 }),
	updatedAt: timestamp("updated_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	updatedBy: text("updated_by"),
	organizationId: text("organization_id"),
}, (table) => [
	foreignKey({
		columns: [table.entityId],
		foreignColumns: [entities.id],
		name: "kyc_cases_entity_id_fkey"
	}),
	foreignKey({
		columns: [table.analystId],
		foreignColumns: [analysts.id],
		name: "kyc_cases_analyst_id_fkey"
	}),
]);

export const searches = pgTable("searches", {
	id: uuid().default(sql`uuid_generate_v4()`).primaryKey().notNull(),
	entityId: text("entity_id"),
	organizationId: text("organization_id"),
	searchType: varchar("search_type", { length: 50 }).notNull(),
	summarizedText: text("summarized_text"),
	text: text(),
	address: varchar({ length: 255 }),
	captureDate: date("capture_date"),
	status: varchar({ length: 50 }),
	number: varchar({ length: 50 }),
	location: varchar({ length: 255 }),
	dateRegistered: date("date_registered"),
	sourceUrl: text("source_url"),
	createdAt: timestamp("created_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	createdBy: text("created_by"),
	updatedAt: timestamp("updated_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	updatedBy: text("updated_by"),
}, (table) => [
	foreignKey({
		columns: [table.entityId],
		foreignColumns: [entities.id],
		name: "searches_entity_id_fkey"
	}),
]);

export const jtRelatedEntities = pgTable("jt_related_entities", {
	id: uuid().default(sql`uuid_generate_v4()`).primaryKey().notNull(),
	entity1: text("entity_1"),
	entity2: text("entity_2"),
	relationshipType: varchar("relationship_type", { length: 50 }),
	ownershipPercentage: doublePrecision("ownership_percentage"),
	role: varchar({ length: 50 }),
	createdAt: timestamp("created_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	createdBy: text("created_by"),
	updatedAt: timestamp("updated_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	updatedBy: text("updated_by"),
	organizationId: text("organization_id"),
}, (table) => [
	foreignKey({
		columns: [table.entity1],
		foreignColumns: [entities.id],
		name: "jt_related_entities_entity_1_fkey"
	}),
	foreignKey({
		columns: [table.entity2],
		foreignColumns: [entities.id],
		name: "jt_related_entities_entity_2_fkey"
	}),
]);

export const settings = pgTable("settings", {
	id: uuid().default(sql`uuid_generate_v4()`).primaryKey().notNull(),
	fintracApiKey: varchar("fintrac_api_key", { length: 50 }),
	reportingEntityNumber: varchar("reporting_entity_number", { length: 50 }),
	submittingReportingEntityNumber: varchar("submitting_reporting_entity_number", { length: 50 }),
	activitySectorCode: varchar("activity_sector_code", { length: 100 }),
	createdBy: varchar("created_by", { length: 100 }).default('system').notNull(),
	updatedBy: varchar("updated_by", { length: 100 }),
	createdAt: timestamp("created_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	updatedAt: timestamp("updated_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	organizationId: text("organization_id"),
});

export const twentyFourHourRuleAggregationTypeCode = pgTable("twenty_four_hour_rule_aggregation_type_code", {
	code: integer().primaryKey().notNull(),
	description: text(),
});

export const eftDirectionCode = pgTable("eft_direction_code", {
	code: integer().primaryKey().notNull(),
	description: text(),
});

export const reports = pgTable("reports", {
	id: uuid().default(sql`uuid_generate_v4()`).primaryKey().notNull(),
	reportTypeCode: integer("report_type_code"),
	reportingEntityContactId: integer("reporting_entity_contact_id"),
	ministerialDirectiveCode: text("ministerial_directive_code"),
	descriptionOfSuspiciousActivity: text("description_of_suspicious_activity"),
	suspicionTypeCode: integer("suspicion_type_code"),
	publicPrivatePartnershipProjectNameCodes: integer("public_private_partnership_project_name_codes"),
	politicallyExposedPersonIndicator: boolean("politically_exposed_person_indicator"),
	relatedReports: text("related_reports").array(),
	actionTaken: text("action_taken"),
	twentyFourHourRulePeriodStart: text("twenty_four_hour_rule_period_start"),
	twentyFourHourRulePeriodEnd: text("twenty_four_hour_rule_period_end"),
	twentyFourHourRuleAggregationTypeCode: integer("twenty_four_hour_rule_aggregation_type_code"),
	eftDirectionCode: integer("eft_direction_code"),
	dateSubmitted: timestamp("date_submitted", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	dateRejected: timestamp("date_rejected", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	status: text(),
	createdBy: text("created_by").default('system').notNull(),
	updatedBy: text("updated_by"),
	createdAt: timestamp("created_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	updatedAt: timestamp("updated_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	organizationId: text("organization_id"),
});

export const jtReportsTransactions = pgTable("jt_reports_transactions", {
	id: uuid().default(sql`uuid_generate_v4()`).primaryKey().notNull(),
	reportId: uuid("report_id"),
	transactionId: text("transaction_id"),
	createdBy: varchar("created_by", { length: 100 }).default('system').notNull(),
	updatedBy: varchar("updated_by", { length: 100 }),
	createdAt: timestamp("created_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	updatedAt: timestamp("updated_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	organizationId: text("organization_id"),
}, (table) => [
	foreignKey({
		columns: [table.reportId],
		foreignColumns: [reports.id],
		name: "jt_reports_transactions_report_id_fkey"
	}),
	foreignKey({
		columns: [table.transactionId],
		foreignColumns: [transactions.id],
		name: "jt_reports_transactions_transaction_id_fkey"
	}),
]);

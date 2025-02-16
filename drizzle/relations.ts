import { relations } from "drizzle-orm/relations";
import { countryCode, provinceStateCode, entities, accounts, transactions, jtTransactionsEntities, typeOfDeviceCode, methodCode, virtualCurrencyTypeCode, fundAssetVirtualCurrencyTypeCode, dispositionCode, rules, filters, screeners, jtScreenerRules, alertGroups, analysts, tmCases, alerts, jtTmCasesAlerts, addresses, identifications, jtAccountEntities, incorporations, kycCases, searches, jtRelatedEntities, reports, jtReportsTransactions } from "./schema";

export const provinceStateCodeRelations = relations(provinceStateCode, ({one}) => ({
	countryCode: one(countryCode, {
		fields: [provinceStateCode.country],
		references: [countryCode.code]
	}),
}));

export const countryCodeRelations = relations(countryCode, ({many}) => ({
	provinceStateCodes: many(provinceStateCode),
}));

export const accountsRelations = relations(accounts, ({one, many}) => ({
	entity: one(entities, {
		fields: [accounts.entityId],
		references: [entities.id]
	}),
	transactions: many(transactions),
	jtAccountEntities: many(jtAccountEntities),
}));

export const entitiesRelations = relations(entities, ({many}) => ({
	accounts: many(accounts),
	jtTransactionsEntities: many(jtTransactionsEntities),
	addresses: many(addresses),
	identifications: many(identifications),
	jtAccountEntities: many(jtAccountEntities),
	incorporations: many(incorporations),
	kycCases: many(kycCases),
	searches: many(searches),
	jtRelatedEntities_entity1: many(jtRelatedEntities, {
		relationName: "jtRelatedEntities_entity1_entities_id"
	}),
	jtRelatedEntities_entity2: many(jtRelatedEntities, {
		relationName: "jtRelatedEntities_entity2_entities_id"
	}),
}));

export const jtTransactionsEntitiesRelations = relations(jtTransactionsEntities, ({one}) => ({
	transaction: one(transactions, {
		fields: [jtTransactionsEntities.transactionId],
		references: [transactions.id]
	}),
	entity: one(entities, {
		fields: [jtTransactionsEntities.entityId],
		references: [entities.id]
	}),
	typeOfDeviceCode: one(typeOfDeviceCode, {
		fields: [jtTransactionsEntities.typeOfDeviceCode],
		references: [typeOfDeviceCode.code]
	}),
}));

export const transactionsRelations = relations(transactions, ({one, many}) => ({
	jtTransactionsEntities: many(jtTransactionsEntities),
	account: one(accounts, {
		fields: [transactions.accountId],
		references: [accounts.id]
	}),
	methodCode: one(methodCode, {
		fields: [transactions.methodCode],
		references: [methodCode.code]
	}),
	virtualCurrencyTypeCode: one(virtualCurrencyTypeCode, {
		fields: [transactions.virtualCurrencyTypeCode],
		references: [virtualCurrencyTypeCode.code]
	}),
	fundAssetVirtualCurrencyTypeCode: one(fundAssetVirtualCurrencyTypeCode, {
		fields: [transactions.fundAssetVirtualCurrencyTypeCode],
		references: [fundAssetVirtualCurrencyTypeCode.code]
	}),
	dispositionCode: one(dispositionCode, {
		fields: [transactions.dispositionCode],
		references: [dispositionCode.code]
	}),
	alerts: many(alerts),
	jtReportsTransactions: many(jtReportsTransactions),
}));

export const typeOfDeviceCodeRelations = relations(typeOfDeviceCode, ({many}) => ({
	jtTransactionsEntities: many(jtTransactionsEntities),
}));

export const methodCodeRelations = relations(methodCode, ({many}) => ({
	transactions: many(transactions),
}));

export const virtualCurrencyTypeCodeRelations = relations(virtualCurrencyTypeCode, ({many}) => ({
	transactions: many(transactions),
}));

export const fundAssetVirtualCurrencyTypeCodeRelations = relations(fundAssetVirtualCurrencyTypeCode, ({many}) => ({
	transactions: many(transactions),
}));

export const dispositionCodeRelations = relations(dispositionCode, ({many}) => ({
	transactions: many(transactions),
}));

export const filtersRelations = relations(filters, ({one}) => ({
	rule: one(rules, {
		fields: [filters.ruleId],
		references: [rules.id]
	}),
}));

export const rulesRelations = relations(rules, ({many}) => ({
	filters: many(filters),
	screeners: many(screeners),
	jtScreenerRules: many(jtScreenerRules),
	alertGroups: many(alertGroups),
}));

export const screenersRelations = relations(screeners, ({one, many}) => ({
	rule: one(rules, {
		fields: [screeners.targetingRuleId],
		references: [rules.id]
	}),
	jtScreenerRules: many(jtScreenerRules),
	alertGroups: many(alertGroups),
}));

export const jtScreenerRulesRelations = relations(jtScreenerRules, ({one}) => ({
	screener: one(screeners, {
		fields: [jtScreenerRules.screenerId],
		references: [screeners.id]
	}),
	rule: one(rules, {
		fields: [jtScreenerRules.ruleId],
		references: [rules.id]
	}),
}));

export const alertGroupsRelations = relations(alertGroups, ({one, many}) => ({
	rule: one(rules, {
		fields: [alertGroups.ruleId],
		references: [rules.id]
	}),
	screener: one(screeners, {
		fields: [alertGroups.screenerId],
		references: [screeners.id]
	}),
	alerts: many(alerts),
}));

export const tmCasesRelations = relations(tmCases, ({one, many}) => ({
	analyst: one(analysts, {
		fields: [tmCases.analystId],
		references: [analysts.id]
	}),
	jtTmCasesAlerts: many(jtTmCasesAlerts),
}));

export const analystsRelations = relations(analysts, ({many}) => ({
	tmCases: many(tmCases),
	kycCases: many(kycCases),
}));

export const alertsRelations = relations(alerts, ({one, many}) => ({
	transaction: one(transactions, {
		fields: [alerts.transactionId],
		references: [transactions.id]
	}),
	alertGroup: one(alertGroups, {
		fields: [alerts.alertGroupId],
		references: [alertGroups.id]
	}),
	jtTmCasesAlerts: many(jtTmCasesAlerts),
}));

export const jtTmCasesAlertsRelations = relations(jtTmCasesAlerts, ({one}) => ({
	alert: one(alerts, {
		fields: [jtTmCasesAlerts.alertId],
		references: [alerts.id]
	}),
	tmCase: one(tmCases, {
		fields: [jtTmCasesAlerts.tmCaseId],
		references: [tmCases.id]
	}),
}));

export const addressesRelations = relations(addresses, ({one}) => ({
	entity: one(entities, {
		fields: [addresses.entityId],
		references: [entities.id]
	}),
}));

export const identificationsRelations = relations(identifications, ({one}) => ({
	entity: one(entities, {
		fields: [identifications.entityId],
		references: [entities.id]
	}),
}));

export const jtAccountEntitiesRelations = relations(jtAccountEntities, ({one}) => ({
	entity: one(entities, {
		fields: [jtAccountEntities.entityId],
		references: [entities.id]
	}),
	account: one(accounts, {
		fields: [jtAccountEntities.accountId],
		references: [accounts.id]
	}),
}));

export const incorporationsRelations = relations(incorporations, ({one}) => ({
	entity: one(entities, {
		fields: [incorporations.entityId],
		references: [entities.id]
	}),
}));

export const kycCasesRelations = relations(kycCases, ({one}) => ({
	entity: one(entities, {
		fields: [kycCases.entityId],
		references: [entities.id]
	}),
	analyst: one(analysts, {
		fields: [kycCases.analystId],
		references: [analysts.id]
	}),
}));

export const searchesRelations = relations(searches, ({one}) => ({
	entity: one(entities, {
		fields: [searches.entityId],
		references: [entities.id]
	}),
}));

export const jtRelatedEntitiesRelations = relations(jtRelatedEntities, ({one}) => ({
	entity_entity1: one(entities, {
		fields: [jtRelatedEntities.entity1],
		references: [entities.id],
		relationName: "jtRelatedEntities_entity1_entities_id"
	}),
	entity_entity2: one(entities, {
		fields: [jtRelatedEntities.entity2],
		references: [entities.id],
		relationName: "jtRelatedEntities_entity2_entities_id"
	}),
}));

export const jtReportsTransactionsRelations = relations(jtReportsTransactions, ({one}) => ({
	report: one(reports, {
		fields: [jtReportsTransactions.reportId],
		references: [reports.id]
	}),
	transaction: one(transactions, {
		fields: [jtReportsTransactions.transactionId],
		references: [transactions.id]
	}),
}));

export const reportsRelations = relations(reports, ({many}) => ({
	jtReportsTransactions: many(jtReportsTransactions),
}));
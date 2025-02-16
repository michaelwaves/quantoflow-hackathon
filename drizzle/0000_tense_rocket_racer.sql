-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE "submit_type_code" (
	"code" integer PRIMARY KEY NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "report_type_code" (
	"code" integer PRIMARY KEY NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "public_private_partnership_project_name_code" (
	"code" integer PRIMARY KEY NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "suspicion_type_code" (
	"code" integer PRIMARY KEY NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "person_entity_type_code" (
	"code" integer PRIMARY KEY NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "address_type_code" (
	"code" integer PRIMARY KEY NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "activity_sector_code" (
	"code" integer PRIMARY KEY NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "country_code" (
	"code" text PRIMARY KEY NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "province_state_code" (
	"code" text PRIMARY KEY NOT NULL,
	"country" text,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "person_identifier_type_code" (
	"code" integer PRIMARY KEY NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "entity_identifier_type_code" (
	"code" integer PRIMARY KEY NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "structure_type_code" (
	"code" integer PRIMARY KEY NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "incorporation_registration_type_code" (
	"code" integer PRIMARY KEY NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "related_party_type_code" (
	"code" text PRIMARY KEY NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "starting_action_details_direction_code" (
	"code" integer PRIMARY KEY NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "currency_code" (
	"code" text PRIMARY KEY NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "account_type_code" (
	"code" integer PRIMARY KEY NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "account_status_at_time_of_transaction" (
	"code" integer PRIMARY KEY NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "relationship_of_conductor_code" (
	"code" integer PRIMARY KEY NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "organizations" (
	"id" text PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
	"name" varchar(255) NOT NULL,
	"admin_id" uuid,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	"database_url" text,
	"status" varchar(50)
);
--> statement-breakpoint
CREATE TABLE "entities" (
	"entity_type" varchar(50),
	"id" text PRIMARY KEY DEFAULT (uuid_generate_v4()) NOT NULL,
	"email_address" varchar(255),
	"name" varchar(255),
	"surname" varchar(255),
	"given_name" varchar(255),
	"other_name_initial" varchar(10),
	"address" varchar(255),
	"telephone_number" varchar(50),
	"extension_number" varchar(50),
	"date_of_birth" date,
	"country_of_residence_code" varchar(10),
	"country_of_citizenship_code" varchar(10),
	"occupation" varchar(255),
	"address_type_code" integer,
	"authorized_persons_name" varchar(255),
	"structure_type_code" integer,
	"structure_type_other" varchar(255),
	"nature_of_principal_business" text,
	"registration_incorporation_indicator" boolean,
	"entity_category" varchar(100),
	"naics_code" varchar(100),
	"date_of_incorporation" date,
	"pep_hio_exposure" boolean,
	"established_client" boolean,
	"status" varchar(50),
	"url" text,
	"type_of_device" varchar(255),
	"username" varchar(255),
	"device_identifier_number" varchar(255),
	"ip_address" varchar(50),
	"datetime_online_session" timestamp,
	"date_onboarded" date,
	"length_of_client_relationship" integer,
	"date_of_termination" date,
	"date_of_removal_from_system" date,
	"risk_score" double precision,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	"created_by" text,
	"updated_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	"updated_by" text,
	"organization_id" text
);
--> statement-breakpoint
CREATE TABLE "accounts" (
	"id" uuid PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
	"financial_institution_number" varchar(50),
	"branch_number" varchar(50),
	"routing_numer" varchar(9),
	"swift_code" text,
	"entity_id" text,
	"country" text,
	"number" varchar(50),
	"type" varchar(50),
	"currency" varchar(10),
	"identification_obtained" boolean,
	"date_opened" date,
	"date_closed" date,
	"last_transaction_at" timestamp,
	"balance" double precision,
	"virtual_currency_type" varchar(50),
	"is_virtual" boolean,
	"wallet_address" varchar(255),
	"average_daily_amount_in" double precision,
	"average_daily_amount_out" double precision,
	"average_daily_transactions_in" integer,
	"average_daily_transactions_out" integer,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	"created_by" text,
	"updated_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	"updated_by" text,
	"organization_id" text
);
--> statement-breakpoint
CREATE TABLE "fund_asset_virtual_currency_type_code" (
	"code" integer PRIMARY KEY NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "disposition_code" (
	"code" integer PRIMARY KEY NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "jt_transactions_entities" (
	"id" uuid PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
	"transaction_id" text,
	"entity_id" text,
	"role" text,
	"type_code" integer,
	"client_number" varchar(100),
	"email_address" varchar(200),
	"username" varchar(100),
	"url" varchar(200),
	"type_of_device_code" integer,
	"type_of_device_other" varchar(200),
	"device_identifier_number" varchar(200),
	"internet_protocol_address" varchar(200),
	"date_time_of_online_session" text,
	"on_behalf_of_indicator" boolean,
	"account_number" varchar(200),
	"policy_number" varchar(100),
	"identifying_number" varchar(100),
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	"created_by" text DEFAULT 'system',
	"updated_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	"updated_by" text DEFAULT 'system',
	"organization_id" text,
	CONSTRAINT "jt_transactions_entities_role_check" CHECK (role = ANY (ARRAY['source_of_funds'::text, 'conductor'::text, 'beneficiary'::text, 'involvement'::text]))
);
--> statement-breakpoint
CREATE TABLE "transactions" (
	"id" text PRIMARY KEY DEFAULT (uuid_generate_v4()) NOT NULL,
	"time_of_transaction" timestamp,
	"time_of_posting" timestamp,
	"method_other" varchar(200),
	"reporting_entity_transaction_reference" text,
	"purpose" varchar(200),
	"attempted_transaction_indicator" boolean,
	"reason_not_completed" varchar(200),
	"entry_type" text,
	"amount" numeric(18, 8) NOT NULL,
	"currency_code" text,
	"exchange_rate" numeric(18, 8),
	"value_in_canadian_dollars" numeric(18, 8),
	"account_id" uuid,
	"account_status_at_time_of_transaction" text,
	"method_code" integer DEFAULT 17,
	"virtual_currency_type_code" text,
	"virtual_currency_type_other" varchar(200),
	"virtual_currency_transaction_ids" varchar(200)[],
	"sending_virtual_currency_addresses" varchar(200)[],
	"receiving_virtual_currency_addresses" varchar(200)[],
	"reference_number" varchar(200),
	"reference_number_other_related_number" varchar(200),
	"fund_asset_virtual_currency_type_code" integer,
	"fund_asset_virtual_currency_type_other" varchar(200),
	"involvement_indicator" boolean,
	"beneficiary_indicator" boolean,
	"sources_of_funds_or_virtual_currency_indicator" boolean,
	"conductor_indicator" boolean,
	"disposition_code" integer,
	"disposition_other" varchar(200),
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	"created_by" text DEFAULT 'system',
	"updated_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	"updated_by" text DEFAULT 'system',
	"organization_id" text,
	CONSTRAINT "transactions_entry_type_check" CHECK (entry_type = ANY (ARRAY['debit'::text, 'credit'::text])),
	CONSTRAINT "transactions_amount_check" CHECK (amount > (0)::numeric)
);
--> statement-breakpoint
CREATE TABLE "method_code" (
	"code" integer PRIMARY KEY NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "virtual_currency_type_code" (
	"code" text PRIMARY KEY NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "type_of_device_code" (
	"code" integer PRIMARY KEY NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "rules" (
	"id" uuid PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
	"name" varchar(255),
	"description" text,
	"category" varchar(255),
	"risk_score" integer,
	"is_template" boolean,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	"created_by" text DEFAULT 'system',
	"updated_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	"updated_by" text DEFAULT 'system',
	"organization_id" text
);
--> statement-breakpoint
CREATE TABLE "filters" (
	"id" uuid PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
	"rule_id" uuid,
	"name" varchar(255),
	"column_name" varchar(255),
	"table_name" varchar(255),
	"fk_column" varchar(255),
	"operator" varchar(50),
	"aggregate_operator" varchar(50),
	"time_window" interval,
	"time_column" varchar(255),
	"partition_column" varchar(255),
	"value" jsonb,
	"datatype" varchar(255),
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	"created_by" text DEFAULT 'system',
	"updated_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	"updated_by" text DEFAULT 'system',
	"description" text,
	"organization_id" text
);
--> statement-breakpoint
CREATE TABLE "screeners" (
	"id" uuid PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
	"name" varchar(255) NOT NULL,
	"description" text,
	"start_date" timestamp,
	"end_date" timestamp,
	"status" varchar(255),
	"targeting_rule_id" uuid,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	"created_by" text DEFAULT 'system',
	"updated_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	"updated_by" text DEFAULT 'system',
	"organization_id" text
);
--> statement-breakpoint
CREATE TABLE "jt_screener_rules" (
	"id" uuid PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
	"screener_id" uuid,
	"rule_id" uuid,
	"organization_id" text
);
--> statement-breakpoint
CREATE TABLE "alert_groups" (
	"id" uuid PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
	"rule_id" uuid,
	"screener_id" uuid,
	"status" varchar(50),
	"risk_score" integer,
	"analyst_id" text,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	"created_by" text DEFAULT 'system',
	"updated_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	"updated_by" text DEFAULT 'system',
	"organization_id" text
);
--> statement-breakpoint
CREATE TABLE "analysts" (
	"id" text PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
	"name" varchar(255) DEFAULT 'system',
	"surname" varchar(100),
	"given_name" varchar(100),
	"other_name_initial" varchar(10),
	"address" varchar(255),
	"telephone_number" varchar(50),
	"extension_number" varchar(50),
	"email" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	"created_by" text DEFAULT 'system',
	"role" varchar(50),
	"organization_id" text,
	CONSTRAINT "analysts_email_key" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "tm_cases" (
	"id" uuid PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
	"analyst_id" text,
	"status" varchar(50),
	"name" varchar(255),
	"description" text,
	"risk_score" integer,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	"created_by" text DEFAULT 'system',
	"updated_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	"updated_by" text DEFAULT 'system',
	"organization_id" text
);
--> statement-breakpoint
CREATE TABLE "alerts" (
	"id" uuid PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
	"transaction_id" text,
	"alert_group_id" uuid,
	"risk_score" integer,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	"created_by" text DEFAULT 'system',
	"updated_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	"updated_by" text DEFAULT 'system',
	"organization_id" text
);
--> statement-breakpoint
CREATE TABLE "jt_tm_cases_alerts" (
	"id" uuid PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
	"alert_id" uuid,
	"tm_case_id" uuid,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	"created_by" text DEFAULT 'system',
	"updated_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	"updated_by" text DEFAULT 'system',
	"organization_id" text
);
--> statement-breakpoint
CREATE TABLE "notes" (
	"id" uuid PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
	"foreign_id" uuid,
	"foreign_table_name" varchar(255),
	"created_by" text DEFAULT 'system',
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	"note" text NOT NULL,
	"organization_id" text
);
--> statement-breakpoint
CREATE TABLE "attachments" (
	"id" uuid PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
	"foreign_id" uuid,
	"foreign_table_name" varchar(255),
	"created_by" text DEFAULT 'system',
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	"name" varchar(255),
	"size" integer,
	"storage_url" text,
	"source_url" text,
	"organization_id" text
);
--> statement-breakpoint
CREATE TABLE "addresses" (
	"id" uuid PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
	"entity_id" text,
	"type_code" varchar(10),
	"unit_number" varchar(50),
	"building_number" varchar(50),
	"street_address" text,
	"city" varchar(100),
	"district" varchar(100),
	"province_state_code" varchar(10),
	"province_state_name" varchar(100),
	"sub_province_sub_locality" varchar(100),
	"postal_zip_code" varchar(20),
	"country_code" varchar(10),
	"unstructured" text,
	"organization_id" text
);
--> statement-breakpoint
CREATE TABLE "identifications" (
	"id" uuid PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
	"entity_id" text,
	"identifier_type_code" varchar(50),
	"identifier_type_other" varchar(255),
	"number" varchar(255),
	"organization_id" text
);
--> statement-breakpoint
CREATE TABLE "countries" (
	"id" uuid PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
	"risk_score" double precision,
	"country_code" varchar(10),
	"organization_id" text
);
--> statement-breakpoint
CREATE TABLE "jt_account_entities" (
	"id" uuid PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
	"entity_id" text,
	"account_id" uuid,
	"date_opened" date,
	"date_closed" date,
	"organization_id" text
);
--> statement-breakpoint
CREATE TABLE "incorporations" (
	"id" uuid PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
	"entity_id" text,
	"type_code" varchar(50),
	"number" varchar(50),
	"jurisdiction_of_issue_country_code" varchar(10),
	"jurisdiction_of_issue_state_code" varchar(10),
	"jurisdiction_of_issue_state_name" varchar(100),
	"organization_id" text
);
--> statement-breakpoint
CREATE TABLE "kyc_cases" (
	"id" uuid PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
	"entity_id" text,
	"analyst_id" text,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	"created_by" text,
	"email" varchar(200),
	"form_link" text,
	"name" varchar(255),
	"status" varchar(50),
	"type" varchar(50),
	"updated_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	"updated_by" text,
	"organization_id" text
);
--> statement-breakpoint
CREATE TABLE "searches" (
	"id" uuid PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
	"entity_id" text,
	"organization_id" text,
	"search_type" varchar(50) NOT NULL,
	"summarized_text" text,
	"text" text,
	"address" varchar(255),
	"capture_date" date,
	"status" varchar(50),
	"number" varchar(50),
	"location" varchar(255),
	"date_registered" date,
	"source_url" text,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	"created_by" text,
	"updated_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	"updated_by" text
);
--> statement-breakpoint
CREATE TABLE "jt_related_entities" (
	"id" uuid PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
	"entity_1" text,
	"entity_2" text,
	"relationship_type" varchar(50),
	"ownership_percentage" double precision,
	"role" varchar(50),
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	"created_by" text,
	"updated_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	"updated_by" text,
	"organization_id" text
);
--> statement-breakpoint
CREATE TABLE "settings" (
	"id" uuid PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
	"fintrac_api_key" varchar(50),
	"reporting_entity_number" varchar(50),
	"submitting_reporting_entity_number" varchar(50),
	"activity_sector_code" varchar(100),
	"created_by" varchar(100) DEFAULT 'system' NOT NULL,
	"updated_by" varchar(100),
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	"updated_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	"organization_id" text
);
--> statement-breakpoint
CREATE TABLE "twenty_four_hour_rule_aggregation_type_code" (
	"code" integer PRIMARY KEY NOT NULL,
	"description" text
);
--> statement-breakpoint
CREATE TABLE "eft_direction_code" (
	"code" integer PRIMARY KEY NOT NULL,
	"description" text
);
--> statement-breakpoint
CREATE TABLE "reports" (
	"id" uuid PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
	"report_type_code" integer,
	"reporting_entity_contact_id" integer,
	"ministerial_directive_code" text,
	"description_of_suspicious_activity" text,
	"suspicion_type_code" integer,
	"public_private_partnership_project_name_codes" integer,
	"politically_exposed_person_indicator" boolean,
	"related_reports" text[],
	"action_taken" text,
	"twenty_four_hour_rule_period_start" text,
	"twenty_four_hour_rule_period_end" text,
	"twenty_four_hour_rule_aggregation_type_code" integer,
	"eft_direction_code" integer,
	"date_submitted" timestamp DEFAULT CURRENT_TIMESTAMP,
	"date_rejected" timestamp DEFAULT CURRENT_TIMESTAMP,
	"status" text,
	"created_by" text DEFAULT 'system' NOT NULL,
	"updated_by" text,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	"updated_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	"organization_id" text
);
--> statement-breakpoint
CREATE TABLE "jt_reports_transactions" (
	"id" uuid PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
	"report_id" uuid,
	"transaction_id" text,
	"created_by" varchar(100) DEFAULT 'system' NOT NULL,
	"updated_by" varchar(100),
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	"updated_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	"organization_id" text
);
--> statement-breakpoint
ALTER TABLE "province_state_code" ADD CONSTRAINT "province_state_code_country_fkey" FOREIGN KEY ("country") REFERENCES "public"."country_code"("code") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_entity_id_fkey" FOREIGN KEY ("entity_id") REFERENCES "public"."entities"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "jt_transactions_entities" ADD CONSTRAINT "jt_transactions_entities_transaction_id_fkey" FOREIGN KEY ("transaction_id") REFERENCES "public"."transactions"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "jt_transactions_entities" ADD CONSTRAINT "jt_transactions_entities_entity_id_fkey" FOREIGN KEY ("entity_id") REFERENCES "public"."entities"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "jt_transactions_entities" ADD CONSTRAINT "jt_transactions_entities_type_of_device_code_fkey" FOREIGN KEY ("type_of_device_code") REFERENCES "public"."type_of_device_code"("code") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "public"."accounts"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_method_code_fkey" FOREIGN KEY ("method_code") REFERENCES "public"."method_code"("code") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_virtual_currency_type_code_fkey" FOREIGN KEY ("virtual_currency_type_code") REFERENCES "public"."virtual_currency_type_code"("code") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_fund_asset_virtual_currency_type_code_fkey" FOREIGN KEY ("fund_asset_virtual_currency_type_code") REFERENCES "public"."fund_asset_virtual_currency_type_code"("code") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_disposition_code_fkey" FOREIGN KEY ("disposition_code") REFERENCES "public"."disposition_code"("code") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "filters" ADD CONSTRAINT "filters_rule_id_fkey" FOREIGN KEY ("rule_id") REFERENCES "public"."rules"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "screeners" ADD CONSTRAINT "screeners_targeting_rule_id_fkey" FOREIGN KEY ("targeting_rule_id") REFERENCES "public"."rules"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "jt_screener_rules" ADD CONSTRAINT "jt_screener_rules_screener_id_fkey" FOREIGN KEY ("screener_id") REFERENCES "public"."screeners"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "jt_screener_rules" ADD CONSTRAINT "jt_screener_rules_rule_id_fkey" FOREIGN KEY ("rule_id") REFERENCES "public"."rules"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "alert_groups" ADD CONSTRAINT "alert_groups_rule_id_fkey" FOREIGN KEY ("rule_id") REFERENCES "public"."rules"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "alert_groups" ADD CONSTRAINT "alert_groups_screener_id_fkey" FOREIGN KEY ("screener_id") REFERENCES "public"."screeners"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tm_cases" ADD CONSTRAINT "tm_cases_analyst_id_fkey" FOREIGN KEY ("analyst_id") REFERENCES "public"."analysts"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "alerts" ADD CONSTRAINT "alerts_transaction_id_fkey" FOREIGN KEY ("transaction_id") REFERENCES "public"."transactions"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "alerts" ADD CONSTRAINT "alerts_alert_group_id_fkey" FOREIGN KEY ("alert_group_id") REFERENCES "public"."alert_groups"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "jt_tm_cases_alerts" ADD CONSTRAINT "jt_tm_cases_alerts_alert_id_fkey" FOREIGN KEY ("alert_id") REFERENCES "public"."alerts"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "jt_tm_cases_alerts" ADD CONSTRAINT "jt_tm_cases_alerts_tm_case_id_fkey" FOREIGN KEY ("tm_case_id") REFERENCES "public"."tm_cases"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_entity_id_fkey" FOREIGN KEY ("entity_id") REFERENCES "public"."entities"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "identifications" ADD CONSTRAINT "identifications_entity_id_fkey" FOREIGN KEY ("entity_id") REFERENCES "public"."entities"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "jt_account_entities" ADD CONSTRAINT "jt_account_entities_entity_id_fkey" FOREIGN KEY ("entity_id") REFERENCES "public"."entities"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "jt_account_entities" ADD CONSTRAINT "jt_account_entities_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "public"."accounts"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "incorporations" ADD CONSTRAINT "incorporations_entity_id_fkey" FOREIGN KEY ("entity_id") REFERENCES "public"."entities"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "kyc_cases" ADD CONSTRAINT "kyc_cases_entity_id_fkey" FOREIGN KEY ("entity_id") REFERENCES "public"."entities"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "kyc_cases" ADD CONSTRAINT "kyc_cases_analyst_id_fkey" FOREIGN KEY ("analyst_id") REFERENCES "public"."analysts"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "searches" ADD CONSTRAINT "searches_entity_id_fkey" FOREIGN KEY ("entity_id") REFERENCES "public"."entities"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "jt_related_entities" ADD CONSTRAINT "jt_related_entities_entity_1_fkey" FOREIGN KEY ("entity_1") REFERENCES "public"."entities"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "jt_related_entities" ADD CONSTRAINT "jt_related_entities_entity_2_fkey" FOREIGN KEY ("entity_2") REFERENCES "public"."entities"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "jt_reports_transactions" ADD CONSTRAINT "jt_reports_transactions_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "public"."reports"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "jt_reports_transactions" ADD CONSTRAINT "jt_reports_transactions_transaction_id_fkey" FOREIGN KEY ("transaction_id") REFERENCES "public"."transactions"("id") ON DELETE no action ON UPDATE no action;
*/
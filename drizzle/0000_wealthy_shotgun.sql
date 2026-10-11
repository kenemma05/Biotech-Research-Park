CREATE TABLE "contact_inquiries" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"phone" text,
	"company" text,
	"inquiry_type" text NOT NULL,
	"message" text NOT NULL,
	"status" text DEFAULT 'pending' NOT NULL,
	"admin_notes" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "facility_suite_metrics" (
	"id" serial PRIMARY KEY NOT NULL,
	"suite" text NOT NULL,
	"short_name" text NOT NULL,
	"grade" text NOT NULL,
	"iso_class" text NOT NULL,
	"area_m2" integer NOT NULL,
	"utilization_rate" integer NOT NULL,
	"throughput_capacity" text NOT NULL,
	"active_status" text NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "facility_suite_metrics_suite_unique" UNIQUE("suite")
);
--> statement-breakpoint
CREATE TABLE "facility_throughput_metrics" (
	"id" serial PRIMARY KEY NOT NULL,
	"month" text NOT NULL,
	"vials_filled_thousand" integer NOT NULL,
	"bioreactor_volume_liters" integer NOT NULL,
	"overall_utilization" integer NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "facility_throughput_metrics_month_unique" UNIQUE("month")
);
--> statement-breakpoint
CREATE TABLE "manufacturing_rfps" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"company" text,
	"modality" text NOT NULL,
	"phase" text NOT NULL,
	"target_volume" text NOT NULL,
	"fill_finish_format" text NOT NULL,
	"project_timeline" text NOT NULL,
	"notes" text,
	"status" text DEFAULT 'pending' NOT NULL,
	"admin_notes" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "newsletter_subscribers" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"source" text DEFAULT 'footer' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "newsletter_subscribers_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "partner_inquiries" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"phone" text,
	"company" text,
	"subject" text NOT NULL,
	"message" text NOT NULL,
	"status" text DEFAULT 'pending' NOT NULL,
	"admin_notes" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "publication_comments" (
	"id" serial PRIMARY KEY NOT NULL,
	"post_id" text NOT NULL,
	"user_id" integer NOT NULL,
	"author_name" text NOT NULL,
	"author_role" text,
	"content" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "research_papers" (
	"id" serial PRIMARY KEY NOT NULL,
	"paper_code" text NOT NULL,
	"slug" text NOT NULL,
	"title" text NOT NULL,
	"category" text NOT NULL,
	"author_name" text NOT NULL,
	"author_role" text NOT NULL,
	"author_initials" text NOT NULL,
	"published_date" text NOT NULL,
	"read_time" text NOT NULL,
	"excerpt" text NOT NULL,
	"content_snippet" text NOT NULL,
	"tags_json" text NOT NULL,
	"image_url" text NOT NULL,
	"image_caption" text,
	"key_metrics_json" text,
	"full_sections_json" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "research_papers_paper_code_unique" UNIQUE("paper_code"),
	CONSTRAINT "research_papers_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"uid" text NOT NULL,
	"email" text NOT NULL,
	"full_name" text,
	"username" text,
	"organization" text,
	"job_title" text,
	"partner_type" text,
	"phone_number" text,
	"address_line_1" text,
	"address_line_2" text,
	"city" text,
	"state_province_region" text,
	"zip_postal_code" text,
	"country" text,
	"email_verified" boolean DEFAULT false NOT NULL,
	"account_status" text DEFAULT 'active' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_uid_unique" UNIQUE("uid")
);
--> statement-breakpoint
ALTER TABLE "contact_inquiries" ADD CONSTRAINT "contact_inquiries_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "manufacturing_rfps" ADD CONSTRAINT "manufacturing_rfps_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "partner_inquiries" ADD CONSTRAINT "partner_inquiries_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "publication_comments" ADD CONSTRAINT "publication_comments_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
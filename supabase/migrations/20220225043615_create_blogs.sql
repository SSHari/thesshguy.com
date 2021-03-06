-- This script was generated by the Schema Diff utility in pgAdmin 4
-- For the circular dependencies, the order in which Schema Diff writes the objects is not very sophisticated
-- and may require manual changes to the script to ensure changes are applied in the correct order.
-- Please report an issue for any failure with the reproduction steps.

CREATE TABLE IF NOT EXISTS public."Blogs"
(
    blog_id bigint NOT NULL GENERATED BY DEFAULT AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    content text COLLATE pg_catalog."default" NOT NULL,
    title text COLLATE pg_catalog."default" NOT NULL,
    blog_slug text COLLATE pg_catalog."default" NOT NULL,
    user_id uuid NOT NULL,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    is_published boolean NOT NULL DEFAULT false,
    CONSTRAINT "Blogs_pkey" PRIMARY KEY (blog_id),
    CONSTRAINT "Blogs_blog_slug_key" UNIQUE (blog_slug)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Blogs"
    OWNER to postgres;

ALTER TABLE IF EXISTS public."Blogs"
    ENABLE ROW LEVEL SECURITY;

GRANT ALL ON TABLE public."Blogs" TO anon;

GRANT ALL ON TABLE public."Blogs" TO authenticated;

GRANT ALL ON TABLE public."Blogs" TO postgres;

GRANT ALL ON TABLE public."Blogs" TO service_role;

COMMENT ON TABLE public."Blogs"
    IS 'MDX for blog posts';
CREATE POLICY "Enable full access for SSHari based on email"
    ON public."Blogs"
    AS PERMISSIVE
    FOR ALL
    TO public
    USING ((auth.email() = 'thesshguy@gmail.com'::text))
    WITH CHECK ((auth.email() = 'thesshguy@gmail.com'::text));
CREATE POLICY "Enable read access for all users"
    ON public."Blogs"
    AS PERMISSIVE
    FOR SELECT
    TO public
    USING ((is_published = true));

CREATE POLICY "Enable read access for all users"
    ON public."Demos"
    AS PERMISSIVE
    FOR SELECT
    TO public
    USING ((is_published = true));

CREATE POLICY "Enable full access for SSHari based on email"
    ON public."Demos"
    AS PERMISSIVE
    FOR ALL
    TO public
    USING ((auth.email() = 'thesshguy@gmail.com'::text))
    WITH CHECK ((auth.email() = 'thesshguy@gmail.com'::text));


DROP POLICY IF EXISTS "Enable read access to all users" ON public."Demos";

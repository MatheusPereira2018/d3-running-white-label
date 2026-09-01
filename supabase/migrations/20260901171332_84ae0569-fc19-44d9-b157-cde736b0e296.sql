ALTER TABLE public.events
  ADD COLUMN IF NOT EXISTS max_slots integer,
  ADD COLUMN IF NOT EXISTS documents jsonb NOT NULL DEFAULT '[]'::jsonb;

CREATE OR REPLACE FUNCTION public.list_event_signups_public(_event_id uuid)
RETURNS TABLE (
  full_name text,
  city text,
  team_name text,
  category text,
  status text,
  gender text,
  age integer
)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT
    COALESCE(NULLIF(s.participant_full_name, ''), p.full_name, '')::text AS full_name,
    COALESCE(p.city, '')::text AS city,
    COALESCE(NULLIF(s.team_name, ''), p.team_name, '')::text AS team_name,
    COALESCE(s.category, '')::text AS category,
    COALESCE(s.status, '')::text AS status,
    COALESCE(NULLIF(s.participant_gender, ''), p.gender, '')::text AS gender,
    CASE
      WHEN COALESCE(s.participant_birth_date, p.birth_date) IS NULL THEN NULL
      ELSE EXTRACT(YEAR FROM age(COALESCE(s.participant_birth_date, p.birth_date)))::integer
    END AS age
  FROM public.event_signups s
  LEFT JOIN public.profiles p ON p.user_id = s.user_id
  WHERE s.event_id = _event_id
    AND lower(COALESCE(s.status, '')) = 'confirmada';
$$;

REVOKE ALL ON FUNCTION public.list_event_signups_public(uuid) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.list_event_signups_public(uuid) TO anon, authenticated, service_role;

REVOKE ALL ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated, service_role;

REVOKE ALL ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;

REVOKE ALL ON FUNCTION public.update_updated_at_column() FROM PUBLIC, anon, authenticated;
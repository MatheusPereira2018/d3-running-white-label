-- Helpers
CREATE OR REPLACE FUNCTION public.update_updated_at_column() RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END; $$ LANGUAGE plpgsql SET search_path = public;

DO $$ BEGIN
  CREATE TYPE public.app_role AS ENUM ('admin','organizer','user');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;

CREATE POLICY "Users read own roles" ON public.user_roles FOR SELECT TO authenticated USING (user_id = auth.uid() OR public.has_role(auth.uid(),'admin'));
CREATE POLICY "Admins manage roles" ON public.user_roles FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

-- SITE SETTINGS
CREATE TABLE public.site_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  brand_name text, brand_short text, brand_slogan text, brand_description text,
  contact_whatsapp text, contact_whatsapp_display text, contact_email text,
  contact_instagram text, contact_instagram_handle text, contact_strava text, contact_region text,
  hero_eyebrow text, hero_title text, hero_title_accent text, hero_subtitle text,
  hero_primary_cta text, hero_secondary_cta text, hero_image text,
  hero_stat_1_value text, hero_stat_1_label text,
  hero_stat_2_value text, hero_stat_2_label text,
  hero_stat_3_value text, hero_stat_3_label text,
  cta_final_title text, cta_final_subtitle text, cta_final_button text,
  product_pix_key text, product_pix_recipient text, product_payment_instructions text,
  home_benefit_image_1 text, home_benefit_image_2 text, home_benefit_image_3 text,
  home_benefit_image_4 text, home_benefit_image_5 text, home_benefit_image_6 text,
  home_intro_image text,
  home_team_avatar_1 text, home_team_avatar_2 text, home_team_avatar_3 text, home_team_avatar_4 text,
  sobre_coach_1_image text, sobre_coach_2_image text, sobre_main_image text,
  sobre_gallery_1 text, sobre_gallery_2 text, sobre_gallery_3 text, sobre_races_image text,
  contato_image text, welcome_image text,
  pathway_1_image text, pathway_2_image text, pathway_3_image text,
  trainingpeaks_hero_image text, trainingpeaks_app_image text,
  training_banner_aspect text DEFAULT '16:9',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.site_settings TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.site_settings TO authenticated;
GRANT ALL ON public.site_settings TO service_role;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read settings" ON public.site_settings FOR SELECT USING (true);
CREATE POLICY "Admins write settings" ON public.site_settings FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE TRIGGER trg_site_settings_updated BEFORE UPDATE ON public.site_settings FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- PLANS
CREATE TABLE public.plans (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL, tagline text NOT NULL DEFAULT '',
  price text, price_note text, price_installments text, footer_note text,
  highlight boolean NOT NULL DEFAULT false,
  features text[] NOT NULL DEFAULT '{}',
  cta_message text NOT NULL DEFAULT '',
  categories text[] NOT NULL DEFAULT '{}',
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.plans TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.plans TO authenticated;
GRANT ALL ON public.plans TO service_role;
ALTER TABLE public.plans ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read plans" ON public.plans FOR SELECT USING (true);
CREATE POLICY "Admins write plans" ON public.plans FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE TRIGGER trg_plans_updated BEFORE UPDATE ON public.plans FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- TRAININGS
CREATE TABLE public.trainings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL, date text NOT NULL DEFAULT '', "time" text NOT NULL DEFAULT '',
  location text NOT NULL DEFAULT '', map_url text, description text NOT NULL DEFAULT '',
  level text NOT NULL DEFAULT 'Todos os níveis', capacity integer, image text,
  active boolean NOT NULL DEFAULT true, sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.trainings TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.trainings TO authenticated;
GRANT ALL ON public.trainings TO service_role;
ALTER TABLE public.trainings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read trainings" ON public.trainings FOR SELECT USING (true);
CREATE POLICY "Admins write trainings" ON public.trainings FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE TRIGGER trg_trainings_updated BEFORE UPDATE ON public.trainings FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- ORGANIZERS
CREATE TABLE public.organizers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name text NOT NULL,
  commission_percentage numeric NOT NULL DEFAULT 0,
  status text NOT NULL DEFAULT 'active',
  created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.organizers TO authenticated;
GRANT ALL ON public.organizers TO service_role;
ALTER TABLE public.organizers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Organizers read own or admin" ON public.organizers FOR SELECT TO authenticated USING (user_id = auth.uid() OR public.has_role(auth.uid(),'admin'));
CREATE POLICY "Admins write organizers" ON public.organizers FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE TRIGGER trg_organizers_updated BEFORE UPDATE ON public.organizers FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- EVENTS
CREATE TABLE public.events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL, date text NOT NULL DEFAULT '', start_time text,
  city text NOT NULL DEFAULT '', distance text NOT NULL DEFAULT '',
  description text NOT NULL DEFAULT '', registration_url text NOT NULL DEFAULT '',
  status text NOT NULL DEFAULT 'soon',
  image text, banner_image text, banner_mobile_image text, banner_aspect_ratio text DEFAULT '9:16',
  internal_signup boolean NOT NULL DEFAULT false,
  regulation_url text, kit_info text, kit_delivery text, more_info text, event_terms text,
  registration_deadline text,
  distances jsonb NOT NULL DEFAULT '[]'::jsonb,
  genders jsonb NOT NULL DEFAULT '[]'::jsonb,
  age_brackets jsonb NOT NULL DEFAULT '[]'::jsonb,
  kit_options jsonb NOT NULL DEFAULT '[]'::jsonb,
  coupons jsonb NOT NULL DEFAULT '[]'::jsonb,
  organizer_id uuid REFERENCES public.organizers(id) ON DELETE SET NULL,
  active boolean NOT NULL DEFAULT true, sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.events TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.events TO authenticated;
GRANT ALL ON public.events TO service_role;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read events" ON public.events FOR SELECT USING (true);
CREATE POLICY "Admins write events" ON public.events FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE TRIGGER trg_events_updated BEFORE UPDATE ON public.events FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- PRODUCTS
CREATE TABLE public.products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL, image text NOT NULL DEFAULT '', images text[] NOT NULL DEFAULT '{}',
  price text, description text NOT NULL DEFAULT '', cta_message text NOT NULL DEFAULT '',
  active boolean NOT NULL DEFAULT true, sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.products TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.products TO authenticated;
GRANT ALL ON public.products TO service_role;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read products" ON public.products FOR SELECT USING (true);
CREATE POLICY "Admins write products" ON public.products FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE TRIGGER trg_products_updated BEFORE UPDATE ON public.products FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- GALLERY
CREATE TABLE public.gallery (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  src text NOT NULL, title text NOT NULL DEFAULT '', category text NOT NULL DEFAULT 'Treinos',
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.gallery TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.gallery TO authenticated;
GRANT ALL ON public.gallery TO service_role;
ALTER TABLE public.gallery ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read gallery" ON public.gallery FOR SELECT USING (true);
CREATE POLICY "Admins write gallery" ON public.gallery FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE TRIGGER trg_gallery_updated BEFORE UPDATE ON public.gallery FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- TESTIMONIALS
CREATE TABLE public.testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL, role text NOT NULL DEFAULT '', text text NOT NULL DEFAULT '', avatar text,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.testimonials TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.testimonials TO authenticated;
GRANT ALL ON public.testimonials TO service_role;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read testimonials" ON public.testimonials FOR SELECT USING (true);
CREATE POLICY "Admins write testimonials" ON public.testimonials FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE TRIGGER trg_testimonials_updated BEFORE UPDATE ON public.testimonials FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- FAQS
CREATE TABLE public.faqs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  question text NOT NULL, answer text NOT NULL DEFAULT '',
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.faqs TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.faqs TO authenticated;
GRANT ALL ON public.faqs TO service_role;
ALTER TABLE public.faqs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read faqs" ON public.faqs FOR SELECT USING (true);
CREATE POLICY "Admins write faqs" ON public.faqs FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE TRIGGER trg_faqs_updated BEFORE UPDATE ON public.faqs FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- PHOTO EVENTS
CREATE TABLE public.photo_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL, date text NOT NULL DEFAULT '', location text NOT NULL DEFAULT '',
  cover_image text, description text NOT NULL DEFAULT '', photo_link text NOT NULL DEFAULT '',
  status text NOT NULL DEFAULT 'Em breve',
  active boolean NOT NULL DEFAULT true, sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.photo_events TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.photo_events TO authenticated;
GRANT ALL ON public.photo_events TO service_role;
ALTER TABLE public.photo_events ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read photo_events" ON public.photo_events FOR SELECT USING (true);
CREATE POLICY "Admins write photo_events" ON public.photo_events FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE TRIGGER trg_photo_events_updated BEFORE UPDATE ON public.photo_events FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- PARTNERS
CREATE TABLE public.partners (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL, logo text NOT NULL DEFAULT '', url text,
  description text NOT NULL DEFAULT '', coupon_code text NOT NULL DEFAULT '',
  benefit_text text NOT NULL DEFAULT '', category text NOT NULL DEFAULT '',
  tier text NOT NULL DEFAULT 'standard', featured boolean NOT NULL DEFAULT false,
  active boolean NOT NULL DEFAULT true, sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.partners TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.partners TO authenticated;
GRANT ALL ON public.partners TO service_role;
ALTER TABLE public.partners ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read partners" ON public.partners FOR SELECT USING (true);
CREATE POLICY "Admins write partners" ON public.partners FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE TRIGGER trg_partners_updated BEFORE UPDATE ON public.partners FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- HOME HIGHLIGHTS
CREATE TABLE public.home_highlights (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL DEFAULT '', subtitle text NOT NULL DEFAULT '', eyebrow text NOT NULL DEFAULT '',
  image text NOT NULL DEFAULT '', image_position text, image_fit text,
  button_label text NOT NULL DEFAULT '', button_link text NOT NULL DEFAULT '',
  active boolean NOT NULL DEFAULT true, sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.home_highlights TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.home_highlights TO authenticated;
GRANT ALL ON public.home_highlights TO service_role;
ALTER TABLE public.home_highlights ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read highlights" ON public.home_highlights FOR SELECT USING (true);
CREATE POLICY "Admins write highlights" ON public.home_highlights FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE TRIGGER trg_home_highlights_updated BEFORE UPDATE ON public.home_highlights FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- PROFILES
CREATE TABLE public.profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name text NOT NULL DEFAULT '', cpf text NOT NULL DEFAULT '',
  birth_date date, gender text NOT NULL DEFAULT '',
  phone text NOT NULL DEFAULT '', whatsapp text NOT NULL DEFAULT '', email text NOT NULL DEFAULT '',
  cep text NOT NULL DEFAULT '', street text NOT NULL DEFAULT '', number text NOT NULL DEFAULT '',
  complement text NOT NULL DEFAULT '', neighborhood text NOT NULL DEFAULT '',
  city text NOT NULL DEFAULT '', state text NOT NULL DEFAULT '', team_name text NOT NULL DEFAULT '',
  accepts_marketing boolean NOT NULL DEFAULT false, accepted_terms_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Read own profile or admin" ON public.profiles FOR SELECT TO authenticated USING (user_id = auth.uid() OR public.has_role(auth.uid(),'admin') OR public.has_role(auth.uid(),'organizer'));
CREATE POLICY "Insert own profile" ON public.profiles FOR INSERT TO authenticated WITH CHECK (user_id = auth.uid());
CREATE POLICY "Update own profile" ON public.profiles FOR UPDATE TO authenticated USING (user_id = auth.uid() OR public.has_role(auth.uid(),'admin')) WITH CHECK (user_id = auth.uid() OR public.has_role(auth.uid(),'admin'));
CREATE POLICY "Delete own profile" ON public.profiles FOR DELETE TO authenticated USING (user_id = auth.uid() OR public.has_role(auth.uid(),'admin'));
CREATE TRIGGER trg_profiles_updated BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE OR REPLACE FUNCTION public.handle_new_user() RETURNS trigger
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  INSERT INTO public.profiles (user_id, full_name, email)
  VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data->>'full_name',''), COALESCE(NEW.email,''))
  ON CONFLICT (user_id) DO NOTHING;
  RETURN NEW;
END; $$;
CREATE TRIGGER on_auth_user_created AFTER INSERT ON auth.users FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- PARTICIPANTS
CREATE TABLE public.participants (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name text NOT NULL, cpf text, birth_date date, gender text, phone text, relationship text,
  created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.participants TO authenticated;
GRANT ALL ON public.participants TO service_role;
ALTER TABLE public.participants ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Manage own participants" ON public.participants FOR ALL TO authenticated USING (owner_user_id = auth.uid() OR public.has_role(auth.uid(),'admin')) WITH CHECK (owner_user_id = auth.uid() OR public.has_role(auth.uid(),'admin'));
CREATE TRIGGER trg_participants_updated BEFORE UPDATE ON public.participants FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- EVENT SIGNUPS
CREATE TABLE public.event_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  event_id uuid NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
  participant_id uuid REFERENCES public.participants(id) ON DELETE SET NULL,
  category text NOT NULL DEFAULT '', status text NOT NULL DEFAULT 'pendente',
  notes text NOT NULL DEFAULT '',
  kit_option text, shirt_size text, team_name text, coupon_code text,
  participant_full_name text, participant_cpf text, participant_birth_date date,
  participant_gender text, participant_phone text,
  amount numeric,
  created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.event_signups TO authenticated;
GRANT ALL ON public.event_signups TO service_role;
ALTER TABLE public.event_signups ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Read own signups or staff" ON public.event_signups FOR SELECT TO authenticated USING (user_id = auth.uid() OR public.has_role(auth.uid(),'admin') OR public.has_role(auth.uid(),'organizer'));
CREATE POLICY "Create own signups" ON public.event_signups FOR INSERT TO authenticated WITH CHECK (user_id = auth.uid());
CREATE POLICY "Update own signups or admin" ON public.event_signups FOR UPDATE TO authenticated USING (user_id = auth.uid() OR public.has_role(auth.uid(),'admin')) WITH CHECK (user_id = auth.uid() OR public.has_role(auth.uid(),'admin'));
CREATE POLICY "Delete own signups or admin" ON public.event_signups FOR DELETE TO authenticated USING (user_id = auth.uid() OR public.has_role(auth.uid(),'admin'));
CREATE TRIGGER trg_event_signups_updated BEFORE UPDATE ON public.event_signups FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- SEED (fictício, identidade MovRun)
INSERT INTO public.site_settings (brand_name, brand_short, brand_slogan, brand_description,
  contact_whatsapp, contact_whatsapp_display, contact_email, contact_instagram, contact_instagram_handle,
  contact_strava, contact_region, hero_eyebrow, hero_title, hero_title_accent, hero_subtitle,
  hero_primary_cta, hero_secondary_cta, hero_stat_1_value, hero_stat_1_label,
  hero_stat_2_value, hero_stat_2_label, hero_stat_3_value, hero_stat_3_label,
  cta_final_title, cta_final_subtitle, cta_final_button)
VALUES ('MovRun Club','MovRun','Movimento que conecta pessoas',
  'Comunidade de corrida com treinos, eventos e desafios em Araraquara.',
  '5500000000000','(00) 00000-0000','contato@movrun.example','https://instagram.com/movrun','@movrun',
  'https://strava.com/clubs/movrun','Araraquara','Comunidade MovRun','Corra junto com a','MovRun',
  'Treinos, eventos e desafios para todos os ritmos.','Quero participar','Ver eventos',
  '500','corredores','120','treinos por ano','30','eventos',
  'Pronto para o próximo quilômetro?','Faça parte da comunidade MovRun.','Falar no WhatsApp');

INSERT INTO public.faqs (question, answer, sort_order) VALUES
  ('Preciso ter experiência para treinar?','Não. Os treinos têm grupos para todos os níveis.',1),
  ('Como participo dos eventos?','Basta criar sua conta e se inscrever pela página de eventos.',2);

INSERT INTO public.testimonials (name, role, text, sort_order) VALUES
  ('Ana Ribeiro','Corredora','Comecei do zero e hoje completo 10K com o grupo.',1),
  ('Bruno Costa','Corredor','O ambiente é leve e todo mundo se ajuda.',2);
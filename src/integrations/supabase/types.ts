export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      event_signups: {
        Row: {
          amount: number | null
          category: string
          coupon_code: string | null
          created_at: string
          event_id: string
          id: string
          kit_option: string | null
          notes: string
          participant_birth_date: string | null
          participant_cpf: string | null
          participant_full_name: string | null
          participant_gender: string | null
          participant_id: string | null
          participant_phone: string | null
          shirt_size: string | null
          status: string
          team_name: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          amount?: number | null
          category?: string
          coupon_code?: string | null
          created_at?: string
          event_id: string
          id?: string
          kit_option?: string | null
          notes?: string
          participant_birth_date?: string | null
          participant_cpf?: string | null
          participant_full_name?: string | null
          participant_gender?: string | null
          participant_id?: string | null
          participant_phone?: string | null
          shirt_size?: string | null
          status?: string
          team_name?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          amount?: number | null
          category?: string
          coupon_code?: string | null
          created_at?: string
          event_id?: string
          id?: string
          kit_option?: string | null
          notes?: string
          participant_birth_date?: string | null
          participant_cpf?: string | null
          participant_full_name?: string | null
          participant_gender?: string | null
          participant_id?: string | null
          participant_phone?: string | null
          shirt_size?: string | null
          status?: string
          team_name?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "event_signups_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_signups_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "participants"
            referencedColumns: ["id"]
          },
        ]
      }
      events: {
        Row: {
          active: boolean
          age_brackets: Json
          banner_aspect_ratio: string | null
          banner_image: string | null
          banner_mobile_image: string | null
          city: string
          coupons: Json
          created_at: string
          date: string
          description: string
          distance: string
          distances: Json
          documents: Json
          event_terms: string | null
          genders: Json
          id: string
          image: string | null
          internal_signup: boolean
          kit_delivery: string | null
          kit_info: string | null
          kit_options: Json
          max_slots: number | null
          more_info: string | null
          name: string
          organizer_id: string | null
          registration_deadline: string | null
          registration_url: string
          regulation_url: string | null
          sort_order: number
          start_time: string | null
          status: string
          updated_at: string
        }
        Insert: {
          active?: boolean
          age_brackets?: Json
          banner_aspect_ratio?: string | null
          banner_image?: string | null
          banner_mobile_image?: string | null
          city?: string
          coupons?: Json
          created_at?: string
          date?: string
          description?: string
          distance?: string
          distances?: Json
          documents?: Json
          event_terms?: string | null
          genders?: Json
          id?: string
          image?: string | null
          internal_signup?: boolean
          kit_delivery?: string | null
          kit_info?: string | null
          kit_options?: Json
          max_slots?: number | null
          more_info?: string | null
          name: string
          organizer_id?: string | null
          registration_deadline?: string | null
          registration_url?: string
          regulation_url?: string | null
          sort_order?: number
          start_time?: string | null
          status?: string
          updated_at?: string
        }
        Update: {
          active?: boolean
          age_brackets?: Json
          banner_aspect_ratio?: string | null
          banner_image?: string | null
          banner_mobile_image?: string | null
          city?: string
          coupons?: Json
          created_at?: string
          date?: string
          description?: string
          distance?: string
          distances?: Json
          documents?: Json
          event_terms?: string | null
          genders?: Json
          id?: string
          image?: string | null
          internal_signup?: boolean
          kit_delivery?: string | null
          kit_info?: string | null
          kit_options?: Json
          max_slots?: number | null
          more_info?: string | null
          name?: string
          organizer_id?: string | null
          registration_deadline?: string | null
          registration_url?: string
          regulation_url?: string | null
          sort_order?: number
          start_time?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "events_organizer_id_fkey"
            columns: ["organizer_id"]
            isOneToOne: false
            referencedRelation: "organizers"
            referencedColumns: ["id"]
          },
        ]
      }
      faqs: {
        Row: {
          answer: string
          created_at: string
          id: string
          question: string
          sort_order: number
          updated_at: string
        }
        Insert: {
          answer?: string
          created_at?: string
          id?: string
          question: string
          sort_order?: number
          updated_at?: string
        }
        Update: {
          answer?: string
          created_at?: string
          id?: string
          question?: string
          sort_order?: number
          updated_at?: string
        }
        Relationships: []
      }
      gallery: {
        Row: {
          category: string
          created_at: string
          id: string
          sort_order: number
          src: string
          title: string
          updated_at: string
        }
        Insert: {
          category?: string
          created_at?: string
          id?: string
          sort_order?: number
          src: string
          title?: string
          updated_at?: string
        }
        Update: {
          category?: string
          created_at?: string
          id?: string
          sort_order?: number
          src?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      home_highlights: {
        Row: {
          active: boolean
          button_label: string
          button_link: string
          created_at: string
          eyebrow: string
          id: string
          image: string
          image_fit: string | null
          image_position: string | null
          sort_order: number
          subtitle: string
          title: string
          updated_at: string
        }
        Insert: {
          active?: boolean
          button_label?: string
          button_link?: string
          created_at?: string
          eyebrow?: string
          id?: string
          image?: string
          image_fit?: string | null
          image_position?: string | null
          sort_order?: number
          subtitle?: string
          title?: string
          updated_at?: string
        }
        Update: {
          active?: boolean
          button_label?: string
          button_link?: string
          created_at?: string
          eyebrow?: string
          id?: string
          image?: string
          image_fit?: string | null
          image_position?: string | null
          sort_order?: number
          subtitle?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      organizers: {
        Row: {
          commission_percentage: number
          created_at: string
          id: string
          name: string
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          commission_percentage?: number
          created_at?: string
          id?: string
          name: string
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          commission_percentage?: number
          created_at?: string
          id?: string
          name?: string
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      participants: {
        Row: {
          birth_date: string | null
          cpf: string | null
          created_at: string
          full_name: string
          gender: string | null
          id: string
          owner_user_id: string
          phone: string | null
          relationship: string | null
          updated_at: string
        }
        Insert: {
          birth_date?: string | null
          cpf?: string | null
          created_at?: string
          full_name: string
          gender?: string | null
          id?: string
          owner_user_id: string
          phone?: string | null
          relationship?: string | null
          updated_at?: string
        }
        Update: {
          birth_date?: string | null
          cpf?: string | null
          created_at?: string
          full_name?: string
          gender?: string | null
          id?: string
          owner_user_id?: string
          phone?: string | null
          relationship?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      partners: {
        Row: {
          active: boolean
          benefit_text: string
          category: string
          coupon_code: string
          created_at: string
          description: string
          featured: boolean
          id: string
          logo: string
          name: string
          sort_order: number
          tier: string
          updated_at: string
          url: string | null
        }
        Insert: {
          active?: boolean
          benefit_text?: string
          category?: string
          coupon_code?: string
          created_at?: string
          description?: string
          featured?: boolean
          id?: string
          logo?: string
          name: string
          sort_order?: number
          tier?: string
          updated_at?: string
          url?: string | null
        }
        Update: {
          active?: boolean
          benefit_text?: string
          category?: string
          coupon_code?: string
          created_at?: string
          description?: string
          featured?: boolean
          id?: string
          logo?: string
          name?: string
          sort_order?: number
          tier?: string
          updated_at?: string
          url?: string | null
        }
        Relationships: []
      }
      photo_events: {
        Row: {
          active: boolean
          cover_image: string | null
          created_at: string
          date: string
          description: string
          id: string
          location: string
          photo_link: string
          sort_order: number
          status: string
          title: string
          updated_at: string
        }
        Insert: {
          active?: boolean
          cover_image?: string | null
          created_at?: string
          date?: string
          description?: string
          id?: string
          location?: string
          photo_link?: string
          sort_order?: number
          status?: string
          title: string
          updated_at?: string
        }
        Update: {
          active?: boolean
          cover_image?: string | null
          created_at?: string
          date?: string
          description?: string
          id?: string
          location?: string
          photo_link?: string
          sort_order?: number
          status?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      plans: {
        Row: {
          categories: string[]
          created_at: string
          cta_message: string
          features: string[]
          footer_note: string | null
          highlight: boolean
          id: string
          name: string
          price: string | null
          price_installments: string | null
          price_note: string | null
          sort_order: number
          tagline: string
          updated_at: string
        }
        Insert: {
          categories?: string[]
          created_at?: string
          cta_message?: string
          features?: string[]
          footer_note?: string | null
          highlight?: boolean
          id?: string
          name: string
          price?: string | null
          price_installments?: string | null
          price_note?: string | null
          sort_order?: number
          tagline?: string
          updated_at?: string
        }
        Update: {
          categories?: string[]
          created_at?: string
          cta_message?: string
          features?: string[]
          footer_note?: string | null
          highlight?: boolean
          id?: string
          name?: string
          price?: string | null
          price_installments?: string | null
          price_note?: string | null
          sort_order?: number
          tagline?: string
          updated_at?: string
        }
        Relationships: []
      }
      products: {
        Row: {
          active: boolean
          created_at: string
          cta_message: string
          description: string
          id: string
          image: string
          images: string[]
          name: string
          price: string | null
          sort_order: number
          updated_at: string
        }
        Insert: {
          active?: boolean
          created_at?: string
          cta_message?: string
          description?: string
          id?: string
          image?: string
          images?: string[]
          name: string
          price?: string | null
          sort_order?: number
          updated_at?: string
        }
        Update: {
          active?: boolean
          created_at?: string
          cta_message?: string
          description?: string
          id?: string
          image?: string
          images?: string[]
          name?: string
          price?: string | null
          sort_order?: number
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          accepted_terms_at: string | null
          accepts_marketing: boolean
          birth_date: string | null
          cep: string
          city: string
          complement: string
          cpf: string
          created_at: string
          email: string
          full_name: string
          gender: string
          id: string
          neighborhood: string
          number: string
          phone: string
          state: string
          street: string
          team_name: string
          updated_at: string
          user_id: string
          whatsapp: string
        }
        Insert: {
          accepted_terms_at?: string | null
          accepts_marketing?: boolean
          birth_date?: string | null
          cep?: string
          city?: string
          complement?: string
          cpf?: string
          created_at?: string
          email?: string
          full_name?: string
          gender?: string
          id?: string
          neighborhood?: string
          number?: string
          phone?: string
          state?: string
          street?: string
          team_name?: string
          updated_at?: string
          user_id: string
          whatsapp?: string
        }
        Update: {
          accepted_terms_at?: string | null
          accepts_marketing?: boolean
          birth_date?: string | null
          cep?: string
          city?: string
          complement?: string
          cpf?: string
          created_at?: string
          email?: string
          full_name?: string
          gender?: string
          id?: string
          neighborhood?: string
          number?: string
          phone?: string
          state?: string
          street?: string
          team_name?: string
          updated_at?: string
          user_id?: string
          whatsapp?: string
        }
        Relationships: []
      }
      site_settings: {
        Row: {
          brand_description: string | null
          brand_name: string | null
          brand_short: string | null
          brand_slogan: string | null
          contact_email: string | null
          contact_instagram: string | null
          contact_instagram_handle: string | null
          contact_region: string | null
          contact_strava: string | null
          contact_whatsapp: string | null
          contact_whatsapp_display: string | null
          contato_image: string | null
          created_at: string
          cta_final_button: string | null
          cta_final_subtitle: string | null
          cta_final_title: string | null
          hero_eyebrow: string | null
          hero_image: string | null
          hero_primary_cta: string | null
          hero_secondary_cta: string | null
          hero_stat_1_label: string | null
          hero_stat_1_value: string | null
          hero_stat_2_label: string | null
          hero_stat_2_value: string | null
          hero_stat_3_label: string | null
          hero_stat_3_value: string | null
          hero_subtitle: string | null
          hero_title: string | null
          hero_title_accent: string | null
          home_benefit_image_1: string | null
          home_benefit_image_2: string | null
          home_benefit_image_3: string | null
          home_benefit_image_4: string | null
          home_benefit_image_5: string | null
          home_benefit_image_6: string | null
          home_intro_image: string | null
          home_team_avatar_1: string | null
          home_team_avatar_2: string | null
          home_team_avatar_3: string | null
          home_team_avatar_4: string | null
          id: string
          pathway_1_image: string | null
          pathway_2_image: string | null
          pathway_3_image: string | null
          product_payment_instructions: string | null
          product_pix_key: string | null
          product_pix_recipient: string | null
          sobre_coach_1_image: string | null
          sobre_coach_2_image: string | null
          sobre_gallery_1: string | null
          sobre_gallery_2: string | null
          sobre_gallery_3: string | null
          sobre_main_image: string | null
          sobre_races_image: string | null
          training_banner_aspect: string | null
          trainingpeaks_app_image: string | null
          trainingpeaks_hero_image: string | null
          updated_at: string
          welcome_image: string | null
        }
        Insert: {
          brand_description?: string | null
          brand_name?: string | null
          brand_short?: string | null
          brand_slogan?: string | null
          contact_email?: string | null
          contact_instagram?: string | null
          contact_instagram_handle?: string | null
          contact_region?: string | null
          contact_strava?: string | null
          contact_whatsapp?: string | null
          contact_whatsapp_display?: string | null
          contato_image?: string | null
          created_at?: string
          cta_final_button?: string | null
          cta_final_subtitle?: string | null
          cta_final_title?: string | null
          hero_eyebrow?: string | null
          hero_image?: string | null
          hero_primary_cta?: string | null
          hero_secondary_cta?: string | null
          hero_stat_1_label?: string | null
          hero_stat_1_value?: string | null
          hero_stat_2_label?: string | null
          hero_stat_2_value?: string | null
          hero_stat_3_label?: string | null
          hero_stat_3_value?: string | null
          hero_subtitle?: string | null
          hero_title?: string | null
          hero_title_accent?: string | null
          home_benefit_image_1?: string | null
          home_benefit_image_2?: string | null
          home_benefit_image_3?: string | null
          home_benefit_image_4?: string | null
          home_benefit_image_5?: string | null
          home_benefit_image_6?: string | null
          home_intro_image?: string | null
          home_team_avatar_1?: string | null
          home_team_avatar_2?: string | null
          home_team_avatar_3?: string | null
          home_team_avatar_4?: string | null
          id?: string
          pathway_1_image?: string | null
          pathway_2_image?: string | null
          pathway_3_image?: string | null
          product_payment_instructions?: string | null
          product_pix_key?: string | null
          product_pix_recipient?: string | null
          sobre_coach_1_image?: string | null
          sobre_coach_2_image?: string | null
          sobre_gallery_1?: string | null
          sobre_gallery_2?: string | null
          sobre_gallery_3?: string | null
          sobre_main_image?: string | null
          sobre_races_image?: string | null
          training_banner_aspect?: string | null
          trainingpeaks_app_image?: string | null
          trainingpeaks_hero_image?: string | null
          updated_at?: string
          welcome_image?: string | null
        }
        Update: {
          brand_description?: string | null
          brand_name?: string | null
          brand_short?: string | null
          brand_slogan?: string | null
          contact_email?: string | null
          contact_instagram?: string | null
          contact_instagram_handle?: string | null
          contact_region?: string | null
          contact_strava?: string | null
          contact_whatsapp?: string | null
          contact_whatsapp_display?: string | null
          contato_image?: string | null
          created_at?: string
          cta_final_button?: string | null
          cta_final_subtitle?: string | null
          cta_final_title?: string | null
          hero_eyebrow?: string | null
          hero_image?: string | null
          hero_primary_cta?: string | null
          hero_secondary_cta?: string | null
          hero_stat_1_label?: string | null
          hero_stat_1_value?: string | null
          hero_stat_2_label?: string | null
          hero_stat_2_value?: string | null
          hero_stat_3_label?: string | null
          hero_stat_3_value?: string | null
          hero_subtitle?: string | null
          hero_title?: string | null
          hero_title_accent?: string | null
          home_benefit_image_1?: string | null
          home_benefit_image_2?: string | null
          home_benefit_image_3?: string | null
          home_benefit_image_4?: string | null
          home_benefit_image_5?: string | null
          home_benefit_image_6?: string | null
          home_intro_image?: string | null
          home_team_avatar_1?: string | null
          home_team_avatar_2?: string | null
          home_team_avatar_3?: string | null
          home_team_avatar_4?: string | null
          id?: string
          pathway_1_image?: string | null
          pathway_2_image?: string | null
          pathway_3_image?: string | null
          product_payment_instructions?: string | null
          product_pix_key?: string | null
          product_pix_recipient?: string | null
          sobre_coach_1_image?: string | null
          sobre_coach_2_image?: string | null
          sobre_gallery_1?: string | null
          sobre_gallery_2?: string | null
          sobre_gallery_3?: string | null
          sobre_main_image?: string | null
          sobre_races_image?: string | null
          training_banner_aspect?: string | null
          trainingpeaks_app_image?: string | null
          trainingpeaks_hero_image?: string | null
          updated_at?: string
          welcome_image?: string | null
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          avatar: string | null
          created_at: string
          id: string
          name: string
          role: string
          sort_order: number
          text: string
          updated_at: string
        }
        Insert: {
          avatar?: string | null
          created_at?: string
          id?: string
          name: string
          role?: string
          sort_order?: number
          text?: string
          updated_at?: string
        }
        Update: {
          avatar?: string | null
          created_at?: string
          id?: string
          name?: string
          role?: string
          sort_order?: number
          text?: string
          updated_at?: string
        }
        Relationships: []
      }
      trainings: {
        Row: {
          active: boolean
          capacity: number | null
          created_at: string
          date: string
          description: string
          id: string
          image: string | null
          level: string
          location: string
          map_url: string | null
          sort_order: number
          time: string
          title: string
          updated_at: string
        }
        Insert: {
          active?: boolean
          capacity?: number | null
          created_at?: string
          date?: string
          description?: string
          id?: string
          image?: string | null
          level?: string
          location?: string
          map_url?: string | null
          sort_order?: number
          time?: string
          title: string
          updated_at?: string
        }
        Update: {
          active?: boolean
          capacity?: number | null
          created_at?: string
          date?: string
          description?: string
          id?: string
          image?: string | null
          level?: string
          location?: string
          map_url?: string | null
          sort_order?: number
          time?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      list_event_signups_public: {
        Args: { _event_id: string }
        Returns: {
          age: number
          category: string
          city: string
          full_name: string
          gender: string
          status: string
          team_name: string
        }[]
      }
    }
    Enums: {
      app_role: "admin" | "organizer" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "organizer", "user"],
    },
  },
} as const

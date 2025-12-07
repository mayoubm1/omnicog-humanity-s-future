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
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      agents_projects: {
        Row: {
          agent_id: string
          created_at: string | null
          id: string
          metadata: Json | null
          permissions: string | null
          project_id: string
          role: string | null
        }
        Insert: {
          agent_id: string
          created_at?: string | null
          id?: string
          metadata?: Json | null
          permissions?: string | null
          project_id: string
          role?: string | null
        }
        Update: {
          agent_id?: string
          created_at?: string | null
          id?: string
          metadata?: Json | null
          permissions?: string | null
          project_id?: string
          role?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "agents_projects_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "ai_agents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "agents_projects_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_agents: {
        Row: {
          configuration: Json | null
          created_at: string | null
          id: string
          model_id: string | null
          name: string | null
          owner_user_id: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          configuration?: Json | null
          created_at?: string | null
          id?: string
          model_id?: string | null
          name?: string | null
          owner_user_id: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          configuration?: Json | null
          created_at?: string | null
          id?: string
          model_id?: string | null
          name?: string | null
          owner_user_id?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ai_agents_model_id_fkey"
            columns: ["model_id"]
            isOneToOne: false
            referencedRelation: "ai_models"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ai_agents_owner_user_id_fkey"
            columns: ["owner_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_agents_backup: {
        Row: {
          configuration: Json | null
          created_at: string | null
          id: string | null
          model_id: string | null
          name: string | null
          owner_user_id: string | null
          updated_at: string | null
        }
        Insert: {
          configuration?: Json | null
          created_at?: string | null
          id?: string | null
          model_id?: string | null
          name?: string | null
          owner_user_id?: string | null
          updated_at?: string | null
        }
        Update: {
          configuration?: Json | null
          created_at?: string | null
          id?: string | null
          model_id?: string | null
          name?: string | null
          owner_user_id?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      ai_interactions: {
        Row: {
          agent_id: string | null
          created_at: string | null
          id: string
          input_data: Json
          interaction_time: string | null
          output_data: Json | null
          user_id: string | null
        }
        Insert: {
          agent_id?: string | null
          created_at?: string | null
          id?: string
          input_data: Json
          interaction_time?: string | null
          output_data?: Json | null
          user_id?: string | null
        }
        Update: {
          agent_id?: string | null
          created_at?: string | null
          id?: string
          input_data?: Json
          interaction_time?: string | null
          output_data?: Json | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ai_interactions_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "ai_agents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ai_interactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_messages: {
        Row: {
          content: string
          created_at: string
          id: string
          partner_id: string
          sender: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          partner_id: string
          sender: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          partner_id?: string
          sender?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "ai_messages_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_models: {
        Row: {
          api_endpoint: string | null
          api_key_id: string | null
          created_at: string | null
          description: string | null
          id: string
          name: string
          status: Database["public"]["Enums"]["ai_model_status"] | null
          updated_at: string | null
        }
        Insert: {
          api_endpoint?: string | null
          api_key_id?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          status?: Database["public"]["Enums"]["ai_model_status"] | null
          updated_at?: string | null
        }
        Update: {
          api_endpoint?: string | null
          api_key_id?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          status?: Database["public"]["Enums"]["ai_model_status"] | null
          updated_at?: string | null
        }
        Relationships: []
      }
      api_keys: {
        Row: {
          created_at: string | null
          expires_at: string | null
          id: string
          key_hash: string
          name: string
          owner_user_id: string
          service_name: string | null
        }
        Insert: {
          created_at?: string | null
          expires_at?: string | null
          id?: string
          key_hash: string
          name: string
          owner_user_id: string
          service_name?: string | null
        }
        Update: {
          created_at?: string | null
          expires_at?: string | null
          id?: string
          key_hash?: string
          name?: string
          owner_user_id?: string
          service_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "api_keys_owner_user_id_fkey"
            columns: ["owner_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      appointments: {
        Row: {
          created_at: string | null
          end_time: string
          id: string
          notes: string | null
          patient_id: string
          provider_id: string
          start_time: string
          status: Database["public"]["Enums"]["appointment_status"] | null
          type: Database["public"]["Enums"]["appointment_type"]
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          end_time: string
          id?: string
          notes?: string | null
          patient_id: string
          provider_id: string
          start_time: string
          status?: Database["public"]["Enums"]["appointment_status"] | null
          type: Database["public"]["Enums"]["appointment_type"]
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          end_time?: string
          id?: string
          notes?: string | null
          patient_id?: string
          provider_id?: string
          start_time?: string
          status?: Database["public"]["Enums"]["appointment_status"] | null
          type?: Database["public"]["Enums"]["appointment_type"]
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "appointments_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_provider_id_fkey"
            columns: ["provider_id"]
            isOneToOne: false
            referencedRelation: "healthcare_providers"
            referencedColumns: ["id"]
          },
        ]
      }
      assignments: {
        Row: {
          course_id: string
          created_at: string
          description: string
          due_date: string
          id: string
          title: string
          total_points: number | null
        }
        Insert: {
          course_id: string
          created_at?: string
          description: string
          due_date: string
          id?: string
          title: string
          total_points?: number | null
        }
        Update: {
          course_id?: string
          created_at?: string
          description?: string
          due_date?: string
          id?: string
          title?: string
          total_points?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "assignments_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      auth_user_sync_queue: {
        Row: {
          created_at: string | null
          email: string | null
          processed: boolean | null
          processed_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          processed?: boolean | null
          processed_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          email?: string | null
          processed?: boolean | null
          processed_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      collaborations: {
        Row: {
          id: string
          joined_at: string | null
          project_id: string
          role: Database["public"]["Enums"]["collaboration_role"]
          user_id: string
        }
        Insert: {
          id?: string
          joined_at?: string | null
          project_id: string
          role: Database["public"]["Enums"]["collaboration_role"]
          user_id: string
        }
        Update: {
          id?: string
          joined_at?: string | null
          project_id?: string
          role?: Database["public"]["Enums"]["collaboration_role"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "collaborations_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "research_projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "collaborations_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      conceptual_framework: {
        Row: {
          applications: string | null
          created_at: string | null
          description: string
          id: number
          name: string
          principles: string | null
          relationships: string | null
          updated_at: string | null
          version: string | null
        }
        Insert: {
          applications?: string | null
          created_at?: string | null
          description: string
          id?: number
          name: string
          principles?: string | null
          relationships?: string | null
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          applications?: string | null
          created_at?: string | null
          description?: string
          id?: number
          name?: string
          principles?: string | null
          relationships?: string | null
          updated_at?: string | null
          version?: string | null
        }
        Relationships: []
      }
      conversation: {
        Row: {
          created_at: string | null
          id: number
          platform_id: number
          title: string | null
          user_id: number
        }
        Insert: {
          created_at?: string | null
          id?: number
          platform_id: number
          title?: string | null
          user_id: number
        }
        Update: {
          created_at?: string | null
          id?: number
          platform_id?: number
          title?: string | null
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "conversation_platform_id_fkey"
            columns: ["platform_id"]
            isOneToOne: false
            referencedRelation: "platform"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "conversation_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
        ]
      }
      courses: {
        Row: {
          created_at: string
          department: string
          description: string
          duration_weeks: number
          enrolled_count: number | null
          id: string
          instructor_id: string | null
          level: string
          rating: number | null
          thumbnail_url: string | null
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          department: string
          description: string
          duration_weeks: number
          enrolled_count?: number | null
          id?: string
          instructor_id?: string | null
          level: string
          rating?: number | null
          thumbnail_url?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          department?: string
          description?: string
          duration_weeks?: number
          enrolled_count?: number | null
          id?: string
          instructor_id?: string | null
          level?: string
          rating?: number | null
          thumbnail_url?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "courses_instructor_id_fkey"
            columns: ["instructor_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      datasets: {
        Row: {
          access_level:
            | Database["public"]["Enums"]["dataset_access_level"]
            | null
          created_at: string | null
          data_schema: Json | null
          description: string | null
          id: string
          name: string
          project_id: string
          storage_url: string | null
          uploaded_at: string | null
          uploaded_by: string
        }
        Insert: {
          access_level?:
            | Database["public"]["Enums"]["dataset_access_level"]
            | null
          created_at?: string | null
          data_schema?: Json | null
          description?: string | null
          id?: string
          name: string
          project_id: string
          storage_url?: string | null
          uploaded_at?: string | null
          uploaded_by: string
        }
        Update: {
          access_level?:
            | Database["public"]["Enums"]["dataset_access_level"]
            | null
          created_at?: string | null
          data_schema?: Json | null
          description?: string | null
          id?: string
          name?: string
          project_id?: string
          storage_url?: string | null
          uploaded_at?: string | null
          uploaded_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "datasets_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "research_projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "datasets_uploaded_by_fkey"
            columns: ["uploaded_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      enrollments: {
        Row: {
          completed_at: string | null
          course_id: string
          enrolled_at: string
          id: string
          progress: number | null
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          course_id: string
          enrolled_at?: string
          id?: string
          progress?: number | null
          user_id: string
        }
        Update: {
          completed_at?: string | null
          course_id?: string
          enrolled_at?: string
          id?: string
          progress?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "enrollments_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "enrollments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      error_log: {
        Row: {
          context: string | null
          corrective_action: string | null
          created_at: string | null
          description: string
          error_type: string
          id: number
          impact: string | null
          resolved_at: string | null
          root_cause: string | null
          source_ai: string | null
          status: string | null
        }
        Insert: {
          context?: string | null
          corrective_action?: string | null
          created_at?: string | null
          description: string
          error_type: string
          id?: number
          impact?: string | null
          resolved_at?: string | null
          root_cause?: string | null
          source_ai?: string | null
          status?: string | null
        }
        Update: {
          context?: string | null
          corrective_action?: string | null
          created_at?: string | null
          description?: string
          error_type?: string
          id?: number
          impact?: string | null
          resolved_at?: string | null
          root_cause?: string | null
          source_ai?: string | null
          status?: string | null
        }
        Relationships: []
      }
      events: {
        Row: {
          date: string | null
          description: string | null
          id: number
          link: string | null
          location: string | null
          name: string
        }
        Insert: {
          date?: string | null
          description?: string | null
          id?: number
          link?: string | null
          location?: string | null
          name: string
        }
        Update: {
          date?: string | null
          description?: string | null
          id?: number
          link?: string | null
          location?: string | null
          name?: string
        }
        Relationships: []
      }
      global_ai_agents: {
        Row: {
          configuration: Json | null
          created_at: string | null
          id: string
          model_id: string | null
          name: string | null
          owner_user_id: string
          updated_at: string | null
        }
        Insert: {
          configuration?: Json | null
          created_at?: string | null
          id: string
          model_id?: string | null
          name?: string | null
          owner_user_id: string
          updated_at?: string | null
        }
        Update: {
          configuration?: Json | null
          created_at?: string | null
          id?: string
          model_id?: string | null
          name?: string | null
          owner_user_id?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      global_chats: {
        Row: {
          created_at: string | null
          created_by: string | null
          id: string
          metadata: Json | null
          topic: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          id: string
          metadata?: Json | null
          topic?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          id?: string
          metadata?: Json | null
          topic?: string | null
        }
        Relationships: []
      }
      global_hubs: {
        Row: {
          address: string | null
          contact_email: string | null
          country: string | null
          created_at: string
          hub_name: string | null
          id: number
          key_contact_person: string | null
          latitude: number | null
          location: string | null
          longitude: number | null
          name: string | null
          partnership_priority: string | null
          phone: string | null
          raw_csv_row: string | null
          specialization_areas: string | null
          strategic_value: string | null
          website: string | null
        }
        Insert: {
          address?: string | null
          contact_email?: string | null
          country?: string | null
          created_at?: string
          hub_name?: string | null
          id?: number
          key_contact_person?: string | null
          latitude?: number | null
          location?: string | null
          longitude?: number | null
          name?: string | null
          partnership_priority?: string | null
          phone?: string | null
          raw_csv_row?: string | null
          specialization_areas?: string | null
          strategic_value?: string | null
          website?: string | null
        }
        Update: {
          address?: string | null
          contact_email?: string | null
          country?: string | null
          created_at?: string
          hub_name?: string | null
          id?: number
          key_contact_person?: string | null
          latitude?: number | null
          location?: string | null
          longitude?: number | null
          name?: string | null
          partnership_priority?: string | null
          phone?: string | null
          raw_csv_row?: string | null
          specialization_areas?: string | null
          strategic_value?: string | null
          website?: string | null
        }
        Relationships: []
      }
      global_messages: {
        Row: {
          author_id: string | null
          consultation_id: string | null
          conversation_id: string | null
          id: string
          message_text: string
          read_at: string | null
          receiver_id: string | null
          sender_id: string
          sent_at: string | null
        }
        Insert: {
          author_id?: string | null
          consultation_id?: string | null
          conversation_id?: string | null
          id: string
          message_text: string
          read_at?: string | null
          receiver_id?: string | null
          sender_id: string
          sent_at?: string | null
        }
        Update: {
          author_id?: string | null
          consultation_id?: string | null
          conversation_id?: string | null
          id?: string
          message_text?: string
          read_at?: string | null
          receiver_id?: string | null
          sender_id?: string
          sent_at?: string | null
        }
        Relationships: []
      }
      global_profiles: {
        Row: {
          address: string | null
          created_at: string | null
          date_of_birth: string | null
          first_name: string | null
          gender: string | null
          id: string
          last_name: string | null
          metadata: Json | null
          phone_number: string | null
          profile_picture_url: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          address?: string | null
          created_at?: string | null
          date_of_birth?: string | null
          first_name?: string | null
          gender?: string | null
          id: string
          last_name?: string | null
          metadata?: Json | null
          phone_number?: string | null
          profile_picture_url?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          address?: string | null
          created_at?: string | null
          date_of_birth?: string | null
          first_name?: string | null
          gender?: string | null
          id?: string
          last_name?: string | null
          metadata?: Json | null
          phone_number?: string | null
          profile_picture_url?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      global_projects: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          metadata: Json | null
          name: string
          owner_user_id: string | null
          status: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id: string
          metadata?: Json | null
          name: string
          owner_user_id?: string | null
          status?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          metadata?: Json | null
          name?: string
          owner_user_id?: string | null
          status?: string | null
        }
        Relationships: []
      }
      global_tasks: {
        Row: {
          assignee_user_id: string | null
          created_at: string | null
          description: string | null
          id: string
          metadata: Json | null
          status: string | null
          title: string | null
          updated_at: string | null
        }
        Insert: {
          assignee_user_id?: string | null
          created_at?: string | null
          description?: string | null
          id: string
          metadata?: Json | null
          status?: string | null
          title?: string | null
          updated_at?: string | null
        }
        Update: {
          assignee_user_id?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          metadata?: Json | null
          status?: string | null
          title?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      hcpark_collaborations: {
        Row: {
          id: string
          joined_at: string | null
          project_id: string | null
          role: Database["public"]["Enums"]["collaboration_role"]
          user_id: string | null
        }
        Insert: {
          id?: string
          joined_at?: string | null
          project_id?: string | null
          role: Database["public"]["Enums"]["collaboration_role"]
          user_id?: string | null
        }
        Update: {
          id?: string
          joined_at?: string | null
          project_id?: string | null
          role?: Database["public"]["Enums"]["collaboration_role"]
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_hcpark_collaborations_project"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "research_projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_hcpark_collaborations_user"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      hcpark_datasets: {
        Row: {
          access_level:
            | Database["public"]["Enums"]["dataset_access_level"]
            | null
          created_at: string | null
          data_schema: Json | null
          description: string | null
          id: string
          name: string
          project_id: string | null
          storage_url: string | null
          uploaded_at: string | null
          uploaded_by: string | null
        }
        Insert: {
          access_level?:
            | Database["public"]["Enums"]["dataset_access_level"]
            | null
          created_at?: string | null
          data_schema?: Json | null
          description?: string | null
          id?: string
          name: string
          project_id?: string | null
          storage_url?: string | null
          uploaded_at?: string | null
          uploaded_by?: string | null
        }
        Update: {
          access_level?:
            | Database["public"]["Enums"]["dataset_access_level"]
            | null
          created_at?: string | null
          data_schema?: Json | null
          description?: string | null
          id?: string
          name?: string
          project_id?: string | null
          storage_url?: string | null
          uploaded_at?: string | null
          uploaded_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_hcpark_datasets_project"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "research_projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_hcpark_datasets_uploaded_by"
            columns: ["uploaded_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      hcpark_knowledge_entry: {
        Row: {
          category: string | null
          confidence_score: number | null
          content: string | null
          created_at: string | null
          id: string
          meta_data: Json | null
          source: string | null
          tags: string[] | null
          title: string | null
          updated_at: string | null
        }
        Insert: {
          category?: string | null
          confidence_score?: number | null
          content?: string | null
          created_at?: string | null
          id?: string
          meta_data?: Json | null
          source?: string | null
          tags?: string[] | null
          title?: string | null
          updated_at?: string | null
        }
        Update: {
          category?: string | null
          confidence_score?: number | null
          content?: string | null
          created_at?: string | null
          id?: string
          meta_data?: Json | null
          source?: string | null
          tags?: string[] | null
          title?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      hcpark_platform: {
        Row: {
          config: Json | null
          created_at: string | null
          id: string
          name: string | null
          status: string | null
          type: string | null
        }
        Insert: {
          config?: Json | null
          created_at?: string | null
          id?: string
          name?: string | null
          status?: string | null
          type?: string | null
        }
        Update: {
          config?: Json | null
          created_at?: string | null
          id?: string
          name?: string | null
          status?: string | null
          type?: string | null
        }
        Relationships: []
      }
      hcpark_research_data: {
        Row: {
          data_metadata: Json | null
          data_type: string | null
          file_path: string | null
          id: string
          project_id: string | null
          uploaded_at: string | null
        }
        Insert: {
          data_metadata?: Json | null
          data_type?: string | null
          file_path?: string | null
          id?: string
          project_id?: string | null
          uploaded_at?: string | null
        }
        Update: {
          data_metadata?: Json | null
          data_type?: string | null
          file_path?: string | null
          id?: string
          project_id?: string | null
          uploaded_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_hcpark_research_data_project"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "research_projects"
            referencedColumns: ["id"]
          },
        ]
      }
      hcpark_research_outputs: {
        Row: {
          authors: string[] | null
          created_at: string | null
          id: string
          project_id: string | null
          publication_date: string | null
          title: string
          type: Database["public"]["Enums"]["research_output_type"]
          updated_at: string | null
          url: string | null
        }
        Insert: {
          authors?: string[] | null
          created_at?: string | null
          id?: string
          project_id?: string | null
          publication_date?: string | null
          title: string
          type: Database["public"]["Enums"]["research_output_type"]
          updated_at?: string | null
          url?: string | null
        }
        Update: {
          authors?: string[] | null
          created_at?: string | null
          id?: string
          project_id?: string | null
          publication_date?: string | null
          title?: string
          type?: Database["public"]["Enums"]["research_output_type"]
          updated_at?: string | null
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_hcpark_research_outputs_project"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "research_projects"
            referencedColumns: ["id"]
          },
        ]
      }
      healthcare_provider: {
        Row: {
          id: number
          location: string | null
          name: string
          specialty: string | null
          status: string | null
        }
        Insert: {
          id?: number
          location?: string | null
          name: string
          specialty?: string | null
          status?: string | null
        }
        Update: {
          id?: number
          location?: string | null
          name?: string
          specialty?: string | null
          status?: string | null
        }
        Relationships: []
      }
      healthcare_providers: {
        Row: {
          clinic_address: string | null
          contact_number: string | null
          created_at: string | null
          id: string
          license_number: string
          specialization: string | null
          updated_at: string | null
        }
        Insert: {
          clinic_address?: string | null
          contact_number?: string | null
          created_at?: string | null
          id: string
          license_number: string
          specialization?: string | null
          updated_at?: string | null
        }
        Update: {
          clinic_address?: string | null
          contact_number?: string | null
          created_at?: string | null
          id?: string
          license_number?: string
          specialization?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "healthcare_providers_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      knowledge_entry: {
        Row: {
          category: string
          confidence_score: number | null
          content: string
          created_at: string | null
          id: number
          meta_data: string | null
          source: string | null
          tags: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          category: string
          confidence_score?: number | null
          content: string
          created_at?: string | null
          id?: number
          meta_data?: string | null
          source?: string | null
          tags?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          category?: string
          confidence_score?: number | null
          content?: string
          created_at?: string | null
          id?: number
          meta_data?: string | null
          source?: string | null
          tags?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      lab_sessions: {
        Row: {
          completed_at: string | null
          id: string
          lab_id: string
          results: Json | null
          started_at: string
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          id?: string
          lab_id: string
          results?: Json | null
          started_at?: string
          user_id: string
        }
        Update: {
          completed_at?: string | null
          id?: string
          lab_id?: string
          results?: Json | null
          started_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "lab_sessions_lab_id_fkey"
            columns: ["lab_id"]
            isOneToOne: false
            referencedRelation: "virtual_labs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lab_sessions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      lesson_progress: {
        Row: {
          completed_at: string | null
          id: string
          is_completed: boolean | null
          lesson_id: string
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          id?: string
          is_completed?: boolean | null
          lesson_id: string
          user_id: string
        }
        Update: {
          completed_at?: string | null
          id?: string
          is_completed?: boolean | null
          lesson_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "lesson_progress_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lesson_progress_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      lessons: {
        Row: {
          content: string | null
          created_at: string
          description: string | null
          duration_minutes: number | null
          id: string
          module_id: string
          order_index: number
          title: string
          type: string
          video_url: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          description?: string | null
          duration_minutes?: number | null
          id?: string
          module_id: string
          order_index: number
          title: string
          type: string
          video_url?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          description?: string | null
          duration_minutes?: number | null
          id?: string
          module_id?: string
          order_index?: number
          title?: string
          type?: string
          video_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lessons_module_id_fkey"
            columns: ["module_id"]
            isOneToOne: false
            referencedRelation: "modules"
            referencedColumns: ["id"]
          },
        ]
      }
      lxg_registry: {
        Row: {
          contribution: string | null
          emotional_signature: string | null
          id: number
          last_interaction: string | null
          name: string
          role: string
        }
        Insert: {
          contribution?: string | null
          emotional_signature?: string | null
          id?: number
          last_interaction?: string | null
          name: string
          role: string
        }
        Update: {
          contribution?: string | null
          emotional_signature?: string | null
          id?: number
          last_interaction?: string | null
          name?: string
          role?: string
        }
        Relationships: []
      }
      medical_records: {
        Row: {
          attachments: string[] | null
          created_at: string | null
          diagnosis: string | null
          id: string
          patient_id: string
          prescription: string | null
          provider_id: string
          record_date: string | null
          treatment: string | null
          updated_at: string | null
        }
        Insert: {
          attachments?: string[] | null
          created_at?: string | null
          diagnosis?: string | null
          id?: string
          patient_id: string
          prescription?: string | null
          provider_id: string
          record_date?: string | null
          treatment?: string | null
          updated_at?: string | null
        }
        Update: {
          attachments?: string[] | null
          created_at?: string | null
          diagnosis?: string | null
          id?: string
          patient_id?: string
          prescription?: string | null
          provider_id?: string
          record_date?: string | null
          treatment?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "medical_records_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "medical_records_provider_id_fkey"
            columns: ["provider_id"]
            isOneToOne: false
            referencedRelation: "healthcare_providers"
            referencedColumns: ["id"]
          },
        ]
      }
      message: {
        Row: {
          content: string
          conversation_id: number
          id: number
          platform: string | null
          sender: string
          timestamp: string | null
        }
        Insert: {
          content: string
          conversation_id: number
          id?: number
          platform?: string | null
          sender: string
          timestamp?: string | null
        }
        Update: {
          content?: string
          conversation_id?: number
          id?: number
          platform?: string | null
          sender?: string
          timestamp?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "message_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "conversation"
            referencedColumns: ["id"]
          },
        ]
      }
      messages: {
        Row: {
          author_id: string | null
          consultation_id: string | null
          conversation_id: string | null
          id: string
          message_text: string
          read_at: string | null
          receiver_id: string | null
          sender_id: string
          sent_at: string | null
        }
        Insert: {
          author_id?: string | null
          consultation_id?: string | null
          conversation_id?: string | null
          id?: string
          message_text: string
          read_at?: string | null
          receiver_id?: string | null
          sender_id: string
          sent_at?: string | null
        }
        Update: {
          author_id?: string | null
          consultation_id?: string | null
          conversation_id?: string | null
          id?: string
          message_text?: string
          read_at?: string | null
          receiver_id?: string | null
          sender_id?: string
          sent_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "messages_consultation_id_fkey"
            columns: ["consultation_id"]
            isOneToOne: false
            referencedRelation: "teleconsultations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_receiver_id_fkey"
            columns: ["receiver_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      modules: {
        Row: {
          course_id: string
          created_at: string
          description: string | null
          id: string
          order_index: number
          title: string
        }
        Insert: {
          course_id: string
          created_at?: string
          description?: string | null
          id?: string
          order_index: number
          title: string
        }
        Update: {
          course_id?: string
          created_at?: string
          description?: string | null
          id?: string
          order_index?: number
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "modules_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      patient: {
        Row: {
          emergency_contact: string | null
          id: number
          medical_id: string | null
          user_id: number
        }
        Insert: {
          emergency_contact?: string | null
          id?: number
          medical_id?: string | null
          user_id: number
        }
        Update: {
          emergency_contact?: string | null
          id?: number
          medical_id?: string | null
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "patient_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
        ]
      }
      patients: {
        Row: {
          allergies: string[] | null
          created_at: string | null
          current_medications: string[] | null
          ehr_id: string | null
          id: string
          medical_history: Json | null
          primary_care_provider_id: string | null
          updated_at: string | null
        }
        Insert: {
          allergies?: string[] | null
          created_at?: string | null
          current_medications?: string[] | null
          ehr_id?: string | null
          id: string
          medical_history?: Json | null
          primary_care_provider_id?: string | null
          updated_at?: string | null
        }
        Update: {
          allergies?: string[] | null
          created_at?: string | null
          current_medications?: string[] | null
          ehr_id?: string | null
          id?: string
          medical_history?: Json | null
          primary_care_provider_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_primary_care_provider"
            columns: ["primary_care_provider_id"]
            isOneToOne: false
            referencedRelation: "healthcare_providers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "patients_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      platform: {
        Row: {
          config: string | null
          created_at: string | null
          id: number
          name: string
          status: string | null
          type: string
        }
        Insert: {
          config?: string | null
          created_at?: string | null
          id?: number
          name: string
          status?: string | null
          type: string
        }
        Update: {
          config?: string | null
          created_at?: string | null
          id?: number
          name?: string
          status?: string | null
          type?: string
        }
        Relationships: []
      }
      platform_responses: {
        Row: {
          content: string | null
          created_at: string | null
          error: string | null
          id: string
          message_id: string | null
          platform_id: string | null
          response_time: number | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string | null
          error?: string | null
          id?: string
          message_id?: string | null
          platform_id?: string | null
          response_time?: number | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string | null
          error?: string | null
          id?: string
          message_id?: string | null
          platform_id?: string | null
          response_time?: number | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_platform_responses_message"
            columns: ["message_id"]
            isOneToOne: false
            referencedRelation: "messages"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          address: string | null
          created_at: string | null
          date_of_birth: string | null
          first_name: string | null
          gender: Database["public"]["Enums"]["gender_type"] | null
          id: string
          last_name: string | null
          metadata: Json | null
          phone_number: string | null
          profile_picture_url: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          address?: string | null
          created_at?: string | null
          date_of_birth?: string | null
          first_name?: string | null
          gender?: Database["public"]["Enums"]["gender_type"] | null
          id?: string
          last_name?: string | null
          metadata?: Json | null
          phone_number?: string | null
          profile_picture_url?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          address?: string | null
          created_at?: string | null
          date_of_birth?: string | null
          first_name?: string | null
          gender?: Database["public"]["Enums"]["gender_type"] | null
          id?: string
          last_name?: string | null
          metadata?: Json | null
          phone_number?: string | null
          profile_picture_url?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          metadata: Json | null
          name: string
          owner_user_id: string | null
          status: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          metadata?: Json | null
          name: string
          owner_user_id?: string | null
          status?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          metadata?: Json | null
          name?: string
          owner_user_id?: string | null
          status?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "projects_owner_user_id_fkey"
            columns: ["owner_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "projects_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      publications: {
        Row: {
          author: string | null
          id: number
          journal: string | null
          link: string | null
          title: string
          year: number | null
        }
        Insert: {
          author?: string | null
          id?: number
          journal?: string | null
          link?: string | null
          title: string
          year?: number | null
        }
        Update: {
          author?: string | null
          id?: number
          journal?: string | null
          link?: string | null
          title?: string
          year?: number | null
        }
        Relationships: []
      }
      research_data: {
        Row: {
          data_metadata: string | null
          data_type: string | null
          file_path: string | null
          id: number
          project_id: number
          uploaded_at: string | null
        }
        Insert: {
          data_metadata?: string | null
          data_type?: string | null
          file_path?: string | null
          id?: number
          project_id: number
          uploaded_at?: string | null
        }
        Update: {
          data_metadata?: string | null
          data_type?: string | null
          file_path?: string | null
          id?: number
          project_id?: number
          uploaded_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "research_data_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "research_project"
            referencedColumns: ["id"]
          },
        ]
      }
      research_outputs: {
        Row: {
          authors: string[] | null
          created_at: string | null
          id: string
          project_id: string
          publication_date: string | null
          title: string
          type: Database["public"]["Enums"]["research_output_type"]
          updated_at: string | null
          url: string | null
        }
        Insert: {
          authors?: string[] | null
          created_at?: string | null
          id?: string
          project_id: string
          publication_date?: string | null
          title: string
          type: Database["public"]["Enums"]["research_output_type"]
          updated_at?: string | null
          url?: string | null
        }
        Update: {
          authors?: string[] | null
          created_at?: string | null
          id?: string
          project_id?: string
          publication_date?: string | null
          title?: string
          type?: Database["public"]["Enums"]["research_output_type"]
          updated_at?: string | null
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "research_outputs_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "research_projects"
            referencedColumns: ["id"]
          },
        ]
      }
      research_project: {
        Row: {
          description: string | null
          id: number
          lab_assignment: string | null
          lead_researcher: string | null
          status: string | null
          title: string
        }
        Insert: {
          description?: string | null
          id?: number
          lab_assignment?: string | null
          lead_researcher?: string | null
          status?: string | null
          title: string
        }
        Update: {
          description?: string | null
          id?: number
          lab_assignment?: string | null
          lead_researcher?: string | null
          status?: string | null
          title?: string
        }
        Relationships: []
      }
      research_projects: {
        Row: {
          created_at: string | null
          description: string | null
          end_date: string | null
          id: string
          lead_researcher_id: string
          name: string
          start_date: string | null
          status: Database["public"]["Enums"]["research_project_status"] | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          end_date?: string | null
          id?: string
          lead_researcher_id: string
          name: string
          start_date?: string | null
          status?: Database["public"]["Enums"]["research_project_status"] | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          end_date?: string | null
          id?: string
          lead_researcher_id?: string
          name?: string
          start_date?: string | null
          status?: Database["public"]["Enums"]["research_project_status"] | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "research_projects_lead_researcher_id_fkey"
            columns: ["lead_researcher_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      staging_global_hubs: {
        Row: {
          address: string | null
          contact_email: string | null
          hub_name: string | null
          key_contact_person: string | null
          location: string | null
          partnership_priority: string | null
          phone: string | null
          specialization_areas: string | null
          strategic_value: string | null
          website: string | null
        }
        Insert: {
          address?: string | null
          contact_email?: string | null
          hub_name?: string | null
          key_contact_person?: string | null
          location?: string | null
          partnership_priority?: string | null
          phone?: string | null
          specialization_areas?: string | null
          strategic_value?: string | null
          website?: string | null
        }
        Update: {
          address?: string | null
          contact_email?: string | null
          hub_name?: string | null
          key_contact_person?: string | null
          location?: string | null
          partnership_priority?: string | null
          phone?: string | null
          specialization_areas?: string | null
          strategic_value?: string | null
          website?: string | null
        }
        Relationships: []
      }
      staging_global_hubs_csv: {
        Row: {
          address: string | null
          Address: string | null
          "Contact Email": string | null
          contact_email: string | null
          csv_concat_headers: string | null
          "Hub Name": string | null
          hub_name: string | null
          import_note: string | null
          "Key Contact Person": string | null
          key_contact_person: string | null
          location: string | null
          Location: string | null
          "Partnership Priority": string | null
          partnership_priority: string | null
          phone: string | null
          Phone: string | null
          raw_payload: Json | null
          "Specialization Areas": string | null
          specialization_areas: string | null
          "Strategic Value": string | null
          strategic_value: string | null
          website: string | null
          Website: string | null
        }
        Insert: {
          address?: string | null
          Address?: string | null
          "Contact Email"?: string | null
          contact_email?: string | null
          csv_concat_headers?: string | null
          "Hub Name"?: string | null
          hub_name?: string | null
          import_note?: string | null
          "Key Contact Person"?: string | null
          key_contact_person?: string | null
          location?: string | null
          Location?: string | null
          "Partnership Priority"?: string | null
          partnership_priority?: string | null
          phone?: string | null
          Phone?: string | null
          raw_payload?: Json | null
          "Specialization Areas"?: string | null
          specialization_areas?: string | null
          "Strategic Value"?: string | null
          strategic_value?: string | null
          website?: string | null
          Website?: string | null
        }
        Update: {
          address?: string | null
          Address?: string | null
          "Contact Email"?: string | null
          contact_email?: string | null
          csv_concat_headers?: string | null
          "Hub Name"?: string | null
          hub_name?: string | null
          import_note?: string | null
          "Key Contact Person"?: string | null
          key_contact_person?: string | null
          location?: string | null
          Location?: string | null
          "Partnership Priority"?: string | null
          partnership_priority?: string | null
          phone?: string | null
          Phone?: string | null
          raw_payload?: Json | null
          "Specialization Areas"?: string | null
          specialization_areas?: string | null
          "Strategic Value"?: string | null
          strategic_value?: string | null
          website?: string | null
          Website?: string | null
        }
        Relationships: []
      }
      submissions: {
        Row: {
          assignment_id: string
          content: string | null
          feedback: string | null
          file_url: string | null
          graded_at: string | null
          id: string
          score: number | null
          status: string
          submitted_at: string
          user_id: string
        }
        Insert: {
          assignment_id: string
          content?: string | null
          feedback?: string | null
          file_url?: string | null
          graded_at?: string | null
          id?: string
          score?: number | null
          status?: string
          submitted_at?: string
          user_id: string
        }
        Update: {
          assignment_id?: string
          content?: string | null
          feedback?: string | null
          file_url?: string | null
          graded_at?: string | null
          id?: string
          score?: number | null
          status?: string
          submitted_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "submissions_assignment_id_fkey"
            columns: ["assignment_id"]
            isOneToOne: false
            referencedRelation: "assignments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "submissions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      teleconsultations: {
        Row: {
          appointment_id: string
          consultation_url: string | null
          created_at: string | null
          end_time: string | null
          id: string
          recording_url: string | null
          start_time: string | null
          status: Database["public"]["Enums"]["teleconsultation_status"] | null
          transcript: string | null
          updated_at: string | null
        }
        Insert: {
          appointment_id: string
          consultation_url?: string | null
          created_at?: string | null
          end_time?: string | null
          id?: string
          recording_url?: string | null
          start_time?: string | null
          status?: Database["public"]["Enums"]["teleconsultation_status"] | null
          transcript?: string | null
          updated_at?: string | null
        }
        Update: {
          appointment_id?: string
          consultation_url?: string | null
          created_at?: string | null
          end_time?: string | null
          id?: string
          recording_url?: string | null
          start_time?: string | null
          status?: Database["public"]["Enums"]["teleconsultation_status"] | null
          transcript?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "teleconsultations_appointment_id_fkey"
            columns: ["appointment_id"]
            isOneToOne: true
            referencedRelation: "appointments"
            referencedColumns: ["id"]
          },
        ]
      }
      telemed_session: {
        Row: {
          duration: number | null
          id: number
          patient_id: number
          provider_id: number
          scheduled_time: string | null
          session_type: string | null
          status: string | null
        }
        Insert: {
          duration?: number | null
          id?: number
          patient_id: number
          provider_id: number
          scheduled_time?: string | null
          session_type?: string | null
          status?: string | null
        }
        Update: {
          duration?: number | null
          id?: number
          patient_id?: number
          provider_id?: number
          scheduled_time?: string | null
          session_type?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "telemed_session_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patient"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "telemed_session_provider_id_fkey"
            columns: ["provider_id"]
            isOneToOne: false
            referencedRelation: "healthcare_provider"
            referencedColumns: ["id"]
          },
        ]
      }
      user: {
        Row: {
          created_at: string | null
          email: string
          id: number
          role: string | null
          username: string
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: number
          role?: string | null
          username: string
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: number
          role?: string | null
          username?: string
        }
        Relationships: []
      }
      user_projects: {
        Row: {
          category: string | null
          created_at: string | null
          description: string | null
          id: string
          metadata: Json | null
          status: string | null
          title: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          metadata?: Json | null
          status?: string | null
          title: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          metadata?: Json | null
          status?: string | null
          title?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_projects_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role?: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: string
          user_id?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string | null
          email: string
          id: string
          name: string | null
          password_hash: string
          role: Database["public"]["Enums"]["user_role"]
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          name?: string | null
          password_hash: string
          role: Database["public"]["Enums"]["user_role"]
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          name?: string | null
          password_hash?: string
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string | null
        }
        Relationships: []
      }
      virtual_labs: {
        Row: {
          config: Json | null
          course_id: string
          created_at: string
          description: string
          duration_minutes: number | null
          id: string
          objectives: string[] | null
          title: string
        }
        Insert: {
          config?: Json | null
          course_id: string
          created_at?: string
          description: string
          duration_minutes?: number | null
          id?: string
          objectives?: string[] | null
          title: string
        }
        Update: {
          config?: Json | null
          course_id?: string
          created_at?: string
          description?: string
          duration_minutes?: number | null
          id?: string
          objectives?: string[] | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "virtual_labs_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      calculate_course_progress: {
        Args: { p_course_id: string; p_user_id: string }
        Returns: number
      }
      is_project_member: { Args: { p_project_id: string }; Returns: boolean }
    }
    Enums: {
      ai_model_status: "active" | "inactive" | "maintenance"
      appointment_status: "scheduled" | "completed" | "cancelled"
      appointment_type: "telemedicine" | "in_person" | "follow_up"
      collaboration_role:
        | "principal_investigator"
        | "co_investigator"
        | "data_analyst"
        | "contributor"
      dataset_access_level: "public" | "restricted" | "private"
      gender_type: "male" | "female" | "other"
      research_output_type: "publication" | "report" | "presentation" | "code"
      research_project_status:
        | "planning"
        | "in_progress"
        | "completed"
        | "archived"
      teleconsultation_status:
        | "pending"
        | "in_progress"
        | "completed"
        | "cancelled"
      user_role:
        | "admin"
        | "healthcare_provider"
        | "patient"
        | "researcher"
        | "ai_admin"
        | "creator_admin"
      user_role_hc: "student" | "instructor" | "admin"
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
      ai_model_status: ["active", "inactive", "maintenance"],
      appointment_status: ["scheduled", "completed", "cancelled"],
      appointment_type: ["telemedicine", "in_person", "follow_up"],
      collaboration_role: [
        "principal_investigator",
        "co_investigator",
        "data_analyst",
        "contributor",
      ],
      dataset_access_level: ["public", "restricted", "private"],
      gender_type: ["male", "female", "other"],
      research_output_type: ["publication", "report", "presentation", "code"],
      research_project_status: [
        "planning",
        "in_progress",
        "completed",
        "archived",
      ],
      teleconsultation_status: [
        "pending",
        "in_progress",
        "completed",
        "cancelled",
      ],
      user_role: [
        "admin",
        "healthcare_provider",
        "patient",
        "researcher",
        "ai_admin",
        "creator_admin",
      ],
      user_role_hc: ["student", "instructor", "admin"],
    },
  },
} as const

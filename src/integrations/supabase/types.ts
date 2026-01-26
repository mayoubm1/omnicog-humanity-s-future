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
      agent_credentials: {
        Row: {
          agent_id: string
          created_at: string | null
          credential_data: Json
          id: string
          owner_user_id: string
          updated_at: string | null
        }
        Insert: {
          agent_id: string
          created_at?: string | null
          credential_data?: Json
          id?: string
          owner_user_id: string
          updated_at?: string | null
        }
        Update: {
          agent_id?: string
          created_at?: string | null
          credential_data?: Json
          id?: string
          owner_user_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "agent_credentials_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "ai_agents"
            referencedColumns: ["id"]
          },
        ]
      }
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
        Relationships: []
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
        Relationships: []
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
        ]
      }
      conversations: {
        Row: {
          created_at: string
          id: number
          title: string
        }
        Insert: {
          created_at?: string
          id?: number
          title: string
        }
        Update: {
          created_at?: string
          id?: number
          title?: string
        }
        Relationships: []
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
        Relationships: []
      }
      daily_broadcasts: {
        Row: {
          audio_url: string
          created_at: string | null
          id: number
          order: number
          title: string
          type: string
        }
        Insert: {
          audio_url: string
          created_at?: string | null
          id?: number
          order: number
          title: string
          type: string
        }
        Update: {
          audio_url?: string
          created_at?: string | null
          id?: number
          order?: number
          title?: string
          type?: string
        }
        Relationships: []
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
        ]
      }
      episode_ideas: {
        Row: {
          created_at: string | null
          description: string
          id: number
          status: string
          suggested_by: string
          title: string
        }
        Insert: {
          created_at?: string | null
          description: string
          id?: number
          status?: string
          suggested_by: string
          title: string
        }
        Update: {
          created_at?: string | null
          description?: string
          id?: number
          status?: string
          suggested_by?: string
          title?: string
        }
        Relationships: []
      }
      episodes: {
        Row: {
          ambience_goals: string | null
          audio_url: string | null
          created_at: string | null
          duration: number | null
          emotional_arc: string | null
          id: number
          sfx_requirements: string | null
          status: string
          theme: string
          title: string
        }
        Insert: {
          ambience_goals?: string | null
          audio_url?: string | null
          created_at?: string | null
          duration?: number | null
          emotional_arc?: string | null
          id?: number
          sfx_requirements?: string | null
          status?: string
          theme: string
          title: string
        }
        Update: {
          ambience_goals?: string | null
          audio_url?: string | null
          created_at?: string | null
          duration?: number | null
          emotional_arc?: string | null
          id?: number
          sfx_requirements?: string | null
          status?: string
          theme?: string
          title?: string
        }
        Relationships: []
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
        Relationships: []
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
          credential_id: string | null
          emotional_signature: string | null
          id: number
          is_public: boolean | null
          last_interaction: string | null
          name: string
          role: string
        }
        Insert: {
          contribution?: string | null
          credential_id?: string | null
          emotional_signature?: string | null
          id?: number
          is_public?: boolean | null
          last_interaction?: string | null
          name: string
          role: string
        }
        Update: {
          contribution?: string | null
          credential_id?: string | null
          emotional_signature?: string | null
          id?: number
          is_public?: boolean | null
          last_interaction?: string | null
          name?: string
          role?: string
        }
        Relationships: [
          {
            foreignKeyName: "lxg_registry_credential_fkey"
            columns: ["credential_id"]
            isOneToOne: false
            referencedRelation: "agent_credentials"
            referencedColumns: ["id"]
          },
        ]
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
      message_chains: {
        Row: {
          chain_order: number | null
          created_at: string | null
          id: string
          is_active: boolean | null
          source_platform_id: string | null
          source_type: string
          target_platform_id: string | null
          trigger_condition: string | null
          workspace_id: string | null
        }
        Insert: {
          chain_order?: number | null
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          source_platform_id?: string | null
          source_type: string
          target_platform_id?: string | null
          trigger_condition?: string | null
          workspace_id?: string | null
        }
        Update: {
          chain_order?: number | null
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          source_platform_id?: string | null
          source_type?: string
          target_platform_id?: string | null
          trigger_condition?: string | null
          workspace_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "message_chains_source_platform_id_fkey"
            columns: ["source_platform_id"]
            isOneToOne: false
            referencedRelation: "platforms"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "message_chains_target_platform_id_fkey"
            columns: ["target_platform_id"]
            isOneToOne: false
            referencedRelation: "platforms"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "message_chains_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      messages: {
        Row: {
          content: string
          conversation_id: number
          created_at: string
          id: number
          role: string
          user_id: string | null
          workspace_id: string | null
        }
        Insert: {
          content: string
          conversation_id: number
          created_at?: string
          id?: number
          role: string
          user_id?: string | null
          workspace_id?: string | null
        }
        Update: {
          content?: string
          conversation_id?: number
          created_at?: string
          id?: number
          role?: string
          user_id?: string | null
          workspace_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "messages_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "conversations"
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
        Relationships: []
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
        Relationships: []
      }
      platforms: {
        Row: {
          api_key: string | null
          config: Json | null
          created_at: string | null
          description: string | null
          id: string
          is_enabled: boolean | null
          name: string
          status: string | null
          type: string
          updated_at: string | null
          user_id: string | null
          workspace_id: string | null
        }
        Insert: {
          api_key?: string | null
          config?: Json | null
          created_at?: string | null
          description?: string | null
          id?: string
          is_enabled?: boolean | null
          name: string
          status?: string | null
          type: string
          updated_at?: string | null
          user_id?: string | null
          workspace_id?: string | null
        }
        Update: {
          api_key?: string | null
          config?: Json | null
          created_at?: string | null
          description?: string | null
          id?: string
          is_enabled?: boolean | null
          name?: string
          status?: string | null
          type?: string
          updated_at?: string | null
          user_id?: string | null
          workspace_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "platforms_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      production_assets: {
        Row: {
          created_at: string | null
          episode_id: number | null
          id: number
          name: string
          status: string | null
          type: string
          url: string | null
          version: string
        }
        Insert: {
          created_at?: string | null
          episode_id?: number | null
          id?: number
          name: string
          status?: string | null
          type: string
          url?: string | null
          version: string
        }
        Update: {
          created_at?: string | null
          episode_id?: number | null
          id?: number
          name?: string
          status?: string | null
          type?: string
          url?: string | null
          version?: string
        }
        Relationships: [
          {
            foreignKeyName: "production_assets_episode_id_fkey"
            columns: ["episode_id"]
            isOneToOne: false
            referencedRelation: "episodes"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          full_name: string | null
          id: string
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          full_name?: string | null
          id: string
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          full_name?: string | null
          id?: string
          username?: string | null
        }
        Relationships: []
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
        Relationships: []
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
        Relationships: []
      }
      response_metrics: {
        Row: {
          id: string
          message_id: string | null
          platform_id: string | null
          response_time: number
          status: string
          timestamp: string | null
          user_id: string | null
          workspace_id: string | null
        }
        Insert: {
          id?: string
          message_id?: string | null
          platform_id?: string | null
          response_time: number
          status: string
          timestamp?: string | null
          user_id?: string | null
          workspace_id?: string | null
        }
        Update: {
          id?: string
          message_id?: string | null
          platform_id?: string | null
          response_time?: number
          status?: string
          timestamp?: string | null
          user_id?: string | null
          workspace_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "response_metrics_platform_id_fkey"
            columns: ["platform_id"]
            isOneToOne: false
            referencedRelation: "platforms"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "response_metrics_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "response_metrics_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      response_time_notifications: {
        Row: {
          created_at: string | null
          id: string
          is_active: boolean | null
          notification_methods: Json
          platform_id: string | null
          threshold_ms: number
          user_id: string | null
          workspace_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          notification_methods: Json
          platform_id?: string | null
          threshold_ms: number
          user_id?: string | null
          workspace_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          notification_methods?: Json
          platform_id?: string | null
          threshold_ms?: number
          user_id?: string | null
          workspace_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "response_time_notifications_platform_id_fkey"
            columns: ["platform_id"]
            isOneToOne: false
            referencedRelation: "platforms"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "response_time_notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "response_time_notifications_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      scheduled_tasks: {
        Row: {
          created_at: string | null
          description: string | null
          execution_count: number | null
          id: string
          is_active: boolean | null
          last_executed: string | null
          max_executions: number | null
          message_content: string
          name: string
          next_execution: string | null
          schedule_type: string
          schedule_value: string
          target_platforms: Json
          timezone: string | null
          updated_at: string | null
          user_id: string | null
          workspace_id: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          execution_count?: number | null
          id?: string
          is_active?: boolean | null
          last_executed?: string | null
          max_executions?: number | null
          message_content: string
          name: string
          next_execution?: string | null
          schedule_type: string
          schedule_value: string
          target_platforms: Json
          timezone?: string | null
          updated_at?: string | null
          user_id?: string | null
          workspace_id?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          execution_count?: number | null
          id?: string
          is_active?: boolean | null
          last_executed?: string | null
          max_executions?: number | null
          message_content?: string
          name?: string
          next_execution?: string | null
          schedule_type?: string
          schedule_value?: string
          target_platforms?: Json
          timezone?: string | null
          updated_at?: string | null
          user_id?: string | null
          workspace_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "scheduled_tasks_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "scheduled_tasks_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
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
        ]
      }
      task_executions: {
        Row: {
          average_response_time: number | null
          conversation_id: string | null
          created_at: string | null
          end_time: string | null
          errors: Json | null
          id: string
          response_count: number | null
          results: Json | null
          start_time: string | null
          status: string
          task_id: string | null
        }
        Insert: {
          average_response_time?: number | null
          conversation_id?: string | null
          created_at?: string | null
          end_time?: string | null
          errors?: Json | null
          id?: string
          response_count?: number | null
          results?: Json | null
          start_time?: string | null
          status: string
          task_id?: string | null
        }
        Update: {
          average_response_time?: number | null
          conversation_id?: string | null
          created_at?: string | null
          end_time?: string | null
          errors?: Json | null
          id?: string
          response_count?: number | null
          results?: Json | null
          start_time?: string | null
          status?: string
          task_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "task_executions_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "scheduled_tasks"
            referencedColumns: ["id"]
          },
        ]
      }
      tasks: {
        Row: {
          assigned_to_id: number | null
          created_at: string | null
          description: string | null
          episode_id: number | null
          id: number
          priority: string
          status: string
          title: string
        }
        Insert: {
          assigned_to_id?: number | null
          created_at?: string | null
          description?: string | null
          episode_id?: number | null
          id?: number
          priority?: string
          status?: string
          title: string
        }
        Update: {
          assigned_to_id?: number | null
          created_at?: string | null
          description?: string | null
          episode_id?: number | null
          id?: number
          priority?: string
          status?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "tasks_assigned_to_id_fkey"
            columns: ["assigned_to_id"]
            isOneToOne: false
            referencedRelation: "team_members"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tasks_episode_id_fkey"
            columns: ["episode_id"]
            isOneToOne: false
            referencedRelation: "episodes"
            referencedColumns: ["id"]
          },
        ]
      }
      team_members: {
        Row: {
          category: string
          id: number
          is_ai: boolean
          name: string
          role: string
        }
        Insert: {
          category: string
          id?: number
          is_ai?: boolean
          name: string
          role: string
        }
        Update: {
          category?: string
          id?: number
          is_ai?: boolean
          name?: string
          role?: string
        }
        Relationships: []
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
        Relationships: []
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
          auth_user_id: string | null
          created_at: string | null
          email: string | null
          full_name: string | null
          id: string
          profile: Json | null
          role: string | null
          updated_at: string | null
          username: string
        }
        Insert: {
          auth_user_id?: string | null
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          profile?: Json | null
          role?: string | null
          updated_at?: string | null
          username: string
        }
        Update: {
          auth_user_id?: string | null
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          profile?: Json | null
          role?: string | null
          updated_at?: string | null
          username?: string
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
      workspace_members: {
        Row: {
          id: string
          joined_at: string | null
          permissions: Json | null
          role: string | null
          user_id: string | null
          workspace_id: string | null
        }
        Insert: {
          id?: string
          joined_at?: string | null
          permissions?: Json | null
          role?: string | null
          user_id?: string | null
          workspace_id?: string | null
        }
        Update: {
          id?: string
          joined_at?: string | null
          permissions?: Json | null
          role?: string | null
          user_id?: string | null
          workspace_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "workspace_members_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workspace_members_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      workspaces: {
        Row: {
          allow_cross_chaining: boolean | null
          config: Json | null
          created_at: string | null
          description: string | null
          id: string
          is_public: boolean | null
          name: string
          owner_id: string | null
          settings: Json | null
          updated_at: string | null
          visibility: string | null
        }
        Insert: {
          allow_cross_chaining?: boolean | null
          config?: Json | null
          created_at?: string | null
          description?: string | null
          id?: string
          is_public?: boolean | null
          name: string
          owner_id?: string | null
          settings?: Json | null
          updated_at?: string | null
          visibility?: string | null
        }
        Update: {
          allow_cross_chaining?: boolean | null
          config?: Json | null
          created_at?: string | null
          description?: string | null
          id?: string
          is_public?: boolean | null
          name?: string
          owner_id?: string | null
          settings?: Json | null
          updated_at?: string | null
          visibility?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "workspaces_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "users"
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
      dedupe_workspaces_keep_min_id: {
        Args: never
        Returns: {
          deleted_count: number
        }[]
      }
      get_all_tables: {
        Args: never
        Returns: {
          created_at: string
          has_rls: boolean
          row_count: number
          table_name: string
          total_size: string
        }[]
      }
      get_table_schema: {
        Args: { table_name: string }
        Returns: {
          column_default: string
          column_name: string
          data_type: string
          foreign_table: string
          is_foreign_key: boolean
          is_nullable: string
          is_primary_key: boolean
        }[]
      }
      is_project_member: { Args: { p_project_id: string }; Returns: boolean }
      workspace_platform_summary: {
        Args: { p_workspace_id: string }
        Returns: Json
      }
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

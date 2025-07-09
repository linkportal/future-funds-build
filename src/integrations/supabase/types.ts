export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      configuracoes_sistema: {
        Row: {
          categoria: string | null
          chave: string
          created_at: string | null
          descricao: string | null
          id: string
          tipo: string | null
          updated_at: string | null
          valor: string | null
        }
        Insert: {
          categoria?: string | null
          chave: string
          created_at?: string | null
          descricao?: string | null
          id?: string
          tipo?: string | null
          updated_at?: string | null
          valor?: string | null
        }
        Update: {
          categoria?: string | null
          chave?: string
          created_at?: string | null
          descricao?: string | null
          id?: string
          tipo?: string | null
          updated_at?: string | null
          valor?: string | null
        }
        Relationships: []
      }
      contas_bancarias: {
        Row: {
          agencia: string | null
          banco: string
          chave_pix: string | null
          conta: string | null
          cpf_titular: string
          created_at: string | null
          id: string
          principal: boolean | null
          tipo_chave_pix: string | null
          tipo_conta: string | null
          titular: string
          updated_at: string | null
          usuario_id: string
          verificada: boolean | null
        }
        Insert: {
          agencia?: string | null
          banco: string
          chave_pix?: string | null
          conta?: string | null
          cpf_titular: string
          created_at?: string | null
          id?: string
          principal?: boolean | null
          tipo_chave_pix?: string | null
          tipo_conta?: string | null
          titular: string
          updated_at?: string | null
          usuario_id: string
          verificada?: boolean | null
        }
        Update: {
          agencia?: string | null
          banco?: string
          chave_pix?: string | null
          conta?: string | null
          cpf_titular?: string
          created_at?: string | null
          id?: string
          principal?: boolean | null
          tipo_chave_pix?: string | null
          tipo_conta?: string | null
          titular?: string
          updated_at?: string | null
          usuario_id?: string
          verificada?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "contas_bancarias_usuario_id_fkey"
            columns: ["usuario_id"]
            isOneToOne: false
            referencedRelation: "usuarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contas_bancarias_usuario_id_fkey"
            columns: ["usuario_id"]
            isOneToOne: false
            referencedRelation: "vw_dashboard_usuario"
            referencedColumns: ["id"]
          },
        ]
      }
      documentos: {
        Row: {
          caminho_arquivo: string
          created_at: string | null
          hash_arquivo: string | null
          id: string
          mime_type: string | null
          nome_arquivo: string
          observacoes: string | null
          projeto_id: string | null
          status: string | null
          tamanho_bytes: number | null
          tipo: string
          updated_at: string | null
          usuario_id: string | null
        }
        Insert: {
          caminho_arquivo: string
          created_at?: string | null
          hash_arquivo?: string | null
          id?: string
          mime_type?: string | null
          nome_arquivo: string
          observacoes?: string | null
          projeto_id?: string | null
          status?: string | null
          tamanho_bytes?: number | null
          tipo: string
          updated_at?: string | null
          usuario_id?: string | null
        }
        Update: {
          caminho_arquivo?: string
          created_at?: string | null
          hash_arquivo?: string | null
          id?: string
          mime_type?: string | null
          nome_arquivo?: string
          observacoes?: string | null
          projeto_id?: string | null
          status?: string | null
          tamanho_bytes?: number | null
          tipo?: string
          updated_at?: string | null
          usuario_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "documentos_projeto_id_fkey"
            columns: ["projeto_id"]
            isOneToOne: false
            referencedRelation: "projetos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "documentos_projeto_id_fkey"
            columns: ["projeto_id"]
            isOneToOne: false
            referencedRelation: "vw_projetos_estatisticas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "documentos_usuario_id_fkey"
            columns: ["usuario_id"]
            isOneToOne: false
            referencedRelation: "usuarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "documentos_usuario_id_fkey"
            columns: ["usuario_id"]
            isOneToOne: false
            referencedRelation: "vw_dashboard_usuario"
            referencedColumns: ["id"]
          },
        ]
      }
      investimentos: {
        Row: {
          created_at: string | null
          data_investimento: string | null
          data_vencimento: string | null
          id: string
          lucro_obtido: number | null
          percentual_projeto: number | null
          projeto_id: string
          rendimentos: Json | null
          status: string | null
          updated_at: string | null
          usuario_id: string
          valor_investido: number
        }
        Insert: {
          created_at?: string | null
          data_investimento?: string | null
          data_vencimento?: string | null
          id?: string
          lucro_obtido?: number | null
          percentual_projeto?: number | null
          projeto_id: string
          rendimentos?: Json | null
          status?: string | null
          updated_at?: string | null
          usuario_id: string
          valor_investido: number
        }
        Update: {
          created_at?: string | null
          data_investimento?: string | null
          data_vencimento?: string | null
          id?: string
          lucro_obtido?: number | null
          percentual_projeto?: number | null
          projeto_id?: string
          rendimentos?: Json | null
          status?: string | null
          updated_at?: string | null
          usuario_id?: string
          valor_investido?: number
        }
        Relationships: [
          {
            foreignKeyName: "investimentos_projeto_id_fkey"
            columns: ["projeto_id"]
            isOneToOne: false
            referencedRelation: "projetos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "investimentos_projeto_id_fkey"
            columns: ["projeto_id"]
            isOneToOne: false
            referencedRelation: "vw_projetos_estatisticas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "investimentos_usuario_id_fkey"
            columns: ["usuario_id"]
            isOneToOne: false
            referencedRelation: "usuarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "investimentos_usuario_id_fkey"
            columns: ["usuario_id"]
            isOneToOne: false
            referencedRelation: "vw_dashboard_usuario"
            referencedColumns: ["id"]
          },
        ]
      }
      investments: {
        Row: {
          actual_return: number | null
          amount: number
          created_at: string | null
          expected_return: number
          id: string
          invested_at: string | null
          project_id: string
          return_date: string | null
          status: string | null
          transaction_id: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          actual_return?: number | null
          amount: number
          created_at?: string | null
          expected_return: number
          id?: string
          invested_at?: string | null
          project_id: string
          return_date?: string | null
          status?: string | null
          transaction_id?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          actual_return?: number | null
          amount?: number
          created_at?: string | null
          expected_return?: number
          id?: string
          invested_at?: string | null
          project_id?: string
          return_date?: string | null
          status?: string | null
          transaction_id?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "investments_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "investments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      logs_auditoria: {
        Row: {
          acao: string
          created_at: string | null
          dados_anteriores: Json | null
          dados_novos: Json | null
          id: string
          ip_address: unknown | null
          registro_id: string | null
          tabela: string | null
          user_agent: string | null
          usuario_id: string | null
        }
        Insert: {
          acao: string
          created_at?: string | null
          dados_anteriores?: Json | null
          dados_novos?: Json | null
          id?: string
          ip_address?: unknown | null
          registro_id?: string | null
          tabela?: string | null
          user_agent?: string | null
          usuario_id?: string | null
        }
        Update: {
          acao?: string
          created_at?: string | null
          dados_anteriores?: Json | null
          dados_novos?: Json | null
          id?: string
          ip_address?: unknown | null
          registro_id?: string | null
          tabela?: string | null
          user_agent?: string | null
          usuario_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "logs_auditoria_usuario_id_fkey"
            columns: ["usuario_id"]
            isOneToOne: false
            referencedRelation: "usuarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "logs_auditoria_usuario_id_fkey"
            columns: ["usuario_id"]
            isOneToOne: false
            referencedRelation: "vw_dashboard_usuario"
            referencedColumns: ["id"]
          },
        ]
      }
      notificacoes: {
        Row: {
          created_at: string | null
          dados_extras: Json | null
          data_leitura: string | null
          id: string
          lida: boolean | null
          link: string | null
          mensagem: string
          tipo: string | null
          titulo: string
          usuario_id: string
        }
        Insert: {
          created_at?: string | null
          dados_extras?: Json | null
          data_leitura?: string | null
          id?: string
          lida?: boolean | null
          link?: string | null
          mensagem: string
          tipo?: string | null
          titulo: string
          usuario_id: string
        }
        Update: {
          created_at?: string | null
          dados_extras?: Json | null
          data_leitura?: string | null
          id?: string
          lida?: boolean | null
          link?: string | null
          mensagem?: string
          tipo?: string | null
          titulo?: string
          usuario_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notificacoes_usuario_id_fkey"
            columns: ["usuario_id"]
            isOneToOne: false
            referencedRelation: "usuarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notificacoes_usuario_id_fkey"
            columns: ["usuario_id"]
            isOneToOne: false
            referencedRelation: "vw_dashboard_usuario"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          category: string
          collected_amount: number | null
          created_at: string | null
          description: string
          documents: string[] | null
          duration_months: number
          end_date: string | null
          expected_return: number
          features: string[] | null
          id: string
          image_url: string
          location: string
          min_investment: number
          name: string
          risk_level: string
          start_date: string | null
          status: string | null
          target_amount: number
          updated_at: string | null
        }
        Insert: {
          category: string
          collected_amount?: number | null
          created_at?: string | null
          description: string
          documents?: string[] | null
          duration_months: number
          end_date?: string | null
          expected_return: number
          features?: string[] | null
          id?: string
          image_url: string
          location: string
          min_investment: number
          name: string
          risk_level: string
          start_date?: string | null
          status?: string | null
          target_amount: number
          updated_at?: string | null
        }
        Update: {
          category?: string
          collected_amount?: number | null
          created_at?: string | null
          description?: string
          documents?: string[] | null
          duration_months?: number
          end_date?: string | null
          expected_return?: number
          features?: string[] | null
          id?: string
          image_url?: string
          location?: string
          min_investment?: number
          name?: string
          risk_level?: string
          start_date?: string | null
          status?: string | null
          target_amount?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      projetos: {
        Row: {
          amortizacao: string | null
          categoria: string | null
          correcao: string | null
          created_at: string | null
          data_fechamento: string | null
          descricao: string | null
          detalhes: Json | null
          documentos: Json | null
          id: string
          imagem_url: string | null
          juros: number | null
          localizacao: string | null
          nome: string
          pagamento: string | null
          prazo: string | null
          rentabilidade: string | null
          rentabilidade_numerica: number | null
          resumo: string | null
          risco: string | null
          setor: string | null
          status: string | null
          tempo_meses: number | null
          updated_at: string | null
          valor_captado: number | null
          valor_meta: number
        }
        Insert: {
          amortizacao?: string | null
          categoria?: string | null
          correcao?: string | null
          created_at?: string | null
          data_fechamento?: string | null
          descricao?: string | null
          detalhes?: Json | null
          documentos?: Json | null
          id?: string
          imagem_url?: string | null
          juros?: number | null
          localizacao?: string | null
          nome: string
          pagamento?: string | null
          prazo?: string | null
          rentabilidade?: string | null
          rentabilidade_numerica?: number | null
          resumo?: string | null
          risco?: string | null
          setor?: string | null
          status?: string | null
          tempo_meses?: number | null
          updated_at?: string | null
          valor_captado?: number | null
          valor_meta: number
        }
        Update: {
          amortizacao?: string | null
          categoria?: string | null
          correcao?: string | null
          created_at?: string | null
          data_fechamento?: string | null
          descricao?: string | null
          detalhes?: Json | null
          documentos?: Json | null
          id?: string
          imagem_url?: string | null
          juros?: number | null
          localizacao?: string | null
          nome?: string
          pagamento?: string | null
          prazo?: string | null
          rentabilidade?: string | null
          rentabilidade_numerica?: number | null
          resumo?: string | null
          risco?: string | null
          setor?: string | null
          status?: string | null
          tempo_meses?: number | null
          updated_at?: string | null
          valor_captado?: number | null
          valor_meta?: number
        }
        Relationships: []
      }
      rendimentos: {
        Row: {
          created_at: string | null
          data_pagamento: string | null
          data_referencia: string
          id: string
          investimento_id: string
          observacoes: string | null
          percentual: number | null
          status: string | null
          tipo: string | null
          valor: number
        }
        Insert: {
          created_at?: string | null
          data_pagamento?: string | null
          data_referencia: string
          id?: string
          investimento_id: string
          observacoes?: string | null
          percentual?: number | null
          status?: string | null
          tipo?: string | null
          valor: number
        }
        Update: {
          created_at?: string | null
          data_pagamento?: string | null
          data_referencia?: string
          id?: string
          investimento_id?: string
          observacoes?: string | null
          percentual?: number | null
          status?: string | null
          tipo?: string | null
          valor?: number
        }
        Relationships: [
          {
            foreignKeyName: "rendimentos_investimento_id_fkey"
            columns: ["investimento_id"]
            isOneToOne: false
            referencedRelation: "investimentos"
            referencedColumns: ["id"]
          },
        ]
      }
      sessoes: {
        Row: {
          ativa: boolean | null
          created_at: string | null
          expires_at: string
          id: string
          ip_address: unknown | null
          token_hash: string
          user_agent: string | null
          usuario_id: string
        }
        Insert: {
          ativa?: boolean | null
          created_at?: string | null
          expires_at: string
          id?: string
          ip_address?: unknown | null
          token_hash: string
          user_agent?: string | null
          usuario_id: string
        }
        Update: {
          ativa?: boolean | null
          created_at?: string | null
          expires_at?: string
          id?: string
          ip_address?: unknown | null
          token_hash?: string
          user_agent?: string | null
          usuario_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "sessoes_usuario_id_fkey"
            columns: ["usuario_id"]
            isOneToOne: false
            referencedRelation: "usuarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sessoes_usuario_id_fkey"
            columns: ["usuario_id"]
            isOneToOne: false
            referencedRelation: "vw_dashboard_usuario"
            referencedColumns: ["id"]
          },
        ]
      }
      transacoes: {
        Row: {
          created_at: string | null
          dados_pagamento: Json | null
          descricao: string | null
          id: string
          investimento_id: string | null
          projeto_id: string | null
          referencia_externa: string | null
          status: string | null
          tipo: string
          updated_at: string | null
          usuario_id: string
          valor: number
        }
        Insert: {
          created_at?: string | null
          dados_pagamento?: Json | null
          descricao?: string | null
          id?: string
          investimento_id?: string | null
          projeto_id?: string | null
          referencia_externa?: string | null
          status?: string | null
          tipo: string
          updated_at?: string | null
          usuario_id: string
          valor: number
        }
        Update: {
          created_at?: string | null
          dados_pagamento?: Json | null
          descricao?: string | null
          id?: string
          investimento_id?: string | null
          projeto_id?: string | null
          referencia_externa?: string | null
          status?: string | null
          tipo?: string
          updated_at?: string | null
          usuario_id?: string
          valor?: number
        }
        Relationships: [
          {
            foreignKeyName: "transacoes_investimento_id_fkey"
            columns: ["investimento_id"]
            isOneToOne: false
            referencedRelation: "investimentos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transacoes_projeto_id_fkey"
            columns: ["projeto_id"]
            isOneToOne: false
            referencedRelation: "projetos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transacoes_projeto_id_fkey"
            columns: ["projeto_id"]
            isOneToOne: false
            referencedRelation: "vw_projetos_estatisticas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transacoes_usuario_id_fkey"
            columns: ["usuario_id"]
            isOneToOne: false
            referencedRelation: "usuarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transacoes_usuario_id_fkey"
            columns: ["usuario_id"]
            isOneToOne: false
            referencedRelation: "vw_dashboard_usuario"
            referencedColumns: ["id"]
          },
        ]
      }
      transactions: {
        Row: {
          amount: number
          created_at: string | null
          description: string | null
          external_id: string | null
          id: string
          investment_id: string | null
          payment_method: string | null
          status: string | null
          type: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string | null
          description?: string | null
          external_id?: string | null
          id?: string
          investment_id?: string | null
          payment_method?: string | null
          status?: string | null
          type: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string | null
          description?: string | null
          external_id?: string | null
          id?: string
          investment_id?: string | null
          payment_method?: string | null
          status?: string | null
          type?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "transactions_investment_id_fkey"
            columns: ["investment_id"]
            isOneToOne: false
            referencedRelation: "investments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          address: string | null
          avatar_url: string | null
          birth_date: string | null
          city: string | null
          cpf: string | null
          created_at: string | null
          email: string
          full_name: string | null
          id: string
          investor_profile: string | null
          is_admin: boolean | null
          phone: string | null
          state: string | null
          total_invested: number | null
          total_returns: number | null
          updated_at: string | null
          zip_code: string | null
        }
        Insert: {
          address?: string | null
          avatar_url?: string | null
          birth_date?: string | null
          city?: string | null
          cpf?: string | null
          created_at?: string | null
          email: string
          full_name?: string | null
          id: string
          investor_profile?: string | null
          is_admin?: boolean | null
          phone?: string | null
          state?: string | null
          total_invested?: number | null
          total_returns?: number | null
          updated_at?: string | null
          zip_code?: string | null
        }
        Update: {
          address?: string | null
          avatar_url?: string | null
          birth_date?: string | null
          city?: string | null
          cpf?: string | null
          created_at?: string | null
          email?: string
          full_name?: string | null
          id?: string
          investor_profile?: string | null
          is_admin?: boolean | null
          phone?: string | null
          state?: string | null
          total_invested?: number | null
          total_returns?: number | null
          updated_at?: string | null
          zip_code?: string | null
        }
        Relationships: []
      }
      usuarios: {
        Row: {
          cpf: string
          created_at: string | null
          data_nascimento: string | null
          documentos: Json | null
          email: string
          email_verificado: boolean | null
          endereco: Json | null
          id: string
          lucro_total: number | null
          nivel: string | null
          nome: string
          saldo: number | null
          senha_hash: string
          status: string | null
          telefone: string | null
          telefone_verificado: boolean | null
          total_investido: number | null
          two_factor_enabled: boolean | null
          two_factor_secret: string | null
          ultimo_login: string | null
          updated_at: string | null
        }
        Insert: {
          cpf: string
          created_at?: string | null
          data_nascimento?: string | null
          documentos?: Json | null
          email: string
          email_verificado?: boolean | null
          endereco?: Json | null
          id?: string
          lucro_total?: number | null
          nivel?: string | null
          nome: string
          saldo?: number | null
          senha_hash: string
          status?: string | null
          telefone?: string | null
          telefone_verificado?: boolean | null
          total_investido?: number | null
          two_factor_enabled?: boolean | null
          two_factor_secret?: string | null
          ultimo_login?: string | null
          updated_at?: string | null
        }
        Update: {
          cpf?: string
          created_at?: string | null
          data_nascimento?: string | null
          documentos?: Json | null
          email?: string
          email_verificado?: boolean | null
          endereco?: Json | null
          id?: string
          lucro_total?: number | null
          nivel?: string | null
          nome?: string
          saldo?: number | null
          senha_hash?: string
          status?: string | null
          telefone?: string | null
          telefone_verificado?: boolean | null
          total_investido?: number | null
          two_factor_enabled?: boolean | null
          two_factor_secret?: string | null
          ultimo_login?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      vw_dashboard_usuario: {
        Row: {
          email: string | null
          id: string | null
          lucro_total: number | null
          lucro_total_obtido: number | null
          nivel: string | null
          nome: string | null
          saldo: number | null
          total_investido: number | null
          total_investimentos: number | null
          valor_total_investido: number | null
        }
        Relationships: []
      }
      vw_projetos_estatisticas: {
        Row: {
          amortizacao: string | null
          categoria: string | null
          correcao: string | null
          created_at: string | null
          data_fechamento: string | null
          descricao: string | null
          detalhes: Json | null
          documentos: Json | null
          id: string | null
          imagem_url: string | null
          juros: number | null
          localizacao: string | null
          nome: string | null
          pagamento: string | null
          percentual_captado: number | null
          prazo: string | null
          rentabilidade: string | null
          rentabilidade_numerica: number | null
          resumo: string | null
          risco: string | null
          setor: string | null
          status: string | null
          tempo_meses: number | null
          total_investidores: number | null
          updated_at: string | null
          valor_captado: number | null
          valor_captado_real: number | null
          valor_meta: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      atualizar_saldo_usuario: {
        Args: { p_usuario_id: string; p_valor: number; p_operacao: string }
        Returns: boolean
      }
      calcular_percentual_projeto: {
        Args: { p_valor_investido: number; p_projeto_id: string }
        Returns: number
      }
    }
    Enums: {
      [_ in never]: never
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
    Enums: {},
  },
} as const

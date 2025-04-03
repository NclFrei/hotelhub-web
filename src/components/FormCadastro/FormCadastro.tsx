"use client"

import type React from "react"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useState, type FormEvent } from "react"
import { registerUser } from "@/app/actions/user-actions"

export default function FormCadastro() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cpf: "",
    nomeHotel: "",
    cargo: "",
    senha: "",
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id === "nome" ? "name" : id === "empresa" ? "nomeHotel" : id]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(null)

    try {
      const result = await registerUser(formData)

      if (result.success) {
        setSuccess(result.message)
        setTimeout(() => {
          window.location.href = "/"
        }, 2000)
      } else {
        setError(result.message)
      }
    } catch (err) {
      setError("Ocorreu um erro ao processar sua solicitação. Tente novamente.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="p-6">
        <div className="flex items-center">
          <Link href="/" className="mr-2 inline-flex items-center text-sm text-gray-500 hover:text-gray-700">
            <ArrowLeft className="mr-1 h-4 w-4" />
            Voltar
          </Link>
        </div>
        <h3 className="text-xl font-semibold">Cadastro</h3>
        <p className="text-sm text-gray-500">Crie sua conta para gerenciar seus hotéis</p>
      </div>

      <div className="p-6 pt-0 space-y-4">
        {error && <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-md text-sm">{error}</div>}

        {success && (
          <div className="p-3 bg-green-50 border border-green-200 text-green-700 rounded-md text-sm">{success}</div>
        )}

        <div className="space-y-2">
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
            Nome
          </label>
          <input
            id="nome"
            type="text"
            placeholder="Seu nome"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="seu@email.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="cpf" className="block text-sm font-medium text-gray-700">
            CPF
          </label>
          <input
            id="cpf"
            type="text"
            placeholder="000.000.000-00"
            value={formData.cpf}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="empresa" className="block text-sm font-medium text-gray-700">
            Nome da Empresa/Hotel
          </label>
          <input
            id="empresa"
            type="text"
            placeholder="Nome da sua empresa ou hotel"
            value={formData.nomeHotel}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="cargo" className="block text-sm font-medium text-gray-700">
            Cargo
          </label>
          <select
            id="cargo"
            value={formData.cargo}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="" disabled>
              Selecione seu cargo
            </option>
            <option value="proprietario">Proprietário</option>
            <option value="gerente">Gerente</option>
            <option value="diretor">Diretor</option>
            <option value="administrador">Administrador</option>
            <option value="outro">Outro</option>
          </select>
        </div>

        <div className="h-px bg-gray-200 my-4"></div>

        <div className="space-y-2">
          <label htmlFor="senha" className="block text-sm font-medium text-gray-700">
            Senha
          </label>
          <input
            id="senha"
            type="password"
            placeholder="••••••••"
            value={formData.senha}
            onChange={handleChange}
            required
            minLength={8}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <p className="text-xs text-gray-500">
            A senha deve ter pelo menos 8 caracteres, incluindo letras, números e símbolos
          </p>
        </div>
      </div>

      <div className="flex flex-col space-y-4 p-6 pt-0">
        <button
          type="submit"
          disabled={loading}
          className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
            loading
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          }`}
        >
          {loading ? "Processando..." : "Criar Conta"}
        </button>
        <div className="text-center text-sm">
          Já tem uma conta?{" "}
          <Link href="/" className="text-blue-600 hover:underline">
            Faça login
          </Link>
        </div>
      </div>
    </form>
  )
}


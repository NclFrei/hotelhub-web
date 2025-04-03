import Link from "next/link"

export default function formLogin() {
    return (
        <div className="w-full">
      {/* Header */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-stone-950">Login</h3>
        <p className="text-sm text-gray-500">Acesse sua conta para gerenciar seus hotéis</p>
      </div>

      {/* Content */}
      <div className="p-6 pt-0 space-y-4">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-stone-950">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="seu@email.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium text-stone-950">
              Senha
            </label>
            <Link href="/recuperar-senha" className="text-xs text-stone-950 hover:underline">
              Esqueceu a senha?
            </Link>
          </div>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>


      </div>

      <div className="flex flex-col space-y-4 p-6 pt-0">
        <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-stone-950 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Entrar
        </button>
        <div className="text-center text-sm">
          Não tem uma conta?{" "}
          <Link href="/cadastro" className="text-stone-950 hover:underline">
            Cadastre-se
          </Link>
        </div>
      </div>
    </div>
    )
}
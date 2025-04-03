import Link from "next/link"
import { Hotel } from "lucide-react"
import FormCadastro from "@/components/FormCadastro/FormCadastro"

export default function CadastroPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 flex flex-col items-center text-center">
        <div className="flex items-center gap-2 text-stone-950">
            <Hotel className="h-8 w-8" />
            <span className="text-2xl font-bold">HotelHub</span>
          </div>
          <h1 className="mt-3 text-2xl font-bold text-stone-950">Crie sua conta</h1>
          <p className="text-sm text-gray-500">Preencha os dados abaixo para começar a usar o sistema</p>
        </div>

        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
          <FormCadastro />
        </div>

        <div className="mt-6 text-center text-xs text-gray-500">
          <p>© 2023 HotelHub. Todos os direitos reservados.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link href="/termos" className="hover:underline">
              Termos de Uso
            </Link>
            <Link href="/privacidade" className="hover:underline">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
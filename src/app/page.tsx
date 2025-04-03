import FormLogin from '@/components/FormLogin/formLogin';
import { Hotel } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 text-stone-950">
            <Hotel className="h-8 w-8" />
            <span className="text-2xl font-bold">HotelHub</span>
          </div>
          <h1 className="mt-3 text-2xl font-bold text-stone-950">Bem-vindo de volta</h1>
          <p className="text-sm text-gray-500">Entre com suas credenciais para acessar o sistema</p>
        </div>

        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
          <FormLogin />
        </div>


      </div>
    </div>
  );
}

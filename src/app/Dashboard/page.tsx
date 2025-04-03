import Link from "next/link";
import { Hotel, DollarSign, BedDouble, CalendarRange, ArrowUpRight, ArrowDownRight, LogOut } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <div className="flex items-center gap-2 text-blue-600">
                <Hotel className="h-6 w-6" />
                <span className="text-xl font-bold">HotelHub</span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="hidden md:flex items-center mr-4">
                <span className="text-sm text-gray-700">Gerente de Hotel</span>
              </div>
              <Link 
                href="/login" 
                className="inline-flex items-center justify-center rounded-md text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                <LogOut className="h-5 w-5" />
                <span className="ml-2">Sair</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-sm text-gray-500">Visão geral do seu hotel</p>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Receita Total */}
          <div className="bg-white overflow-hidden rounded-lg border border-gray-200 shadow-sm">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-blue-100 rounded-md p-3">
                  <DollarSign className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Receita Total
                    </dt>
                    <dd>
                      <div className="text-lg font-bold text-gray-900">
                        R$ 45.231,89
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <div className="flex items-center text-green-500">
                  <ArrowUpRight className="h-4 w-4 mr-1 flex-shrink-0" />
                  <span>+20.1% em relação ao mês anterior</span>
                </div>
              </div>
            </div>
          </div>

          {/* Taxa de Ocupação */}
          <div className="bg-white overflow-hidden rounded-lg border border-gray-200 shadow-sm">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-green-100 rounded-md p-3">
                  <BedDouble className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Taxa de Ocupação
                    </dt>
                    <dd>
                      <div className="text-lg font-bold text-gray-900">
                        78.3%
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <div className="flex items-center text-green-500">
                  <ArrowUpRight className="h-4 w-4 mr-1 flex-shrink-0" />
                  <span>+5.2% em relação ao mês anterior</span>
                </div>
              </div>
            </div>
          </div>

          {/* Novas Reservas */}
          <div className="bg-white overflow-hidden rounded-lg border border-gray-200 shadow-sm">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-amber-100 rounded-md p-3">
                  <CalendarRange className="h-6 w-6 text-amber-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Novas Reservas
                    </dt>
                    <dd>
                      <div className="text-lg font-bold text-gray-900">
                        342
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <div className="flex items-center text-red-500">
                  <ArrowDownRight className="h-4 w-4 mr-1 flex-shrink-0" />
                  <span>-3.1% em relação ao mês anterior</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-xs text-gray-500">
          <p>© 2023 HotelHub. Todos os direitos reservados.</p>
        </div>
      </main>
    </div>
  );
}

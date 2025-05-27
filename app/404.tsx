import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-gray-900">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700">Página não encontrada</h2>
        <p className="text-gray-600 max-w-md">A página que você está procurando não existe ou foi movida.</p>
        <div className="space-x-4">
          <Button asChild>
            <Link href="/pt/">Voltar ao Início</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/en/">Go to English</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

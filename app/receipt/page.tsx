import OrderForm from "@/components/order-form"

export default function ReceiptPage() {
  return (
    <main className="min-h-screen flex flex-col p-4 md:py-8 md:px-8 lg:py-12 lg:px-24 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-5xl mx-auto flex-grow w-full pb-16 md:pb-0">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-emerald-950">Receipt Generator</h1>
          <p className="text-emerald-600/80 text-sm mt-1">Create professional payment receipts instantly.</p>
        </div>
        <OrderForm mode="receipt" />
      </div>
      <footer className="mt-8 mb-16 md:mb-0 text-center text-slate-500 text-sm">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://github.com/abhinhere"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-800 transition-colors underline underline-offset-2"
          >
            abhin-madewebs
          </a>
          . All rights reserved.
        </p>
      </footer>
    </main>
  )
}

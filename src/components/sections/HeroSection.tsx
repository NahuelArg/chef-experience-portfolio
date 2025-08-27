import { useState } from "react"

const faqs = [
  {
    q: "¿Por qué usan reservas pre-pagadas?",
    a: "Porque nos permite anticipar quién viene y ofrecer la mejor experiencia posible.",
  },
  {
    q: "¿Puedo pedir reembolso?",
    a: "No, las reservas no son reembolsables, pero podés transferirla a otra persona.",
  },
  {
    q: "¿Aceptan niños?",
    a: "Sí, pero no modificamos el menú salvo por restricciones de alergias.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="max-w-3xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">FAQ</h2>
      <div className="space-y-4">
        {faqs.map((item, i) => (
          <div
            key={i}
            className="border border-gray-300 rounded-lg overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center px-4 py-3 text-left font-semibold hover:bg-gray-100"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              {item.q}
              <span>{openIndex === i ? "−" : "+"}</span>
            </button>
            {openIndex === i && (
              <div className="px-4 py-3 bg-gray-50 text-gray-700">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

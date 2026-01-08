import IEstimate from "@/type/estimate"



function MyEmail( value: IEstimate) {
    return (
        <div className="bg-black text-orange-500 p-6 rounded-lg shadow-lg max-w-md mx-auto font-sans">
            <h1 className="text-3xl font-extrabold mb-4">Bonjour!</h1>
            <h2 className="text-xl font-semibold mb-2">{value.name} a fait une demande de devis</h2>
            <h3 className="text-lg mb-4">Voici son message</h3>
            <p className="mb-6 whitespace-pre-line text-white">{value.message}</p>

            {value.whatsapp && (
                <a
                    href={`https://wa.me/33${value.phoneNumber.replace(/^0/, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-5 py-3 bg-orange-600 text-black font-bold rounded-lg hover:bg-orange-500 transition"
                >
                    Cliquez ici pour discuter sur WhatsApp
                </a>
            )}
        </div>
    )
}

export default MyEmail
import IEstimate from "@/type/estimate"



function MyEmail(value: IEstimate) {
    return (
        <>
            <div style={{ backgroundColor: 'black', color: 'orange', padding: '24px', borderRadius: '8px' }}>
                <h1>Bonjour !</h1>
                <h2>
                    <span className="text-blue-600 font-black">{value.name}</span> a fait une demande de devis pour {value.service}</h2>
                <p>Message: " {value.message} "</p>

                {value.whatsapp && value.phoneNumber && (
                    <a
                        href={`https://wa.me/33${value.phoneNumber.replace(/^0/, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-block',
                            padding: '12px 24px',
                            backgroundColor: 'orange',
                            color: 'black',
                            fontWeight: 'bold',
                            borderRadius: '8px',
                        }}
                    >
                        Cliquez ici pour discuter sur WhatsApp
                    </a>
                )}
            </div>
            <div style={{ marginTop: '16px', textAlign: 'center' }}>
                <img
                    src="https://gvs3d.fr/logo.webp"
                    width={600}
                    height={400}
                    alt="Logo"
                    style={{ display: 'block', margin: '0 auto' }}
                />
            </div>
        </>
    );
}

export default MyEmail;
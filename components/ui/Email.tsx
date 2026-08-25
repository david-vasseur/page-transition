import { IEstimate } from "@/schema/estimateSchema";


function MyEmail(value: IEstimate) {
    return (
        <>
            <div style={{ backgroundColor: 'black', color: 'white', padding: '24px', borderRadius: '8px' }}>
                <h1>Bonjour !</h1>
                <h2>
                    <span style={{ color: '#2563EB', fontWeight: '900' }}>{value.name}</span> a fait une demande de devis pour <span style={{ color: '#2563EB', fontWeight: '800' }}>{value.service}</span></h2>
                <p style={{ marginBottom: '16px', fontSize: '16px' }}>
                    <strong>Message:</strong> "{value.message}"
                </p>

                <div style={{ marginBottom: '16px', fontSize: '16px' }}>
                    <strong>Coordonnées:</strong>
                    <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
                        <li>Nom: {value.name}</li>
                        <li>Téléphone: {value.phoneNumber}</li>
                        <li>Email: {value.email?.toLowerCase()}</li>
                        {value.address && (
                            <li>Adresse: {value.address}</li>
                        )}
                        {value.postalCode && (
                            <li>Code postal: {value.postalCode}</li>
                        )}
                    </ul>
                </div>

                {value.whatsapp && value.phoneNumber && (
                    <a
                        href={`https://wa.me/33${value.phoneNumber.replace(/^0/, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-block',
                            padding: '12px 24px',
                            backgroundColor: '#ea580c',
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